import { useContext } from "react"
import AppContext from "../../../../AppContext"

export const ProductsWebsiteBlockService = () => {
    const { currentPageContent, gradimoContact } = useContext(AppContext);
    return (
        <>
            <div className="block service">
                <div className="container" style={{ backgroundColor: currentPageContent?.product_features[0].color }}>
                    <div className="title-head">
                        <h2 style={{ textAlign: 'center' }}>Do you have a question that we couldn't answer here?</h2>
                    </div>
                    <div className="primary-button" id="primary-button">
                        <a href={`tel:${gradimoContact?.phone}`}>{gradimoContact?.phone}</a>
                    </div>
                </div>
            </div>
        </>
    )
}