import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext";
import { ProductsArrowsRederenzen } from "./ProductsArrowsRederenzen";
import { ProductsWebsiteBlockRefrenzenDesktop } from "./ProductsWebsiteBlockRefrenzenDesktop";
export const ProductsWebsiteBlockRefrenzen = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index === -1) {
            setIndex(8);
        }
        if (index === 9) {
            setIndex(0);
        }
        const intervalID = setInterval(() => {
            if (index === 9) {
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
                <div className="block referenzen">
                    <div className="title-head">
                        <h2>Here's what your website could look like:</h2>
                    </div>
                    <div className="referenzen_inner">
                        <span className="referenzen_prev_arrow_abs">
                            <img
                                width="22"
                                height="41"
                                src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/arrow-full.svg"
                                alt=""
                            />
                        </span>

                        <div className="container card-slider slick-initialized slick-slider slick-dotted">
                            <div className="slick-list draggable">
                                <div className="slick-track" style={index === 0 ? { opacity: 1, width: '6365px', transform: 'translate3d(-0px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : index === 1 ? { opacity: 1, width: '6365px', transform: 'translate3d(-335px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : index === 2 ? { opacity: 1, width: '6365px', transform: 'translate3d(-670px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : index === 3 ? { opacity: 1, width: '6365px', transform: 'translate3d(-1005px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : index === 4 ? { opacity: 1, width: '6365px', transform: 'translate3d(-1340px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : index === 5 ? { opacity: 1, width: '6365px', transform: 'translate3d(-1675px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : index === 6 ? { opacity: 1, width: '6365px', transform: 'translate3d(-2010px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : index === 7 ? { opacity: 1, width: '6365px', transform: 'translate3d(-2345px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : index === 8 ? { opacity: 1, width: '6365px', transform: 'translate3d(-2680px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : index === 9 ? { opacity: 1, width: '6365px', transform: 'translate3d(-3015px, 0px, 0px)', transition: 'transform 500ms ease 0s' } : {}}>

                                    <a href="https://www.weiser1a.at/" target="_blank" title="Website in neuem Tab öffnen" className="slick-slide slick-cloned" style={{ width: '335px' }} tabIndex="-1" role="tabpanel" id="" aria-hidden="true">
                                        <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-21.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-21.png" data-ll-status="loaded" className="entered lazyloaded" />
                                    </a>
                                    <a href="https://www.marta-bogen70.at/" target="_blank" title="Website in neuem Tab öffnen" className="slick-slide" style={{ width: '335px' }} tabIndex="-1" role="tabpanel" id="slick-slide30" aria-describedby="slick-slide-control30" data-slick-index="0" aria-hidden="true">
                                        <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-20.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-20.png" data-ll-status="loaded" className="entered lazyloaded" />
                                    </a>
                                    <a href="https://shop.derhafnermeister.at/" target="_blank" title="Website in neuem Tab öffnen" className="slick-slide" style={{ width: '335px' }} tabIndex="-1" role="tabpanel" id="slick-slide31" aria-hidden="true" aria-describedby="slick-slide-control31">
                                        <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-30.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-30.png" data-ll-status="loaded" className="entered lazyloaded" />
                                        <noscript><img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-30.png" alt="" /></noscript>
                                    </a>
                                    <a href="https://www.fitnesstrainingwien.at/" target="_blank" title="Website in neuem Tab öffnen" className="slick-slide" style={{ width: '335px' }} tabIndex="-1" role="tabpanel" id="slick-slide32" data-slick-index="2" aria-hidden="true" aria-describedby="slick-slide-control32">
                                        <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-29.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-29.png" data-ll-status="loaded" className="entered lazyloaded" />
                                        <noscript><img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-29.png" alt="" /></noscript>
                                    </a>
                                    <a href="https://www.grafundpartner.at/" target="_blank" title="Website in neuem Tab öffnen" className="slick-slide" style={{ width: '335px' }} tabIndex="-1" role="tabpanel" id="slick-slide33" aria-describedby="slick-slide-control33" data-slick-index="3" aria-hidden="true">
                                        <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-28.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-28.png" data-ll-status="loaded" className="entered lazyloaded" /><noscript><img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-28.png" alt="" /></noscript>
                                    </a>
                                    <a href="https://www.vorsorgenotar.at/" target="_blank" title="Website in neuem Tab öffnen" className="slick-slide" style={{ width: '335px' }} tabIndex="-1" role="tabpanel" id="slick-slide34" data-slick-index="4" aria-hidden="true" aria-describedby="slick-slide-control34">
                                        <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-27.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-27.png" data-ll-status="loaded" className="entered lazyloaded" /><noscript><img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-27.png" alt="" /></noscript>
                                    </a>
                                    <a href="https://www.zahnarztsalzburg.at/" target="_blank" title="Website in neuem Tab öffnen" className="slick-slide" style={{ width: '335px' }} tabIndex="-1" role="tabpanel" id="slick-slide35" data-slick-index="5" aria-hidden="true" aria-describedby="slick-slide-control35">
                                        <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-26.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-26.png" data-ll-status="loaded" className="entered lazyloaded" /><noscript><img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-26.png" alt="" /></noscript>
                                    </a>
                                    <a href="https://www.chaletsonneck.com/" target="_blank" title="Website in neuem Tab öffnen" className="slick-slide" style={{ width: '335px' }} tabIndex="-1" role="tabpanel" id="slick-slide36" aria-describedby="slick-slide-control36" data-slick-index="6" aria-hidden="true">
                                        <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-25.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-25.png" data-ll-status="loaded" className="entered lazyloaded" /><noscript><img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-25.png" alt="" /></noscript>
                                    </a>
                                    <a href="https://shop.keplinger-landmaschinen.at/" target="_blank" title="Website in neuem Tab öffnen" className="slick-slide" style={{ width: '335px' }} tabIndex="0" role="tabpanel" id="slick-slide37" data-slick-index="7" aria-hidden="true" aria-describedby="slick-slide-control37">
                                        <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-24.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-24.png" data-ll-status="loaded" className="entered lazyloaded" /><noscript><img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-24.png" alt="" /></noscript>
                                    </a>
                                    <a href="https://www.weiser1a.at/" target="_blank" title="Website in neuem Tab öffnen" className="slick-slide slick-current slick-active" style={{ width: '335px' }} tabIndex="-1" role="tabpanel" id="slick-slide38" data-slick-index="8" aria-hidden="false" aria-describedby="slick-slide-control38">
                                        <img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-21.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-21.png" data-ll-status="loaded" className="entered lazyloaded" /><noscript><img width="500" height="350" decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2023/03/Group-21.png" alt="" /></noscript>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="arrows_referenzen herold_arrows_wrapper">
                        <span className="referenzen_prev_arrow">
                            <img onClick={() => { setIndex(index - 1) }}
                                src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg"
                                alt="Previous"
                            />
                        </span>
                        <div className="arrows_referenzen_between">
                            <ul className="slick-dots">
                                <li className={index === 0 ? "slick-active" : ""}>
                                    <button
                                        type="button"
                                        aria-label="1 of 9"
                                    >
                                        1
                                    </button>
                                </li>
                                <li className={index === 1 ? "slick-active" : ""}>
                                    <button
                                        type="button"
                                        aria-label="2 of 9"
                                    >
                                        2
                                    </button>
                                </li>
                                <li className={index === 2 ? "slick-active" : ""}>
                                    <button
                                        type="button"
                                        aria-label="3 of 9"
                                    >
                                        3
                                    </button>
                                </li>
                                <li className={index === 3 ? "slick-active" : ""}>
                                    <button
                                        type="button"
                                        aria-label="4 of 9"
                                        aria-selected="true"
                                    >
                                        4
                                    </button>
                                </li>
                                <li className={index === 4 ? "slick-active" : ""}>
                                    <button
                                        type="button"
                                        aria-label="5 of 9"
                                    >
                                        5
                                    </button>
                                </li>
                                <li className={index === 5 ? "slick-active" : ""}>
                                    <button
                                        type="button"
                                        aria-label="6 of 9"
                                    >
                                        6
                                    </button>
                                </li>
                                <li className={index === 6 ? "slick-active" : ""}>
                                    <button
                                        type="button"
                                        aria-label="7 of 9"
                                    >
                                        7
                                    </button>
                                </li>
                                <li className={index === 7 ? "slick-active" : ""}>
                                    <button
                                        type="button"
                                        aria-label="8 of 9"
                                    >
                                        8
                                    </button>
                                </li>
                                <li className={index === 8 ? "slick-active" : ""}>
                                    <button
                                        type="button"
                                        aria-label="9 of 9"
                                    >
                                        9
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <span className="referenzen_next_arrow">
                            <img width={20} height={20} class="entered lazyloaded" onClick={() => { setIndex(index + 1) }}
                                src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg"
                                alt="Next"
                            />
                        </span>
                    </div>
                </div >
                //  :
                // <>

                //     {/* {/* <div className="block referenzen"> */}

                //     {/* <div className="referenzen_inner"> */}

                //     {/* <div className="container card-slider slick-initialized slick-slider slick-dotted">
                //                 <div className="slick-list draggable"> */}
                //     {/* <ProductsWebsiteBlockRefrenzenDesktop /> */}
                //     {/* </div>
                //             </div>
                //         </div>
                //     </div> */}

                // </>
            }
        </>
    )
}