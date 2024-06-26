import { useContext, useEffect } from 'react';
// import './CustomStylesFiles/productsstyles.css';
import { ProductNavigationBar } from './ProductsComponents/ProductsNavigationBar';
import { ProductFirstViewRocket } from './ProductsComponents/ProductFirstViewRocket';
import { ProductTagContainer } from './ProductsComponents/ProductTagContainter';
import { ProductCardSlider } from './ProductsComponents/ProductCardSlider';
import { ProductConsultationBlock } from './ProductsComponents/ProductConsultationBlock';
import { ProductBlockService } from './ProductsComponents/ProductBlockService';
import AppContext from '../AppContext';
import { ProductsFooterSection } from './ProductsComponents/ProductsFooterSection';
import axios from 'axios';
export const Products = () => {
    const { setTrustedImages, setGradimoAdviceNow, setProductsPage, setMarketingGradimo, setGradimoContact, setCounselerIdList, counselerList, counselerIdList, setIsMobile, setProductsList, baseBackendRoute, setCounselerList } = useContext(AppContext);
    useEffect(() => {
        document.title = "Gradimo Skupaj - Digital what you need.";
        document.body.style.overflow = "hidden";


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

        var head = document.head;
        var link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/marketing/wp-includes/css/dashicons.min9b30.css"
        link.media = "all"
        head.appendChild(link)

        var head1 = document.head;
        var link1 = document.createElement("link");

        link1.type = "text/css";
        link1.rel = "stylesheet";
        link1.href = "/marketing/wp-content/plugins/post-views-counter/css/frontend.min676b.css"
        link1.media = "all"
        head1.appendChild(link1)

        var head2 = document.head;
        var link2 = document.createElement("link");

        link2.type = "text/css";
        link2.rel = "stylesheet";
        link2.href = "/marketing/wp-content/themes/heroldmarketing/css/import5152.css"
        link2.media = "all"
        head2.appendChild(link2)

        var head3 = document.head;
        var link3 = document.createElement("link");

        link3.type = "text/css";
        link3.rel = "stylesheet";
        link3.href = "/marketing/wp-content/themes/heroldmarketing/css/slick9b30.css"
        link3.media = "all"
        head3.appendChild(link3)

        // link = document.createElement("link");
        // link.type = "text/css";
        // link.rel = "stylesheet";
        // link.href = "/advisors/wp-content/cache/min/1/ratgeber/wp-content/themes/herold_blog_theme_neu/aboutnavstyle.css"
        // link.media = "all";
        // head.appendChild(link);

        // var head4 = document.head;
        // var link4 = document.createElement("link");

        // link4 = document.createElement("link");
        // link4.type = "text/css";
        // link4.rel = "stylesheet";
        // link4.href = "/advisors/wp-content/themes/herold_blog_theme_neu/assets/css/aboutword.css"
        // link4.media = "all";
        // head4.appendChild(link4);

        var head5 = document.head;
        var link5 = document.createElement("link");

        link5.type = "text/css";
        link5.rel = "stylesheet";
        link5.href = "/marketing/wp-content/themes/heroldmarketing/style5152.css"
        link5.media = "all"
        head.appendChild(link5)

        var head6 = document.head;
        var link6 = document.createElement("link");

        link6.type = "text/css";
        link6.rel = "stylesheet";
        link6.href = "/marketing/wp-content/themes/heroldmarketing/css/slick-theme8a54.css"
        link6.media = "all"
        head6.appendChild(link6)

        var head8 = document.head;
        var link8 = document.createElement("link");

        link8.type = "text/css";
        link8.rel = "stylesheet";
        link8.href = "/marketing/wp-content/themes/heroldmarketing/css/product.min18c7.css"
        link8.media = "all"
        head8.appendChild(link8)


        var head7 = document.head;
        var link7 = document.createElement("link");

        link7.type = "text/css";
        link7.rel = "stylesheet";
        link7.href = "/marketing/wp-content/themes/heroldmarketing/css/style.min10d4.css"
        link7.media = "all"
        head7.appendChild(link7);


        const getProductsPage = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/products/product-page/`)
                .then((res) => {
                    console.log(res);
                    setProductsPage(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getProductsPage();

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

        const fetchData = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/products/product/`)
                .then(async (res) => {
                    const resData = await res.data.sort((a, b) => a.id - b.id);
                    setProductsList(resData);
                    console.log(resData);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        fetchData();

        const getMarketingGradimo = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/account/gradimo-skupaj/`)
                .then((res) => {
                    console.log(res);
                    setMarketingGradimo(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getMarketingGradimo();


        const getCounselersList = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/counselor/counselors/`)
                .then((response) => {
                    if (counselerList?.length === 0) {
                        console.log('products callling');
                        setCounselerList(response.data);
                    }

                    if (counselerIdList.length === 0) {
                        console.log('products ID callling');
                        let l = []
                        for (let j of response.data) {
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

        const getTrustedImages = async () => {
            await axios.get(`${baseBackendRoute}/api/v1/account/trusted-customers/?format=json`)
                .then((res) => {
                    console.log(res);
                    setTrustedImages(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getTrustedImages();


        // if (window.innerWidth <= 767) {
        //     setIsMobile(true);
        // }
        // else {
        //     setIsMobile(false);
        // }
    }, [])
    return (
        <>
            <div id="page" className="site">
                <a class="skip-link screen-reader-text" href="#primary" _msttexthash="238654" _msthash="15">Skip to content</a>
                <ProductNavigationBar />
                <main className='site-main' id='primary'>
                    <article id="post-50" className="post-50 page type-page status-publish hentry">
                        <div className='entry-content'>
                            <ProductFirstViewRocket />
                            <ProductTagContainer />
                            <ProductCardSlider />
                            <ProductConsultationBlock />
                            <ProductBlockService />
                        </div>
                    </article>
                </main>
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