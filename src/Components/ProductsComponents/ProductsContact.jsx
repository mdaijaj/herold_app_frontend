import { useContext, useEffect, useState } from "react"
import { ProductsContactNav } from "./ProductsContactComponents/ProductsContactNav";
import { ProductsContFirstContainer } from "./ProductsContactComponents/ProductsContFirstContainer";
import { ProductsContSecContainer } from "./ProductsContactComponents/ProductsContSecContainer";
import { ProductsContactFoot } from "./ProductsContactComponents/ProductsContactFoot";
import AppContext from "../../AppContext";
import axios from "axios";
import { ProductNavigationBar } from "./ProductsNavigationBar";

export const ProductsContact = () => {
    const { setSugCityList, setGradimoAdvicePage, setGradimoAdviceNow, setGradimoContact, setSugDistrictList, productIdList, setCityList, setProductsList, setCompanyList, counselerList, setCounselerIdList, counselerIdList, baseBackendRoute, setProductIdList, productsList, setCounselerList } = useContext(AppContext);
    useEffect(() => {

        const getGradimoAdvicePage = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/pages/advice-page/`)
                .then((res) => {
                    console.log(res);
                    setGradimoAdvicePage(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getGradimoAdvicePage();
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

        const getCounselersList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/counselor/counselors/`)
                .then((response) => {
                    if (counselerList?.length === 0) {
                        console.log("home calling");
                        setCounselerList(response.data);
                    }
                    if (counselerIdList?.length === 0) {
                        console.log("home id calling");
                        let l = []
                        for (let j of response.data) {
                            console.log(j);
                            l.push(j);
                            // setCounselerIdList((prevState) => [...prevState, j.id])
                        }
                        setCounselerIdList(l);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getCounselersList();

        const fetchData = async () => {
            const res = await axios.get(`${baseBackendRoute}/api/v1/products/product/`);
            const resData = await res.data.sort((a, b) => a.id - b.id);
            setProductsList(resData);
            const ids = await resData.map(product => product.id);
            setProductIdList(ids);
            console.log(ids);
        }
        fetchData();

        var head_1 = document.head;
        var link_1 = document.createElement("link");

        link_1.type = "text/css";
        link_1.rel = "stylesheet";
        link_1.href = "/marketing/wp-includes/css/dist/block-library/style.min9b30.css"
        link_1.media = "all"
        head_1.appendChild(link_1)

        var head_5 = document.head;
        var link_5 = document.createElement("link");

        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/marketing/wp-includes/css/dashicons.min9b30.css"
        link_5.media = "all"
        head_5.appendChild(link_5)




        var head_7 = document.head;
        var link_7 = document.createElement("link");

        link_7.type = "text/css";
        link_7.rel = "stylesheet";
        link_7.href = "/marketing/wp-content/plugins/gravityforms/assets/css/dist/basic.min27a2.css"
        link_7.media = "all"
        head_7.appendChild(link_7)


        // / marketing / wp - content / themes / heroldmarketing / css / dev.css





        var head_2 = document.head;
        var link_2 = document.createElement("link");

        link_2.type = "text/css";
        link_2.rel = "stylesheet";
        link_2.href = "/marketing/wp-content/plugins/post-views-counter/css/frontend.min676b.css"
        link_2.media = "all"
        head_2.appendChild(link_2)



        var head_2 = document.head;
        var link_2 = document.createElement("link");

        link_2.type = "text/css";
        link_2.rel = "stylesheet";
        link_2.href = "/marketing/wp-content/themes/heroldmarketing/css/import5152.css"
        link_2.media = "all"
        head_2.appendChild(link_2)



        var head_3 = document.head;
        var link_3 = document.createElement("link");

        link_3.type = "text/css";
        link_3.rel = "stylesheet";
        link_3.href = "/marketing/wp-content/themes/heroldmarketing/css/slick9b30.css"
        link_3.media = "all"

        head_3.appendChild(link_3)


        var head_4 = document.head;
        var link_4 = document.createElement("link");

        link_4.type = "text/css";
        link_4.rel = "stylesheet";
        link_4.href = "/marketing/wp-content/themes/heroldmarketing/style5152.css"
        link_4.media = "all"
        head_4.appendChild(link_4)

        var head_4 = document.head;
        var link_4 = document.createElement("link");

        link_4.type = "text/css";
        link_4.rel = "stylesheet";
        link_4.href = "/marketing/wp-content/themes/heroldmarketing/css/slick-theme8a54.css"
        link_4.media = "all"
        head_4.appendChild(link_4)

        var head_5 = document.head;
        var link_5 = document.createElement("link");

        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/marketing/wp-content/themes/heroldmarketing/css/style.min10d4.css"
        link_5.media = "all"
        head_5.appendChild(link_5)


        const getGradimoAdviceNow = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/pages/get-advice-banner/`)
                .then((res) => {
                    console.log(res);
                    setGradimoAdviceNow(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getGradimoAdviceNow();

        var head_6 = document.head;
        var link_6 = document.createElement("link");

        link_6.type = "text/css";
        link_6.rel = "stylesheet";
        link_6.href = "/marketing/wp-content/themes/heroldmarketing/css/dev.css"
        link_6.media = "all"
        head_6.appendChild(link_6)
    }, [])
    return (
        <>
            <div id="page" className="site">
                <a class="skip-link screen-reader-text" href="#primary" _msttexthash="238654" _msthash="15">Skip to content</a>
                <ProductNavigationBar />
                <main id="primary" className="site-main" role="main" style={{ marginTop: "100px" }}>
                    <article id="post-93801" class="post-93801 page type-page status-publish hentry">
                        <div className="entry-content">
                            <ProductsContFirstContainer />
                            <ProductsContSecContainer />
                        </div>
                    </article>
                </main>
                <ProductsContactFoot />
            </div>
        </>
    )
}