import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsSocialMediaAdvertisementSecondBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index === -1) {
            setIndex(2);
        }
        if (index === 3) {
            setIndex(0)
        }
    }, [index])
    return (
        <>
            {
                isMobile ?
                    <div class="block">
                        <div class="block-inner container">
                            <div class="title-head">
                                <h2 style={{ textAlign: "center" }} _msttexthash="3043404" _msthash="147">Attention &amp; interactions with your business on Facebook and Instagram.</h2>
                                <h3 _msttexthash="1958242" _msthash="148">Choose your plan for social media advertising at Gradimo Skupaj!</h3>
                            </div>
                            <div class="cardos-slider slick-initialized slick-slider slick-dotted">

                                <div class="slick-list draggable">
                                    <div class="slick-track" style={index === 0 ? { opacity: "1", width: "1005px", transform: " translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "1005px", transform: " translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "1005px", transform: " translate3d(-670px, 0px, 0px)" } : {}}>
                                        <div data-priceindex="0" class="card basic-card slick-slide" style={{ backgroundColor: "rgb(235, 240, 247)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" data-slick-index="0" aria-hidden="true">
                                            <div class="text">
                                                <p _msttexthash="59722" _msthash="149">Small</p>
                                                <p class="price" _msttexthash="778180" _msthash="150">€200</p>
                                                <p class="month" _msttexthash="72384" _msthash="151">/Month</p>
                                            </div>

                                            <div class="primary-button yellow  basic ">
                                                <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="152">+43 (0)5 0485-607</a>
                                            </div>

                                            <div class="all-check-marks">
                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="5">
                                                        <div class="check-mark-icon ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="286520" _msthash="158">Call Measurement</p>
                                                    </div>
                                                </div>
                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="6">
                                                        <div class="check-mark-icon ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="266344" _msthash="159">Monthly Reports</p>
                                                    </div>
                                                </div>
                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="7">
                                                        <div class="check-mark-icon ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="87971" _msthash="160">8 Images</p>
                                                    </div>
                                                </div>
                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="8">
                                                        <div class="check-mark-icon ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="198614" _msthash="161">Service Calls</p>
                                                    </div>
                                                </div>
                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="9">
                                                        <div class="check-mark-icon ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="132600" _msthash="162">2 Ad groups</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><div data-priceindex="1" class="bestseller-card card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(63, 108, 179)", width: "320px" }} tabindex="0" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" data-slick-index="1" aria-hidden="false">

                                            <div class="primary-button bestseller">
                                                <a href="tel:00432236907235" tabindex="0" _msttexthash="158561" _msthash="163">Bestseller</a>
                                            </div>

                                            <div class="text">
                                                <p _msttexthash="76596" _msthash="164">Medium</p>
                                                <p class="price" _msttexthash="778388" _msthash="165">€400</p>
                                                <p class="month" _msttexthash="72384" _msthash="166">/Month</p>
                                            </div>

                                            <div class="primary-button yellow ">
                                                <a href="tel:00432236907235" tabindex="0" _msttexthash="136305" _msthash="167">+43 (0)5 0485-607</a>
                                            </div>

                                            <div class="all-check-marks">
                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="5">
                                                        <div class="check-mark-icon ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="286520" _msthash="173">Call Measurement</p>
                                                    </div>
                                                </div>
                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="6">
                                                        <div class="check-mark-icon ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>

                                                        </div>
                                                        <p _msttexthash="266344" _msthash="174">Monthly Reports</p>
                                                    </div>
                                                </div>
                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="7">
                                                        <div class="check-mark-icon ">

                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>

                                                        </div>
                                                        <p _msttexthash="87971" _msthash="175">8 Images</p>
                                                    </div>
                                                </div>
                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="8">
                                                        <div class="check-mark-icon ">

                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>

                                                        </div>
                                                        <p _msttexthash="198614" _msthash="176">Service Calls</p>
                                                    </div>
                                                </div>

                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="9">
                                                        <div class="check-mark-icon ">

                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>

                                                        </div>
                                                        <p _msttexthash="132600" _msthash="177">2 Ad groups</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-priceindex="2" class="card basic-card slick-slide" style={{ backgroundColor: "rgb(235, 240, 247)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02" data-slick-index="2" aria-hidden="true">
                                            <div class="text">
                                                <p _msttexthash="58175" _msthash="178">Large</p>
                                                <p class="price" _msttexthash="779285" _msthash="179">€750</p>
                                                <p class="month" _msttexthash="72384" _msthash="180">/Month</p>
                                            </div>
                                            <div class="primary-button yellow  basic ">
                                                <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="181">+43 (0)5 0485-607</a>
                                            </div>
                                            <div class="all-check-marks">
                                                <div class="check-mark-slide-container 10 " _msthidden="5">

                                                </div>
                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="5">
                                                        <div class="check-mark-icon ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="286520" _msthash="187">Call Measurement</p>
                                                    </div>
                                                </div>
                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="6">
                                                        <div class="check-mark-icon ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="266344" _msthash="188">Monthly Reports</p>
                                                    </div>
                                                </div>
                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="7">
                                                        <div class="check-mark-icon ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="100308" _msthash="189">12 Images</p>
                                                    </div>
                                                </div>
                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="8">
                                                        <div class="check-mark-icon ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="198614" _msthash="190">Service Calls</p>
                                                    </div>
                                                </div>
                                                <div class="check-mark-wrapper 10 4  ">
                                                    <div class="check-mark" data-tooltip="9">
                                                        <div class="check-mark-icon ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="132691" _msthash="191">3 Ad groups</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="decision">
                                <a href="#" _msttexthash="339469" _msthash="192">VIEW ALL PACKAGE DETAILS</a>
                            </div>
                            <div class="arrows_pricing herold_arrows_wrapper">
                                <span class="pricing_prev_arrow slick-arrow" style={{}} aria-disabled="false">
                                    <img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" /></span>
                                <span class="arrows_pricing_between">
                                    <ul class="slick-dots" style={{}} role="tablist">
                                        <li className={index === 0 ? "slick-active" : ""} role="presentation">
                                            <button onClick={() => { setIndex(0) }} type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 3" tabindex="-1" _mstaria-label="34567" _msthash="345" _msttexthash="4459">1</button></li>
                                        <li className={index === 1 ? "slick-active" : ""} role="presentation">
                                            <button onClick={() => { setIndex(1) }} type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 3" tabindex="0" _mstaria-label="34658" _msthash="346" _msttexthash="4550" aria-selected="true">2</button>
                                        </li><li className={index === 2 ? "slick-active" : ""} role="presentation">
                                            <button onClick={() => { setIndex(2) }} type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 3" tabindex="-1" _mstaria-label="34749" _msthash="347" _msttexthash="4641">3</button>
                                        </li></ul></span>
                                <span class="pricing_next_arrow slick-arrow" aria-disabled="false">
                                    <img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" /></span>
                            </div>
                        </div>


                    </div>
                    :
                    <>
                        <div class="block">
                            <div class="block-inner container">
                                <div class="title-head">
                                    <h2 style={{ textAlign: "center" }} _msttexthash="3043404" _msthash="131">Attention &amp; interactions with your business on Facebook and Instagram.</h2>
                                    <h3 _msttexthash="1958242" _msthash="132">Choose your plan for social media advertising at Gradimo Skupaj!</h3>
                                </div>
                                <div class="cardos-slider">






                                    <div data-priceindex="0" class="card basic-card" style={{ backgroundColor: "#ebf0f7" }} tabindex="-1" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">


                                        <div class="text">
                                            <p _msttexthash="59722" _msthash="133">Small</p>
                                            <p class="price" _msttexthash="778180" _msthash="134">€200</p>
                                            <p class="month" _msttexthash="72384" _msthash="135">/Month</p>
                                        </div>

                                        <div class="primary-button yellow  basic ">
                                            <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="136">+43 (0)5 0485-607</a>
                                        </div>

                                        <div class="all-check-marks">
                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="5">
                                                    <div class="check-mark-icon ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="286520" _msthash="142">Call Measurement</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="6">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="266344" _msthash="143">Monthly Reports</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="7">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="87971" _msthash="144">8 Images</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="8">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="198614" _msthash="145">Service Calls</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="9">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="132600" _msthash="146">2 Ad groups</p>
                                                </div>



                                            </div>

                                        </div>
                                    </div><div data-priceindex="1" class="bestseller-card card" style={{ backgroundColor: "#3f6cb3" }} tabindex="0" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01">

                                        <div class="primary-button bestseller">
                                            <a href="tel:00432236907235" tabindex="0" _msttexthash="158561" _msthash="147">Bestseller</a>
                                        </div>

                                        <div class="text">
                                            <p _msttexthash="76596" _msthash="148">Medium</p>
                                            <p class="price" _msttexthash="778388" _msthash="149">€400</p>
                                            <p class="month" _msttexthash="72384" _msthash="150">/Month</p>
                                        </div>

                                        <div class="primary-button yellow ">
                                            <a href="tel:00432236907235" tabindex="0" _msttexthash="136305" _msthash="151">+43 (0)5 0485-607</a>
                                        </div>

                                        <div class="all-check-marks">
                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="5">
                                                    <div class="check-mark-icon ">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>

                                                    </div>
                                                    <p _msttexthash="286520" _msthash="157">Call Measurement</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="6">
                                                    <div class="check-mark-icon ">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>

                                                    </div>
                                                    <p _msttexthash="266344" _msthash="158">Monthly Reports</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="7">
                                                    <div class="check-mark-icon ">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>

                                                    </div>
                                                    <p _msttexthash="87971" _msthash="159">8 Images</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="8">
                                                    <div class="check-mark-icon ">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>

                                                    </div>
                                                    <p _msttexthash="198614" _msthash="160">Service Calls</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="9">
                                                    <div class="check-mark-icon ">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>

                                                    </div>
                                                    <p _msttexthash="132600" _msthash="161">2 Ad groups</p>
                                                </div>



                                            </div>

                                        </div>
                                    </div><div data-priceindex="2" class="card basic-card" style={{ backgroundColor: "#ebf0f7" }} tabindex="-1" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02">


                                        <div class="text">
                                            <p _msttexthash="58175" _msthash="162">Large</p>
                                            <p class="price" _msttexthash="779285" _msthash="163">€750</p>
                                            <p class="month" _msttexthash="72384" _msthash="164">/Month</p>
                                        </div>

                                        <div class="primary-button yellow  basic ">
                                            <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="165">+43 (0)5 0485-607</a>
                                        </div>

                                        <div class="all-check-marks">
                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="5">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="286520" _msthash="171">Call Measurement</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="6">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="266344" _msthash="172">Monthly Reports</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="7">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="100308" _msthash="173">12 Images</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="8">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="198614" _msthash="174">Service Calls</p>
                                                </div>



                                            </div>



                                            <div class="check-mark-wrapper 10 4  ">
                                                <div class="check-mark" data-tooltip="9">
                                                    <div class="check-mark-icon ">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                    </div>
                                                    <p _msttexthash="132691" _msthash="175">3 Ad groups</p>
                                                </div>



                                            </div>

                                        </div>
                                    </div></div>

                                <div class="decision">
                                    <a href="#" _msttexthash="339469" _msthash="176">VIEW ALL PACKAGE DETAILS</a>
                                </div>


                                <div class="arrows_pricing herold_arrows_wrapper" _msthidden="1">
                                    <font _mstmutation="1" _msttexthash="45056349" _msthidden="1" _msthash="177"><span class="pricing_prev_arrow" style={{}} _mstmutation="1">
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