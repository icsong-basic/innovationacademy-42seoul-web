import React, { useState } from 'react'
import YouTube from 'react-youtube';
import Logo from '../assets/images/img-about-42-seoul@2x.png'

export default function About() {
    const [player, setPlayer] = useState(null)
    const [showThumbnail, setShowThumbnail] = useState(true)
    return (
        <div className="about-page default-page-padding max-width-section">
            <h1>About 42 SEOUL</h1>
            <div className="player">
                <YouTube
                    containerClassName="youtube-player"
                    videoId={"gaYODx3_7VM"}
                    onReady={(e) => { setPlayer(e.target) }}
                    onStateChange={e => {
                        if (e.data === 0) {
                            setShowThumbnail(true)
                        }
                    }}
                />
                {
                    showThumbnail && <div className="thumbnail">
                        <div className="play-btn" onClick={(e) => {
                            if (player) {
                                (player as any).playVideo();
                                setShowThumbnail(false)
                            }
                        }} />
                    </div>
                }
            </div>
            <div className="description">
                <div className="left">
                    <p>
                        42 SEOUL은 이노베이션 아카데미의<br />
                        소프트웨어 교육프로그램입니다.
                    </p>
                    <img src={Logo} alt="" />
                </div>
                <div className="right">
                    {
                        descriptionTexts.map((item, key) => {
                            return <p key={key} dangerouslySetInnerHTML={{ __html: item.join('<br>') }} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const descriptionTexts = [
    ["우리는 세상 모든 곳에 소프트웨어가 사용되는 시대에 살고 있습니다. 생활과 관련된 분야, 경제 활동과 관련된 분야, 휴식과 여가에 관련된 분야 등등 사회 모든 분야에서 소프트웨어가 사용되고 있습니다."],

    ["우리의 삶과 밀접한 관계를 맺고 있는 소프트웨어는 매우 빠르게 변화하고 발전합니다.",
        "지금, 이 순간에도 전 세계 곳곳에서 새로운 아이디어와 기술이 등장하고 있습니다."],

    ["소프트웨어 개발자들은 변화와 발전의 속도에 맞춰 성장하기 위해 부단한 노력을 기울이고 있습니다.",
        "자신의 지식과 기술을 오픈소스로 공개하고, 동료의 성장을 위해 본인의 경험을 공유합니다.",
        "함께 성장하기 위해 경쟁이 아닌 소통과 협업을 합니다."],

    ["42 SEOUL은 단순 지식을 가르치는 곳이 아닙니다. 소프트웨어에 대한 경험을 나누는 방법, 멋진 동료와",
        "협업하는 방법, 누군가를 위해 본인의 경험을 공유하는 방법을 배웁니다. 그리고 배우는 방법을 배웁니다."],

    ["최고의 소프트웨어 개발자로 성장할 수 있는 곳, 최고의 동료와 함께 성장할 수 있는 곳, 바로 42 SEOUL입니다."]
]