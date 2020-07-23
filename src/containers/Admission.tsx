import React from 'react'
import Section4Arrow from '../assets/images/img-admission-arrow.svg';
import { Link } from 'react-router-dom';
import TimeTrigger from '../components/TimeTrigger';
import utils from '../utils';

export default function Admission() {
    return (
        <div className="admission-page">
            <section className="section1 default-page-padding-top">
                <div className="max-width-section">
                    <h1>42 SEOUL 지원 안내</h1>
                    <p>42 SEOUL과 함께 도전하고 성장할 지원자를<br className="only-mobile" /> 기다리고 있습니다.<br className="only-pc" />
                        개발을 주도적으로 배우고 싶은<br className="only-mobile" /> 사람이라면 도전하세요.</p>
                    <h2>
                        선발 대상 및 접수 기간
                    </h2>
                    <div className="gradation-box">
                        <div className="line" />
                        <div>
                            <span>선발 대상</span>
                            <p>학생, 청년, 구직자 등<br className="only-pc" /> 교육 시작 시점 기준으로 민법상 성인 또는 고등하교 졸업자 이상의 학력자</p>
                        </div>
                        <div>
                            <span>선발 인원</span>
                            <p>본 교육과정 250여명</p>
                        </div>
                        <div>
                            <span>접수 및 온라인 테스트 기간</span>
                            <TimeTrigger
                                defaultComponent={() => (<p>2019년 11월 1일 ~ 상시</p>)}
                                triggers={
                                    (
                                        utils.isProduction() ?
                                            [{ datetime: (new Date(2019, 11, 1, 0, 0, 0)).valueOf(), component: () => { return <p>2019년 12월 6일(금)부터 상시</p> } }] :
                                            [
                                                { datetime: (new Date(2019, 10, 30, 12, 32, 0)).valueOf(), component: () => { return <p>2019년 12월 6일(금)부터 상시</p> } }
                                            ]
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section2">
                <div className="max-width-section">
                    <h2>선발 프로세스<div className="arrow" /></h2>
                    <div className="steps">
                        <div>
                            <span className="no">1</span>
                            <h3>온라인 신청 및 테스트</h3>
                            <ul>
                                <li>
                                    테스트는 코딩 테스트가 아닙니다. 기억력 테스트와 논리력 테스트로 구성되며, 소프트웨어 지식이 없어도 누구나 지원 가능합니다.
                                </li>
                                <TimeTrigger
                                    defaultComponent={() => (<li>11월에 한해 1회 온라인 테스트 응시가 가능합니다. 이후에는 중복 테스트 응시가 가능합니다.</li>)}
                                    triggers={
                                        (
                                            utils.isProduction() ?
                                                [{ datetime: (new Date(2019, 11, 1, 0, 0, 0)).valueOf(), component: () => { return null } }] :
                                                [
                                                    { datetime: (new Date(2019, 10, 30, 12, 32, 0)).valueOf(), component: () => { return null } }
                                                ]
                                        )
                                    }
                                />
                                {/* 1911201 삭제
                                
                                 */}
                                <li>
                                    온라인 테스트 응시 후에 48시간 이내에 결과 메일이 발송됩니다.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span className="no">2</span>
                            <h3>체크인 (Check-in)</h3>
                            <ul>
                                <li className="no-bullet">[체크인 등록]</li>
                                <li>
                                    온라인 테스트 통과 후 체크인 미팅 등록을 반드시 하셔야 합니다.
                                </li>
                            </ul>
                            <ul>
                                <li className="no-bullet">[체크인 미팅]</li>
                                <li>
                                    오프라인 체크인 미팅에서 본인 확인 및 신청 조건 해당 여부를 확인합니다.
                                </li>
                                <li>
                                    체크인 미팅 이후 1개월 집중교육과정 대상자를 확정합니다.
                                </li>
                            </ul>
                            <p>※ 체크인 미팅은 참석 신청을 한 사람에 한 해 정원 내 선착순으로 접수를 마감합니다. </p>
                        </div>
                        <div>
                            <span className="no">3</span>
                            <h3>1개월 집중교육</h3>
                            <ul>
                                <li>
                                    1개월 집중교육(La Piscine) 과정을 통해 본 교육 과정 인원을 최종 선발합니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="gray">*해당 일정 및 시행횟수는 지원 인원에 따라 조정 예정</p>
                </div>
            </section>
            {/* <section className="section3">
                <div className="max-width-section">
                    <h2>선발 일정</h2>
                    <ApplyTimeline />
                    <p className="gray">*지원 인원에 따라 변경될 수 있습니다</p>
                </div>
            </section> */}
            <section className="section4">
                <div className="max-width-section">
                    <img src={Section4Arrow} className="arrow" alt="arrow" />
                    <h3>최고의 교육은<br className="only-mobile" /> 최고의 동료로부터 나옵니다.<br />
                        최고의 소프트웨어 개발자로 함께<br className="only-mobile" /> 성장할 당신의 도전을 기다립니다.</h3>
                    <div className="btns">
                        {/* <a className="link-btn long" target="_blank" href="https://innovationacademy.kr/static/(%EA%B3%B5%EA%B3%A0%EB%AC%B8)%202019%EB%85%84%EB%8F%84%20%EC%9D%B4%EB%85%B8%EB%B2%A0%EC%9D%B4%EC%85%98%20%EC%95%84%EC%B9%B4%EB%8D%B0%EB%AF%B8%20%EC%A0%9C1%EA%B8%B0%20%EA%B5%90%EC%9C%A1%EC%83%9D%20%EB%AA%A8%EC%A7%91%20%EA%B3%B5%EA%B3%A0.pdf" download>모집 공고문 다운로드</a>
                        <a className="link-btn eng" target="_blank" href="/Innovation_Academy_2019_(42Seoul)_Recruitment_notice.pdf" download>Recruitment notice Download</a> */}
                        <Link to="/apply" className="link-btn black">지금 지원하기</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
