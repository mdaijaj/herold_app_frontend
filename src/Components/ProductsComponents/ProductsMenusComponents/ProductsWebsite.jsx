import { ProductNavigationBar } from "../ProductsNavigationBar"
import { ProductWebsiteFirstViewRocket } from "./ProductsWebsiteComponents/ProductWebsiteFirstViewRocket";
import { ProductWebsiteCardSlider } from "./ProductsWebsiteComponents/ProductWebsiteCardSlider";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../../AppContext";
import { ProductsWebsiteBlockRefrenzen } from "./ProductsWebsiteComponents/ProductsWebsiteBlockRefrenzen";
import { ProductsWebsiteQuestionBlock } from "./ProductsWebsiteComponents/ProductsWebsiteQuestionBlock";
import { ProductsWebsiteSectionComponents } from "./ProductsWebsiteComponents/ProductsWebsiteSectionComponents";
import { ProductsWebsiteSecondBlock } from "./ProductsWebsiteComponents/ProductsWebsiteSecondBlock";
import { ProductsWebsiteThirdBlock } from "./ProductsWebsiteComponents/ProductsWebsiteThirdBlock";
import { ProductsWebsiteOpacityBlock } from "./ProductsWebsiteComponents/ProductsWebsiteOpacityBlock";
import { ProductsWebsiteCitationBlock } from "./ProductsWebsiteComponents/ProductsWebsiteCitationBlock";
import { ProductsWebsiteFAQSection } from "./ProductsWebsiteComponents/ProductsWebsiteFAQSection";
import { ProductsWebsiteBlockService } from "./ProductsWebsiteComponents/ProductsWebsiteBlockService";
import { ProductsWebsiteBlockQuestion } from "./ProductsWebsiteComponents/ProductsWebsiteBlockQuestion";
import { ProductsWebsiteRecommended } from "./ProductsWebsiteComponents/ProductsWebsiteRecommended";
// import { ProductFooterQuestionBlock } from "../ProductFooterQuestionBlock";
// import { ProductFooterContainer } from "../ProductFooterContainer";
import { ProductsFooterSection } from "../ProductsFooterSection";
import { ProductsWebsiteBlockRefrenzenDesktop } from "./ProductsWebsiteComponents/ProductsWebsiteBlockRefrenzenDesktop";
import axios from "axios";
import { useLocation, useParams } from 'react-router-dom';

export const ProductsWebsite = () => {
    const { setCounselerList, setProductIdList, setGradimoAdviceNow, setGradimoContact, baseBackendRoute, setProductRecommendIdList, productIdList, setIsMobile, setCurWidth, setProductsList, setCurrentPage, setCurrentPageContent, currentPage, currentPageContent } = useContext(AppContext);
    const [mobile, setMobile] = useState(false);
    const { id } = useParams();


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
    const fetchData = async () => {
        await axios.get(`${baseBackendRoute}/api/v1/products/product/${encodeURIComponent(id)}`)
            .then((res) => {
                console.log(res.data);
                setCurrentPageContent(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    // const customParam = location.searchParams.get('page');
    useEffect(() => {
        console.log('id below')
        console.log(id);
        setCurrentPage(id);
        document.title = "Gradimo Skupaj  - Digital what you need."
        document.body.classList.add("page-template")
        document.body.classList.add("page-template-template-produkt");
        document.body.classList.add("page-template-template-produkt-php");
        document.body.classList.add("page");
        document.body.classList.add("page-id-83763");
        document.body.classList.add("wp-custom-logo");
        document.body.classList.add("wp-embed-responsive");



        const head = document.head;
        const link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/marketing/wp-includes/css/dashicons.min9b30.css"
        link.media = "all"
        head.appendChild(link)

        const head1 = document.head;
        const link1 = document.createElement("link");

        link1.type = "text/css";
        link1.rel = "stylesheet";
        link1.href = "/marketing/wp-content/plugins/post-views-counter/css/frontend.min676b.css"
        link1.media = "all"
        head1.appendChild(link1)


        const head2 = document.head;
        const link2 = document.createElement("link");

        link2.type = "text/css";
        link2.rel = "stylesheet";
        link2.href = "/marketing/wp-content/themes/heroldmarketing/css/import5152.css"
        link2.media = "all"
        head2.appendChild(link2)


        const head3 = document.head;
        const link3 = document.createElement("link");

        link3.type = "text/css";
        link3.rel = "stylesheet";
        link3.href = "/marketing/wp-content/themes/heroldmarketing/css/slick9b30.css"
        link3.media = "all"
        head3.appendChild(link3)

        const head4 = document.head;
        const link4 = document.createElement("link");

        link4.type = "text/css";
        link4.rel = "stylesheet";
        link4.href = "/marketing/wp-content/themes/heroldmarketing/style5152.css"
        link4.media = "all"
        head4.appendChild(link4)

        const head5 = document.head;
        const link5 = document.createElement("link");


        link5.type = "text/css";
        link5.rel = "stylesheet";
        link5.href = "/marketing/wp-content/themes/heroldmarketing/css/slick-theme8a54.css"
        link5.media = "all"
        head5.appendChild(link5)






        const head6 = document.head;
        const link6 = document.createElement("link");

        link6.type = "text/css";
        link6.rel = "stylesheet";
        link6.href = "/marketing/wp-content/themes/heroldmarketing/css/style.min10d4.css"
        link6.media = "all"
        head6.appendChild(link6)

        const head7 = document.head;
        const link7 = document.createElement("link");

        link7.type = "text/css";
        link7.rel = "stylesheet";
        link7.href = "/marketing/wp-content/themes/heroldmarketing/css/product.min18c7.css"
        link7.media = "all"
        head7.appendChild(link7)

        const head9 = document.head;
        const link9 = document.createElement("link");

        link9.type = "text/css";
        link9.rel = "stylesheet";
        link9.href = "/marketing/wp-content/themes/heroldmarketing/css/website.css"
        link9.media = "all"
        head9.appendChild(link9)


        // const fetchData = async () => {
        //     const res = await axios.get('http://212.44.107.172/api/v1/products/product/');
        //     const resData = await res.data.sort((a, b) => a.id - b.id);
        //     setProductsList(resData);
        //     console.log(resData);
        // }

        console.log("width: " + window.innerWidth);
        const fetchData = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/products/product/${encodeURIComponent(id)}`)
                .then((res) => {
                    console.log(res.data);
                    setCurrentPageContent(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        fetchData();


        const tempFetchData = async () => {
            const res = await axios.get(`${baseBackendRoute}/api/v1/products/product/`);
            const resData = await res.data.sort((a, b) => a.id - b.id);
            setProductsList(resData);
            const ids = await resData.map(product => product.id);
            setProductIdList(ids);
            console.log(ids);
        }
        tempFetchData();

        const fetchAnotherData = async () => {
            const res = await axios.get(`${baseBackendRoute}/api/v1/products/product/`);
            const resData = await res.data.sort((a, b) => a.id - b.id);
            setProductsList(resData);
            console.log(resData);
        }
        fetchAnotherData();


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
                    setCounselerList(response.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getCounselersList();

    }, [setCurrentPage, setCurrentPageContent])




    return (
        <>
            <div id="page" className="site">
                <a class="skip-link screen-reader-text" href="#primary" _msttexthash="238654" _msthash="15">Skip to content</a>
                <ProductNavigationBar />
                <div className='site-main' id='primary'>
                    <article id="post-50" className="post-50 page type-page status-publish hentry">
                        <div className='entry-content'>
                            <ProductWebsiteFirstViewRocket />
                            <ProductWebsiteCardSlider />
                            <div className='container'>
                                {
                                    currentPage === "1" ?
                                        <ProductsWebsiteBlockRefrenzenDesktop />
                                        : ""
                                }
                            </div>
                            <ProductsWebsiteQuestionBlock />
                            {
                                currentPage === "1" ?
                                    <ProductsWebsiteSectionComponents />
                                    : ""
                            }
                            <ProductsWebsiteSecondBlock />
                            <ProductsWebsiteThirdBlock />
                            <ProductsWebsiteOpacityBlock />
                            <ProductsWebsiteCitationBlock />
                            {
                                currentPageContent?.productfaq !== null ?
                                    <ProductsWebsiteFAQSection />
                                    :
                                    ""
                            }
                            <ProductsWebsiteBlockService />
                            <span id="anker_beratung"></span>
                            <ProductsWebsiteBlockQuestion />
                            <ProductsWebsiteRecommended />
                        </div>
                    </article>
                </div>
                {/* <footer>
                    <a className="call-p alltel" href="tel:+4350485607">
                        <p>+43 (0)5 0485-607</p>
                    </a>
                    <a class="call alltel" href="tel:+4350485607" style={{}}>
                        <img width="24" height="24" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/phone.svg" alt="Phone" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/phone.svg" data-ll-status="loaded" class="entered lazyloaded" _mstalt="59826" _msthash="141" />
                        <noscript><img width="24" height="24" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/phone.svg" alt="Phone" /></noscript>
                    </a>
                    <ProductFooterQuestionBlock />
                    <ProductFooterContainer />
                </footer> */}
                <ProductsFooterSection />
            </div>
        </>
    )
}