import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { close } from "./HamburgerMenu";

export default function OnNavigate() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        close();
    }, [pathname]);

    return null;
}