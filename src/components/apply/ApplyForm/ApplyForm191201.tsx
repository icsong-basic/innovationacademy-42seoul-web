import React from 'react';
import Logo2x from '../../../assets/images/img-42-seoul@2x.png';

export default function ApplyForm191115() {
    return (
        <div className="max-width-section apply-form-191201">
            <div className="center">
                <img src={Logo2x} alt="logo" className="logo" /><br />
                42 SEOUL, 잠시 쉬어갑니다.<br />
                <br />
                42 SEOUL이 11월 한 달간의 모집 기간을 마무리하고,<br />
                보다 안정적인 서비스 제공을 위해 시스템을 점검합니다.<br />
                <br />
                시스템 점검 기간 동안에는 아래의 서비스 이용이 중지됩니다.<br />
                이용에 불편을 드려 죄송합니다.<br />
                <br />
                <ul className="bar">
                    <li>이용 제한 서비스: 42 SEOUL 가입, 온라인 테스트 불가 </li>
                    <li>작업 일시 : 2019년 12월 1일(일) 00:00 ~ 2019년 12월 5일(목) 24:00 (5일간) </li>
                </ul>
                <br />
                <ul className="star">
                    <li>12월 6일(금)부터 42 SEOUL 온라인 테스트가 상시 오픈됩니다.</li>
                    <li>12월 6일(금) 이후 온라인 테스트에 응시해 합격한 지원자는 2기, 3기 체크인 대기자 등록이 가능합니다.(4기 이후 일정 미정)</li>
                </ul>
            </div>
        </div>
    )
}