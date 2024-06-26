import { useContext } from "react"
import AppContext from "../../../AppContext"

export const RestaurantAZBreadcrumb = () => {
    const { specificCompanyInfo } = useContext(AppContext);
    return (
        <>
            <div class="breadcrumb_breadcrumb_block__2z7Xe breadcrumb_large__1FOsc">
                <div class="container">
                    <ol class="breadcrumb_wrapper__3sSwF breadcrumb_with_back_link__1U4xO" itemscope="" itemtype="https://schema.org/BreadcrumbList">
                        <li class="breadcrumb_back_link__3Myhw" itemscope="" itemtype="https://schema.org/ListItem" itemprop="itemListElement">
                            <meta itemprop="position" content="1" />
                            <a itemprop="item" href={`/industry/list/${specificCompanyInfo?.industry?.industry_name}`}>
                                <span itemprop="name" _msttexthash="161122" _msthash="2347">{specificCompanyInfo?.industry?.industry_name}</span>
                            </a>
                            <div class="breadcrumb_separator__2H653" _msttexthash="11284" _msthash="2348">|</div>
                        </li>
                        <li class="breadcrumb_current_page__3Fh5F" itemscope="" itemtype="https://schema.org/ListItem" itemprop="itemListElement">
                            <meta itemprop="position" content="2" />
                            <span itemprop="name" _msttexthash="906295" _msthash="2349">{specificCompanyInfo?.company_name}</span>
                        </li>
                    </ol>
                </div>
            </div>
            {/* 
            <div className="breadcrumb_breadcrumb_block__2z7Xe breadcrumb_large__1FOsc">
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
                            <a itemProp="item" href="/gelbe-seiten/software/">
                                <span itemProp="name">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>software</font>
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
                                title="Upper Austria"
                                href="/gelbe-seiten/ober%C3%B6sterreich/software/"
                            >
                                <span itemProp="name">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Upper Austria</font>
                                    </font>
                                </span>
                            </a>
                            <div className="breadcrumb_right_arrow__CSjEg">
                                <i className="icon-pfeile" />
                            </div>
                        </li>
                        <li
                            itemScope=""
                            itemType="https://schema.org/ListItem"
                            itemProp="itemListElement"
                        >
                            <meta itemProp="position" content={3} />
                            <a
                                itemProp="item"
                                title="Steyr district (city)"
                                href="/gelbe-seiten/steyr-stadt/software/"
                            >
                                <span itemProp="name">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            Steyr district (city)
                                        </font>
                                    </font>
                                </span>
                            </a>
                            <div className="breadcrumb_right_arrow__CSjEg">
                                <i className="icon-pfeile" />
                            </div>
                        </li>
                        <li
                            itemScope=""
                            itemType="https://schema.org/ListItem"
                            itemProp="itemListElement"
                        >
                            <meta itemProp="position" content={4} />
                            <a
                                itemProp="item"
                                title="Steyr"
                                href="/gelbe-seiten/1K6Jp_steyr/software/"
                            >
                                <span itemProp="name">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Steyr</font>
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
                            <meta itemProp="position" content={5} />
                            <span itemProp="name">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>RIS GmbH</font>
                                </font>
                            </span>
                        </li>
                    </ol>
                </div>
            </div> */}

        </>
    )
}