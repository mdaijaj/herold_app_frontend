import { useContext, useEffect } from "react"
import { LoginSubNav } from "./LoginSubComponents/LoginSubProfileComponents/LoginSubNav"
import { LoginSubFooter } from "./LoginSubComponents/LoginSubProfileComponents/LoginSubFooter";
import { LoginSubMain } from "./LoginSubComponents/LoginSubProfileComponents/LoginSubMain";
import { LoginFooter } from "../../LoginFooter";
import { LoginNav } from "../../LoginNav";
import AppContext from "../../../../AppContext";
import axios from "axios";

export const LoginSubProfile = () => {
    const { cookies, setGradimoContact, baseBackendRoute } = useContext(AppContext);
    useEffect(() => {
        const getGradimoContact = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/legal/gradimo-contact/?format=json`)
                .then((res) => {
                    console.log(res);
                    setGradimoContact(res.data[0]);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getGradimoContact();
        const head_5 = document.head;
        const link_5 = document.createElement("link");
        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/profile/profile.css";
        link_5.media = "all";
        head_5.appendChild(link_5);


        const head_6 = document.head;
        const link_6 = document.createElement("link");
        link_6.type = "text/css";
        link_6.rel = "stylesheet";
        link_6.href = "/profile/style.css";
        link_6.media = "all";
        head_6.appendChild(link_6);
    }, [])

    return (
        <>
            {cookies.token ? <LoginSubNav /> : <LoginNav />}
            <LoginSubMain />
            <LoginFooter />
        </>
    )
}