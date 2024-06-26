import { useContext, useEffect } from "react"
import AppContext from "../../../../AppContext"
import { useParams } from "react-router";

export const AdvisorBeingVisibleOnlineHeroldBlogTitle = () => {
    const { advisorPageContent, baseBackendRoute } = useContext(AppContext);
    const { page } = useParams();
    const { id } = useParams();
    useEffect(() => {

    }, [advisorPageContent])
    return (
        <>
            {
                // advisorPageContent?.articles[0].map((res) => (
                <div class="heroldblog_single_title">
                    <div class="wp-block-cover has-background-dim herold_header_single header_archive"
                        style={{ backgroundImage: `url(${baseBackendRoute}${advisorPageContent?.articles[0]?.article_image})` }}>
                        <div class="wp-block-cover__inner-container">
                            <div class="fullwidth_inner">
                                <h2>{advisorPageContent?.articles[0]?.article_title}</h2>
                                <a href={`/adv/${id}/${advisorPageContent?.articles[0]?.slug}`} class="cta_btn yellow">Show more</a>
                            </div>
                        </div>
                    </div>
                </div>
                // ))
            }
        </>
    )
}