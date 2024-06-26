import { useContext } from "react"
import AppContext from "../../../../AppContext"

export const ProductsWebsiteBlockQuestion = () => {
    const { currentPageContent, gradimoAdviceNow } = useContext(AppContext);
    return (
        <>
            {
                <div className="block question light_color fullwidth" style={{ backgroundColor: currentPageContent?.color }}>
                    <div className="container">
                        <div className="title-head">
                            <h2>To be found everywhere.</h2>
                            <h3>Get advice right away and start this week.</h3>
                        </div>
                        <div className="secondary-button" id="secondary-button">
                            <a href="/advice-now" target="">{gradimoAdviceNow?.buttom_name}</a>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}