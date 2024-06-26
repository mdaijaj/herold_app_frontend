import { useEffect } from "react"
import { LoginRevNav } from "../../LoginMenuReviewsComponents/LoginRevNav";
import { LoginRevFoot } from "../../LoginMenuReviewsComponents/LoginRevFoot";
import { LoginAfterRevMain } from "./LoginAfterReviewComponents/LoginAfterRevMain";
import { LoginNav } from "../../../LoginNav";
import { LoginFooter } from "../../../LoginFooter";

export const LoginAfterReview = () => {
    useEffect(() => {
        const head_5 = document.head;
        const link_5 = document.createElement("link");
        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/bewertungen/assets/node_modules/jquery-ui-dist/jquery-ui00d0.css"
        link_5.media = "all"
        head_5.appendChild(link_5);

        const head_6 = document.head;
        const link_6 = document.createElement("link");
        link_6.type = "text/css";
        link_6.rel = "stylesheet";
        link_6.href = "/bewertungen/css/emojione.min00d0.css"
        link_6.media = "all"
        head_6.appendChild(link_6);

        const head_7 = document.head;
        const link_7 = document.createElement("link");
        link_7.type = "text/css";
        link_7.rel = "stylesheet";
        link_7.href = "/bewertungen/assets/dist/css/styles00d0.css"
        link_7.media = "all"
        head_7.appendChild(link_7);
    }, [])
    return (
        <>
            <LoginNav />
            <LoginAfterRevMain />
            <LoginFooter />
        </>
    )
}