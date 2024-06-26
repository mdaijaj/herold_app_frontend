import { useContext, useEffect, useState } from "react"
import AppContext from "../../../AppContext";

export const ProductsContactFoot = () => {
    const [firstFoot, setFirstFoot] = useState(false);
    const [secondFoot, setSecondFoot] = useState(false);
    const [thirdFoot, setThirdFoot] = useState(false);
    const { gradimoContact, gradimoAdviceNow } = useContext(AppContext);
    useEffect(() => {

    }, [gradimoContact])
    return (
        <>
            <footer>
                <a class="call-p alltel" href={`tel:${gradimoContact?.phone}`}>
                    <p>
                        <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>{gradimoContact?.phone}</font>
                        </font>
                    </p>
                </a>
                <a class="call alltel" href={`tel:${gradimoContact?.phone}`} style={{}}>
                    <img width="24" height="24" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/phone.svg" alt="Phone" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/phone.svg" data-ll-status="loaded" class="entered lazyloaded" />

                </a>
                <div class="block question footer_block_question" style={{ display: 'block' }}>
                    <div class="container" style={{ backgroundColor: gradimoAdviceNow?.color }}>
                        <div class="title-head" dangerouslySetInnerHTML={{ __html: gradimoAdviceNow?.content }}>

                        </div>
                        <div class="secondary-button" id="secondary-button">
                            <a href="/advice-now" target="">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>{gradimoAdviceNow?.buttom_name}</font>
                                </font>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="container footer-container">
                    <div class="footer-body">
                        <div class="accordions">
                            <div id="nav_menu-2" class="widget_nav_menu accordion" onClick={() => { setFirstFoot(!firstFoot) }}>
                                <h4 class="menu-header">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Search find</font>
                                    </font>
                                </h4>
                                <div class="menu-footer-1-suchen-finden-container">
                                    <ul id="menu-footer-1-suchen-finden" class="menu active" style={firstFoot ? { display: 'block' } : {}}>
                                        <li id="menu-item-31" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31">
                                            <a href="/add-company">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Add company</font>
                                                </font>
                                            </a>
                                        </li>
                                        <li id="menu-item-32" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-32">
                                            <a href="/industry-az">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Industries AZ</font>
                                                </font>
                                            </a>
                                        </li>
                                        <li id="menu-item-33" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-33">
                                            <a href="/company-az/A/">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Companies AZ</font>
                                                </font>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="nav_menu-3" class="widget_nav_menu accordion" onClick={() => { setSecondFoot(!secondFoot) }}>
                                <h4 class="menu-header">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Legal</font>
                                    </font>
                                </h4>
                                <div class="menu-footer-2-rechtliches-container">
                                    <ul id="menu-footer-2-rechtliches" class="menu" style={secondFoot ? { display: 'block' } : {}}>
                                        <li id="menu-item-35" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-35">
                                            <a href="/legal/1/">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Data sources</font>
                                                </font>
                                            </a>
                                        </li>
                                        <li id="menu-item-36" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-36">
                                            <a href="/legal/3/">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Conditions</font>
                                                </font>
                                            </a>
                                        </li>
                                        <li id="menu-item-37" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-37">
                                            <a href="/legal/2/">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Disclosure</font>
                                                </font>
                                            </a>
                                        </li>
                                        <li id="menu-item-38" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-38">
                                            <a href="/legal/4/">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Data protection</font>
                                                </font>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="nav_menu-4" class="widget_nav_menu accordion" onClick={() => { setThirdFoot(!thirdFoot) }}>
                                <h4 class="menu-header">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>About Us</font>
                                    </font>
                                </h4>
                                <div class="menu-footer-3-ueber-uns-container">
                                    <ul id="menu-footer-3-ueber-uns" class="menu" style={thirdFoot ? { display: 'block' } : {}}>
                                        <li id="menu-item-88578" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-88578">
                                            <a href="/marketing">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Products</font>
                                                </font>
                                            </a>
                                        </li>
                                        <li id="menu-item-94728" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-93801 current_page_item menu-item-94728">
                                            <a href="/contact" aria-current="page">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Contact</font>
                                                </font>
                                            </a>
                                        </li>
                                        <li id="menu-item-87743" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-87743">
                                            <a href="/about">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>About Gradimo Skupaj</font>
                                                </font>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="social-media">
                            <ul>
                                <li>
                                    <a href="#" target="_blank">
                                        <img width="25px" height="25px" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/facebook.svg" alt="" title="facebook" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/facebook.svg" data-ll-status="loaded" class="entered lazyloaded" />

                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <img width="25px" height="25px" src="https://www.herold.at/marketing/wp-content/uploads/2022/06/icon-pinterest.svg" alt="" title="icon pinterest" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/06/icon-pinterest.svg" data-ll-status="loaded" class="entered lazyloaded" />

                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <img width="25px" height="25px" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/youtube.svg" alt="" title="youtube" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/youtube.svg" data-ll-status="loaded" class="entered lazyloaded" />

                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <img width="25px" height="25px" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/linkedin.svg" alt="" title="linkedin" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/linkedin.svg" data-ll-status="loaded" class="entered lazyloaded" />

                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <img width="25px" height="25px" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/xing-logo.svg" alt="" title="xing logo" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/xing-logo.svg" data-ll-status="loaded" class="entered lazyloaded" />

                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="herold-logo">
                            <a href="/">
                                <img id="lg-def" width="196px" height="55px" src="/logo_img/new-logo-modified.png" alt="" data-lazy-src="/logo_img/new-logo-modified.png" data-ll-status="loaded" class="entered lazyloaded" />

                                <img id="lg-inv" width="196px" height="55px" src="/logo_img/new-logo-modified.png" alt="" style={{ display: "none" }} data-lazy-src="/logo_img/new-logo-modified.png" />

                            </a>
                        </div>
                        <div class="impressum">
                            <p>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>© 2024 Gradimo Skupaj Business Data GmbH</font>
                                </font>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}