import { useContext, useEffect } from "react"
import { AddCompPopCookie } from "./AddCompanyComponents/AddCompPopCookie";
import { AddCompSkipLinks } from "./AddCompanyComponents/AddCompSkipLinks";
import { AddCompNav } from "./AddCompanyComponents/AddCompNav";
import { AddCompSubHeader } from "./AddCompanyComponents/AddCompSubHeader";
import { AddCompHeaderContainer } from "./AddCompanyComponents/AddCompHeaderContainer";
import { AddCompBgGrad } from "./AddCompanyComponents/AddCompBgGrad";
import { AddCompFooter } from "./AddCompanyComponents/AddCompFooter";
import { LoginNav } from "../LoginComponents/LoginNav";
import { LoginFooter } from "../LoginComponents/LoginFooter";
import AppContext from "../../AppContext";
import axios from "axios";
import { LoginSubNav } from "../LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginSubComponents/LoginSubProfileComponents/LoginSubNav";

export const AddCompany = () => {
    const { baseBackendRoute, cookies, setIndustryAZList, setPaymentMethod } = useContext(AppContext);
    useEffect(() => {


        document.body.classList.add("site_ABOUT");
        document.body.classList.add("cmp_data_gui");
        var head = document.head;
        const link = document.createElement("link");

        link.rel = "stylesheet";
        link.href = "/scripting/dist/css/head8341.css"
        head.appendChild(link);


        const getIndustryAZList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/industry-list/`)
                .then((res) => {
                    console.log(res);
                    setIndustryAZList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getIndustryAZList();

        const getPaymentMethods = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/payment-method`)
                .then((res) => {
                    console.log(res);
                    setPaymentMethod(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getPaymentMethods();



    }, []);
    return (
        <>
            <AddCompSkipLinks />
            {cookies.token ? <LoginSubNav /> : <LoginNav />}
            <AddCompSubHeader />
            <div class="container mt-5">

            </div>
            <AddCompHeaderContainer />
            <AddCompBgGrad />
            <LoginFooter />
        </>
    )
}