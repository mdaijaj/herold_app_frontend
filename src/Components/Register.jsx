import { useContext, useEffect } from "react"
import { RegisterFoot } from "./RegisterComponents/RegisterFoot"
import { RegisterMain } from "./RegisterComponents/RegisterMain"
import { RegisterNav } from "./RegisterComponents/RegisterNav"
import { RegisterToolTip } from "./RegisterComponents/RegisterToolTip"
import { LoginNav } from "./LoginComponents/LoginNav"
import { LoginFooter } from "./LoginComponents/LoginFooter"
import axios from "axios"
import AppContext from "../AppContext"
import { LoginSubNav } from "./LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginSubComponents/LoginSubProfileComponents/LoginSubNav"

export const Register = () => {
    const { setGradimoContact, baseBackendRoute, cookies } = useContext(AppContext);
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
        link_5.href = "/register/register.css"
        link_5.media = "all"
        head_5.appendChild(link_5);
    }, [])
    return (
        <>
            {cookies.token ? <LoginSubNav /> : <LoginNav />}
            <RegisterMain />
            <LoginFooter />
            <RegisterToolTip />
        </>
    )
}