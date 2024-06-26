import { useContext, useEffect, useState } from "react";
import Slider from "react-slick"
import AppContext from "../../AppContext";

export const AboutSevenDiv = () => {
    const [sliderRef, setSliderRef] = useState(null);
    const { aboutContent, baseBackendRoute } = useContext(AppContext);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
    };

    const tabletSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const mobileSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    function PrevArrow() {
        return (
            <a onClick={sliderRef?.slickPrev} class="arrow arrowBefore" title="Vorher" aria-label="Before" _mstaria-label="78455" _msthash="979" _msttexthash="5614700"></a>
        )
    }

    function NextArrow() {

        return (
            <a onClick={sliderRef?.slickNext} class="arrow arrowAfter" title="Vorher" aria-label="Before" _mstaria-label="78455" _msthash="979" _msttexthash="5614700"></a>
        )
    }


    function SampleNextArrow() {
        return (

            <span class="referenzen_next_arrow_abs"><img onClick={sliderRef?.slickNext} width="22" height="41" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/arrow-full.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/arrow-full.svg" data-ll-status="loaded" class="entered lazyloaded" /><noscript><img width="22" height="41" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/arrow-full.svg" /></noscript></span>

        );
    }

    function SamplePrevArrow() {

        return (
            <span class="referenzen_prev_arrow_abs"><img onClick={sliderRef?.slickPrev} width="22" height="41" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/arrow-full.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/arrow-full.svg" data-ll-status="loaded" class="entered lazyloaded" /><noscript><img width="22" height="41" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/arrow-full.svg" /></noscript></span>

        );
    }
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 767px)').matches);
    const [isTablet, setIsTablet] = useState(window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches);
    const [isDesktop, setIsDesktop] = useState(window.matchMedia('(min-width: 1200px)').matches);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia('(max-width: 767px)').matches);
            setIsTablet(window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches);
            setIsDesktop(window.matchMedia('(min-width: 1200px)').matches);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        console.log(aboutContent);
    }, [aboutContent])

    return (
        <>
            <div id="r4939" className="row">
                <div class="col col-sm-12">
                    <div id="m1647" class="module text">
                        <p class="headline" style={{ textAlign: "center" }} _msttexthash="135174" _msthash="93">{aboutContent?.about_gradimo?.values_heading}</p>
                    </div>
                </div>
                {
                    isMobile ?
                        <>
                            <div className="col col-sm-12 col-lg-12 col-md-12">
                                <div id="m2414" className="module imagelist" data-req="gallery" data-settings="imagecols=6,imagecols-md=3,arrows=true,margin=2,margin-md=2,margin-sm=6,dontcrop=true,imagenr-md=3,imagenr-sm=1,auto=true" data-before-text="Vorher" data-after-text="Nachher">
                                    <Slider ref={setSliderRef} className="slides" {...mobileSettings}>
                                        <div>
                                            <ul className="pics clear" _mstvisible={1}>
                                                <li _mstvisible={2}>
                                                    <span className="thumb" _mstvisible={3}>
                                                        <img src={`${baseBackendRoute}${aboutContent?.about_gradimo?.values_image}`} alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <ul className="pics clear" _mstvisible={1}>
                                                <li _mstvisible={2}>
                                                    <span className="thumb" _mstvisible={3}>
                                                        <img src={`${baseBackendRoute}${aboutContent?.about_gradimo?.values_image}`} alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <ul className="pics clear" _mstvisible={1}>
                                                <li _mstvisible={2}>
                                                    <span className="thumb" _mstvisible={3}>
                                                        <img src={`${baseBackendRoute}${aboutContent?.about_gradimo?.values_image}`} alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <ul className="pics clear" _mstvisible={1}>
                                                <li _mstvisible={2}>
                                                    <span className="thumb" _mstvisible={3}>
                                                        <img src={`${baseBackendRoute}${aboutContent?.about_gradimo?.values_image}`} alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <div>
                                            <ul className="pics clear" _mstvisible={1}>
                                                <li _mstvisible={2}>
                                                    <span className="thumb" _mstvisible={3}>
                                                        <img src="https://www.karriere.herold.at/uploads/srhsFpE6/736x0_640x0/offen_flexibel.png" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <ul className="pics clear" _mstvisible={1}>
                                                <li _mstvisible={2}>
                                                    <span className="thumb" _mstvisible={3}>
                                                        <img src="https://www.karriere.herold.at/uploads/XCvWbBkc/736x0_640x0/teamorientiert.png" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <ul className="pics clear" _mstvisible={1}>
                                                <li _mstvisible={2}>
                                                    <span className="thumb" _mstvisible={3}>
                                                        <img src="https://www.karriere.herold.at/uploads/QSqxaIxR/736x0_640x0/leistungsbereit.png" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className="pics clear" _mstvisible={1}>
                                                <li _mstvisible={2}>
                                                    <span className="thumb" _mstvisible={3}>
                                                        <img src="https://www.karriere.herold.at/uploads/85vKUsKr/736x0_640x0/eigeninitiativ.png" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className="pics clear" _mstvisible={1}>
                                                <li _mstvisible={2}>
                                                    <span className="thumb" _mstvisible={3}>
                                                        <img src="https://www.karriere.herold.at/uploads/uUuh5X0I/736x0_640x0/serviceorientiert.png" alt="" />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div> */}
                                    </Slider>
                                </div>
                            </div>
                        </>
                        :
                        isTablet ?
                            <>
                                <div className="col col-sm-12 col-lg-12 col-md-12">
                                    <div id="m2414" className="module imagelist" data-req="gallery" data-settings="imagecols=6,imagecols-md=3,arrows=true,margin=2,margin-md=2,margin-sm=6,dontcrop=true,imagenr-md=3,imagenr-sm=1,auto=true" data-before-text="Vorher" data-after-text="Nachher">
                                        <Slider ref={setSliderRef} className="slides-1" {...tabletSettings}>
                                            <div style={{ marginLeft: '50px' }}>
                                                <img src={`${baseBackendRoute}${aboutContent?.about_gradimo?.values_image}`} alt="" />
                                            </div>
                                            <div style={{ marginLeft: '50px' }}>
                                                <img src={`${baseBackendRoute}${aboutContent?.about_gradimo?.values_image}`} alt="" />
                                            </div>
                                            <div style={{ marginLeft: '50px' }}>
                                                <img src={`${baseBackendRoute}${aboutContent?.about_gradimo?.values_image}`} alt="" />
                                            </div>

                                        </Slider>

                                    </div>
                                </div>
                            </>
                            :
                            <div className="col col-sm-12 col-lg-12 col-md-12">
                                <div id="m2414" className="module imagelist" data-req="gallery" data-settings="imagecols=6,imagecols-md=3,arrows=true,margin=2,margin-md=2,margin-sm=6,dontcrop=true,imagenr-md=3,imagenr-sm=1,auto=true" data-before-text="Vorher" data-after-text="Nachher">
                                    <Slider className="slides" {...settings}>
                                        <div>
                                            <img src={`${baseBackendRoute}${aboutContent?.about_gradimo?.values_image}`} alt="" />
                                        </div>
                                        <div>
                                            <img src={`${baseBackendRoute}${aboutContent?.about_gradimo?.values_image}`} alt="" />
                                        </div>
                                        <div>
                                            <img src={`${baseBackendRoute}${aboutContent?.about_gradimo?.values_image}`} alt="" />
                                        </div>

                                    </Slider>
                                </div>
                            </div>

                }
            </div>
        </>
    )
}