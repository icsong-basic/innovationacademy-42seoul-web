import React from 'react';
import FacebookIcon from '../assets/images/sns-facebook-white.svg';
import GithubIcon from '../assets/images/sns-github-white.svg';
import YoutubeIcon from '../assets/images/sns-youtube-white.svg';

import FacebookBlackIcon from '../assets/images/mobile-sns-facebook-black.svg';
import GithubBlackIcon from '../assets/images/mobile-sns-github-black.svg';
import YoutubeBlackIcon from '../assets/images/mobile-sns-youtube-black.svg';
import constants from '../constants';

interface FooterProps {
    style?: React.CSSProperties
    className?: string,
    invert?: boolean
}

const Footer = ({ style, className, invert = false }: FooterProps) => {
    return <footer style={style} className={`${className || ""} ${invert ? 'invert' : ''}`}>
        <div className="max-width-section">
            <div className="box">
                <strong>42 SEOUL</strong>
                <span className="strong">Innovation Academy</span>
            </div>
            <div className="right">
                <div className="box">
                    <strong>CONTACT</strong>
                    <span>
                        qna@innovationacademy.kr <br />
                        교육운영팀 : 02)6177-2127
                    </span>
                </div>
                <div className="box location">
                    <strong>LOCATION</strong>
                    <span>
                        416, Gaepo-ro, Gangnam-gu,<br />
                        Seoul, Republic of Korea
                    </span>
                </div>
                <div className="box sns">
                    <a href={constants.youtubeUrl} target="_blank" rel="noopener noreferrer"><img src={invert ? YoutubeBlackIcon : YoutubeIcon} alt="youtube" /></a>
                    <a href={constants.facebookUrl} target="_blank" rel="noopener noreferrer"><img src={invert ? FacebookBlackIcon : FacebookIcon} alt="facebook" /></a>
                    <a href={constants.githubUrl} target="_blank" rel="noopener noreferrer"><img src={invert ? GithubBlackIcon : GithubIcon} alt="github" /></a>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;