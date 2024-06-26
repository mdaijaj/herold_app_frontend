import { useContext, useState, useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router";
import AppContext from "../../../../AppContext";
import { IndustryAZInfoMain } from "./IndustryAZListComponents/IndustryAZInfoMain";
import { IndustryAZListNav } from "./IndustryAZListComponents/IndustryAZListNav";
export const IndustryAnotherList = () => {
    const { setSpecificIndustryList, setSpecificIndustryCityList, setSpecificIndustryCompanyList, setCityContent, productIdList, setCityList, setProductsList, counselerList, setCounselerIdList, counselerIdList, baseBackendRoute, setProductIdList, productsList, setCounselerList } = useContext(AppContext);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { industry, ind, area } = useParams();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    useEffect(() => {
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

        const getAllSpecificCompaniesAnother = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/company-search/?industry_query=${ind}&address_query=${area}`)
                .then((res) => {
                    console.log(res);
                    setSpecificIndustryList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getAllSpecificCompaniesAnother();


        const getSpecificIndustryCityList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/companies/company-search/`)
                .then(async (res) => {
                    console.log(res);
                    const industriesList = await res.data.map(item => item.industry);
                    const citiesList = await res.data.map(item => item.city);
                    setSpecificIndustryCompanyList(industriesList);
                    setSpecificIndustryCityList(citiesList);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getSpecificIndustryCityList();





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
                <div
                    className="default_default_layout__3K-S0"
                    role="button"
                    on="tap:mobile_menu.toggleClass(class='show',force=false)"
                >
                    <IndustryAZInfoMain />
                </div>
            </div>

        </>
    )
}