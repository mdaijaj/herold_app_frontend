import { useContext, useEffect } from "react"
import { LoginSubHomeNav } from "../../../LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginSubHomeComponents/LoginSubHomeNav";
import { LoginSubHomeFooter } from "../../../LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginSubHomeComponents/LoginSubHomeFooter";
import { UpdateCompanyDetMain } from "./UpdateCompanyDetailComponents/UpdateCompanyDetMain";
import { AddCompNav } from "../AddCompNav";
import { AddCompFooter } from "../AddCompFooter";
import AppContext from "../../../../AppContext";
import axios from "axios";
import { useParams } from "react-router";
import { LoginNav } from "../../../LoginComponents/LoginNav";
import { LoginFooter } from "../../../LoginComponents/LoginFooter";
import { LoginSubNav } from "../../../LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginSubComponents/LoginSubProfileComponents/LoginSubNav";

export const UpdateCompanyDetails = () => {
    const { company } = useParams();
    const { setSpecificUserPersonalInfo, setSpecificUserCompanyServices, setIndustryAZList, setSpecificUserGallery, setSpecificUserCompanyProducts, setSpecificUserHoursDetails, setSpecificUserCompany, baseBackendRoute, cookies } = useContext(AppContext);
    const cookie_value = decodeURI(cookies.token);

    useEffect(() => {



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




        const getSpecificUserCompanyServices = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/${company}/company-services-list/`, {
                headers: {
                    Authorization: cookie_value
                }
            })
                .then((res) => {
                    console.log(res);
                    setSpecificUserCompanyServices(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getSpecificUserCompanyServices();
        document.body.classList.add("site_ABOUT");
        document.body.classList.add("cmp_data_gui");
        var head = document.head;
        const link = document.createElement("link");


        link.rel = "stylesheet";
        link.href = "/scripting/dist/css/head8341.css"
        head.appendChild(link);

        const getSpecificUserCompany = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/user-company/${company}/`, {
                headers: {
                    Authorization: cookie_value
                }
            })
                .then((res) => {
                    console.log(res);
                    setSpecificUserCompany(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getSpecificUserCompany();


        const getSpecificUserHoursDetails = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/${company}/opening-hours/`, {
                headers: {
                    Authorization: cookie_value
                }
            })
                .then((res) => {
                    console.log(res);
                    setSpecificUserHoursDetails(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getSpecificUserHoursDetails();

        const getSpecificGalleryDetails = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/${company}/company-gallery/`, {
                headers: {
                    Authorization: cookie_value
                }
            })
                .then((res) => {
                    console.log(res);
                    setSpecificUserGallery(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getSpecificGalleryDetails();



        const getSpecificProductDetails = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/${company}/company-products/`, {
                headers: {
                    Authorization: cookie_value
                }
            })
                .then((res) => {
                    console.log(res);
                    setSpecificUserCompanyProducts(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getSpecificProductDetails();

        const getSpecificPersonalInfo = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/${company}/company-personal-information/`, {
                headers: {
                    Authorization: cookie_value
                }
            })
                .then((res) => {
                    console.log(res.data[0]);
                    setSpecificUserPersonalInfo(res.data[0]);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getSpecificPersonalInfo();

    }, [])
    return (
        <>
            {cookies.token ? <LoginSubNav /> : <LoginNav />}
            <UpdateCompanyDetMain />
            <LoginFooter />
        </>
    )
}