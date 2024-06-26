import { useEffect } from "react"
import { LoginValuationNav } from "./LoginValuationComponents/LoginValuationNav";
import { LoginValuationMain } from "./LoginValuationComponents/LoginValutionMain";
import { LoginValuationFoot } from "./LoginValuationComponents/LoginValuationFoot";

export const LoginValuation = () => {
    useEffect(() => {
        const head_1 = document.head;
        const link_1 = document.createElement("link");
        link_1.type = "text/css";
        link_1.rel = "stylesheet";
        link_1.href = "/bewertungen/assets/node_modules/jquery-ui-dist/jquery-ui.css"
        link_1.media = "all"
        head_1.appendChild(link_1);

        const head_2 = document.head;
        const link_2 = document.createElement("link");
        link_2.type = "text/css";
        link_2.rel = "stylesheet";
        link_2.href = "/bewertungen/css/emojione.min.css"
        link_2.media = "all"
        head_2.appendChild(link_2);

        const head_3 = document.head;
        const link_3 = document.createElement("link");
        link_3.type = "text/css";
        link_3.rel = "stylesheet";
        link_3.href = "/bewertungen/assets/dist/css/styles.css"
        link_3.media = "all"
        head_3.appendChild(link_3);


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
    // <link href="../assets/node_modules/jquery-ui-dist/jquery-ui00d0.css?v=3.23-20230314_125457" rel="stylesheet" />
    // <link href="../css/emojione.min00d0.css?v=3.23-20230314_125457" rel="stylesheet" />
    // <link href="../assets/dist/css/styles00d0.css?v=3.23-20230314_125457" rel="stylesheet" />
    return (
        <>
            <LoginValuationNav />
            <LoginValuationMain />
            <LoginValuationFoot />
        </>
    )
}