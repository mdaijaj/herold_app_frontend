import { useEffect } from "react"
import { ForgotPswdFooter } from "./ForgotPswdComponents/ForgotPswdFooter"
import { ForgotPswdMain } from "./ForgotPswdComponents/ForgotPswdMain"
import { ForgotPswdNav } from "./ForgotPswdComponents/ForgotPswdNav"
import { LoginNav } from "./LoginComponents/LoginNav"
import { LoginFooter } from "./LoginComponents/LoginFooter"

export const ForgotPswd = () => {
    useEffect(() => {
        const head_5 = document.head;
        const link_5 = document.createElement("link");
        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/forgotpswd/forgothead.css"
        link_5.media = "all"
        head_5.appendChild(link_5);
    }, [])
    return (
        <>
            <LoginNav />
            <ForgotPswdMain />
            <LoginFooter />
        </>
    )
}