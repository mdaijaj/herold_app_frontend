import { useEffect, useState } from "react";
import { NavigationBar } from "../../../NavigationBar";
import { FooterSection } from "../../../FooterSection";
import { IndustryAZBreakSearch } from "./IndustryAZBreakdownComponents/IndustryAZBreakSearch";
import { IndustryAZBreakYellow } from "./IndustryAZBreakdownComponents/IndustryAZBreakYellow";



export const IndustryAZBreakdown = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    }
    useEffect(() => {
        const head_2 = document.head;
        const link_2 = document.createElement("link");

        link_2.type = "text/css";
        link_2.rel = "stylesheet";
        link_2.href = "/_next/static/css/15c904673e0a0e9875ab.css"
        head_2.appendChild(link_2);

        const head = document.head;
        const link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/_next/static/css/81054e3972181f19bc1f.css"
        link.media = "all"
        head.appendChild(link);


        const head_1 = document.head;
        const link_1 = document.createElement("link");

        link_1.type = "text/css";
        link_1.rel = "stylesheet";
        link_1.href = "/_next/static/css/c60ae1c762c4f7a21e2c.css"
        link_1.media = "all"
        head_1.appendChild(link_1);

        const head_3 = document.head;
        const link_3 = document.createElement("link");

        link_3.type = "text/css";
        link_3.rel = "stylesheet";
        link_3.href = "/_next/static/css/homesearch.css"
        link_3.media = "all"
        head_3.appendChild(link_3);

        const head_4 = document.head;
        const link_4 = document.createElement("link");

        link_4.type = "text/css";
        link_4.rel = "stylesheet";
        link_4.href = "/_next/static/css/homesecondsearch.css"
        link_4.media = "all"
        head_4.appendChild(link_4);


        const head_5 = document.head;
        const link_5 = document.createElement("link");

        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/_next/static/css/homeactivesearch.css"
        link_5.media = "all"
        head_5.appendChild(link_5);


        const head_6 = document.head;
        const link_6 = document.createElement("link");

        link_6.type = "text/css";
        link_6.rel = "stylesheet";
        link_6.href = "/_next/static/css/homebreakdown.css"
        link_6.media = "all"
        head_6.appendChild(link_6);



        if (window.innerWidth <= 767) {
            setWindowWidth(true);
        }
        else {
            setWindowWidth(false);
        }
    }, [window.innerWidth]);



    return (
        <>
            <div class="default_main_container__2y7HF">
                <NavigationBar />
                <div
                    class="default_default_layout__3K-S0"
                    tabIndex="0"
                    role="button"
                    style={{
                        cursor: 'pointer',
                        paddingTop:
                            windowWidth < 768
                                ? '50px'
                                : '100px'

                    }} onClick={toggleMobileMenu}
                >
                    <main class="YellowPagesSearchResultsTemplate">
                        <IndustryAZBreakSearch />
                        <IndustryAZBreakYellow />
                    </main>
                    <FooterSection />

                </div >
            </div>
        </>
    )
}