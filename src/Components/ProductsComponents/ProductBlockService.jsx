import { useContext, useEffect } from "react"
import AppContext from "../../AppContext"

export const ProductBlockService = () => {
    const { marketingGradimo, gradimoAdviceNow } = useContext(AppContext);
    useEffect(() => {
        console.log(marketingGradimo);
    }, [marketingGradimo])
    return (
        <>
            {
                marketingGradimo?.map((data, index) => (
                    <div className="block_2 service">
                        <div className="container">
                            <div className="title-head">
                                <h2>{data.title}</h2>
                                <h3 dangerouslySetInnerHTML={{ __html: data.description }}>
                                </h3>
                            </div>
                            <div className="secondary-button" id="secondary-button">
                                <a href="/advice-now" target="">{gradimoAdviceNow?.buttom_name}</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}