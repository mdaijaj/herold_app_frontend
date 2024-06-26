import { useContext, useEffect, useState } from "react"
import AppContext from "../../AppContext";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import  './index.css'


export const HomeSearchModule = () => {
    const [change, setChange] = useState(true);
    const [firstShow, setFirstShow] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [zipChange, setZipChange] = useState(true);
    const [industrySwap, setIndustrySwap] = useState(false);
    const [phone, setPhone] = useState('');
    const [secondShow, setSecondShow] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberSpan, setPhoneNumberSpan] = useState(true);
    const [phoneSpan, setPhoneSpan] = useState(true);
    const [phoneWhere, setPhoneWhere] = useState('');
    const [phoneWhereSpan, setPhoneWhereSpan] = useState(true);
    const { navselect } = useContext(AppContext);
    const [firstInput, setFirstInput] = useState('');
    const [notShow, setNotShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [secondInput, setSecondInput] = useState('');
    const [page, setPage] = useState();
    const [filteredCityList, setFilteredCityList] = useState([]);
    const [param, setParam] = useState();
    const [firstTp, setFirstTp] = useState();
    const [companySuggestion, setCompanySuggestion] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [postCodeList, setPostCodeList] = useState([]);
    const [filteredDistrictList, setFilteredDistrictList] = useState([]);
    const [filteredZipCodeList, setFilteredZipCodeList] = useState([]);
    const [industrySuggestion, setIndustrySuggestion] = useState([]);
    const { baseBackendRoute, sugDistrictList, zipCodeList, industryAZList, setSpecificIndustryList, sugCityList, companyList, setIndustryCompaniesList, setIndustryAZList } = useContext(AppContext);
    const navigate = useNavigate();


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
            window.location.href = `/industry/search/${firstInput}/${secondInput}/${isOpen}`
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
        }

    }

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
        if (inputValue.length>=3) {
            const filteredList = await sugCityList?.filter(company =>
                company?.toLowerCase().startsWith(inputValue?.toLowerCase())
            );

            const anotherFilteredList = await sugDistrictList?.filter(company =>
                company?.toLowerCase().startsWith(inputValue?.toLowerCase())
            );

            const anotherOtherFilteredList = await zipCodeList?.filter(company =>
                company?.toLowerCase().startsWith(inputValue?.toLowerCase())
            );

             // Combine the lists
            const combinedList = [...filteredList, ...anotherFilteredList, ...anotherOtherFilteredList];

            // Create a Set to remove duplicates and then convert it back to an array
            const uniqueList = Array.from(new Set(combinedList));

            // Separate the unique list back into their respective categories if needed
            const uniqueCityList = uniqueList.filter(item => filteredList.includes(item));
            const uniqueDistrictList = uniqueList.filter(item => anotherFilteredList.includes(item));
            const uniqueZipCodeList = uniqueList.filter(item => anotherOtherFilteredList.includes(item));

            // Set the unique lists to state
            setFilteredCityList(uniqueCityList);
            setFilteredDistrictList(uniqueDistrictList);
            setFilteredZipCodeList(uniqueZipCodeList);

        }
        else {
            setFilteredCityList([]);
            setFilteredDistrictList([]);
            setFilteredZipCodeList([]);
        }

    }

    const handleSearch = () => {
        console.log("Searching for:", searchQuery);
    };

    const handleSubmit = (e) => {
        console.log(e);
    }

    useEffect(() => {
        console.log(isOpen);
        console.log("zip code below:");
        const queryParams = new URLSearchParams(window.location.search);
        const paramValue = queryParams.get('page');
        console.log('Query parameter value:', paramValue);
        setParam(paramValue)
        setPage(navselect);
        if (searchQuery === "") {
            setChange(true);
        }
        else {
            setChange(false);
        }
        if (zipCode === "") {
            setZipChange(true);
        }
        else {
            setZipChange(false);
        }
        if (phone === '') {
            setPhoneSpan(true);
        }
        else {
            setPhoneSpan(false);
        }
        if (phoneWhere === '') {
            setPhoneWhereSpan(true);
        }
        else {
            setPhoneWhereSpan(false);
        }
        if (phoneNumber === '') {
            setPhoneNumberSpan(true);
        }
        else {
            setPhoneNumberSpan(false);
        }
        if (firstInput?.length === 0) {
            setNotShow(false);
        }

    }, [searchQuery, zipCode, zipCodeList, firstInput, phone, phoneWhere, phoneNumber, navselect, page, isOpen])
    return (
        <>
            {
                <div class="home-search_module__2hJ_k">
                    <div class="home-search_background__2yCWw">
                        <div class="home-search_search_container__3B3KX">
                            <div class="home-search_search_controls_wrapper__T3bc6">
                                <div>
                                    <h2 class="home-search_heading__3AgJq" _msttexthash="2654795" _msthash="28">Finding the right company without having to search for a long time.</h2>
                                    <div class="search-controls_main__1u24Z search-controls_with_open_now__tpUCl">
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
                                        <div class="search-controls_child__qjWU5 search-controls_for_desktop__3ICew">
                                            <div class="">
                                                <div class="search-controls_checkbox_wrapper__12inS">
                                                    <div>
                                                        <label class="switch">
                                                            <input type="checkbox" checked={isOpen} onChange={(e) => { setIsOpen(e.target.checked) }} tabindex="99" class="form-new-checkbox-input" id="jetzt" data-ht="yp_search_options|change|open_now_activated" />
                                                            <span class="slider round"></span>
                                                            <span class="text-lead" _msttexthash="98111" _msthash="31">Open now</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="search-controls_child__qjWU5">
                                            <div class="search-controls_autocomplete_location_wrapper__WxoUX">
                                                <div class="auto-complete-location-input_autocomplete_input_wrapper__2C-62" style={{ height: "60px" }}>
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
                                        <div class="search-controls_child__qjWU5 search-controls_for_mobile__3LZzb" _msthidden="1">
                                            <div class="" _msthidden="1">
                                                <div class="search-controls_checkbox_wrapper__12inS" _msthidden="1">
                                                    <div _msthidden="1">
                                                        <label class="switch" _msthidden="1">
                                                            <input type="checkbox" tabindex="99" class="form-new-checkbox-input" checked={isOpen} onChange={(e) => { setIsOpen(e.target.checked) }} id="jetzt" data-ht="yp_search_options|change|open_now_activated" />
                                                            <span class="slider round"></span>
                                                            <span class="text-lead" _msttexthash="258869" _msthidden="1" _msthash="34">open now</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="search-controls_child__qjWU5">
                                            <div class="search-controls_button_wrapper__3CVd_">
                                                <button class="button_btn__3kzkB button_full_width__3lgu7 button_extra_large__1V7Uf" onClick={handleCompanySearch} style={{ height: "100%" }} _msttexthash="53807" _msthash="35">SEARCH</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}