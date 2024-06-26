import { useContext, useEffect, useRef, useState } from "react"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppContext from "../../AppContext";
import Slider from "react-slick";

export const ProductTagContainer = () => {
    const { isMobile, productsList } = useContext(AppContext);
    const [searchEngineColor, setSearchEnginColor] = useState(false);
    const [marketingColor, setMarketingColor] = useState(false);
    const [websiteColor, setWebsiteColor] = useState(false);
    const [onlineColor, setOnlineColor] = useState(false);
    const [googleSearchColor, setGoogleSearchColor] = useState(false);
    const [googleBannerColor, setGoogleBannerColor] = useState(false);
    const [index, setIndex] = useState(0);

    const handleSearchEngineColor = () => {
        setSearchEnginColor(!searchEngineColor);
    }
    const handleMarketingColor = () => {
        setMarketingColor(!marketingColor);
    }
    const handleWebsiteColor = () => {
        setWebsiteColor(!websiteColor);
    }
    const handleOnlineColor = () => {
        setOnlineColor(!onlineColor);
    }
    const handleGoogleSearchColor = () => {
        setGoogleSearchColor(!googleSearchColor);
    }
    const handleGoogleBannerColor = () => {
        setGoogleBannerColor(!googleBannerColor);
    }
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: true,
        prevArrow: false,
        nextArrow: false,
        centerMode: true, // Enable center mode
        centerPadding: '0px' // Adjust padding as needed
    };

    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia('(max-width: 1024px)').matches);

    useEffect(() => {


        const handleResize = () => {
            setIsLargeScreen(window.innerWidth < 1024); // Adjust the breakpoint as needed
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        // return () => {

        // };

        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.slickNext();
            }
        }, 3000); // Change the interval as needed (3 seconds in this case)

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            {
                isLargeScreen ?
                    <>
                        {/* <Slider {...settings} ref={sliderRef} className="tags container"> */}
                        {/* <div className="tags container slick-initialized slick-slider">
                            <div className="slick-list draggable" style={{ padding: '0px 50px' }}>
                                <div className="slick-track" style={index === 0 ? { opacity: 1, width: '30000px', transform: 'translate3d(-50px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : index === 1 ? { opacity: 1, width: '30000px', transform: 'translate3d(-350px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : index === 2 ? { opacity: 1, width: '30000px', transform: 'translate3d(-560px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : index === 3 ? { opacity: 1, width: '30000px', transform: 'translate3d(-750px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : index === 4 ? { opacity: 1, width: '30000px', transform: 'translate3d(-1035px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : index === 5 ? { opacity: 1, width: '30000px', transform: 'translate3d(-1363px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : { opacity: 1, width: '30000px', transform: 'translate3d(-50px, 0px, 0px)', transition: 'transform 500ms ease 0s' }}> */}
                        {
                            // productsList?.map((value, index) => (

                            // <div className="secondary-button" tabIndex="-1" data-slick-index="-2" id="" aria-hidden="true">
                            //     <a onMouseDown={(e) => { e.target.style.backgroundColor = value.color }} style={{ padding: '0px 50px' }} onMouseEnter={(e) => { e.target.style.backgroundColor = value.color }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent' }} data-bgcolor="#9184be" href="#suchmaschinen-optimierung" target="" tabIndex="-1">{value.name}</a>
                            // </div>
                            // <>
                            //     <div className="secondary-button">
                            //         <a data-bgcolor="#9184be" href="#suchmaschinen-optimierung" target="" tabIndex="-1">
                            //             <font style={{ verticalAlign: 'inherit' }}>
                            //                 <font style={{ verticalAlign: 'inherit' }}>
                            //                     <font style={{ verticalAlign: 'inherit' }}>
                            //                         <font style={{ verticalAlign: 'inherit' }}>Search engine optimization</font>
                            //                     </font>
                            //                 </font>
                            //             </font>
                            //         </a>
                            //     </div>

                            //     <div className="secondary-button">
                            //         <a data-bgcolor="#9184be" href="#suchmaschinen-optimierung" target="" tabIndex="-1">
                            //             <font style={{ verticalAlign: 'inherit' }}>
                            //                 <font style={{ verticalAlign: 'inherit' }}>
                            //                     <font style={{ verticalAlign: 'inherit' }}>
                            //                         <font style={{ verticalAlign: 'inherit' }}>Search engine optimization</font>
                            //                     </font>
                            //                 </font>
                            //             </font>
                            //         </a>
                            //     </div>


                            //     <div className="secondary-button">
                            //         <a data-bgcolor="#9184be" href="#suchmaschinen-optimierung" target="" tabIndex="-1">
                            //             <font style={{ verticalAlign: 'inherit' }}>
                            //                 <font style={{ verticalAlign: 'inherit' }}>
                            //                     <font style={{ verticalAlign: 'inherit' }}>
                            //                         <font style={{ verticalAlign: 'inherit' }}>Search engine optimization</font>
                            //                     </font>
                            //                 </font>
                            //             </font>
                            //         </a>
                            //     </div>
                            // </>                                // ))
                        }
                        {/* </div>
                            </div>
                        </div> */}
                        {/* </Slider> */}

                        <Slider className="tags container" {...settings} ref={sliderRef}>
                            {
                                productsList?.map((value, index) => (
                                    <div className="secondary-button">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <a onMouseDown={(e) => { e.target.style.backgroundColor = value.color }} onMouseEnter={(e) => { e.target.style.backgroundColor = value.color }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent' }} data-bgcolor="#9184be" href={`#${value.name}`} target="" tabIndex="-1">
                                                <font style={{ verticalAlign: 'inherit' }}>
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>{value.name}</font>
                                                        </font>
                                                    </font>
                                                </font>
                                            </a>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* Add more slider items as needed */}
                            {/* <div className="secondary-button slick-slide slick-current slick-active slick-center">
                                <a data-bgcolor="#8dc8e8" href="#website" target="" tabIndex="-1">
                                    <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>website</font>
                                    </font>
                                </a>
                            </div> */}

                            {/* <div className="secondary-button slick-slide slick-current slick-active slick-center">
                                <a data-bgcolor="#8dc8e8" href="#website" target="" tabIndex="-1">
                                    <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>Google banner advertisement</font>
                                    </font>
                                </a>
                            </div> */}
                            {/* Add more slider items as needed */}
                        </Slider>

                    </>
                    :

                    <div className="tags container">
                        {
                            productsList?.map((res, index) => (
                                <div className={'secondary-button'} style={{}} aria-hidden="true" tabIndex="0">
                                    <a data-bgcolor="#8dc8e8" onMouseEnter={(e) => { e.target.style.backgroundColor = res.color }} href={`#${res.name}`} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent' }} target="" tabindex="-1">{res.name}</a>
                                </div>
                            ))
                        }

                    </div>
            }
        </>
    )
}