import { useState } from "react"

export const AboutFootcontainer = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openLegal, setOpenLegal] = useState(false);
    const [openAboutUs, setOpenAboutUs] = useState(false);
    const [openLearnMore, setOpenLearnMore] = useState(false);
    return (
        <>
            <div class="container-1 footer-container-1">
                <div class="footer-body">
                    <div class="accordions">
                        <div id="nav_menu-2" class="widget_nav_menu accordion-1">
                            <h4 onClick={() => { setOpenSearch(!openSearch) }} className={openSearch ? "menu-header active" : "menu-header"} _msttexthash="159224" _msthash="153">Search &amp; Find </h4>
                            <div class="menu-footer-1-suchen-finden-container-1">
                                <ul id="menu-footer-1-suchen-finden" class="menu" style={openSearch ? { display: 'block' } : { display: '' }}>
                                    <li id="menu-item-31" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31">
                                        <a href="/add-company" _msttexthash="152802" _msthash="154">Add Company</a>
                                    </li>
                                    <li id="menu-item-32" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-32">
                                        <a href="/industry-az" _msttexthash="208650" _msthash="155">Industries A-Z</a>
                                    </li>
                                    <li id="menu-item-33" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-33">
                                        <a href="/company-az/A/" _msttexthash="179062" _msthash="156">Companies A-Z</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="nav_menu-3" class="widget_nav_menu accordion-1">
                            <h4 className={openLegal ? "menu-header active" : "menu-header"} onClick={() => { setOpenLegal(!openLegal) }} _msttexthash="57525" _msthash="158">Legal </h4>
                            <div class="menu-footer-2-rechtliches-container-1">
                                <ul id="menu-footer-2-rechtliches" class="menu" style={openLegal ? { display: 'block' } : { display: '' }}>
                                    <li id="menu-item-35" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-35">
                                        <a href="/legal/1/" _msttexthash="182468" _msthash="159">Data sources</a>
                                    </li>
                                    <li id="menu-item-36" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-36">
                                        <a href="/legal/3/" _msttexthash="46293" _msthash="160">TERMS</a>
                                    </li>
                                    <li id="menu-item-37" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-37">
                                        <a href="/legal/2/" _msttexthash="160160" _msthash="161">Disclosure</a>
                                    </li>
                                    <li id="menu-item-38" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-38">
                                        <a href="/legal/4/" _msttexthash="237276" _msthash="162">Privacy policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="nav_menu-4" class="widget_nav_menu accordion-1">
                            <h4 className={openAboutUs ? "menu-header active" : "menu-header"} onClick={() => { setOpenAboutUs(!openAboutUs) }} _msttexthash="98579" _msthash="163">About us </h4>
                            <div class="menu-footer-3-ueber-uns-container-1">
                                <ul id="menu-footer-3-ueber-uns" class="menu" style={openAboutUs ? { display: 'block' } : { display: '' }}>
                                    <li id="menu-item-88578" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-50 current_page_item menu-item-88578">
                                        <a href="/marketing" aria-current="page" _msttexthash="117832" _msthash="164">Products</a>
                                    </li>
                                    <li id="menu-item-94728" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-94728">
                                        <a href="/contact" _msttexthash="94510" _msthash="165">Contact</a>
                                    </li>
                                    <li id="menu-item-87743" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-87743">
                                        <a href="/about" _msttexthash="176150" _msthash="166">About Gradimo SKUPAJ</a>
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
                                    <img width="25px" height="25px" src="https://www.herold.at/marketing/wp-content/uploads/2022/06/icon-pinterest.svg" alt="" title="icon-pinterest" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/06/icon-pinterest.svg" data-ll-status="loaded" class="entered lazyloaded" />

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
                                    <img width="25px" height="25px" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/xing-logo.svg" alt="" title="xing-logo" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/xing-logo.svg" data-ll-status="loaded" class="entered lazyloaded" />

                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="herold-logo">
                        <a href="/">
                            <img id="lg-def" width="196px" height="55px" src="/logo_img/new-logo-modified.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/HEROLD_Logo_RGB_Classic.svg" data-ll-status="loaded" class="entered lazyloaded" />

                            <img id="lg-inv" width="196px" height="55px" src="data:image/svg+xml,%3Csvg%2xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20196%2055'%3E%3C/svg%3E" alt="" style={{ display: "none" }} data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/07/HEROLD_Logo_RGB_Negative.svg" />

                        </a>
                    </div>
                    <div class="impressum">
                        <p _msttexthash="641108" _msthash="173">© 2024 Gradimo SKUPAJ Business Data GmbH</p>
                    </div>
                </div>
            </div>
        </>
    )
}