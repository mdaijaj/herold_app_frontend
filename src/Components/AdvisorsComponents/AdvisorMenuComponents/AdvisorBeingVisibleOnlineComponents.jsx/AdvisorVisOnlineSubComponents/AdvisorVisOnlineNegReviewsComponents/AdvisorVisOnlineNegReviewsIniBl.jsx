import { useContext, useEffect } from "react"
import AppContext from "../../../../../../AppContext"
import striptags from "striptags";
import Parser from 'html-react-parser';
export const AdvisorVisOnlineNegReviewsIniBl = () => {
    const { articlePageContent, baseBackendRoute } = useContext(AppContext);
    useEffect(() => {

    }, [articlePageContent])
    return (
        <>
            {
                <>
                    <div className="wp-block-cover has-background-dim herold_header_single" style={{ backgroundImage: `url(${baseBackendRoute}/${articlePageContent?.article_image})` }}>
                        <div className="wp-block-cover__inner-container">
                            <div className="fullwidth_inner">
                            </div>
                        </div>
                    </div>
                    <p class="headerimg_desc" _msttexthash="3912233" _msthash="108">{articlePageContent?.image_title}</p>
                </>
            }
        </>
    )
}