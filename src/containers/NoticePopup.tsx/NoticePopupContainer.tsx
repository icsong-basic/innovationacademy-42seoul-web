import React, { useState, useEffect } from 'react'
import NoticePopupPresenter from './NoticePopupPresenter'
import Cookie from 'js-cookie';
import update from 'immutability-helper';
import apis from '../../apis';
import fullPageManager from '../../fullPageManager';

interface Props {

}
const NoticePopup1DayCloseCookieKeyPrefix = 'notice_popup_close_1d_';
const boardId = 7;

interface NoticesStateType {
    id: number,
    contents: string
}

export default function NoticePopupContainer() {
    const [notices, setNotices] = useState<(NoticesStateType)[]>([]);

    useEffect(() => {
        apis.getBoardPosts(boardId).then(async ({ data }) => {
            if (data && data.content) {
                const notices = await Promise.all(data.content.filter(
                    (post: any) => {
                        if (Cookie.get(NoticePopup1DayCloseCookieKeyPrefix + post.id) === 'true') {
                            return false;
                        }
                        return true;
                    }).map(
                        async (post: any) => {
                            try {
                                const { data } = await apis.getPost(boardId, post.id)
                                return {
                                    id: data.id as number,
                                    contents: (data.contents as string)
                                } || null;
                            } catch (error) {
                                console.error(error)
                            }
                            return null;
                        }
                    ))
                setNotices(
                    (notices.filter(notice => notice) as NoticesStateType[]).reverse()
                )
            }
        });
        return () => { };
    }, [])

    useEffect(() => {
        fullPageManager.setScrolling(notices.length <= 0);
        return () => {
            fullPageManager.setScrolling(true);
        };
    }, [notices])

    const closePopup = (id: number) => {
        const index = notices.findIndex(notice => notice.id === id);
        if (index >= 0) {
            setNotices(update(notices, { $splice: [[index, 1]] }));
        }
    }

    const closePopup1Day = (id: number) => {
        Cookie.set(NoticePopup1DayCloseCookieKeyPrefix + id, 'true', { expires: 1 });
        closePopup(id);
    }

    return notices && notices.length > 0 ?
        <>
            {
                notices.map((notice, key) => {
                    return <NoticePopupPresenter
                        key={key}
                        textAreaClassName="quill-content"
                        text={notice.contents}
                        onClose={() => { closePopup(notice.id) }}
                        onClose1Day={() => { closePopup1Day(notice.id) }}
                    />
                })
            }
        </>
        : null


}