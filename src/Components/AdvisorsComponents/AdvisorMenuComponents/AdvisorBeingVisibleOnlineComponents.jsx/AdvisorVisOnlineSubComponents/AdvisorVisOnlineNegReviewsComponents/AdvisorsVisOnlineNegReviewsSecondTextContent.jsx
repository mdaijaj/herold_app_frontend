import { useContext, useEffect } from "react"
import AppContext from "../../../../../../AppContext"
import { data } from "jquery";
export const AdvisorsVisOnlineNegReviewsSecondTextContent = () => {
    const { articlePageContent, baseBackendRoute } = useContext(AppContext);

    useEffect(() => {

    }, [articlePageContent])
    return (
        <>
            {
                articlePageContent?.article_card?.map((resp, index) => (
                    <>


                        <h2>
                            <span class="ez-toc-section" id={resp.heading}></span>
                            <font _mstmutation="1" _msttexthash="941954" _msthash="148">{resp.heading}</font><span class="ez-toc-section-end"></span></h2>
                        <div dangerouslySetInnerHTML={{ __html: resp.description }} />
                        {
                            resp?.image === "" ?
                                <>
                                </>
                                :
                                <figure class="wp-block-image size-full">
                                    <img loading="lazy" width="1120" height="590" src={`${baseBackendRoute}/media/${resp.image}`} alt="" class="wp-image-116460" srcset={`${baseBackendRoute}/media/${resp.image}`} sizes="(max-width: 1120px) 100vw, 1120px" /><figcaption><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>{resp.img_cap}</font></font></figcaption></figure>
                        }
                    </>
                ))
            }
        </>
    )
}
