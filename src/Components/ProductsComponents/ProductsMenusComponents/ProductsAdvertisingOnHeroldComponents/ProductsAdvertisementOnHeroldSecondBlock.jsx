import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsAdvertisementOnHeroldSecondBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index === -1) {
            setIndex(2);
        }
        if (index === 3) {
            setIndex(0);
        }

    }, [index])
    return (
        <>
            {
                isMobile ?
                    <>
                        <div class="block">
                            <div class="block-inner container">
                                <div class="title-head">
                                    <h2 style={{ textAlign: "center" }} _msttexthash="830505" _msthash="126">For more visibility that pays off.</h2>
                                    <h3 _msttexthash="651274" _msthash="127">Your company, your solution:</h3>
                                </div>
                                <div class="cardos-slider slick-initialized slick-slider slick-dotted">
                                    <div class="slick-list draggable">
                                        <div class="slick-track" style={index === 0 ? { opacity: "1", width: "1005px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "1005px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "1005px", transform: "translate3d(-670px, 0px, 0px)" } : {}}>
                                            <div data-priceindex="0" class="card basic-card slick-slide" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" data-slick-index="0" aria-hidden="true">
                                                <div class="text">
                                                    <p _msttexthash="309257" _msthash="128">Basic Plus Ranking</p>
                                                    <p class="price" _msttexthash="793780" _msthash="129">€15,90</p>
                                                    <p class="month" _msttexthash="72384" _msthash="130">/Month</p>
                                                </div>
                                                <div class="primary-button yellow  basic ">
                                                    <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="131">+43 (0)5 0485-607</a>
                                                </div>
                                                <div class="all-check-marks">
                                                    <div class="check-mark-slide-container 8 " _msthidden="3">
                                                    </div>
                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="3">
                                                            <div class="check-mark-icon ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>
                                                            </div>
                                                            <p _msttexthash="1724307" _msthash="135">Findability with an additional 5 selected keywords</p>
                                                        </div>
                                                    </div>
                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="4">
                                                            <div class="check-mark-icon ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>
                                                            </div>
                                                            <p _msttexthash="965874" _msthash="136">Priority over free company listings</p>
                                                        </div>
                                                    </div>
                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="5">
                                                            <div style={{ opacity: "0.4" }} class="check-mark-icon ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
                                                                </svg>
                                                            </div>
                                                            <p style={{ opacity: "0.4" }} _msttexthash="1333917" _msthash="137">Pre-ranking over Basis Plus ranking entries</p>
                                                        </div>
                                                    </div>
                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="6">
                                                            <div style={{ opacity: "0.4" }} class="check-mark-icon ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
                                                                </svg>
                                                            </div>
                                                            <p style={{ opacity: "0.4" }} _msttexthash="1038726" _msthash="138">Pre-ranking over top-ranking entries</p>
                                                        </div>
                                                    </div>
                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="7">
                                                            <div style={{ opacity: "0.4" }} class="check-mark-icon ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
                                                                </svg>
                                                            </div>
                                                            <p style={{ opacity: "0.4" }} _msttexthash="1766856" _msthash="139">Findability with an additional 10 selected keywords</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-priceindex="1" class="card basic-card slick-slide" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" data-slick-index="1" aria-hidden="true">


                                                <div class="text">
                                                    <p _msttexthash="154050" _msthash="140">Top Ranking</p>
                                                    <p class="price" _msttexthash="793234" _msthash="141">€31,70</p>
                                                    <p class="month" _msttexthash="72384" _msthash="142">/Month</p>
                                                </div>

                                                <div class="primary-button yellow  basic ">
                                                    <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="143">+43 (0)5 0485-607</a>
                                                </div>

                                                <div class="all-check-marks">
                                                    <div class="check-mark-slide-container 8 " _msthidden="3">




                                                    </div>


                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="3">
                                                            <div class="check-mark-icon ">



                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>




                                                            </div>
                                                            <p _msttexthash="1724307" _msthash="147">Findability with an additional 5 selected keywords</p>
                                                        </div>



                                                    </div>



                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="4">
                                                            <div class="check-mark-icon ">



                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>




                                                            </div>
                                                            <p _msttexthash="965874" _msthash="148">Priority over free company listings</p>
                                                        </div>



                                                    </div>



                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="5">
                                                            <div class="check-mark-icon ">



                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>




                                                            </div>
                                                            <p _msttexthash="1333917" _msthash="149"> Pre-ranking over Basis Plus ranking entries</p>
                                                        </div>



                                                    </div>



                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="6">
                                                            <div style={{ opacity: "0.4" }} class="check-mark-icon ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
                                                                </svg>
                                                            </div>
                                                            <p style={{ opacity: "0.4" }} _msttexthash="1038726" _msthash="150">Pre-ranking over top-ranking entries</p>
                                                        </div>



                                                    </div>



                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="7">
                                                            <div style={{ opacity: "0.4" }} class="check-mark-icon ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
                                                                </svg>
                                                            </div>
                                                            <p style={{ opacity: "0.4" }} _msttexthash="1766856" _msthash="151">Findability with an additional 10 selected keywords</p>
                                                        </div>



                                                    </div>

                                                </div>
                                            </div><div data-priceindex="2" class="bestseller-card card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(254, 198, 0)", width: "320px" }} tabindex="0" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02" data-slick-index="2" aria-hidden="false">

                                                <div class="primary-button bestseller">
                                                    <a href="tel:00432236907235" tabindex="0" _msttexthash="287274" _msthash="152">Best performance</a>
                                                </div>

                                                <div class="text">
                                                    <p _msttexthash="255697" _msthash="153">Premium Ranking</p>
                                                    <p class="price" _msttexthash="793078" _msthash="154">€54,20</p>
                                                    <p class="month" _msttexthash="72384" _msthash="155">/Month</p>
                                                </div>

                                                <div class="primary-button yellow ">
                                                    <a href="tel:00432236907235" tabindex="0" _msttexthash="136305" _msthash="156">+43 (0)5 0485-607</a>
                                                </div>

                                                <div class="all-check-marks">
                                                    <div class="check-mark-slide-container 8 " _msthidden="3">

                                                    </div>


                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="3">
                                                            <div class="check-mark-icon ">

                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>

                                                            </div>
                                                            <p _msttexthash="1724307" _msthash="160">Findability with an additional 5 selected keywords</p>
                                                        </div>



                                                    </div>



                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="4">
                                                            <div class="check-mark-icon ">

                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>

                                                            </div>
                                                            <p _msttexthash="965874" _msthash="161">Priority over free company listings</p>
                                                        </div>



                                                    </div>



                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="5">
                                                            <div class="check-mark-icon ">

                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>

                                                            </div>
                                                            <p _msttexthash="1333917" _msthash="162">Pre-ranking over Basis Plus ranking entries</p>
                                                        </div>



                                                    </div>



                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="6">
                                                            <div class="check-mark-icon ">

                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>

                                                            </div>
                                                            <p _msttexthash="1038726" _msthash="163">Pre-ranking over top-ranking entries</p>
                                                        </div>



                                                    </div>



                                                    <div class="check-mark-wrapper 8 2  ">
                                                        <div class="check-mark" data-tooltip="7">
                                                            <div class="check-mark-icon ">

                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>

                                                            </div>
                                                            <p _msttexthash="1766856" _msthash="164">Findability with an additional 10 selected keywords</p>
                                                        </div>



                                                    </div>

                                                </div>
                                            </div></div></div></div>

                                <div class="decision">
                                    <a href="#" _msttexthash="339469" _msthash="165">VIEW ALL PACKAGE DETAILS</a>
                                </div>


                                <div class="arrows_usp herold_arrows_wrapper" style={{ marginTop: '50px' }} _msthidden="1">
                                    <span class="usp_prev_arrow herold_slick_btn_4 slick-arrow" style={{}} _mstmutation="1">
                                        <img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>

                                    <span class="arrows_usp_between">
                                        <ul class="slick-dots" style={{}} role="tablist">
                                            <li className={index === 0 ? "slick-active" : ""} role="presentation"><button onClick={() => { setIndex(0) }} type="button" role="tab" id="slick-slide-control10" aria-controls="slick-slide10" aria-label="1 of 3" tabindex="0" _mstaria-label="34567" _msthash="264" _msttexthash="4459" aria-selected="true">1</button></li>
                                            <li className={index === 1 ? "slick-active" : ""} role="presentation"><button onClick={() => { setIndex(1) }} type="button" role="tab" id="slick-slide-control11" aria-controls="slick-slide11" aria-label="2 of 3" tabindex="-1" _mstaria-label="34658" _msthash="265" _msttexthash="4550">2</button></li>
                                            <li role="presentation" className={index === 2 ? "slick-active" : ""}><button onClick={() => { setIndex(2) }} type="button" role="tab" id="slick-slide-control12" aria-controls="slick-slide12" aria-label="3 of 3" tabindex="-1" _mstaria-label="34749" _msthash="266" _msttexthash="4641">3</button></li></ul></span>
                                    <span class="usp_next_arrow herold_slick_btn_4 slick-arrow" style={{}} _mstmutation="1"><img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                </div>
                            </div>


                        </div>
                    </>
                    :
                    <>
                        <div class="block">
                            <div class="block-inner container">
                                <div class="title-head">
                                    <h2 style={{ textAlign: "center" }} _msttexthash="830505" _msthash="126">For more visibility that pays off.</h2>
                                    <h3 _msttexthash="651274" _msthash="127">Your company, your solution:</h3>
                                </div>
                                <div class="cardos-slider">






                                    <div data-priceindex="0" class="card basic-card" style={{ backgroundColor: "" }} tabindex="0" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">


                                        <div class="text">
                                            <p _msttexthash="309257" _msthash="128">Basic Plus Ranking</p>
                                            <p class="price" _msttexthash="793780" _msthash="129">€15,90</p>
                                            <p class="month" _msttexthash="72384" _msthash="130">/Month</p>
                                        </div>

                                        <div class="primary-button yellow  basic ">
                                            <a href="tel:00432236907235" tabindex="0" _msttexthash="136305" _msthash="131">+43 (0)5 0485-607</a>
                                        </div>

                                        <div class="all-check-marks">
                                            <div class="check-mark-slide-container 8 " _msthidden="3">

                                                <div class="check-mark-wrapper 8 2  " _msthidden="1">


                                                </div>
                                            </div>


                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="3">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="1724307" _msthash="135">Findability with an additional 5 selected keywords</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="4">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="965874" _msthash="136">Priority over free company listings</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="5">
                                                    <div style={{ opacity: "0.4" }} class="check-mark-icon ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
                                                        </svg>
                                                    </div>
                                                    <p style={{ opacity: "0.4" }} _msttexthash="1333917" _msthash="137">Pre-ranking over Basis Plus ranking entries</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="6">
                                                    <div style={{ opacity: "0.4" }} class="check-mark-icon ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
                                                        </svg>
                                                    </div>
                                                    <p style={{ opacity: "0.4" }} _msttexthash="1038726" _msthash="138">Pre-ranking over top-ranking entries</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="7">
                                                    <div style={{ opacity: "0.4" }} class="check-mark-icon ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
                                                        </svg>
                                                    </div>
                                                    <p style={{ opacity: "0.4" }} _msttexthash="1766856" _msthash="139">Findability with an additional 10 selected keywords</p>
                                                </div>



                                            </div>

                                        </div>
                                    </div><div data-priceindex="1" class="card basic-card" style={{ backgroundColor: "" }} tabindex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01">


                                        <div class="text">
                                            <p _msttexthash="154050" _msthash="140">Top Ranking</p>
                                            <p class="price" _msttexthash="793234" _msthash="141">€31,70</p>
                                            <p class="month" _msttexthash="72384" _msthash="142">/Month</p>
                                        </div>

                                        <div class="primary-button yellow  basic ">
                                            <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="143">+43 (0)5 0485-607</a>
                                        </div>

                                        <div class="all-check-marks">
                                            <div class="check-mark-slide-container 8 " _msthidden="3">

                                                <div class="check-mark-wrapper 8 2  " _msthidden="1">



                                                </div>
                                            </div>


                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="3">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="1724307" _msthash="147">Findability with an additional 5 selected keywords</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="4">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="965874" _msthash="148">Priority over free company listings</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="5">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="1333917" _msthash="149"> Pre-ranking over Basis Plus ranking entries</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="6">
                                                    <div style={{ opacity: "0.4" }} class="check-mark-icon ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
                                                        </svg>
                                                    </div>
                                                    <p style={{ opacity: "0.4" }} _msttexthash="1038726" _msthash="150">Pre-ranking over top-ranking entries</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="7">
                                                    <div style={{ opacity: "0.4" }} class="check-mark-icon ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
                                                        </svg>
                                                    </div>
                                                    <p style={{ opacity: "0.4" }} _msttexthash="1766856" _msthash="151">Findability with an additional 10 selected keywords</p>
                                                </div>



                                            </div>

                                        </div>
                                    </div><div data-priceindex="2" class="bestseller-card card" style={{ backgroundColor: "#fec600" }} tabindex="-1" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02">

                                        <div class="primary-button bestseller">
                                            <a href="tel:00432236907235" tabindex="-1" _msttexthash="287274" _msthash="152">Best performance</a>
                                        </div>

                                        <div class="text">
                                            <p _msttexthash="255697" _msthash="153">Premium Ranking</p>
                                            <p class="price" _msttexthash="793078" _msthash="154">€54,20</p>
                                            <p class="month" _msttexthash="72384" _msthash="155">/Month</p>
                                        </div>

                                        <div class="primary-button yellow ">
                                            <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="156">+43 (0)5 0485-607</a>
                                        </div>

                                        <div class="all-check-marks">
                                            <div class="check-mark-slide-container 8 " _msthidden="3">




                                            </div>
                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="3">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="1724307" _msthash="147">Findability with an additional 5 selected keywords</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="4">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="965874" _msthash="148">Priority over free company listings</p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="5">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="1333917" _msthash="149"> Pre-ranking over Basis Plus ranking entries</p>
                                                </div>



                                            </div>




                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="5">
                                                    <div class="check-mark-icon ">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>

                                                    </div>
                                                    <p _msttexthash="1333917" _msthash="162">Pre-ranking over Basis Plus ranking entries</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="6">
                                                    <div class="check-mark-icon ">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>

                                                    </div>
                                                    <p _msttexthash="1038726" _msthash="163">Pre-ranking over top-ranking entries</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 8 2  ">
                                                <div class="check-mark" data-tooltip="7">
                                                    <div class="check-mark-icon ">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>

                                                    </div>
                                                    <p _msttexthash="1766856" _msthash="164">Findability with an additional 10 selected keywords</p>
                                                </div>



                                            </div>

                                        </div>
                                    </div></div>

                                <div class="decision">
                                    <a href="#" _msttexthash="339469" _msthash="165">VIEW ALL PACKAGE DETAILS</a>
                                </div>


                                <div class="arrows_pricing herold_arrows_wrapper" _msthidden="1">
                                    <font _mstmutation="1" _msttexthash="45056349" _msthidden="1" _msthash="166"><span class="pricing_prev_arrow" style={{}} _mstmutation="1">
                                        <img width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>

                                        <span class="pricing_next_arrow" style={{}} _mstmutation="1">
                                            <img width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span></font><div class="arrows_pricing_between"></div>
                                </div>
                            </div>


                        </div>
                    </>
            }
        </>
    )
}