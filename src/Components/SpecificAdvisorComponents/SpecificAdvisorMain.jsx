import { useContext, useEffect } from "react";
import { useParams } from "react-router"
import AppContext from "../../AppContext";

export const SpecificAdvisorMain = () => {
    const { article } = useParams();
    const { specificArticles, baseBackendRoute } = useContext(AppContext);
    useEffect(() => {
        console.log("donr!!!");
        console.log(article);
        console.log(specificArticles);
    }, [specificArticles])
    return (
        <>
            {
                specificArticles?.length > 0 ?
                    <main
                        id="primary"
                        className="site-main search-output"
                        style={{ marginTop: 100 }}
                    >
                        <h1 className="heroldblog_single_title">
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Results for: </font>
                            </font>
                            <span>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>{article}</font>
                                </font>
                            </span>
                        </h1>
                        <div className="container">
                            <div className="flex_wrapper three_posts_wrap">
                                <ul className="current_posts three_posts">
                                    {
                                        specificArticles?.map((data, index) => (
                                            <li className="shadow search-item" style={{}}>
                                                <div className="sh_inner">
                                                    <div className="sh_img_inner">
                                                        <a href={`/adv/${data.counselor.id}/${data.id}`}>
                                                            <img
                                                                width={400}
                                                                height={207}
                                                                src={data?.article_image}
                                                                className="attachment-blurred_header size-blurred_header wp-post-image"
                                                                alt=""
                                                                loading="lazy"
                                                                srcSet={data?.article_image}
                                                                sizes="(max-width: 400px) 100vw, 400px"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="shadow_inner">
                                                        <p className="right_author_name">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    {data.article_title}
                                                                </font>
                                                            </font>
                                                        </p>
                                                        <p className="author_readtime">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    {data.editor.editor_name} | 5 mins
                                                                </font>
                                                            </font>
                                                        </p>
                                                        <a
                                                            href={`/adv/${data.counselor.id}/${data.id}`}
                                                            className="cta_btn blue"
                                                        >
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>To the post</font>
                                                            </font>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <a href="#" className="btn loadMoreBtn" id="loadMore">
                                    <span className="loadMoreBtn-label">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>show more</font>
                                        </font>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </main>
                    :
                    <main
                        id="primary"
                        className="site-main search-output"
                        style={{ marginTop: 100 }}
                    >
                        <h1 className="heroldblog_single_title">
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Results for: </font>
                            </font>
                            <span>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>{article}</font>
                                </font>
                            </span>
                        </h1>
                        <section className="no-results not-found flex_wrapper">
                            <div className="page-content">
                                <p>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            Unfortunately we couldn't find anything, please try another term!
                                        </font>
                                    </font>
                                </p>
                            </div>
                            {/* .page-content */}
                        </section>
                        {/* .no-results */}
                    </main>

            }

        </>
    )
}