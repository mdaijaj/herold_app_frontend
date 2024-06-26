import { useContext, useEffect, useState } from "react"
import { AdvisorsNavigationBar } from "../AdvisorsNavigationBar";
import { AdvisorsFooterQuestionBlock } from "../AdvisorsFooterQuestionBlock";
import { AdvisorsFooterBody } from "../AdvisorsFooterBody";
import { AdvisorBeingVisibleOnlineFirstContainer } from "./AdvisorBeingVisibleOnlineComponents.jsx/AdvisorVisOnlineFirstContainer";
import { AdvisorBeingVisibleOnlineHeroldBlogTitle } from "./AdvisorBeingVisibleOnlineComponents.jsx/AdvisorVisOnlineHeroldBlogTitle";
import { AdvisorBeingVisibleOnlineThreePosts } from "./AdvisorBeingVisibleOnlineComponents.jsx/AdvisorVisOnlineThreePosts";
import { AdvisorBeingVisibleOnlineAllCatsDisplay } from "./AdvisorBeingVisibleOnlineComponents.jsx/AdvisorVisOnlineAllCatsDisplay";
import AppContext from "../../../AppContext";
import axios from "axios";
import { useParams } from "react-router";

export const AdvisorBeingVisibleOnline = () => {
    const { setAdvisorPageContent, setGradimoAdviceNow, counselerList, counselerIdList, setProductsList, setCounselerIdList, setCounselerList, baseBackendRoute } = useContext(AppContext);
    const { id } = useParams();
    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia('(max-width: 1024px)').matches);


    useEffect(() => {
        const fetchAnotherData = async () => {
            const res = await axios.get(`${baseBackendRoute}/api/v1/products/product/`);
            const resData = await res.data.sort((a, b) => a.id - b.id);
            setProductsList(resData);
            console.log(resData);
        }
        fetchAnotherData();

        const fetchPageData = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/counselor/counselor/${encodeURIComponent(id)}/articles/`)
                .then((resp) => {
                    setAdvisorPageContent(resp.data);
                })
                .catch((err) => {
                    console.log(err);

                })

        }

        fetchPageData();

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
                            console.log(j.slug);
                            l.push(j.slug);
                            // setCounselerIdList((prevState) => [...prevState, j.id]);
                        }
                        setCounselerIdList(l);
                    }
                    //for (let j in response.data) {
                    // console.log(j)


                    //}
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        getCounselersList();


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


        document.title = "Gradimo Skupaj - Digital what you need.";
        document.body.style.overflow = "hidden";
        document.body.classList.add("archive");
        document.body.classList.add("category");
        document.body.classList.add("category-online-praesenz");
        document.body.classList.add("category-8");
        document.body.classList.add("wp-custom-logo");
        document.body.classList.add("wp-embed-responsive");
        document.body.classList.add("sticky");

        var head = document.head;
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/helpie-faq/assets/main.bundleac02.css"
        link.media = "all"
        head.appendChild(link)

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/plugins/ajax-load-more-anything/css/ald-styles2f91.css?ver=2.4.6"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/contact-form-7-style/css/frontendac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/contact-form-7-style/css/responsiveac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/contact-form-7/includes/css/stylesac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/kk-star-ratings/src/core/public/css/kk-star-ratingsac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/kk-star-ratings/src/core/public/css/kk-star-ratingsac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/lemon-firmenkaruselle/lemon_firmen_stylesac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/easy-table-of-contents/vendor/icomoon/style.minac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/plugins/easy-table-of-contents/assets/css/screen.min01f0.css?ver=2.0.17"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/themefonts.minac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/font-awesome/4.6.1/css/font-awesome.minac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/themes/herold_blog_theme_neu/assets/css/wordpress-base.minc048.css?ver=0.1.08"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/style.minac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/custom_work_stylesac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/themes/herold_blog_theme_neu/style_additional.minc048.css?ver=0.1.08"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/themes/herold_blog_theme_neu/assets/css/typeahead.minc048.css?ver=0.1.08"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/fonts/colfaxweb/font-stylesac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/heroldblog_blogac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/slickac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/ajax-search-lite/css/style.basicac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/ajax-search-lite/css/style-simple-redac02.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-includes/css/dist/block-library/style.minc8d8.css"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/custom_work_stylesac02.css?ver=1696577368"
        link.type = "text/css";
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/heroldblog_blogac02.css?ver=1696577368"
        link.type = "text/css";
        link.media = "all";
        head.appendChild(link);

    }, [])
    return (
        <>
            <div id="page" className="site">
                <a class="skip-link screen-reader-text" href="#primary" _msttexthash="238654" _msthash="15">Skip to content</a>
                <AdvisorsNavigationBar />
                <main id="primary" class="site-main test test" style={isLargeScreen ? {} : { marginTop: "100px" }}>
                    <AdvisorBeingVisibleOnlineFirstContainer />
                    <div class="flex_wrapper three_posts_wrap container">
                        <AdvisorBeingVisibleOnlineHeroldBlogTitle />
                        <div class="archive_desc flex_wrapper">
                        </div>
                        <AdvisorBeingVisibleOnlineThreePosts />

                    </div>
                    <hr />
                    <div class="flex_wrapper display_all_cats container">
                        <AdvisorBeingVisibleOnlineAllCatsDisplay />
                    </div>
                </main>
                <footer>
                    <AdvisorsFooterQuestionBlock />
                    <AdvisorsFooterBody />
                </footer>
            </div>
        </>
    )
}