import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faLinkedin, faXing } from '@fortawesome/free-brands-svg-icons';
export const LoginFooter = () => {
    useEffect(() => {
        const head_5 = document.head;
        const link_5 = document.createElement("link");
        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/scripting/dist/css/foot8341.css";
        link_5.media = "all"
        head_5.appendChild(link_5);
    }, [])
    return (
        <>
            <footer class="d-print-none" style={{ marginTop: "0px" }}>
                <div class="container">
                    <div class="row">
                        <div class="links">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="/add-company" rel="nofollow" _msttexthash="152802" _msthash="329">Add Company</a>
                                </li>

                                <li>
                                    <a href="/industry-az" _msttexthash="208650" _msthash="331">Industries A-Z</a>
                                </li>
                                <li>
                                    <a href="/company-az/A/" _msttexthash="179062" _msthash="332">Companies A-Z</a>
                                </li>
                            </ul>
                        </div>
                        <div class="links">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="/about" target="_blank" rel="noopener" title="Öffnet neues Fenster" _msttexthash="176150" _msthash="334">About Gradimo Skupaj</a>
                                </li>
                            </ul>
                        </div>
                        <div class="links">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="/marketing/" target="_blank" rel="noopener" title="Öffnet neues Fenster" _msttexthash="359749" _msthash="339">Business Solutions</a>
                                </li>
                            </ul>
                        </div>
                        <div class="links">
                            <ul class="list-unstyled">
                                <li>
                                    <a href="/legal/3/" _msttexthash="708656" _msthash="344">Terms &amp; Conditions/Terms of Use</a>
                                </li>
                                <li>
                                    <a href="/legal/2/" _msttexthash="160160" _msthash="345">Disclosure</a>
                                </li>
                                <li>
                                    <a href="/legal/1/" _msttexthash="182468" _msthash="346">Data sources</a>
                                </li>
                                <li>
                                    <a href="/legal/4/" _msttexthash="237276" _msthash="348">Privacy policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row d-md-flex">
                        <div id="socials">
                            <ul className="list-unstyled d-flex justify-content-between">
                                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener" title="Gradimo Skupaj auf Facebook - Öffnet neues Fenster"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a href="https://www.youtube.com/" target="_blank" rel="noopener" title="Gradimo Skupaj auf YouTube - Öffnet neues Fenster"><FontAwesomeIcon icon={faYoutube} /></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener" title="Gradimo Skupaj auf Instagram - Öffnet neues Fenster"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener" title="Gradimo Skupaj auf LinkedIn - Öffnet neues Fenster"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li><a href="https://www.xing.com/" target="_blank" rel="noopener" title="Gradimo Skupaj auf XING - Öffnet neues Fenster"><FontAwesomeIcon icon={faXing} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="fadeBG">
                    <div class="container footerBar">
                        <div class="row d-sm-flex justify-content-between align-items-center">
                            <div class="float-left float-sm-none col-sm-4">
                                <a href="/" target="_blank" rel="noopener" title="Version: 11.25-20221206_113108 (pwa02.odc.hbd--GSOCCRA)">
                                    <img src="/logo_img/new-logo-modified.png" height="25" width="90" alt="herold.at" _mstalt="126828" _msthash="352" />
                                </a>
                            </div>
                            <div class="text-right">
                                <p _msttexthash="641108" style={{ color: "#fff", fontSize: ".925rem" }} _msthash="353">© 2024 <a href="/" title="Herold: Gelbe Seiten, Branchenbuch, Firmenbewertungen, Telefonbuch">Gradimo Skupaj</a> Business Data GmbH </p>
                            </div>
                            <div class="text-right col-sm-4">
                                <p _msttexthash="315744" _msthash="354" style={{ color: "#fff", fontSize: ".925rem" }}>
                                    <span _istranslated="1">Last update: </span>28.02.2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}