import { useEffect } from "react";
import { AdvisorsNavigationBar } from "../AdvisorsNavigationBar";
import { AdvisorsFooterQuestionBlock } from "../AdvisorsFooterQuestionBlock";
import { AdvisorsFooterBody } from "../AdvisorsFooterBody";
import { AdvisorAllWebsitesFirstContainerBlock } from "./AdvisorAllWebsitesComponents/AdvisorAllWebsiteFirstContainerBlock";
import { AdvisorAllWebsitesHeroldBlogs } from "./AdvisorAllWebsitesComponents/AdvisorAllWebsiteHeroldBlogs";
import { AdvisorAllWebsitesAllCatsDisplay } from "./AdvisorAllWebsitesComponents/AdvisorAllWebsiteAllCatsDisplay";
import { AdvisorAllWebsitesThreePosts } from "./AdvisorAllWebsitesComponents/AdvisorAllWebsiteThreePosts";

export const AdvisorAllWebsites = () => {
    useEffect(() => {
        document.title = "Radimo Skupaj  - Digital what you need.";
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

    }, []);
    return (
        <>
            <div id="page" className="site">
                <a class="skip-link screen-reader-text" href="#primary" _msttexthash="238654" _msthash="15">Skip to content</a>
                <AdvisorsNavigationBar />
                <main id="primary" class="site-main test test">
                    <AdvisorAllWebsitesFirstContainerBlock />
                    <div class="flex_wrapper three_posts_wrap container">
                        <AdvisorAllWebsitesHeroldBlogs />
                        <div class="archive_desc flex_wrapper"></div>
                        <AdvisorAllWebsitesAllCatsDisplay />
                    </div>
                    <hr />
                    <div class="flex_wrapper display_all_cats container">
                        <AdvisorAllWebsitesThreePosts />
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