import { useContext } from "react"
import AppContext from "../../../../AppContext"
import Slider from "react-slick";

export const ProductsGoogleSearchAdvertisingCitationBlock = () => {
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
                            <div className="citation-slider-item slick-slide slick-current slick-active" style={{ backgroundColor: 'rgb(255, 109, 106)', width: '100%' }} data-slick-index={0} aria-hidden={false} tabIndex={0}>
                                <div className="citation-inner container">
                                    <div className="left-citation">
                                        <img
                                            decoding="async"
                                            src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Installateur_O-Ton-1.jpg"
                                            alt=""
                                            width="600"
                                            height="900"
                                            data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Installateur_O-Ton-1.jpg"
                                            data-ll-status="loaded"
                                            className="entered lazyloaded"
                                        />
                                        <noscript>
                                            <img
                                                decoding="async"
                                                src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Installateur_O-Ton-1.jpg"
                                                alt=""
                                                width="600"
                                                height="900"
                                            />
                                        </noscript>
                                    </div>
                                    <div className="right-citation">
                                        <p >Large competitors have taken more and more customers away from me in recent years. It's logical if I can only be found somewhere on page 3 of the search engine. So I tried Google search engine advertising from Gradimo Skupaj and lo and behold – the phone rang in a tour. Through the targeted display of my service offer above the other companies, everyone found me the same. It's good for business and my customers – they're better off with me anyway.</p>
                                        <p >–</p>
                                        <p >Robert P., Installateur</p>
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