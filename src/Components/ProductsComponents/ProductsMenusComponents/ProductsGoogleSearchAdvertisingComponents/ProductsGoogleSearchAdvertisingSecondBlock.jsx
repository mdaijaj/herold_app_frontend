import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext";
export const ProductsGoogleSearchAdvertisingSecondBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index === -1) {
            setIndex(2);
        };
        if (index === 3) {
            setIndex(0);
        }
    }, [index])
    return (
        <>

            {
                isMobile ?
                    <>
                        <div className="block">
                            <div className="block-inner container">
                                <div className="title-head" >
                                    <h2 style={{ textAlign: 'center' }}>For more visibility that pays off.</h2>
                                    <h3>Your company, your solution.</h3>
                                </div>
                                <div className="cardos-slider slick-initialized slick-slider slick-dotted">
                                    <div className="slick-list draggable">
                                        <div className="slick-track" style={index === 0 ? { opacity: 1, width: "1005px", transform: "translate3d(0px, 0px, 0px)" } : index === 1 ? { opacity: 1, width: "1005px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: 1, width: "1005px", transform: "translate3d(-670px, 0px, 0px)" } : {}}>
                                            <div
                                                data-priceindex="0"
                                                class="card basic-card slick-slide"
                                                style={{ backgroundColor: '#fff0f0', width: '320px' }}
                                                tabIndex="0"
                                                role="tabpanel"
                                                id="slick-slide00"
                                                aria-describedby="slick-slide-control00"
                                            >
                                                <div className="text">
                                                    <p _msttexthash="59722" _msthash="135">Small</p>
                                                    <p className="price" _msttexthash="779012" _msthash="136">€180</p>
                                                    <p className="month" _msttexthash="72384" _msthash="137">/Month</p>
                                                </div>
                                                <div className="primary-button yellow  basic ">
                                                    <a href="tel:00432236907235" tabIndex="0">+43 (0)5 0485-607</a>
                                                </div>
                                                <div className="all-check-marks">
                                                    <div className="check-mark-slide-container 9 ">
                                                        <div className="check-mark-wrapper 9 3  clickable">
                                                            <div className="check-mark" data-tooltip="4" >
                                                                <div className="check-mark-icon tooltip-icon" >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                    </svg>
                                                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="question-mark">
                                                                        <g>
                                                                            <g>
                                                                                <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256 C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946 c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736 c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577 c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915 c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155 c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <p>Ongoing text optimizations</p>
                                                            </div>
                                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="4" style={{ marginTop: '10px' }}>
                                                                <p>We're constantly optimizing your ads to make them perform as efficiently as possible.</p>
                                                            </div>
                                                        </div>

                                                        <div className="check-mark-wrapper 9 3  clickable" >
                                                            <div className="check-mark" data-tooltip="1">
                                                                <div className="check-mark-icon tooltip-icon" >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                    </svg>
                                                                    <svg className="question-mark" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}>
                                                                        <g>
                                                                            <g>
                                                                                <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <p>Monthly Reporting</p>
                                                            </div>
                                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="1">
                                                                <p>With the monthly performance report, you are always aware of the success of your campaign. </p>
                                                            </div>
                                                        </div>

                                                        <div className="check-mark-wrapper 9 3  clickable" >
                                                            <div className="check-mark" data-tooltip="2">
                                                                <div className="check-mark-icon tooltip-icon" >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                    </svg>
                                                                    <svg className="question-mark" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}>
                                                                        <g>
                                                                            <g>
                                                                                <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <p>3 Ad groups</p>
                                                            </div>
                                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="2">
                                                                <p>The more ad sets your campaign has, the more content you can promote.</p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="check-mark-wrapper 9 3  clickable">
                                                        <div className="check-mark" data-tooltip="3">
                                                            <div className="check-mark-icon tooltip-icon" >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>
                                                                <svg className="question-mark" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}>
                                                                    <g>
                                                                        <g>
                                                                            <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <p>Service calls (every 3 months)</p>
                                                        </div>
                                                        <div className="check-mark check-mark-tooltip" data-tooltiptext="3">
                                                            <p>We'll call you regularly to keep you updated on your campaign. </p>
                                                        </div>
                                                    </div>

                                                    <div className="check-mark-wrapper 9 3  clickable">
                                                        <div className="check-mark" data-tooltip="5">
                                                            <div className="check-mark-icon tooltip-icon" >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>
                                                                <svg className="question-mark" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}>
                                                                    <g>
                                                                        <g>
                                                                            <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <p>Analyses (every 3 months)</p>
                                                        </div>
                                                        <div className="check-mark check-mark-tooltip" data-tooltiptext="5">
                                                            <p>Every 3-6 months, our certified experts analyze your campaigns and come back to you with optimizations if necessary. </p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div
                                                data-priceindex="1"
                                                class="bestseller-card card slick-slide "
                                                style={{ backgroundColor: '#ff6d6a', width: '320px' }}
                                                tabIndex="-1"
                                                role="tabpanel"
                                                id="slick-slide01"
                                                aria-describedby="slick-slide-control01"
                                            >
                                                <div className="primary-button bestseller">
                                                    <a href="tel:00432236907235" tabIndex="-1">
                                                        Bestseller
                                                    </a>
                                                </div>

                                                <div class="text">
                                                    <p _msttexthash="76596" _msthash="113">Medium</p>
                                                    <p class="price" _msttexthash="778388" _msthash="114">€400</p>
                                                    <p class="month" _msttexthash="72384" _msthash="115">/Month</p>
                                                </div>
                                                <div className="primary-button yellow ">
                                                    <a href="tel:00432236907235" tabIndex="-1">
                                                        +43 (0)5 0485-607
                                                    </a>
                                                </div>

                                                <div className="all-check-marks">
                                                    <div className="check-mark-slide-container 9 ">
                                                        <div className="check-mark-wrapper 9 3 clickable" >
                                                            <div className="check-mark" data-tooltip="0" >
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                    </svg>
                                                                </div>
                                                                <p >Ongoing text optimizations</p>
                                                            </div>

                                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="0" >
                                                                <p >We're constantly optimizing your ads to make them perform as efficiently as possible.</p>
                                                            </div>
                                                        </div>

                                                        <div className="check-mark-wrapper 9 3 clickable" >
                                                            <div className="check-mark" data-tooltip="1" >
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                    </svg>
                                                                </div>
                                                                <p >Monthly Reporting</p>
                                                            </div>

                                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="1" >
                                                                <p >With the monthly performance report, you are always aware of the success of your campaign.</p>
                                                            </div>
                                                        </div>

                                                        <div className="check-mark-wrapper 9 3 clickable" >
                                                            <div className="check-mark" data-tooltip="1" >
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                    </svg>
                                                                </div>
                                                                <p >5 ad groups</p>
                                                            </div>

                                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="1" >
                                                                <p >The more ad sets your campaign has, the more content you can promote</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-mark-wrapper 9 3 clickable" >
                                                            <div className="check-mark" data-tooltip="1" >
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                    </svg>
                                                                </div>
                                                                <p >Service calls (every 2 months)</p>
                                                            </div>

                                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="1" >
                                                                <p >We'll call you regularly to keep you updated on your campaign.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-mark-wrapper 9 3 clickable" >
                                                            <div className="check-mark" data-tooltip="1" >
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                    </svg>
                                                                </div>
                                                                <p >Analyses (every 2 months)</p>
                                                            </div>

                                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="1" >
                                                                <p >Every 3-6 months, our certified experts analyze your campaigns and come back to you with optimizations if necessary.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-priceindex="2"
                                                class="card basic-card slick-slide"
                                                style={{ backgroundColor: "#fff0f0", width: '320px' }}
                                                tabIndex="-1"
                                                role="tabpanel"
                                                id="slick-slide02"
                                                aria-describedby="slick-slide-control02"
                                            >
                                                <div className="text">
                                                    <p>Large</p>
                                                    <p className="price">€750</p>
                                                    <p className="month">/Month</p>
                                                </div>
                                                <div className="primary-button yellow basic">
                                                    <a href="tel:00432236907235">+43 (0)5 0485-607</a>
                                                </div>
                                                <div className="all-check-marks">
                                                    <div className="check-mark-slide-container 7" style={{ /* Add container styles here if needed */ }}>
                                                        <div className="check-mark-wrapper 7 1 clickable" style={{ /* Add check mark wrapper styles here if needed */ }}>
                                                            <div className="check-mark" data-tooltip="0">
                                                                <div className="check-mark-icon tooltip-icon" style={{ /* Add check mark icon styles here if needed */ }}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                    </svg>
                                                                </div>
                                                                <p>Ongoing text optimizations</p>
                                                            </div>
                                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="0" style={{ /* Add check mark tooltip styles here if needed */ }}>
                                                                <p>We're constantly optimizing your ads to make them perform as efficiently as possible.</p>
                                                            </div>
                                                        </div>
                                                        <div className="check-mark-wrapper 7 1 clickable" style={{ /* Add check mark wrapper styles here if needed */ }}>
                                                            <div className="check-mark" data-tooltip="1">
                                                                <div className="check-mark-icon tooltip-icon" style={{ /* Add check mark icon styles here if needed */ }}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                    </svg>
                                                                </div>
                                                                <p >Monthly Reporting</p>
                                                            </div>
                                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="1" style={{ /* Add check mark tooltip styles here if needed */ }}>
                                                                <p>With the monthly performance report, you are always aware of the success of your campaign.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="check-mark-wrapper 7 1 clickable" style={{ /* Add check mark wrapper styles here if needed */ }}>
                                                        <div className="check-mark" data-tooltip="2">
                                                            <div className="check-mark-icon tooltip-icon" style={{ /* Add check mark icon styles here if needed */ }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>
                                                            </div>
                                                            <p >7 Ad groups</p>
                                                        </div>
                                                        <div className="check-mark check-mark-tooltip" data-tooltiptext="2" style={{ /* Add check mark tooltip styles here if needed */ }}>
                                                            <p>The more ad sets your campaign has, the more content you can promote.</p>
                                                        </div>
                                                    </div>

                                                    <div className="check-mark-wrapper 7 1 clickable" style={{ /* Add check mark wrapper styles here if needed */ }}>
                                                        <div className="check-mark" data-tooltip="3">
                                                            <div className="check-mark-icon tooltip-icon" style={{ /* Add check mark icon styles here if needed */ }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>
                                                            </div>
                                                            <p >Service calls (monthly)</p>
                                                        </div>
                                                        <div className="check-mark check-mark-tooltip" data-tooltiptext="3" style={{ /* Add check mark tooltip styles here if needed */ }}>
                                                            <p>We'll call you regularly to keep you updated on your campaign.</p>
                                                        </div>
                                                    </div>

                                                    <div className="check-mark-wrapper 7 1 clickable" style={{ /* Add check mark wrapper styles here if needed */ }}>
                                                        <div className="check-mark" data-tooltip="4">
                                                            <div className="check-mark-icon tooltip-icon" style={{ /* Add check mark icon styles here if needed */ }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>
                                                            </div>
                                                            <p>Analyses (monthly)</p>
                                                        </div>
                                                        <div className="check-mark check-mark-tooltip" data-tooltiptext="4" style={{ /* Add check mark tooltip styles here if needed */ }}>
                                                            <p>Every 3-6 months, our certified experts analyze your campaigns and come back to you with optimizations if necessary.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>





                                        </div>
                                    </div >
                                </div>
                                <div className="decision">
                                    <a href="#" style={{ color: 'black' }} _msttexthash="339469" _msthash="195">VIEW ALL PACKAGE DETAILS</a>
                                </div>

                                <div class="arrows_pricing herold_arrows_wrapper">
                                    <span class="pricing_prev_arrow slick-arrow" aria-disabled="false" style={{}}>
                                        <img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                    <div class="arrows_pricing_between"><ul class="slick-dots" style={{}} role="tablist">
                                        <li className={index === 0 ? "slick-active" : ""} role="presentation">
                                            <button onClick={() => { setIndex(0) }} type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 3" tabindex="-1" _mstaria-label="34567" _msthash="17" _msttexthash="4459">1</button>
                                        </li>
                                        <li className={index === 1 ? "slick-active" : ""} role="presentation">
                                            <button onClick={() => { setIndex(1) }} type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 3" tabindex="0" aria-selected="true" _mstaria-label="34658" _msthash="18" _msttexthash="4550">2</button></li>
                                        <li className={index === 2 ? "slick-active" : ""} role="presentation">
                                            <button onClick={() => { setIndex(2) }} type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 3" tabindex="-1" _mstaria-label="34749" _msthash="19" _msttexthash="4641">3</button></li>
                                    </ul>
                                    </div>
                                    <span class="pricing_next_arrow slick-arrow" style={{}} aria-disabled="false"><img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" />
                                    </span>
                                </div>
                            </div>
                        </div>

                    </>
                    :
                    <div className="block">
                        <div className="block-inner container">
                            <div className="title-head" >
                                <h2 style={{ textAlign: 'center' }}>For more visibility that pays off.</h2>
                                <h3>Your company, your solution.</h3>
                            </div>
                            <div className="cardos-slider">
                                <div
                                    data-priceindex="0"
                                    class="card basic-card"
                                    style={{ backgroundColor: '#fff0f0' }}
                                    tabIndex="0"
                                    role="tabpanel"
                                    id="slick-slide00"
                                    aria-describedby="slick-slide-control00"
                                >
                                    <div className="text">
                                        <p _msttexthash="59722" _msthash="135">Small</p>
                                        <p className="price" _msttexthash="779012" _msthash="136">€180</p>
                                        <p className="month" _msttexthash="72384" _msthash="137">/Month</p>
                                    </div>
                                    <div className="primary-button yellow  basic ">
                                        <a href="tel:00432236907235" tabIndex="0">+43 (0)5 0485-607</a>
                                    </div>
                                    <div className="all-check-marks">
                                        <div className="check-mark-slide-container 9 ">
                                            <div className="check-mark-wrapper 9 3  clickable">
                                                <div className="check-mark" data-tooltip="4" >
                                                    <div className="check-mark-icon tooltip-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>
                                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="question-mark">
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256 C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946 c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736 c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577 c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915 c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155 c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p>Ongoing text optimizations</p>
                                                </div>
                                                <div className="check-mark check-mark-tooltip" data-tooltiptext="4" style={{ marginTop: '10px' }}>
                                                    <p>We're constantly optimizing your ads to make them perform as efficiently as possible.</p>
                                                </div>
                                            </div>

                                            <div className="check-mark-wrapper 9 3  clickable" style={{ textAlign: 'center' }}>
                                                <div className="check-mark" data-tooltip="1">
                                                    <div className="check-mark-icon tooltip-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>
                                                        <svg className="question-mark" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}>
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p>Ongoing text optimizations</p>
                                                </div>
                                                <div className="check-mark check-mark-tooltip" data-tooltiptext="1">
                                                    <p>With the monthly performance report, you are always aware of the success of your campaign. </p>
                                                </div>
                                            </div>

                                            <div className="check-mark-wrapper 9 3  clickable" style={{ textAlign: 'center' }}>
                                                <div className="check-mark" data-tooltip="2">
                                                    <div className="check-mark-icon tooltip-icon" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>
                                                        <svg className="question-mark" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}>
                                                            <g>
                                                                <g>
                                                                    <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p>3 Ad groups</p>
                                                </div>
                                                <div className="check-mark check-mark-tooltip" data-tooltiptext="2">
                                                    <p>The more ad sets your campaign has, the more content you can promote.</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="check-mark-wrapper 9 3  clickable" style={{ textAlign: 'center' }}>
                                            <div className="check-mark" data-tooltip="3">
                                                <div className="check-mark-icon tooltip-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                    </svg>
                                                    <svg className="question-mark" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}>
                                                        <g>
                                                            <g>
                                                                <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <p>Service calls (every 3 months)</p>
                                            </div>
                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="3">
                                                <p>We'll call you regularly to keep you updated on your campaign. </p>
                                            </div>
                                        </div>

                                        <div className="check-mark-wrapper 9 3  clickable" style={{ textAlign: 'center' }}>
                                            <div className="check-mark" data-tooltip="5">
                                                <div className="check-mark-icon tooltip-icon" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                    </svg>
                                                    <svg className="question-mark" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }}>
                                                        <g>
                                                            <g>
                                                                <path d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"></path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <p>Analyses (every 3 months)</p>
                                            </div>
                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="5">
                                                <p>Every 3-6 months, our certified experts analyze your campaigns and come back to you with optimizations if necessary. </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div
                                    data-priceindex="1"
                                    className="bestseller-card card"
                                    style={{ backgroundColor: '#ff6d6a' }}
                                    tabIndex="-1"
                                    role="tabpanel"
                                    id="slick-slide01"
                                    aria-describedby="slick-slide-control01"
                                >
                                    <div className="primary-button bestseller">
                                        <a href="tel:00432236907235" tabIndex="-1">
                                            Bestseller
                                        </a>
                                    </div>

                                    <div class="text">
                                        <p _msttexthash="76596" _msthash="113">Medium</p>
                                        <p class="price" _msttexthash="778388" _msthash="114">€400</p>
                                        <p class="month" _msttexthash="72384" _msthash="115">/Month</p>
                                    </div>
                                    <div className="primary-button yellow ">
                                        <a href="tel:00432236907235" tabIndex="-1">
                                            +43 (0)5 0485-607
                                        </a>
                                    </div>

                                    <div className="all-check-marks">
                                        <div className="check-mark-slide-container 9 ">
                                            <div className="check-mark-wrapper 9 3 clickable" >
                                                <div className="check-mark" data-tooltip="0" >
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>
                                                    </div>
                                                    <p >Ongoing text optimizations</p>
                                                </div>

                                                <div className="check-mark check-mark-tooltip" data-tooltiptext="0" >
                                                    <p >We're constantly optimizing your ads to make them perform as efficiently as possible.</p>
                                                </div>
                                            </div>

                                            <div className="check-mark-wrapper 9 3 clickable" >
                                                <div className="check-mark" data-tooltip="1" >
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>
                                                    </div>
                                                    <p >Monthly Reporting</p>
                                                </div>

                                                <div className="check-mark check-mark-tooltip" data-tooltiptext="1" >
                                                    <p >With the monthly performance report, you are always aware of the success of your campaign.</p>
                                                </div>
                                            </div>

                                            <div className="check-mark-wrapper 9 3 clickable" >
                                                <div className="check-mark" data-tooltip="1" >
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>
                                                    </div>
                                                    <p >5 ad groups</p>
                                                </div>

                                                <div className="check-mark check-mark-tooltip" data-tooltiptext="1" >
                                                    <p >The more ad sets your campaign has, the more content you can promote</p>
                                                </div>
                                            </div>
                                            <div className="check-mark-wrapper 9 3 clickable" >
                                                <div className="check-mark" data-tooltip="1" >
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>
                                                    </div>
                                                    <p >Service calls (every 2 months)</p>
                                                </div>

                                                <div className="check-mark check-mark-tooltip" data-tooltiptext="1" >
                                                    <p >We'll call you regularly to keep you updated on your campaign.</p>
                                                </div>
                                            </div>
                                            <div className="check-mark-wrapper 9 3 clickable" >
                                                <div className="check-mark" data-tooltip="1" >
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>
                                                    </div>
                                                    <p >Analyses (every 2 months)</p>
                                                </div>

                                                <div className="check-mark check-mark-tooltip" data-tooltiptext="1" >
                                                    <p >Every 3-6 months, our certified experts analyze your campaigns and come back to you with optimizations if necessary.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-priceindex="2"
                                    className="light_color card basic-card"
                                    style={{ backgroundColor: "#fff0f0" }}
                                    tabIndex="-1"
                                    role="tabpanel"
                                    id="slick-slide02"
                                    aria-describedby="slick-slide-control02"
                                >
                                    <div className="text">
                                        <p>Large</p>
                                        <p className="price">€750</p>
                                        <p className="month">/Month</p>
                                    </div>
                                    <div className="primary-button yellow basic">
                                        <a href="tel:00432236907235">+43 (0)5 0485-607</a>
                                    </div>
                                    <div className="all-check-marks">
                                        <div className="check-mark-slide-container 7" style={{ /* Add container styles here if needed */ }}>
                                            <div className="check-mark-wrapper 7 1 clickable" style={{ /* Add check mark wrapper styles here if needed */ }}>
                                                <div className="check-mark" data-tooltip="0">
                                                    <div className="check-mark-icon tooltip-icon" style={{ /* Add check mark icon styles here if needed */ }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>
                                                    </div>
                                                    <p>Ongoing text optimizations</p>
                                                </div>
                                                <div className="check-mark check-mark-tooltip" data-tooltiptext="0" style={{ /* Add check mark tooltip styles here if needed */ }}>
                                                    <p>We're constantly optimizing your ads to make them perform as efficiently as possible.</p>
                                                </div>
                                            </div>
                                            <div className="check-mark-wrapper 7 1 clickable" style={{ /* Add check mark wrapper styles here if needed */ }}>
                                                <div className="check-mark" data-tooltip="1">
                                                    <div className="check-mark-icon tooltip-icon" style={{ /* Add check mark icon styles here if needed */ }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                        </svg>
                                                    </div>
                                                    <p >Monthly Reporting</p>
                                                </div>
                                                <div className="check-mark check-mark-tooltip" data-tooltiptext="1" style={{ /* Add check mark tooltip styles here if needed */ }}>
                                                    <p>With the monthly performance report, you are always aware of the success of your campaign.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="check-mark-wrapper 7 1 clickable" style={{ /* Add check mark wrapper styles here if needed */ }}>
                                            <div className="check-mark" data-tooltip="2">
                                                <div className="check-mark-icon tooltip-icon" style={{ /* Add check mark icon styles here if needed */ }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                    </svg>
                                                </div>
                                                <p >7 Ad groups</p>
                                            </div>
                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="2" style={{ /* Add check mark tooltip styles here if needed */ }}>
                                                <p>The more ad sets your campaign has, the more content you can promote.</p>
                                            </div>
                                        </div>

                                        <div className="check-mark-wrapper 7 1 clickable" style={{ /* Add check mark wrapper styles here if needed */ }}>
                                            <div className="check-mark" data-tooltip="3">
                                                <div className="check-mark-icon tooltip-icon" style={{ /* Add check mark icon styles here if needed */ }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                    </svg>
                                                </div>
                                                <p >Service calls (monthly)</p>
                                            </div>
                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="3" style={{ /* Add check mark tooltip styles here if needed */ }}>
                                                <p>We'll call you regularly to keep you updated on your campaign.</p>
                                            </div>
                                        </div>

                                        <div className="check-mark-wrapper 7 1 clickable" style={{ /* Add check mark wrapper styles here if needed */ }}>
                                            <div className="check-mark" data-tooltip="4">
                                                <div className="check-mark-icon tooltip-icon" style={{ /* Add check mark icon styles here if needed */ }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.859 3.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                    </svg>
                                                </div>
                                                <p>Analyses (monthly)</p>
                                            </div>
                                            <div className="check-mark check-mark-tooltip" data-tooltiptext="4" style={{ /* Add check mark tooltip styles here if needed */ }}>
                                                <p>Every 3-6 months, our certified experts analyze your campaigns and come back to you with optimizations if necessary.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="decision">
                                <a href="#" _msttexthash="339469" _msthash="195">VIEW ALL PACKAGE DETAILS</a>
                            </div>
                        </div>
                    </div >

            }

        </>
    )
}