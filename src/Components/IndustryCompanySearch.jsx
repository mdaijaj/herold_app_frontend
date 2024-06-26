import { useContext, useState, useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router";
import AppContext from "../AppContext";
import { IndustrySearchNav } from "./IndustrySearchComponents/IndustrySearchNav";
import { IndustrySearchMain } from "./IndustrySearchComponents/IndustrySearchMain";
import { FooterSection } from "./FooterSection";
import { NavigationBar } from "./NavigationBar";
import { IndustryCompanySearchMain } from "./IndustryCompanySearchComponents/IndustryCompanySearchMain";
export const IndustryCompanySearch = () => {
    const { setZipCodeList, setSpecificIndustryCompanyList, setRandomIndustries, setGradimoAdviceNow, setIndustryAZList, setCompanyList, setSugCityList, setSugDistrictList, setCompanyNameOnly, setCityOnly, setSpecificIndustryCityList, setSpecificIndustryList, setCityContent, productIdList, setCityList, setProductsList, counselerList, setCounselerIdList, counselerIdList, baseBackendRoute, setProductIdList, productsList, setCounselerList } = useContext(AppContext);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { industry, city, company_only, city_only } = useParams();
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

        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        const getIndustryAZList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/az-industry-list/`)
                .then(async (res) => {
                    console.log(res);
                    const shuffledList = await shuffleArray(Object.values(res.data).flat());
                    const randomFiveElements = await shuffledList.slice(0, 5);
                    setIndustryAZList(res.data);
                    setRandomIndustries(randomFiveElements)
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getIndustryAZList();



        const getSpecificIndustryCityList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/company-search/`)
                .then(async (res) => {
                    console.log(res);
                    const industriesList = await res.data.map(item => item.industry);
                    const citiesList = await res.data.map(item => item.city);
                    const shuffledList = await shuffleArray(citiesList);
                    const randomFiveElements = await shuffledList.slice(0, 10);

                    setSpecificIndustryCompanyList(industriesList);
                    setSpecificIndustryCityList(randomFiveElements);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getSpecificIndustryCityList();


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


        const getSpecificIndustryCompanyList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/industry-list/`)
                .then((res) => {
                    console.log(res);
                    setSpecificIndustryCompanyList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getSpecificIndustryCompanyList();


        const getCityOnly = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/company-search/?industry_query=${encodeURIComponent(company_only)}`)
                .then((res) => {
                    console.log(res);
                    setCompanyNameOnly(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getCityOnly();
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
                    className="default_default_layout__3K-S0"
                    role="button"
                    on="tap:mobile_menu.toggleClass(class='show',force=false)"
                >
                    <IndustryCompanySearchMain />
                    <FooterSection />
                </div>
                {/* <FooterSection /> */}
            </div>

        </>
    )
}