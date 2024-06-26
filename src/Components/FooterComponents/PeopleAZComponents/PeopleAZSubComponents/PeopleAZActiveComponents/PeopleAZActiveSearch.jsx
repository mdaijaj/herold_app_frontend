import { useContext, useState } from "react";
import AppContext from "../../../../../AppContext";
import { useNavigate } from "react-router";

export const PeopleAZActiveSearch = () => {
    const { baseBackendRoute, sugDistrictList, setSpecificIndustryList, sugCityList, companyList, setIndustryCompaniesList, setIndustryAZList } = useContext(AppContext);
    const [secondInput, setSecondInput] = useState('');
    const [firstInput, setFirstInput] = useState('');
    const [firstShow, setFirstShow] = useState(false);
    const [secondShow, setSecondShow] = useState(false);
    const [filteredCityList, setFilteredCityList] = useState([]);
    const navigate = useNavigate();
    const [filteredDistrictList, setFilteredDistrictList] = useState([]);
    const handleSecondChange = async (e) => {
        setSecondInput(e.target.value);
        const inputValue = e.target.value;
        if (firstShow) {
            setFirstShow(false)
            setSecondShow(true);
        }
        else {
            setSecondShow(true)
        }
        if (inputValue !== '') {
            const filteredList = await sugCityList?.filter(company =>
                company?.toLowerCase().startsWith(inputValue?.toLowerCase())
            );

            const anotherFilteredList = await sugDistrictList?.filter(company =>
                company?.toLowerCase().startsWith(inputValue?.toLowerCase())
            );
            setFilteredCityList(filteredList);
            setFilteredDistrictList(anotherFilteredList);

        }
        else {
        }

    }

    return (
        <>
            <div className="home-search_module__2hJ_k">
                <div className="home-search_background__2yCWw">
                    <div className="home-search_search_container__3B3KX">
                        <div className="home-search_search_controls_wrapper__T3bc6">
                            <div>
                                <div className="search-controls_main__1u24Z">
                                    <div className="search-controls_child__qjWU5">
                                        <div className="search-controls_autocomplete_search_wrapper__FdeuL">
                                            <div
                                                className="input-suggestions_autocomplete_input_wrapper__rjtzK"
                                                style={{ height: 60 }}
                                            >
                                                {
                                                    firstInput.length === 0 ?
                                                        <span className="input-suggestions_placeholder_text__2rt1T input-suggestions_full_text__CFyl6">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>person, phone number</font>
                                                            </font>
                                                        </span>
                                                        :
                                                        <></>
                                                }

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
                                                        value={firstInput}
                                                        onChange={(e) => { setFirstInput(e.target.value) }}
                                                        id="input_suggestions_input1714074179610"
                                                        autoComplete="off"
                                                        data-ht="wp_search_options|input|name_search_added"
                                                        defaultValue="Abasin"
                                                    />
                                                    {
                                                        <div onClick={() => { setFirstInput('') }} className="input-group-append clear-input show">
                                                            <span className="input-group-text">
                                                                <div className="input-group-icon">
                                                                    <i className="icon-schliessen" />
                                                                </div>
                                                            </span>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="search-controls_custom_tooltip__3q53P" />
                                        </div>
                                    </div>
                                    <div
                                        className="search-controls_child__qjWU5 search-controls_for_mobile__3LZzb"
                                        style={{ display: "block" }}
                                    />
                                    <div className="search-controls_child__qjWU5" >
                                        <div className="search-controls_autocomplete_location_wrapper__WxoUX" >
                                            <div className="auto-complete-location-input_autocomplete_input_wrapper__2C-62" style={{ height: '60px' }}>
                                                <div style={secondInput.length > 0 ? { display: 'none' } : {}}>
                                                    <span class="auto-complete-location-input_placeholder_text__2yPcl auto-complete-location-input_full_text__2CDDA" _msttexthash="727454" _msthash="153">Postcode, City, District, State</span>
                                                    <span class="auto-complete-location-input_placeholder_text__2yPcl auto-complete-location-input_short_text__XwIJ2" _msttexthash="285142" _msthidden="1" _msthash="154">Zip code,city,district</span>
                                                </div>
                                                <div className="input-group " >
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <div className="input-group-icon"><i className="icon-standort"></i></div>
                                                        </span>
                                                    </div>
                                                    <input class="input_style" onFocus={() => { setSecondShow(true) }} id="auto_complete_location_input" autocomplete="off" value={secondInput} onChange={(e) => { handleSecondChange(e) }} />
                                                    <div onBlur={() => { setSecondShow(false) }} className={secondShow ? "menu_list simple_list active" : "menu_list simple_list"}>
                                                        <div className="top_overlap" />
                                                        <ol>
                                                            <ol>
                                                                <span className="list_head">
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>district</font>
                                                                    </font>
                                                                </span>
                                                                {
                                                                    filteredDistrictList?.map((data, index) => (
                                                                        <li onClick={(e) => { setSecondInput(e.target.innerText); setSecondShow(false) }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    {data}
                                                                                </font>
                                                                            </font>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ol>
                                                            <ol>
                                                                <span className="list_head">
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>City</font>
                                                                    </font>
                                                                </span>
                                                                {
                                                                    filteredCityList?.map((data, index) => (
                                                                        <li onClick={(e) => { setSecondInput(e.target.innerText); setSecondShow(false) }}>

                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    {data}
                                                                                </font>
                                                                            </font>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ol>
                                                        </ol>
                                                    </div>
                                                    <div class="new_append">
                                                        <div class="close_icon" onClick={() => { setSecondInput(''); setSecondShow(false) }}><i class="icon-schliessen"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="search-controls_child__qjWU5">
                                        <div className="search-controls_button_wrapper__3CVd_">
                                            <a href={`/people/search/${firstInput}/${secondInput?.split(',')[0]}/`}>
                                                <button
                                                    className="button_btn__3kzkB button_full_width__3lgu7 button_extra_large__1V7Uf"
                                                    style={{ height: "100%" }}
                                                >
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>SEEK</font>
                                                    </font>
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

        </>
    )
}