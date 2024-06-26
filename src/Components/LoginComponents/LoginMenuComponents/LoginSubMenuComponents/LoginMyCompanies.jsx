import { useContext, useEffect } from "react"
import { LoginSubHomeNav } from "./LoginSubHomeComponents/LoginSubHomeNav";
import { LoginSubHomeFooter } from "./LoginSubHomeComponents/LoginSubHomeFooter";
import { LoginMyCompaniesMain } from "./LoginMyCompaniesComponents/LoginMyCompaniesMain";
import AppContext from "../../../../AppContext";
import axios from "axios";
import { LoginSubNav } from "./LoginSubComponents/LoginSubProfileComponents/LoginSubNav";
import { LoginFooter } from "../../LoginFooter";
import { LoginNav } from "../../LoginNav";

export const LoginMyCompanies = () => {
    const { setMyCompanies, baseBackendRoute, cookies } = useContext(AppContext);
    const cookie_value = decodeURI(cookies.token);
    console.log(cookie_value);
    useEffect(() => {

        if (cookies.token) {

        }
        else {
            window.location.href = "/login"
        }

        const head_5 = document.head;
        const link_5 = document.createElement("link");
        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/login-home/login-home.css";
        link_5.media = "all";
        head_5.appendChild(link_5);


        const getMyCompanies = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/user-company/`, {
                headers: {
                    Authorization: cookie_value
                }
            })
                .then((res) => {
                    console.log(res);
                    setMyCompanies(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getMyCompanies();

    }, [])
    return (
        <>

            {cookies.token ? <LoginSubNav /> : <LoginNav />}
            <LoginMyCompaniesMain />
            <LoginFooter />
        </>
    )
}