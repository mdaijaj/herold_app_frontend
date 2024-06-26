import { useContext, useEffect } from "react"
import AppContext from "../../AppContext";

export const ProductCardSlider = () => {
    const { isMobile, productsList } = useContext(AppContext);
    useEffect(() => {

    }, [])

    return (
        <>
            {
                isMobile ?
                    <div className="block block-card-slider">
                        <div className="container card-slider">
                            {
                                productsList?.map((value, index) => (
                                    <div className="card-item" id={value.name}>
                                        <div
                                            className="card-head rocket-lazyload entered lazyloaded exited"
                                            style={{ backgroundImage: `${value.product_image}` }}
                                            data-ll-status="loaded"
                                        ></div>
                                        <div className="card-body" style={{ backgroundColor: value.color }}>
                                            <h2>{value.name}</h2>
                                            <p>{value.short_description}</p>
                                            <div className="secondary-button" id="secondary-button">
                                                <a href={`/marketing/${value.slug}`} target="">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    :
                    <>
                        <div className="block block-card-slider">
                            <div className="container card-slider">
                                {
                                    productsList?.map((value, index) => (
                                        <div className="card-item" id={value.name}>
                                            <div
                                                className="card-head rocket-lazyload entered lazyloaded exited"
                                                style={{ backgroundImage: `url(${value.background_image})` }}
                                                data-ll-status="loaded"
                                            >

                                            </div>
                                            <div className="card-body" style={{ backgroundColor: value.color }}>
                                                <h2>{value.name}</h2>
                                                <p>{value.short_description}</p>
                                                <div className="secondary-button" id="secondary-button">
                                                    <a href={`/marketing/${value.slug}`} target="">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
            }
        </>
    )
}