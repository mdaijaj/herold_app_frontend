import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsGoogleBannerAdvertisementSecondBlock = () => {
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
                                    <h2 style={{ textAlign: "center" }} _msttexthash="1065064" _msthash="321">Online advertising that is affordable.</h2>
                                    <h3 _msttexthash="1286298" _msthash="322">Choose your Google Banner Advertising plan.</h3>
                                </div>
                                <div class="cardos-slider slick-initialized slick-slider slick-dotted">
                                    <div class="slick-list draggable"><div class="slick-track" style={index === 0 ? { opacity: "1", width: "1005px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "1005px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "1005px", transform: "translate3d(-670px, 0px, 0px)" } : {}}><div data-priceindex="0" class="card basic-card slick-slide" style={{ backgroundColor: "rgb(253, 238, 234)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" data-slick-index="0" aria-hidden="true">


                                        <div class="text">
                                            <p _msttexthash="59722" _msthash="323">Small</p>
                                            <p class="price" _msttexthash="779012" _msthash="324">€180</p>
                                            <p class="month" _msttexthash="72384" _msthash="325">/Month</p>
                                        </div>

                                        <div class="primary-button yellow  basic ">
                                            <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="326">+43 (0)5 0485-607</a>
                                        </div>

                                        <div class="all-check-marks">
                                            <div class="check-mark-slide-container 7 " _msthidden="4">

                                                <div class="check-mark-wrapper 7 1  clickable" _msthidden="2">


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="1" _msthidden="1">
                                                        <p _msttexthash="2590679" _msthidden="1" _msthash="330">Von Google zertifizierte Expert:innen setzen deine Kampagne um. </p>
                                                    </div>

                                                </div>
                                            </div>


                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="2">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>





                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="461708" _msthash="331">Ongoing Optimizations</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="2">
                                                    <p _msttexthash="8346325" _msthash="332">We continuously optimize the ads and their content (text and images) so that your budget is used as efficiently as possible. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="3">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>





                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="266344" _msthash="333">Monthly Reports</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="3">
                                                    <p _msttexthash="4653571" _msthash="334">With the monthly performance report, you are always aware of the success of your campaign. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="4">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>





                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="87516" _msthash="335">3 Images</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="4">
                                                    <p _msttexthash="17750642" _msthash="336">High-quality images are essential for campaign success. Don't have any matching images? We are happy to take industry-specific images from our extensive database for your campaign. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="5">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>





                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="653627" _msthash="337">Service calls (every 3 months)</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="5">
                                                    <p _msttexthash="2325115" _msthash="338">We'll call you regularly to keep you updated on your campaign. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="6">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>





                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="495690" _msthash="339">Analyses (every 6 months)</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="6">
                                                    <p _msttexthash="7685132" _msthash="340">Every 3-6 months, our certified experts analyze your campaigns and come back to you with optimizations if necessary. </p>
                                                </div>

                                            </div>

                                        </div>
                                    </div><div data-priceindex="1" class="bestseller-card card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(229, 89, 52)", width: "320px" }} tabindex="0" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" data-slick-index="1" aria-hidden="false">

                                            <div class="primary-button bestseller">
                                                <a href="tel:00432236907235" tabindex="0" _msttexthash="158561" _msthash="341">Bestseller</a>
                                            </div>

                                            <div class="text">
                                                <p _msttexthash="76596" _msthash="342">Medium</p>
                                                <p class="price" _msttexthash="778388" _msthash="343">€400</p>
                                                <p class="month" _msttexthash="72384" _msthash="344">/Month</p>
                                            </div>

                                            <div class="primary-button yellow ">
                                                <a href="tel:00432236907235" tabindex="0" _msttexthash="136305" _msthash="345">+43 (0)5 0485-607</a>
                                            </div>

                                            <div class="all-check-marks">
                                                <div class="check-mark-slide-container 7 " _msthidden="4">

                                                    <div class="check-mark-wrapper 7 1  clickable" _msthidden="2">

                                                    </div>
                                                </div>


                                                <div class="check-mark-wrapper 7 1  clickable">
                                                    <div class="check-mark" data-tooltip="2">
                                                        <div class="check-mark-icon tooltip-icon">

                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>


                                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                                <g>
                                                                    <g>
                                                                        <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="461708" _msthash="350">Ongoing Optimizations</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="2">
                                                        <p _msttexthash="8346325" _msthash="351">We continuously optimize the ads and their content (text and images) so that your budget is used as efficiently as possible. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 7 1  clickable">
                                                    <div class="check-mark" data-tooltip="3">
                                                        <div class="check-mark-icon tooltip-icon">

                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>


                                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                                <g>
                                                                    <g>
                                                                        <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="266344" _msthash="352">Monthly Reports</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="3">
                                                        <p _msttexthash="4653571" _msthash="353">With the monthly performance report, you are always aware of the success of your campaign. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 7 1  clickable">
                                                    <div class="check-mark" data-tooltip="4">
                                                        <div class="check-mark-icon tooltip-icon">

                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>


                                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                                <g>
                                                                    <g>
                                                                        <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="87516" _msthash="354">3 Images</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="4">
                                                        <p _msttexthash="17750642" _msthash="355">High-quality images are essential for campaign success. Don't have any matching images? We are happy to take industry-specific images from our extensive database for your campaign. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 7 1  clickable">
                                                    <div class="check-mark" data-tooltip="5">
                                                        <div class="check-mark-icon tooltip-icon">

                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>


                                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                                <g>
                                                                    <g>
                                                                        <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="653302" _msthash="356">Service calls (every 2 months)</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="5">
                                                        <p _msttexthash="2325115" _msthash="357">We'll call you regularly to keep you updated on your campaign. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 7 1  clickable">
                                                    <div class="check-mark" data-tooltip="6">
                                                        <div class="check-mark-icon tooltip-icon">

                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>


                                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                                <g>
                                                                    <g>
                                                                        <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="495690" _msthash="358">Analyses (every 6 months)</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="6">
                                                        <p _msttexthash="7685132" _msthash="359">Every 3-6 months, our certified experts analyze your campaigns and come back to you with optimizations if necessary. </p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div><div data-priceindex="2" class="card basic-card slick-slide" style={{ backgroundColor: "rgb(253, 238, 234)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02" data-slick-index="2" aria-hidden="true">


                                            <div class="text">
                                                <p _msttexthash="58175" _msthash="360">Large</p>
                                                <p class="price" _msttexthash="779285" _msthash="361">€750</p>
                                                <p class="month" _msttexthash="72384" _msthash="362">/Month</p>
                                            </div>

                                            <div class="primary-button yellow  basic ">
                                                <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="363">+43 (0)5 0485-607</a>
                                            </div>

                                            <div class="all-check-marks">
                                                <div class="check-mark-slide-container 7 " _msthidden="4">

                                                    <div class="check-mark-wrapper 7 1  clickable" _msthidden="2">



                                                    </div>
                                                </div>


                                                <div class="check-mark-wrapper 7 1  clickable">
                                                    <div class="check-mark" data-tooltip="2">
                                                        <div class="check-mark-icon tooltip-icon">



                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>





                                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                                <g>
                                                                    <g>
                                                                        <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="461708" _msthash="368">Ongoing Optimizations</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="2">
                                                        <p _msttexthash="8346325" _msthash="369">We continuously optimize the ads and their content (text and images) so that your budget is used as efficiently as possible. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 7 1  clickable">
                                                    <div class="check-mark" data-tooltip="3">
                                                        <div class="check-mark-icon tooltip-icon">



                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>





                                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                                <g>
                                                                    <g>
                                                                        <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="266344" _msthash="370">Monthly Reports</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="3">
                                                        <p _msttexthash="4653571" _msthash="371">With the monthly performance report, you are always aware of the success of your campaign. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 7 1  clickable">
                                                    <div class="check-mark" data-tooltip="4">
                                                        <div class="check-mark-icon tooltip-icon">



                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>





                                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                                <g>
                                                                    <g>
                                                                        <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="87698" _msthash="372">5 Images</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="4">
                                                        <p _msttexthash="17750642" _msthash="373">High-quality images are essential for campaign success. Don't have any matching images? We are happy to take industry-specific images from our extensive database for your campaign. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 7 1  clickable">
                                                    <div class="check-mark" data-tooltip="5">
                                                        <div class="check-mark-icon tooltip-icon">



                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>





                                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                                <g>
                                                                    <g>
                                                                        <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="461942" _msthash="374">Service calls (monthly)</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="5">
                                                        <p _msttexthash="2325115" _msthash="375">We'll call you regularly to keep you updated on your campaign. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 7 1  clickable">
                                                    <div class="check-mark" data-tooltip="6">
                                                        <div class="check-mark-icon tooltip-icon">



                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>





                                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                                <g>
                                                                    <g>
                                                                        <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <p _msttexthash="494871" _msthash="376">Analyses (every 3 months)</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="6">
                                                        <p _msttexthash="7685132" _msthash="377">Every 3-6 months, our certified experts analyze your campaigns and come back to you with optimizations if necessary. </p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div></div></div></div>

                                <div class="decision">
                                    <a href="#" _msttexthash="339469" _msthash="378">VIEW ALL PACKAGE DETAILS</a>
                                </div>


                                <div class="arrows_pricing herold_arrows_wrapper" _msthidden="1">
                                    <span class="pricing_prev_arrow slick-arrow" onClick={() => { }} style={{}} _mstmutation="1" aria-disabled="false">
                                        <img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>

                                    <span class="arrows_pricing_between"><ul class="slick-dots" style={{}} role="tablist">
                                        <li className={index === 0 ? "slick-active" : ""} role="presentation"><button onClick={() => { setIndex(0) }} type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 3" tabindex="-1" _mstaria-label="34567" _msthash="453" _msttexthash="4459">1</button></li>
                                        <li className={index === 1 ? "slick-active" : ""} role="presentation"><button onClick={() => { setIndex(1) }} type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 3" tabindex="0" _mstaria-label="34658" _msthash="454" _msttexthash="4550" aria-selected="true">2</button></li>
                                        <li className={index === 2 ? "slick-active" : ""} role="presentation"><button onClick={() => { setIndex(2) }} type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 3" tabindex="-1" _mstaria-label="34749" _msthash="455" _msttexthash="4641">3</button></li></ul></span>
                                    <span class="pricing_next_arrow slick-arrow" style={{}} _mstmutation="1" aria-disabled="false">
                                        <img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>

                                </div>
                            </div>


                        </div>
                    </>
                    :
                    <>
                        <div class="block">
                            <div class="block-inner container">
                                <div class="title-head">
                                    <h2 style={{ textAlign: "center" }} _msttexthash="1065064" _msthash="321">Online advertising that is affordable.</h2>
                                    <h3 _msttexthash="1286298" _msthash="322">Choose your Google Banner Advertising plan.</h3>
                                </div>
                                <div class="cardos-slider">






                                    <div data-priceindex="0" class="card basic-card" style={{ backgroundColor: "#fdeeea" }} tabindex="-1" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">


                                        <div class="text">
                                            <p _msttexthash="59722" _msthash="323">Small</p>
                                            <p class="price" _msttexthash="779012" _msthash="324">€180</p>
                                            <p class="month" _msttexthash="72384" _msthash="325">/Month</p>
                                        </div>

                                        <div class="primary-button yellow  basic ">
                                            <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="326">+43 (0)5 0485-607</a>
                                        </div>

                                        <div class="all-check-marks">
                                            <div class="check-mark-slide-container 7 " _msthidden="4">

                                                <div class="check-mark-wrapper 7 1  clickable" _msthidden="2">

                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="1" _msthidden="1">
                                                        <p _msttexthash="2590679" _msthidden="1" _msthash="330">Von Google zertifizierte Expert:innen setzen deine Kampagne um. </p>
                                                    </div>

                                                </div>
                                            </div>


                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="2">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>





                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="461708" _msthash="331">Ongoing Optimizations</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="2">
                                                    <p _msttexthash="8346325" _msthash="332">We continuously optimize the ads and their content (text and images) so that your budget is used as efficiently as possible. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="3">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>





                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="266344" _msthash="333">Monthly Reports</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="3">
                                                    <p _msttexthash="4653571" _msthash="334">With the monthly performance report, you are always aware of the success of your campaign. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="4">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>





                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="87516" _msthash="335">3 Images</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="4">
                                                    <p _msttexthash="17750642" _msthash="336">High-quality images are essential for campaign success. Don't have any matching images? We are happy to take industry-specific images from our extensive database for your campaign. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="5">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>





                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="653627" _msthash="337">Service calls (every 3 months)</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="5">
                                                    <p _msttexthash="2325115" _msthash="338">We'll call you regularly to keep you updated on your campaign. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="6">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>





                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="495690" _msthash="339">Analyses (every 6 months)</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="6">
                                                    <p _msttexthash="7685132" _msthash="340">Every 3-6 months, our certified experts analyze your campaigns and come back to you with optimizations if necessary. </p>
                                                </div>

                                            </div>

                                        </div>
                                    </div><div data-priceindex="1" class="bestseller-card card" style={{ backgroundColor: "#e55934" }} tabindex="0" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01">

                                        <div class="primary-button bestseller">
                                            <a href="tel:00432236907235" tabindex="0" _msttexthash="158561" _msthash="341">Bestseller</a>
                                        </div>

                                        <div class="text">
                                            <p _msttexthash="76596" _msthash="342">Medium</p>
                                            <p class="price" _msttexthash="778388" _msthash="343">€400</p>
                                            <p class="month" _msttexthash="72384" _msthash="344">/Month</p>
                                        </div>

                                        <div class="primary-button yellow ">
                                            <a href="tel:00432236907235" tabindex="0" _msttexthash="136305" _msthash="345">+43 (0)5 0485-607</a>
                                        </div>

                                        <div class="all-check-marks">
                                            <div class="check-mark-slide-container 7 " _msthidden="4">

                                                <div class="check-mark-wrapper 7 1  clickable" _msthidden="2">


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="1" _msthidden="1">
                                                        <p _msttexthash="2590679" _msthidden="1" _msthash="349">Von Google zertifizierte Expert:innen setzen deine Kampagne um. </p>
                                                    </div>

                                                </div>
                                            </div>


                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="2">
                                                    <div class="check-mark-icon tooltip-icon">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>


                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="461708" _msthash="350">Ongoing Optimizations</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="2">
                                                    <p _msttexthash="8346325" _msthash="351">We continuously optimize the ads and their content (text and images) so that your budget is used as efficiently as possible. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="3">
                                                    <div class="check-mark-icon tooltip-icon">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>


                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="266344" _msthash="352">Monthly Reports</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="3">
                                                    <p _msttexthash="4653571" _msthash="353">With the monthly performance report, you are always aware of the success of your campaign. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="4">
                                                    <div class="check-mark-icon tooltip-icon">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>


                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="87516" _msthash="354">3 Images</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="4">
                                                    <p _msttexthash="17750642" _msthash="355">High-quality images are essential for campaign success. Don't have any matching images? We are happy to take industry-specific images from our extensive database for your campaign. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="5">
                                                    <div class="check-mark-icon tooltip-icon">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>


                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="653302" _msthash="356">Service calls (every 2 months)</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="5">
                                                    <p _msttexthash="2325115" _msthash="357">We'll call you regularly to keep you updated on your campaign. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="6">
                                                    <div class="check-mark-icon tooltip-icon">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>


                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="495690" _msthash="358">Analyses (every 6 months)</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="6">
                                                    <p _msttexthash="7685132" _msthash="359">Every 3-6 months, our certified experts analyze your campaigns and come back to you with optimizations if necessary. </p>
                                                </div>

                                            </div>

                                        </div>
                                    </div><div data-priceindex="2" class="card basic-card" style={{ backgroundColor: "#fdeeea" }} tabindex="-1" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02">


                                        <div class="text">
                                            <p _msttexthash="58175" _msthash="360">Large</p>
                                            <p class="price" _msttexthash="779285" _msthash="361">€750</p>
                                            <p class="month" _msttexthash="72384" _msthash="362">/Month</p>
                                        </div>

                                        <div class="primary-button yellow  basic ">
                                            <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="363">+43 (0)5 0485-607</a>
                                        </div>

                                        <div class="all-check-marks">
                                            <div class="check-mark-slide-container 7 " _msthidden="4">

                                                <div class="check-mark-wrapper 7 1  clickable" _msthidden="2">
                                                </div>
                                            </div>


                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="2">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>





                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="461708" _msthash="368">Ongoing Optimizations</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="2">
                                                    <p _msttexthash="8346325" _msthash="369">We continuously optimize the ads and their content (text and images) so that your budget is used as efficiently as possible. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="3">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>





                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="266344" _msthash="370">Monthly Reports</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="3">
                                                    <p _msttexthash="4653571" _msthash="371">With the monthly performance report, you are always aware of the success of your campaign. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="4">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>




                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="87698" _msthash="372">5 Images</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="4">
                                                    <p _msttexthash="17750642" _msthash="373">High-quality images are essential for campaign success. Don't have any matching images? We are happy to take industry-specific images from our extensive database for your campaign. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="5">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>





                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="461942" _msthash="374">Service calls (monthly)</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="5">
                                                    <p _msttexthash="2325115" _msthash="375">We'll call you regularly to keep you updated on your campaign. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 7 1  clickable">
                                                <div class="check-mark" data-tooltip="6">
                                                    <div class="check-mark-icon tooltip-icon">



                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>





                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" class="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                                C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                                c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                                c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                                c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                                c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                                c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash="494871" _msthash="376">Analyses (every 3 months)</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="6">
                                                    <p _msttexthash="7685132" _msthash="377">Every 3-6 months, our certified experts analyze your campaigns and come back to you with optimizations if necessary. </p>
                                                </div>

                                            </div>

                                        </div>
                                    </div></div>

                                <div class="decision">
                                    <a href="#" _msttexthash="339469" _msthash="378">VIEW ALL PACKAGE DETAILS</a>
                                </div>


                                <div class="arrows_pricing herold_arrows_wrapper" _msthidden="1">
                                    <font _mstmutation="1" _msttexthash="45056349" _msthidden="1" _msthash="379"><span class="pricing_prev_arrow" style={{}} _mstmutation="1"><img width="24" height="24" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3C/svg%3E" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" /></span>

                                        <span class="pricing_next_arrow" style={{}} _mstmutation="1">
                                            <img width="20" height="20" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%3E%3C/svg%3E" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" /></span></font><div class="arrows_pricing_between"></div>
                                </div>
                            </div>


                        </div>
                    </>
            }
        </>
    )
}