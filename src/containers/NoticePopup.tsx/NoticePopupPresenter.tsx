import React from 'react'

interface Props {
    text: string,
    textAreaClassName?: string,
    onClose?: () => void,
    onClose1Day?: () => void
}

export default function NoticePopupPresenter({ onClose1Day, onClose, text, textAreaClassName = '' }: Props) {
    return (
        <div className="notice-popup">
            <div className={`text ${textAreaClassName}`} dangerouslySetInnerHTML={{ __html: text }} />
            <div className="buttons">
                <button className="black" onClick={() => { if (onClose1Day) onClose1Day(); }}>오늘 하루 보지 않기</button>
                <button onClick={() => { if (onClose) onClose(); }}>닫기</button>
            </div>
        </div>
    )
}
