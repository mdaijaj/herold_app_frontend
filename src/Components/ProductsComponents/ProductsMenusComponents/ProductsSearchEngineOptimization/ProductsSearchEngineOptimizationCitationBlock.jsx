import { useContext } from "react"
import AppContext from "../../../../AppContext"
import Slider from "react-slick";

export const ProductsSearchEngineOptimizationCitationBlock = () => {
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
                        <div class="slick-list draggable">
                            <div class="citation-slider-item slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(145, 132, 190)", width: "100%" }} data-slick-index="0" aria-hidden="false" tabindex="0">
                                <div class="citation-inner container">
                                    <div class="left-citation">
                                        <img decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Yogalehrerin_O-Ton-1.jpg" alt="" width="561" height="841" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Yogalehrerin_O-Ton-1.jpg" data-ll-status="loaded" class="entered lazyloaded" />
                                    </div>
                                    <div class="right-citation ">
                                        <p _msttexthash="100480159" _msthash="92">Although I already had a stylish website of my studio online, I was always at the bottom of the search results. In a consultation with Gradimo Skupaj, "Search Engine Optimization" was explained to me and recommended. They then adjusted and improved all my content so that I was ranked higher by the search engines. It actually worked and after a short time I was on page 1 of Google. <br _istranslated="1" /> –</p>
                                        <p _msttexthash="504712" _msthash="93">Amara P.<br _istranslated="1" /> Yoga Studio Owner </p>
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