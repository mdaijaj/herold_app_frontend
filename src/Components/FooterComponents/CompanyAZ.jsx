import { useContext, useState, useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router";
import { CompanyAZNav } from "./CompanyAZComponents/CompanyAZNav";
import AppContext from "../../AppContext";
import { CompanyAZMain } from "./CompanyAZComponents/CompanyAZMain";
import { CompanyAZFoot } from "./CompanyAZComponents/CompanyAZFoot";
import { NavigationBar } from "../NavigationBar";
import { FooterSection } from "../FooterSection";
import { IndustryAZListMain } from "./IndustryAZComponents/IndustryAZListSubComponents/IndustryAZListComponents/IndustryAZListMain";
import { IndustryAZListNav } from "./IndustryAZComponents/IndustryAZListSubComponents/IndustryAZListComponents/IndustryAZListNav";
// import "../CSSFiles/_next/static/css/15c904673e0a0e9875ab.css"
// import "../CSSFiles/_next/static/css/81054e3972181f19bc1f.css"
// import "../CSSFiles/_next/static/css/c60ae1c762c4f7a21e2c.css"
// import "../CSSFiles/_next/static/css/homesearch.css";
export const CompanyAZ = () => {
    const { setCompanyAZList, setZipCodeList, setCityContent, setGradimoAdviceNow, setIndustryAZList, setSugCityList, setSugDistrictList, setCompanyList, productIdList, setCityList, setProductsList, counselerList, setCounselerIdList, counselerIdList, baseBackendRoute, setProductIdList, productsList, setCounselerList } = useContext(AppContext);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { alpha } = useParams();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
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



        const head_5 = document.head;
        const link_5 = document.createElement("link");

        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/industrylist/industrylist.css"
        head_5.appendChild(link_5);

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
        link_4.href = "/cities/city.css"
        head_4.appendChild(link_4);

        const getSpecificCompanyContent = async () => {
            try {
                await axios.get(`${baseBackendRoute}/api/v1/companies/alphabet-by-company-list/${alpha}/`)
                    .then((res) => {
                        console.log(res);
                        setCompanyAZList(res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
            catch (err) {
                console.log(err);
            }

        }
        getSpecificCompanyContent();

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
                {/* <IndustryAZListNav /> */}
                <div
                    className="default_default_layout__3K-S0"
                    role="button"
                    on="tap:mobile_menu.toggleClass(class='show',force=false)"
                >
                    {/* <IndustryAZListMain /> */}
                    <CompanyAZMain />
                    <FooterSection />
                </div>
            </div>

        </>
    )
}