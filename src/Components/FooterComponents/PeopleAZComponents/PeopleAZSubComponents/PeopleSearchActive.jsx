import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import AppContext from "../../../../AppContext";
import { PeopleAZNav } from "../PeopleAZNav";
import { FooterSection } from "../../../FooterSection";
import { PeopleAZActiveSearch } from "./PeopleAZActiveComponents/PeopleAZActiveSearch";
import { PeopleSearchActiveMain } from "./PeopleSearchActiveComponents/PeopleSearchActiveMain";



export const PeopleSearchActive = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { name, address, people } = useParams();
    const { setSpecificPeople, setCompanyList, setSugCityList, setSugDistrictList, setPeopleAZList, cookies, setCompanyPersonalInfo, setIndustryAZList, setCityContent, productIdList, setCityList, setProductsList, counselerList, setCounselerIdList, counselerIdList, baseBackendRoute, setProductIdList, productsList, setCounselerList } = useContext(AppContext);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    }

    const cookie_value = decodeURI(cookies.token);
    useEffect(() => {
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

        const getSpecificPeople = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/people-search/?person_query=${name}&address_query=${address}`)
                .then((res) => {
                    console.log(res);
                    setSpecificPeople(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getSpecificPeople();

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

        const getPeopleList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/alphabet-by-people-list/${people}/`)
                .then((res) => {
                    console.log(res);
                    setPeopleAZList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getPeopleList();



        const head_6 = document.head;
        const link_6 = document.createElement("link");

        link_6.type = "text/css";
        link_6.rel = "stylesheet";
        link_6.href = "/_next/static/css/homerestaurant.css"
        link_6.media = "all"
        head_6.appendChild(link_6);



        const head_20 = document.head;
        const link_20 = document.createElement("link");

        link_20.type = "text/css";
        link_20.rel = "stylesheet";
        link_20.href = "/publicaz/publicaz.css"
        link_20.media = "all"
        head_20.appendChild(link_20);

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

        if (window.innerWidth <= 767) {
            setWindowWidth(true);
        }
        else {
            setWindowWidth(false);
        }
    }, []);



    return (
        <>
            <PeopleAZNav />
            <div
                class="default_default_layout__3K-S0"
                tabIndex="0"
                role="button"
            >
                <PeopleAZActiveSearch />
                <PeopleSearchActiveMain />
                <FooterSection />

            </div >
        </>
    )
}