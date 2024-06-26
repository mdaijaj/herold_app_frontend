import { useContext, useEffect } from "react"
import AppContext from "../../AppContext"

export const AboutEditorMain = () => {
    const { baseBackendRoute, filteredEditorList, setFilteredEditorList, filteredEditorIdList, editorList, currentEditorList } = useContext(AppContext);
    useEffect(() => {
        console.log(filteredEditorList);
        console.log(currentEditorList);
    }, [filteredEditorList, currentEditorList])
    return (
        <>
            <main id="primary" className="site-main">
                <article
                    id="post-120013"
                    className="post-120013 page type-page status-publish has-post-thumbnail hentry"
                >
                    <div className="entry-content fallback_content_true ">
                        <h2 className="wp-block-heading">
                            <strong>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        The Gradimo Skupaj Content Team introduces itself
                                    </font>
                                </font>
                            </strong>
                        </h2>
                        {

                            <div className="wp-block-columns is-layout-flex wp-container-3 wp-block-columns-is-layout-flex flex_wrapper">
                                <div
                                    className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                                    style={{ flexBasis: "33.33%" }}
                                >
                                    <figure className="wp-block-image size-large is-resized">
                                        <img
                                            decoding="async"
                                            fetchpriority="high"
                                            src={`${baseBackendRoute}${currentEditorList?.editor_image}`}
                                            alt=""
                                            className="wp-image-231914"
                                            style={{ width: 250, height: 250 }}
                                            width={250}
                                            height={250}
                                            srcSet={`${baseBackendRoute}${currentEditorList?.editor_image}`}
                                            sizes="(max-width: 250px) 100vw, 250px"
                                        />
                                    </figure>
                                </div>
                                <div
                                    className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                                    style={{ flexBasis: "66.66%" }}
                                >
                                    <p>
                                        <strong>
                                            <a href="https://www.herold.at/ratgeber/author/michael-haberlherold-at/">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        {currentEditorList?.editor_name}
                                                    </font>
                                                </font>
                                            </a>
                                        </strong>
                                    </p>

                                    <div dangerouslySetInnerHTML={{ __html: currentEditorList?.description }} />
                                    <p>
                                        <strong>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>Contact</font>
                                            </font>
                                        </strong>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}> : </font>
                                        </font>
                                        <a href={`${currentEditorList?.editor_email}`}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>Email</font>
                                            </font>
                                        </a>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}> | </font>
                                        </font>
                                        <a
                                            href={`${currentEditorList?.linkedIn}`}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>LinkedIn</font>
                                            </font>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        }

                        {
                            filteredEditorList?.slice(0, 2)?.map((data, index) => (

                                < div className="wp-block-columns is-layout-flex wp-container-3 wp-block-columns-is-layout-flex flex_wrapper" >
                                    <div
                                        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                                        style={{ flexBasis: "33.33%" }}
                                    >
                                        <figure className="wp-block-image size-large is-resized">
                                            <img
                                                decoding="async"
                                                fetchpriority="high"
                                                src={`${baseBackendRoute}${data?.editor_image}`}
                                                alt=""
                                                className="wp-image-231914"
                                                style={{ width: 250, height: 250 }}
                                                width={250}
                                                height={250}
                                                srcSet={`${baseBackendRoute}${data?.editor_image}`}
                                                sizes="(max-width: 250px) 100vw, 250px"
                                            />
                                        </figure>
                                    </div>
                                    <div
                                        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                                        style={{ flexBasis: "66.66%" }}
                                    >
                                        <p>
                                            <strong>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        {data?.editor_name}
                                                    </font>
                                                </font>
                                            </strong>
                                        </p>

                                        <div dangerouslySetInnerHTML={{ __html: data?.description }} />
                                        <p>
                                            <strong>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Contact</font>
                                                </font>
                                            </strong>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}> : </font>
                                            </font>
                                            <a href={`${data?.editor_email}`}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>Email</font>
                                                </font>
                                            </a>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}> | </font>
                                            </font>
                                            <a
                                                href={`${data?.linkedIn}`}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                            >
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>LinkedIn</font>
                                                </font>
                                            </a>
                                        </p>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </article>
            </main>

        </>
    )
}