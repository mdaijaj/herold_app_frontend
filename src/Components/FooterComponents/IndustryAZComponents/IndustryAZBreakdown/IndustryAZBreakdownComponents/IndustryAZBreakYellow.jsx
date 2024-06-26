import { useState } from "react"

export const IndustryAZBreakYellow = () => {
    const [change, setChange] = useState("list");
    return (
        <>

            <div class="yellow_page_search_result_list_min_height">
                <div class="breadcrumb_breadcrumb_block__2z7Xe breadcrumb_withFilters__PUNq- breadcrumb_large__1FOsc">
                    <div class="container">
                        <ol class="breadcrumb_wrapper__3sSwF" itemscope="" itemtype="https://schema.org/BreadcrumbList">
                            <li itemscope="" itemtype="https://schema.org/ListItem" itemprop="itemListElement">
                                <meta itemprop="position" content="0" />
                                <a itemprop="item" title="Firmen" href="/">
                                    <span itemprop="name" _msttexthash="136396" _msthash="44">Corporate</span>
                                </a>
                                <div class="breadcrumb_right_arrow__CSjEg">
                                    <i class="icon-pfeile"></i>
                                </div>
                            </li>
                            <li class="breadcrumb_current_page__3Fh5F" itemscope="" itemtype="https://schema.org/ListItem" itemprop="itemListElement">
                                <meta itemprop="position" content="1" />
                                <span itemprop="name" _msttexthash="320333" _msthash="45">Breakdown service</span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="section_section_element__2A5tN section_medium_overlap__1_FlG section_medium__3dvm3">
                    <div class="container">
                        <div class="col_split_cards size_lg" role="main" itemscope="" itemtype="https://schema.org/ItemList">
                            <meta itemprop="itemListOrder" content="ItemListUnordered" />
                            <meta itemprop="numberOfItems" content="30" />
                            <div className={change === "list" ? "left" : change === "tile" ? "left full_width" : change === "card" ? "" : ""}>
                                <main>
                                    <div class="list-header_list_header_module__9Yh_6">
                                        <div class="list-header_heading__AMXVc">
                                            <h1 class="list-header_head__28oEb" _msttexthash="1095848" _msthash="46">86 results were found for Towing Service</h1>
                                            <div class="list-header_toggle_button__21W_S">
                                                <i class="icon-down"></i>
                                            </div>
                                        </div>
                                        <div class="list-header_filters__U0WX8">
                                            <div class="list-header_filters_inner__2YkWD">
                                                <div class="list-header_filter__3yvFJ list-header_layout_filter__1sdRZ">
                                                    <label class="list-header_label__1on1h" _msttexthash="46033" _msthash="47">View</label>
                                                    <ul>
                                                        <li onClick={() => { setChange("list") }} id="listViewButton" className={change === "list" ? "list-header_active__248N7" : ""} tabindex="0" role="button" on="tap:yellowPagesSearchResultItems.toggleClass(class='grid',force=false),yellowPagesSearchResultItems.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessImageModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessImageModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessContentModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessContentModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessAddressModule.toggleClass(class='list',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessAddressModule.toggleClass(class='grid',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessAddressModule.toggleClass(class='list',force=true),listViewButton.toggleClass(class='active',force=true),gridViewButton.toggleClass(class='active',force=false);">
                                                            <a title="Liste">
                                                                <i class="icon-checkliste"></i>
                                                                <span _msttexthash="46371" _msthash="48">List</span>
                                                            </a>
                                                        </li>
                                                        <li onClick={() => { setChange("tile") }} id="gridViewButton" className={change === "tile" ? "list-header_active__248N7" : ""} tabindex="0" role="button" on="tap:yellowPagesSearchResultItems.toggleClass(class='list',force=false),yellowPagesSearchResultItems.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessImageModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessImageModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessContentModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessContentModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessAddressModule.toggleClass(class='grid',force=true),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessAddressModule.toggleClass(class='list',force=false),yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessAddressModule.toggleClass(class='grid',force=true),gridViewButton.toggleClass(class='active',force=true),listViewButton.toggleClass(class='active',force=false);">
                                                            <a title="Kacheln">
                                                                <i class="icon-fliesenleger"></i>
                                                                <span _msttexthash="44330" _msthash="49">Tile</span>
                                                            </a>
                                                            <div class="list-header_tooltip__2WElB">
                                                                <p _msttexthash="868192" _msthash="50">
                                                                    <b _istranslated="1">Tip:</b> Switch <br _istranslated="1" /> to tile view to compare.
                                                                </p>
                                                                <div class="list-header_close_button__2LADG">
                                                                    <i class="icon-schliessen"></i>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li onClick={() => { setChange("card") }} className={change === "card" ? "list-header_active__248N7" : ""}>
                                                            <a title="Karte">
                                                                <i class="icon-standort"></i>
                                                                <span _msttexthash="42523" _msthash="51">Card</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                                <div style={change === "card" ? { display: "none" } : {}}>
                                    <div id="yellowPagesSearchResultItems" className={change === "list" ? "yellow-pages-search-result-items_yellow_pages_search_result_items_module__5omoa" : change === "tile" ? "yellow-pages-search-result-items_yellow_pages_search_result_items_module__5omoa yellow-pages-search-result-items_grid__2-QZK" : change === "card" ? "" : ""}>
                                        <div id="plain0" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|315349">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_0" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="315349" data-detail-url="/gelbe-seiten/matrei-am-brenner/QsCHv/auer-gmbh/" data-clickpos="whitespace">
                                                    <meta content="1" itemprop="position" />
                                                    <meta content="/gelbe-seiten/matrei-am-brenner/QsCHv/auer-gmbh/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Auer GmbH" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/matrei-am-brenner/QsCHv/auer-gmbh/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/7/3/8/36386837.jpg" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}>
                                                                    <img title="Logo Auer GmbH" alt="Logo Auer GmbH" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&amp;w=3840&amp;q=75 3840w"
                                                                        src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F3%2F8%2F36386837.jpg&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                        _mstalt="185328" _msthash="52" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="15977" _msthash="53">4,9</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=315349" rel="nofollow" data-ht="yp_result|click|rate_company|315349" _msttexthash="209378" _msthash="54">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="129831" _msthash="55">Car Repair</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/matrei-am-brenner/QsCHv/auer-gmbh/"><span _msttexthash="101543" _msthash="56">Auer GmbH</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="2845492" _msthash="57">Your partner from passenger cars to heavy-duty commercial vehicles</h3></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_0_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="58">Address</h2>
                                                                </div>
                                                            </div>
                                                            <a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="1833624" _msthash="59">Statz 92, 6143 Matrei am Brenner, Innsbruck (Land), Tyrol</font>
                                                            </a>
                                                            <a
                                                                href="/routenplaner/?direction=nach&amp;sid=QsCHv" class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:315349" data-ht="yp_result|click|go_to_route_planner|315349"
                                                                _msttexthash="242567" _msthash="60">Plan your route</a>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/matrei-am-brenner/QsCHv/auer-gmbh/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="61">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 5273 204985">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="62">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain1" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|424910">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_1" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="424910" data-detail-url="/gelbe-seiten/wien/l9nnj/abschleppdienst-toman-gmbh/" data-clickpos="whitespace">
                                                    <meta content="2" itemprop="position" />
                                                    <meta content="/gelbe-seiten/wien/l9nnj/abschleppdienst-toman-gmbh/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Abschleppdienst Toman GmbH" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/wien/l9nnj/abschleppdienst-toman-gmbh/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/5/2/7/34559725.jpg" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}>
                                                                    <img title="Logo Abschleppdienst Toman GmbH" alt="Logo towing service Toman GmbH" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F2%2F7%2F34559725.jpg&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F2%2F7%2F34559725.jpg&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F2%2F7%2F34559725.jpg&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F2%2F7%2F34559725.jpg&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F2%2F7%2F34559725.jpg&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F2%2F7%2F34559725.jpg&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F2%2F7%2F34559725.jpg&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F2%2F7%2F34559725.jpg&amp;w=3840&amp;q=75 3840w"
                                                                        src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F2%2F7%2F34559725.jpg&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                        _mstalt="750256" _msthash="63" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="64">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=424910" rel="nofollow" data-ht="yp_result|click|rate_company|424910" _msttexthash="209378" _msthash="65">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="66">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/wien/l9nnj/abschleppdienst-toman-gmbh/"><span _msttexthash="501631" _msthash="67">Towing service Toman GmbH</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="13038194" _msthash="68">Towing service, salvage and roadside assistance for cars and trucks, parking space monitoring &amp; towing of illegal parkers, vehicle transport, assistance</h3><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="69">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_1_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="70">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC">
                                                                <font _mstmutation="1" _msttexthash="1680757" _msthash="71">Tenschertstraße 5, 1230 Vienna, Vienna (City), Vienna</font></a><a href="/routenplaner/?direction=nach&amp;sid=l9nnj"
                                                                    class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:424910" data-ht="yp_result|click|go_to_route_planner|424910" _msttexthash="242567" _msthash="72">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/wien/l9nnj/abschleppdienst-toman-gmbh/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="73">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 1 61414">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="74">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb_25">
                                            <div class="show-lg"></div>
                                            <div class="show-md"></div>
                                            <div class="show-sm"></div>
                                        </div>
                                        <div id="plain2" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|297856">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_2" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="297856" data-detail-url="/gelbe-seiten/lustenau/CxHWJ/plesnicar-automobile-gmbh/" data-clickpos="whitespace">
                                                    <meta content="3" itemprop="position" />
                                                    <meta content="/gelbe-seiten/lustenau/CxHWJ/plesnicar-automobile-gmbh/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Plesnicar Automobile GmbH" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/lustenau/CxHWJ/plesnicar-automobile-gmbh/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/orgimg/8/7/2/31394278.gif" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}>
                                                                    <img title="Logo Plesnicar Automobile GmbH" alt="Logo Plesnicar Automobile GmbH" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F8%2F7%2F2%2F31394278.gif&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F8%2F7%2F2%2F31394278.gif&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F8%2F7%2F2%2F31394278.gif&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F8%2F7%2F2%2F31394278.gif&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F8%2F7%2F2%2F31394278.gif&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F8%2F7%2F2%2F31394278.gif&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F8%2F7%2F2%2F31394278.gif&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F8%2F7%2F2%2F31394278.gif&amp;w=3840&amp;q=75 3840w"
                                                                        src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F8%2F7%2F2%2F31394278.gif&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                        _mstalt="703183" _msthash="75" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="15015" _msthash="76">5,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=297856" rel="nofollow" data-ht="yp_result|click|rate_company|297856" _msttexthash="209378" _msthash="77">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="225940" _msthash="78">Car Dealership</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/lustenau/CxHWJ/plesnicar-automobile-gmbh/"><span _msttexthash="537602" _msthash="79">Plesnicar Automobile GmbH</span></a></h2></div>
                                                            </div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_2_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="80">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="1798160" _msthash="81">Grindelstraße 4, 6890 Lustenau, Dornbirn, Vorarlberg</font></a><a href="/routenplaner/?direction=nach&amp;sid=CxHWJ"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:297856" data-ht="yp_result|click|go_to_route_planner|297856" _msttexthash="242567" _msthash="82">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/lustenau/CxHWJ/plesnicar-automobile-gmbh/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="83">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 664 1819000">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="84">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain3" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|706193">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_3" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="706193" data-detail-url="/gelbe-seiten/wien/QCsBH/t1-abw-abschleppdienst-gmbh/" data-clickpos="whitespace">
                                                    <meta content="4" itemprop="position" />
                                                    <meta content="/gelbe-seiten/wien/QCsBH/t1-abw-abschleppdienst-gmbh/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to T1 ABW Abschleppdienst GmbH" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/wien/QCsBH/t1-abw-abschleppdienst-gmbh/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/0/3/8/25584830.png" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}>
                                                                    <img title="Logo T1 ABW Abschleppdienst GmbH" alt="Logo T1 ABW Abschleppdienst GmbH" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F3%2F8%2F25584830.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F3%2F8%2F25584830.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F3%2F8%2F25584830.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F3%2F8%2F25584830.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F3%2F8%2F25584830.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F3%2F8%2F25584830.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F3%2F8%2F25584830.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F3%2F8%2F25584830.png&amp;w=3840&amp;q=75 3840w"
                                                                        src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F3%2F8%2F25584830.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                        _mstalt="724841" _msthash="85" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="15860" _msthash="86">4,8</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=706193" rel="nofollow" data-ht="yp_result|click|rate_company|706193" _msttexthash="209378" _msthash="87">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="94380" _msthash="88">Carrier</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/wien/QCsBH/t1-abw-abschleppdienst-gmbh/"><span _msttexthash="562276" _msthash="89">T1 ABW Abschleppdienst GmbH</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="2370667" _msthash="90">The T1 ABW towing service fleet for safe and prompt operations!</h3><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="91">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_3_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="92">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="2385279" _msthash="93">Groß-Enzersdorfer Straße 88a, 1220 Vienna, Vienna (City), Vienna</font></a>
                                                            <a
                                                                href="/routenplaner/?direction=nach&amp;sid=QCsBH" class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:706193" data-ht="yp_result|click|go_to_route_planner|706193" _msttexthash="242567"
                                                                _msthash="94">Plan your route</a>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/wien/QCsBH/t1-abw-abschleppdienst-gmbh/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="95">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 1 7746812">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="96">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain4" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|1297978">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_4" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="1297978" data-detail-url="/gelbe-seiten/thaur/ZbPdw/auer-gmbh-kfz-werkstätte-abschlepp-berge-pannendienst/" data-clickpos="whitespace">
                                                    <meta content="5" itemprop="position" />
                                                    <meta content="/gelbe-seiten/thaur/ZbPdw/auer-gmbh-kfz-werkstätte-abschlepp-berge-pannendienst/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Auer GmbH Kfz-Werkstätte Abschlepp-Berge-Pannendienst" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/thaur/ZbPdw/auer-gmbh-kfz-werkst%C3%A4tte-abschlepp-berge-pannendienst/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/4/9/6/35922694.jpg" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}>
                                                                    <img title="Logo Auer GmbH Kfz-Werkstätte Abschlepp-Berge-Pannendienst" alt="Logo Auer GmbH Kfz-Werkstätte Schlepp-Berge-Breakdown Service" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F9%2F6%2F35922694.jpg&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F9%2F6%2F35922694.jpg&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F9%2F6%2F35922694.jpg&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F9%2F6%2F35922694.jpg&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F9%2F6%2F35922694.jpg&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F9%2F6%2F35922694.jpg&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F9%2F6%2F35922694.jpg&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F9%2F6%2F35922694.jpg&amp;w=3840&amp;q=75 3840w"
                                                                        src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F9%2F6%2F35922694.jpg&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                        _mstalt="2382042" _msthash="97" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="98">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=1297978" rel="nofollow" data-ht="yp_result|click|rate_company|1297978" _msttexthash="209378" _msthash="99">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="63921" _msthash="100">Lorry</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/thaur/ZbPdw/auer-gmbh-kfz-werkst%C3%A4tte-abschlepp-berge-pannendienst/"><span _msttexthash="1933334" _msthash="101">Auer GmbH Kfz-Werkstätte Schlepp-Berge-Pannendienst</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="2470065" _msthash="102">Your partner from passenger cars to heavy commercial vehicles.</h3></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_4_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="103">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="1525498" _msthash="104">Römerstraße 3, 6065 Thaur, Innsbruck (Land), Tyrol</font></a><a href="/routenplaner/?direction=nach&amp;sid=ZbPdw"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:1297978" data-ht="yp_result|click|go_to_route_planner|1297978" _msttexthash="242567" _msthash="105">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/thaur/ZbPdw/auer-gmbh-kfz-werkst%C3%A4tte-abschlepp-berge-pannendienst/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="106">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 50 640 505">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="107">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain5" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|99951">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_5" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="99951" data-detail-url="/gelbe-seiten/wolfsberg/b6sZR/welwich-gmbh/" data-clickpos="whitespace">
                                                    <meta content="6" itemprop="position" />
                                                    <meta content="/gelbe-seiten/wolfsberg/b6sZR/welwich-gmbh/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Welwich GmbH" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/wolfsberg/b6sZR/welwich-gmbh/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/7/4/3/37112347.png" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}>
                                                                    <img title="Logo Welwich GmbH" alt="Logo Welwich GmbH" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F4%2F3%2F37112347.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F4%2F3%2F37112347.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F4%2F3%2F37112347.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F4%2F3%2F37112347.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F4%2F3%2F37112347.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F4%2F3%2F37112347.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F4%2F3%2F37112347.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F4%2F3%2F37112347.png&amp;w=3840&amp;q=75 3840w"
                                                                        src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F7%2F4%2F3%2F37112347.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                        _mstalt="265772" _msthash="108" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="109">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=99951" rel="nofollow" data-ht="yp_result|click|rate_company|99951" _msttexthash="209378" _msthash="110">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="111">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/wolfsberg/b6sZR/welwich-gmbh/"><span _msttexthash="165035" _msthash="112">Welwich GmbH</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="2036502" _msthash="113">Your professional for car repair in Wolfsberg - Carinthia</h3></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_5_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="114">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="2268110" _msthash="115">Klagenfurter Straße 60, 9431 Wolfsberg, Wolfsberg, Carinthia</font> </a>
                                                            <a
                                                                href="/routenplaner/?direction=nach&amp;sid=b6sZR" class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:99951" data-ht="yp_result|click|go_to_route_planner|99951" _msttexthash="242567"
                                                                _msthash="116">Plan your route</a>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/wolfsberg/b6sZR/welwich-gmbh/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="117">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 4352 81230">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="118">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain6" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|903249">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_6" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="903249" data-detail-url="/gelbe-seiten/gunskirchen/Hhh9S/gap-service-gmbh/" data-clickpos="whitespace">
                                                    <meta content="7" itemprop="position" />
                                                    <meta content="/gelbe-seiten/gunskirchen/Hhh9S/gap-service-gmbh/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to GAP Service GmbH" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/gunskirchen/Hhh9S/gap-service-gmbh/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/6/1/5/35983516.png" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}>
                                                                    <img title="Logo GAP Service GmbH" alt="Logo GAP Service GmbH" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F1%2F5%2F35983516.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F1%2F5%2F35983516.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F1%2F5%2F35983516.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F1%2F5%2F35983516.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F1%2F5%2F35983516.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F1%2F5%2F35983516.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F1%2F5%2F35983516.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F1%2F5%2F35983516.png&amp;w=3840&amp;q=75 3840w"
                                                                        src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F1%2F5%2F35983516.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                        _mstalt="340951" _msthash="119" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="15015" _msthash="120">5,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=903249" rel="nofollow" data-ht="yp_result|click|rate_company|903249" _msttexthash="209378" _msthash="121">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="122">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/gunskirchen/Hhh9S/gap-service-gmbh/"><span _msttexthash="229086" _msthash="123">GAP Service GmbH</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="896493" _msthash="124">24h towing and roadside assistance!</h3><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="125">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_6_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="126">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="2311660" _msthash="127">Kieswerkstraße 1, 4623 Gunskirchen, Wels (Land), Upper Austria</font> </a>
                                                            <a
                                                                href="/routenplaner/?direction=nach&amp;sid=Hhh9S" class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:903249" data-ht="yp_result|click|go_to_route_planner|903249" _msttexthash="242567"
                                                                _msthash="128">Plan your route</a>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/gunskirchen/Hhh9S/gap-service-gmbh/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="129">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 7246 886688">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="130">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain7" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|1052813">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_7" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="1052813" data-detail-url="/gelbe-seiten/krumpendorf-am-wörther-see/BdP9V/abschleppdienst-und-kfz-meisterbetrieb-hinteregger-julian/" data-clickpos="whitespace">
                                                    <meta content="8" itemprop="position" />
                                                    <meta content="/gelbe-seiten/krumpendorf-am-wörther-see/BdP9V/abschleppdienst-und-kfz-meisterbetrieb-hinteregger-julian/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Abschleppdienst und KFZ-Meisterbetrieb Hinteregger Julian" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/krumpendorf-am-w%C3%B6rther-see/BdP9V/abschleppdienst-und-kfz-meisterbetrieb-hinteregger-julian/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/9/4/7/36052749.png" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}>
                                                                    <img title="Logo Abschleppdienst und KFZ-Meisterbetrieb Hinteregger Julian" alt="Logo towing service and master car repair company Hinteregger Julian" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F9%2F4%2F7%2F36052749.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F9%2F4%2F7%2F36052749.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F9%2F4%2F7%2F36052749.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F9%2F4%2F7%2F36052749.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F9%2F4%2F7%2F36052749.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F9%2F4%2F7%2F36052749.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F9%2F4%2F7%2F36052749.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F9%2F4%2F7%2F36052749.png&amp;w=3840&amp;q=75 3840w"
                                                                        src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F9%2F4%2F7%2F36052749.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                        _mstalt="2647281" _msthash="131" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="15015" _msthash="132">5,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=1052813" rel="nofollow" data-ht="yp_result|click|rate_company|1052813" _msttexthash="209378" _msthash="133">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="134">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/krumpendorf-am-w%C3%B6rther-see/BdP9V/abschleppdienst-und-kfz-meisterbetrieb-hinteregger-julian/"><span _msttexthash="1995500" _msthash="135">Towing service and master craftsman Hinteregger Julian</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="2652598" _msthash="136">Vehicle recovery in the area of Klagenfurt and the whole of Austria</h3></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_7_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="137">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="3494491" _msthash="138">Hauptstraße 91, 9201 Krumpendorf am Wörther See, Klagenfurt (Land), Carinthia</font> </a>
                                                            <a
                                                                href="/routenplaner/?direction=nach&amp;sid=BdP9V" class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:1052813" data-ht="yp_result|click|go_to_route_planner|1052813"
                                                                _msttexthash="242567" _msthash="139">Plan your route</a>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/krumpendorf-am-w%C3%B6rther-see/BdP9V/abschleppdienst-und-kfz-meisterbetrieb-hinteregger-julian/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="140">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 4229 40217">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="141">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain8" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|816872">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_8" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="816872" data-detail-url="/gelbe-seiten/reutte/GDfNb/hundertpfund-pannenhilfe-abschleppdienst/" data-clickpos="whitespace">
                                                    <meta content="9" itemprop="position" />
                                                    <meta content="/gelbe-seiten/reutte/GDfNb/hundertpfund-pannenhilfe-abschleppdienst/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Hundertpfund Pannenhilfe-Abschleppdienst" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/reutte/GDfNb/hundertpfund-pannenhilfe-abschleppdienst/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/2/3/8/35728832.png" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}>
                                                                    <img title="Logo Hundertpfund Pannenhilfe-Abschleppdienst" alt="Logo Hundred Pound Roadside Assistance Towing Service" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F3%2F8%2F35728832.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F3%2F8%2F35728832.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F3%2F8%2F35728832.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F3%2F8%2F35728832.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F3%2F8%2F35728832.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F3%2F8%2F35728832.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F3%2F8%2F35728832.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F3%2F8%2F35728832.png&amp;w=3840&amp;q=75 3840w"
                                                                        src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F3%2F8%2F35728832.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                        _mstalt="1609738" _msthash="142" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="15015" _msthash="143">5,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=816872" rel="nofollow" data-ht="yp_result|click|rate_company|816872" _msttexthash="209378" _msthash="144">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="145">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/reutte/GDfNb/hundertpfund-pannenhilfe-abschleppdienst/"><span _msttexthash="1739504" _msthash="146">Hundred-pound roadside assistance towing service</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="2166463" _msthash="147">We help you out of difficult situations quickly and easily!</h3><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="148">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_8_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="149">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="1323842" _msthash="150">Allgäuer Straße 72, 6600 Reutte, Reutte, Tyrol</font> </a><a href="/routenplaner/?direction=nach&amp;sid=GDfNb"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:816872" data-ht="yp_result|click|go_to_route_planner|816872" _msttexthash="242567" _msthash="151">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/reutte/GDfNb/hundertpfund-pannenhilfe-abschleppdienst/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="152">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 5673 2411">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="153">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain9" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|167084">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_9" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="167084" data-detail-url="/gelbe-seiten/gaspoltshofen/TlX8G/autohaus-danner-gesmbh/" data-clickpos="whitespace">
                                                    <meta content="10" itemprop="position" />
                                                    <meta content="/gelbe-seiten/gaspoltshofen/TlX8G/autohaus-danner-gesmbh/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Autohaus Danner GesmbH" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/gaspoltshofen/TlX8G/autohaus-danner-gesmbh/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/1/3/7/23079731.png" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}><img title="Logo Autohaus Danner GesmbH" alt="Logo Autohaus Danner GesmbH" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=3840&amp;q=75 3840w"
                                                                    src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                    _mstalt="577070" _msthash="154" />
                                                                    <noscript><img title="Logo Autohaus Danner GesmbH" alt="Logo Autohaus Danner GesmbH" sizes="100vw" srcSet="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=3840&amp;q=75 3840w"
                                                                        src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F3%2F7%2F23079731.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                        loading="lazy" /></noscript>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="155">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=167084" rel="nofollow" data-ht="yp_result|click|rate_company|167084" _msttexthash="209378" _msthash="156">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="157">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/gaspoltshofen/TlX8G/autohaus-danner-gesmbh/"><span _msttexthash="427713" _msthash="158">Autohaus Danner GesmbH</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="4007367" _msthash="159">A car dealership is operated (sales and workshop): Representation of the Ford brand</h3></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_9_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="160">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="2159495" _msthash="161">Jeding 17, 4673 Gaspoltshofen, Grieskirchen, Upper Austria</font> </a><a href="/routenplaner/?direction=nach&amp;sid=TlX8G"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:167084" data-ht="yp_result|click|go_to_route_planner|167084" _msttexthash="242567" _msthash="162">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/gaspoltshofen/TlX8G/autohaus-danner-gesmbh/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="163">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 7735 67110">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="164">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain10" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|935424">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_10" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="935424" data-detail-url="/gelbe-seiten/mieming/6z8mc/lex24--|-abschleppdienst-pannendienst---alexander-kranebitter/" data-clickpos="whitespace">
                                                    <meta content="11" itemprop="position" />
                                                    <meta content="/gelbe-seiten/mieming/6z8mc/lex24--|-abschleppdienst-pannendienst---alexander-kranebitter/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Lex24  | Abschleppdienst &amp; Pannendienst - Alexander Kranebitter" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/mieming/6z8mc/lex24--|-abschleppdienst-pannendienst---alexander-kranebitter/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/5/0/6/33205605.jpg" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}><img title="Logo Lex24  | Abschleppdienst &amp; Pannendienst - Alexander Kranebitter" alt="Logo Lex24 | Towing &amp; Breakdown Service - Alexander Kranebitter" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F0%2F6%2F33205605.jpg&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F0%2F6%2F33205605.jpg&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F0%2F6%2F33205605.jpg&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F0%2F6%2F33205605.jpg&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F0%2F6%2F33205605.jpg&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F0%2F6%2F33205605.jpg&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F0%2F6%2F33205605.jpg&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F0%2F6%2F33205605.jpg&amp;w=3840&amp;q=75 3840w"
                                                                    src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F5%2F0%2F6%2F33205605.jpg&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                    _mstalt="3141463" _msthash="165" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="166">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=935424" rel="nofollow" data-ht="yp_result|click|rate_company|935424" _msttexthash="209378" _msthash="167">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="168">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/mieming/6z8mc/lex24--|-abschleppdienst-pannendienst---alexander-kranebitter/"><span _msttexthash="2068508" _msthash="169">Lex24 | Towing &amp; Breakdown Service - Alexander Kranebitter</span></a></h2></div><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="170">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_10_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="171">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="1156116" _msthash="172">Sportplatzweg 21, 6414 Mieming, Imst, Tyrol</font> </a><a href="/routenplaner/?direction=nach&amp;sid=6z8mc"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:935424" data-ht="yp_result|click|go_to_route_planner|935424" _msttexthash="242567" _msthash="173">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/mieming/6z8mc/lex24--|-abschleppdienst-pannendienst---alexander-kranebitter/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="174">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 664 3408833">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="175">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain11" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|686948">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_11" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="686948" data-detail-url="/gelbe-seiten/purkersdorf/JNTzC/rhc-kfz-handel-reparatur-und-transport-gmbh/" data-clickpos="whitespace">
                                                    <meta content="12" itemprop="position" />
                                                    <meta content="/gelbe-seiten/purkersdorf/JNTzC/rhc-kfz-handel-reparatur-und-transport-gmbh/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to R.H.C. KFZ Handel Reparatur und Transport GMBH" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/purkersdorf/JNTzC/rhc-kfz-handel-reparatur-und-transport-gmbh/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/6/4/4/35981446.png" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}><img title="Logo R.H.C. KFZ Handel Reparatur und Transport GMBH" alt="Logo R.H.C. KFZ Handel Reparatur und Transport GMBH" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F4%2F4%2F35981446.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F4%2F4%2F35981446.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F4%2F4%2F35981446.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F4%2F4%2F35981446.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F4%2F4%2F35981446.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F4%2F4%2F35981446.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F4%2F4%2F35981446.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F4%2F4%2F35981446.png&amp;w=3840&amp;q=75 3840w"
                                                                    src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F4%2F4%2F35981446.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                    _mstalt="1574664" _msthash="176" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="177">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=686948" rel="nofollow" data-ht="yp_result|click|rate_company|686948" _msttexthash="209378" _msthash="178">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="179">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/purkersdorf/JNTzC/rhc-kfz-handel-reparatur-und-transport-gmbh/"><span _msttexthash="1336387" _msthash="180">R.H.C. KFZ Handel Reparatur und Transport GMBH</span></a></h2></div><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="181">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_11_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="182">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="3181581" _msthash="183">Tullnerbachstraße 128, 3011 Purkersdorf, St. Pölten (Land), Lower Austria</font> </a>
                                                            <a
                                                                href="/routenplaner/?direction=nach&amp;sid=JNTzC" class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:686948" data-ht="yp_result|click|go_to_route_planner|686948" _msttexthash="242567"
                                                                _msthash="184">Plan your route</a>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/purkersdorf/JNTzC/rhc-kfz-handel-reparatur-und-transport-gmbh/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="185">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 664 1013500">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="186">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain12" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|305253">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_12" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="305253" data-detail-url="/gelbe-seiten/klagenfurt-am-wörthersee/7bRD2/abschleppdienst-u-pannenhilfe-dobernig-gmbh/" data-clickpos="whitespace">
                                                    <meta content="13" itemprop="position" />
                                                    <meta content="/gelbe-seiten/klagenfurt-am-wörthersee/7bRD2/abschleppdienst-u-pannenhilfe-dobernig-gmbh/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Abschleppdienst u Pannenhilfe Dobernig GmbH" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/klagenfurt-am-w%C3%B6rthersee/7bRD2/abschleppdienst-u-pannenhilfe-dobernig-gmbh/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/0/1/4/34723410.jpg" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}><img title="Logo Abschleppdienst u Pannenhilfe Dobernig GmbH" alt="Logo towing service and breakdown assistance Dobernig GmbH" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F1%2F4%2F34723410.jpg&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F1%2F4%2F34723410.jpg&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F1%2F4%2F34723410.jpg&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F1%2F4%2F34723410.jpg&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F1%2F4%2F34723410.jpg&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F1%2F4%2F34723410.jpg&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F1%2F4%2F34723410.jpg&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F1%2F4%2F34723410.jpg&amp;w=3840&amp;q=75 3840w"
                                                                    src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F1%2F4%2F34723410.jpg&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                    _mstalt="1580969" _msthash="187" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="188">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=305253" rel="nofollow" data-ht="yp_result|click|rate_company|305253" _msttexthash="209378" _msthash="189">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="190">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/klagenfurt-am-w%C3%B6rthersee/7bRD2/abschleppdienst-u-pannenhilfe-dobernig-gmbh/"><span _msttexthash="1877356" _msthash="191">Towing service and breakdown assistance Dobernig GmbH</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="941447" _msthash="192">WE OFFER THE HIGHEST QUALITY TOWING SERVICE !</h3><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="193">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_12_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="194">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="2925780" _msthash="195">Feldkirchner Straße 113, 9020 Klagenfurt, Klagenfurt (City), Carinthia</font> </a>
                                                            <a
                                                                href="/routenplaner/?direction=nach&amp;sid=7bRD2" class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:305253" data-ht="yp_result|click|go_to_route_planner|305253" _msttexthash="242567"
                                                                _msthash="196">Plan your route</a>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/klagenfurt-am-w%C3%B6rthersee/7bRD2/abschleppdienst-u-pannenhilfe-dobernig-gmbh/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="197">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 463 445555">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="198">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain13" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|695734">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_13" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="695734" data-detail-url="/gelbe-seiten/amstetten/T7NQ1/oliver-wiesler/" data-clickpos="whitespace">
                                                    <meta content="14" itemprop="position" />
                                                    <meta content="/gelbe-seiten/amstetten/T7NQ1/oliver-wiesler/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Oliver Wiesler" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/amstetten/T7NQ1/oliver-wiesler/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/1/8/6/35993681.png" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}><img title="Logo Oliver Wiesler" alt="Logo Oliver Wiesler" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F8%2F6%2F35993681.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F8%2F6%2F35993681.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F8%2F6%2F35993681.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F8%2F6%2F35993681.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F8%2F6%2F35993681.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F8%2F6%2F35993681.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F8%2F6%2F35993681.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F8%2F6%2F35993681.png&amp;w=3840&amp;q=75 3840w"
                                                                    src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F1%2F8%2F6%2F35993681.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                    _mstalt="346814" _msthash="199" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="200">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=695734" rel="nofollow" data-ht="yp_result|click|rate_company|695734" _msttexthash="209378" _msthash="201">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="202">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/amstetten/T7NQ1/oliver-wiesler/"><span _msttexthash="231361" _msthash="203">Oliver Wiesler</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="6475950" _msthash="204">We offer a wide range of services and will be happy to help you with any problem you may have with your vehicle.</h3><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="205">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_13_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="206">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="2962479" _msthash="207">Peter-Mitterhofer-Straße 3, 3300 Amstetten, Amstetten, Lower Austria</font> </a>
                                                            <a
                                                                href="/routenplaner/?direction=nach&amp;sid=T7NQ1" class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:695734" data-ht="yp_result|click|go_to_route_planner|695734" _msttexthash="242567"
                                                                _msthash="208">Plan your route</a>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/amstetten/T7NQ1/oliver-wiesler/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="209">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 7472 23440">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="210">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain14" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|106566">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_14" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="106566" data-detail-url="/gelbe-seiten/linz/ZNHQP/abschleppdienst-kusmitsch-gesmbh/" data-clickpos="whitespace">
                                                    <meta content="15" itemprop="position" />
                                                    <meta content="/gelbe-seiten/linz/ZNHQP/abschleppdienst-kusmitsch-gesmbh/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Abschleppdienst Kusmitsch GesmbH" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/linz/ZNHQP/abschleppdienst-kusmitsch-gesmbh/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/3/7/1/25149173.jpg" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}><img title="Logo Abschleppdienst Kusmitsch GesmbH" alt="Logo Towing Service Kusmitsch GesmbH" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F3%2F7%2F1%2F25149173.jpg&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F3%2F7%2F1%2F25149173.jpg&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F3%2F7%2F1%2F25149173.jpg&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F3%2F7%2F1%2F25149173.jpg&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F3%2F7%2F1%2F25149173.jpg&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F3%2F7%2F1%2F25149173.jpg&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F3%2F7%2F1%2F25149173.jpg&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F3%2F7%2F1%2F25149173.jpg&amp;w=3840&amp;q=75 3840w"
                                                                    src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F3%2F7%2F1%2F25149173.jpg&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                    _mstalt="1065142" _msthash="211" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="15561" _msthash="212">2,7</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=106566" rel="nofollow" data-ht="yp_result|click|rate_company|106566" _msttexthash="209378" _msthash="213">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="214">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/linz/ZNHQP/abschleppdienst-kusmitsch-gesmbh/"><span _msttexthash="765037" _msthash="215">Towing service Kusmitsch GesmbH</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="4198233" _msthash="216">Kusmitsch towing service in Linz and the surrounding area: there for you 24 hours a day!</h3><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="217">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_14_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="218">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="1844206" _msthash="219">Friedhofstraße 36, 4020 Linz, Linz (City), Upper Austria</font> </a><a href="/routenplaner/?direction=nach&amp;sid=ZNHQP"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:106566" data-ht="yp_result|click|go_to_route_planner|106566" _msttexthash="242567" _msthash="220">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/linz/ZNHQP/abschleppdienst-kusmitsch-gesmbh/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="221">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 732 773206">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="222">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain15" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|1787793">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_15" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="1787793" data-detail-url="/gelbe-seiten/kirchstetten/BlfH6/rhc-kfz-handel-reparatur-und-transport-gmbh/" data-clickpos="whitespace">
                                                    <meta content="16" itemprop="position" />
                                                    <meta content="/gelbe-seiten/kirchstetten/BlfH6/rhc-kfz-handel-reparatur-und-transport-gmbh/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to R.H.C. KFZ Handel Reparatur und Transport GMBH" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/kirchstetten/BlfH6/rhc-kfz-handel-reparatur-und-transport-gmbh/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/6/6/2/35974266.png" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}><img title="Logo R.H.C. KFZ Handel Reparatur und Transport GMBH" alt="Logo R.H.C. KFZ Handel Reparatur und Transport GMBH" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F6%2F2%2F35974266.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F6%2F2%2F35974266.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F6%2F2%2F35974266.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F6%2F2%2F35974266.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F6%2F2%2F35974266.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F6%2F2%2F35974266.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F6%2F2%2F35974266.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F6%2F2%2F35974266.png&amp;w=3840&amp;q=75 3840w"
                                                                    src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F6%2F6%2F2%2F35974266.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                    _mstalt="1574664" _msthash="223" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="224">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=1787793" rel="nofollow" data-ht="yp_result|click|rate_company|1787793" _msttexthash="209378" _msthash="225">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="226">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/kirchstetten/BlfH6/rhc-kfz-handel-reparatur-und-transport-gmbh/"><span _msttexthash="1336387" _msthash="227">R.H.C. KFZ Handel Reparatur und Transport GMBH</span></a></h2></div><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="228">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_15_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="229">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="3641677" _msthash="230">Betriebsgebiet Bruckfeld 2, 3062 Kirchstetten, St. Pölten (Land), Lower Austria</font> </a>
                                                            <a
                                                                href="/routenplaner/?direction=nach&amp;sid=BlfH6" class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:1787793" data-ht="yp_result|click|go_to_route_planner|1787793"
                                                                _msttexthash="242567" _msthash="231">Plan your route</a>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/kirchstetten/BlfH6/rhc-kfz-handel-reparatur-und-transport-gmbh/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="232">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 664 1013500">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="233">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain16" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|1569475">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_16" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="1569475" data-detail-url="/gelbe-seiten/hatzendorf/Xv4pf/sos-abschleppdienst-und-maschinenverleih-og/" data-clickpos="whitespace">
                                                    <meta content="17" itemprop="position" />
                                                    <meta content="/gelbe-seiten/hatzendorf/Xv4pf/sos-abschleppdienst-und-maschinenverleih-og/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to SOS-Abschleppdienst und Maschinenverleih OG" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/hatzendorf/Xv4pf/sos-abschleppdienst-und-maschinenverleih-og/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/orgimg/7/8/3/31390387.gif" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}><img title="Logo SOS-Abschleppdienst und Maschinenverleih OG" alt="Logo SOS Towing Service and Machine Rental OG" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F7%2F8%2F3%2F31390387.gif&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F7%2F8%2F3%2F31390387.gif&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F7%2F8%2F3%2F31390387.gif&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F7%2F8%2F3%2F31390387.gif&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F7%2F8%2F3%2F31390387.gif&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F7%2F8%2F3%2F31390387.gif&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F7%2F8%2F3%2F31390387.gif&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F7%2F8%2F3%2F31390387.gif&amp;w=3840&amp;q=75 3840w"
                                                                    src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F7%2F8%2F3%2F31390387.gif&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                    _mstalt="1653652" _msthash="234" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="235">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=1569475" rel="nofollow" data-ht="yp_result|click|rate_company|1569475" _msttexthash="209378" _msthash="236">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="237">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/hatzendorf/Xv4pf/sos-abschleppdienst-und-maschinenverleih-og/"><span _msttexthash="1062243" _msthash="238">SOS towing service and machine rental OG</span></a></h2></div><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="239">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_16_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="240">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="2063061" _msthash="241">Hatzendorf 244, 8361 Hatzendorf, Southeast Styria, Styria</font> </a><a href="/routenplaner/?direction=nach&amp;sid=Xv4pf"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:1569475" data-ht="yp_result|click|go_to_route_planner|1569475" _msttexthash="242567" _msthash="242">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/hatzendorf/Xv4pf/sos-abschleppdienst-und-maschinenverleih-og/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="243">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 664 5538855">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="244">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain17" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|461898">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_17" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="461898" data-detail-url="/gelbe-seiten/klagenfurt-am-wörthersee/1nZGW/abschleppdienst-shill/" data-clickpos="whitespace">
                                                    <meta content="18" itemprop="position" />
                                                    <meta content="/gelbe-seiten/klagenfurt-am-wörthersee/1nZGW/abschleppdienst-shill/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Abschleppdienst Shill" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/klagenfurt-am-w%C3%B6rthersee/1nZGW/abschleppdienst-shill/">
                                                                <meta itemprop="image" content="" /><i class="icon-werkstatt"></i></a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="245">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=461898" rel="nofollow" data-ht="yp_result|click|rate_company|461898" _msttexthash="209378" _msthash="246">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="247">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/klagenfurt-am-w%C3%B6rthersee/1nZGW/abschleppdienst-shill/"><span _msttexthash="380458" _msthash="248">Towing service Shill</span></a></h2></div>
                                                            </div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_17_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="249">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="2202720" _msthash="250">Triplatstr 12, 9020 Klagenfurt, Klagenfurt (City), Carinthia</font> </a>
                                                            <a
                                                                href="/routenplaner/?direction=nach&amp;sid=1nZGW" class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:461898" data-ht="yp_result|click|go_to_route_planner|461898" _msttexthash="242567"
                                                                _msthash="251">Plan your route</a>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/klagenfurt-am-w%C3%B6rthersee/1nZGW/abschleppdienst-shill/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="252">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 463 36324">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="253">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain18" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|1799539">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_18" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="1799539" data-detail-url="/gelbe-seiten/gerasdorf/QP9XS/luki-clean-eu/" data-clickpos="whitespace">
                                                    <meta content="19" itemprop="position" />
                                                    <meta content="/gelbe-seiten/gerasdorf/QP9XS/luki-clean-eu/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to LUKI Clean e.U." data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/gerasdorf/QP9XS/luki-clean-eu/">
                                                                <meta itemprop="image" content="" /><i class="icon-werkstatt"></i></a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="254">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=1799539" rel="nofollow" data-ht="yp_result|click|rate_company|1799539" _msttexthash="209378" _msthash="255">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="256">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/gerasdorf/QP9XS/luki-clean-eu/"><span _msttexthash="179049" _msthash="257">LUKI Clean e.U.</span></a></h2></div>
                                                            </div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_18_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="258">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="1908647" _msthash="259">Wiener Weg 12, 2201 Gerasdorf, Korneuburg, Lower Austria</font> </a><a href="/routenplaner/?direction=nach&amp;sid=QP9XS"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:1799539" data-ht="yp_result|click|go_to_route_planner|1799539" _msttexthash="242567" _msthash="260">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/gerasdorf/QP9XS/luki-clean-eu/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="261">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 664 1882608">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="262">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain19" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|585667">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_19" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="585667" data-detail-url="/gelbe-seiten/innsbruck/WHPGr/schlepp-u-berge-gesmbh/" data-clickpos="whitespace">
                                                    <meta content="20" itemprop="position" />
                                                    <meta content="/gelbe-seiten/innsbruck/WHPGr/schlepp-u-berge-gesmbh/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Schlepp u Berge GesmbH" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/innsbruck/WHPGr/schlepp-u-berge-gesmbh/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/0/0/0/35955000.png" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}><img title="Logo Schlepp u Berge GesmbH" alt="Logo Schlepp u Berge GesmbH" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F0%2F0%2F35955000.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F0%2F0%2F35955000.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F0%2F0%2F35955000.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F0%2F0%2F35955000.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F0%2F0%2F35955000.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F0%2F0%2F35955000.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F0%2F0%2F35955000.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F0%2F0%2F35955000.png&amp;w=3840&amp;q=75 3840w"
                                                                    src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F0%2F0%2F0%2F35955000.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                    _mstalt="532870" _msthash="263" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern_filled"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="15093" _msthash="264">2,3</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=585667" rel="nofollow" data-ht="yp_result|click|rate_company|585667" _msttexthash="209378" _msthash="265">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="266">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/innsbruck/WHPGr/schlepp-u-berge-gesmbh/"><span _msttexthash="389805" _msthash="267">Schlepp u Berge GesmbH</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="2994316" _msthash="268">Towing service, recovery service, accident recovery, private towing</h3><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="269">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_19_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="270">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="2201134" _msthash="271">Hans-Maier-Straße 7, 6020 Innsbruck, Innsbruck (City), Tyrol</font> </a>
                                                            <a
                                                                href="/routenplaner/?direction=nach&amp;sid=WHPGr" class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:585667" data-ht="yp_result|click|go_to_route_planner|585667" _msttexthash="242567"
                                                                _msthash="272">Plan your route</a>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/innsbruck/WHPGr/schlepp-u-berge-gesmbh/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="273">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 512 577099">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="274">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain20" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|789761">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_20" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="789761" data-detail-url="/gelbe-seiten/wien/17hvZ/abschleppdienst-wien-pauk-gmbh-autotransport/" data-clickpos="whitespace">
                                                    <meta content="21" itemprop="position" />
                                                    <meta content="/gelbe-seiten/wien/17hvZ/abschleppdienst-wien-pauk-gmbh-autotransport/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Abschleppdienst Wien PAUK GmbH &amp; Autotransport" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/wien/17hvZ/abschleppdienst-wien-pauk-gmbh-autotransport/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/8/5/0/36399058.jpg" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}><img title="Logo Abschleppdienst Wien PAUK GmbH &amp; Autotransport" alt="Logo towing service Vienna PAUK GmbH &amp; Autotransport" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F8%2F5%2F0%2F36399058.jpg&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F8%2F5%2F0%2F36399058.jpg&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F8%2F5%2F0%2F36399058.jpg&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F8%2F5%2F0%2F36399058.jpg&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F8%2F5%2F0%2F36399058.jpg&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F8%2F5%2F0%2F36399058.jpg&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F8%2F5%2F0%2F36399058.jpg&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F8%2F5%2F0%2F36399058.jpg&amp;w=3840&amp;q=75 3840w"
                                                                    src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F8%2F5%2F0%2F36399058.jpg&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                    _mstalt="1967576" _msthash="275" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k"></div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="276">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/wien/17hvZ/abschleppdienst-wien-pauk-gmbh-autotransport/"><span _msttexthash="1340872" _msthash="277">Towing Service Vienna PAUK GmbH &amp; Car Transport</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="6946186" _msthash="278">Towing service PAUK - motorcycle, car, truck, van, commercial vehicle, motorhome or construction site vehicle</h3><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="279">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_20_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="280">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="1385293" _msthash="281">Ostbahnweg 15, 1220 Vienna, Vienna (City), Vienna</font> </a><a href="/routenplaner/?direction=nach&amp;sid=17hvZ"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:789761" data-ht="yp_result|click|go_to_route_planner|789761" _msttexthash="242567" _msthash="282">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/wien/17hvZ/abschleppdienst-wien-pauk-gmbh-autotransport/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="283">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 1 93900">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="284">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain21" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|774206">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_21" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="774206" data-detail-url="/gelbe-seiten/st-pölten/X3fhd/rhc-kfz-handel-reparatur-und-transport-gmbh/" data-clickpos="whitespace">
                                                    <meta content="22" itemprop="position" />
                                                    <meta content="/gelbe-seiten/st-pölten/X3fhd/rhc-kfz-handel-reparatur-und-transport-gmbh/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to R.H.C. KFZ Handel Reparatur und Transport GMBH" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/st-p%C3%B6lten/X3fhd/rhc-kfz-handel-reparatur-und-transport-gmbh/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/4/5/6/36035654.png" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}><img title="Logo R.H.C. KFZ Handel Reparatur und Transport GMBH" alt="Logo R.H.C. KFZ Handel Reparatur und Transport GMBH" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F5%2F6%2F36035654.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F5%2F6%2F36035654.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F5%2F6%2F36035654.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F5%2F6%2F36035654.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F5%2F6%2F36035654.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F5%2F6%2F36035654.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F5%2F6%2F36035654.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F5%2F6%2F36035654.png&amp;w=3840&amp;q=75 3840w"
                                                                    src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F4%2F5%2F6%2F36035654.png&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                    _mstalt="1574664" _msthash="285" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="286">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=774206" rel="nofollow" data-ht="yp_result|click|rate_company|774206" _msttexthash="209378" _msthash="287">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="288">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/st-p%C3%B6lten/X3fhd/rhc-kfz-handel-reparatur-und-transport-gmbh/"><span _msttexthash="1336387" _msthash="289">R.H.C. KFZ Handel Reparatur und Transport GMBH</span></a></h2></div><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="290">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_21_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="291">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="2560311" _msthash="292">Zdarskystraße 5, 3100 St. Pölten, St. Pölten (City), Lower Austria</font> </a>
                                                            <a
                                                                href="/routenplaner/?direction=nach&amp;sid=X3fhd" class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:774206" data-ht="yp_result|click|go_to_route_planner|774206" _msttexthash="242567"
                                                                _msthash="293">Plan your route</a>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/st-p%C3%B6lten/X3fhd/rhc-kfz-handel-reparatur-und-transport-gmbh/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="294">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 664 1013500">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="295">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain22" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|772857">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_22" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="772857" data-detail-url="/gelbe-seiten/trieben/ps2Cs/jürgen-maurer---baumaschinenvermietung/" data-clickpos="whitespace">
                                                    <meta content="23" itemprop="position" />
                                                    <meta content="/gelbe-seiten/trieben/ps2Cs/jürgen-maurer---baumaschinenvermietung/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Jürgen Maurer - Baumaschinenvermietung" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/trieben/ps2Cs/j%C3%BCrgen-maurer---baumaschinenvermietung/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/orgimg/2/9/9/31402992.gif" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}><img title="Logo Jürgen Maurer - Baumaschinenvermietung" alt="Logo Jürgen Maurer - Construction Machinery Rental" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F2%2F9%2F9%2F31402992.gif&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F2%2F9%2F9%2F31402992.gif&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F2%2F9%2F9%2F31402992.gif&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F2%2F9%2F9%2F31402992.gif&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F2%2F9%2F9%2F31402992.gif&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F2%2F9%2F9%2F31402992.gif&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F2%2F9%2F9%2F31402992.gif&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F2%2F9%2F9%2F31402992.gif&amp;w=3840&amp;q=75 3840w"
                                                                    src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Forgimg%2F2%2F9%2F9%2F31402992.gif&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                    _mstalt="1397708" _msthash="296" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="297">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=772857" rel="nofollow" data-ht="yp_result|click|rate_company|772857" _msttexthash="209378" _msthash="298">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="299">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/trieben/ps2Cs/j%C3%BCrgen-maurer---baumaschinenvermietung/"><span _msttexthash="1444521" _msthash="300">Jürgen Maurer - Construction Machinery Rental</span></a></h2></div><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="301">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_22_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="302">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="1285921" _msthash="303">Bergmanngasse 2, 8784 Trieben, Liezen, Styria</font> </a><a href="/routenplaner/?direction=nach&amp;sid=ps2Cs"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:772857" data-ht="yp_result|click|go_to_route_planner|772857" _msttexthash="242567" _msthash="304">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/trieben/ps2Cs/j%C3%BCrgen-maurer---baumaschinenvermietung/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="305">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 664 73869969">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="306">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain23" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|1812589">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_23" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="1812589" data-detail-url="/gelbe-seiten/tribuswinkel/R7vsq/abschleppdienst-pauk-gmbh-filiale-tribuswinkel/" data-clickpos="whitespace">
                                                    <meta content="24" itemprop="position" />
                                                    <meta content="/gelbe-seiten/tribuswinkel/R7vsq/abschleppdienst-pauk-gmbh-filiale-tribuswinkel/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Abschleppdienst PAUK GmbH Filiale Tribuswinkel" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/tribuswinkel/R7vsq/abschleppdienst-pauk-gmbh-filiale-tribuswinkel/">
                                                                <meta itemprop="image" content="https://www.herold.at/FS/picture/2/4/4/30274442.jpg" />
                                                                <div style={{ display: "block", overflow: "hidden", position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", margin: "0" }}><img title="Logo Abschleppdienst PAUK GmbH Filiale Tribuswinkel" alt="Logo Towing Service PAUK GmbH Tribuswinkel Branch" sizes="100vw" srcset="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F4%2F4%2F30274442.jpg&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F4%2F4%2F30274442.jpg&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F4%2F4%2F30274442.jpg&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F4%2F4%2F30274442.jpg&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F4%2F4%2F30274442.jpg&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F4%2F4%2F30274442.jpg&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F4%2F4%2F30274442.jpg&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F4%2F4%2F30274442.jpg&amp;w=3840&amp;q=75 3840w"
                                                                    src="/_next/image/?url=https%3A%2F%2Fwww.herold.at%2FFS%2Fpicture%2F2%2F4%2F4%2F30274442.jpg&amp;w=3840&amp;q=75" decoding="async" data-nimg="fill" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "contain" }}
                                                                    _mstalt="1780038" _msthash="307" />

                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="308">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=1812589" rel="nofollow" data-ht="yp_result|click|rate_company|1812589" _msttexthash="209378" _msthash="309">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="310">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/tribuswinkel/R7vsq/abschleppdienst-pauk-gmbh-filiale-tribuswinkel/"><span _msttexthash="1339338" _msthash="311">Towing service PAUK GmbH Tribuswinkel branch</span></a></h2></div>
                                                                <h3 class="business-content_subheading__kMUMz hide_xs_max" _msttexthash="3182413" _msthash="312">Towing service 24h EMERGENCY CALL 01/93900 in Vienna and the surrounding area</h3><span class="pill_element_pill_element__1um7e pill_element_yellow__3trn5" _msttexthash="98111" _msthash="313">Open now</span></div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_23_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="314">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="2313727" _msthash="315">Südautobahnstraße 5, 2512 Tribuswinkel, Baden, Lower Austria</font> </a>
                                                            <a
                                                                href="/routenplaner/?direction=nach&amp;sid=R7vsq" class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:1812589" data-ht="yp_result|click|go_to_route_planner|1812589"
                                                                _msttexthash="242567" _msthash="316">Plan your route</a>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/tribuswinkel/R7vsq/abschleppdienst-pauk-gmbh-filiale-tribuswinkel/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="317">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 1 93900">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="318">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain24" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|491378">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_24" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="491378" data-detail-url="/gelbe-seiten/schönwies/8LgdW/abschleppdienst-haim-gmbh-autoverleih/" data-clickpos="whitespace">
                                                    <meta content="25" itemprop="position" />
                                                    <meta content="/gelbe-seiten/schönwies/8LgdW/abschleppdienst-haim-gmbh-autoverleih/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Abschleppdienst Haim GmbH &amp; Autoverleih" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/sch%C3%B6nwies/8LgdW/abschleppdienst-haim-gmbh-autoverleih/">
                                                                <meta itemprop="image" content="" /><i class="icon-werkstatt"></i></a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="319">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=491378" rel="nofollow" data-ht="yp_result|click|rate_company|491378" _msttexthash="209378" _msthash="320">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="321">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/sch%C3%B6nwies/8LgdW/abschleppdienst-haim-gmbh-autoverleih/"><span _msttexthash="851903" _msthash="322">Towing Service Haim GmbH &amp; Car Rental</span></a></h2></div>
                                                            </div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_24_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="323">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="1383096" _msthash="324">Starkenbach 72, 6491 Schönwies, Landeck, Tyrol</font> </a><a href="/routenplaner/?direction=nach&amp;sid=8LgdW"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:491378" data-ht="yp_result|click|go_to_route_planner|491378" _msttexthash="242567" _msthash="325">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/sch%C3%B6nwies/8LgdW/abschleppdienst-haim-gmbh-autoverleih/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="326">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 664 2215715">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="327">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain25" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|7500">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_25" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="7500" data-detail-url="/gelbe-seiten/baden/FM7Nl/autoabschlepp--u-bergungsdienst/" data-clickpos="whitespace">
                                                    <meta content="26" itemprop="position" />
                                                    <meta content="/gelbe-seiten/baden/FM7Nl/autoabschlepp--u-bergungsdienst/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Autoabschlepp- u Bergungsdienst" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/baden/FM7Nl/autoabschlepp--u-bergungsdienst/">
                                                                <meta itemprop="image" content="" /><i class="icon-werkstatt"></i></a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="328">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=7500" rel="nofollow" data-ht="yp_result|click|rate_company|7500" _msttexthash="209378" _msthash="329">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="330">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/baden/FM7Nl/autoabschlepp--u-bergungsdienst/"><span _msttexthash="755664" _msthash="331">Car towing and recovery service</span></a></h2></div>
                                                            </div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_25_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="332">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="1151579" _msthash="333">Grabeng 18, 2500 Baden, Baden, Lower Austria</font> </a><a href="/routenplaner/?direction=nach&amp;sid=FM7Nl"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:7500" data-ht="yp_result|click|go_to_route_planner|7500" _msttexthash="242567" _msthash="334">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/baden/FM7Nl/autoabschlepp--u-bergungsdienst/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="335">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 2252 89311">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="336">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain26" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|36590">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_26" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="36590" data-detail-url="/gelbe-seiten/lustenau/SH813/vögel-helmut-kg/" data-clickpos="whitespace">
                                                    <meta content="27" itemprop="position" />
                                                    <meta content="/gelbe-seiten/lustenau/SH813/vögel-helmut-kg/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Vögel Helmut KG" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/lustenau/SH813/v%C3%B6gel-helmut-kg/">
                                                                <meta itemprop="image" content="" /><i class="icon-werkstatt"></i></a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="337">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=36590" rel="nofollow" data-ht="yp_result|click|rate_company|36590" _msttexthash="209378" _msthash="338">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="339">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/lustenau/SH813/v%C3%B6gel-helmut-kg/"><span _msttexthash="213980" _msthash="340">Birds Helmut KG</span></a></h2></div>
                                                            </div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_26_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="341">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="1562704" _msthash="342">Glaserweg 25, 6890 Lustenau, Dornbirn, Vorarlberg</font> </a><a href="/routenplaner/?direction=nach&amp;sid=SH813"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:36590" data-ht="yp_result|click|go_to_route_planner|36590" _msttexthash="242567" _msthash="343">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/lustenau/SH813/v%C3%B6gel-helmut-kg/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="344">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 5577 83281">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="345">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain27" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|72688">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_27" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="72688" data-detail-url="/gelbe-seiten/reith-bei-seefeld/cXx28/auto-haslwanter/" data-clickpos="whitespace">
                                                    <meta content="28" itemprop="position" />
                                                    <meta content="/gelbe-seiten/reith-bei-seefeld/cXx28/auto-haslwanter/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Auto Haslwanter" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/reith-bei-seefeld/cXx28/auto-haslwanter/">
                                                                <meta itemprop="image" content="" /><i class="icon-werkstatt"></i></a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="346">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=72688" rel="nofollow" data-ht="yp_result|click|rate_company|72688" _msttexthash="209378" _msthash="347">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="348">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/reith-bei-seefeld/cXx28/auto-haslwanter/"><span _msttexthash="260026" _msthash="349">Auto Haslwanter</span></a></h2></div>
                                                            </div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_27_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="350">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="2311621" _msthash="351">Auland Gstoag 44, 6103 Reith bei Seefeld, Innsbruck (Land), Tyrol</font> </a>
                                                            <a
                                                                href="/routenplaner/?direction=nach&amp;sid=cXx28" class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:72688" data-ht="yp_result|click|go_to_route_planner|72688" _msttexthash="242567"
                                                                _msthash="352">Plan your route</a>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/reith-bei-seefeld/cXx28/auto-haslwanter/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="353">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 5212 2411">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="354">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain28" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|161598">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_28" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="161598" data-detail-url="/gelbe-seiten/wernberg/92WBM/hassler-gmbh/" data-clickpos="whitespace">
                                                    <meta content="29" itemprop="position" />
                                                    <meta content="/gelbe-seiten/wernberg/92WBM/hassler-gmbh/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Hassler GmbH" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/wernberg/92WBM/hassler-gmbh/">
                                                                <meta itemprop="image" content="" /><i class="icon-werkstatt"></i></a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="355">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=161598" rel="nofollow" data-ht="yp_result|click|rate_company|161598" _msttexthash="209378" _msthash="356">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="357">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/wernberg/92WBM/hassler-gmbh/"><span _msttexthash="165984" _msthash="358">Hassler GmbH</span></a></h2></div>
                                                            </div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_28_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="359">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="1920256" _msthash="360">Terlacher Str 34, 9241 Wernberg, Villach (Land), Carinthia</font> </a><a href="/routenplaner/?direction=nach&amp;sid=92WBM"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:161598" data-ht="yp_result|click|go_to_route_planner|161598" _msttexthash="242567" _msthash="361">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/wernberg/92WBM/hassler-gmbh/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="362">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 4252 2156">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="363">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="plain29" class="yellow-pages-search-result-items_child__3rYWL">
                                            <div class="yellow-pages-search-result-items_child_inner__Yik8k" data-ht="yp_result|view|company_impression|178002">
                                                <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_29" className={change === "list" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_list__3yBQj result-item" : change === "tile" ? "yellow-pages-search-result-item_yellow_pages_search_result_item_module__2tHtI yellow-pages-search-result-item_grid__35CZT result-item" : ""} itemprop="itemListElement" itemscope=""
                                                    itemtype="https://schema.org/ListItem" data-uid="178002" data-detail-url="/gelbe-seiten/öblarn/ZNtBH/thomas-anton-knerzl/" data-clickpos="whitespace">
                                                    <meta content="30" itemprop="position" />
                                                    <meta content="/gelbe-seiten/öblarn/ZNtBH/thomas-anton-knerzl/" itemprop="url" />
                                                    <div class="yellow-pages-search-result-item_wrapper__HmB1A">
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessImageModule" class="business-image_image_wrapper__2eLPH business-image_list__3p-cG">
                                                            <a title="Link to Thomas Anton Knerzl" data-clickpos="toplogo" class="business-image_image_wrapper_inner__uHPY_" href="/gelbe-seiten/%C3%B6blarn/ZNtBH/thomas-anton-knerzl/">
                                                                <meta itemprop="image" content="" /><i class="icon-werkstatt"></i></a>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessContentModule" class="business-content_content_wrapper__xaF5N business-content_list__2x1bc">
                                                            <div class="business-content_top__2V1q7">
                                                                <div class="business-content_top_inner__112cZ">
                                                                    <div class="business-content_rating__GcM2k">
                                                                        <div class="rating_element_main__2401D">
                                                                            <div class="rating_element_inner__3Uxrv">
                                                                                <div class="rating_element_stars__13C_C">
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                    <div class="rating_element_star__OZewC"><i class="icon-stern"></i></div>
                                                                                </div>
                                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                                    <p class="rating_element_rating_text__2tc1p"><font _mstmutation="1" _msttexthash="14560" _msthash="364">0,0</font><span class="rating_element_links__1v55t"><span class="business-content_links__2bjVL"><a href="/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=178002" rel="nofollow" data-ht="yp_result|click|rate_company|178002" _msttexthash="209378" _msthash="365">Write a review</a></span></span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="business-content_industry__rwLeS" _msttexthash="320333" _msthash="366">Breakdown service</h3>
                                                                    <h2 class="business-content_heading__2ED5C"><a itemprop="name" data-clickpos="showdetails" href="/gelbe-seiten/%C3%B6blarn/ZNtBH/thomas-anton-knerzl/"><span _msttexthash="347737" _msthash="367">Thomas Anton Knerzl</span></a></h2></div>
                                                            </div>
                                                        </div>
                                                        <div id="yellowPagesSearchResultItems_yellowPagesSearchResultItem_29_businessAddressModule" class="business-address_address_wrapper__1rpVY business-address_list__3TcTL">
                                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba details-page-section-heading_element_small__3gZgh details-page-section-heading_element_without_border__1RvBf">
                                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                                    <div class="details-page-section-heading_element_icon__2GqOs"><i class="icon-standort"></i></div>
                                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="94653" _msthash="368">Address</h2></div>
                                                            </div><a class="business-address_address_text__3oEpC"><font _mstmutation="1" _msttexthash="990509" _msthash="369">Öblarn 235, 8960 Öblarn, Liezen, Styria</font> </a><a href="/routenplaner/?direction=nach&amp;sid=ZNtBH"
                                                                class="business-address_route_planer__3pqg0" data-category="get direction_result" data-action="click" data-label="YP:178002" data-ht="yp_result|click|go_to_route_planner|178002" _msttexthash="242567" _msthash="370">Plan your route</a>
                                                            <div
                                                                class="business-address_button_wrapper__38hR4">
                                                                <a data-clickpos="showdetails" href="/gelbe-seiten/%C3%B6blarn/ZNtBH/thomas-anton-knerzl/">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7 button_border_small__2gX9i button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="177125" _msthash="371">View Details</button>
                                                                </a>
                                                            </div>
                                                            <div class="business-address_button_wrapper__38hR4">
                                                                <a data-yxt="phn" title="+43 664 1101808">
                                                                    <button class="button_btn__3kzkB button_full_width__3lgu7" style={{ height: "40px" }}>
                                                                        <div><i class="icon-telefon"></i></div>
                                                                        <div class="phoneWrapper"><span _msttexthash="293371" _msthash="372">Show phone number</span></div>
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="section-margin-bottom-lg">
                                    <div class="pagination_pagination_module__2Yjq7">
                                        <ul>
                                            <li class="pagination_arrow__21kAV disabled">
                                                <a class="pagination_page_link__wUToL pagination_arrow__21kAV pagination_previous__2ygMr" tabindex="0" role="button" aria-disabled="true" aria-label="Previous page" rel="prev" _mstaria-label="207740" _msthash="1688"></a>
                                            </li>
                                            <li class="pagination_active__3Tw6B">
                                                <a role="button" class="pagination_page_link__wUToL" tabindex="0" aria-label="Page 1 is your current page" aria-current="page" _mstaria-label="531466" _msthash="1689" _msttexthash="4459">1</a>
                                            </li>
                                            <li>
                                                <a role="button" class="pagination_page_link__wUToL" href="/gelbe-seiten/abschleppdienst/seite/2/" tabindex="0" aria-label="Page 2" _mstaria-label="49699" _msthash="1690" _msttexthash="4550">2</a>
                                            </li>
                                            <li>
                                                <a role="button" class="pagination_page_link__wUToL" href="/gelbe-seiten/abschleppdienst/seite/3/" tabindex="0" aria-label="Page 3" _mstaria-label="49842" _msthash="1691" _msttexthash="4641">3</a>
                                            </li>
                                            <li class="next">
                                                <a class="pagination_page_link__wUToL pagination_arrow__21kAV pagination_next__5OzgI" href="/gelbe-seiten/abschleppdienst/seite/2/" tabindex="0" role="button" aria-disabled="false" aria-label="Next page" rel="next" _mstaria-label="113659" _msthash="1692"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="section-margin-bottom-lg">
                                    <div>
                                        <div class="container">
                                            <div class="sponsor_sponsor_module__3_nxj">
                                                <a href="https://www.a1.net/?herold_referer=https%3A%2F%2Fwww.herold.at" rel="nofollow">
                                                    <div style={{ display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0" }}>
                                                        <div style={{ boxSizing: "border-box", display: "block", maxWidth: "100%" }}>
                                                            <img style={{ maxWidth: "100%", display: "block", margin: "0", border: "none", padding: "0" }} alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" />
                                                        </div>
                                                        <img title="https://www.a1.net/?herold_referer=https%3A%2F%2Fwww.herold.at" alt="https://www.a1.net/?herold_referer=https%3A%2F%2Fwww.herold.at" srcset="/_next/image/?url=%2Fassets%2Fsponsor.svg&amp;w=96&amp;q=75 1x, /_next/image/?url=%2Fassets%2Fsponsor.svg&amp;w=256&amp;q=75 2x" src="/_next/image/?url=%2Fassets%2Fsponsor.svg&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", width: "0", height: "0", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} _mstalt="2715687" _msthash="378" />

                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="section_section_element__2A5tN">
                                    <div class="container">
                                        <div class="card-wrapper_element_card_wrapper_element__Bj1_s card-wrapper_element_equal_padding__10BQd">
                                            <div class="company-owner-approval_company_owner_approval__1xNjH">
                                                <h5 class="company-owner-approval_heading__7U8ae" _msttexthash="363766" _msthash="379">Not on Gradimo Skupaj .at yet?</h5>
                                                <a class="company-owner-approval_button_wrapper__kucHb" title="JETZT GRATIS EINTRAGEN" href="/servlet/at.herold.gso.servlet.GSOChangeRequestServlet?context=ABOUT" rel="nofollow">
                                                    <button class="button_btn__3kzkB button_secondary__s1GX9" style={{ height: "40px" }} _msttexthash="276796" _msthash="380">REGISTER NOW FOR FREE</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="mb_25">
                                    <div class="card-wrapper_element_card_wrapper_element__Bj1_s">
                                        <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                            <div class="details-page-section-heading_element_inner__2Ef9j">
                                                <div class="details-page-section-heading_element_icon__2GqOs">
                                                    <i class="icon-firma"></i>
                                                </div>
                                                <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="291668" _msthash="381">Other Industries</h2>
                                            </div>
                                        </div>
                                        <div class="links-list_detail_page_list__S5t1Q">
                                            <ul>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Baumaschinen u -geräte" data-ht="yp_result|click|go_to_other_industry|Baumaschinen u -geräte" href="/gelbe-seiten/baumaschinen-u--ger%C3%A4te/" _msttexthash="1064609" _msthash="382">Construction machinery and equipment</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Landwirtschaftliche Maschinen u Geräte" data-ht="yp_result|click|go_to_other_industry|Landwirtschaftliche Maschinen u Geräte" href="/gelbe-seiten/landwirtschaftliche-maschinen-u-ger%C3%A4te/" _msttexthash="913380" _msthash="383">Agricultural Machinery &amp; Equipment</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Autobusse / Service u Vertrieb" data-ht="yp_result|click|go_to_other_industry|Autobusse / Service u Vertrieb" href="/gelbe-seiten/autobusse-service-u-vertrieb/" _msttexthash="380497" _msthash="384">Buses / Service &amp; Sales</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Autolackierereien" data-ht="yp_result|click|go_to_other_industry|Autolackierereien" href="/gelbe-seiten/autolackierereien/" _msttexthash="237237" _msthash="385">Car paint shops</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Kommunalfahrzeuge" data-ht="yp_result|click|go_to_other_industry|Kommunalfahrzeuge" href="/gelbe-seiten/kommunalfahrzeuge/" _msttexthash="349505" _msthash="386">Municipal vehicles</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Lastkraftwagen" data-ht="yp_result|click|go_to_other_industry|Lastkraftwagen" href="/gelbe-seiten/lastkraftwagen/" _msttexthash="63921" _msthash="387">Lorry</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Schneeräummaschinen u -geräte" data-ht="yp_result|click|go_to_other_industry|Schneeräummaschinen u -geräte" href="/gelbe-seiten/schneer%C3%A4ummaschinen-u--ger%C3%A4te/" _msttexthash="998998" _msthash="388">Snow clearing machines and equipment</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Baumaschinen u -geräte / Reparatur" data-ht="yp_result|click|go_to_other_industry|Baumaschinen u -geräte / Reparatur" href="/gelbe-seiten/baumaschinen-u--ger%C3%A4te-reparatur/" _msttexthash="1270984" _msthash="389">Construction Machinery &amp; Equipment / Repair</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Autospenglereien" data-ht="yp_result|click|go_to_other_industry|Autospenglereien" href="/gelbe-seiten/autospenglereien/" _msttexthash="262158" _msthash="390">Car tinsmithing</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Autohandel" data-ht="yp_result|click|go_to_other_industry|Autohandel" href="/gelbe-seiten/autohandel/" _msttexthash="225940" _msthash="391">Car Dealership</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Autoreparatur" data-ht="yp_result|click|go_to_other_industry|Autoreparatur" href="/gelbe-seiten/autoreparatur/" _msttexthash="129831" _msthash="392">Car Repair</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Traktoren" data-ht="yp_result|click|go_to_other_industry|Traktoren" href="/gelbe-seiten/traktoren/" _msttexthash="117819" _msthash="393">Tractors</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Abschleppdienst" data-ht="yp_result|click|go_to_other_industry|Abschleppdienst" href="/gelbe-seiten/abschleppdienst/" _msttexthash="320333" _msthash="394">Breakdown service</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Pannen- u Prüfdienste" data-ht="yp_result|click|go_to_other_industry|Pannen- u Prüfdienste" href="/gelbe-seiten/pannen--u-pr%C3%BCfdienste/" _msttexthash="771498" _msthash="395">Breakdown &amp; Inspection Services</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Mietauto" data-ht="yp_result|click|go_to_other_industry|Mietauto" href="/gelbe-seiten/mietauto/" _msttexthash="110825" _msthash="396">Hired car</a>
                                                </li>
                                                <li>
                                                    <a data-htype="industry_navigation" data-hvalue="Autovermietung" data-ht="yp_result|click|go_to_other_industry|Autovermietung" href="/gelbe-seiten/autovermietung/" _msttexthash="134264" _msthash="397">Car rental</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb_25">
                                    <div class="card-wrapper_element_card_wrapper_element__Bj1_s">
                                        <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                            <div class="details-page-section-heading_element_inner__2Ef9j">
                                                <div class="details-page-section-heading_element_icon__2GqOs">
                                                    <i class="icon-standort"></i>
                                                </div>
                                                <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="60489" _msthash="398">State</h2>
                                            </div>
                                        </div>
                                        <div class="links-list_detail_page_list__S5t1Q">
                                            <ul>
                                                <li>
                                                    <a data-ht="yp_result|click|go_to_other_state|Wien" href="/gelbe-seiten/wien/abschleppdienst/" _msttexthash="75725" _msthash="399">Vienna</a>
                                                </li>
                                                <li>
                                                    <a data-ht="yp_result|click|go_to_other_state|Niederösterreich" href="/gelbe-seiten/nieder%C3%B6sterreich/abschleppdienst/" _msttexthash="204893" _msthash="400">Lower Austria</a>
                                                </li>
                                                <li>
                                                    <a data-ht="yp_result|click|go_to_other_state|Oberösterreich" href="/gelbe-seiten/ober%C3%B6sterreich/abschleppdienst/" _msttexthash="204997" _msthash="401">Upper Austria</a>
                                                </li>
                                                <li>
                                                    <a data-ht="yp_result|click|go_to_other_state|Steiermark" href="/gelbe-seiten/steiermark/abschleppdienst/" _msttexthash="78741" _msthash="402">Styria</a>
                                                </li>
                                                <li>
                                                    <a data-ht="yp_result|click|go_to_other_state|Tirol" href="/gelbe-seiten/tirol/abschleppdienst/" _msttexthash="63440" _msthash="403">Tyrol</a>
                                                </li>
                                                <li>
                                                    <a data-ht="yp_result|click|go_to_other_state|Kärnten" href="/gelbe-seiten/k%C3%A4rnten/abschleppdienst/" _msttexthash="132600" _msthash="404">Carinthia</a>
                                                </li>
                                                <li>
                                                    <a data-ht="yp_result|click|go_to_other_state|Salzburg" href="/gelbe-seiten/salzburg/abschleppdienst/" _msttexthash="116415" _msthash="405">Salzburg</a>
                                                </li>
                                                <li>
                                                    <a data-ht="yp_result|click|go_to_other_state|Vorarlberg" href="/gelbe-seiten/vorarlberg/abschleppdienst/" _msttexthash="157066" _msthash="406">Vorarlberg</a>
                                                </li>
                                                <li>
                                                    <a data-ht="yp_result|click|go_to_other_state|Burgenland" href="/gelbe-seiten/burgenland/abschleppdienst/" _msttexthash="154661" _msthash="407">Burgenland</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb_25 hide_lg_max"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                </div>
            </div>

        </>
    )
}