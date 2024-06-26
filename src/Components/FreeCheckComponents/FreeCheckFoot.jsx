import { useState } from "react"

export const FreeCheckFoot = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openLegal, setOpenLegal] = useState(false);
    const [openAboutUs, setOpenAboutUs] = useState(false);
    const [openLearnMore, setOpenLearnMore] = useState(false);
    return (
        <>
            <footer>
                <a class="call-p alltel" href="tel:+4350485607" style={{}} _msthidden="1">
                    <p _msttexthash="136305" _msthidden="1" _msthash="148">+43 (0)5 0485-607</p>
                </a>
                <a class="call alltel" href="tel:+4350485607" style={{}} _mstvisible="0">
                    <img width="24" height="24" alt="Phone" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/phone.svg" class="entered lazyloaded" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/phone.svg" _mstalt="59826" _msthash="149" _mstvisible="1" data-ll-status="loaded" />

                </a>
                <div class="block question footer_block_question">
                    <div class="container">
                        <div class="title-head">
                            <h2 _msttexthash="1174329" _msthash="150">Do you have a question about our products?</h2>
                            <h3 _msttexthash="1463735" _msthash="151">We will be happy to help you without obligation.</h3>
                        </div>
                        <div class="secondary-button" id="secondary-button">
                            <a href="https://www.herold.at/marketing/kontakt/?utm_source=internal_link&amp;utm_medium=navigation_footer&amp;utm_campaign=herold_marketing&amp;utm_content=kontakt" target="" _msttexthash="206570" _msthash="152">Get advice now</a>
                        </div>
                    </div>
                </div>
                <div class="container footer-container">
                    <div class="footer-body">
                        <div class="accordions">
                            <div id="nav_menu-2" class="widget_nav_menu accordion">
                                <h4 onClick={() => { setOpenSearch(!openSearch) }} className={openSearch ? "menu-header active" : "menu-header"} _msttexthash="159224" _msthash="153">Search &amp; Find </h4>
                                <div class="menu-footer-1-suchen-finden-container">
                                    <ul id="menu-footer-1-suchen-finden" class="menu" style={openSearch ? { display: 'block' } : { display: '' }}>
                                        <li id="menu-item-31" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31">
                                            <a href="https://www.herold.at/servlet/at.herold.gso.servlet.GSOChangeRequestServlet?context=ABOUT" _msttexthash="152802" _msthash="154">Add Company</a>
                                        </li>
                                        <li id="menu-item-32" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-32">
                                            <a href="https://www.herold.at/gelbe-seiten/branchen-az/a/" _msttexthash="208650" _msthash="155">Industries A-Z</a>
                                        </li>
                                        <li id="menu-item-33" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-33">
                                            <a href="https://www.herold.at/gelbe-seiten/firmen-az/a/" _msttexthash="179062" _msthash="156">Companies A-Z</a>
                                        </li>
                                        <li id="menu-item-34" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-34">
                                            <a href="https://www.herold.at/telefonbuch/personen-az/a/" _msttexthash="137865" _msthash="157">Persons A-Z</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="nav_menu-3" class="widget_nav_menu accordion">
                                <h4 className={openLegal ? "menu-header active" : "menu-header"} onClick={() => { setOpenLegal(!openLegal) }} _msttexthash="57525" _msthash="158">Legal </h4>
                                <div class="menu-footer-2-rechtliches-container">
                                    <ul id="menu-footer-2-rechtliches" class="menu" style={openLegal ? { display: 'block' } : { display: '' }}>
                                        <li id="menu-item-35" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-35">
                                            <a href="https://www.herold.at/datenquelle/" _msttexthash="182468" _msthash="159">Data sources</a>
                                        </li>
                                        <li id="menu-item-36" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-36">
                                            <a href="https://www.herold.at/nutzungsbedingungen/" _msttexthash="46293" _msthash="160">TERMS</a>
                                        </li>
                                        <li id="menu-item-37" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-37">
                                            <a href="https://www.herold.at/impressum/" _msttexthash="160160" _msthash="161">Disclosure</a>
                                        </li>
                                        <li id="menu-item-38" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-38">
                                            <a href="https://www.herold.at/datenschutzerklaerung/" _msttexthash="237276" _msthash="162">Privacy policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="nav_menu-4" class="widget_nav_menu accordion">
                                <h4 className={openAboutUs ? "menu-header active" : "menu-header"} onClick={() => { setOpenAboutUs(!openAboutUs) }} _msttexthash="98579" _msthash="163">About us </h4>
                                <div class="menu-footer-3-ueber-uns-container">
                                    <ul id="menu-footer-3-ueber-uns" class="menu" style={openAboutUs ? { display: 'block' } : { display: '' }}>
                                        <li id="menu-item-88578" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-50 current_page_item menu-item-88578">
                                            <a href="https://www.herold.at/marketing/" aria-current="page" _msttexthash="117832" _msthash="164">Products</a>
                                        </li>
                                        <li id="menu-item-94728" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-94728">
                                            <a href="https://www.herold.at/marketing/kontakt/" _msttexthash="94510" _msthash="165">Contact</a>
                                        </li>
                                        <li id="menu-item-87743" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-87743">
                                            <a href="https://www.karriere.herold.at/ueber-herold" _msttexthash="176150" _msthash="166">About Gradimo Skupaj </a>
                                        </li>
                                        <li id="menu-item-87744" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-87744">
                                            <a href="https://www.karriere.herold.at/karriere-bei-herold/uebersicht" _msttexthash="389233" _msthash="167">Gradimo Skupaj as an employer</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="nav_menu-5" class="widget_nav_menu accordion">
                                <h4 className={openLearnMore ? "menu-header active" : "menu-header"} onClick={() => { setOpenLearnMore(!openLearnMore) }} _msttexthash="135525" _msthash="168">Learn more </h4>
                                <div class="menu-footer-4-weitere-infos-container">
                                    <ul id="menu-footer-4-weitere-infos" class="menu" style={openLearnMore ? { display: 'block' } : { display: '' }}>
                                        <li id="menu-item-44" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-44">
                                            <a href="https://jobs.herold.at/Jobs" _msttexthash="131833" _msthash="169">Vacancies</a>
                                        </li>
                                        <li id="menu-item-45" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-45">
                                            <a href="https://www.herold.at/routenplaner/" _msttexthash="208923" _msthash="170">Route planner</a>
                                        </li>
                                        <li id="menu-item-46" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-46">
                                            <a href="https://arztsuche24.at/" _msttexthash="270894" _msthash="171">Doctor's Search24</a>
                                        </li>
                                        <li id="menu-item-87018" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-87018">
                                            <a href="https://www.herold.at/marketing/presse/" _msttexthash="62348" _msthash="172">Press</a>
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
                                    <a href="https://www.facebook.com/HeroldDigital/" target="_blank">
                                        <img width="25px" height="25px" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/facebook.svg" alt="" title="facebook" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/facebook.svg" data-ll-status="loaded" class="entered lazyloaded" />

                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.pinterest.at/herolddigital" target="_blank">
                                        <img width="25px" height="25px" src="https://www.herold.at/marketing/wp-content/uploads/2022/06/icon-pinterest.svg" alt="" title="icon-pinterest" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/06/icon-pinterest.svg" data-ll-status="loaded" class="entered lazyloaded" />

                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCyaxJo8N2x2fSr_-hwvKafQ" target="_blank">
                                        <img width="25px" height="25px" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/youtube.svg" alt="" title="youtube" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/youtube.svg" data-ll-status="loaded" class="entered lazyloaded" />

                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/herolddigital/" target="_blank">
                                        <img width="25px" height="25px" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/linkedin.svg" alt="" title="linkedin" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/linkedin.svg" data-ll-status="loaded" class="entered lazyloaded" />

                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.xing.com/pages/heroldbusinessdatagmbh" target="_blank">
                                        <img width="25px" height="25px" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/xing-logo.svg" alt="" title="xing-logo" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/xing-logo.svg" data-ll-status="loaded" class="entered lazyloaded" />

                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="herold-logo">
                            <a href="https://www.herold.at/">
                                <img id="lg-def" width="196px" height="55px" src="/logo_img/new-logo-modified.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/HEROLD_Logo_RGB_Classic.svg" data-ll-status="loaded" class="entered lazyloaded" />

                                <img id="lg-inv" width="196px" height="55px" src="data:image/svg+xml,%3Csvg%2xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20196%2055'%3E%3C/svg%3E" alt="" style={{ display: "none" }} data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/07/HEROLD_Logo_RGB_Negative.svg" />

                            </a>
                        </div>
                        <div class="impressum">
                            <p _msttexthash="641108" _msthash="173">© 2024 Gradimo Skupaj Business Data GmbH</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}