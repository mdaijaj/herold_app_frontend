import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"
import Slider from "react-slick";
import striptags from 'striptags';

export const ProductsWebsiteThirdBlock = () => {
    const { isMobile, gradimoContact } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    const { currentPageContent } = useContext(AppContext);


    const [sliderRef, setSliderRef] = useState(null)
    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia('(max-width: 768px)').matches);

    function AnotherPrevArrow() {
        return (
            <span class="usp_prev_arrow herold_slick_btn_4 slick-arrow" style={{}}><img width="24" onClick={sliderRef?.slickPrev} height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
        )
    }

    function AnotherNextArrow() {
        return (
            <span class="usp_next_arrow herold_slick_btn_4 slick-arrow"><img onClick={sliderRef?.slickNext} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /><noscript><img width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" /></noscript></span>
        )
    }
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const handleSelectedIndex = (index) => {
        if (index === selectedIndex) {
            setSelectedIndex(-1);
        }
        else {
            setSelectedIndex(index);
        }
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle click on next arrow
    const nextSlide = () => {
        setCurrentIndex(prevIndex => prevIndex + 1);
    };

    // Function to handle click on previous arrow
    const prevSlide = () => {
        setCurrentIndex(prevIndex => prevIndex - 1);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        appendDots: dots => (
            <div>
                <div className="arrows_usp herold_arrows_wrapper" style={{ marginTop: '70px' }}>
                    <AnotherPrevArrow />
                    <div className="arrows_usp_between">
                        {dots}
                    </div>
                    <AnotherNextArrow />
                </div>
            </div>
        )
        ,
        customPaging: function (i) {
            console.log("below i value");
            console.log(i);
            console.log(currentIndex)
            const isActive = currentIndex === i;
            return (
                <img
                    src={isActive ? '/gradimo_icons/active-dot.png' : '/gradimo_icons/dot.png'}
                    // src={active ? "/gradimo_icons/active-dot.png" : "/gradimo_icons/dot.png"} // Replace this with your dot image URL
                    alt="dot"
                    style={{ width: '20px', height: '20px' }} // Set the width and height of your dot image
                />
            );
        }


    };
    useEffect(() => {

    }, [setIsLargeScreen])
    return (
        <>

            {
                isLargeScreen ?
                    <>
                        <div className="block" id="pricing_gradimo">
                            <div className="block-inner container">
                                <div className="title-head" >
                                    <h2 style={{ textAlign: 'center' }}>For more visibility that pays off.</h2>
                                    <h3>Your company, your solution.</h3>
                                </div>
                                <Slider ref={setSliderRef} {...settings} afterChange={setCurrentIndex} className="cardos-slider">
                                    {
                                        currentPageContent?.product_packages.map((value, index) => (
                                            value.id === 4 && value.product === 1 ?
                                                ""

                                                :
                                                <div>
                                                    <div className="light_color bestseller-card card" style={{ backgroundColor: value.color, width: '100%', display: 'inline-block' }}>

                                                        {
                                                            value.id === 1 ?
                                                                <div className="primary-button bestseller">
                                                                    <a href={`tel:${gradimoContact?.phone}`} tabIndex="0">Online on more than 25 platforms</a>
                                                                </div>
                                                                : value.id === 2 ?
                                                                    <div className="primary-button bestseller">
                                                                        <a href={`tel:${gradimoContact?.phone}`} tabIndex="0">1800 GUARANTEED VISITS/YEAR</a>
                                                                    </div>
                                                                    : ""
                                                        }

                                                        <div className="text">
                                                            <p>{value.package_name}</p>
                                                            <p className="price">{value.currency}{value.price}</p>
                                                            <p className="month">/{value.billing_period}</p>
                                                        </div>
                                                        <div className="primary-button yellow">
                                                            <a href={`tel:${gradimoContact?.phone}`} tabIndex="0">{gradimoContact?.phone}</a>
                                                        </div>
                                                        <div className="all-check-marks">
                                                            {
                                                                value.package_benifits.map((data, ind) => (
                                                                    <div onClick={() => { handleSelectedIndex(data.id) }} className="check-mark-slide-container 8">
                                                                        <div key={data.id} className="check-mark-wrapper 8 2  clickable">
                                                                            <div className={data.id === selectedIndex ? "check-mark checked" : "check-mark"} data-tooltip={0}>
                                                                                <div className="check-mark-icon tooltip-icon">
                                                                                    <svg
                                                                                        className="dd"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                    >
                                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                                    </svg>

                                                                                    <svg
                                                                                        version="1.1"
                                                                                        id="Layer_1"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                        x="0px"
                                                                                        y="0px"
                                                                                        viewBox="0 0 512 512"
                                                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                                                        xmlSpace="preserve"
                                                                                        className="question-mark"
                                                                                    >
                                                                                        <g>
                                                                                            <g>
                                                                                                <path
                                                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                                                />
                                                                                            </g>
                                                                                        </g>
                                                                                    </svg>
                                                                                </div>
                                                                                <p _msttexthash={242281} _msthash={155}>
                                                                                    {data.info}
                                                                                </p>
                                                                            </div>
                                                                            <div className={data.id === selectedIndex ? "check-mark check-mark-tooltip active" : "check-mark check-mark-tooltip"} data-tooltiptext={0}>
                                                                                <p _msttexthash={12563408} _msthash={156}>
                                                                                    {striptags(data.description).replace(/&nbsp;/g, '')}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>

                                                </div>

                                        ))
                                    }


                                </Slider>
                            </div>
                            {
                                currentPageContent?.product_packages.map((value, index) => (
                                    value.id === 4 && value.product === 1 ?
                                        <div className="upgrade_options block light_color">
                                            <div className="upgrade_options_inner block-inner container" style={{ backgroundColor: '#8dc8e8' }}>
                                                <div className="label_yellow">
                                                    <p>UPGRADE OPTION FOR <br /> ALL WEBSITE PRODUCTS</p>
                                                </div>
                                                <div className="text">
                                                    <p>{value.package_name}</p>
                                                    <p className="price">from {value.currency}  {value.price}</p>
                                                    <p className="month">/{value.billing_period}</p>
                                                </div>
                                                <div className="upgrade_list">
                                                    {
                                                        value?.package_benifits.map((data, ind) => (
                                                            <div className="check-mark-list">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                                </svg>
                                                                <p>{data.info}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        : ""
                                ))
                            }
                        </div>
                        <div class="decision" style={{ textAlign: 'center', padding: '40px' }} _msthidden="1">
                            <a href="#" _msttexthash="397306" _msthidden="1" _msthash="315">VIEW ALL PACKAGE DETAILS</a>
                        </div>

                        {/* <div className="arrows_pricing herold_arrows_wrapper" >
                            <span className="pricing_prev_arrow slick-arrow"  >
                                <img onClick={() => { setIndex(index - 1) }}
                                    width="24"
                                    height="24"
                                    src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg"
                                    alt="Previous"
                                />
                            </span>

                            <div className="arrows_pricing_between">
                                <ul className="slick-dots">
                                    <li className={index === 0 ? "slick-active" : ""}>
                                        <button

                                            type="button"
                                            aria-label="Slide 1 of 3"
                                        >
                                            1
                                        </button>
                                    </li>
                                    <li className={index === 1 ? "slick-active" : ""}>
                                        <button
                                            type="button"
                                            aria-label="Slide 2 of 3"
                                        >
                                            2
                                        </button>
                                    </li>
                                    <li className={index === 2 ? "slick-active" : ""}>
                                        <button
                                            type="button"
                                            aria-label="Slide 3 of 3"
                                            aria-selected="true"
                                        >
                                            3
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <span className="pricing_next_arrow slick-arrow slick-disabled">
                                <img
                                    onClick={() => { setIndex(index + 1) }}
                                    width="20"
                                    height="20"
                                    src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg"
                                    alt="Next"
                                />
                            </span>
 */}

                        {/* <div className="upgrade_options block light_color">
                            <div className="upgrade_options_inner block-inner container" style={{ backgroundColor: '#8dc8e8' }}>
                                <div className="label_yellow">
                                    <p>UPGRADE OPTION FOR <br /> ALL WEBSITE PRODUCTS</p>
                                </div>
                                <div className="text">
                                    <p>E-Commerce Upgrade</p>
                                    <p className="price">from € 100,00</p>
                                    <p className="month">/Month</p>
                                </div>
                                <div className="upgrade_list">
                                    <div className="check-mark-list">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                        </svg>
                                        <p>30-90 Products</p>
                                    </div>
                                    <div className="check-mark-list">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                        </svg>
                                        <p>All common payment options</p>
                                    </div>
                                    <div className="check-mark-list">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                        </svg>
                                        <p>Uniform design</p>
                                    </div>
                                    <div className="check-mark-list">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                        </svg>
                                        <p>Ongoing service</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </>
                    :
                    <div className="block" id="pricing_gradimo">
                        <div className="block-inner container">
                            <div className="title-head" >
                                <h2 style={{ textAlign: 'center' }}>For more visibility that pays off.</h2>
                                <h3>Your company, your solution.</h3>
                            </div>
                            <div className="cardos-slider">
                                {
                                    currentPageContent?.product_packages.map((value, index) => (
                                        value.id === 4 && value.product === 1 ?

                                            ""
                                            :
                                            <div
                                                data-priceindex={0}
                                                className="light_color bestseller-card card"
                                                style={{ backgroundColor: value.color }}
                                                tabIndex={0}
                                                role="tabpanel"
                                                id="slick-slide00"
                                                aria-describedby="slick-slide-control00"
                                            >
                                                {
                                                    value?.title ?
                                                        <div className="primary-button bestseller">
                                                            <a
                                                                href={`tel:${gradimoContact?.phone}`}
                                                                tabIndex={0}
                                                                _msttexthash={725010}
                                                                _msthash={150}
                                                            >
                                                                {value.title}
                                                            </a>
                                                        </div>
                                                        : value?.title ?
                                                            <div className="primary-button bestseller">
                                                                <a href={`tel:${gradimoContact?.phone}`} tabIndex="0">{value?.title}</a>
                                                            </div>
                                                            : ""
                                                }
                                                <div className="text">
                                                    <p _msttexthash={445835} _msthash={151}>
                                                        {value.package_name}
                                                    </p>
                                                    <p className="price" _msttexthash={801983} _msthash={152}>
                                                        {value.currency}{value.price}
                                                    </p>
                                                    <p className="month" _msttexthash={72384} _msthash={153}>
                                                        /{value.billing_period}
                                                    </p>
                                                </div>
                                                <div className="primary-button yellow">
                                                    <a
                                                        href={`tel:${gradimoContact?.phone}`}
                                                        tabIndex={0}
                                                        _msttexthash={136305}
                                                        _msthash={154}
                                                    >
                                                        {gradimoContact?.phone}
                                                    </a>
                                                </div>
                                                <div className="all-check-marks">
                                                    {
                                                        value.package_benifits.map((data, ind) => (
                                                            <div onClick={() => { handleSelectedIndex(data.id) }} className="check-mark-slide-container 8">
                                                                <div key={data.id} className="check-mark-wrapper 8 2  clickable">
                                                                    <div className={data.id === selectedIndex ? "check-mark checked" : "check-mark"} data-tooltip={0}>
                                                                        <div className="check-mark-icon tooltip-icon">
                                                                            <svg
                                                                                className="dd"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                            >
                                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                            </svg>

                                                                            <svg
                                                                                version="1.1"
                                                                                id="Layer_1"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                x="0px"
                                                                                y="0px"
                                                                                viewBox="0 0 512 512"
                                                                                style={{ enableBackground: "new 0 0 512 512" }}
                                                                                xmlSpace="preserve"
                                                                                className="question-mark"
                                                                            >
                                                                                <g>
                                                                                    <g>
                                                                                        <path
                                                                                            d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                                        />
                                                                                    </g>
                                                                                </g>
                                                                            </svg>
                                                                        </div>
                                                                        <p _msttexthash={242281} _msthash={155}>
                                                                            {data.info}
                                                                        </p>
                                                                    </div>
                                                                    <div className={data.id === selectedIndex ? "check-mark check-mark-tooltip active" : "check-mark check-mark-tooltip"} data-tooltiptext={0}>
                                                                        <p _msttexthash={12563408} _msthash={156}>
                                                                            {striptags(data.description).replace(/&nbsp;/g, '')}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div >
                                    ))
                                }
                            </div>
                        </div>
                        {
                            currentPageContent?.product_packages.map((value, index) => (
                                value.id === 4 && value.product === 1 ?
                                    <div className="upgrade_options block light_color">
                                        <div className="upgrade_options_inner block-inner container" style={{ backgroundColor: '#8dc8e8' }}>
                                            <div className="label_yellow">
                                                <p>UPGRADE OPTION FOR <br /> ALL WEBSITE PRODUCTS</p>
                                            </div>
                                            <div className="text">
                                                <p>{value.package_name}</p>
                                                <p className="price">from {value.currency}  {value.price}</p>
                                                <p className="month">/{value.billing_period}</p>
                                            </div>
                                            <div className="upgrade_list">
                                                {
                                                    value?.package_benifits.map((data, ind) => (
                                                        <div className="check-mark-list">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"></path>
                                                            </svg>
                                                            <p>{data.info}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    : ""
                            ))
                        }

                    </div>


            }

        </>
    )
}