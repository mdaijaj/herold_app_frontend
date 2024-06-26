import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import AppContext from "../../../../AppContext";
import { useParams } from "react-router";
import { useRef } from "react";

export const LoginGiveReviewMain = () => {
    const { externalShow, baseFrontendRoute, cookies, setReviewReqBody, reviewReqBody, specificCompanyInfo } = useContext(AppContext);
    let { tempData } = useContext(AppContext)
    const [vis_1, setVis_1] = useState(false);
    const [vis_2, setVis_2] = useState(false);
    const [vis_3, setVis_3] = useState(false);
    const [vis_4, setVis_4] = useState(false);
    const [vis_5, setVis_5] = useState(false);
    const [total, setTotal] = useState(0.0);
    const [count, setCount] = useState(0);
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [third, setThird] = useState(0);
    const [fourth, setFourth] = useState(0);
    const [fifth, setFifth] = useState(0);
    const [vis_1_check, setVis_1_Check] = useState(false);
    const [vis_2_check, setVis_2_Check] = useState(false);
    const [vis_3_check, setVis_3_Check] = useState(false);
    const [vis_4_check, setVis_4_Check] = useState(false);
    const [vis_5_check, setVis_5_Check] = useState(false);
    const [value_1, setValue_1] = useState('');
    const [value_2, setValue_2] = useState('');
    const [value_3, setValue_3] = useState('');
    const [value_4, setValue_4] = useState('');

    const [value_5, setValue_5] = useState('');
    const [recommendValue, setRecommendValue] = useState('');
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [visible, setVisible] = useState(false);
    const [recommend, setRecommend] = useState('');
    const [agree, setAgree] = useState(false);
    const { review } = useParams();
    const [errors, setErrors] = useState({});
    
    const iframeRef = useRef(null);


 // Validate the form fields
 const validate = () => {
    let formErrors = {};
    if (!title) formErrors.title = 'Title is required';
    if (!rating) formErrors.rating = 'Rating is required';
    if (!agree) formErrors.agree = 'You must agree to the guidelines';
    return formErrors;
  };

  // Send data to iframe
  const sendDataToIframe = (da) => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // No errors, submit the form
      iframeRef.current.contentWindow.postMessage(da, '*');
    } else {
      // Set errors to state to display them
      setErrors(validationErrors);
    }
  };

    const handleRecommend = (b) => {
        if (b === "true") {
            console.log(typeof (b));
            setRecommendValue('Yes')
        }
        else {
            console.log(typeof (b));
            setRecommendValue('No')
        }
    }

    const validateForm = () => {
        const newErrors = {};

        if (title.length < 5) {
            newErrors.title = "Title must be at least 5 characters.";
        }
        if (rating.length < 10) {
            newErrors.rating = "Rating must be at least 10 characters.";
        }
        if (!agree) {
            newErrors.agree = "You must agree to the review guidelines.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = () => {
        let validformData=validateForm()
        if (validformData) {
            // Proceed with submission
            sendDataToIframe({ title, rating, agree });
            setVisible(true);
        } else {
            setVisible(false);
        }
    };


    let data = {
        'company': specificCompanyInfo?.id,
        'quality': first,
        'quality_remark': value_1,
        'price': second,
        'price_remark': value_2,
        'care': third,
        'care_remark': value_3,
        'adherence_to_deadlines': fourth,
        'adherence_to_deadlies_remark': value_4,
        'friendliness': fifth,
        'friendliness_remark': value_5,
        'in_total': (parseFloat(((first + second + third + fourth + fifth) / count).toFixed(2))),
        'review_title': title,
        'feedback': rating,
        "is_recommend": Boolean(recommend),
        "is_agree_review_guidelines": agree
    }

    // const handleReview = async () => {
    //     const tp = await data;
    //     if (tp) {
    //         console.log(tp);
    //         setReviewReqBody(tp);
    //     }

    //     setVisible(true)
    // }

    // const handleGuestAddReview = async () => {

    //     setVisible(true)
    // }

    const handleCount = (c) => {
        if (vis_1 !== true && c === 1) {
            setCount(count + 1);
        }
        if (vis_2 !== true && c === 2) {
            setCount(count + 1);
        }
        if (vis_3 !== true && c === 3) {
            setCount(count + 1);
        }
        if (vis_4 !== true && c === 4) {
            setCount(count + 1);
        }
        if (vis_5 !== true && c === 5) {
            setCount(count + 1);
        }

    }

    const handleAnotherCount = (c) => {
        if (vis_1 !== false && c === 1) {
            setCount(count - 1);
        }

        if (vis_2 !== false && c === 2) {
            setCount(count - 1);
        }

        if (vis_3 !== false && c === 3) {
            setCount(count - 1);
        }

        if (vis_4 !== false && c === 4) {
            setCount(count - 1);
        }

        if (vis_5 !== false && c === 5) {
            setCount(count - 1);
        }
    }


    useEffect(() => {
        console.log(specificCompanyInfo)
        setReviewReqBody(data);
    }, [first, second, third, fourth, fifth, count, recommend, recommendValue, specificCompanyInfo])
    return (
        <>

            <div id="grid">

                <div class="spacer sp50"></div>
                <div class="subteaser rateCmp" id="rate_company">
                    <section class="container">
                        <div class="wrap" id="wrap2">
                            <input name="mobile" value="false" type="hidden" data-tracked="true" />
                            <input name="sid" type="hidden" value="930595" data-tracked="true" />
                            <input name="provider" type="hidden" value="HEROLD" data-tracked="true" />
                            <input name="source" type="hidden" value="HEROLD" data-tracked="true" />
                            <input name="ipAddress" type="hidden" value="127.0.0.1" data-tracked="true" />
                            <div class="reviewStep header customBgrdColor customTxtColor ">
                                <div>
                                    <h1>
                                        <font _mstmutation="1" _msttexthash="771108" _msthash="50">
                                            <span class="customTxtColor d-none d-md-inline" _mstmutation="1" _istranslated="1"> You're reviewing: </span>
                                            <a href={`/company-az/active/${specificCompanyInfo?.slug}`} target="_blank" rel="noopener" title={specificCompanyInfo?.company_name} _mstmutation="1" _istranslated="1">{specificCompanyInfo?.company_name}</a>
                                        </font>
                                    </h1>
                                    <p class="street" _msttexthash="735397" _msthash="51"> {specificCompanyInfo?.street} , {specificCompanyInfo?.postcode} {specificCompanyInfo?.city} </p>
                                    <p class="information" _msttexthash="9611381" _msthash="52"> Your review should be as informative as possible and help other visitors decide on a provider.</p>
                                </div>
                                <div class="d-none d-md-block"></div>
                            </div>
                            <div class="reviewStep customBgrdColor customTxtColor">
                                <section>
                                    <h2>
                                        <font _mstmutation="1" _msttexthash="145288" _msthash="53">Give stars!</font>
                                        <span class="d-none d-md-inline hint" _msttexthash="796445" _msthash="54">Please rate at least 3 categories.</span>
                                    </h2>
                                    <div class="content">
                                        <div class="d-block d-md-none hint small" _msttexthash="1269866" _msthidden="1" _msthash="55">Please rate at least 3 categories.</div>
                                        <div class="validate-pos" rel="rating"></div>
                                        <div id="rating_fields">
                                            <div class="row d-md-flex align-items-center rating">
                                                <div class="col-14 col-md-10 order-md-1">
                                                    <label for="category_99" class="mainLabel" _msttexthash="98488" _msthash="56">Quality </label>
                                                </div>
                                                <div class="col-10 col-md-5 order-md-3 text-right text-mc-center">
                                                    <div class="ratingText checkbox" style={vis_1 ? { visibility: 'visible' } : { visibility: 'hidden' }} >
                                                        <i class="icon-ok"></i>
                                                        <label class="ratinglabel">{value_1}</label>
                                                    </div>
                                                </div>
                                                <div class="col-14 col-md-4 order-md-2">
                                                    <div class="star-rating" >
                                                        <input type="hidden" name="ratingFromForm[]" id="category_99" value="0" data-tracked="true"/>
                                                        <input type="hidden" name="groupCategoryFromForm[]" value="Gastronomie_99" data-tracked="true" />
                                                        <input type="radio" id="5-stars_99" name="rating99" value="5" data-tracked="true" />
                                                        <label for="5-stars_99" onClick={() => { setValue_1(`At its finest!`); setFirst(5); setVis_1(true); handleCount(1); }} style={first >= 5 ? { color: '#ffc800' } : { color: '#bec1c2' }} className={"icon-star"} title="At its finest!"></label>
                                                        <input type="radio" id="4-stars_99" name="rating99" value="4" data-tracked="true" />
                                                        <label for="4-stars_99" onClick={() => { setValue_1(`Almost perfect.`); setFirst(4); setVis_1(true); handleCount(1); }} style={first >= 4 ? { color: '#ffc800' } : { color: '#bec1c2' }} class="icon-star" title="Almost perfect."></label>
                                                        <input type="radio" id="3-stars_99" name="rating99" value="3" data-tracked="true" />
                                                        <label for="3-stars_99" onClick={() => { setValue_1(`It's fine.`); setFirst(3); setVis_1(true); handleCount(1); }} style={first >= 3 ? { color: '#ffc800' } : { color: '#bec1c2' }} class="icon-star" title="It's fine."></label>
                                                        <input type="radio" id="2-stars_99" name="rating99" value="2" data-tracked="true"/>
                                                        <label onClick={() => { setValue_1(`It's going ok...`); setFirst(2); setVis_1(true); handleCount(1); }} style={first >= 2 ? { color: '#ffc800' } : { color: '#bec1c2' }} for="2-stars_99" class="icon-star" title="It's going ok..."></label>
                                                        <input type="radio" id="1-star_99" name="rating99" value="1" data-tracked="true"/>
                                                        <label onClick={() => { setValue_1('Oh Dear!'); setFirst(1); setVis_1(true); handleCount(1); }} style={first >= 1 ? { color: '#ffc800' } : { color: '#bec1c2' }} for="1-star_99" className={"icon-star"} title="Oh Dear!"></label>
                                                    </div>
                                                </div>
                                                <div class="col-10 col-md-5 order-md-4 text-right">
                                                    <div class="norating checkbox" onClick={() => { setVis_1(false); setFirst(0); setValue_1(''); handleAnotherCount(1); }} style={vis_1 ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                                        <i class="icon-x"></i>
                                                        <font _mstmutation="1" _msttexthash="230659" _msthash="57">Deleting <span class="d-none d-md-inline" _mstmutation="1" _istranslated="1">Input </span>
                                                        </font>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row d-md-flex align-items-center rating">
                                                <div class="col-14 col-md-10 order-md-1">
                                                    <label for="category_100" class="mainLabel" _msttexthash="58734" _msthash="58">Price</label>
                                                </div>
                                                <div class="col-10 col-md-5 order-md-3 text-right text-mc-center">
                                                    <div class="ratingText checkbox" style={vis_2 ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                                        <i class="icon-ok"></i>
                                                        <label class="ratinglabel">{value_2}</label>
                                                    </div>
                                                </div>
                                                <div class="col-14 col-md-4 order-md-2">
                                                    <div class="star-rating" onChange={() => { }}>
                                                        <input type="hidden" name="ratingFromForm[]" id="category_100" value="0" data-tracked="true" />
                                                        <input type="hidden" name="groupCategoryFromForm[]" value="Gastronomie_100" data-tracked="true"  />
                                                        <input type="radio" id="5-stars_100" name="rating100" value="5" data-tracked="true" />
                                                        <label for="5-stars_100" class="icon-star" onClick={() => { setValue_2(`At its finest!`); setSecond(5); setVis_2(true); handleCount(2); }} style={second >= 5 ? { color: '#ffc800' } : { color: '#bec1c2' }} title="At its finest!"></label>
                                                        <input type="radio" id="4-stars_100" name="rating100" value="4" data-tracked="true" />
                                                        <label for="4-stars_100" class="icon-star" onClick={() => { setValue_2(`Almost perfect.`); setSecond(4); setVis_2(true); handleCount(2); }} style={second >= 4 ? { color: '#ffc800' } : { color: '#bec1c2' }} title="Almost perfect."></label>
                                                        <input type="radio" id="3-stars_100" name="rating100" value="3" data-tracked="true" />
                                                        <label for="3-stars_100" class="icon-star" onClick={() => { setValue_2(`It's fine.`); setSecond(3); setVis_2(true); handleCount(2); }} style={second >= 3 ? { color: '#ffc800' } : { color: '#bec1c2' }} title="It's fine."></label>
                                                        <input type="radio" id="2-stars_100" name="rating100" value="2" data-tracked="true" />
                                                        <label for="2-stars_100" class="icon-star" title="It's going ok..." onClick={() => { setValue_2(`It's going ok...`); setSecond(2); setVis_2(true); handleCount(2); }} style={second >= 2 ? { color: '#ffc800' } : { color: '#bec1c2' }}></label>
                                                        <input type="radio" id="1-star_100" name="rating100" value="1" data-tracked="true" />
                                                        <label for="1-star_100" class="icon-star" onClick={() => { setValue_2('Oh Dear!'); setSecond(1); setVis_2(true); handleCount(2); }} title="Oh Dear!" style={second >= 1 ? { color: '#ffc800' } : { color: '#bec1c2' }}></label>
                                                    </div>
                                                </div>
                                                <div class="col-10 col-md-5 order-md-4 text-right">
                                                    <div class="norating checkbox" onClick={() => { setVis_2(false); setValue_2(''); setSecond(0); handleAnotherCount(2); }} style={vis_2 ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                                        <i class="icon-x"></i>
                                                        <font _mstmutation="1" _msttexthash="230659" _msthash="59">Deleting <span class="d-none d-md-inline" _mstmutation="1" _istranslated="1">Input </span>
                                                        </font>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row d-md-flex align-items-center rating">
                                                <div class="col-14 col-md-10 order-md-1">
                                                    <label for="category_101" class="mainLabel" _msttexthash="94263" _msthash="60">Service</label>
                                                </div>
                                                <div class="col-10 col-md-5 order-md-3 text-right text-mc-center">
                                                    <div class="ratingText checkbox" style={vis_3 ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                                        <i class="icon-ok"></i>
                                                        <label class="ratinglabel">{value_3}</label>
                                                    </div>
                                                </div>
                                                <div class="col-14 col-md-4 order-md-2">
                                                    <div class="star-rating" onChange={() => { }}>
                                                        <input type="hidden" name="ratingFromForm[]" id="category_101" value="0" data-tracked="true" />
                                                        <input type="hidden" name="groupCategoryFromForm[]" value="Gastronomie_101" data-tracked="true" />
                                                        <input type="radio" id="5-stars_101" name="rating101" value="5" data-tracked="true" />
                                                        <label for="5-stars_101" class="icon-star" onClick={() => { setValue_3(`At its finest!`); setThird(5); setVis_3(true); handleCount(3); }} style={third >= 5 ? { color: '#ffc800' } : { color: '#bec1c2' }} title="At its finest!"></label>
                                                        <input type="radio" id="4-stars_101" name="rating101" value="4" data-tracked="true" />
                                                        <label for="4-stars_101" class="icon-star" onClick={() => { setValue_3(`Almost perfect.`); setThird(4); setVis_3(true); handleCount(3); }} style={third >= 4 ? { color: '#ffc800' } : { color: '#bec1c2' }} title="Almost perfect."></label>
                                                        <input type="radio" id="3-stars_101" name="rating101" value="3" data-tracked="true" />
                                                        <label for="3-stars_101" class="icon-star" onClick={() => { setValue_3(`It's fine.`); setThird(3); setVis_3(true); handleCount(3); }} style={third >= 3 ? { color: '#ffc800' } : { color: '#bec1c2' }} title="It's fine."></label>
                                                        <input type="radio" id="2-stars_101" name="rating101" value="2" data-tracked="true" />
                                                        <label for="2-stars_101" class="icon-star" title="It's going ok..." onClick={() => { setThird(2); setValue_3(`It's going ok...`); setVis_3(true); handleCount(3); }} style={third >= 2 ? { color: '#ffc800' } : { color: '#bec1c2' }}></label>
                                                        <input type="radio" id="1-star_101" name="rating101" value="1" data-tracked="true" />
                                                        <label for="1-star_101" class="icon-star" onClick={() => { setValue_3('Oh Dear!'); setThird(1); setVis_3(true); handleCount(3); }} title="Oh Dear!" style={third >= 1 ? { color: '#ffc800' } : { color: '#bec1c2' }}></label>
                                                    </div>
                                                </div>
                                                <div class="col-10 col-md-5 order-md-4 text-right">
                                                    <div class="norating checkbox" onClick={() => { setVis_3(false); setValue_3(''); setThird(0); handleAnotherCount(3); }} style={vis_3 ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                                        <i class="icon-x"></i>
                                                        <font _mstmutation="1" _msttexthash="230659" _msthash="61">Deleting <span class="d-none d-md-inline" _mstmutation="1" _istranslated="1">Input </span>
                                                        </font>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row d-md-flex align-items-center rating">
                                                <div class="col-14 col-md-10 order-md-1">
                                                    <label for="category_102" class="mainLabel" _msttexthash="211549" _msthash="62">Opening hours</label>
                                                </div>
                                                <div class="col-10 col-md-5 order-md-3 text-right text-mc-center">
                                                    <div class="ratingText checkbox" style={vis_4 ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                                        <i class="icon-ok"></i>
                                                        <label class="ratinglabel">{value_4}</label>
                                                    </div>
                                                </div>
                                                <div class="col-14 col-md-4 order-md-2">
                                                    <div class="star-rating" onChange={() => { }}>
                                                        <input type="hidden" name="ratingFromForm[]" id="category_102" value="0" data-tracked="true" />
                                                        <input type="hidden" name="groupCategoryFromForm[]" value="Gastronomie_102" data-tracked="true" />
                                                        <input type="radio" id="5-stars_102" name="rating102" value="5" data-tracked="true" />
                                                        <label for="5-stars_102" class="icon-star" onClick={() => { setValue_4(`At its finest!`); setFourth(5); setVis_4(true); handleCount(4); }} style={fourth >= 5 ? { color: '#ffc800' } : { color: '#bec1c2' }} title="At its finest!"></label>
                                                        <input type="radio" id="4-stars_102" name="rating102" value="4" data-tracked="true" />
                                                        <label for="4-stars_102" class="icon-star" onClick={() => { setValue_4(`Almost perfect.`); setFourth(4); setVis_4(true); handleCount(4); }} style={fourth >= 4 ? { color: '#ffc800' } : { color: '#bec1c2' }} title="Almost perfect."></label>
                                                        <input type="radio" id="3-stars_102" name="rating102" value="3" data-tracked="true" />
                                                        <label for="3-stars_102" class="icon-star" onClick={() => { setValue_4(`It's fine.`); setFourth(3); setVis_4(true); handleCount(4); }} style={fourth >= 3 ? { color: '#ffc800' } : { color: '#bec1c2' }} title="It's fine."></label>
                                                        <input type="radio" id="2-stars_102" name="rating102" value="2" data-tracked="true" />
                                                        <label for="2-stars_102" class="icon-star" title="It's going ok..." onClick={() => { setValue_4(`It's going ok...`); setFourth(2); setVis_4(true); handleCount(4); }} style={fourth >= 2 ? { color: '#ffc800' } : { color: '#bec1c2' }}></label>
                                                        <input type="radio" id="1-star_102" name="rating102" value="1" data-tracked="true" />
                                                        <label for="1-star_102" class="icon-star" onClick={() => { setValue_4('Oh Dear!'); setFourth(1); setVis_4(true); handleCount(4); }} style={fourth >= 1 ? { color: '#ffc800' } : { color: '#bec1c2' }} title="Oh Dear!"></label>
                                                    </div>
                                                </div>
                                                <div class="col-10 col-md-5 order-md-4 text-right">
                                                    <div class="norating checkbox" onClick={() => { setVis_4(false); setValue_4(''); setFourth(0); handleAnotherCount(4); }} style={vis_4 ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                                        <i class="icon-x"></i>
                                                        <font _mstmutation="1" _msttexthash="230659" _msthash="63">Deleting <span class="d-none d-md-inline" _mstmutation="1" _istranslated="1">Input </span>
                                                        </font>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row d-md-flex align-items-center rating">
                                                <div class="col-14 col-md-10 order-md-1">
                                                    <label for="category_103" class="mainLabel" _msttexthash="115466" _msthash="64">Kindness</label>
                                                </div>
                                                <div class="col-10 col-md-5 order-md-3 text-right text-mc-center">
                                                    <div class="ratingText checkbox" style={vis_5 ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                                        <i class="icon-ok"></i>
                                                        <label class="ratinglabel">{value_5}</label>
                                                    </div>
                                                </div>
                                                <div class="col-14 col-md-4 order-md-2">
                                                    <div class="star-rating" onChange={() => { }}>
                                                        <input type="hidden" name="ratingFromForm[]" id="category_103" value="0" data-tracked="true" />
                                                        <input type="hidden" name="groupCategoryFromForm[]" value="Gastronomie_103" data-tracked="true" />
                                                        <input type="radio" id="5-stars_103" name="rating103" value="5" data-tracked="true" />
                                                        <label for="5-stars_103" class="icon-star" onClick={() => { setValue_5(`At its finest!`); setFifth(5); setVis_5(true); handleCount(5); }} style={fifth >= 5 ? { color: '#ffc800' } : { color: '#bec1c2' }} title="At its finest!"></label>
                                                        <input type="radio" id="4-stars_103" name="rating103" value="4" data-tracked="true" />
                                                        <label for="4-stars_103" class="icon-star" onClick={() => { setValue_5(`Almost perfect.`); setFifth(4); setVis_5(true); handleCount(5); }} style={fifth >= 4 ? { color: '#ffc800' } : { color: '#bec1c2' }} title="Almost perfect."></label>
                                                        <input type="radio" id="3-stars_103" name="rating103" value="3" data-tracked="true" />
                                                        <label for="3-stars_103" class="icon-star" onClick={() => { setValue_5(`It's fine.`); setFifth(3); setVis_5(true); handleCount(5); }} style={fifth >= 3 ? { color: '#ffc800' } : { color: '#bec1c2' }} title="It's fine."></label>
                                                        <input type="radio" id="2-stars_103" name="rating103" value="2" data-tracked="true" />
                                                        <label for="2-stars_103" class="icon-star" title="It's going ok..." onClick={() => { setValue_5(`It's going ok...`); setFifth(2); setVis_5(true); handleCount(5); }} style={fifth >= 2 ? { color: '#ffc800' } : { color: '#bec1c2' }}></label>
                                                        <input type="radio" id="1-star_103" name="rating103" value="1" data-tracked="true" />
                                                        <label for="1-star_103" class="icon-star" onClick={() => { setValue_5('Oh Dear!'); setFifth(1); setVis_5(true); handleCount(5); }} style={fifth >= 1 ? { color: '#ffc800' } : { color: '#bec1c2' }} title="Oh Dear!"></label>
                                                    </div>
                                                </div>
                                                <div class="col-10 col-md-5 order-md-4 text-right">
                                                    <div class="norating checkbox" onClick={() => { setVis_5(false); setValue_5(''); setFifth(0); handleAnotherCount(5); }} style={vis_5 ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                                        <i class="icon-x"></i>
                                                        <font _mstmutation="1" _msttexthash="230659" _msthash="65">Deleting <span class="d-none d-md-inline" _mstmutation="1" _istranslated="1">Input </span>
                                                        </font>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row d-md-flex align-items-center rating" id="ratingSummary">
                                                <div class="col-24 col-md-10">
                                                    <div class="mainLabel" _msttexthash="60814" _msthash="70">Total</div>
                                                </div>
                                                <div class="col-15 col-md-4">
                                                    <div class="star-rating-total">
                                                        <i class={((first + second + third + fourth + fifth) / count) >= 1 ? "icon-star active" : "icon-star"}></i>
                                                        <i class={((first + second + third + fourth + fifth) / count) >= 2 ? "icon-star active" : "icon-star"}></i>
                                                        <i class={((first + second + third + fourth + fifth) / count) >= 3 ? "icon-star active" : "icon-star"}></i>
                                                        <i class={((first + second + third + fourth + fifth) / count) >= 4 ? "icon-star active" : "icon-star"}></i>
                                                        <i class={((first + second + third + fourth + fifth) / count) >= 5 ? "icon-star active" : "icon-star"}></i>
                                                    </div>
                                                </div>
                                                <div class="col-7">
                                                    <span class="ratingText">{(parseFloat(((first + second + third + fourth + fifth) / count).toFixed(2)))} Stars</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="reviewStep customBgrdColor customTxtColor"></div>
                            <section className="ratingDetail">
            <h2>How was your experience?</h2>
            <div className="content with py">
                <div className="row reviewInput">
                    <label className="forText" htmlFor="review-title" style={title === '' ? { display: 'none' } : {}}>
                        Title of the review *
                    </label>
                    <div className="validate-pos"></div>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        placeholder="The most important facts in a nutshell (at least 5 characters)"
                        name="title"
                        id="review-title"
                        type="text"
                        data-minlength="5"
                        maxLength="100"
                        required
                    />
                    {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
                </div>
                <div className="row reviewInput">
                    <label className="forText" htmlFor="review-text" style={rating === '' ? { display: 'none' } : {}}>
                        Your rating *
                    </label>
                    <div className="validate-pos"></div>
                    <textarea
                        className="form-control"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        placeholder="Please describe your experience with the company (at least 10 characters)"
                        name="text"
                        id="review-text"
                        data-minlength="10"
                        maxLength="4000"
                        required
                    />
                    {errors.rating && <span style={{ color: 'red' }}>{errors.rating}</span>}
                </div>
            </div>
            <div className="reviewStep customBgrdColor customTxtColor">
                <section className="ratingSubmit">
                    <h2>Submit Review</h2>
                    <div className="content with py">
                        <div>
                            <div className="checkbox">
                                <label className="checkboxContainer">
                                    <span>Yes, I have read and agree to the review guidelines</span>
                                    <input 
                                        name="accepted" 
                                        checked={agree} 
                                        onChange={(e) => setAgree(e.target.checked)} 
                                        id="accepted" 
                                        type="checkbox" 
                                        data-tracked="true" 
                                        required 
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            {errors.agree && <span style={{ color: 'red' }}>{errors.agree}</span>}
                            <div className="validate-pos"></div>
                            <div>
                                <div className="row d-md-flex justify-content-center submitButtons">
                                    <div>
                                        <button className="btn-hbd yellow" type="button" onClick={handleSubmit}>Give Review</button>
                                    </div>
                                </div>
                                <p className="status"></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
                            {/* <div class="reviewStep customBgrdColor customTxtColor">
                                <section class="ratingSubmit">
                                    <h2 _msttexthash="205725" _msthash="86">Submit Review</h2>
                                    <div class="content with py">
                                        <div>
                                            <div class="checkbox">
                                                <label class="checkboxContainer">
                                                    <span _msttexthash="1615887" _msthash="87">Yes, I have read and agree to the <a target="_blank" rel="noopener" title={specificCompanyInfo?.company_name} _istranslated="1">review guidelines</a>. </span>
                                                    <input name="accepted" value={agree} onChange={(e) => { setAgree(e.target.value) }} id="accepted" type="checkbox" data-tracked="true" required />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div class="validate-pos"></div>
                                            <div>
                                                <div class="row d-md-flex justify-content-center submitButtons">
                                                {console.log("aijaj", data)}
                                                    <div>
                                                        <button class="btn-hbd yellow" type="submit" onClick={() => { sendDataToIframe(data); setVisible(false) }} _msttexthash="184015" _msthash="91">Give Review</button>
                                                    </div>
                                                </div>
                                                <p class="status"></p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div> */}
                        </div>
                    </section>
                </div>
                <div
                    className={visible ? "modal fade show" : "modal fade"}
                    id="loginModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-modal="true"
                    style={visible ? { display: "block" } : { display: 'none' }}
                >
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
                            <iframe ref={iframeRef}
                                id="externalLoginIFrame"
                                src={`${baseFrontendRoute}/external-login`}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}