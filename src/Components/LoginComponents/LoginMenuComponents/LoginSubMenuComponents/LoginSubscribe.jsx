import { useEffect } from "react"
import { LoginSubscribeNav } from "./LoginSubscribeComponents/LoginSubscribeNav";
import { LoginSubscribeMain } from "./LoginSubscribeComponents/LoginSubscribeMain";
import { LoginSubscribeFoot } from "./LoginSubscribeComponents/LoginSubscribeFoot";
import { LoginSubNav } from "./LoginSubComponents/LoginSubProfileComponents/LoginSubNav";
import { BlogsFoot } from "../LoginMenuBlogsComponents/BlogsFoot";
import { LoginFooter } from "../../LoginFooter";


export const LoginSubscribe = () => {
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
            <LoginSubscribeMain />
            <LoginFooter />
        </>
    )
}