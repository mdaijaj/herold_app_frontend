import { useContext, useEffect, useState } from "react";
import { NavigationBar } from "../NavigationBar";
import { FooterSection } from "../FooterSection";
import { RestaurantAZSearch } from "./RestaurantAZComponents/RestaurantAZSearch";
import { RestaurantAZBreadcrumb } from "./RestaurantAZComponents/RestaurantAZBreadcrumb";
import { RestaurantAZDetailsBox } from "./RestaurantAZComponents/RestaurantAZDetailBox";
import { RestaurantAZStickyInfo } from "./RestaurantAZComponents/RestaurantAZStickyInfo";
import { RestaurantAZNav } from "./RestaurantAZComponents/RestaurantAZNav";
import AppContext from "../../AppContext";
import axios from "axios";
import { useParams } from "react-router";
import { IndustrySearchSection } from "../IndustryCompanySearchComponents/IndustrySearchSection";



export const RestaurantAZ = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { company } = useParams();
    const { setSpecificCompanyInfo, setZipCodeList, setGradimoReviewNowContent, setGradimoAdviceNow, setImageGallery, setCompanyList, setSugCityList, setSugDistrictList, setOpeningHours, setUserCompany, cookies, setCompanyPersonalInfo, setIndustryAZList, setCityContent, productIdList, setCityList, setProductsList, counselerList, setCounselerIdList, counselerIdList, baseBackendRoute, setProductIdList, productsList, setCounselerList } = useContext(AppContext);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);

    }

    const cookie_value = decodeURI(cookies.token);
    useEffect(() => {

        const getZipCodeList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/zip-code-list/`)
                .then(async (res) => {
                    console.log(res);

                    const tp = await Object.values(res.data).flat();
                    const postcodes = await tp.map(item => item.postcode);
                    setZipCodeList(postcodes);
                })
                .catch((err) => {
                    console.log(err);

                })
        }

        getZipCodeList();

        const getGradimoRateNowContent = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/pages/review-guidelines/`)
                .then((res) => {
                    console.log(res);
                    setGradimoReviewNowContent(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getGradimoRateNowContent();


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

        const getCompanyList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/company-search/`)
                .then(async (res) => {
                    const tp = await res.data.map(data => data.company_name);
                    setCompanyList(tp);
                    const tp_1 = await res.data.map(data => data.city);
                    setSugCityList(tp_1);

                    const tp_2 = await res.data.map(data => data.district);
                    setSugDistrictList(tp_2);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getCompanyList();


        const head_2 = document.head;
        const link_2 = document.createElement("link");

        link_2.type = "text/css";
        link_2.rel = "stylesheet";
        link_2.href = "/_next/static/css/15c904673e0a0e9875ab.css"
        head_2.appendChild(link_2);

        const head = document.head;
        const link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/_next/static/css/81054e3972181f19bc1f.css"
        link.media = "all"
        head.appendChild(link);


        const head_1 = document.head;
        const link_1 = document.createElement("link");

        link_1.type = "text/css";
        link_1.rel = "stylesheet";
        link_1.href = "/_next/static/css/c60ae1c762c4f7a21e2c.css"
        link_1.media = "all"
        head_1.appendChild(link_1);

        const head_3 = document.head;
        const link_3 = document.createElement("link");

        link_3.type = "text/css";
        link_3.rel = "stylesheet";
        link_3.href = "/_next/static/css/homesearch.css"
        link_3.media = "all"
        head_3.appendChild(link_3);

        const head_7 = document.head;
        const link_7 = document.createElement("link");

        link_7.type = "text/css";
        link_7.rel = "stylesheet";
        link_7.href = "/_next/static/css/homesecondsearch.css"
        link_7.media = "all"
        head_7.appendChild(link_7);


        const head_9 = document.head;
        const link_9 = document.createElement("link");

        link_9.type = "text/css";
        link_9.rel = "stylesheet";
        link_9.href = "/_next/static/css/5419377eb84c93258845.css"
        link_9.media = "all"
        head_9.appendChild(link_9);

        const head_10 = document.head;
        const link_10 = document.createElement("link");

        link_10.type = "text/css";
        link_10.rel = "stylesheet";
        link_10.href = "/_next/static/css/4d8d33bbf86546ebc9ef.css"
        link_10.media = "all"
        head_10.appendChild(link_10);


        const head_11 = document.head;
        const link_11 = document.createElement("link");

        link_11.type = "text/css";
        link_11.rel = "stylesheet";
        link_11.href = "/_next/static/css/dcfd679f651bbcdfc85d.css"
        link_11.media = "all"
        head_11.appendChild(link_11);


        const head_12 = document.head;
        const link_12 = document.createElement("link");

        link_12.type = "text/css";
        link_12.rel = "stylesheet";
        link_12.href = "/_next/static/css/05951bde518f2072cee2.css"
        link_12.media = "all"
        head_12.appendChild(link_12);

        const randomThreeExcept = async (list, excludedValue) => {
            try {
                const filteredList = list.filter(item => item !== excludedValue);
                if (filteredList.length >= 3) {
                    const shuffledList = filteredList.sort(() => Math.random() - 0.5);
                    return shuffledList.slice(0, 3);
                } else {
                    return list.slice(0, 3);
                }
            } catch (error) {
                console.error("Error filtering products:", error);
                return [];
            }
        };

        const getCityList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/city-list/`)
                .then((res) => {
                    console.log(res);
                    setCityList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getCityList();

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

        const getIndustryAZList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/az-industry-list/`)
                .then((res) => {
                    console.log(res);
                    setIndustryAZList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getIndustryAZList();

        const getSpecificCompanyInfo = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/company/${encodeURIComponent(company)}/`)
                .then((res) => {
                    console.log(res);
                    setSpecificCompanyInfo(res.data);
                    localStorage.setItem('companyInfo', JSON.stringify(res.data));
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getSpecificCompanyInfo();


        // const head_5 = document.head;
        // const link_5 = document.createElement("link");

        // link_5.type = "text/css";
        // link_5.rel = "stylesheet";
        // link_5.href = "/_next/static/css/homeactivesearch.css"
        // link_5.media = "all"
        // head_5.appendChild(link_5);


        const head_6 = document.head;
        const link_6 = document.createElement("link");

        link_6.type = "text/css";
        link_6.rel = "stylesheet";
        link_6.href = "/_next/static/css/homerestaurant.css"
        link_6.media = "all"
        head_6.appendChild(link_6);

        const head_13 = document.head;
        const link_13 = document.createElement("link");

        link_13.type = "text/css";
        link_13.rel = "stylesheet";
        link_13.href = "/_next/static/css/d2d45c346fc62f317fb3.css"
        link_13.media = "all"
        head_13.appendChild(link_13);



        const head_14 = document.head;
        const link_14 = document.createElement("link");

        link_14.type = "text/css";
        link_14.rel = "stylesheet";
        link_14.href = "/_next/static/css/5419377eb84c93258845.css"
        link_14.media = "all"
        head_14.appendChild(link_14);




        //     <link rel="amphtml" href="index5593.html?amp=1" />






        // <link rel="preload" href="../../../../_next/static/css/05951bde518f2072cee2.css" as="style" />
        // <link rel="stylesheet" href="../../../../_next/static/css/05951bde518f2072cee2.css" data-n-p="" />



        if (window.innerWidth <= 767) {
            setWindowWidth(true);
        }
        else {
            setWindowWidth(false);
        }
    }, [window.innerWidth]);



    return (
        <>
            <div class="default_main_container__2y7HF">
                <NavigationBar />
                <div
                    class="default_default_layout__3K-S0"
                    tabIndex="0"
                    role="button"
                >
                    <main class="YellowPagesTemplate">
                        <RestaurantAZStickyInfo />
                        <IndustrySearchSection />
                        <RestaurantAZBreadcrumb />
                        <RestaurantAZDetailsBox />
                    </main>
                    <FooterSection />

                </div >
            </div>
        </>
    )
}