import { useLocation } from "react-router"
import { LoginPswdResetNav } from "./LoginPswdResetComponents/LoginPswdResetNav"
import { NotFound } from "../../../NotFound";
import { LoginGiveReviewFoot } from "../LoginGiveReviewComponents/LoginGiveReviewFoot";
import { LoginPswdResetMain } from "./LoginPswdResetComponents/LoginPswdResetMain";
import { useContext, useEffect, useState } from "react";
import { LoginPswdInvalidHash } from "./LoginPswdResetComponents/LoginPswdInvalidHash";
import axios from "axios";
import AppContext from "../../../../AppContext";
import { LoginSubNav } from "./LoginSubComponents/LoginSubProfileComponents/LoginSubNav";
import { LoginFooter } from "../../LoginFooter";
import { LoginNav } from "../../LoginNav";
export const LoginPswdReset = () => {
    const location = useLocation();
    const { baseBackendRoute, cookies } = useContext(AppContext);
    const useQuery = () => {
        return new URLSearchParams(location.search);
    }
    const [success, setSuccess] = useState(false);
    const query = useQuery();
    const hash = query.get('hash');
    console.log("hash=" + hash);
    useEffect(() => {

        const head_5 = document.head;
        const link_5 = document.createElement("link");
        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/forgot_pswd/forgot.css";
        link_5.media = "all";
        head_5.appendChild(link_5);

        const head_6 = document.head;
        const link_6 = document.createElement("link");
        link_6.type = "text/css";
        link_6.rel = "stylesheet";
        link_6.href = "/forgot_pswd/forgot_foot.css";
        link_6.media = "all"
        head_6.appendChild(link_6);


        axios.post(`${baseBackendRoute}/api/v1/account/verify-register-email/${hash}`)
            .then((res) => {
                console.log(hash);
                console.log(res.data);
                setSuccess(true);
            })
            .catch((err) => {
                console.log(err);
            })




    }, [])

    return (
        <>
            {
                success ?
                    <>
                        {cookies.token ? <LoginSubNav /> : <LoginNav />}
                        <LoginPswdResetMain />
                        <LoginFooter />
                    </>
                    :
                    hash === null ?

                        <NotFound />
                        :
                        <>
                            {cookies.token ? <LoginSubNav /> : <LoginNav />}
                            <LoginPswdInvalidHash />
                            <LoginFooter />
                        </>


            }
        </>
    )
}