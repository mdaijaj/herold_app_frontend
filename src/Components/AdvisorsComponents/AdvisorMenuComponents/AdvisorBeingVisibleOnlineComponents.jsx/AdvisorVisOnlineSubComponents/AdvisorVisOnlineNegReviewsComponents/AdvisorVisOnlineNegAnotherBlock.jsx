import { useContext, useEffect } from "react";
import AppContext from "../../../../../../AppContext";
import { useParams } from "react-router";

export const AdvisorVisOnlineNegReviewsNegAnotherBlock = () => {
    const { filteredArticlesList, baseBackendRoute } = useContext(AppContext);
    const { page, id } = useParams();


    useEffect(() => {
        console.log('filted articles below')
        console.log(filteredArticlesList);
    }, [filteredArticlesList])

    return (
        <>
            <p className="more_articles">
                <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>More articles</font>
                </font>
            </p>

            <article className="rel_posts teaser_wrapper themen_teaser_wrapper flex_wrapper related ">
                <div>
                    {
                        filteredArticlesList?.slice(0, 3)?.map((data, index) => (
                            <div className="shadow">
                                <div className="sh_inner">
                                    <a href={`/adv/${id}/${data.slug}`}>
                                        <img
                                            width={550}
                                            height={270}
                                            src={`${baseBackendRoute}${data.article_image}`}
                                            className="attachment-blurred_header_wide size-blurred_header_wide wp-post-image"
                                            alt="Eissalon has the Herold Online Complete Company Data Manager"
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="shadow_inner">
                                        <a href={`/adv/${id}/${data.slug}`}>
                                            <p className="right_author_name">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        {data.article_title}
                                                    </font>
                                                </font>
                                            </p>
                                        </a>
                                        <div className="right_desc" dangerouslySetInnerHTML={{ __html: data.short_description }} />
                                        <a
                                            href={`/adv/${id}/${data.slug}`}
                                            className="cta_btn blue"
                                        >
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>Continue reading</font>
                                            </font>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </article >

        </>
    )
}