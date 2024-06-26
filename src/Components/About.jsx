import { useContext, useEffect } from "react"
import { AdvisorsFooterBody } from "./AdvisorsComponents/AdvisorsFooterBody"
import { AdvisorsFooterQuestionBlock } from "./AdvisorsComponents/AdvisorsFooterQuestionBlock"
import { AdvisorsNavigationBar } from "./AdvisorsComponents/AdvisorsNavigationBar"
import { AboutFirstDiv } from "./AboutComponents/AboutFirstDiv"
import { AboutUsNavigationBar } from "./AboutComponents/AboutUsNavigation"
import { AboutSecDiv } from "./AboutComponents/AboutSecDiv"
import { AboutUsThirdDiv } from "./AboutComponents/AboutUsThirdDiv"
import { AboutFourthDiv } from "./AboutComponents/AboutFourthDiv"
import { AboutFifthDiv } from "./AboutComponents/AboutFifthDiv"
import { AboutSixDiv } from "./AboutComponents/AboutSixDiv"
import { AboutSevenDiv } from "./AboutComponents/AboutSevenDiv"
import { AboutEightDiv } from "./AboutComponents/AboutEightDiv"
import { AboutNinthDiv } from "./AboutComponents/AboutNinthDiv"
import { AboutTenthDiv } from "./AboutComponents/AboutTenthDiv"
import { AboutElevenDiv } from "./AboutComponents/AboutElevenDiv"
import { AboutTwelveDiv } from "./AboutComponents/AboutTwelveDiv"
import { AboutQuestion } from "./AboutComponents/AboutQuestion"
import { AboutFootcontainer } from "./AboutComponents/AboutFootContainer"
import axios from "axios";
import AppContext from "../AppContext"

export const About = () => {
    const { articlesList, counselerList, setGradimoAdviceNow, setAboutContent, setGradimoContact, setArticlesList, counselerIdList, setCounselerIdList, setIsMobile, baseBackendRoute, setCounselerList, setProductsList } = useContext(AppContext);
    useEffect(() => {


        const fetchAnotherData = async () => {
            const res = await axios.get(`${baseBackendRoute}/api/v1/products/product/`);
            const resData = await res.data.sort((a, b) => a.id - b.id);
            setProductsList(resData);
            console.log(resData);
        }
        fetchAnotherData();

        const fetchData = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/aboutus/about-gradimo/`)
                .then((res) => {
                    console.log(res);
                    setAboutContent(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        fetchData();


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

        const getCounselersList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/counselor/counselors/`)
                .then((response) => {
                    if (counselerList?.length === 0) {
                        console.log("advisor calling");
                        setCounselerList(response.data);
                    }
                    console.log(response.data);
                    if (counselerIdList?.length === 0) {
                        console.log("advisor id calling");
                        let l = []
                        for (let j of response.data) {
                            console.log(j.id);
                            l.push(j.id);
                            // setCounselerIdList((prevState) => [...prevState, j.id]);
                        }
                        setCounselerIdList(l);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getCounselersList();
        document.title = "Gradimo Skupaj  - Digital what you need.";
        document.body.style.overflow = "hidden";
        document.body.classList.add("home");


        var head = document.head;
        var link = document.createElement("link");

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/about us/site-assets.cdnmns.com/373112e167f382e58a142456f0fdbb68/css/grids4247.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/about us/site-assets.cdnmns.com/373112e167f382e58a142456f0fdbb68/css/hcaptcha4247.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/about us/www.karriere.herold.at/assets/user-style1cff.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/about us/www.karriere.herold.at/assets/sitestyle1cff.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/about us/site-assets.cdnmns.com/373112e167f382e58a142456f0fdbb68/css/external-libs4247.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/about us/site-assets.cdnmns.com/373112e167f382e58a142456f0fdbb68/css/gallery.css"
        link.media = "all";
        head.appendChild(link);


        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/about us/site-assets.cdnmns.com/373112e167f382e58a142456f0fdbb68/css/gallery.css"
        link.media = "all";
        head.appendChild(link);

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

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/aboutnavstyle.css"
        link.media = "all";
        head.appendChild(link);


        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/themes/herold_blog_theme_neu/assets/css/aboutword.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/aboutcustom.css"
        link.media = "all";
        head.appendChild(link);


        // var head2 = document.head;
        // var link2 = document.createElement("link");

        // link2 = document.createElement("link");
        // link2.rel = "stylesheet";
        // link2.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        // head2.appendChild(link2);







        {/* <link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link> */}

    }, [])
    return (
        <>
            <AboutUsNavigationBar />
            <div id="r5001" class="row designRow">
                <div class="container container-fluid">
                    <div class="col col-sm-12">
                        <div id="r5002" role="main" className="row designRow" style={{ marginTop: "101.281px" }}>
                            <div className="container container-fluid">
                                <div className="col col-sm-12">
                                    <AboutFirstDiv />
                                    <AboutSecDiv />
                                    <AboutUsThirdDiv />
                                    <AboutFourthDiv />
                                    <AboutFifthDiv />
                                    <AboutSixDiv />
                                    <AboutSevenDiv />
                                    <AboutEightDiv />
                                    <AboutNinthDiv />
                                    {/* <AboutTenthDiv /> */}
                                    <AboutElevenDiv />
                                    <AboutTwelveDiv />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <a class="skip-link screen-reader-text" href="#primary" _msttexthash="238654" _msthash="15">Skip to content</a>
            <AdvisorsNavigationBar />
            <div id="primary" className="content-area">
                <main id="main" className="site-main" role="main" style={{ marginTop: "100px" }}>
                    <div className="container">
                        <div className="col-md-12">
                            <article id="post-53318" className="post-53318 page type-page status-publish hentry">
                                <div className="entry-content">
                                </div>
                            </article>
                        </div>
                    </div>
                </main>
            </div>
            <footer>
                <AdvisorsFooterQuestionBlock />
                <AdvisorsFooterBody />
            </footer> */}
            </div>
            <footer>
                <AboutQuestion />
                <AboutFootcontainer />
            </footer>
        </>
    )
}