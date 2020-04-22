import React from 'react'

export default function ApplyTimeline() {
    return (
        <div className="timeline">
            <div>
                <p className="period color-mint">19.11.1~11.30</p>
                <p className="description">온라인 테스트
                            </p>
                <div className="right-arrow" />
            </div>
            <div>
                <p className="period color-mint">12.6~7일 중</p>
                <p className="description">
                    체크인 미팅
                    </p>
                <div className="right-arrow" />
            </div>
            <div>
                <p className="period">12.20</p>
                <p className="description">개소식</p>
                <div className="right-arrow" />
            </div>
            <div>
                <p className="period">12월 말~1월</p>
                <p className="description">오리엔테이션,<br />창의캠프(2박 3일)</p>
                <div className="right-arrow" />
            </div>
            <div>
                <p className="period">1.20~2.15</p>
                <p className="description">1개월<br />집중교육<br />(La Piscine)</p>
                <div className="right-arrow" />
            </div>
            <div>
                <p className="period">2월 말</p>
                <p className="description">'42 SEOUL'<br />본교육<br />과정</p>
            </div>
        </div>

    )
}
