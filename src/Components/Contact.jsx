import { useContext, useEffect } from "react"
import { AdvisorsNavigationBar } from "./AdvisorsComponents/AdvisorsNavigationBar";
import { AdvisorsFooterBody } from "./AdvisorsComponents/AdvisorsFooterBody";
import { AdvisorsFooterQuestionBlock } from "./AdvisorsComponents/AdvisorsFooterQuestionBlock";
import { ContactFAQ } from "./ContactComponents/ContactFAQ";
import { ContactBlockService } from "./ContactComponents/ContactBlockService";
import { ContactAnotherSec } from "./ContactComponents/ContactAnotherSec";
import { ProductNavigationBar } from "./ProductsComponents/ProductsNavigationBar";
import { ProductsFooterSection } from "./ProductsComponents/ProductsFooterSection";
import axios from "axios";
import AppContext from "../AppContext";
import { ProductsContactNav } from "./ProductsComponents/ProductsContactComponents/ProductsContactNav";
export const Contact = () => {
    const { counselerIdList, setGradimoAdviceNow, setGradimoContact, setContactDetails, counselerList, setCounselerIdList, setCounselerList, baseBackendRoute, setProductIdList, setProductsList } = useContext(AppContext);
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

        const getContactDetail = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/legal/contact-page/?format=json`)
                .then((res) => {
                    console.log(res);
                    setContactDetails(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getContactDetail();

        const fetchData = async () => {
            const res = await axios.get(`${baseBackendRoute}/api/v1/products/product/`);
            const resData = await res.data.sort((a, b) => a.id - b.id);
            setProductsList(resData);
            const ids = await resData.map(product => product.id);
            setProductIdList(ids);
            console.log(ids);
        }
        fetchData();

        document.title = "Gradimo Skupaj  - Digital what you need.";
        document.body.style.overflow = "hidden";
        document.body.classList.add("home");


        const head = document.head;
        const link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/marketing/wp-includes/css/dashicons.min9b30.css"
        link.media = "all"
        head.appendChild(link)

        const head_1 = document.head;
        const link_1 = document.createElement("link");
        link_1.type = "text/css";
        link_1.rel = "stylesheet";
        link_1.href = "/marketing/wp-content/plugins/post-views-counter/css/frontend.min676b.css"
        link_1.media = "all"
        head_1.appendChild(link_1)

        const head_2 = document.head;
        const link_2 = document.createElement("link");
        link_2.type = "text/css";
        link_2.rel = "stylesheet";
        link_2.href = "/marketing/wp-content/themes/heroldmarketing/css/import5152.css"
        link_2.media = "all"
        head_2.appendChild(link_2)

        const head_3 = document.head;
        const link_3 = document.createElement("link");
        link_3.type = "text/css";
        link_3.rel = "stylesheet";
        link_3.href = "/marketing/wp-content/themes/heroldmarketing/css/slick9b30.css"
        link_3.media = "all"
        head_3.appendChild(link_3)


        const head_4 = document.head;
        const link_4 = document.createElement("link");

        link_4.type = "text/css";
        link_4.rel = "stylesheet";
        link_4.href = "/marketing/wp-content/themes/heroldmarketing/style5152.css"
        link_4.media = "all"
        head_4.appendChild(link_4)

        const head_5 = document.head;
        const link_5 = document.createElement("link");


        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/marketing/wp-content/themes/heroldmarketing/css/slick-theme8a54.css"
        link_5.media = "all"
        head_5.appendChild(link_5)

        const head_6 = document.head;
        const link_6 = document.createElement("link");
        link_6.type = "text/css";
        link_6.rel = "stylesheet";
        link_6.href = "/marketing/wp-content/themes/heroldmarketing/css/style.min10d4.css"
        link_6.media = "all"
        head_6.appendChild(link_6)

        const head_7 = document.head;
        const link_7 = document.createElement("link");
        link_7.type = "text/css";
        link_7.rel = "stylesheet";
        link_7.href = "/marketing/wp-content/themes/heroldmarketing/css/product.min18c7.css"
        link_7.media = "all"
        head_7.appendChild(link_7);

        const head_8 = document.head;
        const link_8 = document.createElement("link_8");
        link_8.type = "text/css";
        link_8.rel = "stylesheet";
        link_8.href = "/marketing/wp-content/themes/heroldmarketing/css/product.min18c7.css"
        link_8.media = "all"
        head_8.appendChild(link_8);

        const head_9 = document.head;
        const link_9 = document.createElement("link");
        link_9.type = "text/css";
        link_9.rel = "stylesheet";
        link_9.href = "/marketing/wp-content/themes/heroldmarketing/css/style.min10d4.css"
        link_9.media = "all"
        head_9.appendChild(link_9);

        const head_10 = document.head;
        const link_10 = document.createElement("link");
        link_10.type = "text/css";
        link_10.rel = "stylesheet";
        link_10.href = "/marketing/wp-includes/css/dist/block-library/style.min9b30.css"
        link_10.media = "all"
        head_10.appendChild(link_10);

        const head_11 = document.head;
        const link_11 = document.createElement("link");
        link_11.type = "text/css";
        link_11.rel = "stylesheet";
        link_11.href = "/marketing/wp-content/themes/heroldmarketing/css/contact.css"
        link_11.media = "all"
        head_11.appendChild(link_11);


    }, [])

    return (
        <>
            <div id="page" className="site">
                <a class="skip-link screen-reader-text" href="#primary" _msttexthash="238654" _msthash="15">Skip to content</a>
                <ProductsContactNav />
                <main id="main" className="site-main" role="main" style={{ marginTop: "100px" }}>
                    <article>
                        <div className="entry-content">
                            <ContactFAQ />
                            {/* <ContactBlockService /> */}
                            <ContactAnotherSec />
                        </div>
                    </article>
                </main>
                <ProductsFooterSection />
            </div>
        </>
    )
}