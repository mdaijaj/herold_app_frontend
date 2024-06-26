import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../../AppContext"

export const PeopleAZActiveMain = () => {
    const { specificPeople } = useContext(AppContext);
    const [show, setShow] = useState(false);
    useEffect(() => {

    }, [specificPeople])
    return (
        <>
            <div className="breadcrumb_breadcrumb_block__2z7Xe">
                <div className="container">
                    <ol
                        className="breadcrumb_wrapper__3sSwF breadcrumb_with_back_link__1U4xO"
                        itemScope=""
                        itemType="https://schema.org/BreadcrumbList"
                    >
                        <li
                            className="breadcrumb_back_link__3Myhw"
                            itemScope=""
                            itemType="https://schema.org/ListItem"
                            itemProp="itemListElement"
                        >
                            <meta itemProp="position" content={1} />
                            <a itemProp="item" href="/telefonbuch/">
                                <span itemProp="name">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>persons</font>
                                    </font>
                                </span>
                            </a>
                            <div className="breadcrumb_separator__2H653">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>|</font>
                                </font>
                            </div>
                        </li>
                        <li
                            itemScope=""
                            itemType="https://schema.org/ListItem"
                            itemProp="itemListElement"
                        >
                            <meta itemProp="position" content={2} />
                            <a
                                itemProp="item"
                                title="Abasin"
                                href="/telefonbuch/suche/?userTerm=Abasin"
                            >
                                <span itemProp="name">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>{specificPeople?.first_name}</font>
                                    </font>
                                </span>
                            </a>
                            <div className="breadcrumb_right_arrow__CSjEg">
                                <i className="icon-pfeile" />
                            </div>
                        </li>
                        <li
                            className="breadcrumb_current_page__3Fh5F"
                            itemScope=""
                            itemType="https://schema.org/ListItem"
                            itemProp="itemListElement"
                        >
                            <meta itemProp="position" content={3} />
                            <a
                                itemProp="item"
                                title="View company results"
                                href="/gelbe-seiten/suche/?userTerm=Abasin"
                            >
                                <span itemProp="name">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            View company results
                                        </font>
                                    </font>
                                </span>
                            </a>
                        </li>
                    </ol>
                </div>
            </div>

            <div className="section_section_element__2A5tN section_small_overlap__1rezR section_large__1XiZp">
                <div className="container">
                    <div className="col_split_cards size_lg">
                        <div className="left">
                            <div>
                                <div className="white-pages-search-result-item_wrap__rGC8M">
                                    <div className="white-pages-search-result-item_content_wrapper__3VbvZ">
                                        <a
                                            rel="nofollow"
                                            href="/telefonbuch/wien_bucheng_25-37-stg-17/GhnfZ/abasin_khawar/"
                                        >
                                            <h2 className="white-pages-search-result-item_heading__1BDNn">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        {specificPeople?.first_name} {specificPeople?.last_name}
                                                    </font>
                                                </font>
                                            </h2>
                                        </a>
                                        <p className="white-pages-search-result-item_paragraph__2yKbl">
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    {specificPeople?.hometown} , {specificPeople?.postcode}
                                                </font>
                                            </font>
                                        </p>
                                    </div>
                                    <div className="white-pages-search-result-item_rightBlock__2G0wm">
                                        <div className="white-pages-search-result-item_button_wrapper__22Y1P">
                                            <a
                                                rel="nofollow"
                                                href={`/people/detail/${specificPeople?.id}`}
                                            >
                                                <button
                                                    className="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9"
                                                    style={{ height: 40 }}
                                                >
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Look at the details
                                                        </font>
                                                    </font>
                                                </button>
                                            </a>
                                        </div>
                                        <div className="white-pages-search-result-item_button_wrapper__22Y1P">
                                            <a data-yxt="phn" title={show ? specificPeople?.phone : "#"} href={show ? `#` : "#"}>
                                                <button onClick={() => { setShow(true) }}
                                                    className="button_btn__3kzkB button_full_width__3lgu7"
                                                    style={{ height: 40 }}
                                                >
                                                    <div>
                                                        <i className="icon-telefon" />
                                                    </div>
                                                    <div className="phoneWrapper">
                                                        <span>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    {show ? specificPeople?.phone : "Show phone number"}
                                                                </font>
                                                            </font>
                                                        </span>
                                                    </div>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-center mb_30" />
                            </div>
                            <div className="section-margin-bottom-lg mt_45" />
                        </div>
                        <div className="right">
                            <ins
                                className="adsbygoogle custom-ad-code"
                                data-adtest="on"
                                data-ad-client="ca-pub-7558442596906284"
                                data-ad-slot={2021403074}
                                style={{ width: 300, height: 600 }}
                            />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}