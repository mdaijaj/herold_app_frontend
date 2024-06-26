import { useContext, useEffect } from "react"
import { LoginRevNav } from "./LoginMenuReviewsComponents/LoginRevNav";
import { LoginRevMain } from "./LoginMenuReviewsComponents/LoginRevMain";
import { LoginRevFoot } from "./LoginMenuReviewsComponents/LoginRevFoot";
import AppContext from "../../../AppContext";
import axios from "axios";
import { LoginNav } from "../LoginNav";
import { LoginFooter } from "../LoginFooter";
import { LoginSubNav } from "./LoginSubMenuComponents/LoginSubComponents/LoginSubProfileComponents/LoginSubNav";

export const Reviews = () => {
    const { setReviewPageContent, setGradimoReviewPage, cookies, setCompanyIdList, setReviewPageList, baseBackendRoute, setCompanyList } = useContext(AppContext);
    useEffect(() => {

        const getGradimoReviewPage = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/pages/reviews-page/`)
                .then((res) => {
                    setGradimoReviewPage(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getGradimoReviewPage();
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


        const getAllReviewPageContent = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/blogs/reviews-data/`)
                .then((res) => {
                    console.log(res);
                    setReviewPageContent(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getAllReviewPageContent();


        const getReviewPageList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/blogs/reviews-data/`)
                .then((res) => {
                    setReviewPageList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getReviewPageList();


        const getCompanyList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/company-search/`)
                .then(async (res) => {
                    const tp = await res.data.map(data => data.company_name);

                    const tp1 = res.data.reduce((acc, item) => {
                        acc[item.company_name] = item.slug;
                        return acc;
                    }, {});
                    console.log(tp1);
                    setCompanyIdList(tp1);

                    setCompanyList(tp);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getCompanyList();




    }, [])
    return (
        <>
            {cookies.token ? <LoginSubNav /> : <LoginNav />}
            <LoginRevMain />
            <LoginFooter />
        </>
    )
}