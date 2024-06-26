import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"
import { useParams } from "react-router";

export const AdvisorBeingVisibleOnlineThreePosts = () => {
    const { advisorPageContent, baseBackendRoute } = useContext(AppContext);
    const [visible, setVisible] = useState(true);
    const { id } = useParams();
    const [articleCount, setArticleCount] = useState(3);
    const handleChangeArticleCount = () => {
        if (articleCount === advisorPageContent?.articles?.length) {
            setVisible(false);
        }
        else if ((articleCount + 3) <= advisorPageContent?.articles?.length) {
            setArticleCount(articleCount + 3);
        }
        else if ((articleCount + 2) <= advisorPageContent?.articles?.length) {
            setArticleCount(articleCount + 2);
        }
        else if ((articleCount + 1) <= advisorPageContent?.articles?.length) {
            setArticleCount(articleCount + 1);
        }

    }

    useEffect(() => {
        if (articleCount >= advisorPageContent?.articles?.length) {
            setVisible(false);
        }
    }, [articleCount])

    useEffect(() => {
        if (articleCount >= advisorPageContent?.articles?.length) {
            setVisible(false);
        }
    }, [])
    return (
        <>
            <ul class="current_posts three_posts">

                {
                    advisorPageContent?.articles.slice(0, articleCount).map((res, index) => (
                        <li class="shadow" style={{}}>
                            <div class="sh_inner">

                                <div class="sh_img_inner">
                                    <a href="umgang-negative-bewertungen/index.html">
                                        <img width="400" height="207" src={`${baseBackendRoute}${res.article_image}`} class="attachment-blurred_header size-blurred_header wp-post-image" alt="Bild shows that you should answer your own Google reviews." loading="lazy" srcset={`${baseBackendRoute}${res.article_image}`} sizes="(max-width: 400px) 100vw, 400px" _mstalt="3153228" _msthash="108" />
                                    </a>
                                </div>
                                <div class="shadow_inner">

                                    <p class="right_author_name">
                                        <a href="umgang-negative-bewertungen/index.html" class="aNOstyle" _msttexthash="2601651" _msthash="109">{res.article_title}</a></p>
                                    <p class="author_readtime 41" _msttexthash="581828" _msthash="110">{res.image_tags[0]} | {res.image_tags[1]}.</p>
                                    <a href={`/adv/${id}/${res.slug}`} class="cta_btn blue" _msttexthash="204802" _msthash="111">To the article</a>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <a href={"/adv"} class="cta_btn blue btn loadMoreBtn" _msttexthash="265668" _msthash="180">Back to overview</a>
            {
                visible ?
                    <a href="#" style={{ marginLeft: '5px' }} onClick={handleChangeArticleCount} class="btn loadMoreBtn" id="loadMore"><span class="loadMoreBtn-label" _msttexthash="117377" _msthash="181">Show more</span></a>
                    :
                    <></>
            }
        </>
    )
}