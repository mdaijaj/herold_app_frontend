import { useContext, useEffect } from "react"
import AppContext from "../../AppContext"

export const AdvisorsFooterQuestionBlock = () => {
    const { gradimoAdviceNow } = useContext(AppContext);
    useEffect(() => {
        console.log(gradimoAdviceNow);
    }, [gradimoAdviceNow])
    return (
        <>
            <div class="block question footer_block_question" style={{ marginRight: '20px' }}>
                <div class="container" style={{ backgroundColor: gradimoAdviceNow?.color }}>
                    <div class="title-head" dangerouslySetInnerHTML={{ __html: gradimoAdviceNow?.content }}>

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