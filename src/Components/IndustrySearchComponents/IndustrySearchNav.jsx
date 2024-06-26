import { useContext, useEffect, useState } from 'react';
import AppContext from '../../AppContext';
export const IndustrySearchNav = () => {
    const [firstInput, setFirstInput] = useState('');
    const { counselerList, setNavSelect, isMobileMenuOpen, setMobileMenuOpen, productsList } = useContext(AppContext);
    const [visible, setVisible] = useState(false);
    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    useEffect(() => {

    }, [productsList, counselerList])
    return (
        <>
            <div className="default_header_wrapper__2Ml3A">
                <div>
                    <div className="header_header__2H2hK">
                        <div className="header_header_container__3n986">
                            {
                                isMobileMenuOpen ? <></>
                                    :
                                    <>
                                        <div title="menu toggle" className="header_menu_toggle__1i09P" tabIndex="0" role="button" onClick={toggleMenu}>
                                            <div style={{ display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                <div style={{ boxSizing: "border-box", display: "block", maxWidth: "100%" }}>
                                                    <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: "100%", display: "block", margin: "0px", border: "none", padding: "0px" }} />
                                                </div>
                                                <img alt="menu" src="https://www.herold.at/_next/image/?url=%2Fassets%2Fmenu-icon.svg&w=64&q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                            </div>
                                        </div>
                                    </>
                            }
                            <div className="header_flex_item__2Ohin">
                                <a className="header_logo_link__2DZhY" title="Link to root" href="/">
                                    <div className="header_logo_image_wrapper__3I7G6">
                                        <div className="header_logo_desktop__2VNnq">
                                            <div style={{ display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0" }}>
                                                <div style={{ boxSizing: "border-box", display: "block", maxWidth: "100%" }}>
                                                    <img style={{ maxWidth: "100%", display: "block", margin: "0", border: "none", padding: "0" }} alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzczIiBoZWlnaHQ9IjU3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg==" />
                                                </div>
                                                <img title="HEROLD: Yellow Pages, business directory, company reviews, telephone directory" alt="HEROLD: Yellow Pages, business directory, company reviews, telephone directory" data-ht="page|click|logo" srcSet="/logo_img/new-logo-modified.png" src="/logo_img/new-logo-modified.png" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                            </div>
                                        </div>
                                        <div className="header_logo_mobile__1xB5E">
                                            <div style={{ display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0" }}>
                                                <div style={{ boxSizing: "border-box", display: "block", maxWidth: "100%" }}>
                                                    <img style={{ maxWidth: "100%", display: "block", margin: "0", border: "none", padding: "0" }} alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM3IiBoZWlnaHQ9IjM4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg==" />
                                                </div>
                                                <img
                                                    title="HEROLD: Yellow Pages, business directory, company reviews, telephone directory"
                                                    alt="HEROLD: Yellow Pages, Business Directory, Company Valuations, Telephone Directory"
                                                    data-ht="page|click|logo"
                                                    srcSet="/logo_img/new-logo-modified.png"
                                                    src="/logo_img/new-logo-modified.png"
                                                    decoding="async"
                                                    data-nimg="intrinsic"
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                        right: 0,
                                                        boxSizing: 'border-box',
                                                        padding: 0,
                                                        border: 'none',
                                                        margin: 'auto',
                                                        display: 'block',
                                                        width: 0,
                                                        height: 0,
                                                        minWidth: '100%',
                                                        maxWidth: '100%',
                                                        minHeight: '100%',
                                                        maxHeight: '100%'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {
                                isMobileMenuOpen ?
                                    <>
                                        <ul className="header_nav_links__1oL6r header_show__2w-iQ" id="mobile_menu" _mstvisible="0" style={{
                                            display: "block",
                                            height: '100vh',
                                            position: "absolute",
                                            left: "0",
                                            top: "70px",
                                            bottom: "0",
                                            flexDirection: "column",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            background: "#fff",
                                            padding: "10px 30px 20px",
                                        }}>
                                            <li _mstvisible="1"><a title="Search &amp; Find" class="header_active__5YAWP"
                                                data-category="Main Navigation" data-action="click"
                                                data-label="Search &amp; Find" target="_self"
                                                data-ht="menu|click|go_to_page|/" ><span>Search &amp;
                                                    Find</span>
                                                <div class="header_dropdown_icon__CulLw"><i class="icon-down"></i></div>
                                            </a>
                                                <ul class="header_nav_sub_dropdown_links__3nTMY" _mstvisible="2">
                                                    <li _mstvisible="3"><a title="Search company" data-category="Main Navigation"
                                                        data-action="click" data-label="Search company"
                                                        onClick={() => { setNavSelect("search_company"); toggleMenu(); }}>Search company</a>
                                                    </li>
                                                    <li _mstvisible="3"><a title="Search person" data-category="Main Navigation"
                                                        data-action="click" data-label="Search person"
                                                        onClick={() => { setNavSelect("search_person"); toggleMenu(); }}>Search person</a>
                                                    </li>
                                                    <li _mstvisible="3"><a title="Search Phone number" data-category="Main Navigation"
                                                        data-action="click" data-label="Search Phone number"
                                                        onClick={() => { setNavSelect("search_phone"); toggleMenu(); }} >Search phone number</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li _mstvisible="1"><a title="Products" class="" data-category="Main Navigation" data-action="click"
                                                data-label="Products" target="_self"
                                                data-ht="menu|click|go_to_page|https://www.herold.at/marketing/"
                                                href="/marketing"><span>Products</span>
                                                <div class="header_dropdown_icon__CulLw"><i class="icon-down"></i></div>
                                            </a>
                                                <ul class="header_nav_sub_dropdown_links__3nTMY" _mstvisible="2">
                                                    {
                                                        productsList?.map((value, index) => (
                                                            <li _mstvisible="3">
                                                                <a title={value.name} data-category="Main Navigation" data-action="click"
                                                                    data-label={value.name}
                                                                    data-ht="menu|click|go_to_page|https://www.herold.at/marketing/websites/"
                                                                    href={`/marketing/${value.id}`}>{value.name}
                                                                </a>
                                                            </li>

                                                        ))
                                                    }
                                                </ul>
                                            </li>
                                            <li><a title="Counseler" class="" data-category="Main Navigation" data-action="click"
                                                data-label="Counseler" target="_self"
                                                data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/"
                                                href="/adv"><span>Counseler</span>
                                                <div class="header_dropdown_icon__CulLw"><i class="icon-down"></i></div>
                                            </a>
                                                <ul class="header_nav_sub_dropdown_links__3nTMY">
                                                    {
                                                        counselerList?.map((data, index) => (
                                                            <li><a title="Be visible online" data-category="Main Navigation"
                                                                data-action="click" data-label="Be visible online"
                                                                data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/online-praesenz/"
                                                                href={`/adv/${data.id}`}>{data.name}</a>
                                                            </li>
                                                        ))
                                                    }
                                                    {/* <li><a title="All about website" data-category="Main Navigation"
                                                        data-action="click" data-label="All about website"
                                                        data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/website-erstellen/"
                                                        href="/adv/all-website">All about website</a>
                                                    </li>
                                                    <li><a title="Search engine optimization" data-category="Main Navigation"
                                                        data-action="click" data-label="Search engine optimization"
                                                        data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/suchmaschinenoptimierung-seo/"
                                                        href="/adv/seo">Search engine optimization</a>
                                                    </li>
                                                    <li><a title="Google Ads" data-category="Main Navigation"
                                                        data-action="click" data-label="Google Ads"
                                                        data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/google-ads/"
                                                        href="/adv/ga">Google Ads</a></li>
                                                    <li><a title="Digital SME tips" data-category="Main Navigation"
                                                        data-action="click" data-label="Digital SME tips"
                                                        data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/kmu-tipps/"
                                                        href="/adv/sme">Digital SME tips</a></li>
                                                    <li><a title="Online Marketing Lexicon" data-category="Main Navigation"
                                                        data-action="click" data-label="Online Marketing Lexicon"
                                                        data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/lexikon/"
                                                        href="/adv/enc">Online Marketing Lexicon</a></li>
                                                    <li><a title="Start-up guide" data-category="Main Navigation"
                                                        data-action="click" data-label="Start-up guide"
                                                        data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/gruendungsguide/"
                                                        href="/adv/start-up">Start-up guide</a></li> */}
                                                </ul>
                                            </li>
                                            <li><a title="About us" class="" data-category="Main Navigation" data-action="click"
                                                data-label="About us" target="_blank"
                                                data-ht="menu|click|go_to_page|/about"
                                                href="/about"><span>About us</span></a>
                                            </li>
                                            <li><a title="Contact" class="" data-category="Main Navigation" data-action="click"
                                                data-label="Contact" target="_self"
                                                data-ht="menu|click|go_to_page|https://www.herold.at/marketing/faq/?utm_source=internal_link&amp;utm_medium=navigation_header&amp;utm_campaign=herold_at&amp;utm_content=Contact_faq"
                                                href="/contact"><span>Contact</span></a>
                                            </li>
                                        </ul>
                                    </>
                                    :
                                    <ul className="header_nav_links__1oL6r" id="mobile_menu">
                                        <li>
                                            <a title="Search & Find" className="header_active__5YAWP" data-category="Main Navigation" data-action="click" data-label="Search & Find" target="_self">
                                                <span>Search & Find</span>
                                                <div className="header_dropdown_icon__CulLw"><i className="icon-down"></i></div>
                                            </a>
                                            <ul className="header_nav_sub_dropdown_links__3nTMY">
                                                <li><a title="Search company" data-category="Main Navigation" data-action="click" data-label="Search company" onClick={() => { setNavSelect("search_company") }}>Search company</a></li>
                                                <li><a title="Search person" data-category="Main Navigation" data-action="click" data-label="Search person" onClick={() => { setNavSelect("search_person") }}>Search person</a></li>
                                                <li><a title="Search Phone number" data-category="Main Navigation" data-action="click" data-label="Search Phone number" onClick={() => { setNavSelect("search_phone") }}>Search Phone number</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a title="Products" className="" data-category="Main Navigation" data-action="click" data-label="Products" target="_self" data-ht="menu|click|go_to_page|https://www.herold.at/marketing/" href="/marketing">
                                                <span>Products</span>
                                                <div className="header_dropdown_icon__CulLw"><i className="icon-down"></i></div>
                                            </a>
                                            <ul className="header_nav_sub_dropdown_links__3nTMY">
                                                {
                                                    productsList?.map((value, index) => (
                                                        <li _mstvisible="3">
                                                            <a title={value.name} data-category="Main Navigation" data-action="click"
                                                                data-label={value.name}
                                                                data-ht="menu|click|go_to_page|https://www.herold.at/marketing/websites/"
                                                                href={`/marketing/${value.id}/`}>{value.name}
                                                            </a>
                                                        </li>

                                                    ))
                                                }
                                            </ul>
                                        </li>
                                        <li>
                                            <a title="Counseler" className="" data-category="Main Navigation" data-action="click" data-label="Counseler" target="_self" data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/" href="/adv">
                                                <span>Counseler</span>
                                                <div className="header_dropdown_icon__CulLw"><i className="icon-down"></i></div>
                                            </a>
                                            <ul className="header_nav_sub_dropdown_links__3nTMY">

                                                {
                                                    counselerList?.map((data, index) => (
                                                        <li><a title="Be visible online" data-category="Main Navigation" data-action="click" data-label="Be visible online" data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/online-praesenz/"
                                                            href={`/adv/${data.id}`}>{data.name}</a></li>
                                                    ))
                                                }
                                                {/* <li><a title="All about website" data-category="Main Navigation" data-action="click" data-label="All about website" data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/website-erstellen/" href="/adv/all-website">All about website</a></li>
                                                <li><a title="Search engine optimization" data-category="Main Navigation" data-action="click" data-label="Search engine optimization" data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/suchmaschinenoptimierung-seo/" href="/adv/seo">Search engine optimization</a></li>
                                                <li><a title="Google Ads" data-category="Main Navigation" data-action="click" data-label="Google Ads" data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/google-ads/" href="/adv/ga">Google Ads</a></li>
                                                <li><a title="Digital SME tips" data-category="Main Navigation" data-action="click" data-label="Digital SME tips" data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/kmu-tipps/" href="/adv/sme">Digital SME tips</a></li>
                                                <li><a title="Online Marketing Lexicon" data-category="Main Navigation" data-action="click" data-label="Online Marketing Lexicon" data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/lexikon/" href="/adv/enc">Online Marketing Lexicon</a></li>
                                                <li><a title="Start-up guide" data-category="Main Navigation" data-action="click" data-label="Start-up guide" data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/gruendungsguide/" href="/adv/start-up">Start-up guide</a></li> */}
                                            </ul>
                                        </li>
                                        <li>
                                            <a title="About us" className="" data-category="Main Navigation" data-action="click" data-label="About us" target="_blank" data-ht="menu|click|go_to_page|/about" href="/about">
                                                <span>About us</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a title="Contact" className="" data-category="Main Navigation" data-action="click" data-label="Contact" target="_self" data-ht="menu|click|go_to_page|https://www.herold.at/marketing/faq/?utm_source=internal_link&amp;utm_medium=navigation_header&amp;utm_campaign=herold_at&amp;utm_content=Contact_faq" href="/contact">
                                                <span>Contact</span>
                                            </a>
                                        </li>
                                    </ul>
                            }
                            <div className="header_login_button_wrapper__163YT">
                                <a href="/login">
                                    <button className="button_btn__3kzkB button_full_width__3lgu7 button_secondary__s1GX9" style={{ height: "100%" }}>Login</button>
                                </a>
                            </div>
                            {
                                isMobileMenuOpen ? <>
                                </>
                                    :
                                    <div className="header_login_icon_wrapper__27XqA">
                                        <a href="/login">
                                            <i className="icon-user"></i>
                                        </a>
                                    </div>
                            }
                            {
                                isMobileMenuOpen ?
                                    <div title="close menu" className="header_close_menu__1ow1K" tabIndex="0" role="button" onClick={toggleMenu}>
                                        <i className="icon-schliessen"></i>
                                    </div>
                                    : <></>
                            }
                        </div>

                        <div className="gruen" style={visible ? { display: 'none' } : {}}>
                            <div className="header_marketing_container__3yCxP">
                                <div className="header_marketing_wrapper__2xR8i">
                                    <p>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                Is your company registered correctly everywhere on the internet?
                                            </font>
                                        </font>
                                    </p>
                                    <button
                                        className="button_btn__3kzkB button_medium__3zOx_"
                                        style={{ height: 40 }}
                                    >
                                        <a
                                            className="button"
                                            href="https://www.herold.at/marketing/gratis-checks/sichtbarkeits-check/?utm_source=herold_at&utm_medium=top_banner&utm_campaign=herold_sichtbarkeitscheck"
                                        >
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>for a free check</font>
                                            </font>
                                        </a>
                                    </button>
                                </div>
                                <button onClick={() => { setVisible(true) }} className="button_btn__3kzkB button_small__2KM-P button_secondary__s1GX9">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>X</font>
                                    </font>
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}
