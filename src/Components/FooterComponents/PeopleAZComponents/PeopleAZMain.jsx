import { useContext, useEffect, useState } from "react"
import AppContext from "../../../AppContext"
import { useNavigate, useParams } from "react-router";

export const PeopleAZMain = () => {
    const { peopleAZList } = useContext(AppContext);
    const { people } = useParams();
    const Alphabets = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
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

    useEffect(() => {
        console.log(peopleAZList?.results?.[people]);
    }, [peopleAZList])
    return (
        <>
            <main className="AZPagesTemplate">
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
                                    <h6 className="alphabatical-search-heading">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                Search by alphabet
                                            </font>
                                        </font>
                                    </h6>
                                    <div className="mb_10">
                                        <ul className="AZFilter_wrapper__WeA8t">
                                            {

                                                Alphabets?.map((data, index) => (
                                                    <li className={data === people ? "AZFilter_page_item__9Nt-2 AZFilter_active__1a7Xd" : "AZFilter_page_item__9Nt-2"}>
                                                        <a class="AZFilter_page_link__F6GSB" href={`/people-az/${data}/`} _msttexthash="5915" _msthash="37">{data}</a>
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
                <div className="breadcrumb_breadcrumb_block__2z7Xe breadcrumb_small__2JeYx">
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
                                <a
                                    itemProp="item"
                                    title="First names"
                                    href="/telefonbuch/personen-az/a/#"
                                >
                                    <span itemProp="name">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>First names</font>
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
                                <meta itemProp="position" content={1} />
                                <a
                                    itemProp="item"
                                    title="First name AZ"
                                    href="/telefonbuch/personen-az/a/#"
                                >
                                    <span itemProp="name">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>First name AZ</font>
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
                                <meta itemProp="position" content={2} />
                                <span itemProp="name">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>{people}</font>
                                    </font>
                                </span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="section_section_element__2A5tN section_medium__3dvm3">
                    <div className="container">
                        <h2 className="az-pages_az_heading__3qBsX">
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>All </font>
                            </font>
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>first names </font>
                            </font>
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                    starting with the letter
                                </font>
                            </font>
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>{people}</font>
                            </font>
                        </h2>
                        <ul className="az-list_element_col_list__2bXWf az-list_element_three_col_list__1FIF_">
                            {
                                peopleAZList?.results?.[people]?.map((data, index) => (
                                    <li className="az-list_element_list_item__mkJ9F">
                                        <a title="A" href={`/people-az/active/${data.id}`}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>{data.first_name} {data.last_name}</font>
                                            </font>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}