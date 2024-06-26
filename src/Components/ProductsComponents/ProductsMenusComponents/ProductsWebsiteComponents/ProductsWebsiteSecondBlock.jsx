import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"
import Slider from "react-slick";
import striptags from 'striptags';

export const ProductsWebsiteSecondBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [sliderRef, setSliderRef] = useState(null);
    const { currentPageContent } = useContext(AppContext);

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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        appendDots: dots => (
            <div>
                <div className="arrows_usp herold_arrows_wrapper" style={{ marginTop: '30px' }}>
                    <AnotherPrevArrow />
                    <div className="arrows_usp_between">
                        {dots}
                    </div>
                    <AnotherNextArrow />
                </div>
            </div>
        )
    };



    useEffect(() => {


        const handleResize = () => {
            setIsLargeScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        // return () => {

        // };

        // Change the interval as needed (3 seconds in this case)

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [setIsLargeScreen]);

    return (
        <>
            {
                isLargeScreen ?
                    <>

                        <div class="block">
                            <div class="usp-inner container">
                                <div class="title-head">
                                    <h2 _msttexthash="985569" _msthash="146" class="stop">{currentPageContent?.why_herold_heading}</h2>
                                    <h3 _msttexthash="9503975" _msthash="147">{currentPageContent?.why_herold_sub_heading}</h3>
                                </div>
                                {/* <div class="card-slider slick-initialized slick-slider slick-dotted">
                                    <div class="slick-list draggable">
                                        <div class="slick-track" style={index === 0 ? { opacity: "1", width: "2345px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "2345px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "2345px", transform: "translate3d(-660px, 0px, 0px)" } : {}}> */}
                                <Slider ref={setSliderRef} className="card-slider" {...settings}>
                                    {
                                        currentPageContent?.why_herold?.map((value, index) => (
                                            <div>
                                                <div class="card slick-slide slick-current slick-active" style={{ backgroundColor: value?.color, width: "100%" }} tabindex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control22" data-slick-index="-1" aria-hidden="true">
                                                    <div class="text">
                                                        <h2 data-startnumber="100" class="stop" style={{ color: 'black' }}><e _msttexthash="15067" _msthash="148">{value?.number}</e>{value?.symbol}</h2>
                                                        <p _msttexthash="4639570" _msthash="149" style={{ color: 'black' }}>{striptags(value?.description).replace(/&nbsp;/g, '')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                                {/* </div>
                                    </div>
                                </div> */}

                                {/* <div class="arrows_usp herold_arrows_wrapper">
                                    <span class="usp_prev_arrow herold_slick_btn_4 slick-arrow" style={{}}><img width="24" onClick={() => { setIndex(index - 1) }} height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                    <div class="arrows_usp_between">
                                        <ul class="slick-dots" style={{}} role="tablist">
                                            <li className={index === 0 ? "slick-active" : ""} role="presentation"><button type="button" role="tab" id="slick-slide-control20" aria-controls="slick-slide20" aria-label="1 of 3" tabindex="0" _mstaria-label="34567" _msthash="162" _msttexthash="4459" aria-selected="true">1</button></li><li className={index === 1 ? "slick-active" : ""} role="presentation"><button type="button" role="tab" id="slick-slide-control21" aria-controls="slick-slide21" aria-label="2 of 3" tabindex="-1" _mstaria-label="34658" _msthash="163" _msttexthash="4550">2</button></li><li role="presentation" className={index === 2 ? "slick-active" : ""}><button type="button" role="tab" id="slick-slide-control22" aria-controls="slick-slide22" aria-label="3 of 3" tabindex="-1" _mstaria-label="34749" _msthash="164" _msttexthash="4641">3</button></li></ul></div>
                                    <span class="usp_next_arrow herold_slick_btn_4 slick-arrow" style={{}}><img width="20" onClick={() => { setIndex(index + 1) }} height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                </div> */}


                                <span class="subtext-quell" _msttexthash="136227" _msthash="165"><sup _istranslated="1">1</sup> Gradimo Skupaj , 2020</span>

                            </div>
                        </div >
                    </>
                    :
                    <div className="block">
                        <div className="usp-inner container">
                            <div className="title-head">
                                <h2 style={{ color: 'black' }}>{currentPageContent?.why_skupaj_heading}</h2>
                                <h3 style={{ color: 'black' }}>{currentPageContent?.why_skupaj_sub_heading}</h3>
                            </div>
                            <div className="card-slider">
                                {
                                    currentPageContent?.why_skupaj?.map((value, index) => (
                                        <div className="card" style={{ backgroundColor: value.color }}>
                                            <div className="text">
                                                <h2 style={{ color: 'black' }}>{value.number}{value.symbol}</h2>
                                                <p style={{ color: 'black' }}>{striptags(value?.description).replace(/&nbsp;/g, '')}<sup style={{ fontSize: '12px' }}>1</sup></p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <span className="subtext-quell" style={{ fontSize: '14px', color: '#888', marginTop: '10px' }}><sup style={{ fontSize: '12px' }}>1</sup> Gradimo Skupaj , 2020</span>
                        </div>
                    </div>
            }
        </>
    )
}