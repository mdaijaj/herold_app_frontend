import { useState } from "react"

export const RestaurantAZSearch = () => {
    const [firstInput, setFirstInput] = useState("");
    const [secondInput, setSecondInput] = useState("");
    return (
        <>
            <div className="home-search_module__2hJ_k" style={{ marginTop: '60px' }}>
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
                                                        id="input_suggestions_input1715131036238"
                                                        autoComplete="off"
                                                        data-ht="yp_search_options|input|industry_search_added"
                                                        defaultValue=""
                                                        value={firstInput}
                                                        onChange={(e) => { setFirstInput(e.target.value) }}
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
                                                        value={secondInput}
                                                        onChange={(e) => { setSecondInput(e.target.value) }}
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
        </>
    )
}