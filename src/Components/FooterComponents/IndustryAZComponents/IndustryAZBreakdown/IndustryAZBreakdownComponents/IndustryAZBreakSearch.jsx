import { useState } from "react"

export const IndustryAZBreakSearch = () => {
    const [firstInput, setFirstInput] = useState("");
    const [secondInput, setSecondInput] = useState("");
    return (
        <>
            <div class="home-search_module__2hJ_k">
                <div class="home-search_background__2yCWw">
                    <div class="home-search_search_container__3B3KX">
                        <div class="home-search_search_controls_wrapper__T3bc6">
                            <div>
                                <div class="search-controls_main__1u24Z search-controls_with_open_now__tpUCl">
                                    <div class="search-controls_child__qjWU5">
                                        <div class="search-controls_autocomplete_search_wrapper__FdeuL">
                                            <div class="input-suggestions_autocomplete_input_wrapper__rjtzK" style={{ height: "60px" }}>
                                                <div style={firstInput.length > 0 ? { display: 'none' } : { display: '' }}>
                                                    <span class="input-suggestions_placeholder_text__2rt1T input-suggestions_full_text__CFyl6">
                                                        <font _mstmutation="1" _msttexthash="2974270" _msthash="436">Who or what do you want to find? (industry, service provider or company)</font>
                                                    </span>
                                                    <span class="input-suggestions_placeholder_text__2rt1T input-suggestions_short_text__3anEW" _msthidden="1">
                                                        <font _mstmutation="1" _msttexthash="173459" _msthidden="1" _msthash="437">Wen oder was?</font>
                                                    </span>
                                                </div>
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <div class="input-group-icon">
                                                                <i class="icon-suche"></i>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <input class="input_style" id="input_suggestions_input1709460492596" autocomplete="off" data-ht="yp_search_options|input|industry_search_added" value={firstInput} onChange={(e) => { setFirstInput(e.target.value) }} />
                                                    <div class="menu_list simple_list">
                                                        <div class="top_overlap"></div>
                                                        <ol>
                                                            <span class="list_head" _msttexthash="136396" _msthash="442">Corporate</span>
                                                            <li tabindex="-99" data-ht="yp_search_options|click|industry_suggestion_used|SSS Beteiligungs GmbH" _msttexthash="388453" _msthash="443">SSS Beteiligungs GmbH</li>
                                                            <li tabindex="-99" data-ht="yp_search_options|click|industry_suggestion_used|SSS Kogel GmbH" _msttexthash="179335" _msthash="444">SSS Kogel GmbH</li>
                                                            <li tabindex="-99" data-ht="yp_search_options|click|industry_suggestion_used|sssales Gesellschaft für Verkaufsförderung mbH" _msttexthash="1690403" _msthash="445">sssales Gesellschaft für Verkaufsförderung mbH</li>
                                                        </ol>
                                                    </div>
                                                    <div class="input-group-append clear-input">
                                                        <span class="input-group-text">
                                                            <div class="input-group-icon">
                                                                <i class="icon-schliessen"></i>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="search-controls_custom_tooltip__3q53P"></div>
                                        </div>
                                    </div>
                                    <div class="search-controls_child__qjWU5 search-controls_for_desktop__3ICew">
                                        <div class="">
                                            <div class="search-controls_checkbox_wrapper__12inS">
                                                <div>
                                                    <label class="switch">
                                                        <input type="checkbox" tabindex="99" class="form-new-checkbox-input" id="jetzt" data-ht="yp_search_options|change|open_now_activated" />
                                                        <span class="slider round"></span>
                                                        <span class="text-lead" _msttexthash="98111" _msthash="39">Open now</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search-controls_child__qjWU5">
                                        <div class="search-controls_autocomplete_location_wrapper__WxoUX">
                                            <div class="auto-complete-location-input_autocomplete_input_wrapper__2C-62" style={{ height: "60px" }}>
                                                <div style={secondInput.length > 0 ? { display: 'none' } : { display: '' }}>
                                                    <span class="auto-complete-location-input_placeholder_text__2yPcl auto-complete-location-input_full_text__2CDDA" _msttexthash="727454" _msthash="40">Postcode, City, District, State</span>
                                                    <span class="auto-complete-location-input_placeholder_text__2yPcl auto-complete-location-input_short_text__XwIJ2" _msttexthash="285142" _msthidden="1" _msthash="41">PLZ, Stadt, Bezirk</span>
                                                </div>
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <div class="input-group-icon">
                                                                <i class="icon-standort"></i>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <input class="input_style" id="auto_complete_location_input" autocomplete="off" value={secondInput} onChange={(e) => { setSecondInput(e.target.value) }} />
                                                    <div class="new_append"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search-controls_child__qjWU5 search-controls_for_mobile__3LZzb" _msthidden="1">
                                        <div class="" _msthidden="1">
                                            <div class="search-controls_checkbox_wrapper__12inS" _msthidden="1">
                                                <div _msthidden="1">
                                                    <label class="switch" _msthidden="1">
                                                        <input type="checkbox" tabindex="99" class="form-new-checkbox-input" id="jetzt" data-ht="yp_search_options|change|open_now_activated" />
                                                        <span class="slider round"></span>
                                                        <span class="text-lead" _msttexthash="258869" _msthidden="1" _msthash="42">Jetzt geöffnet</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search-controls_child__qjWU5">
                                        <div class="search-controls_button_wrapper__3CVd_">
                                            <button class="button_btn__3kzkB button_full_width__3lgu7 button_extra_large__1V7Uf" style={{ height: "100%" }} _msttexthash="53807" _msthash="43">SEARCH</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}