import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"
import Slider from "react-slick";
import striptags from "striptags";

export const ProductsWebsiteOpacityBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    const [anotherIndex, setAnotherIndex] = useState(0);
    const [sliderRef, setSliderRef] = useState(null)
    const { currentPageContent, baseBackendRoute } = useContext(AppContext);
    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia('(max-width: 768px)').matches);
    const handleSlideChange = newIndex => {
        setAnotherIndex(newIndex);
    };
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle click on next arrow
    const nextSlide = () => {
        setCurrentIndex(prevIndex => prevIndex + 1);
    };

    // Function to handle click on previous arrow
    const prevSlide = () => {
        setCurrentIndex(prevIndex => prevIndex - 1);
    };

    const CustomDot = ({ onClick, active }) => (
        <div
            className={active ? 'custom-dot active' : 'custom-dot'}
            onClick={onClick}
        >
            {active ? (
                <div className='input-group-icon'>
                    <img src="/gradimo_icons/active-dot.png" alt="active-dot" />
                </div>
            ) : (
                <div className='input-group-icon'>
                    <img src="/gradimo_icons/dot.png" alt="dot" />
                </div>
            )}
        </div>
    );

    function AnotherPrevArrow() {
        return (
            <span class="opacity_prev_arrow" style={{}}><img width="24" onClick={sliderRef?.slickPrev} height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
        )
    }

    function AnotherNextArrow() {
        return (
            <span class="opacity_next_arrow"><img onClick={sliderRef?.slickNext} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /><noscript><img width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" /></noscript></span>
        )
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        appendDots: dots => (
            <div>
                <div className="arrows_opacity herold_arrows_wrapper" style={{ marginTop: '100px' }}>
                    <AnotherPrevArrow />
                    {dots}
                    <AnotherNextArrow />
                </div>
            </div>
        ),
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
    }


    useEffect(() => {

    }, [setIsLargeScreen])

    return (
        <>
            {
                isLargeScreen ?
                    < div className="opacity">
                        {
                            <div className="opacity-inner container">
                                <div className="title-head">
                                    <h2 style={{}}>
                                        {currentPageContent?.why_service_heading}
                                    </h2>
                                    <h3 style={{}}>
                                        {currentPageContent?.why_service_sub_heading}
                                    </h3>
                                </div>
                                <div className="both">
                                    <div className="left">
                                        <img
                                            decoding="async"
                                            src={`${baseBackendRoute}${currentPageContent?.why_service_image}`}
                                            alt=""
                                            title="Herold-Ärztin_Schritte"
                                            width="586"
                                            height="879"
                                            data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Ärztin_Schritte.jpg"
                                            data-ll-status="loaded"
                                            className="entered lazyloaded"
                                        />
                                    </div>
                                    <div className="right">
                                        <Slider ref={setSliderRef} {...settings} afterChange={setCurrentIndex} className="card-slider slick-initialized slick-slider slick-dotted">
                                            {
                                                currentPageContent?.why_services.map((value, index) => (
                                                    <div>
                                                        <div className="card slick-slide slick-current slick-active" style={{ backgroundColor: value.color, width: "100%" }} tabindex="0" role="tabpanel" id="slick-slide41" aria-describedby="slick-slide-control41" data-slick-index="1" aria-hidden="false">
                                                            <div className="number">
                                                                <p style={{ color: currentPageContent.color }}>
                                                                    {index + 1}
                                                                </p>
                                                            </div>
                                                            <div className="text">
                                                                <h2>
                                                                    {value.title}
                                                                </h2>
                                                                <p>
                                                                    {striptags(value.description).replace(/&nbsp;/g, '')}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        }
                    </div >

                    :
                    <>
                        <div className="opacity">
                            {

                                <div className="opacity-inner container">
                                    <div className="title-head">
                                        <h2 style={{}}>
                                            {currentPageContent?.why_service_heading}
                                        </h2>
                                        <h3 style={{}}>
                                            {currentPageContent?.why_service_sub_heading}   </h3>
                                    </div>
                                    <div className="both">
                                        <div className="left">
                                            <img
                                                decoding="async"
                                                src={`${baseBackendRoute}${currentPageContent?.why_service_image}`}
                                                alt=""
                                                title="Herold-Ärztin_Schritte"
                                                width="586"
                                                height="879"
                                                data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Ärztin_Schritte.jpg"
                                                data-ll-status="loaded"
                                                className="entered lazyloaded"
                                            />
                                        </div>
                                        <div className="right" >
                                            <div className="card-slider">
                                                {
                                                    currentPageContent?.why_services.map((value, index) => (
                                                        <div className="card" tabIndex="0" role="tabpanel" aria-hidden="true">
                                                            <div className="number">
                                                                <p style={{ color: currentPageContent?.color }}>{index + 1}</p>
                                                            </div>
                                                            <div className="text">
                                                                <h2>{value.title}</h2>
                                                                <p>{striptags(value.description).replace(/&nbsp;/g, '')}</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </>
            }
        </>
    )
}