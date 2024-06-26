import { useContext, useState } from "react"
import { useEffect } from "react";
import AppContext from "../AppContext";
import axios from "axios";
import { LegalNav } from "./LegalComponents/LegalNav";
import { LegalMain } from "./LegalComponents/LegalMain";
import { LegalFooter } from "./LegalComponents/LegalFooter";
import { NavigationBar } from "./NavigationBar";
import { FooterSection } from "./FooterSection";
// import "../CSSFiles/_next/static/css/15c904673e0a0e9875ab.css"
// import "../CSSFiles/_next/static/css/81054e3972181f19bc1f.css"
// import "../CSSFiles/_next/static/css/c60ae1c762c4f7a21e2c.css"
// import "../CSSFiles/_next/static/css/homesearch.css";
export const Legal = () => {
    const { productIdList, setGradimoAdviceNow, setDisclosure, setPrivacy, setCondition, setDataSource, setProductsList, counselerList, setCounselerIdList, counselerIdList, baseBackendRoute, setProductIdList, productsList, setCounselerList } = useContext(AppContext);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia('(max-width: 1024px)').matches);
    useEffect(() => {


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



        const head_4 = document.head;
        const link_4 = document.createElement("link");

        link_4.type = "text/css";
        link_4.rel = "stylesheet";
        link_4.href = "/legal/legal.css"
        link_4.media = "all"
        head_4.appendChild(link_4);



        const head_5 = document.head;
        const link_5 = document.createElement("link");

        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/_next/static/css/81054e3972181f19bc1f.css"
        link_5.media = "all"
        head_5.appendChild(link_5);

        const fetchData = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/products/product/`)
                .then(async (res) => {
                    const resData = await res.data.sort((a, b) => a.id - b.id);
                    setProductsList(resData);
                    console.log(resData);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        fetchData();


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


        const getDataSource = async () => {
            await axios.get(
                `${baseBackendRoute}/api/v1/legal/data-sources/`
            )
                .then((res) => {
                    console.log(res.data);
                    setDataSource(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getDataSource();


        const getCondition = async () => {
            await axios.get(
                `${baseBackendRoute}/api/v1/legal/terms-conditions/
`
            )
                .then((res) => {
                    console.log(res.data);
                    setCondition(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getCondition();



        const getDisclosure = async () => {
            await axios.get(
                `${baseBackendRoute}/api/v1/legal/disclosure/`
            )
                .then((res) => {
                    console.log(res.data);
                    setDisclosure(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getDisclosure();



        const getPrivacy = async () => {
            await axios.get(
                `${baseBackendRoute}/api/v1/legal/privacy-policy/`
            )
                .then((res) => {
                    console.log(res.data);
                    setPrivacy(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getPrivacy();

    }, []);



    return (
        <>
            <div id="root">
                <div class="default_main_container__2y7HF">
                    <NavigationBar />
                    <div
                        className="default_default_layout__3K-S0 default_bg_white__2Zg8r"
                        tabIndex={0}
                        role="button"
                        style={isLargeScreen ? { marginTop: '100px' } : { marginTop: '100px' }}
                        on="tap:mobile_menu.toggleClass(class='show',force=false)"
                    >
                        <LegalMain />
                        <FooterSection />
                    </div>
                </div>
            </div>
        </>
    )
}