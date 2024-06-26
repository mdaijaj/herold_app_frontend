// import '../../../CustomStylesFiles/ProductsWebsiteStyles.css';

import { useContext } from "react"
import AppContext from "../../../../AppContext";
import striptags from 'striptags';

export const ProductWebsiteCardSlider = () => {
    const { currentPageContent, baseBackendRoute } = useContext(AppContext);
    return (
        <>
            <div className="block block-card-slider">
                <div className="present-inner container">
                    <div
                        data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/HEROLD_Website_Aerztin.jpg"
                        className="mockup rocket-lazyload entered lazyloaded"
                        style={{
                            backgroundImage: `url("${baseBackendRoute}${currentPageContent?.product_image}")`
                        }}
                        data-ll-status="loaded"
                    ></div>

                    <div className="carde-slider">

                        {
                            currentPageContent?.product_features.map((value, index) => (
                                <div className="card" style={{ backgroundColor: value.color }}>
                                    <div className="text">

                                        <h2><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>{value.title}</font></font></h2>
                                        <p>{striptags(value.description).replace(/&nbsp;/g, '')}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}