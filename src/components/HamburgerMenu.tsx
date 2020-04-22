import React from 'react'
import { isMobileWidth } from '../windowWidth';
import { observer } from 'mobx-react';
import { NavLink, Link } from 'react-router-dom';
import Logo2x from '../assets/images/img-mobile-1-black@2x.png';
import Footer from './Footer';

const OPEN_CLASSNAME = "opened"

export function setOpened(opened: boolean) {
    const element = document.getElementById('hamburger-menu')
    if (!element) {
        return
    }
    if (opened && !element.classList.contains(OPEN_CLASSNAME)) {
        element.classList.add(OPEN_CLASSNAME)
    } else if (!opened && element.classList.contains(OPEN_CLASSNAME)) {
        element.classList.remove(OPEN_CLASSNAME)
    }
}

export function open() { setOpened(true) }
export function close() { setOpened(false) }

export default observer(function HamburgerMenu() {
    if (!isMobileWidth) {
        return null;
    }
    return (
        <div id="hamburger-menu">
            <div>
                <div className="appbar">
                    <Link to="/">
                        <img src={Logo2x} className="logo" alt="" />
                    </Link>
                    <div className="close-btn" onClick={close} />
                </div>
                <div className="gnb">
                    <NavLink onClick={close} to="/about">ABOUT</NavLink>
                    <NavLink onClick={close} to="/admission">ADMISSION</NavLink>
                    <NavLink onClick={close} to="/studies">STUDIES</NavLink>
                    <NavLink onClick={close} to="/news">NEWS</NavLink>
                    <NavLink onClick={close} to="/faq">FAQ</NavLink>
                    <Link onClick={close} to="/apply" className="link-btn mint">
                        <span>지금 지원하기</span>
                    </Link>
                </div>
                <Footer invert />
            </div>
        </div>
    )
}
)