import { useContext, useEffect, useState } from "react"
import AppContext from "../../AppContext"
import Slider from "react-slick";

export const AboutTenthDiv = () => {
    const [sliderRef, setSliderRef] = useState(null);
    const mobileSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
    const imageData = [
        [
            { src: 'https://www.karriere.herold.at/uploads/SrQs6uuE/640x0_640x0/14_15.png', alt: 'Image 1' },
            { src: 'https://www.karriere.herold.at/uploads/ZGim2rEO/640x0_640x0/15_16.png', alt: 'Image 2' },
            { src: 'https://www.karriere.herold.at/uploads/fdEWLtVy/640x0_640x0/16_17.png', alt: 'Image 3' }
        ],
        [
            { src: 'https://www.karriere.herold.at/uploads/iycbYHYu/640x0_640x0/17_18.png', alt: 'Image 4' },
            { src: 'https://www.karriere.herold.at/uploads/6eiOSIUT/640x0_640x0/AUT_Gold_2018_19_300dpi.png', alt: 'Image 5' },
            { src: 'https://www.karriere.herold.at/uploads/gxzdGBwr/640x0_640x0/bestrecruiters19_20-resized.png', alt: 'Image 6' }
        ],
        // Add more arrays if needed for additional slides
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        arrows: true,
        slidesToScroll: 1
    };
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
    return (
        <>
            {
                isMobile ?
                    <>
                        <div id="r1236" className="row ">

                            <a id="auszeichnungen" className="rowanchor" />
                            <div className="container container-fixed ">
                                <div id="c4998" className="col col-sm-12">
                                    <div
                                        id="m3090"
                                        className="module imagelist"
                                        data-req="gallery"
                                        data-settings="imagecols=6,imagecols-md=6,imagecols-sm=2,arrows=true,margin=4,margin-md=2,margin-sm=6,dontcrop=true,imagenr=12,dots=true,imagenr-sm=2,auto=true,interval=7000"
                                        data-before-text="Vorher"
                                        data-after-text="Nachher"
                                    >

                                        <div className="slides">
                                            <a
                                                href="#"
                                                className="arrow arrowBefore"
                                                title="Vorher"
                                                aria-label="Before"
                                                _mstaria-label={78455}
                                                _msthash={342}
                                                _msttexthash={5614700}
                                            >
                                                
                                            </a>
                                            <a
                                                href="#"
                                                className="arrow arrowAfter"
                                                title="Nachher"
                                                aria-label="Afterwards"
                                                _mstaria-label={92183}
                                                _msthash={343}
                                                _msttexthash={5614791}
                                            >
                                                
                                            </a>
                                            <ul className="dots">
                                                <li className="" />
                                                <li className="active" />
                                                <li className="" />
                                                <li className="" />
                                                <li className="" />
                                                <li className="" />
                                                <li className="" />
                                                <li className="" />
                                                <li className="" />
                                                <li className="" />
                                                <li className="" />
                                                <li className="" />
                                                <li className="" />
                                            </ul>
                                            <div className="slide" aria-hidden="false" tabIndex={0} style={{}}>
                                                <ul className="pics clear">
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/fdEWLtVy/16_17.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img src="https://www.karriere.herold.at/uploads/fdEWLtVy/16_17.png" alt=""
                                                                data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/iycbYHYu/17_18.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img src="https://www.karriere.herold.at/uploads/iycbYHYu/17_18.png" alt=""
                                                                data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="slide" aria-hidden="true" tabIndex={-1} style={{}}>
                                                <ul className="pics clear">
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/6eiOSIUT/AUT_Gold_2018_19_300dpi.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img src="https://www.karriere.herold.at/uploads/6eiOSIUT/AUT_Gold_2018_19_300dpi.png"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/gxzdGBwr/bestrecruiters19_20-resized.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img
                                                                src="https://www.karriere.herold.at/uploads/gxzdGBwr/bestrecruiters19_20-resized.png"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="slide" aria-hidden="true" tabIndex={-1} style={{}}>
                                                <ul className="pics clear">
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/BkDSEYkg/AUT_Gold_2020_21_RGB_WEB_1.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img
                                                                src="https://www.karriere.herold.at/uploads/BkDSEYkg/AUT_Gold_2020_21_RGB_WEB_1.png"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/Z9onSgjk/AUT_Gold_2021_22_RGB_WEB_1.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img
                                                                src="https://www.karriere.herold.at/uploads/Z9onSgjk/AUT_Gold_2021_22_RGB_WEB_1.png"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="slide" aria-hidden="true" tabIndex={-1} style={{}}>
                                                <ul className="pics clear">
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/6knepIjq/AUT_Gold_2022_23_RGB_WEB.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img src="https://www.karriere.herold.at/uploads/6knepIjq/AUT_Gold_2022_23_RGB_WEB.png"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/iC2iqJgS/AUT_Gold_2023_24_RGB_WEB__msi___png.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img
                                                                src="https://www.karriere.herold.at/uploads/iC2iqJgS/AUT_Gold_2023_24_RGB_WEB__msi___png.png"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="slide" aria-hidden="true" tabIndex={-1} style={{}}>
                                                <ul className="pics clear">
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/iJdbJ0Ll/Siegel_D-A-CH_1.Platz_2018_19_sRGB_WEB.PNG"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img
                                                                src="https://www.karriere.herold.at/uploads/iJdbJ0Ll/Siegel_D-A-CH_1.Platz_2018_19_sRGB_WEB.PNG"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/BI535n0q/Siegel_D-A-CH_1.Platz_2019_20_WEB_KL.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img
                                                                src="https://www.karriere.herold.at/uploads/BI535n0q/Siegel_D-A-CH_1.Platz_2019_20_WEB_KL.png"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="slide" aria-hidden="true" tabIndex={-1} style={{}}>
                                                <ul className="pics clear">
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/o5f1GUG8/Siegel_D-A-CH_1.Platz_2021_22_vektor.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                                className="portrait"
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img
                                                                src="https://www.karriere.herold.at/uploads/o5f1GUG8/Siegel_D-A-CH_1.Platz_2021_22_vektor.png"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/7OtpGQ8i/Siegel_D-A-CH_10.Platz_2022_23_RGB_WEB__msi___png.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img
                                                                src="https://www.karriere.herold.at/uploads/7OtpGQ8i/Siegel_D-A-CH_10.Platz_2022_23_RGB_WEB__msi___png.png"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="slide" aria-hidden="true" tabIndex={-1} style={{}}>
                                                <ul className="pics clear">
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/OJamWEzb/freundin_kununu_TOP_Arbeitgeber_2021_CMYK_AU_hoch.jpg"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                                className="portrait"
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img
                                                                src="https://www.karriere.herold.at/uploads/OJamWEzb/freundin_kununu_TOP_Arbeitgeber_2021_CMYK_AU_hoch.jpg"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/3W145uDb/freundin_kununu_TOP_Arbeitgeber_2022_CMYK_AU_hoch.jpg"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                                className="portrait"
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img
                                                                src="https://www.karriere.herold.at/uploads/3W145uDb/freundin_kununu_TOP_Arbeitgeber_2022_CMYK_AU_hoch.jpg"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="slide" aria-hidden="true" tabIndex={-1} style={{}}>
                                                <ul className="pics clear">
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/kMChdCNP/TE-Siegel-color_KL.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img src="https://www.karriere.herold.at/uploads/kMChdCNP/TE-Siegel-color_KL.png"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/mtpnrik4/TOPArbeitgeber2020hoch.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img src="https://www.karriere.herold.at/uploads/mtpnrik4/TOPArbeitgeber2020hoch.png"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="slide" aria-hidden="true" tabIndex={-1} style={{}}>
                                                <ul className="pics clear">
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/kXObz8DA/trendtop19.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img src="https://www.karriere.herold.at/uploads/kXObz8DA/trendtop19.png" alt=""
                                                                data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/lOxYPZHG/Top_2020_GR.jpg"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img src="https://www.karriere.herold.at/uploads/lOxYPZHG/Top_2020_GR.jpg" alt=""
                                                                data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="slide" aria-hidden="true" tabIndex={-1} style={{}}>
                                                <ul className="pics clear">
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/iV45eaeX/kununu_2.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img src="https://www.karriere.herold.at/uploads/iV45eaeX/kununu_2.png" alt=""
                                                                data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/ASswLe90/kununu_1.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img src="https://www.karriere.herold.at/uploads/ASswLe90/kununu_1.png" alt=""
                                                                data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="slide" aria-hidden="true" tabIndex={-1} style={{}}>
                                                <ul className="pics clear">
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/jXUJb8nw/Digitaler-Badge_M.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img src="https://www.karriere.herold.at/uploads/jXUJb8nw/Digitaler-Badge_M.png" alt=""
                                                                data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/vtYlrybU/GPTW_Certified_Jnner_2020_CMYK_JPG_KL.jpg"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img
                                                                src="https://www.karriere.herold.at/uploads/vtYlrybU/GPTW_Certified_Jnner_2020_CMYK_JPG_KL.jpg"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="slide" aria-hidden="true" tabIndex={-1} style={{}}>
                                                <ul className="pics clear">
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/viluWmM2/20170424_WOMAN_Siegel_Dienstleistungen_KL.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img
                                                                src="https://www.karriere.herold.at/uploads/viluWmM2/20170424_WOMAN_Siegel_Dienstleistungen_KL.png"
                                                                alt="" data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                    <li>

                                                        <span className="thumb">

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/5mExbroQ/charta-logo_KL.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                            />
                                                            <noscript data-lazyload-alt="">

                                                                &lt;img src="https://www.karriere.herold.at/uploads/5mExbroQ/charta-logo_KL.png" alt=""
                                                                data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="slide" aria-hidden="false" tabIndex={0} style={{}}>
                                                <ul className="pics clear" />
                                            </div>
                                            <div
                                                className="slide"
                                                aria-hidden="true"
                                                tabIndex={-1}
                                                data-firstslide="true"
                                                style={{}}
                                                _mstvisible={0}
                                            >

                                                <ul className="pics clear" _mstvisible={1}>

                                                    <li _mstvisible={2}>

                                                        <span className="thumb" _mstvisible={3}>

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/SrQs6uuE/14_15.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                                _mstvisible={4}
                                                            />
                                                            <noscript data-lazyload-alt="" _mstvisible={4}>

                                                                &lt;img src="https://www.karriere.herold.at/uploads/SrQs6uuE/14_15.png" alt=""
                                                                data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                    <li _mstvisible={2}>

                                                        <span className="thumb" _mstvisible={3}>

                                                            <img
                                                                src="https://www.karriere.herold.at/uploads/ZGim2rEO/15_16.png"
                                                                alt=""
                                                                data-ai=""
                                                                data-author=""
                                                                _mstvisible={4}
                                                            />
                                                            <noscript data-lazyload-alt="" _mstvisible={4}>

                                                                &lt;img src="https://www.karriere.herold.at/uploads/ZGim2rEO/15_16.png" alt=""
                                                                data-author="" data-ai=""&gt;
                                                            </noscript>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </>
                    :

                    <>
                        <div id="r1236" class="row ">
                            <a id="auszeichnungen" class="rowanchor"></a>
                            <div class="container container-fixed ">
                                <div id="c4998" class="col col-sm-12">
                                    <div id="m3090" class="module imagelist" data-req="gallery" data-settings="imagecols=6,imagecols-md=6,imagecols-sm=2,arrows=true,margin=4,margin-md=2,margin-sm=6,dontcrop=true,imagenr=12,dots=true,imagenr-sm=2,auto=true,interval=7000" data-before-text="Vorher" data-after-text="Nachher">
                                        <div class="slides">
                                            <a href="#" class="arrow arrowBefore" title="Vorher" aria-label="Before" _mstaria-label="78455" _msthash="161" _msttexthash="5614700"></a>
                                            <a href="#" class="arrow arrowAfter" title="Nachher" aria-label="Afterwards" _mstaria-label="92183" _msthash="162" _msttexthash="5614791"></a>
                                            <ul class="dots">
                                                <li class="active"></li>
                                                <li class=""></li>
                                                <li class=""></li>
                                            </ul>
                                            <div class="slide" aria-hidden="false" tabindex="0" data-firstslide="true" style={{}} _mstvisible="0">
                                                <ul class="pics clear" _mstvisible="1">
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/SrQs6uuE/640x0_640x0/14_15.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/ZGim2rEO/640x0_640x0/15_16.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/fdEWLtVy/640x0_640x0/16_17.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/iycbYHYu/640x0_640x0/17_18.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/6eiOSIUT/640x0_640x0/AUT_Gold_2018_19_300dpi.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/gxzdGBwr/640x0_640x0/bestrecruiters19_20-resized.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/BkDSEYkg/640x0_640x0/AUT_Gold_2020_21_RGB_WEB_1.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/Z9onSgjk/640x0_640x0/AUT_Gold_2021_22_RGB_WEB_1.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/6knepIjq/640x0_640x0/AUT_Gold_2022_23_RGB_WEB.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/iC2iqJgS/640x0_640x0/AUT_Gold_2023_24_RGB_WEB__msi___png.webp" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/iJdbJ0Ll/640x0_640x0/Siegel_D-A-CH_1.Platz_2018_19_sRGB_WEB.PNG" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/BI535n0q/640x0_640x0/Siegel_D-A-CH_1.Platz_2019_20_WEB_KL.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slide" aria-hidden="true" tabindex="-1" style={{}} _mstvisible="0">
                                                <ul class="pics clear" _mstvisible="1">
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/o5f1GUG8/640x0_640x0/Siegel_D-A-CH_1.Platz_2021_22_vektor.png" alt="" data-ai="" data-author="" class="portrait" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/7OtpGQ8i/640x0_640x0/Siegel_D-A-CH_10.Platz_2022_23_RGB_WEB__msi___png.webp" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/OJamWEzb/640x0_640x0/freundin_kununu_TOP_Arbeitgeber_2021_CMYK_AU_hoch.jpg" alt="" data-ai="" data-author="" class="portrait" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/3W145uDb/640x0_640x0/freundin_kununu_TOP_Arbeitgeber_2022_CMYK_AU_hoch.jpg" alt="" data-ai="" data-author="" class="portrait" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/kMChdCNP/640x0_640x0/TE-Siegel-color_KL.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/mtpnrik4/640x0_640x0/TOPArbeitgeber2020hoch.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/kXObz8DA/640x0_640x0/trendtop19.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/lOxYPZHG/640x0_640x0/Top_2020_GR.jpg" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/iV45eaeX/640x0_640x0/kununu_2.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/ASswLe90/640x0_640x0/kununu_1.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/jXUJb8nw/640x0_640x0/Digitaler-Badge_M.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/vtYlrybU/640x0_640x0/GPTW_Certified_Jnner_2020_CMYK_JPG_KL.jpg" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="slide" aria-hidden="true" tabindex="-1" style={{}} _mstvisible="0">
                                                <ul class="pics clear" _mstvisible="1">
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/viluWmM2/640x0_640x0/20170424_WOMAN_Siegel_Dienstleistungen_KL.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                    <li _mstvisible="2">
                                                        <span class="thumb" _mstvisible="3">
                                                            <img src="https://www.karriere.herold.at/uploads/5mExbroQ/640x0_640x0/charta-logo_KL.png" alt="" data-ai="" data-author="" _mstvisible="4" />

                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}