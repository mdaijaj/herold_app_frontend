import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const LoginNav = () => {
    const [show, setShow] = useState(false);
    // useEffect(() => {
    //     const head_5 = document.head;
    //     const link_5 = document.createElement("link");
    //     link_5.type = "text/css";
    //     link_5.rel = "stylesheet";
    //     link_5.href = "/login/login.herold.at/login.css"
    //     link_5.media = "all"
    //     head_5.appendChild(link_5);
    // }, [])
    return (
        <>
            {/* <nav id={Styles['nav-main']} className={`${Styles.navbar} ${Styles["navbar-light"]} ${Styles.sticky}`}>
                <div className={`${Styles["container-fluid"]} ${Styles["d-block"]}`}>
                    <div className={`${Styles["row"]} ${Styles["titlebar"]} ${Styles["justify-content-between"]}`}>
                        <div className={Styles["d-flex"]}>
                            <a className={Styles["navbar-brand"]} href="/">
                                <img src="/images/herold_claim_right.svg" alt="Yellow Pages, Business Directory, Company Valuations, Phone Book - herold.at" title="Gelbe Seiten, Branchenbuch, Firmenbewertungen, Telefonbuch - herold.at" _mstalt="3177642" _msthash="37" />
                            </a>
                        </div>
                        <div className={`${Styles["d-none"]} ${Styles["d-lg-flex"]}`}>
                            <ul className={`${Styles["nav"]} ${Styles["navbar-nav"]} ${Styles["navbar-desktop"]}`}>
                                <li className={`${Styles["tab-YP"]} ${Styles["nav-item"]}`}>
                                    <a href="/" className={Styles["nav-link"]} title="gradimo-skupaj.si" data-action="click" data-category="Main Navigation" data-label="YP" _msttexthash="136396" _msthash="38">Corporate</a>
                                </li>
                                <li className={`${Styles["tab-WP"]} ${Styles["nav-item"]}`}>
                                    <a href="/telefonbuch/" className={Styles["nav-link"]} title="Telefonbuch Österreich" data-action="click" data-category="Main Navigation" data-label="WP" _msttexthash="98540" _msthash="39">Persons</a>
                                </li>
                                <li className={`${Styles["tab-REV"]} ${Styles["nav-item"]}`}>
                                    <a href="/bewertungen/" className={Styles["nav-link"]} title="reviews at gradimo skupaj" data-action="click" data-category="Main Navigation" data-label="REV" _msttexthash="161044" _msthash="40">Valuations</a>
                                </li>
                                <li className={`${Styles["tab-BLOG"]} ${Styles["nav-item"]}`}>
                                    <a href="/blog/" className={Styles["nav-link"]} title="blogs at gradimo skupaj" data-action="click" data-category="Main Navigation" data-label="BLOG" _msttexthash="43615" _msthash="41">Blog</a>
                                </li>
                                <li className={`${Styles["tab-WERBEN"]} ${Styles["nav-item"]}`}>
                                    <a href="/marketing/" className={Styles["nav-link"]} target="_blank" rel="noopener" title="marketing at gradimo skupaj" data-action="click" data-category="Main Navigation" data-label="WERBEN" _msttexthash="359749" _msthash="42">Business Solutions</a>
                                </li>
                                <li className={`${Styles["tab-login"]} ${Styles["nav-item"]} ${Styles["dropdown"]}`}>
                                    <a className={Styles["nav-link"]} id={Styles["dropdownLoginButton"]} href="javascript:void(0);" title="login at gradimo skupaj" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" _msttexthash="113659" _msthash="43">Announce</a>
                                    <div className={Styles["dropdown-menu"]} aria-labelledby="dropdownLoginButton">
                                        <iframe title="Login bei herold.at" width="450" height="500" id={Styles["loginIframe"]} src="/images/empty.html" data-src="https://login.herold.at/externalLoginDropdown.do" frameborder="0"></iframe>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={`${Styles["d-flex"]} ${Styles["d-lg-none"]}`} _msthidden="1">
                            <button type="button" id="toggle-menu" className={`${Styles["btn"]} ${Styles["icon-only"]}`} data-toggle="collapse" data-target="#navbar-md-down" onClick={() => { setShow(!show) }} aria-controls="navbar-md-down" aria-expanded="false" aria-label="Menü ein- oder ausblenden" _msthidden="A" _mstaria-label="534833" _msthash="44">
                                <i className="icon icon-hamburger" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div className={`${Styles["row"]} ${Styles["dropdown-search"]} ${Styles["collapse"]}`} id={Styles["searchbar-md-down"]}></div>
                    <div className={show ? `${Styles["row"]} ${Styles["dropdown-menu"]} ${Styles["collapse"]} ${Styles["show"]}` : `${Styles["row"]} ${Styles["dropdown-menu"]} ${Styles["collapse"]}`} id={Styles["navbar-md-down"]} _msthidden="1">
                        <ul className={`${Styles["nav"]} ${Styles["navbar-nav"]}`} _msthidden="1">
                            <li className={`${Styles["tab-login"]} ${Styles["nav-item"]} ${Styles["dropdown"]}`} _msthidden="1">
                                <a className={Styles["nav-link"]} href="https://login.herold.at/login" _msttexthash="111371" _msthidden="1" _msthash="45">Announce</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}


            <nav id="nav-main" class="navbar navbar-light sticky">
                <div class="container-fluid d-block">
                    <div class="row titlebar justify-content-between">
                        <div class="d-flex">
                            <a class="navbar-brand" href="/">
                                <img src="/logo_img/new-logo-modified.png" alt="gradimo-skupaj.si" title="gradimo-skupaj.si" _mstalt="3177642" _msthash="36" />
                            </a>
                        </div>
                        <div class="d-none d-lg-flex">
                            <ul class="nav navbar-nav navbar-desktop">
                                <li class="tab-YP nav-item">
                                    <a href="/" class="nav-link" title="gradimo-skupaj.si" data-action="click" data-category="Main Navigation" data-label="YP" _msttexthash="136396" _msthash="37">Corporate</a>
                                </li>
                                <li class="tab-REV nav-item">
                                    <a href="/reviews" class="nav-link" title="reviews at gradimo skupaj" data-action="click" data-category="Main Navigation" data-label="REV" _msttexthash="161044" _msthash="39">Reviews</a>
                                </li>
                                <li class="tab-BLOG nav-item">
                                    <a href="/blogs" class="nav-link" title="blogs at gradimo skupaj" data-action="click" data-category="Main Navigation" data-label="BLOG" _msttexthash="43615" _msthash="40">Blog</a>
                                </li>
                                <li class="tab-WERBEN nav-item">
                                    <a href="/marketing" class="nav-link" target="_blank" rel="noopener" title="marketing at gradimo skupaj" data-action="click" data-category="Main Navigation" data-label="WERBEN" _msttexthash="359749" _msthash="41">Business Solutions</a>
                                </li>
                                <li class="tab-login nav-item">
                                    <a href="/register" class="nav-link" title="login at gradimo skupaj" data-action="click" data-category="Main Navigation" _msttexthash="113659" _msthash="42">Register</a>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex d-lg-none" _msthidden="1">
                            <button onClick={() => { setShow(!show) }} type="button" class="btn icon-only toggle-menu" data-toggle="collapse" data-target="#navbar-md-down" aria-controls="navbar-md-down" aria-expanded="false" aria-label="Menü ein- oder ausblenden" _msthidden="A" _mstaria-label="534833" _msthash="43">
                                <FontAwesomeIcon className="icon icon-hamburger" icon={faBars} />
                            </button>
                        </div>
                    </div>
                    <div class={show ? "row dropdown-menu collapse show" : "row dropdown-menu collapse"} id="navbar-md-down" _msthidden="6">
                        <ul class="nav navbar-nav" _mstvisible="1">
                            <li class="tab-YP nav-item" _mstvisible="2">
                                <a href="/" class="nav-link" title="gradimo-skupaj.si" data-action="click" data-category="Main Navigation" data-label="YP" _msttexthash="136396" _msthash="44" _mstvisible="3">Corporate</a>
                            </li>
                            <li class="tab-REV nav-item" _mstvisible="2">
                                <a href="/reviews" class="nav-link" title="reviews at gradimo skupaj" data-action="click" data-category="Main Navigation" data-label="REV" _msttexthash="161044" _msthash="46" _mstvisible="3">Valuations</a>
                            </li>
                            <li class="tab-BLOG nav-item" _mstvisible="2">
                                <a href="/blogs" class="nav-link" title="blogs at gradimo skupaj" data-action="click" data-category="Main Navigation" data-label="BLOG" _msttexthash="43615" _msthash="47" _mstvisible="3">Blog</a>
                            </li>
                            <li class="tab-WERBEN nav-item" _mstvisible="2">
                                <a href="/marketing" class="nav-link" target="_blank" rel="noopener" title="marketing at gradimo skupaj" data-action="click" data-category="Main Navigation" data-label="WERBEN" _msttexthash="359749" _msthash="48" _mstvisible="3">Business Solutions</a>
                            </li>
                            <li class="tab-login nav-item" _mstvisible="2">
                                <a href="/register" class="nav-link" title="login at gradimo skupaj" data-action="click" data-category="Main Navigation" _msttexthash="113659" _msthash="49" _mstvisible="3">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}