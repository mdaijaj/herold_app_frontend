import { useContext } from "react";
import AppContext from "../../../../AppContext";
import Slider from "react-slick";
// import '../../../CustomStylesFiles/ProductsOnlineCompleteStyles.css';

export const ProductsOnlineCompleteCitationBlock = () => {
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
        <>{
            // isMobile ?
            //     <div className="citation slick-initialized slick-slider">
            //         <div className="slick-list draggable">
            //             <div className="slick-track" style={{ opacity: 1, width: '375px' }}>
            //                 <div className="citation-slider-item slick-slide slick-current slick-active" style={{ backgroundColor: 'rgb(51, 136, 102)', width: '375px', position: 'relative', left: '0px', top: '0px', zIndex: 999, opacity: 1 }} aria-hidden="false" tabIndex="0">
            //                     <div className="citation-inner container">
            //                         <div className="left-citation">
            //                             <img src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Steuerberater_O-Ton-1.jpg" alt="" width="600" height="900" />
            //                         </div>
            //                         <div className="right-citation ">
            //                             <p> After moving my law firm, I was faced with the problem that we could no longer be found with our correct data. With Gradimo Skupaj and Online Complete, the standardization and updating of our company data was done quickly and easily. Immediately, we could be found on the top 25 online platforms and were also ranked higher in Google, which in turn had a positive effect on inquiries from new clients. </p>
            //                             <p>–</p>
            //                             <p>Jürgen S.<br /> Tax Advisor</p>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // :
            <Slider {...settings} className="citation">
                <div className="slick-list draggable">
                    <div className="citation-slider-item slick-slide slick-current slick-active" style={{ backgroundColor: 'rgb(51, 136, 102)', width: '100%' }} aria-hidden="false" tabIndex="0">
                        <div className="citation-inner container" >
                            <div className="left-citation">
                                <img src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Steuerberater_O-Ton-1.jpg" alt="" width="600" height="900" />
                            </div>
                            <div className="right-citation">
                                <p> After moving my law firm, I was faced with the problem that we could no longer be found with our correct data. With Gradimo Skupaj and Online Complete, the standardization and updating of our company data was done quickly and easily. Immediately, we could be found on the top 25 online platforms and were also ranked higher in Google, which in turn had a positive effect on inquiries from new clients. </p>
                                <p>–</p>
                                <p>Jürgen S.<br /> Tax Advisor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        }
        </>
    )
}