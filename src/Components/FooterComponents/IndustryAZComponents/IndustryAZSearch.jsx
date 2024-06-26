import { useContext, useState } from "react"
import AppContext from "../../../AppContext";
import { useNavigate } from "react-router";

export const IndustryAZSearch = () => {
    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');
    const [notShow, setNotShow] = useState(false);
    const [firstShow, setFirstShow] = useState(false);
    const [secondShow, setSecondShow] = useState(false);
    const [companySuggestion, setCompanySuggestion] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [postCodeList, setPostCodeList] = useState([]);
    const [filteredDistrictList, setFilteredDistrictList] = useState([]);
    const [filteredCityList, setFilteredCityList] = useState([]);
    const [industrySwap, setIndustrySwap] = useState(false);
    const [industrySuggestion, setIndustrySuggestion] = useState();
    const [filteredZipCodeList, setFilteredZipCodeList] = useState([]);
    const { baseBackendRoute, zipCodeList, sugDistrictList, setSpecificIndustryList, industryAZList, sugCityList, companyList, setIndustryCompaniesList, setIndustryAZList } = useContext(AppContext);

    const handleCompanySearch = async () => {
        if (secondInput.length !== 0 && firstInput.length === 0) {
            window.location.href = `/industry/city/search/${secondInput}`
        }
        else if (firstInput.length !== 0 && secondInput.length === 0 && industrySwap === false) {
            window.location.href = `/industry/company/search/${firstInput}`
        }

        else if (firstInput.length !== 0 && secondInput.length === 0 && industrySwap === true) {
            window.location.href = `/industry/list/${firstInput}`
        }
        else {
            window.location.href = `/industry/search/${firstInput}/${secondInput}`
        }
    }

    const handleFirstChange = async (e) => {
        setFirstInput(e.target.value);
        const inputValue = e.target.value;
        if (secondShow) {
            setSecondShow(false)
            setFirstShow(true);
        }
        else {
            setFirstShow(true)
        }
        if (inputValue.length>=3) {
            const filteredList = await companyList.filter(company =>
                company.toLowerCase().startsWith(inputValue.toLowerCase())
            );
            setCompanySuggestion(filteredList);

            const anotherFilteredList = await Object.values(industryAZList).flat().filter(company =>
                company.toLowerCase().startsWith(inputValue.toLowerCase())
            );
            console.log(anotherFilteredList);

            setIndustrySuggestion(anotherFilteredList);
        }
        else {
            setCompanySuggestion([]);
            setIndustrySuggestion([]);
        }

    }

    const handleSecondChange = async (e) => {
        setSecondInput(e.target.value);
        const inputValue = e.target.value;
    
        if (firstShow) {
            setFirstShow(false);
            setSecondShow(true);
        } else {
            setSecondShow(true);
        }
    
        if (inputValue.length>=3) {
            const filteredCityList = sugCityList?.filter(company =>
                company?.toLowerCase().startsWith(inputValue?.toLowerCase())
            );
    
            const filteredDistrictList = sugDistrictList?.filter(company =>
                company?.toLowerCase().startsWith(inputValue?.toLowerCase())
            );
    
            const filteredZipCodeList = zipCodeList?.filter(company =>
                company?.toLowerCase().startsWith(inputValue?.toLowerCase())
            );
    
            // Use a Set to remove duplicates from each filtered list
            const uniqueCityList = Array.from(new Set(filteredCityList));
            const uniqueDistrictList = Array.from(new Set(filteredDistrictList));
            const uniqueZipCodeList = Array.from(new Set(filteredZipCodeList));
    
            // Set the unique lists to their respective states
            setFilteredCityList(uniqueCityList);
            setFilteredDistrictList(uniqueDistrictList);
            setFilteredZipCodeList(uniqueZipCodeList);
        } else {
            setFilteredCityList([]);
            setFilteredDistrictList([]);
            setFilteredZipCodeList([]);
        }
    }
    
    

    const navigate = useNavigate();
    const Alphabets = [
        "A", "B", "C", "Č", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "Š", "T", "U", "V", "Z", "Ž"
    ];
    return (
        <>
            <div class="home-search_module__2hJ_k">
                <div class="home-search_background__2yCWw">
                    <div class="home-search_search_container__3B3KX">
                        <div class="home-search_search_controls_wrapper__T3bc6">
                            <div>
                                <div class="search-controls_main__1u24Z">
                                    <div class="search-controls_child__qjWU5">
                                        <div class="search-controls_autocomplete_search_wrapper__FdeuL">
                                            <div class="input-suggestions_autocomplete_input_wrapper__rjtzK" style={{ height: "60px" }}>
                                                {/* <div style={firstInput?.length > 0 || notShow ? { display: 'none' } : {}}>
                                                        <span class="input-suggestions_placeholder_text__2rt1T input-suggestions_full_text__CFyl6">
                                                            <font _mstmutation="1" _msttexthash="2974270" _msthash="155">Who or what do you want to find? (industry, service provider or company)</font>
                                                        </span>
                                                        <span class="input-suggestions_placeholder_text__2rt1T input-suggestions_short_text__3anEW" _msthidden="1">
                                                            <font _mstmutation="1" _msttexthash="173459" _msthidden="1" _msthash="156">who or what?</font>
                                                        </span>
                                                    </div> */}
                                                <div class="input-group ">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <div class="input-group-icon">
                                                                <img src="/gradimo_icons/search.png" alt="search--v2" />                                                                </div>
                                                        </span>
                                                    </div>
                                                    <input placeholder="Search for Company or Industry" class="input_style" id="input_suggestions_input1709734876059" autocomplete="off" data-ht="yp_search_options|input|industry_search_added" value={firstInput} onChange={(e) => { handleFirstChange(e) }} />
                                                    <div onBlur={() => { setFirstShow(false); }} className={firstShow ? "menu_list simple_list active" : "menu_list simple_list"}>
                                                        <div className="top_overlap" />
                                                        <ol>
                                                            <span className="list_head">
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>Industries</font>
                                                                </font>
                                                            </span>


                                                            {

                                                                industrySuggestion?.map((item, index) => (
                                                                    <li onClick={(e) => { setFirstInput(e.target.innerText); setFirstShow(false); setIndustrySwap(true) }}
                                                                        tabIndex={-99}
                                                                        data-ht="yp_search_options|click|industry_suggestion_used|SSAB Hardox Stahl GmbH"
                                                                    >
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>{item}</font>
                                                                        </font>
                                                                    </li>
                                                                ))
                                                            }

                                                            <span className="list_head">
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>Companies</font>
                                                                </font>
                                                            </span>
                                                            {

                                                                companySuggestion?.map((data, index) => (
                                                                    <li onClick={(e) => { setFirstInput(e.target.innerText); setFirstShow(false); setIndustrySwap(false) }}
                                                                        tabIndex={-99}
                                                                        data-ht="yp_search_options|click|industry_suggestion_used|SSAB Hardox Stahl GmbH"
                                                                    >
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>{data}</font>
                                                                        </font>
                                                                    </li>
                                                                ))
                                                            }

                                                        </ol>
                                                    </div>

                                                    <div onClick={() => { setFirstInput(''); setFirstShow(false); }} class={firstInput?.length > 0 ? "input-group-append clear-input show" : "input-group-append clear-input"}>
                                                        <span class="input-group-text">
                                                            <div class="input-group-icon">
                                                                <img src="/gradimo_icons/close.png" alt="close" />
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="search-controls_custom_tooltip__3q53P"></div>
                                        </div>
                                    </div>
                                    <div class="search-controls_child__qjWU5 search-controls_for_mobile__3LZzb" style={{ display: "block" }}></div>
                                    <div class="search-controls_child__qjWU5">
                                        <div class="search-controls_autocomplete_location_wrapper__WxoUX">
                                            <div class="auto-complete-location-input_autocomplete_input_wrapper__2C-62" style={{ height: "60px" }}>
                                                {/* <div style={secondInput.length > 0 ? { display: 'none' } : {}}>
                                                        <span class="auto-complete-location-input_placeholder_text__2yPcl auto-complete-location-input_full_text__2CDDA" _msttexthash="727454" _msthash="153">Postcode, City, District, State</span>
                                                        <span class="auto-complete-location-input_placeholder_text__2yPcl auto-complete-location-input_short_text__XwIJ2" _msttexthash="285142" _msthidden="1" _msthash="154">Zip code,city,district</span>
                                                    </div> */}
                                                <div class="input-group active">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <div class="input-group-icon">
                                                                <img src="/gradimo_icons/locationpin.png" alt="location--v2" />                                                                </div>
                                                        </span>
                                                    </div>
                                                    <input placeholder="City , District , Zip code" class="input_style" onFocus={() => { setSecondShow(true) }} id="auto_complete_location_input" autocomplete="off" value={secondInput} onChange={(e) => { handleSecondChange(e) }} />
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
                                                            <ol>
                                                                <span className="list_head">
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>zip code</font>
                                                                    </font>
                                                                </span>
                                                                { console.log("filteredZipCodeList", filteredZipCodeList)}
                                                                {
                                                                    filteredZipCodeList?.map((data, index) => (
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
                                                    <div onClick={() => { setSecondInput(''); setSecondShow(false) }} class={secondInput?.length > 0 ? "input-group-append clear-input show" : "input-group-append clear-input"}>

                                                        <span class="input-group-text">
                                                            <div class="input-group-icon">
                                                                <img src="/gradimo_icons/close.png" alt="close" />
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="search-controls_child__qjWU5">
                                        <div class="search-controls_button_wrapper__3CVd_">
                                            <button class="button_btn__3kzkB button_full_width__3lgu7 button_extra_large__1V7Uf" onClick={handleCompanySearch} style={{ height: "100%" }} _msttexthash="53807" _msthash="192">SEARCH</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb_10">
                                    <ul class="AZFilter_wrapper__WeA8t">
                                    {console.log("Alphabets", Alphabets)}
                                        {
                                            Alphabets?.map((data, index) => (
                                                
                                                <li class="AZFilter_page_item__9Nt-2">
                                                    <a class="AZFilter_page_link__F6GSB" href={`/industry-az/${data}`} _msttexthash="5915" _msthash="193">{data}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}