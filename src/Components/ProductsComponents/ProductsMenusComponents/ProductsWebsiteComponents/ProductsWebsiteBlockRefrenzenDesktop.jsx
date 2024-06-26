import { useContext, useEffect, useRef, useState } from "react"
import AppContext from "../../../../AppContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





export const ProductsWebsiteBlockRefrenzenDesktop = () => {
    const { curWidth } = useContext(AppContext);
    const [sliderRef, setSliderRef] = useState(null);

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

    function AnotherPrevArrow() {
        return (
            <span class="referenzen_prev_arrow"><img onClick={sliderRef?.slickPrev} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /><noscript><img width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" /></noscript></span>
        )
    }

    function AnotherNextArrow() {
        return (
            <span class="referenzen_next_arrow"><img onClick={sliderRef?.slickNext} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /><noscript><img width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" /></noscript></span>
        )
    }

    var settings = {
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 100,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    nextArrow: <AnotherNextArrow />,
                    prevArrow: <AnotherPrevArrow />,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 100,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    appendDots: dots => (
                        <div>
                            <div className="arrows_referenzen herold_arrows_wrapper">
                                <AnotherPrevArrow />
                                <div className="arrows_referenzen_between">
                                    {dots}
                                </div>
                                <AnotherNextArrow />
                            </div>
                        </div>
                    )

                }
            }
        ]
    };

    return (
        <>
            <div className="block referenzen">
                <div class="title-head">
                    <h2 _msttexthash="1141829" _msthash="112">Here's what your website could look like:</h2>
                </div>
                <div className="referenzen_inner">

                    <Slider ref={setSliderRef} {...settings}>

                        <a href="https://www.chaletsonneck.com/" target="_blank" title="Website in neuem Tab öffnen" tabIndex="-1" role="tabpanel" id="" aria-hidden="true">
                            <img
                                width="500"
                                height="350"
                                src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-25.png"
                                alt=""
                            />
                        </a>
                        <a href="https://www.weiser1a.at/" target="_blank" title="Website in neuem Tab öffnen" tabIndex="-1" role="tabpanel" id="" aria-hidden="true">
                            <img
                                width="500"
                                height="350"
                                src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-21.png"
                                alt=""
                            />
                        </a>
                        <a href="https://www.marta-bogen70.at/" target="_blank" title="Website in neuem Tab öffnen" className="slick-slide slick-current slick-active" tabIndex="0" role="tabpanel" id="slick-slide30" aria-hidden="false">
                            <img
                                width="500"
                                height="350"
                                src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-20.png"
                                alt=""

                            />
                        </a>
                        <a href="https://shop.derhafnermeister.at/" target="_blank" title="Website in neuem Tab öffnen" tabIndex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control31" _mstvisible="1" aria-hidden="true" _msthidden="6">
                            <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-30.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-30.png" data-ll-status="loaded" className="entered lazyloaded" _mstvisible="2" /><noscript _mstvisible="2"><img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-30.png" alt="" /></noscript>
                        </a>
                        <a href="https://www.fitnesstrainingwien.at/" target="_blank" title="Website in neuem Tab öffnen" tabIndex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control32" _mstvisible="1" aria-hidden="true" _msthidden="6">
                            <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-29.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-29.png" data-ll-status="loaded" className="entered lazyloaded" _mstvisible="2" /><noscript _mstvisible="2"><img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-29.png" alt="" /></noscript>
                        </a>
                        <a href="https://www.grafundpartner.at/" target="_blank" title="Website in neuem Tab öffnen" tabIndex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control33" _mstvisible="1" aria-hidden="true" _msthidden="6">
                            <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-28.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-28.png" data-ll-status="loaded" className="entered lazyloaded" _mstvisible="2" /><noscript _mstvisible="2"><img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-28.png" alt="" /></noscript>
                        </a>
                        <a href="https://www.vorsorgenotar.at/" target="_blank" title="Website in neuem Tab öffnen" tabIndex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control34" _mstvisible="1" aria-hidden="true" _msthidden="6">
                            <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-27.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-27.png" data-ll-status="loaded" className="entered lazyloaded" _mstvisible="2" /><noscript _mstvisible="2"><img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-27.png" alt="" /></noscript>
                        </a>
                        <a href="https://www.zahnarztsalzburg.at/" target="_blank" title="Website in neuem Tab öffnen" tabIndex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control35" _mstvisible="1" aria-hidden="true" _msthidden="6">
                            <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-26.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-26.png" data-ll-status="loaded" className="entered lazyloaded" _mstvisible="2" /><noscript _mstvisible="2"><img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-26.png" alt="" /></noscript>
                        </a>
                        <a href="https://www.chaletsonneck.com/" target="_blank" title="Website in neuem Tab öffnen" tabIndex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control36" _mstvisible="1" aria-hidden="true" _msthidden="6">
                            <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-25.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-25.png" data-ll-status="loaded" className="entered lazyloaded" _mstvisible="2" /><noscript _mstvisible="2"><img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-25.png" alt="" /></noscript>
                        </a>


                    </Slider>



                </div>
            </div>
        </>
    )
}