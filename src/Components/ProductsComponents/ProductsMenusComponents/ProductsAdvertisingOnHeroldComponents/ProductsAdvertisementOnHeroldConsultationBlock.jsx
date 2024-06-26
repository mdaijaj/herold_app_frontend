import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsAdvertisementOnHeroldConsultationBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalID = setInterval(() => {
            if (index === 4) {
                setIndex(0);
            }
            else {
                setIndex(index + 1);
            }
        }, 3000);
        return () => clearInterval(intervalID);
    }, [index])
    return (
        <>
            {
                isMobile ?
                    <>
                        <div class="beratung-block">
                            <div class="container">
                                <div class="title-head">
                                    <h2>Get non-binding advice now!</h2>
                                    <h3>Get advice straight away and start this week.</h3>
                                </div>
                                <div class="primary-button">
                                    <a href="https://www.herold.at/marketing/kontakt/?term=herold" target="">Get Advice now!</a>
                                </div>


                                <div class="customer">
                                    <h3>Over 45,000 customers already trust us</h3>
                                </div>

                                <div class="company-slider slick-initialized slick-slider">
                                    <div class="slick-list draggable">
                                        <div class="slick-track" style={index === 0 ? { width: '1680px', transition: 'transform 7500ms linear', transform: 'translate3d(-336px, 0px, 0px)', opacity: 1 } : index === 1 ? { width: '1680px', transition: 'transform 7500ms linear', transform: 'translate3d(-504px, 0px, 0px)', opacity: 1 } : index === 2 ? { width: '1680px', transition: 'transform 7500ms linear', transform: 'translate3d(-672px, 0px, 0px)', opacity: 1 } : index === 3 ? { width: '1680px', transition: 'transform 7500ms linear', transform: 'translate3d(-1008px, 0px, 0px)', opacity: 1 } : { width: '1680px', transition: 'transform 7500ms linear', transform: 'translate3d(-1008px, 0px, 0px)', opacity: 1 }}>
                                            <div style={{ backgroundColor: "rgb(255, 255, 255)", width: "144px" }} class="company-item slick-slide slick-cloned" data-slick-index="-2" id="" aria-hidden="true" tabindex="-1">
                                                <img width="1600" height="864" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201600%20864'%3E%3C/svg%3E" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/JohnHarris_xl_rgb.jpg" />

                                            </div><div style={{ backgroundColor: "rgb(255, 255, 255)", width: "144px" }} class="company-item slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1">
                                                <img width="1200" height="300" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20300'%3E%3C/svg%3E" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/09/logo_quer-2.png" />

                                            </div><div style={{ backgroundColor: "rgb(255, 255, 255)", width: "144px" }} class="company-item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1">
                                                <img width="250" height="250" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Allgas.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Allgas.png" data-ll-status="loaded" class="entered lazyloaded" />

                                            </div><div style={{ backgroundColor: "rgb(255, 255, 255)", width: "144px" }} class="company-item slick-slide slick-active" data-slick-index="1" aria-hidden="false" tabindex="-1">
                                                <img width="834" height="235" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/HYPO-NOE-2014-4c.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/HYPO-NOE-2014-4c.png" data-ll-status="loaded" class="entered lazyloaded" />

                                            </div><div style={{ backgroundColor: "rgb(255, 255, 255)", width: "144px" }} class="company-item slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1">
                                                <img width="1600" height="864" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/JohnHarris_xl_rgb.jpg" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/JohnHarris_xl_rgb.jpg" data-ll-status="loaded" class="entered lazyloaded" />

                                            </div><div style={{ backgroundColor: "rgb(255, 255, 255)", width: "144px" }} class="company-item slick-slide" data-slick-index="3" aria-hidden="true" tabindex="0">
                                                <img width="1200" height="300" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/09/logo_quer-2.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/09/logo_quer-2.png" data-ll-status="loaded" class="entered lazyloaded" />

                                            </div><div style={{ backgroundColor: "rgb(255, 255, 255)", width: "144px" }} class="company-item slick-slide slick-cloned" data-slick-index="4" id="" aria-hidden="true" tabindex="-1">
                                                <img width="250" height="250" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Allgas.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Allgas.png" data-ll-status="loaded" class="entered lazyloaded" />

                                            </div><div style={{ backgroundColor: "rgb(255, 255, 255)", width: "144px" }} class="company-item slick-slide slick-cloned" data-slick-index="5" id="" aria-hidden="true" tabindex="-1">
                                                <img width="834" height="235" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/HYPO-NOE-2014-4c.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/HYPO-NOE-2014-4c.png" data-ll-status="loaded" class="entered lazyloaded" />

                                            </div><div style={{ backgroundColor: "rgb(255, 255, 255)", width: "144px" }} class="company-item slick-slide slick-cloned" data-slick-index="6" id="" aria-hidden="true" tabindex="-1">
                                                <img width="1600" height="864" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201600%20864'%3E%3C/svg%3E" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/JohnHarris_xl_rgb.jpg" />

                                            </div><div style={{ backgroundColor: "rgb(255, 255, 255)", width: "144px" }} class="company-item slick-slide slick-cloned" data-slick-index="7" id="" aria-hidden="true" tabindex="-1">
                                                <img width="1200" height="300" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20300'%3E%3C/svg%3E" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/09/logo_quer-2.png" />

                                            </div></div></div>



                                </div>

                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div class="beratung-block">
                            <div class="container">
                                <div class="title-head">
                                    <h2 _msttexthash="1025245" _msthash="202">Get a no-obligation consultation now!</h2>
                                    <h3 _msttexthash="1142700" _msthash="203">Get advice right away and start this week.</h3>
                                </div>
                                <div class="primary-button">
                                    <a href="https://www.herold.at/marketing/kontakt/?term=herold" target="" _msttexthash="206570" _msthash="204">Get advice now</a>
                                </div>
                                <div class="customer">
                                    <h3 _msttexthash="1243320" _msthash="205">More than 45,000 customers already trust us</h3>
                                </div>
                                <div class="company-slider">
                                    <div style={{ backgroundColor: "#FFFFFF" }} class="company-item" tabindex="-1">
                                        <img width="250" height="250" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Allgas.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Allgas.png" data-ll-status="loaded" class="entered lazyloaded" />

                                    </div><div style={{ backgroundColor: "#FFFFFF" }} class="company-item" tabindex="-1">
                                        <img width="834" height="235" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/HYPO-NOE-2014-4c.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/HYPO-NOE-2014-4c.png" data-ll-status="loaded" class="entered lazyloaded" />

                                    </div><div style={{ backgroundColor: "#FFFFFF" }} class="company-item" tabindex="0">
                                        <img width="1600" height="864" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/JohnHarris_xl_rgb.jpg" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/JohnHarris_xl_rgb.jpg" data-ll-status="loaded" class="entered lazyloaded" />

                                    </div><div style={{ backgroundColor: "#FFFFFF" }} class="company-item" tabindex="0">
                                        <img width="1200" height="300" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/09/logo_quer-2.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/09/logo_quer-2.png" data-ll-status="loaded" class="entered lazyloaded" />

                                    </div></div>

                            </div>
                        </div>
                    </>
            }
        </>
    )
}