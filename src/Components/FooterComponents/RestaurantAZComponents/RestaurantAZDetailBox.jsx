import { useContext, useEffect, useState } from "react"
import AppContext from "../../../AppContext";
import React from "react";
import axios from "axios";
import Slider from "react-slick";
import GoogleMapPage from '../../Googlemap'
import  './product.css'

export const RestaurantAZDetailsBox = () => {
    const [visible, setVisible] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [show, setShow] = useState(false);
    const [totalRatingValue, setTotalRatingValue] = useState(0);
    const srcSet = "(min-width: 769px) 170px, (min-width: 701px) 130px, (min-width: 577px) 100px, 80px";
    const { baseBackendRoute, specificCompanyInfo, gradimoRateNowContent, imageGallery, userCompany, companyPersonalInfo, openingHours } = useContext(AppContext);
    const [sliderRef, setSliderRef] = useState(null);

    function SampleNextArrow() {
        return (

            <span class="referenzen_next_arrow_abs"><img onClick={sliderRef?.slickNext} width="22" height="41" decoding="async" src="/gradimo_icons/left.png" data-lazy-src="/gradimo_icons/left.png" data-ll-status="loaded" class="entered lazyloaded" /><noscript><img width="22" height="41" decoding="async" src="/gradimo_icons/left.png" /></noscript></span>

        );
    }

    function SamplePrevArrow() {

        return (
            <span class="referenzen_prev_arrow_abs"><img onClick={sliderRef?.slickPrev} width="22" height="41" decoding="async" src="/gradimo_icons/right-arrow.png" data-lazy-src="/gradimo_icons/right-arrow.png" data-ll-status="loaded" class="entered lazyloaded" />
            </span>

        );
    }

    function AnotherPrevArrow() {
        return (
            <span class="referenzen_prev_arrow"><img onClick={sliderRef?.slickPrev} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /><noscript><img width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" /></noscript></span>
        )
    }

    function AnotherNextArrow() {
        return (
            <span class="referenzen_next_arrow"><img onClick={sliderRef?.slickNext} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /><noscript><img width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" /></noscript></span>
        )
    }

    var settings = {
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 3,



        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 100,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 100,
                    slidesToShow: 2,
                    slidesToScroll: 1,


                }
            }
        ]
    };

    const convertTime = (timeString) => {
        let [hours, minutes] = timeString.split(':');
        return `${hours}:${minutes}`;
    }
    useEffect(() => {
        const getSpecificReviewInfo = async () => {
            const totalRating = await specificCompanyInfo?.company_rating?.map(data => data.in_total);
            console.log(totalRating)
            let sum = 0;
            totalRating?.forEach(num => {
                sum += num;
            })
            if (totalRating?.length !== 0) {
                setTotalRatingValue((sum / totalRating?.length).toFixed(1));
                console.log((sum / totalRating?.length).toFixed(1));
            }
            else {
                setTotalRatingValue(0.0);
            }
        }
        getSpecificReviewInfo();
        console.log(totalRatingValue);
    }, [specificCompanyInfo])
    return (
        <>

            <div id="detailBox" class="section_section_element__2A5tN section_large_overlap__-auvh section_medium__3dvm3">
                <div class="container">
                    <div class="col_split_cards">
                        <div class="left">
                            <div class="mb_25">
                                <div class="card-wrapper_element_card_wrapper_element__Bj1_s">
                                    <div class="business-info-section_business_info_section_module__1FY68">

                                        <span itemprop="geo" itemscope="" itemtype="https://schema.org/GeoCoordinates" style={{ display: "none" }}>
                                        </span>
                                        {/* <div class="business-info-section_credentials__1qOPn business-info-section_is_tip_top__2DfY5">
                                            <div class="business-info-section_image__2k_Wx">
                                                <meta itemprop="logo" content="" />
                                                <meta itemprop="image" content="" />
                                                <i class="icon-restaurant"></i>
                                            </div>
                                            <div class="business-info-section_content__3QjME">
                                                <div class="business-info-section_top__1g1hi">
                                                    <div class="business-info-section_rating__ug0Dq" itemtype="https://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
                                                        <meta itemprop="ratingValue" content="5,0" />
                                                        <meta itemprop="ratingCount" content="1" />
                                                        <div class="rating_element_main__2401D">
                                                            <div class="rating_element_inner__3Uxrv">
                                                                <div class="rating_element_stars__13C_C">

                                                                    {Array.from({ length: Number(totalRatingValue) }).map((_, ind) => (
                                                                        <div class="rating_element_star__OZewC">
                                                                            <i class="icon-stern_filled"></i>
                                                                        </div>))
                                                                    }

                                                                </div>
                                                                <div class="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                    <p class="rating_element_rating_text__2tc1p">
                                                                        <font _mstmutation="1" _msttexthash="15015" _msthash="2350">{totalRatingValue}</font>
                                                                        <span class="rating_element_links__1v55t">
                                                                            <span class="business-info-section_links__2YRHx" _msttexthash="542633" _msthash="2351">({specificCompanyInfo?.company_rating?.length} <a href="#reviews" rel="nofollow" title="Bewertungen 1" class="business-info-section_link__1Bvh9" _istranslated="1">Reviews</a>| <a title="Bewertung abgeben: https://www.herold.at/bewertungen/newCompanyReview.do?provider=HEROLD&amp;sid=698409" href={`/give-rev/${specificCompanyInfo?.slug}`} rel="nofollow" class="business-info-section_link__1Bvh9" _istranslated="1">Write a review</a>) </span>
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h1 class="business-info-section_heading__3ERvx" itemprop="name" data-yxt="nam" _msttexthash="906295" _msthash="2352">{specificCompanyInfo?.company_name}</h1>
                                                    <a href="#" class="business-info-section_subheading__bYJC-">
                                                        <span itemprop="address" itemscope="" itemtype="https://schema.org/PostalAddress">
                                                            <span itemprop="streetAddress" data-yxt="adr" class="business-info-section_comma__3w0x0" _msttexthash="246155" _msthash="2353">{specificCompanyInfo?.street}</span>
                                                            <span itemprop="addressCountry" style={{ display: "none" }} _msttexthash="14651" _msthidden="1" _msthash="2354">{specificCompanyInfo?.country}</span>
                                                            <font _mstmutation="1" _msttexthash="447304" _msthash="2355">
                                                                <span itemprop="postalCode" data-yxt="zip" class="business-info-section_comma__3w0x0" _mstmutation="1" _istranslated="1">{specificCompanyInfo?.postcode}</span>
                                                                <span itemprop="addressRegion" class="business-info-section_comma__3w0x0" data-yxt="cty" _mstmutation="1" _istranslated="1">{specificCompanyInfo?.city} </span> <span _mstmutation="1" _istranslated="1">{userCompany?.city} (City)</span>
                                                            </font>
                                                        </span>
                                                    </a>
                                                    <p class="business-info-section_industry__1U1Bj" _msttexthash="161122" _msthash="2356">{specificCompanyInfo?.industry}</p>
                                                </div>
                                                <ul class="list-points_element_list_points__3ypAc list-points_element_lg__1876N">
                                                    <li class="list-points_element_list_point__1-bao">
                                                        <div class="list-points_element_list_point_icon_wrapper__o_rZN">
                                                            <div style={{ display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px" }}>
                                                                <div style={{ boxSizing: "border-box", display: "block", maxWidth: "100%" }}>
                                                                    <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" style={{ maxWidth: "100%", display: "block", margin: "0px", border: "none", padding: "0px" }} />
                                                                </div>
                                                                <img title="check icon" alt="check icon" srcset="/_next/image/?url=%2Fassets%2Fcheck.svg&amp;w=32&amp;q=75 1x, /_next/image/?url=%2Fassets%2Fcheck.svg&amp;w=48&amp;q=75 2x" src="/_next/image/?url=%2Fassets%2Fcheck.svg&amp;w=48&amp;q=75" decoding="async" data-nimg="intrinsic" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} _mstalt="134576" _msthash="2357" />
                                                                <noscript></noscript>
                                                            </div>
                                                        </div>
                                                        <font _mstmutation="1" _msttexthash="300144" _msthash="2358">without category</font>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> */}


                                        <div className="business-info-section_credentials__1qOPn business-info-section_is_tip_top__2DfY5">
                                            <div className="business-info-section_image__2k_Wx">
                                                <div
                                                    style={{
                                                        display: "block",
                                                        overflow: "hidden",
                                                        position: "absolute",
                                                        inset: 0,
                                                        boxSizing: "border-box",
                                                        margin: 0
                                                    }}
                                                >
                                                    <img
                                                        title={specificCompanyInfo?.company_name}
                                                        data-yxt="ilg"
                                                        alt={specificCompanyInfo?.company_name}
                                                        sizes="(min-width:1451px) 230px,(min-width:1199px) 10vw,(min-width:577px) 7vw, 70px"
                                                        srcSet={`${baseBackendRoute}${specificCompanyInfo?.logo}`}
                                                        src={`${baseBackendRoute}${specificCompanyInfo?.logo}`}
                                                        decoding="async"
                                                        data-nimg="fill"
                                                        className="img-fluid"
                                                        style={{
                                                            position: "absolute",
                                                            inset: 0,
                                                            boxSizing: "border-box",
                                                            padding: 0,
                                                            border: "none",
                                                            margin: "auto",
                                                            display: "block",
                                                            width: 0,
                                                            height: 0,
                                                            minWidth: "100%",
                                                            maxWidth: "100%",
                                                            minHeight: "100%",
                                                            maxHeight: "100%",
                                                            objectFit: "contain"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="business-info-section_content__3QjME">
                                                <div className="business-info-section_top__1g1hi">
                                                    <div
                                                        className="business-info-section_rating__ug0Dq"
                                                        itemType="https://schema.org/AggregateRating"
                                                        itemScope=""
                                                        itemProp="aggregateRating"
                                                    >
                                                        <div className="rating_element_main__2401D">
                                                            <div className="rating_element_inner__3Uxrv">
                                                                <div className="rating_element_stars__13C_C">
                                                                    {
                                                                        Array.from({ length: 5 }).map((_, ind) => (
                                                                            <div class="rating_element_star__OZewC">
                                                                                {
                                                                                    ind < Number(totalRatingValue) ?
                                                                                        <div class="input-group-icon">
                                                                                            <img src="/gradimo_icons/star-filled.png" width="25px" height="25px" alt="list" />
                                                                                        </div>
                                                                                        :
                                                                                        <div class="input-group-icon">
                                                                                            <img src="/gradimo_icons/star.png" width="25px" height="25px" alt="list" />
                                                                                        </div>
                                                                                }
                                                                                {/* <i class={`icon-stern${ind < Number(totalRatingValue) ? '_filled' : ''}`}></i> */}
                                                                            </div>
                                                                        ))
                                                                    }


                                                                </div>
                                                                <div className="rating_element_rating_text_block__28Fwe rating_element_withBorder__ONxEj">
                                                                    <p className="rating_element_rating_text__2tc1p">
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>{totalRatingValue}</font>
                                                                        </font>
                                                                        <span className="rating_element_links__1v55t">
                                                                            <span className="business-info-section_links__2YRHx">
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>( </font>
                                                                                </font>
                                                                                {/* {console.log("api...", specificCompanyInfo)} */}
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>{specificCompanyInfo?.company_rating?.length} </font>
                                                                                    <a
                                                                                        href="#reviews"
                                                                                        rel="nofollow"
                                                                                        title="Reviews 9"
                                                                                        className="business-info-section_link__1Bvh9"
                                                                                    >
                                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                                            reviews
                                                                                        </font>
                                                                                    </a>
                                                                                    <font style={{ verticalAlign: "inherit" }}> | </font>
                                                                                    <a
                                                                                        title={`Submit a review:/give-rev/${specificCompanyInfo?.slug}`}
                                                                                        href={`/give-rev/${specificCompanyInfo?.slug}`}
                                                                                        rel="nofollow"
                                                                                        className="business-info-section_link__1Bvh9"
                                                                                    >
                                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                                            Leave a review
                                                                                        </font>
                                                                                    </a>
                                                                                    <font style={{ verticalAlign: "inherit" }}> )</font>
                                                                                </font>
                                                                                <a
                                                                                    href="#reviews"
                                                                                    rel="nofollow"
                                                                                    title="Reviews 9"
                                                                                    className="business-info-section_link__1Bvh9"
                                                                                >
                                                                                    <font style={{ verticalAlign: "inherit" }} />
                                                                                </a>
                                                                                <font style={{ verticalAlign: "inherit" }} />
                                                                                <a
                                                                                    title="Submit a review: https://www.herold.at/reviewen/newCompanyReview.do?provider=HEROLD&sid=315349"
                                                                                    href={`/give-rev/${specificCompanyInfo?.slug}`}
                                                                                    rel="nofollow"
                                                                                    className="business-info-section_link__1Bvh9"
                                                                                >
                                                                                    <font style={{ verticalAlign: "inherit" }} />
                                                                                </a>
                                                                                <font style={{ verticalAlign: "inherit" }} />
                                                                            </span>
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h1
                                                        className="business-info-section_heading__3ERvx"
                                                        itemProp="name"
                                                        data-yxt="nam"
                                                    >
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>{specificCompanyInfo?.company_name}</font>
                                                        </font>
                                                    </h1>
                                                        {/* 
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                {data.street},
                                                            </font>
                                                        </font>

                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                {data.postcode}  {data.city},
                                                            </font>
                                                        </font>

                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                {data.country}
                                                            </font>
                                                        </font>
                                                         */}
                                                        <span
                                                            itemProp="address"
                                                            itemScope=""
                                                            itemType="https://schema.org/PostalAddress"
                                                        >
                                                            <span
                                                                itemProp="streetAddress"
                                                                data-yxt="adr"
                                                                className="business-info-section_comma__3w0x0"
                                                            >
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>{specificCompanyInfo?.street} </font>
                                                                </font>
                                                            </span>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <span
                                                                    itemProp="postalCode"
                                                                    data-yxt="zip"
                                                                    className="business-info-section_comma__3w0x0"
                                                                >
                                                                    <font style={{ verticalAlign: "inherit" }}>{specificCompanyInfo?.postcode} {specificCompanyInfo?.city} </font>
                                                                </span>
                                                                <span
                                                                >
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        {specificCompanyInfo?.country}
                                                                    </font>
                                                                </span>
                                                            </font>
                                                            <span itemProp="addressCountry" style={{ display: "none" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>SI</font>
                                                                </font>
                                                            </span>
                                                        </span>
                                                    <p className="business-info-section_industry__1U1Bj">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>{specificCompanyInfo?.industry?.industry_name}</font>
                                                        </font>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="business-info-section_services__2hoR0">
                                            <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                                <div class="details-page-section-heading_element_inner__2Ef9j">
                                                    <div class="details-page-section-heading_element_icon__2GqOs">
                                                        <div class="input-group-icon">
                                                            <img src="/gradimo_icons/list.png" width="25px" height="25px" alt="list" />
                                                        </div>
                                                    </div>
                                                    <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="205387" _msthash="2359">Services</h2>
                                                </div>
                                            </div>
                                            <div>
                                                <ul className="services-list_element_services_list_element__1I9S-">
                                                    {/* {specificCompanyInfo?.services?.map((category, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() => setVisible(!visible)}
                                                            id={`serviceGroup-${index}`}
                                                            className={visible ? "services-list_element_child__2y1Wm services-list_element_expanded__2M8O0" : "services-list_element_child__2y1Wm"}
                                                            tabIndex="0"
                                                            role="button"
                                                            on="tap:serviceGroup-0.toggleClass(class='expanded',force=false),serviceGroup-0.toggleClass(class='expanded',force=true)"
                                                        >
                                                            {Object.keys(category).map((key, ind) => (
                                                                <React.Fragment key={ind}>
                                                                    {Array.isArray(category[key]) && category[key]?.length > 0 && (
                                                                        <>
                                                                            <div className="services-list_element_inner__1_TaY">
                                                                                <h3 className="services-list_element_main_service__3e3yi" _msttexthash="163917" _msthash="2360">{key}</h3>
                                                                                <div className="services-list_element_toggle_button__24kVf">
                                                                                    <i className="icon-down"></i>
                                                                                </div>
                                                                            </div>
                                                                            <ul>
                                                                                {category[key].map((subService, subIndex) => (
                                                                                    <li key={subIndex}>
                                                                                        {Object.keys(subService).map((subKey, subInd) => (
                                                                                            <React.Fragment key={subInd}>
                                                                                                <h4 className="services-list_element_sub_service__3jCVm" _msttexthash="283556" _msthash="2361">{subKey}</h4>
                                                                                                <ul>
                                                                                                    {subService[subKey].map((item, itemIndex) => (
                                                                                                        <li key={itemIndex}>{item}</li>
                                                                                                    ))}
                                                                                                </ul>
                                                                                            </React.Fragment>
                                                                                        ))}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </>

                                                                    )}
                                                                </React.Fragment>
                                                            ))}
                                                        </li>
                                                    ))}
                                                </ul> */}
                                                    {
                                                        // specificCompanyInfo?.
                                                        <li
                                                            key={1}
                                                            onClick={() => setVisible(!visible)}
                                                            id={`serviceGroup`}
                                                            className={visible ? "services-list_element_child__2y1Wm services-list_element_expanded__2M8O0" : "services-list_element_child__2y1Wm"}
                                                            tabIndex="0"
                                                            role="button"
                                                            on="tap:serviceGroup-0.toggleClass(class='expanded',force=false),serviceGroup-0.toggleClass(class='expanded',force=true)"
                                                        >

                                                            <div className="services-list_element_inner__1_TaY">
                                                                <h3 className="services-list_element_main_service__3e3yi" _msttexthash="163917" _msthash="2360"> {specificCompanyInfo?.service}</h3>
                                                                <div className="services-list_element_toggle_button__24kVf">
                                                                    <img src="/gradimo_icons/down.png" width="25px" height="25px" alt="down" />
                                                                </div>
                                                            </div>
                                                            <ul>
                                                                {
                                                                    specificCompanyInfo?.company_services?.map((data, index) => (
                                                                        <li key={index}>
                                                                            <h4 className="services-list_element_sub_service__3jCVm" _msttexthash="283556" _msthash="2361">{data.service_title}</h4>

                                                                            <ul>
                                                                                {
                                                                                    data?.service_list?.map((item, subIndex) => (
                                                                                        <li key={subIndex}>{item}</li>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>


                                                        </li>
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb_25 show_lg_max" _msthidden="22">
                                <div class="card-wrapper_element_card_wrapper_element__Bj1_s" _msthidden="22">
                                    <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba" _msthidden="1">
                                        <div class="details-page-section-heading_element_inner__2Ef9j" _msthidden="1">
                                            <div class="details-page-section-heading_element_icon__2GqOs">
                                                <div class="input-group-icon">
                                                    <img src="/gradimo_icons/calendar.png" width="25px" height="25px" alt="calendar" />
                                                </div>                                              </div>
                                            <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="277238" _msthidden="1" _msthash="2372">opening hours</h2>
                                        </div>
                                        {
                                            specificCompanyInfo?.is_company_open ?

                                                <span className="pill_element_pill_element__1um7e pill_element_yellow__3trn5">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>now opened</font>
                                                    </font>
                                                </span>
                                                :
                                                <></>
                                        }
                                    </div>
                                    <div _msthidden="21">
                                        <div id="BUSINESS_HOURS" _msthidden="17">
                                            <table class="business-timings-table_element_business_timing_table_element__10jYb openingHours" data-yxt="hrs" _msthidden="17">
                                                <tbody class="business-timings-table_element_tbody__3BhNk" _msthidden="17">
                                                    {
                                                        specificCompanyInfo?.openinghours?.map((data, index) => (
                                                            <tr class="business-timings-table_element_tr__2qT2U" _msthidden="3">
                                                                <th scope="row" class="business-timings-table_element_th__1YvYW" _msttexthash="18551" _msthidden="1" _msthash="2373">{data.weekday.slice(0, 3)}</th>
                                                                <td class="business-timings-table_element_td__17x7O" itemprop="openingHoursSpecification" itemscope="" itemtype="https://schema.org/OpeningHoursSpecification" _msthidden="1">
                                                                    <span itemprop="dayOfWeek" itemtype="https://schema.org/Monday" style={{ display: "none" }}>
                                                                        <meta itemprop="dayOfWeek" content="Monday" />
                                                                        <meta itemprop="opens" content="11:30" />
                                                                        <meta itemprop="closes" content="23:30" />
                                                                    </span>
                                                                    <font _mstmutation="1" _msttexthash="87308" _msthidden="1" _msthash="2374">{convertTime(data.opening_time)} - {convertTime(data.closing_time)}</font>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="business-timings_element_btn_wrapper__1qWQl" onClick={() => { setShow(true) }}>
                                            <a data-yxt="phn" title="+43 660 3465737" href={"#"}>
                                                <button
                                                    className="button_btn__3kzkB button_partially_full_width__2ir3I"
                                                    style={{ height: 40 }}
                                                >
                                                    <div>
                                                        <div class="input-group-icon">
                                                            <img src="/gradimo_icons/phone.png" width="25px" height="25px" alt="phone" style={{ marginRight: '10px' }} />
                                                        </div>
                                                    </div>
                                                    <div className="phoneWrapper">
                                                        <span>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                {
                                                                    show ?
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            {specificCompanyInfo?.phone_code} {specificCompanyInfo?.phone_number}
                                                                        </font>
                                                                        :
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            Show phone number
                                                                        </font>
                                                                }
                                                            </font>
                                                        </span>
                                                    </div>
                                                </button>
                                            </a>
                                        </div>
                                        <ul class="business-timings_element_detail_page_list__67JXE" _msthidden="3">
                                            <li _msthidden="1">
                                                <a href={`mailto:${specificCompanyInfo?.c_email}`} data-category="E-Mail" data-action="click" data-label="YP:698409" title={specificCompanyInfo?.c_email} target="_blank" rel="noopener noreferrer nofollow" class="ellipsis" _msthidden="1">
                                                    <button class="button_btn__3kzkB button_tertiary__2KvbF" _msttexthash="614146" _msthidden="1" _msthash="2391">{specificCompanyInfo?.c_email}</button>
                                                </a>
                                            </li>
                                            <li _msthidden="1">
                                                <button class="button_btn__3kzkB button_no_action__3xVf2 button_tertiary__2KvbF" _msttexthash="151307" _msthidden="1" _msthash="2393">FAX: {specificCompanyInfo?.fax_code} {specificCompanyInfo?.fax_number} </button>
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
                                                <img src="/gradimo_icons/camera.png" width="25px" height="25px" alt="camera" />
                                            </div>
                                            <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="255528" _msthash="2395">Photos &amp; Videos ({specificCompanyInfo?.company_gallery?.length})</h2>
                                        </div>
                                    </div>

                                    <div className="image-gallery_element_multiple_images__3XP6j">
                                    {console.log("kkkkkkk", specificCompanyInfo?.company_gallery) }
                                        {
                                            specificCompanyInfo?.company_gallery?.length > 0 ?
                                                <Slider ref={setSliderRef} {...settings}>
                                                    {

                                                        specificCompanyInfo?.company_gallery?.map((data, index) => (
                                                            <div data-yxt="ilg" id="mediaGallery" style={{ width: '100%', display: 'inline-block' }}>
                                                                <div className="image-gallery_element_slide_inner__3SYCf">
                                                                    <div
                                                                        style={{
                                                                            display: "block",
                                                                            overflow: "hidden",
                                                                            position: "absolute",
                                                                            inset: 0,
                                                                            boxSizing: "border-box",
                                                                            margin: 0
                                                                        }}
                                                                    >
                                                                    {console.log("baseBackendRoute", baseBackendRoute)}


                                                                        <img
                                                                            title="Preview - Photo 1 of A - Barraca - Portuguese specialties"
                                                                            alt="Preview - Photo 1 of A - Barraca - Portuguese specialties"
                                                                            srcSet={`${baseBackendRoute}/media/${data?.photo_vedio}`}
                                                                            decoding="async"
                                                                            data-nimg="fill"
                                                                            className="image-gallery_element_image__1epLn"

                                                                            style={{
                                                                                position: "relative",
                                                                                inset: 0,
                                                                                boxSizing: "border-box",
                                                                                padding: 0,
                                                                                border: "none",
                                                                                margin: "auto",
                                                                                display: "block",
                                                                                width: 0,
                                                                                height: 0,
                                                                                minWidth: "100%",
                                                                                maxWidth: "100%",
                                                                                minHeight: "100%",
                                                                                maxHeight: "100%",
                                                                                objectFit: "cover"
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div className="image-gallery_element_loading_icon__931p1" />
                                                                </div>
                                                            </div>

                                                        ))
                                                    }
                                                </Slider>
                                                :
                                                <></>
                                        }


                                    </div>

                                </div>
                            </div>

                            <div class="mb_25">
                                <div class="card-wrapper_element_card_wrapper_element__Bj1_s">
                                    <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                        <div class="details-page-section-heading_element_inner__2Ef9j">
                                            <div class="details-page-section-heading_element_icon__2GqOs">
                                                <img src="/gradimo_icons/camera.png" width="25px" height="25px" alt="camera" />
                                            </div>
                                            <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="255528" _msthash="2395">Google Map</h2>
                                        </div>
                                    </div>
                                    <GoogleMapPage/>
                                </div>
                              
                            </div>



                            <div className="mb_25">
                                <div className="card-wrapper_element_card_wrapper_element__Bj1_s">
                                    <div className="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                        <div className="details-page-section-heading_element_inner__2Ef9j">
                                            <div className="details-page-section-heading_element_icon__2GqOs">
                                                <div class="input-group-icon">
                                                    <img src="/gradimo_icons/description.png" width="25px" height="25px" alt="description" />
                                                </div>
                                            </div>
                                            <h2 className="details-page-section-heading_element_heading__3UmDR">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Description</font>
                                                </font>
                                            </h2>
                                        </div>
                                    </div>
                                    {
                                        specificCompanyInfo?.short_description ?
                                            <div className="business-description_business_description_module__28e-F">
                                                <div className="business-description_text_wrapper__1C57P" id="ACTIVITIES">

                                                    <p
                                                        id="descriptionText"
                                                        className={showMore ? "business-description_text__3mC8M business-description_ellipsis__1xoNw business-description_open__JaKea content" : "business-description_text__3mC8M business-description_ellipsis__1xoNw content"}
                                                        itemProp="description"
                                                        data-yxt="dec"
                                                        dangerouslySetInnerHTML={{ __html: specificCompanyInfo?.short_description }}
                                                    >

                                                    </p>
                                                    <span
                                                        id="ellipsis_icon"
                                                        className="business-description_ellipsis_icon__3nigt business-description_show__33Po7"
                                                    >
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>...</font>
                                                        </font>
                                                    </span>
                                                </div>
                                                <div onClick={() => { setShowMore(!showMore) }}
                                                    className="business-description_show_more_wrapper__lV6na"
                                                    tabIndex={0}
                                                    role="button"
                                                    on="tap:descriptionText.toggleClass(class='ellipsis'),ellipsis_icon.toggleClass(class='show')"
                                                >
                                                    <button className="button_btn__3kzkB button_tertiary__2KvbF">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>{showMore ? "show less" : "show more"}</font>
                                                        </font>
                                                    </button>
                                                </div>
                                            </div>
                                            :
                                            <></>
                                    }
                                </div>
                            </div>


                            <div className="mb_25">
                                <div className="card-wrapper_element_card_wrapper_element__Bj1_s">
                                    <div className="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                        <div className="details-page-section-heading_element_inner__2Ef9j">
                                            <div className="details-page-section-heading_element_icon__2GqOs">
                                                <div class="input-group-icon">
                                                    <img src="/gradimo_icons/products.png" width="25px" height="25px" alt="description" />
                                                </div>
                                            </div>

                                            <h2 className="details-page-section-heading_element_heading__3UmDR">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Products</font>
                                                </font>
                                            </h2>
                                        </div>
                                    </div>
                                    {console.log("king", specificCompanyInfo?.company_products)}

                                    {
                                        specificCompanyInfo?.company_products.length !== 0 ?
                                            specificCompanyInfo?.company_products?.map((data, index) => (
                                                <div className="business-description_business_description_module__28e-F">
                                                    <div className="business-description_text_wrapper__1C57P product-container" id="ACTIVITIES">
                                                        <h2 style={{ textAlign: 'center' }}>{data.product_name} | {data.offer_since}</h2>
                                                        <br />
                                                        <img src={`${baseBackendRoute}/media/${data.image}`} className="product-image" alt={`${data.product_name}`} />
                                                        <br />
                                                        <h3 style={{ textAlign: 'center' }}>For: {data.currency_type} {data.price}</h3>
                                                        <br />
                                                        <p
                                                            style={{ textAlign: 'center' }}
                                                            id="descriptionText"
                                                            dangerouslySetInnerHTML={{ __html: data?.characteristics }}
                                                        ></p>
                                                        <br />
                                                        <p
                                                            style={{ textAlign: 'center' }}
                                                            id="descriptionText"
                                                            dangerouslySetInnerHTML={{ __html: data?.description }}
                                                        ></p>
                                                    </div>
                                                </div>
                                            ))
                                            :
                                            <></>
                                    }
                                </div>
                            </div>



                            <div className="mb_25">
                                <div className="card-wrapper_element_card_wrapper_element__Bj1_s">
                                    <div className="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                        <div className="details-page-section-heading_element_inner__2Ef9j">
                                            <div className="details-page-section-heading_element_icon__2GqOs">
                                                <div class="input-group-icon">
                                                    <img src="/gradimo_icons/info.png" width="25px" height="25px" alt="info" />
                                                </div>
                                            </div>
                                            <h2 className="details-page-section-heading_element_heading__3UmDR">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        Further information
                                                    </font>
                                                </font>
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="further-Information_further_information_module__2elb8">
                                        <div
                                            className="further-Information_button__2fZWl"
                                            id="yext-special"
                                            data-yxt="off"
                                        >
                                            <button className="button_btn__3kzkB button_no_action__3xVf2 button_tertiary__2KvbF">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        {gradimoRateNowContent?.further_information}
                                                    </font>
                                                </font>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div
                                id="reviews"
                                className="section-margin-bottom-xl yellow_pages_review_section"
                            >
                                <div className="card_wrapper_element">
                                    <div className="details_page_section_heading_element tiptop">
                                        <div className="inner">
                                            <div className="icon">
                                                <div class="input-group-icon">
                                                    <img src="/gradimo_icons/star.png" width="25px" height="25px" alt="star" />
                                                </div>
                                            </div>
                                            <h2 className="heading">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Reviews</font>
                                                </font>
                                            </h2>
                                        </div>

                                    </div>


                                    <div className="reviews_section_module">
                                        <ol className="reviews_section">
                                            {
                                                specificCompanyInfo?.company_rating?.map((data, index) => (
                                                    <li className="review_item">
                                                        <div
                                                            className="review_item_element"
                                                            itemType="https://schema.org/Review"
                                                            itemScope=""
                                                            itemProp="review"
                                                            data-uid={1237597}>
                                                            <div
                                                                itemProp="itemReviewed"
                                                                itemScope=""
                                                                itemType="https://schema.org/Thing"
                                                                style={{ display: "none" }}
                                                            >
                                                            </div>
                                                            <div
                                                                itemProp="publisher"
                                                                itemScope=""
                                                                itemType="https://schema.org/Organization"
                                                                style={{ display: "none" }}
                                                            >
                                                            </div>
                                                            <div
                                                                itemScope=""
                                                                itemType="https://schema.org/Rating"
                                                                itemProp="reviewRating"
                                                                style={{ display: "none" }}
                                                            >
                                                                <meta itemProp="bestRating" content={5} />
                                                                <meta itemProp="worstRating" content={0} />
                                                                <meta itemProp="ratingValue" content={5} />
                                                            </div>
                                                            <div className="main">
                                                                <div className="inner">
                                                                    <div className="stars">
                                                                        {
                                                                            <>
                                                                                <div className="star">
                                                                                    {typeof data?.in_total === 'number' ? (
                                                                                        Array.from({ length: data.in_total }).map((_, ind) => (
                                                                                            <div class="input-group-icon">
                                                                                                <img src="/gradimo_icons/star-filled.png" width="25px" height="25px" alt="star-filled" />
                                                                                            </div>))
                                                                                    ) : (
                                                                                        data?.in_total !== undefined && (
                                                                                            <div class="input-group-icon">
                                                                                                <img src="/gradimo_icons/star-filled.png" width="25px" height="25px" alt="star-filled" />
                                                                                            </div>)
                                                                                    )}

                                                                                </div>
                                                                            </>
                                                                        }

                                                                    </div>
                                                                    <div className="rating_text_block">
                                                                        <p className="rating_text">
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>{data.in_total}</font>
                                                                            </font>
                                                                            <span className="links" />
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="name">
                                                                <p>
                                                                    <span
                                                                        itemProp="author"
                                                                        itemScope=""
                                                                        itemType="https://schema.org/Person"
                                                                    >

                                                                        <meta itemProp="name" content="robertamerle" />
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                {data.user !== null ? data.user : data.guest_name !== null ? data.guest_name : 'undefined'}
                                                                            </font>
                                                                        </font>
                                                                    </span>
                                                                    <b>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>on </font>
                                                                        </font>
                                                                    </b>
                                                                    <b itemProp="datePublished">
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                {data.created_at.split('T')[0]}
                                                                            </font>
                                                                        </font>
                                                                    </b>
                                                                </p>
                                                            </div>
                                                            <h4 className="title" itemProp="name">
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        {data.review_title}
                                                                    </font>
                                                                </font>
                                                            </h4>
                                                            <div className="text_wrapper">
                                                                <div
                                                                    id="reviewText_1237597"
                                                                    className="text"
                                                                    itemProp="reviewBody"
                                                                >
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            {data.feedback}
                                                                        </font>
                                                                    </font>
                                                                </div>
                                                                <span id="ellipsis_icon_1237597" className="ellipsis_icon show" />
                                                            </div>
                                                            <div id="ratings_1237597" className="rating_section">
                                                                <div className="rating_item">
                                                                    <div className="rating_item_wrapper">
                                                                        <div className="main">
                                                                            <h5 className="heading sm">
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        Appointment
                                                                                    </font>
                                                                                </font>
                                                                            </h5>
                                                                            <div className="inner">
                                                                                <div className="stars">
                                                                                    <div className="star sm">
                                                                                        <i className="icon-stern_filled" />
                                                                                    </div>
                                                                                    <div className="star sm">
                                                                                        <i className="icon-stern_filled" />
                                                                                    </div>
                                                                                    <div className="star sm">
                                                                                        <i className="icon-stern_filled" />
                                                                                    </div>
                                                                                    <div className="star sm">
                                                                                        <i className="icon-stern_filled" />
                                                                                    </div>
                                                                                    <div className="star sm">
                                                                                        <i className="icon-stern_filled" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="rating_text_block">
                                                                                    <p className="rating_text sm">
                                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                                5.0
                                                                                            </font>
                                                                                        </font>
                                                                                        <span className="links" />
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={0}
                                                                    role="button"
                                                                    on="tap:ratings_1237597.toggleClass(class='visible'),reviewText_1237597.toggleClass(class='ellipsis'),ellipsis_icon_1237597.toggleClass(class='show')"
                                                                >
                                                                    <button className="btn tertiary">
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                Review in detail
                                                                            </font>
                                                                        </font>
                                                                    </button>
                                                                </div>
                                                                <div className="report_review">
                                                                    <a
                                                                        href="https://www.herold.at/bewertungen/reportReview.do?publicKey=1237597"
                                                                        title="Report review"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer nofollow"
                                                                    >
                                                                        <button className="btn small tertiary">
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    Report review
                                                                                </font>
                                                                            </font>
                                                                        </button>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))
                                            }


                                        </ol>
                                        <a href="#" />
                                        {/* <a className="load_more">
                                            <button className="btn tertiary">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>see more reviews</font>
                                                </font>
                                            </button>
                                        </a> */}
                                    </div>
                                    <div className="user_opinion_prompt_module">
                                        <div className="logo_para_wrapper">
                                            <div className="logo_wrapper">

                                                <img
                                                    decoding="async"
                                                    alt="Gradimo Skupaj, business directory, company reviews, telephone directory"
                                                    title="Gradimo Skupaj, business directory, company reviews, telephone directory"
                                                    src="/logo_img/new-logo-modified.png"
                                                    className="i-amphtml-fill-content i-amphtml-replaced-content"
                                                />
                                            </div>
                                            <p className="paragraph">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }} dangerouslySetInnerHTML={{ __html: gradimoRateNowContent?.content }}>

                                                    </font>
                                                </font>
                                                <a
                                                    href="/reviews"
                                                    rel="nofollow"
                                                    title={gradimoRateNowContent?.link_name}
                                                    className="link"
                                                >
                                                    <button className="btn tertiary">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                {gradimoRateNowContent?.link_name}
                                                            </font>
                                                        </font>
                                                    </button>
                                                </a>
                                            </p>
                                        </div>
                                        <div className="rate_now">
                                            <h6 className="subHeading">

                                                <b>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            {gradimoRateNowContent?.title}
                                                        </font>
                                                    </font>
                                                </b>
                                            </h6>
                                            <a
                                                href={`/give-rev/${specificCompanyInfo?.slug}`}
                                                data-category="Review"
                                                data-action="write"
                                                data-label="YP:705200"
                                                rel="nofollow"
                                                title={gradimoRateNowContent?.button_name}
                                                className="button_wrapper"
                                            >
                                                <button className="btn full_width secondary" style={{ height: 40 }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>{gradimoRateNowContent?.button_name}</font>
                                                    </font>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="right">
                            <div class="mb_25 hide_lg_max">
                                <div class="card-wrapper_element_card_wrapper_element__Bj1_s">
                                    <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                        <div class="details-page-section-heading_element_inner__2Ef9j">
                                            <div class="details-page-section-heading_element_icon__2GqOs">
                                                <div class="input-group-icon">
                                                    <img src="/gradimo_icons/calendar.png" width="25px" height="25px" alt="calendar" />
                                                </div>                                              </div>
                                            <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="211549" _msthash="2418">Opening hours</h2>
                                        </div>

                                        {
                                            specificCompanyInfo?.is_company_open ?
                                                <span className="pill_element_pill_element__1um7e pill_element_yellow__3trn5">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>now opened</font>
                                                    </font>
                                                </span>
                                                :
                                                <></>
                                        }
                                    </div>
                                    <div>
                                        <div id="BUSINESS_HOURS">
                                            <table
                                                className="business-timings-table_element_business_timing_table_element__10jYb openingHours"
                                                data-yxt="hrs"
                                            >
                                                <tbody className="business-timings-table_element_tbody__3BhNk">
                                                    {
                                                        specificCompanyInfo?.openinghours?.map((data, index) => (
                                                            <tr className="business-timings-table_element_tr__2qT2U">
                                                                <th scope="row" className="business-timings-table_element_th__1YvYW">
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>{data.weekday.slice(0, 3)}</font>
                                                                    </font>
                                                                </th>
                                                                <td
                                                                    className="business-timings-table_element_td__17x7O"
                                                                    itemProp="openingHoursSpecification"
                                                                    itemScope=""
                                                                    itemType="https://schema.org/OpeningHoursSpecification"
                                                                >
                                                                    <span
                                                                        itemProp="dayOfWeek"
                                                                        itemType="https://schema.org/Monday"
                                                                        style={{ display: "none" }}
                                                                    >
                                                                        <meta itemProp="dayOfWeek" content="Monday" />
                                                                        <meta itemProp="opens" content="11:30" />
                                                                        <meta itemProp="closes" content="23:30" />
                                                                    </span>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>{convertTime(data.opening_time)} - {convertTime(data.closing_time)} </font>
                                                                    </font>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                        {

                                            <div className="business-timings_element_btn_wrapper__1qWQl" onClick={() => { setShow(true) }}>
                                                <a data-yxt="phn" title="+43 660 3465737" href={"#"}>
                                                    <button
                                                        className="button_btn__3kzkB button_partially_full_width__2ir3I"
                                                        style={{ height: 40 }}
                                                    >
                                                        <div class="input-group-icon">
                                                            <img src="/gradimo_icons/phone.png" width="25px" height="25px" alt="phone" />
                                                        </div>
                                                        <div className="phoneWrapper">
                                                            <span>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    {
                                                                        show ?
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                {specificCompanyInfo?.phone_code} {specificCompanyInfo?.phone_number}
                                                                            </font>
                                                                            :
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                Show phone number
                                                                            </font>
                                                                    }
                                                                </font>
                                                            </span>
                                                        </div>
                                                    </button>
                                                </a>
                                            </div>
                                        }
                                        <ul className="business-timings_element_detail_page_list__67JXE">
                                            {specificCompanyInfo?.c_email ?
                                                <li>
                                                    <a
                                                        href={`mailto:${specificCompanyInfo?.c_email}`}
                                                        data-category="E-Mail"
                                                        data-action="click"
                                                        data-label="YP:698409"
                                                        title={specificCompanyInfo?.c_email}
                                                        target="_blank"
                                                        rel="noopener noreferrer nofollow"
                                                        className="ellipsis"
                                                    >
                                                        <button className="button_btn__3kzkB button_tertiary__2KvbF">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    {specificCompanyInfo?.c_email}
                                                                </font>
                                                            </font>
                                                        </button>
                                                    </a>
                                                </li>
                                                :
                                                <></>
                                            }
                                            {specificCompanyInfo?.website_link ?
                                                <li>
                                                    <a
                                                        href={specificCompanyInfo?.website_link}
                                                        data-category="Weblink"
                                                        data-action="click"
                                                        data-label="YP:698409"
                                                        title={specificCompanyInfo?.website_link}
                                                        target="_blank"
                                                        rel="noopener noreferrer nofollow"
                                                        className="ellipsis"
                                                    >
                                                        <button className="button_btn__3kzkB button_tertiary__2KvbF">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>website</font>
                                                            </font>
                                                        </button>
                                                    </a>
                                                </li>
                                                :
                                                <></>}
                                            {
                                                specificCompanyInfo?.fax_number ?
                                                    <li>
                                                        <button className="button_btn__3kzkB button_no_action__3xVf2 button_tertiary__2KvbF">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>FAX: </font>
                                                            </font>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>{specificCompanyInfo?.fax_code} {specificCompanyInfo?.fax_number}</font>
                                                            </font>
                                                        </button>
                                                    </li>
                                                    :
                                                    <></>
                                            }
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            <div className="mb_25">
                                <div className="card-wrapper_element_card_wrapper_element__Bj1_s">
                                    <div className="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                        <div className="details-page-section-heading_element_inner__2Ef9j">
                                            <div className="details-page-section-heading_element_icon__2GqOs">
                                                <div class="input-group-icon">
                                                    <img src="/gradimo_icons/share.png" width="25px" height="25px" alt="share" />
                                                </div>                                              </div>
                                            <h2 className="details-page-section-heading_element_heading__3UmDR">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        Further contact options
                                                    </font>
                                                </font>
                                            </h2>
                                        </div>
                                    </div>
                                    <ul className="social-info_detail_page_list__1apXx">
                                        {specificCompanyInfo?.phone_number ?
                                            <li>
                                                <a
                                                    href={`tel:${specificCompanyInfo?.phone_code}-${specificCompanyInfo?.phone_number}`}
                                                    className="social-info_sub_info__1LH7e"
                                                    data-htype="further_contact_telephone"
                                                    rel="noreferrer"
                                                    data-hvalue="click"
                                                >
                                                    <div className="social-info_icon_wrapper__wlxsG">
                                                        <div className="social-info_icon__2h6nV social-info_md__1WYL_">
                                                            <div class="input-group-icon">
                                                                <img src="/gradimo_icons/phone.png" width="25px" height="25px" alt="phone" />
                                                            </div>                                                          </div>
                                                        <button className="button_btn__3kzkB button_tertiary__2KvbF">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    {specificCompanyInfo?.phone_code} {specificCompanyInfo?.phone_number}
                                                                </font>
                                                            </font>
                                                        </button>
                                                    </div>
                                                </a>
                                            </li>
                                            :
                                            <></>
                                        }
                                        {
                                            specificCompanyInfo?.website_link ?
                                                <li>
                                                    <a
                                                        href={`${specificCompanyInfo?.website_link}`}
                                                        className="social-info_sub_info__1LH7e"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        data-htype="further_contact_web"
                                                        data-hvalue="click"
                                                    >
                                                        <div className="social-info_icon_wrapper__wlxsG">
                                                            <div className="social-info_icon__2h6nV social-info_md__1WYL_">
                                                                <div class="input-group-icon">
                                                                    <img src="/gradimo_icons/website.png" width="25px" height="25px" alt="website" />
                                                                </div>
                                                            </div>
                                                            <button className="button_btn__3kzkB button_text_lowercase__15Z7Z button_tertiary__2KvbF" >
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        {specificCompanyInfo?.website_link}
                                                                    </font>
                                                                </font>
                                                            </button>
                                                        </div>
                                                    </a>
                                                </li>
                                                :
                                                <></>
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div class="mb_25">
                                <div class="card-wrapper_element_card_wrapper_element__Bj1_s">
                                    <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                        <div class="details-page-section-heading_element_inner__2Ef9j">
                                            <div class="details-page-section-heading_element_icon__2GqOs">
                                                <div class="input-group-icon">
                                                    <img src="/gradimo_icons/cash.png" width="25px" height="25px" alt="cash" />
                                                </div>
                                            </div>
                                            <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="264121" _msthash="2440">Payment methods</h2>
                                        </div>
                                    </div>
                                    <ul class="payment-methods_detail_page_list__1ptkc" data-yxt="pay">
                                        {
                                            specificCompanyInfo?.payment_method?.map((data, index) => (
                                                <li>
                                                    <span class="payment-methods_sub_info__3WNx5">
                                                        <div class="payment-methods_icon_wrapper__JfcWB">
                                                            <div class="payment-methods_icon__2QG1r">
                                                                <div class="input-group-icon">
                                                                    <img src={`${baseBackendRoute}${data.icon}`} width="25px" height="25px" alt={data.icon} />
                                                                </div>
                                                            </div>
                                                            <span _msttexthash="182806" _msthash="2441">{data.name}</span>
                                                        </div>
                                                    </span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>



                            <div className="mb_25">
                                <div className="card-wrapper_element_card_wrapper_element__Bj1_s">
                                    <div className="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                        <div className="details-page-section-heading_element_inner__2Ef9j">
                                            <div className="details-page-section-heading_element_icon__2GqOs">
                                                <div class="input-group-icon">
                                                    <img src="/gradimo_icons/company.png" width="25px" height="25px" alt="company" />
                                                </div>
                                            </div>
                                            <h2 className="details-page-section-heading_element_heading__3UmDR">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Company details</font>
                                                </font>
                                            </h2>
                                        </div>
                                    </div>
                                    <div>
                                        <ul className="business-details_detail_page_list__33TPP business-details_margin_lg__207x3">
                                            {
                                                specificCompanyInfo?.fountding_year ?
                                                    <li>
                                                        <p>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    founding year
                                                                </font>
                                                            </font>
                                                        </p>
                                                        <span className="business-details_sub_info__ymbv2">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    {specificCompanyInfo?.fountding_year}
                                                                </font>
                                                            </font>
                                                        </span>
                                                    </li>
                                                    :
                                                    <></>
                                            }

                                            {
                                                specificCompanyInfo?.company_register_number ?
                                                    <li>
                                                        <p>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    company registration number
                                                                </font>
                                                            </font>
                                                        </p>
                                                        <span className="business-details_sub_info__ymbv2">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    {specificCompanyInfo?.company_register_number}
                                                                </font>
                                                            </font>
                                                        </span>
                                                    </li>
                                                    :
                                                    <></>
                                            }
                                            {
                                                specificCompanyInfo?.parking_possibility ?
                                                    <li>
                                                        <p>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    Parking possibility
                                                                </font>
                                                            </font>
                                                        </p>
                                                        <span className="business-details_sub_info__ymbv2">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    {specificCompanyInfo?.parking_possibility}
                                                                </font>
                                                            </font>
                                                        </span>
                                                    </li>
                                                    :
                                                    <></>
                                            }

                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div class="mb_25">
                                <div class="card-wrapper_element_card_wrapper_element__Bj1_s">
                                    <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                        <div class="details-page-section-heading_element_inner__2Ef9j">
                                            <div class="details-page-section-heading_element_icon__2GqOs">
                                                <div class="input-group-icon">
                                                    <img src="/gradimo_icons/industry.png" width="25px" height="25px" alt="industry" />
                                                </div>
                                            </div>
                                            <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="1243541" _msthash="2444">You can find this company in the industries</h2>
                                        </div>
                                    </div>
                                    <ul class="company-Industries_detail_page_list__3ICLl">
                                        <li>
                                            <span class="company-Industries_sub_info__GvVK2 company-Industries_body_color__Gd90H" _msttexthash="161122" _msthash="2445">{specificCompanyInfo?.industry?.industry_name}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mb_25">
                                <div class="card-wrapper_element_card_wrapper_element__Bj1_s">
                                    <div class="details-page-section-heading_element_details_page_section_heading_element__2R4ba">
                                        <div class="details-page-section-heading_element_inner__2Ef9j">
                                            <div class="details-page-section-heading_element_icon__2GqOs">
                                                <div class="input-group-icon">
                                                    <img src="/gradimo_icons/cursor.png" width="25px" height="25px" alt="cursor" />
                                                </div>                                              </div>
                                            <h2 class="details-page-section-heading_element_heading__3UmDR" _msttexthash="416832" _msthash="2446">Save and share contact</h2>
                                        </div>
                                    </div>
                                    <div class="more-actions-buttons_more_actions_buttons_module__2DpJ5">
                                        <ul>
                                            <li>
                                                <div data-category="Vcard" data-action="download" data-label="YP:698409">
                                                    <div>
                                                        <a download={`${specificCompanyInfo}.vcf`} href={`data:text/vcard;charset=UTF-8,BEGIN:VCARD%0AVERSION:3.0%0AN:${specificCompanyInfo?.company_name};%0AADR;TYPE=${specificCompanyInfo?.industry?.industry_name}:;;${specificCompanyInfo?.city};${specificCompanyInfo?.country};TYPE=work:${specificCompanyInfo?.phone_code}${specificCompanyInfo?.phone_number}%0AEMAIL;TYPE=internet,work:${specificCompanyInfo?.c_email}%0AURL;TYPE=work:${specificCompanyInfo?.website_link}`}>
                                                            <button class="button_btn__3kzkB button_tertiary__2KvbF" _msttexthash="180895" _msthash="2448">Save contact</button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                {/* <div>
                                                    <div on="tap:socialLinks.toggleClass(class='show')" role="button" tabindex="0">
                                                        <button class="button_btn__3kzkB button_tertiary__2KvbF" _msttexthash="58981" _msthash="2449">Share</button>
                                                    </div>
                                                </div> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="mb_25"></div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}