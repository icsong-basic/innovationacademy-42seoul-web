import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import ReactFullpage from '@fullpage/react-fullpage';
import ArrowDown from '../assets/images/arrow-down.svg';
import Logo from '../assets/images/img-42-seoul@2x.png';
import { Link } from 'react-router-dom'
import { AppBarGlobalConfig } from '../components/AppBar';
import fullPageManager from '../fullPageManager';
const footerStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
};
const Home = () => {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const navElement = document.getElementById('fp-nav');
        const arrowElement = document.getElementById('home-scroll-arrow');
        if (index === 4) {
            navElement.classList.add('invert')
            arrowElement.classList.add('up')
            AppBarGlobalConfig.setColor("invert")
        } else {
            navElement.classList.remove('invert')
            arrowElement.classList.remove('up')
            AppBarGlobalConfig.setColor("default")
        }
        return () => {
        };
    }, [index])

    useEffect(() => {
        return () => { AppBarGlobalConfig.setColor("default") };
    }, [])

    return <><ReactFullpage
        onLeave={(origin, destination, direction) => {
            setIndex(destination.index)
        }}
        navigation
        licenseKey={'F215BE00-37AE4BE2-B7C2CD41-46D35EEC'}
        scrollingSpeed={1000}
        className="home"
        afterLoad={(origin, destination, direction) => {
            if (document.getElementById('notice-popup')) {
                fullPageManager.setScrolling(false);
            }
        }}
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section section1">
                        <div className="container">
                            <img src={Logo} alt="logo" />
                            <h1>42 SEOUL은<br className="only-mobile" /> 그동안 없었던<br className="only-pc" /> 새로운<br className="only-mobile" /> 소프트웨어 교육프로그램입니다.
                            </h1>
                            <div className="btns">
                                <Link className="link-btn" to="/admission">선발개요 보기</Link>
                                <Link to="/apply" className="link-btn mint">지금 지원하기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="section section2">
                        <div className="container">
                            <h2>42 SEOUL은<br className="only-mobile" /> 열려있습니다.</h2>
                            <p>
                                우리는 당신의 스펙을 보지 않습니다.<br />
                                오직 최고의 소프트웨어 개발자로<br className="only-mobile" /> 성장하고자 하는 <br className="only-pc" />
                                “당신의 도전”만 봅니다.
                            </p>
                            <div className="btns">
                                <Link className="link-btn" to="/admission">선발개요 보기</Link>
                                <Link to="/apply" className="link-btn mint">지금 지원하기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="section section3">
                        <div className="container">
                            <h2>42 SEOUL은<br className="only-mobile" /> 다릅니다.</h2>
                            <p>
                                진도와 과제를 따라가는 수동적인 방식이<br className="only-mobile" /> 아닌, <br className="only-pc" />
                                동료와 협업하고 토론하는 과정을 통해<br />
                                능동적으로 성장하는 방식을 지향합니다.
                            </p>
                            <div className="btns">
                                <Link className="link-btn" to="/admission">선발개요 보기</Link>
                                <Link to="/apply" className="link-btn mint">지금 지원하기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="section section4"><div className="container">
                        <h2>42 SEOUL은<br className="only-mobile" /> 믿고 있습니다.</h2>
                        <p>
                            최고의 교육은 최고의 환경과 동료로부터<br className="only-mobile" /> 나옵니다. <br className="only-pc" />우리는 최고의 소프트웨어 개발자로<br className="only-mobile" /> 함께 성장할<br className="only-pc" /> 당신의 도전을 기다립니다.
                        </p>
                        <div className="btns">
                            <Link className="link-btn" to="/admission">선발개요 보기</Link>
                            <Link to="/apply" className="link-btn mint">지금 지원하기</Link>
                        </div>
                    </div>
                    </div>
                    <div className="section section5"><div className="container">
                        <h2 className="color-white">42 SEOUL이<br className="only-mobile" /> 여러분을 돕겠습니다.</h2>
                        <p>
                            42 SEOUL은 여러분이 성장에만 집중할<br className="only-mobile" /> 수 있길 바랍니다. <br className="only-pc" />월 100만 원 상당의 교육<br className="only-mobile" />지원금, 최고의 멘토진, 그리고<br className="only-pc" /> 다양한<br className="only-mobile" /> 기업과의 현장 경험 등 최고의 환경을<br className="only-mobile" /> 준비했습니다.<br />
                            <br className="only-mobile" />
                            우리가 돕겠습니다.<br className="only-mobile" /> 여러분은 오직 성장에 집중하세요
                            </p>
                        <div className="btns">
                            <Link className="link-btn" to="/admission">선발개요 보기</Link>
                            <Link to="/apply" className="link-btn black">지금 지원하기</Link>
                        </div>
                    </div>
                        <Footer style={footerStyle} className="only-pc" />
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
        <img
            id="home-scroll-arrow"
            src={ArrowDown}
            alt="home-arrow"
            onClick={() => {
                if (index === 4) {
                    fullPageManager.moveTo(1);
                } else {
                    fullPageManager.moveSectionDown();
                }
            }}
        />
    </>
}

export default Home;