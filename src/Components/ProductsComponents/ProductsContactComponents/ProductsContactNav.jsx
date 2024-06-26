import { useContext, useEffect, useState } from "react";
import AppContext from "../../../AppContext";
export const ProductsContactNav = () => {
    const [menu_1, setMenu_1] = useState(false);
    const [menu_2, setMenu_2] = useState(false);
    const [menu_3, setMenu_3] = useState(false);
    const [mobileToggle, setMobileToggle] = useState(false);
    const { counselerList, setNavSelect, isMobileMenuOpen, setMobileMenuOpen, productsList } = useContext(AppContext);

    useEffect(() => {
        console.log(menu_1);
    }, [menu_1, menu_2, menu_3, mobileToggle, productsList, counselerList])
    return (
        <>
            <header id="masthead" class="site-header">
                <nav class={mobileToggle ? "nav-mobile opened" : "nav-mobile"}>
                    <ul class="container">
                        <li>
                            <span class="burger_menu">
                                <img onClick={() => { setMobileToggle(true) }} class="burger_openend" src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/img/burger.svg" alt="Burger-Menu" />
                                <img onClick={() => { setMobileToggle(false) }} class="burger_closed" src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/img/close.svg" alt="Burger-Menu" />
                            </span>
                        </li>
                        <li>
                            <a href="/"><img src="/logo_img/new-logo-modified.png" /></a>
                        </li>
                        <li>
                            <a href="/login" target="_blank">
                                <img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/img/avatar.svg" alt="User" />
                            </a>
                        </li>
                    </ul>
                    <div class="container container-inner">
                        <ul id="primary-menu" class="nav-category">
                            <li id="menu-item-74445" className={menu_1 ? "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-74445 active" : "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-74445"} >
                                <a href="#">
                                    <span>Search & Find</span>
                                    <span class="nav_toggle_wrapper">
                                        <img className={menu_1 ? "active" : ""} onClick={() => { setMenu_3(false); setMenu_2(false); setMenu_1(!menu_1) }} src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/img/angle-down.svg" alt="Arrow down" />
                                    </span>
                                </a>
                                <ul class="sub-menu" style={menu_1 ? { display: 'block' } : { display: 'none' }}>
                                    <li id="menu-item-74448" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-74448">
                                        <a href="/" onClick={() => { setNavSelect("search_company") }}><span>Search for Company</span>
                                            <span class="nav_toggle_wrapper">
                                                <img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/img/angle-down.svg" alt="Arrow down" />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-74421" class={menu_2 ? "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-74445 current-hover-active active" : "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-74445"}>
                                <a href="#"><span>Products</span>
                                    <span class="nav_toggle_wrapper">
                                        <img className={menu_2 ? "active" : ""} onClick={() => { setMenu_3(false); setMenu_1(false); setMenu_2(!menu_2) }} src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/img/angle-down.svg" alt="Arrow down" />
                                    </span>
                                </a>
                                <ul class="sub-menu" style={menu_2 ? { display: 'block' } : { display: 'none' }}>
                                    {
                                        productsList?.map((value, index) => (
                                            <li id="menu-item-74424" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-74424">
                                                <a title={value.name} data-category="Main Navigation" data-action="click"
                                                    data-label={value.name}
                                                    data-ht="menu|click|go_to_page|https://www.herold.at/marketing/websites/"
                                                    href={`/marketing/${value.slug}`}>
                                                    <span>{value.name}</span>
                                                </a>
                                            </li>

                                        ))
                                    }

                                </ul>

                            </li>
                            <li id="menu-item-54512" className={menu_3 ? "current-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-53318 current_page_item menu-item-has-children menu-item-54512 active" : "current-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-53318 current_page_item menu-item-has-children menu-item-54512"}>
                                <a href="#" aria-current="page"><span>Advisors</span>
                                    <span class="nav_toggle_wrapper">
                                        <img className={menu_3 ? "active" : ""} onClick={() => { setMenu_2(false); setMenu_1(false); setMenu_3(!menu_3) }} src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/img/angle-down.svg" alt="Arrow down" />
                                    </span>
                                </a>
                                <ul class="sub-menu" style={menu_3 ? { display: 'block' } : { display: 'none' }}>

                                    {
                                        counselerList?.map((data, index) => (
                                            <li id="menu-item-80994" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-80994">
                                                <a title="Be visible online" data-category="Main Navigation"
                                                    data-action="click" data-label="Be visible online"
                                                    data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/online-praesenz/"
                                                    href={`/adv/${data.slug}`}>
                                                    <span>{data.name}</span></a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                            <li id="menu-item-74418" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-74418">
                                <a target="_blank" rel="noopener" href="/about"><span>About Us</span>
                                    <span class="nav_toggle_wrapper">
                                        <img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/img/angle-down.svg" alt="Arrow down" />
                                    </span>
                                </a>
                            </li>
                            <li id="menu-item-75135" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-75135">
                                <a href="/contact"><span>Contact</span>
                                    <span class="nav_toggle_wrapper">
                                        <img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/img/angle-down.svg" alt="Arrow down" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav class="nav-desktop">
                    <div class="container">
                        <ul>
                            <li>
                                <a href="/" class="custom-logo-link" rel="home" aria-current="page"><img src="/logo_img/new-logo-modified.png" class="custom-logo" alt="Gradimo Skupaj Guide" /></a>
                            </li>
                        </ul>
                        <ul id="primary-menu" class="nav-category">
                            <li onMouseEnter={() => { setMenu_3(false); setMenu_2(false); setMenu_1(true) }} class={menu_1 ? "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-74445 current-hover-active active" : "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-74445"}>
                                <a href="/"><span>Search & Find</span><img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/img/angle-down.svg" alt="Arrow down" /></a>
                                <ul class="sub-menu" onMouseLeave={() => { setMenu_1(false) }} style={menu_1 ? { display: 'block' } : { display: 'none' }}>
                                    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-74448"><a href="/" onClick={() => { setNavSelect("search_company") }}><span>Search for Company</span><img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/img/angle-down.svg" alt="Arrow down" /></a></li>

                                </ul>
                            </li>
                            <li onMouseEnter={() => { setMenu_3(false); setMenu_1(false); setMenu_2(true); }} class={menu_2 ? "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-74445 current-hover-active active" : "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-74445"}><a href="/marketing"><span>Products</span><img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/img/angle-down.svg" alt="Arrow down" /></a>
                                <ul class="sub-menu" onMouseLeave={() => { setMenu_2(false) }} style={menu_2 ? { display: 'block' } : { display: 'none' }}>
                                    {
                                        productsList?.map((value, index) => (
                                            <li id="menu-item-74424" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-74424">
                                                <a title={value.name} data-category="Main Navigation" data-action="click"
                                                    data-label={value.name}
                                                    data-ht="menu|click|go_to_page|https://www.herold.at/marketing/websites/"
                                                    href={`/marketing/${value.slug}`}>
                                                    <span>{value.name}</span>
                                                </a>
                                            </li>

                                        ))
                                    }

                                </ul>
                            </li>
                            <li onMouseEnter={() => { setMenu_2(false); setMenu_1(false); setMenu_3(true) }} class={menu_3 ? "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-74445 current-hover-active active" : "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-74445"}>
                                <a href="/adv" aria-current="page"><span>Advisors</span><img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/img/angle-down.svg" alt="Arrow down" /></a>
                                <ul class="sub-menu" onMouseLeave={() => { setMenu_3(false) }} style={menu_3 ? { display: 'block' } : { display: 'none' }}>
                                    {
                                        counselerList?.map((data, index) => (
                                            <li id="menu-item-80994" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-80994">
                                                <a title="Be visible online" data-category="Main Navigation"
                                                    data-action="click" data-label="Be visible online"
                                                    data-ht="menu|click|go_to_page|https://www.herold.at/Counseler/online-praesenz/"
                                                    href={`/adv/${data.slug}`}>
                                                    <span>{data.name}</span></a>
                                            </li>
                                        ))
                                    }
                                </ul>

                            </li>
                            <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-74418"><a target="_blank" rel="noopener" href="/about"><span>About Us</span><img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/img/angle-down.svg" alt="Arrow down" /></a></li>
                            <li class="current-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-53318 current_page_item menu-item-has-children menu-item-54512">
                                <a href="/contact"><span>Contact</span>
                                </a></li>
                        </ul>
                        <div class="secondary-button">
                            <a href="/login" target="_blank">Login</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
