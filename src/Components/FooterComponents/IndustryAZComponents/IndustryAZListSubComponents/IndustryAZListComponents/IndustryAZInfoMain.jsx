import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router";
import AppContext from "../../../../../AppContext";

export const IndustryAZInfoMain = () => {
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const { industry, ind } = useParams();
    const [third, setThird] = useState(false);
    const { specificIndustryList, specificIndustryCompanyList, specificIndustryCityList } = useContext(AppContext);
    useEffect(() => {
        console.log(specificIndustryList);
    }, [specificIndustryList, specificIndustryCityList, specificIndustryCompanyList])
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
                                                    {specificIndustryList?.length} results found for {ind}
                                                </font>
                                            </font>
                                        </h4>
                                        <div className="list-header_toggle_button__21W_S">
                                            <i className="icon-down" />
                                        </div>
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
                                                                <img src="/gradimo_icons/list.png" alt="list" />
                                                            </div>
                                                            <span>
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
                                                            <i className="icon-fliesenleger" />
                                                            <span>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        Tiles
                                                                    </font>
                                                                </font>
                                                            </span>
                                                        </a>
                                                        <div className="list-header_tooltip__2WElB">
                                                            <p>
                                                                <b>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            Tip:
                                                                        </font>
                                                                    </font>
                                                                </b>
                                                                <font style={{ verticalAlign: "inherit" }} />
                                                                <br />
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>

                                                                        Switch to tile view
                                                                    </font>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        to compare .
                                                                    </font>
                                                                </font>
                                                            </p>
                                                            <div className="list-header_close_button__2LADG">
                                                                <i className="icon-schliessen" />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li onClick={() => { setFirst(false); setSecond(false); setThird(true) }} className={third ? "list-header_active__248N7" : ""}>
                                                        <a title="Map">
                                                            <i className="icon-standort" />
                                                            <span>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        Map
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
                <div className="home-search_module__2hJ_k">
                    <div className="home-search_background__2yCWw">
                        <div className="home-search_search_container__3B3KX">
                            <div className="home-search_search_controls_wrapper__T3bc6">
                                <div>
                                    <div className="search-controls_main__1u24Z search-controls_with_open_now__tpUCl">
                                        <div className="search-controls_child__qjWU5">
                                            <div className="search-controls_autocomplete_search_wrapper__FdeuL">
                                                <div
                                                    className="input-suggestions_autocomplete_input_wrapper__rjtzK"
                                                    style={{ height: 60 }}
                                                >
                                                    <div>
                                                        <span className="input-suggestions_placeholder_text__2rt1T input-suggestions_full_text__CFyl6">

                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    Who or what do you want to find? (Industry, service
                                                                    provider or company)
                                                                </font>
                                                            </font>
                                                        </span>
                                                        <span className="input-suggestions_placeholder_text__2rt1T input-suggestions_short_text__3anEW">

                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    Who or what?
                                                                </font>
                                                            </font>
                                                        </span>
                                                    </div>
                                                    <div className="input-group ">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <div className="input-group-icon">
                                                                    <i className="icon-suche" />
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <input
                                                            className="input_style"
                                                            id="input_suggestions_input1713284507494"
                                                            autoComplete="off"
                                                            data-ht="yp_search_options|input|industry_search_added"
                                                            defaultValue=""
                                                        />
                                                        <div className="menu_list simple_list" />
                                                        <div className="input-group-append clear-input">
                                                            <span className="input-group-text">
                                                                <div className="input-group-icon">
                                                                    <i className="icon-schliessen" />
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="search-controls_custom_tooltip__3q53P" />
                                            </div>
                                        </div>
                                        <div className="search-controls_child__qjWU5 search-controls_for_desktop__3ICew">
                                            <div className="">
                                                <div className="search-controls_checkbox_wrapper__12inS">
                                                    <div>
                                                        <label className="switch">
                                                            <input
                                                                type="checkbox"
                                                                tabIndex={99}
                                                                className="form-new-checkbox-input"
                                                                id="jetzt"
                                                                data-ht="yp_search_options|change|open_now_activated"
                                                            />
                                                            <span className="slider round" />
                                                            <span className="text-lead">
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        now opened
                                                                    </font>
                                                                </font>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="search-controls_child__qjWU5">
                                            <div className="search-controls_autocomplete_location_wrapper__WxoUX">
                                                <div
                                                    className="auto-complete-location-input_autocomplete_input_wrapper__2C-62"
                                                    style={{ height: 60 }}
                                                >
                                                    <div>
                                                        <span className="auto-complete-location-input_placeholder_text__2yPcl auto-complete-location-input_full_text__2CDDA">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    Zip code, city, district, state
                                                                </font>
                                                            </font>
                                                        </span>
                                                        <span className="auto-complete-location-input_placeholder_text__2yPcl auto-complete-location-input_short_text__XwIJ2">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    Zip code, city, district
                                                                </font>
                                                            </font>
                                                        </span>
                                                    </div>
                                                    <div className="input-group ">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <div className="input-group-icon">
                                                                    <i className="icon-standort" />
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <input
                                                            className="input_style"
                                                            id="auto_complete_location_input"
                                                            autoComplete="off"
                                                            defaultValue=""
                                                        />
                                                        <div className="new_append" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="search-controls_child__qjWU5 search-controls_for_mobile__3LZzb">
                                            <div className="">
                                                <div className="search-controls_checkbox_wrapper__12inS">
                                                    <div>
                                                        <label className="switch">
                                                            <input
                                                                type="checkbox"
                                                                tabIndex={99}
                                                                className="form-new-checkbox-input"
                                                                id="jetzt"
                                                                data-ht="yp_search_options|change|open_now_activated"
                                                            />
                                                            <span className="slider round" />
                                                            <span className="text-lead">
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        now opened
                                                                    </font>
                                                                </font>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="search-controls_child__qjWU5">
                                            <div className="search-controls_button_wrapper__3CVd_">
                                                <button
                                                    className="button_btn__3kzkB button_full_width__3lgu7 button_extra_large__1V7Uf"
                                                    style={{ height: "100%" }}
                                                >
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>SEEK</font>
                                                    </font>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="yellow_page_search_result_list_min_height">
                    <div className="breadcrumb_breadcrumb_block__2z7Xe breadcrumb_withFilters__PUNq- breadcrumb_large__1FOsc">
                        <div className="container">
                            <ol
                                className="breadcrumb_wrapper__3sSwF"
                                itemScope=""
                                itemType="https://schema.org/BreadcrumbList"
                            >
                                <li
                                    itemScope=""
                                    itemType="https://schema.org/ListItem"
                                    itemProp="itemListElement"
                                >
                                    <meta itemProp="position" content={0} />
                                    <a itemProp="item" title="Companies" href="/">
                                        <span itemProp="name">
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>Companies</font>
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
                                    <meta itemProp="position" content={1} />
                                    <span itemProp="name">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>{ind}</font>
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
                                                            {specificIndustryList?.length} results found for {ind}
                                                        </font>
                                                    </font>
                                                </h1>
                                                <div className="list-header_toggle_button__21W_S">
                                                    <i className="icon-down" />
                                                </div>
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
                                                                on="tap:yellowPagesSearchResultItems.toggleClass(class='grid',force=false),yellowPagesSearchResultItems.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessAddressModule.toggleClass(class='list',force=true),listViewButton.toggleClass(class='active',force=true),gridViewButton.toggleClass(class='active',force=false);"
                                                            >
                                                                <a title="list">
                                                                    <i className="icon-checkliste" />
                                                                    <span>
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
                                                                    <i className="icon-fliesenleger" />
                                                                    <span>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                Tiles
                                                                            </font>
                                                                        </font>
                                                                    </span>
                                                                </a>
                                                                <div className="list-header_tooltip__2WElB">
                                                                    <p>
                                                                        <b>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    Tip:
                                                                                </font>
                                                                            </font>
                                                                        </b>
                                                                        <font style={{ verticalAlign: "inherit" }} />
                                                                        <br />
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>

                                                                                Switch to tile view
                                                                            </font>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                to compare .
                                                                            </font>
                                                                        </font>
                                                                    </p>
                                                                    <div className="list-header_close_button__2LADG">
                                                                        <i className="icon-schliessen" />
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li onClick={() => { setThird(true); setSecond(false); setFirst(false) }}
                                                                className={third ? "list-header_active__248N7" : ""}>
                                                                <a title="Map">
                                                                    <i className="icon-standort" />
                                                                    <span>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                Map
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
                                    <div>
                                        <div
                                            id="yellowPagesSearchResultItems"
                                            className={first ? "yellow-pages-search-result-items_yellow_pages_search_result_items_module__5omoa" : second ? "yellow-pages-search-result-items_yellow_pages_search_result_items_module__5omoa yellow-pages-search-result-items_grid__2-QZK" : ""}
                                        >
                                            {
                                                specificIndustryList?.map((data, index) => (
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
                                                                <meta content={1} itemProp="position" />
                                                                <meta
                                                                    content="/gelbe-seiten/matrei-am-brenner/QsCHv/auer-gmbh/"
                                                                    itemProp="url"
                                                                />
                                                                <div className="yellow-pages-search-result-item_wrapper__HmB1A">
                                                                    <div
                                                                        id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessImageModule"
                                                                        className={first ? "business-image_image_wrapper__2eLPH business-image_list__3p-cG" : second ? "business-image_image_wrapper__2eLPH business-image_grid__AHrAV" : ""}
                                                                    >
                                                                        <a
                                                                            title="Link to Auer GmbH"
                                                                            data-clickpos="toplogo"
                                                                            className="business-image_image_wrapper_inner__uHPY_"
                                                                            href="/gelbe-seiten/matrei-am-brenner/QsCHv/auer-gmbh/"
                                                                        >
                                                                            <meta
                                                                                itemProp="image"
                                                                                content="https://www.herold.at/FS/picture/7/3/8/36386837.jpg"
                                                                            />
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
                                                                                    title="Logo Auer GmbH"
                                                                                    alt="Logo Auer GmbH"
                                                                                    sizes="100vw"
                                                                                    srcSet="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&w=640&q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&w=750&q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&w=828&q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&w=1080&q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&w=1200&q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&w=1920&q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&w=2048&q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&w=3840&q=75 3840w"
                                                                                    src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&w=3840&q=75"
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
                                                                                                            <i className="icon-stern_filled" />
                                                                                                        </div>
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
                                                                                                                href={`/give-rev/${data.id}`}
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
                                                                                            {data.industry}
                                                                                        </font>
                                                                                    </font>
                                                                                </h3>
                                                                                <h2 className="business-content_heading__2ED5C">
                                                                                    <a
                                                                                        itemProp="name"
                                                                                        data-clickpos="showdetails"
                                                                                        href="/gelbe-seiten/matrei-am-brenner/QsCHv/auer-gmbh/"
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
                                                                            <h3 className="business-content_subheading__kMUMz hide_xs_max">
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        Your partner from cars to heavy commercial
                                                                                        vehicles
                                                                                    </font>
                                                                                </font>
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
                                                                                    <i className="icon-standort" />
                                                                                </div>
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
                                                                                    {data.city},
                                                                                </font>
                                                                            </font>

                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    {data.postcode},
                                                                                </font>
                                                                            </font>

                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    {data.street},
                                                                                </font>
                                                                            </font>

                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    {data.country}
                                                                                </font>
                                                                            </font>
                                                                        </a>
                                                                        <a
                                                                            href="#"
                                                                            className="business-address_route_planer__3pqg0"
                                                                            data-category="get direction_result"
                                                                            data-action="click"
                                                                            data-label="YP:315349"
                                                                            data-ht="yp_result|click|go_to_route_planner|315349"
                                                                        >
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    Plan route
                                                                                </font>
                                                                            </font>
                                                                        </a>
                                                                        <div className="business-address_button_wrapper__38hR4">
                                                                            <a
                                                                                data-clickpos="showdetails"
                                                                                href={`/company-az/active/${data.id}`}
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
                                                                            <a data-yxt="phn" title="+43 5273 204985">
                                                                                <button
                                                                                    className="button_btn__3kzkB button_full_width__3lgu7"
                                                                                    style={{ height: 40 }}
                                                                                >
                                                                                    <div>
                                                                                        <i className="icon-telefon" />
                                                                                    </div>
                                                                                    <div className="phoneWrapper">
                                                                                        <span>
                                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                                <font
                                                                                                    style={{ verticalAlign: "inherit" }}
                                                                                                >
                                                                                                    Show phone number
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

                                    <div className="section-margin-bottom-lg">
                                        <div className="pagination_pagination_module__2Yjq7">
                                            <ul>
                                                <li className="pagination_arrow__21kAV disabled">
                                                    <a
                                                        className="pagination_page_link__wUToL pagination_arrow__21kAV pagination_previous__2ygMr"
                                                        tabIndex={0}
                                                        role="button"
                                                        aria-disabled="true"
                                                        aria-label="Previous page"
                                                        rel="prev"
                                                    />
                                                </li>
                                                <li className="pagination_active__3Tw6B">
                                                    <a
                                                        role="button"
                                                        className="pagination_page_link__wUToL"
                                                        tabIndex={0}
                                                        aria-label="Page 1 is your current page"
                                                        aria-current="page"
                                                    >
                                                        1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        role="button"
                                                        className="pagination_page_link__wUToL"
                                                        href="/gelbe-seiten/abschleppdienst/seite/2/"
                                                        tabIndex={0}
                                                        aria-label="Page 2"
                                                    >
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>2</font>
                                                        </font>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        role="button"
                                                        className="pagination_page_link__wUToL"
                                                        href="/gelbe-seiten/abschleppdienst/seite/3/"
                                                        tabIndex={0}
                                                        aria-label="Page 3"
                                                    >
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>3</font>
                                                        </font>
                                                    </a>
                                                </li>
                                                <li className="next">
                                                    <a
                                                        className="pagination_page_link__wUToL pagination_arrow__21kAV pagination_next__5OzgI"
                                                        href="/gelbe-seiten/abschleppdienst/seite/2/"
                                                        tabIndex={0}
                                                        role="button"
                                                        aria-disabled="false"
                                                        aria-label="Next page"
                                                        rel="next"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="section-margin-bottom-lg">
                                        <div>
                                            <div className="container">
                                                <div className="sponsor_sponsor_module__3_nxj">
                                                    <a
                                                        href="https://www.a1.net/?herold_referer=https%3A%2F%2Fwww.herold.at"
                                                        rel="nofollow"
                                                    >
                                                        <div
                                                            style={{
                                                                display: "inline-block",
                                                                maxWidth: "100%",
                                                                overflow: "hidden",
                                                                position: "relative",
                                                                boxSizing: "border-box",
                                                                margin: 0
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    boxSizing: "border-box",
                                                                    display: "block",
                                                                    maxWidth: "100%"
                                                                }}
                                                            >
                                                                <img
                                                                    style={{
                                                                        maxWidth: "100%",
                                                                        display: "block",
                                                                        margin: 0,
                                                                        border: "none",
                                                                        padding: 0
                                                                    }}
                                                                    alt=""
                                                                    aria-hidden="true"
                                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                                                />
                                                            </div>
                                                            <img
                                                                title="https://www.a1.net/?herold_referer=https%3A%2F%2Fwww.herold.at"
                                                                alt="https://www.a1.net/?herold_referer=https%3A%2F%2Fwww.herold.at"
                                                                srcSet="/_next/image/?url=%2Fassets%2Fsponsor.svg&w=96&q=75 1x, /_next/image/?url=%2Fassets%2Fsponsor.svg&w=256&q=75 2x"
                                                                src="/_next/image/?url=%2Fassets%2Fsponsor.svg&w=256&q=75"
                                                                decoding="async"
                                                                data-nimg="intrinsic"
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
                                                                    maxHeight: "100%"
                                                                }}
                                                            />
                                                            <noscript>
                                                                &lt;img
                                                                title="https://www.a1.net/?herold_referer=https%3A%2F%2Fwww.herold.at"
                                                                alt="https://www.a1.net/?herold_referer=https%3A%2F%2Fwww.herold.at"
                                                                srcSet="/_next/image/?url=%2Fassets%2Fsponsor.svg&amp;amp;w=96&amp;amp;q=75
                                                                1x,
                                                                /_next/image/?url=%2Fassets%2Fsponsor.svg&amp;amp;w=256&amp;amp;q=75
                                                                2x"
                                                                src="/_next/image/?url=%2Fassets%2Fsponsor.svg&amp;amp;w=256&amp;amp;q=75"
                                                                decoding="async" data-nimg="intrinsic"
                                                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                                                                loading="lazy"/&gt;
                                                            </noscript>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section_section_element__2A5tN">
                                        <div className="container">
                                            <div className="card-wrapper_element_card_wrapper_element__Bj1_s card-wrapper_element_equal_padding__10BQd">
                                                <div className="company-owner-approval_company_owner_approval__1xNjH">
                                                    <h5 className="company-owner-approval_heading__7U8ae">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Not on herold.at yet?
                                                            </font>
                                                        </font>
                                                    </h5>
                                                    <a
                                                        className="company-owner-approval_button_wrapper__kucHb"
                                                        title="REGISTER FOR FREE NOW"
                                                        href="/servlet/at.herold.gso.servlet.GSOChangeRequestServlet?context=ABOUT"
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
                                                        <i className="icon-firma" />
                                                    </div>
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
                                                        specificIndustryCompanyList?.map((data, index) => (
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
                                                        <i className="icon-standort" />
                                                    </div>
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
                                                                    href={`/industry/search/${industry}/${data}`}
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
                                                        <i className="icon-bewerten" />
                                                    </div>
                                                    <h2 className="details-page-section-heading_element_heading__3UmDR">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Companies of the month
                                                            </font>
                                                        </font>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div>
                                                <ul className="advertisement9_detail_page_list__-w8Q0">
                                                    <li>
                                                        <a href="/gelbe-seiten/wolfsberg/b6sZR/welwich-gmbh/">
                                                            <p>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        Welwich GmbH
                                                                    </font>
                                                                </font>
                                                            </p>
                                                            <span className="advertisement9_sub_info__1Favu">
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        Klagenfurter Straße 60,
                                                                    </font>
                                                                </font>

                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        9431
                                                                    </font>
                                                                </font>

                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        Wolfsberg,
                                                                    </font>
                                                                </font>

                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        Wolfsberg,
                                                                    </font>
                                                                </font>

                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        Carinthia
                                                                    </font>
                                                                </font>
                                                            </span>
                                                        </a>
                                                    </li>
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