import { useContext, useEffect } from "react";
import AppContext from "../../../AppContext";
import '../../CustomStylesFiles/productsmdonline.css';
import { ProductsMarketingDataOnlineNavigation } from "./ProductsMarketingDataOnlineComponents/ProductsMarketingDataOnlineNavigation";

export const ProductsMarketingDataOnline = () => {
    const { setIsMobile } = useContext(AppContext);
    useEffect(() => {
        document.title = "Herald - Digital what you need.";
        document.body.classList.add("page-template");
        document.body.classList.add("page-template-elementor_header_footer");
        document.body.classList.add("menu_sidebar_dropdown");
        document.body.classList.add("mega-menu-primary");
        if (window.innerWidth <= 767) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    }, [window.innerWidth])
    return (
        <>
            <div className="wrapper">
                <ProductsMarketingDataOnlineNavigation />
            </div>

            {/* <div id="page" className="site">
                <a class="skip-link screen-reader-text" href="#primary" _msttexthash="238654" _msthash="15">Skip to content</a>
                <ProductNavigationBar />
                <div className='site-main' id='primary'>
                    <article>
                        <div className='entry-content'>
                        </div>
                    </article>
                </div>
                <footer>
                    <a className="call-p alltel" href="tel:+4350485607">
                        <p>+43 (0)5 0485-607</p>
                    </a>
                    <a class="call alltel" href="tel:+4350485607" style={{}}>
                        <img width="24" height="24" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/phone.svg" alt="Phone" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/phone.svg" data-ll-status="loaded" class="entered lazyloaded" _mstalt="59826" _msthash="141" />
                        <noscript><img width="24" height="24" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/phone.svg" alt="Phone" /></noscript>
                    </a>
                    <ProductFooterQuestionBlock />
                    <ProductFooterContainer />
                </footer>
            </div> */}
        </>
    )
}