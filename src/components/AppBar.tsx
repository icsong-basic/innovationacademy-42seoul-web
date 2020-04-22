import React, { useState, useEffect } from 'react';
import { NavLink, Link, Switch, Route } from 'react-router-dom';
import Logo2x from '../assets/images/img-42-seoul@2x.png';
import { observer } from "mobx-react"
import { observable } from 'mobx'
import { open } from './HamburgerMenu';
import routes from '../routes';

type AppBarColorTypes = "default" | "invert";
class AppBarConfig {
    private color = observable.box("default")
    getColor(): AppBarColorTypes {
        return this.color.get() as AppBarColorTypes;
    }
    setColor(color: AppBarColorTypes) {
        this.color.set(color)
    }
}
export const AppBarGlobalConfig = new AppBarConfig();

const AppBar: React.FC = () => {
    const [isTop, setIsTop] = useState<boolean>((window.pageYOffset || document.documentElement.scrollTop) === 0)
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [])

    const onScroll = () => {
        setIsTop((window.pageYOffset || document.documentElement.scrollTop) === 0)
    }
    return <div id="appbar" className={`${AppBarGlobalConfig.getColor()} ${isTop ? "top" : ""}`}>
        <Link to="/">
            <img src={Logo2x} className="logo" alt="" />
        </Link>
        <div className="gnb only-pc">
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/admission">ADMISSION</NavLink>
            <NavLink to="/studies">STUDIES</NavLink>
            <NavLink to="/news">NEWS</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <Link to="/apply" className="apply-btn">
                <span>지금 지원하기</span>
            </Link>
        </div>
        <Switch>
            {
                routes.map((item, key) => (
                    <Route
                        key={key}
                        path={item.path}
                        exact={item.exact}
                        component={() => (item.name ?
                            <span className="page-name only-mobile">{item.name}</span> : null
                        )}
                    />
                ))
            }
        </Switch>
        <span className="hamburger-btn only-mobile" onClick={open} />
    </div>
}

export default observer(AppBar);