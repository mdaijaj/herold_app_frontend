import { useContext, useEffect } from "react"
import { LoginSubHomeNav } from "../../../LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginSubHomeComponents/LoginSubHomeNav";
import { LoginSubHomeFooter } from "../../../LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginSubHomeComponents/LoginSubHomeFooter";
import { AddedCompanyMain } from "./AddedCompanyComponents.jsx/AddedCompanyMain";
import { LoginNav } from "../../../LoginComponents/LoginNav";
import { LoginFooter } from "../../../LoginComponents/LoginFooter";
import AppContext from "../../../../AppContext";
import { LoginSubNav } from "../../../LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginSubComponents/LoginSubProfileComponents/LoginSubNav";

export const AddedCompany = () => {
    const { cookies } = useContext(AppContext);
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
            {cookies.token ? <LoginSubNav /> : <LoginNav />}
            <AddedCompanyMain />
            <LoginFooter />
        </>
    )
}