import { useContext } from "react"
import AppContext from "../../../../AppContext";
import Slider from "react-slick";

export const ProductsSocialMediaAdvertisementCitationBlock = () => {
    const { isMobile } = useContext(AppContext);
    var settings = {
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: false,
        nextArrow: false
    }
    return (
        <>
            {
                <>
                    <Slider {...settings} className="citation">
                        <div className="slick-list draggable">
                            <div
                                className="citation-slider-item slick-slide slick-current slick-active"
                                style={{
                                    backgroundColor: 'rgb(63, 108, 179)',
                                    width: '100%',
                                }}
                                data-slick-index={0}
                                aria-hidden={false}
                                tabIndex={0}
                            >
                                <div className="citation-inner container">
                                    <div className="left-citation">
                                        <img
                                            src="https://www.herold.at/marketing/wp-content/uploads/2023/09/AdobeStock_490614430.jpg"
                                            alt=""
                                            width="667"
                                            height="1000"
                                        />
                                    </div>
                                    <div className="right-citation">
                                        <p>I never really dared to approach social media advertising because I didn't know how to approach it and what to look out for. <br /> Thanks to Gradimo Skupaj, I don't have to worry about all that anymore and I'm visible to exactly the right people through my ads! <br /> Now my social media presence for my coffee house is finally achieving success. This is because targeted advertising increases my awareness and ensures more interactions with me on Facebook and Instagram. The results are really impressive and I have a partner on an equal footing with Gradimo Skupaj. <br /> –</p>
                                        <p>Tom W.<br />Barista</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </>
            }
        </>
    )
}