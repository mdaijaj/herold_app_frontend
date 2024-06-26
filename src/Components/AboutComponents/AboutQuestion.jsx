import { useContext } from "react"
import AppContext from "../../AppContext"

export const AboutQuestion = () => {
    const { gradimoAdviceNow } = useContext(AppContext);
    return (
        <>
            <div class="block question footer_block_question" style={{ marginRight: '20px' }}>
                <div class="container-1">
                    <div class="title-head">
                        <h2>Do you have a question about our products?</h2>
                        <h3>We are happy to assist you without obligation.</h3>
                    </div>
                    <div class="secondary-button" id="secondary-button">
                        <a href="/advice-now"
                            target="">{gradimoAdviceNow?.buttom_name}</a>
                    </div>
                </div>
            </div>
        </>
    )
}