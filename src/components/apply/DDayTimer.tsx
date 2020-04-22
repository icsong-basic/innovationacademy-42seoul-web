import React, { useEffect, useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { History } from 'history'

const DDayTimer: React.FC<{ openDate: Date } & RouteComponentProps> = ({ openDate, history }) => {
    const [days, setdays] = useState(0)
    const [hours, sethours] = useState(0)
    const [mins, setmins] = useState(0)
    const [secs, setsecs] = useState(0)

    useEffect(() => {
        onTick()
        intervalObj = (window as Window).setInterval(onTick, 300)
        return () => {
            (window as Window).clearInterval(intervalObj)
        };
    }, [])

    const onTick = () => {
        let remain = openDate.valueOf() - Date.now();
        let days = 0,
            hours = 0,
            mins = 0,
            secs = 0
        if (remain >= 0) {
            days = Math.floor(remain / (24 * 60 * 60 * 1000))
            remain %= 24 * 60 * 60 * 1000
            hours = Math.floor(remain / (60 * 60 * 1000))
            remain %= 60 * 60 * 1000
            mins = Math.floor(remain / (60 * 1000))
            remain %= 60 * 1000
            secs = Math.floor(remain / 1000)
        }
        setdays(days);
        sethours(hours);
        setmins(mins);
        setsecs(secs);
    }

    return (
        <div className="dday-timer max-width-section">
            <div className="title"><span className="dday">D-day</span>11월 1일 낮 12시</div>
            <div className="timer">
                <div className="time-unit">{twoDigit(days)}<p>days</p></div>
                <Colon />
                <div className="time-unit">{twoDigit(hours)}<p>hours</p></div>
                <Colon />
                <div className="time-unit">{twoDigit(mins)}<p>mins</p></div>
                <Colon />
                <div className="time-unit">{twoDigit(secs)}<p>secs</p></div>
            </div>
            <a className="link-btn mint" onClick={() => { history.goBack() }}>뒤로 돌아가기</a>
        </div>
    )
}

export default withRouter(DDayTimer)

function Colon() {
    return <div className="colon"><span /><span /></div>
}


function twoDigit(n: number) {
    return n < 10 ? '0' + n : n;
}

let intervalObj: number;