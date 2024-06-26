import { useContext } from "react"
import AppContext from "../../../../AppContext"
import Slider from "react-slick";

export const ProductsGoogleBannerAdvertisementCitationBlock = () => {
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

                <Slider {...settings} className="citation">
                    <div class="slick-list draggable">
                        <div class="citation-slider-item slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(229, 89, 52)", width: "100%" }} data-slick-index="0" aria-hidden="false" tabindex="0">
                            <div class="citation-inner container">
                                <div class="left-citation">
                                    <img decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Modehändlerin_O-Ton.jpg" alt="" width="600" height="900" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Modehändlerin_O-Ton.jpg" data-ll-status="loaded" class="entered lazyloaded" />
                                </div>
                                <div class="right-citation ">
                                    <p _msttexthash="96085847" _msthash="395">The fashion industry is highly competitive and as a small boutique, it is not easy to keep up with the online shopping giants. However, Gradimo Skupaj has shown me how I can reach my customers with targeted banner advertising and convince them of my unique assortment and my personal advice. The result is not only higher visitor numbers to my online shop, but also significantly more customers who come to visit me in the store to try on new styles. </p>
                                    <p _msttexthash="747201" _msthash="396">–</p>
                                    <p _msttexthash="543322" _msthash="397">Karla G., fashion retailer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            }
        </>
    )
}