import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router";
import AppContext from "../../AppContext";
import { IndustrySearchSection } from "../IndustryCompanySearchComponents/IndustrySearchSection";
export const IndustryCitySearchMain = () => {
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const { city_only, city, industry } = useParams();
    const [show, setShow] = useState(false);
    const [third, setThird] = useState(false);
    const { specificIndustryList, baseBackendRoute, randomIndustries, industryAZList, specificIndustryCompanyList, specificIndustryCityList, companyNameOnly, cityOnly } = useContext(AppContext);
    useEffect(() => {
        console.log(cityOnly);
        console.log(specificIndustryCompanyList);
    }, [specificIndustryList, specificIndustryCompanyList, specificIndustryCityList, cityOnly])
    return (
        <>
            <main className="YellowPagesSearchResultsTemplate">
                <div className="sticky-info_element_sticky_info__3elHz">
                    <div className="section_section_element__2A5tN section_extra_small__38o1x section_yellow__3Vf-6">
                        <div className="container">
                            <main>
                                <div className="list-header_list_header_module__9Yh_6 list-header_collapsible__y6IMB">
                                    <div className="list-header_heading__AMXVc">
                                        <h4 className="list-header_head__28oEb">
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    {specificIndustryList.length} results found for {industry} in {city}
                                                </font>
                                            </font>
                                        </h4>
                                        <div className="list-header_toggle_button__21W_S">
                                            <div class="input-group-icon">
                                                <img src="/gradimo_icons/down.png" width="25px" height="25px" alt="down" />
                                            </div>                                        </div>
                                    </div>
                                    <div className="list-header_filters__U0WX8">
                                        <div className="list-header_filters_inner__2YkWD">
                                            <div className="list-header_filter__3yvFJ list-header_layout_filter__1sdRZ">
                                                <label className="list-header_label__1on1h">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>Opinion</font>
                                                    </font>
                                                </label>
                                                <ul>
                                                    <li
                                                        onClick={() => { setFirst(true); setSecond(false); setThird(false) }}
                                                        id="listViewButton"
                                                        className={first ? "list-header_active__248N7" : ""}
                                                        tabIndex={0}
                                                        role="button"
                                                        on="tap:listViewButton.toggleClass(class='active',force=true),gridViewButton.toggleClass(class='active',force=false);"
                                                    >
                                                        <a title="list">
                                                            <div class="input-group-icon">
                                                                <img src="/gradimo_icons/list.png" width="25px" height="25px" alt="list" />
                                                            </div>                                                            <span>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        list
                                                                    </font>
                                                                </font>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li
                                                        onClick={() => { setFirst(false); setSecond(true); setThird(false) }}
                                                        id="gridViewButton"
                                                        className={second ? "list-header_active__248N7" : ""}
                                                        tabIndex={0}
                                                        role="button"
                                                        on="tap:gridViewButton.toggleClass(class='active',force=true),listViewButton.toggleClass(class='active',force=false);"
                                                    >
                                                        <a title="Tiles">
                                                            <div class="input-group-icon">
                                                                <img src="/gradimo_icons/tile.png" width="25px" height="25px" alt="tile" />
                                                            </div>                                                            <span>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        Tiles
                                                                    </font>
                                                                </font>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>

                <IndustrySearchSection />



                <div className="yellow_page_search_result_list_min_height">
                    <div className="breadcrumb_breadcrumb_block__2z7Xe breadcrumb_withFilters__PUNq- breadcrumb_large__1FOsc">
                        <div className="container">
                            <ol
                                className="breadcrumb_wrapper__3sSwF"
                                itemScope=""
                                itemType="https://schema.org/BreadcrumbList"
                            >
                                <li
                                    className="breadcrumb_current_page__3Fh5F"
                                    itemScope=""
                                    itemType="https://schema.org/ListItem"
                                    itemProp="itemListElement"
                                >
                                    <meta itemProp="position" content={0} />
                                    <span itemProp="name">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>Companies</font>
                                        </font>
                                    </span>
                                </li>

                            </ol>
                        </div>
                    </div>
                    <div className="section_section_element__2A5tN section_medium_overlap__1_FlG section_medium__3dvm3">
                        <div className="container">
                            <div
                                className="col_split_cards size_lg"
                                role="main"
                                itemScope=""
                                itemType="https://schema.org/ItemList"
                            >
                                <meta itemProp="itemListOrder" content="ItemListUnordered" />
                                <meta itemProp="numberOfItems" content={30} />
                                <div className={first ? "left" : second ? "left full_width" : "left"}>
                                    <main>
                                        <div className="list-header_list_header_module__9Yh_6">
                                            <div className="list-header_heading__AMXVc">
                                                <h1 className="list-header_head__28oEb">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            {cityOnly?.length} results found in {city_only}
                                                        </font>
                                                    </font>
                                                </h1>
                                                <div className="list-header_toggle_button__21W_S">
                                                    <div class="input-group-icon">
                                                        <img src="/gradimo_icons/down.png" width="25px" height="25px" alt="down" />
                                                    </div>                                                </div>
                                            </div>
                                            <div className="list-header_filters__U0WX8">
                                                <div className="list-header_filters_inner__2YkWD">
                                                    <div className="list-header_filter__3yvFJ list-header_layout_filter__1sdRZ">
                                                        <label className="list-header_label__1on1h">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    Opinion
                                                                </font>
                                                            </font>
                                                        </label>
                                                        <ul>
                                                            <li onClick={() => { setFirst(true); setSecond(false); setThird(false) }}
                                                                id="listViewButton"
                                                                className={first ? "list-header_active__248N7" : ""}
                                                                tabIndex={0}
                                                                role="button"

                                                            >
                                                                <a title="list">
                                                                    <div class="input-group-icon">
                                                                        <img src="/gradimo_icons/list.png" width="25px" height="25px" alt="list" />
                                                                    </div>                                                                    <span>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                list
                                                                            </font>
                                                                        </font>
                                                                    </span>
                                                                </a>
                                                            </li>
                                                            <li
                                                                onClick={() => { setSecond(true); setFirst(false); setThird(false) }}
                                                                id="gridViewButton"
                                                                className={second ? "list-header_active__248N7" : ""}
                                                                tabIndex={0}
                                                                role="button"
                                                                on="tap:yellowPagesSearchResultItems.toggleClass(class='list',force=false),yellowPagesSearchResultItems.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessAddressModule.toggleClass(class='grid',force=true),gridViewButton.toggleClass(class='active',force=true),listViewButton.toggleClass(class='active',force=false);"
                                                            >
                                                                <a title="Tiles">
                                                                    <div class="input-group-icon">
                                                                        <img src="/gradimo_icons/tile.png" width="25px" height="25px" alt="tile" />
                                                                    </div>                                                                    <span>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                Tiles
                                                                            </font>
                                                                        </font>
                                                                    </span>
                                                                </a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </main>

                                    {
                                        <div>
                                            <div
                                                id="yellowPagesSearchResultItems"
                                                className={first ? "yellow-pages-search-result-items_yellow_pages_search_result_items_module__5omoa" : second ? "yellow-pages-search-result-items_yellow_pages_search_result_items_module__5omoa yellow-pages-search-result-items_grid__2-QZK" : ""}
                                            >
                                                {
                                                    cityOnly?.map((data, index) => (
                                                        <div
                                                            id="plain0"
                                                            className="yellow-pages-search-result-items_child__3rYWL"
                                                        >
                                                            <div
                                                                className="yellow-pages-search-result-items_child_inner__Yik8k"
                                                                data-ht="yp_result|view|company_impression|315349"
                                                            >
                                                                <div
                                                                    id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_0"
                                                                    className={first ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : second ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""}
                                                                    itemProp="itemListElement"
                                                                    itemScope=""
                                                                    itemType="https://schema.org/ListItem"
                                                                    data-uid={315349}
                                                                    data-detail-url="/gelbe-seiten/matrei-am-brenner/QsCHv/auer-gmbh/"
                                                                    data-clickpos="whitespace"
                                                                >

                                                                    <div className="yellow-pages-search-result-item_wrapper__HmB1A">
                                                                        <div
                                                                            id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessImageModule"
                                                                            className={first ? "business-image_image_wrapper__2eLPH business-image_list__3p-cG" : second ? "business-image_image_wrapper__2eLPH business-image_grid__AHrAV" : ""}
                                                                        >
                                                                            <a
                                                                                title="Link to Auer GmbH"
                                                                                data-clickpos="toplogo"
                                                                                className="business-image_image_wrapper_inner__uHPY_"
                                                                                href={`/company-az/active/${data.slug}`}
                                                                            >
                                                                                <div
                                                                                    style={{
                                                                                        display: "block",
                                                                                        overflow: "hidden",
                                                                                        position: "absolute",
                                                                                        top: 0,
                                                                                        left: 0,
                                                                                        bottom: 0,
                                                                                        right: 0,
                                                                                        boxSizing: "border-box",
                                                                                        margin: 0
                                                                                    }}
                                                                                >
                                                                                    <img
                                                                                        title={data.company_name}
                                                                                        alt={data.company_name}
                                                                                        sizes="100vw"
                                                                                        srcSet={`${data.logo}`}
                                                                                        src={`${data.logo}`}
                                                                                        decoding="async"
                                                                                        data-nimg="fill"
                                                                                        style={{
                                                                                            position: "absolute",
                                                                                            top: 0,
                                                                                            left: 0,
                                                                                            bottom: 0,
                                                                                            right: 0,
                                                                                            boxSizing: "border-box",
                                                                                            padding: 0,
                                                                                            border: "none",
                                                                                            margin: "auto",
                                                                                            display: "block",
                                                                                            width: 0,
                                                                                            height: 0,
                                                                                            minWidth: "100%",
                                                                                            maxWidth: "100%",
                                                                                            minHeight: "100%",
                                                                                            maxHeight: "100%",
                                                                                            objectFit: "contain"
                                                                                        }}
                                                                                    />
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div
                                                                            id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessContentModule"
                                                                            className={first ? "business-content_content_wrapper__xaF5N business-content_list__2x1bc" : second ? "business-content_content_wrapper__xaF5N business-content_grid__3F57c" : ""}
                                                                        >
                                                                            <div className="business-content_top__2V1q7">
                                                                                <div className="business-content_top_inner__112cZ">
                                                                                    <div className="business-content_rating__GcM2k">
                                                                                        <div className="rating_element_main__2401D">
                                                                                            <div className="rating_element_inner__3Uxrv">
                                                                                                <div className="rating_element_stars__13C_C">
                                                                                                    {
                                                                                                        Array.from({ length: Number(data.avg_rating) }).map((_, ind) => (
                                                                                                            <div className="rating_element_star__OZewC">
                                                                                                                <div class="input-group-icon">
                                                                                                                    <img src="/gradimo_icons/star-filled.png" width="25px" height="25px" alt="star-filled" />
                                                                                                                </div>                                                                                                            </div>
                                                                                                        ))
                                                                                                    }
                                                                                                </div>
                                                                                                <div className={first ? "rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj" : second ? "rating_element_rating_text_block__28Fwe" : ""}>
                                                                                                    <p className="rating_element_rating_text__2tc1p">
                                                                                                        <font
                                                                                                            style={{ verticalAlign: "inherit" }}
                                                                                                        >
                                                                                                            <font
                                                                                                                style={{ verticalAlign: "inherit" }}
                                                                                                            >
                                                                                                                {parseFloat(data.avg_rating).toFixed(1)}
                                                                                                            </font>
                                                                                                        </font>
                                                                                                        <span className="rating_element_links__1v55t">
                                                                                                            <span className={"business-content_links__2bjVL"} style={first ? {} : { display: 'none' }}>
                                                                                                                <a
                                                                                                                    href={`/give-rev/${data.slug}`}
                                                                                                                    rel="nofollow"
                                                                                                                    data-ht="yp_result|click|rate_company|315349"
                                                                                                                >
                                                                                                                    <font
                                                                                                                        style={{
                                                                                                                            verticalAlign: "inherit"
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        <font
                                                                                                                            style={{
                                                                                                                                verticalAlign: "inherit"
                                                                                                                            }}
                                                                                                                        >
                                                                                                                            give an appraisal
                                                                                                                        </font>
                                                                                                                    </font>
                                                                                                                </a>
                                                                                                            </span>
                                                                                                        </span>
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <h3 className="business-content_industry__rwLeS">
                                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                                {data?.industry?.industry_name}
                                                                                            </font>
                                                                                        </font>
                                                                                    </h3>
                                                                                    <h2 className="business-content_heading__2ED5C">
                                                                                        <a
                                                                                            itemProp="name"
                                                                                            data-clickpos="showdetails"
                                                                                            href={`/company-az/active/${data.slug}`}
                                                                                        >
                                                                                            <span>
                                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                                    <font
                                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                                    >
                                                                                                        {data.company_name}
                                                                                                    </font>
                                                                                                </font>
                                                                                            </span>
                                                                                        </a>
                                                                                    </h2>
                                                                                </div>
                                                                                <h3 className="business-content_subheading__kMUMz hide_xs_max" dangerouslySetInnerHTML={{ __html: data?.short_description?.split('.')[0] }}>

                                                                                </h3>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessAddressModule"
                                                                            className="business-address_address_wrapper__1rpVY business-address_list__3TcTL"
                                                                        >
                                                                            <div className="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                                <div className="details-page-section-heading_element_inner__2Ef9j">
                                                                                    <div className="details-page-section-heading_element_icon__2GqOs">
                                                                                        <div class="input-group-icon">
                                                                                            <img src="/gradimo_icons/locationpin.png" width="25px" height="25px" alt="locationpinc" />
                                                                                        </div>                                                                                    </div>
                                                                                    <h2 className="details-page-section-heading_element_heading__3UmDR">
                                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                                address
                                                                                            </font>
                                                                                        </font>
                                                                                    </h2>
                                                                                </div>
                                                                            </div>
                                                                            <a className="business-address_address_text__3oEpC">
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        {data.street},
                                                                                    </font>
                                                                                </font>

                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        {data.postcode}  {data.city},
                                                                                    </font>
                                                                                </font>

                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        {data.country}
                                                                                    </font>
                                                                                </font>
                                                                            </a>

                                                                            <div className="business-address_button_wrapper__38hR4">
                                                                                <a
                                                                                    data-clickpos="showdetails"
                                                                                    href={`/company-az/active/${data.slug}`}
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
                                                                            <div className="business-address_button_wrapper__38hR4">
                                                                                <a data-yxt="phn" title={data.phone_number}>
                                                                                    <button onClick={() => { setShow(true) }}
                                                                                        className="button_btn__3kzkB button_full_width__3lgu7"
                                                                                        style={{ height: 40 }}
                                                                                    >
                                                                                        <div>
                                                                                            <div class="input-group-icon">
                                                                                                <img src="/gradimo_icons/phone.png" width="25px" height="25px" alt="phone" style={{ marginLeft: '10px' }} />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="phoneWrapper">
                                                                                            <span>
                                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                                    <font
                                                                                                        style={{ verticalAlign: "inherit" }}
                                                                                                    >
                                                                                                        {
                                                                                                            show ?
                                                                                                                data.phone_number
                                                                                                                :
                                                                                                                "Show phone number"
                                                                                                        }
                                                                                                    </font>
                                                                                                </font>
                                                                                            </span>
                                                                                        </div>
                                                                                    </button>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>


                                    }
                                    <div className="section_section_element__2A5tN">
                                        <div className="container">
                                            <div className="card-wrapper_element_card_wrapper_element__Bj1_s card-wrapper_element_equal_padding__10BQd">
                                                <div className="company-owner-approval_company_owner_approval__1xNjH">
                                                    <h5 className="company-owner-approval_heading__7U8ae">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Not on Gradimo Skupaj.si yet?
                                                            </font>
                                                        </font>
                                                    </h5>
                                                    <a
                                                        className="company-owner-approval_button_wrapper__kucHb"
                                                        title="REGISTER FOR FREE NOW"
                                                        href="/add-company"
                                                        rel="nofollow"
                                                    >
                                                        <button
                                                            className="button_btn__3kzkB button_secondary__s1GX9"
                                                            style={{ height: 40 }}
                                                        >
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    REGISTER FOR FREE NOW
                                                                </font>
                                                            </font>
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right" style={second ? { display: 'none' } : {}}>
                                    <div className="mb_25">
                                        <div className="card-wrapper_element_card_wrapper_element__Bj1_s">
                                            <div className="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                                <div className="details-page-section-heading_element_inner__2Ef9j">
                                                    <div className="details-page-section-heading_element_icon__2GqOs">
                                                        <div class="input-group-icon">
                                                            <img src="/gradimo_icons/industry.png" width="25px" height="25px" alt="industry" />
                                                        </div>                                                    </div>
                                                    <h2 className="details-page-section-heading_element_heading__3UmDR">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Other industries
                                                            </font>
                                                        </font>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="links-list_detail_page_list__S5t1Q">
                                                <ul>
                                                    {
                                                        randomIndustries?.map((data, index) => (
                                                            <li>
                                                                <a
                                                                    data-htype="industry_navigation"
                                                                    data-hvalue="Baumaschinen u -geräte"
                                                                    data-ht="yp_result|click|go_to_other_industry|Baumaschinen u -geräte"
                                                                    href={`/industry/list/${data}`}
                                                                >
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            {data}
                                                                        </font>
                                                                    </font>
                                                                </a>
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb_25">
                                        <div className="card-wrapper_element_card_wrapper_element__Bj1_s">
                                            <div className="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                                <div className="details-page-section-heading_element_inner__2Ef9j">
                                                    <div className="details-page-section-heading_element_icon__2GqOs">
                                                        <div class="input-group-icon">
                                                            <img src="/gradimo_icons/locationpin.png" width="25px" height="25px" alt="locationpin" />
                                                        </div>                                                    </div>
                                                    <h2 className="details-page-section-heading_element_heading__3UmDR">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Federal State
                                                            </font>
                                                        </font>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="links-list_detail_page_list__S5t1Q">
                                                <ul>
                                                    {
                                                        specificIndustryCityList?.map((data, index) => (
                                                            <li>
                                                                <a
                                                                    data-ht="yp_result|click|go_to_other_state|Wien"
                                                                    href={`/industry/city/search/${data}`}
                                                                >
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            {data}
                                                                        </font>
                                                                    </font>
                                                                </a>
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb_25 hide_lg_max" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}