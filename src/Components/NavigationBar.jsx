import { useContext, useEffect, useState } from 'react';
import AppContext from '../AppContext';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faL } from '@fortawesome/free-solid-svg-icons';
export const NavigationBar = () => {
    const [firstInput, setFirstInput] = useState('');
    const [homeArrowStyle, setHomeArrowStyle] = useState(false);
    const [productArrowStyle, setProductArrowStyle] = useState(false);
    const [advisorArrowStyle, setAdvisorArrowStyle] = useState(false);
    const { counselerList, setNavSelect, isMobileMenuOpen, industryAZList, setMobileMenuOpen, productsList } = useContext(AppContext);
    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    const navigate = useNavigate();
    useEffect(() => {
        console.log(industryAZList)

    }, [productsList, counselerList])
    return (
        <>
            <div className="default_header_wrapper__2Ml3A" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
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
                                                <div class="header_dropdown_icon__CulLw" style={{ marginLeft: '10px' }}>
                                                    <div className='input-group-icon'>
                                                        <img src="/gradimo_icons/down.png" alt="down" />
                                                    </div>
                                                </div>
                                            </a>
                                                <ul class="header_nav_sub_dropdown_links__3nTMY" _mstvisible="2">
                                                    <li _mstvisible="3"><a title="Search company" data-category="Main Navigation"
                                                        data-action="click" data-label="Search company"
                                                        onClick={() => { setNavSelect("search_company"); toggleMenu(); navigate('/') }}>Search company</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li _mstvisible="1"><a title="Products" class="" data-category="Main Navigation" data-action="click"
                                                data-label="Products" target="_self"
                                                data-ht="menu|click|go_to_page|https://www.herold.at/marketing/"
                                                href="/marketing"><span>Products</span>
                                                <div class="header_dropdown_icon__CulLw" style={{ marginLeft: '10px' }}>
                                                    <div className='input-group-icon'>
                                                        <img src="/gradimo_icons/down.png" alt="down" />
                                                    </div>
                                                </div>
                                            </a>
                                                <ul class="header_nav_sub_dropdown_links__3nTMY" _mstvisible="2">
                                                    {
                                                        productsList?.map((value, index) => (
                                                            <li _mstvisible="3">
                                                                <a title={value.name} data-category="Main Navigation" data-action="click"
                                                                    data-label={value.name}
                                                                    data-ht="menu|click|go_to_page|https://www.herold.at/marketing/websites/"
                                                                    href={`/marketing/${value.slug}`}>{value.name}
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
                                                <div class="header_dropdown_icon__CulLw" style={{ marginLeft: '10px' }}>
                                                    <div className='input-group-icon'>
                                                        <img src="/gradimo_icons/down.png" alt="down" />
                                                    </div>
                                                </div>
                                            </a>
                                                <ul class="header_nav_sub_dropdown_links__3nTMY">
                                                    {
                                                        counselerList?.map((data, index) => (
                                                            <li><a title="Be visible online" data-category="Main Navigation"
                                                                data-action="click" data-label="Be visible online"
                                                                data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/online-praesenz/"
                                                                href={`/adv/${data.slug}`}>{data.name}</a>
                                                            </li>
                                                        ))
                                                    }
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
                                        <li onMouseEnter={() => { setHomeArrowStyle(true) }} onMouseLeave={() => { setHomeArrowStyle(false) }}>
                                            <a title="Search & Find" className="header_active__5YAWP" data-category="Main Navigation" data-action="click" data-label="Search & Find" target="_self">
                                                <span>Search & Find</span>
                                                <div class="header_dropdown_icon__CulLw" style={{ marginLeft: '10px' }}>
                                                    <div className='input-group-icon'>
                                                        <img style={homeArrowStyle ? { transform: "rotate(-0deg)" } : {}} src="/gradimo_icons/down.png" alt="down" />
                                                    </div>
                                                </div>
                                            </a>
                                            <ul className="header_nav_sub_dropdown_links__3nTMY">
                                                <li><a title="Search company" data-category="Main Navigation" data-action="click" data-label="Search company" href='/'>Search company</a></li>
                                            </ul>
                                        </li>
                                        <li onMouseEnter={() => { setProductArrowStyle(true) }} onMouseLeave={() => { setProductArrowStyle(false) }}>
                                            <a title="Products" className="" data-category="Main Navigation" data-action="click" data-label="Products" target="_self" data-ht="menu|click|go_to_page|https://www.herold.at/marketing/" href='/marketing'>
                                                <span>Products</span>
                                                <div class="header_dropdown_icon__CulLw" style={{ marginLeft: '10px' }}>
                                                    <div className='input-group-icon'>
                                                        <img style={productArrowStyle ? { transform: "rotate(-0deg)" } : {}} src="/gradimo_icons/down.png" alt="down" />
                                                    </div>
                                                </div>
                                            </a>
                                            <ul className="header_nav_sub_dropdown_links__3nTMY">
                                                {
                                                    productsList?.map((value, index) => (
                                                        <li _mstvisible="3">
                                                            <a title={value.name} data-category="Main Navigation" data-action="click"
                                                                data-label={value.name}
                                                                data-ht="menu|click|go_to_page|https://www.herold.at/marketing/websites/"
                                                                href={`/marketing/${value.slug}/`}>{value.name}
                                                            </a>
                                                        </li>

                                                    ))
                                                }
                                            </ul>
                                        </li>
                                        <li onMouseEnter={() => { setAdvisorArrowStyle(true) }} onMouseLeave={() => { setAdvisorArrowStyle(false) }}>
                                            <a title="Counseler" className="" data-category="Main Navigation" data-action="click" data-label="Counseler" target="_self" data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/" href="/adv">
                                                <span>Counseler</span>
                                                <div class="header_dropdown_icon__CulLw" style={{ marginLeft: '10px' }}>
                                                    <div className='input-group-icon'>
                                                        <img style={advisorArrowStyle ? { transform: "rotate(-0deg)" } : {}} src="/gradimo_icons/down.png" alt="down" />
                                                    </div>
                                                </div>
                                            </a>
                                            <ul className="header_nav_sub_dropdown_links__3nTMY">

                                                {
                                                    counselerList?.map((data, index) => (
                                                        <li><a title="Be visible online" data-category="Main Navigation" data-action="click" data-label="Be visible online" data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/online-praesenz/"
                                                            href={`/adv/${data.slug}`}>{data.name}</a></li>
                                                    ))
                                                }

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
                                            <div class="header_dropdown_icon__CulLw" style={{ marginLeft: '10px' }}>
                                                <div className='input-group-icon'>
                                                    <img src="/gradimo_icons/user.png" alt="user" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                            }
                            {
                                isMobileMenuOpen ?
                                    <div title="close menu" className="header_close_menu__1ow1K" tabIndex="0" role="button" onClick={toggleMenu}>
                                        <div class="header_dropdown_icon__CulLw" style={{ marginLeft: '10px' }}>
                                            <div className='input-group-icon'>
                                                <img src="/gradimo_icons/close.png" alt="close" />
                                            </div>
                                        </div>
                                    </div>
                                    : <></>
                            }
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}
