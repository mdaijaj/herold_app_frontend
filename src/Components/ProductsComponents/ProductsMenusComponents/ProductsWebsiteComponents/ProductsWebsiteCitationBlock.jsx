import { useContext } from "react"
import AppContext from "../../../../AppContext"
import Slider from "react-slick";

export const ProductsWebsiteCitationBlock = () => {
    const { isMobile, currentPageContent, baseBackendRoute } = useContext(AppContext);
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
            <Slider {...settings} className="citation">
                <div className="slick-list draggable">
                    <div className="slick-track">
                        <div className="citation-slider-item slick-slide slick-current slick-active" style={{ backgroundColor: currentPageContent?.color, width: '100%' }} aria-hidden="false" tabIndex="0">
                            <div className="citation-inner container">
                                <div className="left-citation">
                                    <img src={`${baseBackendRoute}${currentPageContent?.author?.author_image}`} alt="" width="600" height="900" />
                                </div>
                                <div className="right-citation light_color">
                                    <div dangerouslySetInnerHTML={{ __html: currentPageContent?.author?.description }} class="bodytext" _msthidden="2">

                                    </div>
                                    <p>–</p>
                                    <p>{currentPageContent?.author?.author_name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>

        </>
    )
}