import { useContext, useEffect, useState } from "react"
import AppContext from "../../AppContext"

export const ProductConsultationBlock = () => {
    const { trustedImages, baseBackendRoute, isMobile, productsPage, gradimoAdviceNow } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        console.log(trustedImages);
        const intervalID = setInterval(() => {
            if (index === 4) {
                setIndex(0);
            }
            else {
                setIndex(index + 1);
            }
        }, 3000);
        return () => clearInterval(intervalID);
    }, [])
    return (
        <>
            <div className="beratung-block">
                <div className="container">
                    <div className="title-head">
                        <h2>{productsPage?.bottom_heading}</h2>
                        <h3>{productsPage?.bottom_title}</h3>
                    </div>

                    <div className="primary-button">
                        <a href="/advice-now" target="">{gradimoAdviceNow?.buttom_name}</a>
                    </div>

                    <div className="customer" dangerouslySetInnerHTML={{ __html: productsPage?.bottom_description }}>

                    </div>
                    {
                        isMobile ?
                            <>
                                <div className="company-slider slick-initialized slick-slider">
                                    <div className="slick-list draggable">
                                        <div className="slick-track" style={index === 0 ? { width: '1680px', transition: 'transform 7500ms linear', transform: 'translate3d(-336px, 0px, 0px)', opacity: 1 } : index === 1 ? { width: '1680px', transition: 'transform 7500ms linear', transform: 'translate3d(-504px, 0px, 0px)', opacity: 1 } : index === 2 ? { width: '1680px', transition: 'transform 7500ms linear', transform: 'translate3d(-672px, 0px, 0px)', opacity: 1 } : index === 3 ? { width: '1680px', transition: 'transform 7500ms linear', transform: 'translate3d(-1008px, 0px, 0px)', opacity: 1 } : { width: '1680px', transition: 'transform 7500ms linear', transform: 'translate3d(-1008px, 0px, 0px)', opacity: 1 }}>
                                            {trustedImages?.map((data, index) => (
                                                <div className="company-item" style={{ backgroundColor: 'rgb(255, 255, 255)', width: '144px' }}>
                                                    <img width="1600" height="864" decoding="async" alt="" src={`${baseBackendRoute}${data.logo}`} />
                                                </div>
                                            ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <div className="company-slider">
                                {
                                    trustedImages?.map((data, index) => (
                                        <div style={{ backgroundColor: '#FFFFFF' }} className="company-item" aria-hidden="true" tabindex="0">
                                            <img
                                                width="250"
                                                height="250"
                                                decoding="async"
                                                src={`${baseBackendRoute}${data.logo}`}
                                                alt=""
                                                data-lazy-src={`${baseBackendRoute}${data.logo}`}
                                                className="entered lazyloaded"
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                    }

                </div>
            </div>
        </>
    )
}