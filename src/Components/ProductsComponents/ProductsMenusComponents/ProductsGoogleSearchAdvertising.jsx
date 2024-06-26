import { useContext, useEffect } from "react"
import AppContext from "../../../AppContext"
import { ProductsGoogleSearchAdvertisingFirstViewRocket } from "./ProductsGoogleSearchAdvertisingComponents/ProductsGoogleSearchAdvertisingFirstViewRocket";
import { ProductNavigationBar } from "../ProductsNavigationBar";
// import { ProductFooterQuestionBlock } from "../ProductFooterQuestionBlock";
// import { ProductFooterContainer } from "../ProductFooterContainer";
import { ProductsGoogleSearchAdvertisingCardSlider } from "./ProductsGoogleSearchAdvertisingComponents/ProductsGoogleSearchAdvertisingCardSlider";
import { ProductsGoogleSearchAdvertisingQuestionBlock } from "./ProductsGoogleSearchAdvertisingComponents/ProductsGoogleSearchAdvertisingQuestionBlock";
import { ProductsGoogleSearchAdvertisingFirstBlock } from "./ProductsGoogleSearchAdvertisingComponents/ProductsGoogleSearchAdvertisingFirstBlock";
import { ProductsGoogleSearchAdvertisingSecondBlock } from "./ProductsGoogleSearchAdvertisingComponents/ProductsGoogleSearchAdvertisingSecondBlock";
import { ProductsGoogleSearchAdvertisingOpacityBlock } from "./ProductsGoogleSearchAdvertisingComponents/ProductsGoogleSearchAdvertisingOpacityBlock";
import { ProductsGoogleSearchAdvertisingCitationBlock } from "./ProductsGoogleSearchAdvertisingComponents/ProductsGoogleSearchAdvertisingCitationBlock";
import { ProductsGoogleSearchAdvertisingFAQBlock } from "./ProductsGoogleSearchAdvertisingComponents/ProductsGoogleSearchAdvertisingFAQBlock";
import { ProductsGoogleSearchAdvertisingServiceBlock } from "./ProductsGoogleSearchAdvertisingComponents/ProductsGoogleSearchAdvertisingServiceBlock";
import { ProductsGoogleSearchAdvertisingQuestionSecondBlock } from "./ProductsGoogleSearchAdvertisingComponents/ProductsGoogleSearchAdvertisingQuestionSecondBlock";
import { ProductsGoogleSearchAdvertisingRecommendedBlock } from "./ProductsGoogleSearchAdvertisingComponents/ProductsGoogleSearchAdvertisingRecommendedBlock";
import { ProductsFooterSection } from "../ProductsFooterSection";


export const ProductsGoogleSearchAdvertising = () => {
    const { setIsMobile } = useContext(AppContext);
    useEffect(() => {
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
        link9.href = "/marketing/wp-content/themes/heroldmarketing/css/gsa.css"
        link9.media = "all"
        head9.appendChild(link9)


        if (window.innerWidth <= 767) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    }, [window.innerWidth])
    return (
        <>
            <div id="page" className="site">
                <a class="skip-link screen-reader-text" href="#primary" _msttexthash="238654" _msthash="15">Skip to content</a>
                <ProductNavigationBar />
                <div className='site-main' id='primary'>
                    <article>
                        <div className='entry-content'>
                            <ProductsGoogleSearchAdvertisingFirstViewRocket />
                            <ProductsGoogleSearchAdvertisingCardSlider />
                            <ProductsGoogleSearchAdvertisingQuestionBlock />
                            <ProductsGoogleSearchAdvertisingFirstBlock />
                            <ProductsGoogleSearchAdvertisingSecondBlock />
                            <ProductsGoogleSearchAdvertisingOpacityBlock />
                            <ProductsGoogleSearchAdvertisingCitationBlock />
                            <ProductsGoogleSearchAdvertisingFAQBlock />
                            <ProductsGoogleSearchAdvertisingServiceBlock />
                            <ProductsGoogleSearchAdvertisingQuestionSecondBlock />
                            <ProductsGoogleSearchAdvertisingRecommendedBlock />

                            <div className='container'>

                            </div>
                            <span id="anker_beratung"></span>

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