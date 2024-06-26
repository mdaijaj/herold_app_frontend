import axios from "axios";
import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext";
import Autocomplete from '@mui/joy/Autocomplete';
import TextField from '@mui/joy/TextField';


import AutoSuggest from "react-autosuggest";
import { useLocation } from "react-router";


const companies = [
    { id: 1, name: "Company1" },
    { id: 2, name: "Company2" },
    { id: 3, name: "Company3" },
    { id: 4, name: "Company4" },
    { id: 5, name: "Company5" },
    { id: 6, name: "Company6" },
    { id: 7, name: "Company7" }
];

const lowerCasedCompanies = companies.map(company => {
    return {
        id: company.id,
        name: company.name.toLowerCase()
    };
});


export const LoginRevMain = () => {
    const [show, setShow] = useState(false);
    const { baseBackendRoute, gradimoReviewPage, reviewPageContent, reviewPageList, companyList, companyIdList } = useContext(AppContext);
    const [value, setValue] = useState('');
    const [selectedId, setSelectedId] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);
    const [suggestionPosition, setSuggestionPosition] = useState({ top: 0, left: 0 });
    const [suggestionWidth, setSuggestionWidth] = useState(766);
    const [visible, setVisible] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const location = useLocation();

    const handleCompanySubmit = () => {
        console.log(selectedValue);
        console.log(selectedId);
        document.location.href = `/give-rev/${selectedId}`
    }

    // Use URLSearchParams to parse the query string
    const queryParams = new URLSearchParams(location.search);

    // Get the value of a specific query parameter
    const user = queryParams.get('user');

    const handleSubmit = async () => {
        // await axios.get(`${baseBackendRoute}/`)
    }
    const handleInputChange = (e) => {
        console.log(e);
        const inputValue = e.target?.value;
        setValue(inputValue);

        // Fetch suggestions from API or any other data source
        // For demonstration, I'm using a dummy array
        const dummySuggestions = ["Apple", "Banana", "Cherry", "Date"];
        setSuggestions(dummySuggestions.filter(suggestion =>
            suggestion?.toLowerCase().startsWith(inputValue?.toLowerCase())
        ));
    }


    function getSuggestions(value) {
        return lowerCasedCompanies.filter(company =>
            company.name.includes(value.trim().toLowerCase())
        );
    }

    const handleAutocompleteChange = (event, value) => {
        console.log("below value")
        console.log(value);
        console.log(companyIdList);
        console.log(companyIdList[value]);
        setSelectedValue(value);
        setSelectedId(companyIdList[value])
        // console.log(companyIdList[value]);
    };

    useEffect(() => {
        console.log(reviewPageList)
    }, [reviewPageContent, reviewPageList])
    return (
        <>
            <div id="grid">
                {
                    user === "guest" ?
                        <section className="subteaser review-finished">
                            <div
                                className="container "
                                style={{ backgroundColor: "#ffffff", paddingBottom: "2em", marginTop: 50 }}
                            >
                                <div className="row">
                                    <div className="col-md-24">
                                        <h2>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Thanks for your review!
                                                </font>
                                            </font>
                                        </h2>
                                        <p>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Your review has been saved and will soon be available online.
                                                </font>
                                            </font>
                                        </p>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a
                                                    href="/reviews"
                                                    target="_blank"
                                                    rel="noopener"
                                                    title="Opens new window"
                                                >
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            To the Gradimo Skupaj.si detailed entry
                                                        </font>
                                                    </font>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/reviews">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Write a new review!
                                                        </font>
                                                    </font>
                                                </a>
                                            </li>
                                        </ul>
                                        <h3>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Share your review with your friends:
                                                </font>
                                            </font>
                                        </h3>
                                        <div className="share-buttons">
                                            <a
                                                title="Share on Facebook"
                                                className="facebook"
                                                href="www.facebook.com"
                                                onclick="shareFacebook()"
                                            >
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Share on Facebook{" "}
                                                        </font>
                                                    </font>
                                                </span>
                                            </a>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <a
                                                    title="Auf Pinterest pinnen - Öffnet neues Fenster"
                                                    className="pinterest"
                                                    href="www.pinterest.com"
                                                    target="_blank"
                                                    rel="noopener nofollow"
                                                >
                                                    <span>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Share on Pinterest
                                                        </font>
                                                    </span>
                                                </a>
                                            </font>
                                            <a
                                                title="Pin to Pinterest - Opens new window"
                                                className="pinterest"
                                                href="www.pineterest.com"
                                                target="_blank"
                                                rel="noopener nofollow"
                                            >
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div id="fb-root" className=" fb_reset">
                                    <div
                                        style={{ position: "absolute", top: "-10000px", width: 0, height: 0 }}
                                    >
                                        <div />
                                    </div>
                                </div>
                            </div>
                        </section>
                        :
                        user === "user" ?
                            <section className="subteaser review-finished">
                                <div
                                    className="container "
                                    style={{ backgroundColor: "#ffffff", paddingBottom: "2em", marginTop: 50 }}
                                >
                                    <div className="row">
                                        <div className="col-md-24">
                                            <h2>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        Thanks for your review!
                                                    </font>
                                                </font>
                                            </h2>
                                            <p>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        Your review has been saved and will soon be available online.
                                                    </font>
                                                </font>
                                            </p>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a
                                                        href="/reviews"
                                                        target="_blank"
                                                        rel="noopener"
                                                        title="Opens new window"
                                                    >
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                To the Gradimo Skupaj.si detailed entry
                                                            </font>
                                                        </font>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/reviews">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Write a new review!
                                                            </font>
                                                        </font>
                                                    </a>
                                                </li>
                                            </ul>
                                            <h3>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        Share your review with your friends:
                                                    </font>
                                                </font>
                                            </h3>
                                            <div className="share-buttons">
                                                <a
                                                    title="Share on Facebook"
                                                    className="facebook"
                                                    href="www.facebook.com"
                                                    onclick="shareFacebook()"
                                                >
                                                    <span>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Share on Facebook{" "}
                                                            </font>
                                                        </font>
                                                    </span>
                                                </a>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <a
                                                        title="Auf Pinterest pinnen - Öffnet neues Fenster"
                                                        className="pinterest"
                                                        href="www.pinterest.com"
                                                        target="_blank"
                                                        rel="noopener nofollow"
                                                    >
                                                        <span>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Share on Pinterest
                                                            </font>
                                                        </span>
                                                    </a>
                                                </font>
                                                <a
                                                    title="Pin to Pinterest - Opens new window"
                                                    className="pinterest"
                                                    href="www.pinterest.com"
                                                    target="_blank"
                                                    rel="noopener nofollow"
                                                >
                                                    <span>
                                                        <font style={{ verticalAlign: "inherit" }} />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="fb-root" className=" fb_reset">
                                        <div
                                            style={{ position: "absolute", top: "-10000px", width: 0, height: 0 }}
                                        >
                                            <div />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            :
                            <></>

                }

                <div id="hero" style={{ backgroundImage: `url(${baseBackendRoute}${gradimoReviewPage?.image})` }} class="home">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h1 _msttexthash="651716" _msthash="50">{gradimoReviewPage?.heading}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="subNavBar">
                    <div class="container">
                        <div class="d-flex justify-content-between align-items-stretch text-center">
                            <div class="item d-none d-md-flex align-items-center">
                                <span class="highlight" _msttexthash="157742" _msthash="51">Navigation</span>
                            </div>
                            {
                                reviewPageList?.map((data, index) => (
                                    <a class="item" href={`/quality-review/${data.slug}`}>
                                        <img src={`${baseBackendRoute}${data.icon_image}`} alt={`to the ${data.name}`} _mstalt="502255" _msthash="52" />
                                        <span _msttexthash="212433" _msthash="53">{data.name}</span>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div id="main-content">
                    {
                        // reviewPageContent?.map((data, index) => (
                        <>
                            <div class="contentBlock gray padTop">
                                <div class="container">
                                    <section class="new row d-none d-md-flex">
                                        <div class="d-md-flex bigTeaser">
                                            <div class="col-24 col-md limitWidth">
                                                <img src={`${baseBackendRoute}${reviewPageContent[0]?.image}`} class="img-fluid" />
                                            </div>
                                            <div class="col-24 col-md floatMe">
                                                <div class="text">
                                                    <h2 _msttexthash="997802" _msthash="58">{reviewPageContent[0]?.heading}</h2>
                                                    <p _msttexthash="12415338" _msthash="59"></p>
                                                    <div dangerouslySetInnerHTML={{ __html: reviewPageContent[0]?.description }}>

                                                    </div>
                                                    <a class="btn-hbd blue d-inline-block" href={`/quality-review/${reviewPageContent[0]?.slug}`} _msttexthash="425802" _msthash="61">{reviewPageContent[0]?.buttom_name}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section class="new teaser d-flex d-md-none" _msthidden="4">
                                        <div class="d-md-flex" _msthidden="4">
                                            <div class="image float" style={{ backgroundImage: `url(${baseBackendRoute}${reviewPageContent[0]?.image})` }}></div>
                                            <div class="text" _msthidden="4">
                                                <h2 _msttexthash="1030757" _msthidden="1" _msthash="62">{reviewPageContent[0]?.heading}</h2>
                                                <p _msttexthash="12392926" _msthidden="1" _msthash="63">{reviewPageContent[0]?.title}</p>
                                                <div dangerouslySetInnerHTML={{ __html: reviewPageContent[0]?.description }}>

                                                </div>
                                                <a class="btn-hbd blue d-inline-block" href={`/quality-review/${reviewPageContent[0]?.slug}`} _msttexthash="314899" _msthidden="1" _msthash="65">{reviewPageContent[0]?.buttom_name}</a>
                                            </div>
                                        </div>
                                    </section>
                                </div >
                            </div>
                            {

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
                                                    <a class="btn-hbd blue toggleBewerten" href="javascript:void(0)" _msttexthash="97409" style={{ backgroundColor: gradimoReviewPage?.button_color }} onClick={() => { setShow(!show) }} _msthash="67">{gradimoReviewPage?.banner_button}</a>
                                                </div>
                                            </section>
                                        </div>
                                        <div class="d-block d-md-none mobile" _msthidden="1">
                                            <a class="btn-hbd blue d-inline-block toggleBewerten" href="javascript:void(0)" _msttexthash="237120" onClick={() => { setShow(!show) }} _msthidden="1" style={{ backgroundColor: gradimoReviewPage?.button_color }} _msthash="68">{gradimoReviewPage?.banner_button}</a>
                                        </div>
                                    </div>
                                </div>

                            }
                            {
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
                                                        style={{ backgroundColor: gradimoReviewPage?.button_color }}
                                                        className="btn-hbd blue reviewCompanyTracking"
                                                        data-target="#wrap2"
                                                        type="submit"
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

                            }

                        </>
                        // ))
                    }
                </div >
                {
                    reviewPageContent?.slice(1)?.map((data, index) => (
                        index % 2 === 0 ?
                            <div className="contentBlock gray padAll">
                                <div className="container">
                                    <section className="new teaser ">
                                        <div className="d-md-flex">
                                            <div
                                                className="image left"
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
                            :
                            <div className="contentBlock gray padAll">
                                <div className="container">
                                    <section className="new teaser ">
                                        <div className="d-md-flex">
                                            <div
                                                className="image right"
                                                style={{
                                                    backgroundImage:
                                                        `url(${baseBackendRoute}${data.image})`
                                                }}
                                            />
                                            <div className="text">
                                                <h2>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>{data.heading}</font>
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
                <div class="modal fade" id="loginModal" tabindex="-1" role="dialog">
                    <div id="loginModalDialog" class="modal-dialog modal-lg" role="document" style={{ marginTop: "100px", height: "540px", backgroundColor: "#F2F2F2", maxWidth: "95%" }}>
                        <div class="modal-content" style={{ height: "100%" }}>
                            <iframe id="externalLoginIFrame" src="https://login.herold.at/externalLogin.do?type=email&amp;guestSuccessReferrer=https://www.herold.at/bewertungen/showAnonymSuccess.do?type=guest" style={{ height: "100%", width: "100%" }}></iframe>
                        </div>
                    </div>
                </div>
            </div >



        </>
    )
}