import { useContext, useEffect } from "react";
import { AdvisorsFooterBody } from "../../../AdvisorsFooterBody";
import { AdvisorsFooterQuestionBlock } from "../../../AdvisorsFooterQuestionBlock";
import { AdvisorsNavigationBar } from "../../../AdvisorsNavigationBar";
import { AdvisorVisOnlineNegReviewsWidgetBreadcrumb } from "./AdvisorVisOnlineNegReviewsComponents/AdvisorVisOnlineNegWidgetBread";
import { AdvisorVisOnlineNegReviewsElementorInlineItems } from "./AdvisorVisOnlineNegReviewsComponents/AdvisorVisOnlineNegReviewsElementor";
import { AdvisorVisOnlineNegReviewsGCFull } from "./AdvisorVisOnlineNegReviewsComponents/AdvisorVisOnlineNegReviewsGCFull";
import { AdvisorOnlineNegReviewsGCHalf } from "./AdvisorVisOnlineNegReviewsComponents/AdvisorVisOnlineNegReviewsGCHalf";
import { AdvisorVisOnlineNegReviewsFirstPara } from "./AdvisorVisOnlineNegReviewsComponents/AdvisorVisOnlineNegReviewsFirstPara";
import { AdvisorVisOnlineNegReviewsTocContainer } from "./AdvisorVisOnlineNegReviewsComponents/AdvisorVisOnlineNegReviewsTocContainer";
import { AdvisorVisOnlineNegReviewsFirstTextContents } from "./AdvisorVisOnlineNegReviewsComponents/AdvisorVisOnlineNegReviewsFirstTextContents";
import { AdvisorsVisOnlineNegReviewsHeroldCTABlock } from "./AdvisorVisOnlineNegReviewsComponents/AdvisorsVisOnlineNegReviewsHeroldCTABlock";
import { AdvisorsVisOnlineNegReviewsSecondTextContent } from "./AdvisorVisOnlineNegReviewsComponents/AdvisorsVisOnlineNegReviewsSecondTextContent";
import { AdvisorVisOnlineNegReviewsSideBarContent } from "./AdvisorVisOnlineNegReviewsComponents/AdvisorVisOnlineNegReviewsSideBarContent";
import { AdvisorVisOnlineNegReviewsNextBlock } from "./AdvisorVisOnlineNegReviewsComponents/AdvisorVisOnlineNegReviewsNextBlock";
import { AdvisorVisOnlineNegReviewsNegAnotherBlock } from "./AdvisorVisOnlineNegReviewsComponents/AdvisorVisOnlineNegAnotherBlock";
import { useParams } from "react-router";
import AppContext from "../../../../../AppContext";
import axios from "axios";
import { AdvisorVisOnlineNegReviewsIniBl } from "./AdvisorVisOnlineNegReviewsComponents/AdvisorVisOnlineNegReviewsIniBl";
import { AdvisorVisOnlineNegReviewsHead } from "./AdvisorVisOnlineNegReviewsComponents/AdvisorVisOnlineNegReviewsHead";

export const AdvisorVisOnlineNegReviews = () => {
    const { setArticleIdList, setGradimoAdviceNow, setMoreArticlesList, setEditorIdList, articlePageContent, setArticlePageContent, baseBackendRoute, setCounselerIdList, setCounselerList, setProductsList, counselerIdList, counselerList } = useContext(AppContext);
    const { page, id } = useParams();
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


        const fetchAnotherData = async () => {
            const res = await axios.get(`${baseBackendRoute}/api/v1/products/product/`);
            const resData = await res.data.sort((a, b) => a.id - b.id);
            setProductsList(resData);
            console.log(resData);
        }
        fetchAnotherData();

        const fetchOtherData = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/counselor/articles/${encodeURIComponent(page)}`)
                .then((res) => {
                    console.log(res);
                    setArticlePageContent(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        fetchOtherData();

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



        const getEditorIdList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/counselor/editors/`)
                .then((res) => {

                    console.log(res);
                    const ids = res.data.map(item => item.id);
                    setEditorIdList(ids);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getEditorIdList();


        const getArticleIdList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/counselor/counselor/${encodeURIComponent(id)}/articles/`)
                .then(async (res) => {
                    console.log(res.data);
                    const ids = await res.data.articles?.map(item => item.id);
                    console.log(ids);
                    setArticleIdList(ids);
                    setMoreArticlesList(res.data.articles);
                    console.log(res.data.articles);

                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getArticleIdList();





        document.title = "Gradimo Skupaj - Digital what you need.";
        document.body.style.overflow = "hidden";
        document.body.classList.add("home");


        var head = document.head;
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/helpie-faq/assets/main.bundleac02.css?ver=1696577368"
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
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/contact-form-7-style/css/frontendac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/contact-form-7-style/css/responsiveac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/contact-form-7/includes/css/stylesac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/kk-star-ratings/src/core/public/css/kk-star-ratingsac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/kk-star-ratings/src/core/public/css/kk-star-ratingsac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/lemon-firmenkaruselle/lemon_firmen_stylesac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/easy-table-of-contents/vendor/icomoon/style.minac02.css?ver=1696577368"
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
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/themefonts.minac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/font-awesome/4.6.1/css/font-awesome.minac02.css?ver=1696577368"
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
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/style.minac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/custom_work_stylesac02.css?ver=1696577368"
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
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/fonts/colfaxweb/font-stylesac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/heroldblog_blogac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/css/slickac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/ajax-search-lite/css/style.basicac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/plugins/ajax-search-lite/css/style-simple-redac02.css?ver=1696577368"
        link.media = "all";
        head.appendChild(link);


        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-includes/css/dist/block-library/style.minc8d8.css?ver=5.8.3"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/plugins/gallery-block-lightbox/dist/baguetteBox.min90f9.css?ver=1.11.1"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/plugins/gallery-block-lightbox/dist/baguetteBox.min90f9.css?ver=1.11.1"
        link.media = "all";
        head.appendChild(link);

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/plugins/shariff/css/shariff.min.css?ver=4.6.7"
        link.media = "all";
        head.appendChild(link);


        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/basic.min.css"
        link.media = "all";
        head.appendChild(link);

    }, [])
    return (
        <>

            <div id="page" className="site">
                <a class="skip-link screen-reader-text" href="#primary" _msttexthash="238654" _msthash="15">Skip to content</a>
                <AdvisorsNavigationBar />
                <main id="primary" className="site-main" role="main" style={{ marginTop: "100px" }}>
                    <AdvisorVisOnlineNegReviewsWidgetBreadcrumb />
                    <article id="post-53318" className="post-4962 post type-post status-publish format-standard has-post-thumbnail hentry category-online-praesenz">
                        <div className="entry-content fallback_content_true ">
                            <AdvisorVisOnlineNegReviewsHead />
                            <div className="wp-block-group">
                                <div className="wp-block-group__inner-container">
                                    <div className="wp-block-group">
                                        <div className="wp-block-group__inner-container">
                                            <div className="elementor-element elementor-mobile-align-center elementor-align-left elementor-widget elementor-widget-post-info">
                                                <div className="elementor-widget-container">
                                                    <AdvisorVisOnlineNegReviewsElementorInlineItems />
                                                </div>
                                            </div>
                                            <AdvisorVisOnlineNegReviewsIniBl />
                                            <div class="gc__mb" _msthidden="6">
                                                <div class="gc__sidebar" style={{ backgroundColor: "#fec6011" }} _msthidden="6">
                                                    <AdvisorVisOnlineNegReviewsGCFull />
                                                    <AdvisorOnlineNegReviewsGCHalf />

                                                </div>
                                            </div>
                                            <AdvisorVisOnlineNegReviewsFirstPara />
                                            <div className="wp-block-columns flex_wrapper">
                                                <div className="wp-block-column" style={{ flexBasis: "66.66%" }}>
                                                    <div id="ez-toc-container" className="ez-toc-v2_0_17 counter-hierarchy">
                                                        <AdvisorVisOnlineNegReviewsTocContainer />
                                                    </div>
                                                    <AdvisorsVisOnlineNegReviewsSecondTextContent />
                                                </div>
                                                <div className="wp-block-column blog_sidebar" style={{ flexBasis: "33.33%" }}>
                                                    <AdvisorVisOnlineNegReviewsSideBarContent />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <AdvisorVisOnlineNegReviewsNextBlock />
                        </div>
                        <AdvisorVisOnlineNegReviewsNegAnotherBlock />
                    </article>
                </main>
                <footer>
                    <AdvisorsFooterQuestionBlock />
                    <AdvisorsFooterBody />
                </footer>
            </div>
        </>
    )
}