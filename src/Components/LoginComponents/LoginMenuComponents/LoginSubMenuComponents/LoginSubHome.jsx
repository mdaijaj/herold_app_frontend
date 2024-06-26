import { useEffect } from "react"
import { LoginSubHomeNav } from "./LoginSubHomeComponents/LoginSubHomeNav"
import { LoginSubHomeFooter } from "./LoginSubHomeComponents/LoginSubHomeFooter";
import { LoginSubHomeMain } from "./LoginSubHomeComponents/LoginSubHomeMain";
import { LoginSubNav } from "./LoginSubComponents/LoginSubProfileComponents/LoginSubNav";
import { LoginFooter } from "../../LoginFooter";

export const LoginSubHome = () => {
    useEffect(() => {

        const head_5 = document.head;
        const link_5 = document.createElement("link");
        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/login-home/login-home.css";
        link_5.media = "all";
        head_5.appendChild(link_5);
    }, [])
    return (
        <>
            <LoginSubNav />
            <LoginSubHomeMain />
            <LoginFooter />
        </>
    )
}