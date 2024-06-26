import { useContext, useEffect, useState } from "react";
import AppContext from "../../../AppContext";

export const RestaurantAZStickyInfo = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showPhone, setShowPhone] = useState(false);
    const [show, setShow] = useState(false);
    const { specificCompanyInfo } = useContext(AppContext);

    useEffect(() => {
    }, [specificCompanyInfo]);
    return (
        <>
            <div class={"sticky-info_element_sticky_info__3elHz sticky-info_element_show__3B3Iy"}>
                <div class="section_section_element__2A5tN section_extra_small__38o1x section_yellow__3Vf-6">
                    <div class="container">
                        <div class="yellow-page-sticky-info_element_main__33DAS">
                            <div class={show ? "yellow-page-sticky-info_element_col_split_cards__3239O yellow-page-sticky-info_element_show__ZdVO7" : "yellow-page-sticky-info_element_col_split_cards__3239O"}>
                                <div class="yellow-page-sticky-info_element_left__29hLH">
                                    <div class="yellow-page-sticky-info_element_content__AZasM">
                                        <div>
                                            <div class="yellow-page-sticky-info_element_rating__esjO0">
                                                <div class="rating_element_main__2401D">
                                                    <div class="rating_element_inner__3Uxrv">
                                                        <div class="rating_element_stars__13C_C">

                                                            {typeof specificCompanyInfo?.avg_rating === 'number' ? (
                                                                Array.from({ length: Number(specificCompanyInfo?.avg_rating) }).map((_, ind) => (
                                                                    <div class="rating_element_star__OZewC">
                                                                        <div class="input-group-icon">
                                                                            <img src="/gradimo_icons/star-filled.png" width="25px" height="25px" alt="star-filled" />
                                                                        </div>                                                                      </div>))
                                                            ) : (
                                                                specificCompanyInfo?.avg_rating !== undefined && (
                                                                    <div class="input-group-icon">
                                                                        <img src="/gradimo_icons/star-filled.png" width="25px" height="25px" alt="star-filled" />
                                                                    </div>)
                                                            )}
                                                        </div>
                                                        <div class="rating_element_rating_text_block__28Fwe">
                                                            <p class="rating_element_rating_text__2tc1p">
                                                                <font _mstmutation="1" _msttexthash="15015" _msthash="366">{specificCompanyInfo?.avg_rating.toFixed(1)}</font>
                                                                <span class="rating_element_links__1v55t"></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span class="yellow-page-sticky-info_element_links__bs-U0">( <font _mstmutation="1" _msttexthash="495040" _msthash="367">{specificCompanyInfo?.review_count} <a href="#reviews" title="Bewertungen" rel="nofollow" class="yellow-page-sticky-info_element_link__5mMs9" _mstmutation="1" _istranslated="1">Reviews</a> | <a href={`/give-rev/${specificCompanyInfo?.id}`} rel="nofollow" title="Bewertung abgeben" class="yellow-page-sticky-info_element_link__5mMs9" _mstmutation="1" _istranslated="1">Write a review</a>
                                                </font>) </span>
                                            </div>
                                            <div>
                                                <h4 class="yellow-page-sticky-info_element_heading__1_A7p" _msttexthash="906295" _msthash="368">{specificCompanyInfo?.company_name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="yellow-page-sticky-info_element_right__3bP40">
                                    <div class="yellow-page-sticky-info_element_btn_wrapper__3IlLB">
                                        <a data-yxt="phn" title={`${specificCompanyInfo?.phone_code}${specificCompanyInfo?.phone_number}`}>
                                            <button onClick={() => { setShowPhone(!showPhone) }} class="button_btn__3kzkB button_partially_full_width__2ir3I button_secondary__s1GX9" style={{ height: "40px" }}>
                                                <div>
                                                    <div class="input-group-icon">
                                                        <img src="/gradimo_icons/phone.png" style={{ marginRight: '10px' }} width="25px" height="25px" alt="phone" />
                                                    </div>                                                  </div>
                                                <div class="phoneWrapper" >
                                                    <span _msttexthash="293371" _msthash="369">{showPhone ? specificCompanyInfo?.phone_code + " " + specificCompanyInfo?.phone_number : "Show phone number"}</span>
                                                </div>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <h4 class={show ? "yellow-page-sticky-info_element_heading__1_A7p yellow-page-sticky-info_element_padding_right__fhVx1 yellow-page-sticky-info_element_hide__3LuCk" : "yellow-page-sticky-info_element_heading__1_A7p yellow-page-sticky-info_element_padding_right__fhVx1"} _msttexthash="1311960" _msthidden="1" _msthash="370">{specificCompanyInfo?.company_name}</h4>
                            <div class="yellow-page-sticky-info_element_toggle_button__2dRAj">
                                <div class={show ? "yellow-page-sticky-info_element_button_inner__1NRjV yellow-page-sticky-info_element_rotated__1hvdp" : "yellow-page-sticky-info_element_button_inner__1NRjV"}>
                                    {/* <i class="icon-down" onClick={() => { setShow(!show) }}></i> */}
                                    <div class="input-group-icon" onClick={() => { setShow(!show) }}>
                                        <img src="/gradimo_icons/down.png" width="25px" height="25px" alt="down" />
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