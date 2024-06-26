
import { LoginNav } from "./LoginComponents/LoginNav";
import { LoginFooter } from "./LoginComponents/LoginFooter";

import { LoginMain } from "./LoginComponents/LoginMain";
import { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import { LoginRevNav } from "./LoginComponents/LoginMenuComponents/LoginMenuReviewsComponents/LoginRevNav";
import { LoginSubNav } from "./LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginSubComponents/LoginSubProfileComponents/LoginSubNav";

export const Login = () => {
    const { cookies } = useContext(AppContext);
    useEffect(() => {
        const head_5 = document.head;
        const link_5 = document.createElement("link");
        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/login/login.herold.at/login.css"
        link_5.media = "all"
        head_5.appendChild(link_5);
    }, [])
    return (
        <>

            {cookies.token ? <LoginSubNav /> : <LoginNav />}
            <LoginMain />
            <LoginFooter />

        </>
    )
}