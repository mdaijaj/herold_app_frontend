import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsSearchEngineOptimizationSecondBlock = () => {
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
                                    <h2 style={{ textAlign: "center" }} _msttexthash="1223339" _msthash="293">Search engine optimization is worth a try.</h2>
                                    <h3 style={{ textAlign: "center" }} _msttexthash="1455506" _msthash="294">Choose your package for optimized visibility.</h3>
                                </div>
                                <div class="cardos-slider slick-initialized slick-slider slick-dotted">

                                    <div class="slick-list draggable">
                                        <div class="slick-track" style={index === 0 ? { opacity: "1", width: "1005px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "1005px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "1005px", transform: "translate3d(-670px, 0px, 0px)" } : {}}><div data-priceindex="0" class="card basic-card slick-slide" style={{ backgroundColor: "rgb(244, 242, 249)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" data-slick-index="0" aria-hidden="true">


                                            <div class="text">
                                                <p _msttexthash="57356" _msthash="147">Basic</p>
                                                <p class="price" _msttexthash="773721" _msthash="148">€99</p>
                                                <p class="month" _msttexthash="79482" _msthash="149">/Month*</p>
                                            </div>

                                            <div class="primary-button yellow  basic ">
                                                <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="150">+43 (0)5 0485-607</a>
                                            </div>

                                            <div class="all-check-marks">
                                                <div class="check-mark-slide-container 12 ">

                                                    <div class="check-mark-wrapper 12 6  clickable">
                                                        <div class="check-mark" data-tooltip="0">
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
                                                            <p _msttexthash="320567" _msthash="151">2 Monthly SEO Checks</p>
                                                        </div>


                                                        <div class="check-mark check-mark-tooltip" data-tooltiptext="0">
                                                            <p _msttexthash="2755311" _msthash="152">We check the status of your website's SEO measures in several checks. </p>
                                                        </div>

                                                    </div>



                                                    <div class="check-mark-wrapper 12 6  clickable">
                                                        <div class="check-mark" data-tooltip="1">
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
                                                            <p _msttexthash="292409" _msthash="153">Initial analysis</p>
                                                        </div>


                                                        <div class="check-mark check-mark-tooltip" data-tooltiptext="1">
                                                            <p _msttexthash="1482325" _msthash="154">We carry out an initial SEO check of your website. </p>
                                                        </div>

                                                    </div>



                                                    <div class="check-mark-wrapper 12 6  clickable">
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
                                                            <p _msttexthash="289536" _msthash="155">Content Analysis</p>
                                                        </div>


                                                        <div class="check-mark check-mark-tooltip" data-tooltiptext="2">
                                                            <p _msttexthash="2842814" _msthash="156">We check the content on your website for search engine optimization. </p>
                                                        </div>

                                                    </div>



                                                    <div class="check-mark-wrapper 12 6  clickable">
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
                                                            <p _msttexthash="288587" _msthash="157">Content Overhaul </p>
                                                        </div>


                                                        <div class="check-mark check-mark-tooltip" data-tooltiptext="3">
                                                            <p _msttexthash="4214912" _msthash="158">We revise and expand the content on your website and optimize it for the search engine. </p>
                                                        </div>

                                                    </div>



                                                    <div class="check-mark-wrapper 12 6  ">
                                                        <div class="check-mark" data-tooltip="4">
                                                            <div class="check-mark-icon ">



                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>




                                                            </div>
                                                            <p _msttexthash="490334" _msthash="159">Google, Bing &amp; Yahoo Setup</p>
                                                        </div>



                                                    </div>



                                                    <div class="check-mark-wrapper 12 6  clickable">
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
                                                            <p _msttexthash="415610" _msthash="160">Organic link building</p>
                                                        </div>


                                                        <div class="check-mark check-mark-tooltip" data-tooltiptext="5">
                                                            <p _msttexthash="1461954" _msthash="161">We build a strong link profile for your website. </p>
                                                        </div>

                                                    </div>



                                                    <div class="check-mark-wrapper 12 6  clickable">
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
                                                            <p _msttexthash="266344" _msthash="162">Monthly Reports</p>
                                                        </div>


                                                        <div class="check-mark check-mark-tooltip" data-tooltiptext="6">
                                                            <p _msttexthash="3789565" _msthash="163">We will send you a detailed report on the SEO performance of your site every month.</p>
                                                        </div>

                                                    </div>
                                                </div>


                                                <div class="check-mark-wrapper 12 6  clickable">
                                                    <div class="check-mark" data-tooltip="7">
                                                        <div style={{ opacity: "0.4" }} class="check-mark-icon tooltip-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
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
                                                        <p style={{ opacity: "0.4" }} _msttexthash="497068" _msthash="164">Technical optimisation</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="7">
                                                        <p _msttexthash="2826824" _msthash="165">We optimize your website for technical search engine optimization. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
                                                    <div class="check-mark" data-tooltip="8">
                                                        <div style={{ opacity: "0.4" }} class="check-mark-icon tooltip-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
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
                                                        <p style={{ opacity: "0.4" }} _msttexthash="500539" _msthash="166">Directory Optimization</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="8">
                                                        <p _msttexthash="2379507" _msthash="167">We'll optimize your site's directory to make it easier to find. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
                                                    <div class="check-mark" data-tooltip="9">
                                                        <div style={{ opacity: "0.4" }} class="check-mark-icon tooltip-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
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
                                                        <p style={{ opacity: "0.4" }} _msttexthash="284921" _msthash="168">Google Analytics </p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="9">
                                                        <p _msttexthash="7530991" _msthash="169">We integrate Google Analytics on your website and optimize your visibility on the Internet based on the evaluation.</p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
                                                    <div class="check-mark" data-tooltip="10">
                                                        <div style={{ opacity: "0.4" }} class="check-mark-icon tooltip-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
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
                                                        <p style={{ opacity: "0.4" }} _msttexthash="178425" _msthash="170">Blog Content</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="10">
                                                        <p _msttexthash="9166690" _msthash="171">Our experienced editorial team creates search engine optimized content for your website that is relevant to your target group. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  ">
                                                    <div class="check-mark" data-tooltip="11">
                                                        <div style={{ opacity: "0.4" }} class="check-mark-icon ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
                                                            </svg>
                                                        </div>
                                                        <p style={{ opacity: "0.4" }} _msttexthash="316160" _msthash="172">Content Marketing</p>
                                                    </div>



                                                </div>

                                            </div>
                                        </div><div data-priceindex="1" class="card basic-card slick-slide" style={{ backgroundColor: "rgb(244, 242, 249)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" data-slick-index="1" aria-hidden="true">


                                                <div class="text">
                                                    <p _msttexthash="76596" _msthash="121">Medium</p>
                                                    <p class="price" _msttexthash="779207" _msthash="122">€217</p>
                                                    <p class="month" _msttexthash="72384" _msthash="123">/Month</p>
                                                </div>

                                                <div class="primary-button yellow  basic ">
                                                    <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="124">+43 (0)5 0485-607</a>
                                                </div>

                                                <div class="all-check-marks">
                                                    <div class="check-mark-slide-container 12 ">

                                                        <div class="check-mark-wrapper 12 6  clickable">
                                                            <div class="check-mark" data-tooltip="0">
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
                                                                <p _msttexthash="320749" _msthash="125">4 Monthly SEO Checks</p>
                                                            </div>


                                                            <div class="check-mark check-mark-tooltip" data-tooltiptext="0">
                                                                <p _msttexthash="2755311" _msthash="126">We check the status of your website's SEO measures in several checks. </p>
                                                            </div>

                                                        </div>



                                                        <div class="check-mark-wrapper 12 6  clickable">
                                                            <div class="check-mark" data-tooltip="1">
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
                                                                <p _msttexthash="292409" _msthash="127">Initial analysis</p>
                                                            </div>


                                                            <div class="check-mark check-mark-tooltip" data-tooltiptext="1">
                                                                <p _msttexthash="1482325" _msthash="128">We carry out an initial SEO check of your website. </p>
                                                            </div>

                                                        </div>



                                                        <div class="check-mark-wrapper 12 6  clickable">
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
                                                                <p _msttexthash="289536" _msthash="129">Content Analysis</p>
                                                            </div>


                                                            <div class="check-mark check-mark-tooltip" data-tooltiptext="2">
                                                                <p _msttexthash="2842814" _msthash="130">We check the content on your website for search engine optimization. </p>
                                                            </div>

                                                        </div>



                                                        <div class="check-mark-wrapper 12 6  clickable">
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
                                                                <p _msttexthash="288587" _msthash="131">Content Overhaul </p>
                                                            </div>


                                                            <div class="check-mark check-mark-tooltip" data-tooltiptext="3">
                                                                <p _msttexthash="4214912" _msthash="132">We revise and expand the content on your website and optimize it for the search engine. </p>
                                                            </div>

                                                        </div>



                                                        <div class="check-mark-wrapper 12 6  ">
                                                            <div class="check-mark" data-tooltip="4">
                                                                <div class="check-mark-icon ">



                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                    </svg>




                                                                </div>
                                                                <p _msttexthash="490334" _msthash="133">Google, Bing &amp; Yahoo Setup</p>
                                                            </div>



                                                        </div>



                                                        <div class="check-mark-wrapper 12 6  clickable">
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
                                                                <p _msttexthash="415610" _msthash="134">Organic link building</p>
                                                            </div>


                                                            <div class="check-mark check-mark-tooltip" data-tooltiptext="5">
                                                                <p _msttexthash="1461954" _msthash="135">We build a strong link profile for your website. </p>
                                                            </div>

                                                        </div>



                                                        <div class="check-mark-wrapper 12 6  clickable">
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
                                                                <p _msttexthash="266344" _msthash="136">Monthly Reports</p>
                                                            </div>


                                                            <div class="check-mark check-mark-tooltip" data-tooltiptext="6">
                                                                <p _msttexthash="3789565" _msthash="137">We will send you a detailed report on the SEO performance of your site every month.</p>
                                                            </div>

                                                        </div>
                                                    </div>


                                                    <div class="check-mark-wrapper 12 6  clickable">
                                                        <div class="check-mark" data-tooltip="7">
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
                                                            <p _msttexthash="497068" _msthash="138">Technical optimisation</p>
                                                        </div>


                                                        <div class="check-mark check-mark-tooltip" data-tooltiptext="7">
                                                            <p _msttexthash="2826824" _msthash="139">We optimize your website for technical search engine optimization. </p>
                                                        </div>

                                                    </div>



                                                    <div class="check-mark-wrapper 12 6  clickable">
                                                        <div class="check-mark" data-tooltip="8">
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
                                                            <p _msttexthash="500539" _msthash="140">Directory Optimization</p>
                                                        </div>


                                                        <div class="check-mark check-mark-tooltip" data-tooltiptext="8">
                                                            <p _msttexthash="2379507" _msthash="141">We'll optimize your site's directory to make it easier to find. </p>
                                                        </div>

                                                    </div>



                                                    <div class="check-mark-wrapper 12 6  clickable">
                                                        <div class="check-mark" data-tooltip="9">
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
                                                            <p _msttexthash="284921" _msthash="142">Google Analytics </p>
                                                        </div>


                                                        <div class="check-mark check-mark-tooltip" data-tooltiptext="9">
                                                            <p _msttexthash="7530991" _msthash="143">We integrate Google Analytics on your website and optimize your visibility on the Internet based on the evaluation.</p>
                                                        </div>

                                                    </div>



                                                    <div class="check-mark-wrapper 12 6  clickable">
                                                        <div class="check-mark" data-tooltip="10">
                                                            <div style={{ opacity: "0.4" }} class="check-mark-icon tooltip-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
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
                                                            <p style={{ opacity: "0.4" }} _msttexthash="178425" _msthash="144">Blog Content</p>
                                                        </div>


                                                        <div class="check-mark check-mark-tooltip" data-tooltiptext="10">
                                                            <p _msttexthash="9166690" _msthash="145">Our experienced editorial team creates search engine optimized content for your website that is relevant to your target group. </p>
                                                        </div>

                                                    </div>



                                                    <div class="check-mark-wrapper 12 6  ">
                                                        <div class="check-mark" data-tooltip="11">
                                                            <div style={{ opacity: "0.4" }} class="check-mark-icon ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
                                                                </svg>
                                                            </div>
                                                            <p style={{ opacity: "0.4" }} _msttexthash="316160" _msthash="146">Content Marketing</p>
                                                        </div>



                                                    </div>

                                                </div>
                                            </div><div data-priceindex="2" class="bestseller-card card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(145, 132, 190)", width: "320px" }} tabindex="0" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02" data-slick-index="2" aria-hidden="false">

                                                <div class="primary-button bestseller">
                                                    <a href="tel:00432236907235" tabindex="0" _msttexthash="287274" _msthash="94">Best performance</a>
                                                </div>

                                                <div class="text">
                                                    <p _msttexthash="47151" _msthash="95">Plus</p>
                                                    <p class="price" _msttexthash="779753" _msthash="96">€375</p>
                                                    <p class="month" _msttexthash="72384" _msthash="97">/Month</p>
                                                </div>

                                                <div class="primary-button yellow ">
                                                    <a href="tel:00432236907235" tabindex="0" _msttexthash="136305" _msthash="98">+43 (0)5 0485-607</a>
                                                </div>

                                                <div class="all-check-marks">
                                                    <div class="check-mark-slide-container 12 ">

                                                        <div class="check-mark-wrapper 12 6  clickable">
                                                            <div class="check-mark" data-tooltip="0">
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
                                                                <p _msttexthash="321022" _msthash="99">7 Monthly SEO Checks</p>
                                                            </div>


                                                            <div class="check-mark check-mark-tooltip" data-tooltiptext="0">
                                                                <p _msttexthash="2755311" _msthash="100">We check the status of your website's SEO measures in several checks. </p>
                                                            </div>

                                                        </div>



                                                        <div class="check-mark-wrapper 12 6  clickable">
                                                            <div class="check-mark" data-tooltip="1">
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
                                                                <p _msttexthash="292409" _msthash="101">Initial analysis</p>
                                                            </div>


                                                            <div class="check-mark check-mark-tooltip" data-tooltiptext="1">
                                                                <p _msttexthash="1482325" _msthash="102">We carry out an initial SEO check of your website. </p>
                                                            </div>

                                                        </div>



                                                        <div class="check-mark-wrapper 12 6  clickable">
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
                                                                <p _msttexthash="289536" _msthash="103">Content Analysis</p>
                                                            </div>


                                                            <div class="check-mark check-mark-tooltip" data-tooltiptext="2">
                                                                <p _msttexthash="2842814" _msthash="104">We check the content on your website for search engine optimization. </p>
                                                            </div>

                                                        </div>



                                                        <div class="check-mark-wrapper 12 6  clickable">
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
                                                                <p _msttexthash="288587" _msthash="105">Content Overhaul </p>
                                                            </div>


                                                            <div class="check-mark check-mark-tooltip" data-tooltiptext="3">
                                                                <p _msttexthash="4214912" _msthash="106">We revise and expand the content on your website and optimize it for the search engine. </p>
                                                            </div>

                                                        </div>



                                                        <div class="check-mark-wrapper 12 6  ">
                                                            <div class="check-mark" data-tooltip="4">
                                                                <div class="check-mark-icon ">

                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                    </svg>

                                                                </div>
                                                                <p _msttexthash="490334" _msthash="107">Google, Bing &amp; Yahoo Setup</p>
                                                            </div>



                                                        </div>



                                                        <div class="check-mark-wrapper 12 6  clickable">
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
                                                                <p _msttexthash="415610" _msthash="108">Organic link building</p>
                                                            </div>


                                                            <div class="check-mark check-mark-tooltip" data-tooltiptext="5">
                                                                <p _msttexthash="1461954" _msthash="109">We build a strong link profile for your website. </p>
                                                            </div>

                                                        </div>



                                                        <div class="check-mark-wrapper 12 6  clickable">
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
                                                                <p _msttexthash="266344" _msthash="110">Monthly Reports</p>
                                                            </div>


                                                            <div class="check-mark check-mark-tooltip" data-tooltiptext="6">
                                                                <p _msttexthash="3789565" _msthash="111">We will send you a detailed report on the SEO performance of your site every month.</p>
                                                            </div>

                                                        </div>
                                                    </div>


                                                    <div class="check-mark-wrapper 12 6  clickable">
                                                        <div class="check-mark" data-tooltip="7">
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
                                                            <p _msttexthash="497068" _msthash="112">Technical optimisation</p>
                                                        </div>


                                                        <div class="check-mark check-mark-tooltip" data-tooltiptext="7">
                                                            <p _msttexthash="2826824" _msthash="113">We optimize your website for technical search engine optimization. </p>
                                                        </div>

                                                    </div>



                                                    <div class="check-mark-wrapper 12 6  clickable">
                                                        <div class="check-mark" data-tooltip="8">
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
                                                            <p _msttexthash="500539" _msthash="114">Directory Optimization</p>
                                                        </div>


                                                        <div class="check-mark check-mark-tooltip" data-tooltiptext="8">
                                                            <p _msttexthash="2379507" _msthash="115">We'll optimize your site's directory to make it easier to find. </p>
                                                        </div>

                                                    </div>



                                                    <div class="check-mark-wrapper 12 6  clickable">
                                                        <div class="check-mark" data-tooltip="9">
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
                                                            <p _msttexthash="284921" _msthash="116">Google Analytics </p>
                                                        </div>


                                                        <div class="check-mark check-mark-tooltip" data-tooltiptext="9">
                                                            <p _msttexthash="7530991" _msthash="117">We integrate Google Analytics on your website and optimize your visibility on the Internet based on the evaluation.</p>
                                                        </div>

                                                    </div>



                                                    <div class="check-mark-wrapper 12 6  clickable">
                                                        <div class="check-mark" data-tooltip="10">
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
                                                            <p _msttexthash="178425" _msthash="118">Blog Content</p>
                                                        </div>


                                                        <div class="check-mark check-mark-tooltip" data-tooltiptext="10">
                                                            <p _msttexthash="9166690" _msthash="119">Our experienced editorial team creates search engine optimized content for your website that is relevant to your target group. </p>
                                                        </div>

                                                    </div>



                                                    <div class="check-mark-wrapper 12 6  ">
                                                        <div class="check-mark" data-tooltip="11">
                                                            <div class="check-mark-icon ">

                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>

                                                            </div>
                                                            <p _msttexthash="316160" _msthash="120">Content Marketing</p>
                                                        </div>



                                                    </div>

                                                </div>
                                            </div></div></div></div>
                                <p _msttexthash="1210313" _msthash="295">*Only in combination with a Gradimo Skupaj website</p>

                                <div class="decision" _msthidden="1">
                                    <a href="#" _msttexthash="397306" _msthidden="1" _msthash="296">VIEW ALL PACKAGE DETAILS</a>
                                </div>


                                <div class="arrows_recommend herold_arrows_wrapper" style={{ marginTop: '50px' }} _msthidden="1">
                                    <span class="recommend_prev_arrow slick-arrow" style={{}}><img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                    <span class="arrows_recommend_between" _msthidden="1"><ul class="slick-dots" style={{}} role="tablist">
                                        <li className={index === 0 ? "slick-active" : ""} role="presentation">
                                            <button onClick={() => { setIndex(0) }} type="button" role="tab" id="slick-slide-control40" aria-controls="slick-slide40" aria-label="1 of 3" tabindex="-1" _mstaria-label="34567" _msthash="348" _msttexthash="4459">1</button></li>
                                        <li role="presentation" className={index === 1 ? "slick-active" : ""}>
                                            <button onClick={() => { setIndex(1) }} type="button" role="tab" id="slick-slide-control41" aria-controls="slick-slide41" aria-label="2 of 3" tabindex="-1" _mstaria-label="34658" _msthash="349" _msttexthash="4550">2</button></li>
                                        <li role="presentation" className={index === 2 ? "slick-active" : ""}>
                                            <button onClick={() => { setIndex(2) }} type="button" role="tab" id="slick-slide-control42" aria-controls="slick-slide42" aria-label="3 of 3" tabindex="0" _mstaria-label="34749" _msthash="350" _msttexthash="4641" aria-selected="true">3</button></li></ul></span>
                                    <span class="recommend_next_arrow slick-arrow" style={{}}><img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                </div>
                            </div>


                        </div>
                    </>
                    :
                    <>
                        <div className="block">
                            <div className="block-inner container">
                                <div class="title-head">
                                    <h2 style={{ textAlign: "center" }} _msttexthash="1223339" _msthash="293">Search engine optimization is worth a try.</h2>
                                    <h3 style={{ textAlign: "center" }} _msttexthash="1455506" _msthash="294">Choose your package for optimized visibility.</h3>
                                </div>
                                <div className="cardos-slider">
                                    <div data-priceindex="0" class="card basic-card" style={{ backgroundColor: "#f4f2f9" }} tabindex="-1" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">


                                        <div class="text">
                                            <p _msttexthash="57356" _msthash="147">Basic</p>
                                            <p class="price" _msttexthash="773721" _msthash="148">€99</p>
                                            <p class="month" _msttexthash="79482" _msthash="149">/Month*</p>
                                        </div>

                                        <div class="primary-button yellow  basic ">
                                            <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="150">+43 (0)5 0485-607</a>
                                        </div>

                                        <div class="all-check-marks">
                                            <div class="check-mark-slide-container 12 ">

                                                <div class="check-mark-wrapper 12 6  clickable">
                                                    <div class="check-mark" data-tooltip="0">
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
                                                        <p _msttexthash="320567" _msthash="151">2 Monthly SEO Checks</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="0">
                                                        <p _msttexthash="2755311" _msthash="152">We check the status of your website's SEO measures in several checks. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
                                                    <div class="check-mark" data-tooltip="1">
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
                                                        <p _msttexthash="292409" _msthash="153">Initial analysis</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="1">
                                                        <p _msttexthash="1482325" _msthash="154">We carry out an initial SEO check of your website. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
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
                                                        <p _msttexthash="289536" _msthash="155">Content Analysis</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="2">
                                                        <p _msttexthash="2842814" _msthash="156">We check the content on your website for search engine optimization. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
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
                                                        <p _msttexthash="288587" _msthash="157">Content Overhaul </p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="3">
                                                        <p _msttexthash="4214912" _msthash="158">We revise and expand the content on your website and optimize it for the search engine. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  ">
                                                    <div class="check-mark" data-tooltip="4">
                                                        <div class="check-mark-icon ">



                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>




                                                        </div>
                                                        <p _msttexthash="490334" _msthash="159">Google, Bing &amp; Yahoo Setup</p>
                                                    </div>



                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
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
                                                        <p _msttexthash="415610" _msthash="160">Organic link building</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="5">
                                                        <p _msttexthash="1461954" _msthash="161">We build a strong link profile for your website. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
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
                                                        <p _msttexthash="266344" _msthash="162">Monthly Reports</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="6">
                                                        <p _msttexthash="3789565" _msthash="163">We will send you a detailed report on the SEO performance of your site every month.</p>
                                                    </div>

                                                </div>
                                            </div>


                                            <div class="check-mark-wrapper 12 6  clickable">
                                                <div class="check-mark" data-tooltip="7">
                                                    <div style={{ opacity: "0.4" }} class="check-mark-icon tooltip-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
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
                                                    <p style={{ opacity: "0.4" }} _msttexthash="497068" _msthash="164">Technical optimisation</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="7">
                                                    <p _msttexthash="2826824" _msthash="165">We optimize your website for technical search engine optimization. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 12 6  clickable">
                                                <div class="check-mark" data-tooltip="8">
                                                    <div style={{ opacity: "0.4" }} class="check-mark-icon tooltip-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
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
                                                    <p style={{ opacity: "0.4" }} _msttexthash="500539" _msthash="166">Directory Optimization</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="8">
                                                    <p _msttexthash="2379507" _msthash="167">We'll optimize your site's directory to make it easier to find. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 12 6  clickable">
                                                <div class="check-mark" data-tooltip="9">
                                                    <div style={{ opacity: "0.4" }} class="check-mark-icon tooltip-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
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
                                                    <p style={{ opacity: "0.4" }} _msttexthash="284921" _msthash="168">Google Analytics </p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="9">
                                                    <p _msttexthash="7530991" _msthash="169">We integrate Google Analytics on your website and optimize your visibility on the Internet based on the evaluation.</p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 12 6  clickable">
                                                <div class="check-mark" data-tooltip="10">
                                                    <div style={{ opacity: "0.4" }} class="check-mark-icon tooltip-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
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
                                                    <p style={{ opacity: "0.4" }} _msttexthash="178425" _msthash="170">Blog Content</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="10">
                                                    <p _msttexthash="9166690" _msthash="171">Our experienced editorial team creates search engine optimized content for your website that is relevant to your target group. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 12 6  ">
                                                <div class="check-mark" data-tooltip="11">
                                                    <div style={{ opacity: "0.4" }} class="check-mark-icon ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
                                                        </svg>
                                                    </div>
                                                    <p style={{ opacity: "0.4" }} _msttexthash="316160" _msthash="172">Content Marketing</p>
                                                </div>



                                            </div>

                                        </div>
                                    </div>
                                    <div data-priceindex="1" class="card basic-card" style={{ backgroundColor: "#f4f2f9" }} tabindex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01">


                                        <div class="text">
                                            <p _msttexthash="76596" _msthash="121">Medium</p>
                                            <p class="price" _msttexthash="779207" _msthash="122">€217</p>
                                            <p class="month" _msttexthash="72384" _msthash="123">/Month</p>
                                        </div>

                                        <div class="primary-button yellow  basic ">
                                            <a href="tel:00432236907235" tabindex="-1" _msttexthash="136305" _msthash="124">+43 (0)5 0485-607</a>
                                        </div>

                                        <div class="all-check-marks">
                                            <div class="check-mark-slide-container 12 ">

                                                <div class="check-mark-wrapper 12 6  clickable">
                                                    <div class="check-mark" data-tooltip="0">
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
                                                        <p _msttexthash="320749" _msthash="125">4 Monthly SEO Checks</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="0">
                                                        <p _msttexthash="2755311" _msthash="126">We check the status of your website's SEO measures in several checks. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
                                                    <div class="check-mark" data-tooltip="1">
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
                                                        <p _msttexthash="292409" _msthash="127">Initial analysis</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="1">
                                                        <p _msttexthash="1482325" _msthash="128">We carry out an initial SEO check of your website. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
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
                                                        <p _msttexthash="289536" _msthash="129">Content Analysis</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="2">
                                                        <p _msttexthash="2842814" _msthash="130">We check the content on your website for search engine optimization. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
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
                                                        <p _msttexthash="288587" _msthash="131">Content Overhaul </p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="3">
                                                        <p _msttexthash="4214912" _msthash="132">We revise and expand the content on your website and optimize it for the search engine. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  ">
                                                    <div class="check-mark" data-tooltip="4">
                                                        <div class="check-mark-icon ">



                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>




                                                        </div>
                                                        <p _msttexthash="490334" _msthash="133">Google, Bing &amp; Yahoo Setup</p>
                                                    </div>



                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
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
                                                        <p _msttexthash="415610" _msthash="134">Organic link building</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="5">
                                                        <p _msttexthash="1461954" _msthash="135">We build a strong link profile for your website. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
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
                                                        <p _msttexthash="266344" _msthash="136">Monthly Reports</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="6">
                                                        <p _msttexthash="3789565" _msthash="137">We will send you a detailed report on the SEO performance of your site every month.</p>
                                                    </div>

                                                </div>
                                            </div>


                                            <div class="check-mark-wrapper 12 6  clickable">
                                                <div class="check-mark" data-tooltip="7">
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
                                                    <p _msttexthash="497068" _msthash="138">Technical optimisation</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="7">
                                                    <p _msttexthash="2826824" _msthash="139">We optimize your website for technical search engine optimization. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 12 6  clickable">
                                                <div class="check-mark" data-tooltip="8">
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
                                                    <p _msttexthash="500539" _msthash="140">Directory Optimization</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="8">
                                                    <p _msttexthash="2379507" _msthash="141">We'll optimize your site's directory to make it easier to find. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 12 6  clickable">
                                                <div class="check-mark" data-tooltip="9">
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
                                                    <p _msttexthash="284921" _msthash="142">Google Analytics </p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="9">
                                                    <p _msttexthash="7530991" _msthash="143">We integrate Google Analytics on your website and optimize your visibility on the Internet based on the evaluation.</p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 12 6  clickable">
                                                <div class="check-mark" data-tooltip="10">
                                                    <div style={{ opacity: "0.4" }} class="check-mark-icon tooltip-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
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
                                                    <p style={{ opacity: "0.4" }} _msttexthash="178425" _msthash="144">Blog Content</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="10">
                                                    <p _msttexthash="9166690" _msthash="145">Our experienced editorial team creates search engine optimized content for your website that is relevant to your target group. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 12 6  ">
                                                <div class="check-mark" data-tooltip="11">
                                                    <div style={{ opacity: "0.4" }} class="check-mark-icon ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
                                                        </svg>
                                                    </div>
                                                    <p style={{ opacity: "0.4" }} _msttexthash="316160" _msthash="146">Content Marketing</p>
                                                </div>



                                            </div>

                                        </div>
                                    </div>

                                    <div data-priceindex="2" class="bestseller-card card" style={{ backgroundColor: "#9184be" }} tabindex="0" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02">

                                        <div class="primary-button bestseller">
                                            <a href="tel:00432236907235" tabindex="0" _msttexthash="287274" _msthash="94">Best performance</a>
                                        </div>

                                        <div class="text">
                                            <p _msttexthash="47151" _msthash="95">Plus</p>
                                            <p class="price" _msttexthash="779753" _msthash="96">€375</p>
                                            <p class="month" _msttexthash="72384" _msthash="97">/Month</p>
                                        </div>

                                        <div class="primary-button yellow ">
                                            <a href="tel:00432236907235" tabindex="0" _msttexthash="136305" _msthash="98">+43 (0)5 0485-607</a>
                                        </div>

                                        <div class="all-check-marks">
                                            <div class="check-mark-slide-container 12 ">

                                                <div class="check-mark-wrapper 12 6  clickable">
                                                    <div class="check-mark" data-tooltip="0">
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
                                                        <p _msttexthash="321022" _msthash="99">7 Monthly SEO Checks</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="0">
                                                        <p _msttexthash="2755311" _msthash="100">We check the status of your website's SEO measures in several checks. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
                                                    <div class="check-mark" data-tooltip="1">
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
                                                        <p _msttexthash="292409" _msthash="101">Initial analysis</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="1">
                                                        <p _msttexthash="1482325" _msthash="102">We carry out an initial SEO check of your website. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
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
                                                        <p _msttexthash="289536" _msthash="103">Content Analysis</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="2">
                                                        <p _msttexthash="2842814" _msthash="104">We check the content on your website for search engine optimization. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
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
                                                        <p _msttexthash="288587" _msthash="105">Content Overhaul </p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="3">
                                                        <p _msttexthash="4214912" _msthash="106">We revise and expand the content on your website and optimize it for the search engine. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  ">
                                                    <div class="check-mark" data-tooltip="4">
                                                        <div class="check-mark-icon ">

                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>

                                                        </div>
                                                        <p _msttexthash="490334" _msthash="107">Google, Bing &amp; Yahoo Setup</p>
                                                    </div>



                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
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
                                                        <p _msttexthash="415610" _msthash="108">Organic link building</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="5">
                                                        <p _msttexthash="1461954" _msthash="109">We build a strong link profile for your website. </p>
                                                    </div>

                                                </div>



                                                <div class="check-mark-wrapper 12 6  clickable">
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
                                                        <p _msttexthash="266344" _msthash="110">Monthly Reports</p>
                                                    </div>


                                                    <div class="check-mark check-mark-tooltip" data-tooltiptext="6">
                                                        <p _msttexthash="3789565" _msthash="111">We will send you a detailed report on the SEO performance of your site every month.</p>
                                                    </div>

                                                </div>
                                            </div>


                                            <div class="check-mark-wrapper 12 6  clickable">
                                                <div class="check-mark" data-tooltip="7">
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
                                                    <p _msttexthash="497068" _msthash="112">Technical optimisation</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="7">
                                                    <p _msttexthash="2826824" _msthash="113">We optimize your website for technical search engine optimization. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 12 6  clickable">
                                                <div class="check-mark" data-tooltip="8">
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
                                                    <p _msttexthash="500539" _msthash="114">Directory Optimization</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="8">
                                                    <p _msttexthash="2379507" _msthash="115">We'll optimize your site's directory to make it easier to find. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 12 6  clickable">
                                                <div class="check-mark" data-tooltip="9">
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
                                                    <p _msttexthash="284921" _msthash="116">Google Analytics </p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="9">
                                                    <p _msttexthash="7530991" _msthash="117">We integrate Google Analytics on your website and optimize your visibility on the Internet based on the evaluation.</p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 12 6  clickable">
                                                <div class="check-mark" data-tooltip="10">
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
                                                    <p _msttexthash="178425" _msthash="118">Blog Content</p>
                                                </div>


                                                <div class="check-mark check-mark-tooltip" data-tooltiptext="10">
                                                    <p _msttexthash="9166690" _msthash="119">Our experienced editorial team creates search engine optimized content for your website that is relevant to your target group. </p>
                                                </div>

                                            </div>



                                            <div class="check-mark-wrapper 12 6  ">
                                                <div class="check-mark" data-tooltip="11">
                                                    <div class="check-mark-icon ">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>

                                                    </div>
                                                    <p _msttexthash="316160" _msthash="120">Content Marketing</p>
                                                </div>



                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <p style={{ textAlign: "center", padding: "15px 0" }} _msttexthash="1210313" _msthash="295">*Only in combination with a Gradimo Skupaj website</p>

                            </div>
                        </div>
                    </>
            }
        </>
    )
}