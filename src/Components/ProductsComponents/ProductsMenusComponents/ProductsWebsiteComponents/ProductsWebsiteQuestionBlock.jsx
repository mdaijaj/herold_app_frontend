import { useContext } from "react"
import AppContext from "../../../../AppContext"

export const ProductsWebsiteQuestionBlock = () => {
    const { currentPageContent, currentPage, gradimoAdviceNow } = useContext(AppContext);
    return (
        <>
            <div className="block question light_color">
                <div className="container" style={{ backgroundColor: currentPageContent?.color }}>
                    <div className="title-head">
                        <h2 style={currentPage === "1" ? { color: '#000000' } : { color: 'white' }}>{currentPageContent?.short_description}</h2>
                    </div>
                    <div className="secondary-button" id="secondary-button">
                        <a href="/advice-now" target="_blank">{gradimoAdviceNow?.buttom_name}</a>
                    </div>
                </div>
            </div>
        </>
    )
}