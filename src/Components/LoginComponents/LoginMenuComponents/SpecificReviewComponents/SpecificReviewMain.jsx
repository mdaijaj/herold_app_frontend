import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"
import Autocomplete from "@mui/joy/Autocomplete";
import TextField from '@mui/joy/TextField';
import { Helmet } from "react-helmet";
export const SpecificReviewMain = () => {

    const { baseBackendRoute, reviewPageContent, gradimoReviewPage, reviewPageList, companyList, companyIdList, specificReviewPage, setSpecificReviewPage } = useContext(AppContext);
    const [show, setShow] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);
    const handleCompanySubmit = () => {
        console.log(selectedValue);
        console.log(selectedId);
        document.location.href = `/give-rev/${selectedId}`
    }

    const handleAutocompleteChange = (event, value) => {
        setSelectedValue(value);
        setSelectedId(companyIdList[value])
        // console.log(companyIdList[value]);
    };



    useEffect(() => {
        console.log(specificReviewPage);

    }, [specificReviewPage])
    return (
        <>
            {
                <div id="grid">
                    <div id="hero" className="quality" style={{ backgroundImage: `url(${baseBackendRoute}${gradimoReviewPage?.image})`, backgroundPosition: 'unset' }} >
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h1>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>{gradimoReviewPage?.heading}</font>
                                        </font>
                                        <br />

                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="subNavBar">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-stretch text-center">
                                <div className="item d-none d-md-flex align-items-center">
                                    <span className="highlight">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>navigation</font>
                                        </font>
                                    </span>
                                </div>
                                <a className="item" href="/reviews">
                                    <img
                                        src="https://www.herold.at/bewertungen/img/quickNav/overview.svg"
                                        alt="to overview"
                                    />
                                    <span>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>Overview</font>
                                        </font>
                                    </span>
                                </a>


                                {
                                    specificReviewPage?.reviews?.map((data, index) => (
                                        <>

                                            <Helmet>

                                                <meta property="og:title" content={data?.meta_title} />
                                                <meta property="og:description" content={data?.meta_description} />
                                                <meta property="og:type" content={data?.meta_tags} />


                                            </Helmet>
                                            <a
                                                className="item"
                                                href={`/quality-review/${data.slug}`}
                                            >
                                                <img
                                                    src={`${baseBackendRoute}${data.icon_image}`}
                                                    alt={`to the ${data.name}`}
                                                />
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>{data.name}</font>
                                                    </font>
                                                </span>
                                            </a>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div id="main-content">
                        {
                            specificReviewPage?.reviews_detail?.map((data, index) => (
                                <>
                                    <div className="contentBlock gray padAll">
                                        <div className="container">
                                            <div className="new row">
                                                <div className="col-24 blockTeaser">
                                                    <h2>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                {data.title}
                                                            </font>
                                                        </font>
                                                    </h2>
                                                    <div dangerouslySetInnerHTML={{ __html: data.description }}>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        data.image ?
                                            <div className="container">
                                                <div className="new row">
                                                    <div className="col-24">
                                                        <img
                                                            className="d-none d-md-block img-fluid"
                                                            src={`${baseBackendRoute}${data.image}`}
                                                            alt="Infographic assessment process"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <></>
                                    }

                                </>
                            ))
                        }

                        <div class="contentBlock gray padTop">
                            <div class="reviewBar">
                                <div class="container" style={{ backgroundColor: gradimoReviewPage?.color }}>
                                    <section class="new d-md-flex">
                                        <div>
                                            <font _mstmutation="1" _msttexthash="1938989" _msthash="66">
                                                <span class="noBreak" _mstmutation="1" _istranslated="1" dangerouslySetInnerHTML={{ __html: gradimoReviewPage?.banner_data }}></span>
                                            </font>
                                        </div>
                                        <div class="d-none d-md-block">
                                            <a class="btn-hbd blue toggleBewerten" href="javascript:void(0)" _msttexthash="97409" onClick={() => { setShow(!show) }} style={{ backgroundColor: gradimoReviewPage?.button_color }} _msthash="67">{gradimoReviewPage?.banner_button}</a>
                                        </div>
                                    </section>
                                </div>
                                <div class="d-block d-md-none mobile" _msthidden="1">
                                    <a class="btn-hbd blue d-inline-block toggleBewerten" href="javascript:void(0)" _msttexthash="237120" onClick={() => { setShow(!show) }} _msthidden="1" style={{ backgroundColor: gradimoReviewPage?.button_color }} _msthash="68">{gradimoReviewPage?.banner_button}</a>
                                </div>
                            </div>
                        </div>
                        <div className="contentBlock gray padTop">
                            <div className={show ? "rateCmp" : "hidden rateCmp"} id="rate_company">
                                <section>
                                    <div className="container">
                                        <ul className="row list-unstyled reviewStepRow d-none d-md-flex">
                                            <li className="col" id="navStep1">
                                                <h3>
                                                </h3>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>{gradimoReviewPage?.search_heading}</font>
                                                </font>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="container">
                                        <div className="row wrap" id="wrap1">
                                            <div className="d-block d-md-none">
                                                <h3>
                                                    <span className="regular">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>{gradimoReviewPage?.search_heading}</font>
                                                        </font>
                                                    </span>
                                                </h3>
                                            </div>
                                            <div id="changeCompanyForm" style={{ display: 'flex', width: '100%' }}>
                                                <label htmlFor="companiesSearch" className="d-none d-md-inline-block">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            {gradimoReviewPage?.search_field_name}
                                                        </font>
                                                    </font>
                                                </label>
                                                <input type="hidden" id="companySID" name="sid" />
                                                <input type="hidden" name="provider" defaultValue="HEROLD" />
                                                {/* <AutoSuggest
                                                    suggestions={suggestions}
                                                    onSuggestionsClearRequested={() => setSuggestions([])}
                                                    onSuggestionsFetchRequested={({ value }) => {
                                                        console.log(value);
                                                        setValue(value);
                                                        setSuggestions(getSuggestions(value));
                                                    }}
                                                    onSuggestionSelected={(_, { suggestionValue }) =>
                                                        console.log("Selected: " + suggestionValue)
                                                    }
                                                    getSuggestionValue={suggestion => suggestion.name}
                                                    renderSuggestion={suggestion =>


                                                        <div className="infoAutosuggest">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    {suggestion.name}
                                                                </font>
                                                            </font>
                                                        </div>
                                                    }
                                                    inputProps={{
                                                        placeholder: "Type 'c'",
                                                        value: value,
                                                        onChange: (_, { newValue, method }) => {
                                                            setValue(newValue);
                                                        }
                                                    }}
                                                    highlightFirstSuggestion={true}
                                                /> */}

                                                <Autocomplete sx={{
                                                    fontSize: '1.5rem', margin: '10px 0', paddingLeft: '1rem', height: '44px', border: '1px solid #bec1c2',
                                                    '::-webkit-input-placeholder': {
                                                        fontSize: '1rem'
                                                    },
                                                    ':-moz-placeholder': {
                                                        fontSize: '1rem'
                                                    },
                                                    ":-ms-input-placeholder": {
                                                        fontSize: '1rem'
                                                    },
                                                    '@media(max-width: 991px)': {
                                                        width: '100%',
                                                    },
                                                    '@media(min-width: 768px)': {
                                                        flexGrow: 10,
                                                        margin: '0 30px',
                                                        '::-webkit-input-placeholder': {
                                                            color: 'transparent'
                                                        },
                                                        ":-moz-placeholder": {
                                                            color: 'transparent'
                                                        },
                                                        ":-ms-input-placeholder": {
                                                            color: 'transparent'
                                                        }
                                                    },
                                                }}
                                                    options={companyList}
                                                    value={selectedValue}
                                                    onChange={handleAutocompleteChange}

                                                    renderInput={(params) => <TextField {...params} label="Company" />}

                                                    disableClearable={true} freeSolo={true} />

                                                <button onClick={handleCompanySubmit}
                                                    className="btn-hbd blue reviewCompanyTracking"
                                                    data-target="#wrap2"
                                                    type="submit"
                                                    style={{ backgroundColor: gradimoReviewPage?.button_color }}
                                                >
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>{gradimoReviewPage?.search_button}</font>
                                                    </font>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="hidden wrap" id="wrap2"></div>
                                    <div className="hidden wrap" id="wrap3" />
                                </section>
                            </div>


                        </div>
                        {/* choose company and write review */}
                        <div className="hidden rateCmp" id="rate_company">
                            <section>
                                <div className="container">
                                    <ul className="row list-unstyled reviewStepRow d-none d-md-flex">
                                        <li className="col" id="navStep1">
                                            <h3>Schritt 1:</h3>Firma suchen
                                        </li>
                                        <li className="col disabled" id="navStep2">
                                            <h3>Schritt 2:</h3>Bewertung abgeben
                                        </li>
                                    </ul>
                                </div>
                                <div className="container">
                                    <div className="row wrap" id="wrap1">
                                        <form id="changeCompanyForm" action="newReview.json" method="get">
                                            <div className="d-block d-md-none">
                                                <h3>
                                                    Schritt 1: <span className="regular">Firma suchen</span>
                                                </h3>
                                            </div>
                                            <label
                                                htmlFor="companiesSearch"
                                                className="d-none d-md-inline-block"
                                            >
                                                Firmenname/PLZ/Ort:
                                            </label>
                                            <input type="hidden" id="companySID" name="sid" />
                                            <input type="hidden" name="provider" defaultValue="HEROLD" />
                                            <input
                                                type="text"
                                                id="companiesSearch"
                                                maxLength={100}
                                                defaultValue=""
                                                placeholder="Firmenname/PLZ/Ort"
                                                className="ui-autocomplete-input"
                                                autoComplete="off"
                                            />
                                            <button
                                                className="btn-hbd blue reviewCompanyTracking"
                                                data-target="#wrap2"
                                                type="submit"
                                            >
                                                Bewerten
                                            </button>
                                        </form>
                                    </div>
                                    {/* STEP 2 - write review */}
                                    <div className="hidden wrap" id="wrap2"></div>
                                    {/* STEP 3 - success */}
                                    <div className="hidden wrap" id="wrap3" />
                                </div>
                            </section>
                        </div>

                        {
                            specificReviewPage?.reviews.map((data, index) => (
                                <div className="contentBlock gray padAll">
                                    <div className="container">
                                        <section className="new teaser ">
                                            <div className="d-md-flex">
                                                <div
                                                    className={index % 2 === 0 ? "image right" : "image left"}
                                                    style={{
                                                        backgroundImage:
                                                            `url(${baseBackendRoute}${data.image})`
                                                    }}
                                                />
                                                <div className="text">
                                                    <h2>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                {data.heading}
                                                            </font>
                                                        </font>
                                                    </h2>
                                                    <div dangerouslySetInnerHTML={{ __html: data.description }}>

                                                    </div>
                                                    <a
                                                        className="btn-hbd blue d-inline-block"
                                                        href={`/quality-review/${data.slug}`}
                                                    >
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                {data.buttom_name}
                                                            </font>
                                                        </font>
                                                    </a>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                    <div className="modal fade" id="loginModal" tabIndex={-1} role="dialog">
                        <div
                            id="loginModalDialog"
                            className="modal-dialog modal-lg"
                            role="document"
                            style={{
                                marginTop: 100,
                                height: 540,
                                backgroundColor: "#F2F2F2",
                                maxWidth: "95%"
                            }}
                        >
                            <div className="modal-content" style={{ height: "100%" }}>
                                <iframe
                                    id="externalLoginIFrame"
                                    src="https://login.herold.at/externalLogin.do?type=email&guestSuccessReferrer=https://www.herold.at/bewertungen/showAnonymSuccess.do?type=guest"
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}