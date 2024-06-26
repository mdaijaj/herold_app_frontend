import { useContext, useEffect } from "react"
import AppContext from "../../../../AppContext"

export const SpecificBlogMain = () => {
    const { specificBlog, baseBackendRoute } = useContext(AppContext);
    useEffect(() => {
        console.log(specificBlog);
    }, [specificBlog])
    return (
        <>
            <article
                id="post-72007"
                className="post-72007 post type-post status-publish format-standard has-post-thumbnail hentry category-lebenshilfe"
            >

                <div className="entry-content fallback_content_true ">

                    <h1 className="heroldblog_single_title">
                        <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                                {specificBlog?.name}
                            </font>
                        </font>
                    </h1>
                    <p className="last-updt-div">
                        <span className="last-updt-txt">
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Last Updated on: </font>
                            </font>
                        </span>
                        <strong className="last-updt-date">
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                    {specificBlog?.editor?.created_at?.split('T')[0]}
                                </font>
                            </font>
                        </strong>
                    </p>
                    <figure
                        id="attachment_195582"
                        aria-describedby="caption-attachment-195582"
                        style={{ width: 830 }}
                        className="wp-caption alignnone"
                    >
                        <a href={`${baseBackendRoute}${specificBlog?.image}`}>
                            <img
                                decoding="async"
                                fetchpriority="high"
                                className="size-full wp-image-195582"
                                src={`${baseBackendRoute}${specificBlog?.image}`}
                                alt="Energetician, energetician, energetics, training"
                                width={830}
                                height={410}
                                srcSet={`${baseBackendRoute}${specificBlog?.image}`}
                                sizes="(max-width: 830px) 100vw, 830px"
                            />
                        </a>
                        <figcaption id="caption-attachment-195582" className="wp-caption-text">
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                    {specificBlog?.image_title}

                                </font>
                            </font>
                        </figcaption>
                    </figure>
                    <p>
                        <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                                <div dangerouslySetInnerHTML={{ __html: specificBlog?.description }}>

                                </div>
                            </font>
                        </font>
                    </p>


                    <div className="wp-block-columns is-layout-flex wp-container-6 wp-block-columns-is-layout-flex flex_wrapper">
                        <div
                            className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                            style={{ flexBasis: "66.66%" }}
                        >
                            {
                                specificBlog?.blog_card?.map((data, index) => (
                                    <>
                                        <h2 className="wp-block-heading">
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    {data.title}
                                                </font>
                                            </font>
                                        </h2>
                                        <div dangerouslySetInnerHTML={{ __html: data.description }}>

                                        </div>
                                        {
                                            data?.image ?
                                                <figure className="wp-block-image">
                                                    <a href={`${baseBackendRoute}/${data.image}`}>
                                                        <img
                                                            decoding="async"
                                                            width={830}
                                                            height={310}
                                                            src={`${baseBackendRoute}/media/${data.image}`}
                                                            alt="modern stair lift with a beautiful design"
                                                            className="wp-image-145542"
                                                            srcSet={`${baseBackendRoute}/media/${data.image}`}
                                                            sizes="(max-width: 830px) 100vw, 830px"
                                                        />
                                                    </a>
                                                </figure>
                                                :
                                                <></>
                                        }
                                    </>
                                ))
                            }
                        </div>
                        <div
                            className="wp-block-column blog_sidebar is-layout-flow wp-block-column-is-layout-flow"
                            style={{ flexBasis: "33.33%" }}
                        >
                            <div className="wp-block-columns is-layout-flex wp-container-4 wp-block-columns-is-layout-flex flex_wrapper">
                                <div
                                    className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                                    style={{ flexBasis: "15%" }}
                                >
                                    <div className="shariff shariff-align-flex-start shariff-widget-align-flex-start">
                                        <ul className="shariff-buttons theme-round orientation-horizontal buttonsize-medium">
                                            <li
                                                className="shariff-button facebook shariff-nocustomcolor"
                                                style={{ backgroundColor: "#4273c8" }}
                                            >
                                                <a
                                                    href="#"
                                                    title="Share on Facebook"
                                                    aria-label="Share on Facebook"
                                                    role="button"
                                                    rel="nofollow"
                                                    className="shariff-link"
                                                    style={{ backgroundColor: "#3b5998", color: "#fff" }}
                                                    target="_blank"
                                                >
                                                    <span className="shariff-icon" style={{}}>
                                                        <img
                                                            src="https://www.herold.at/blog/wp-content/themes/heroldblog/assets/images/facebook_color.svg"
                                                            alt="facebook"
                                                            title="facebook"
                                                        />
                                                    </span>
                                                </a>
                                            </li>
                                            <li
                                                className="shariff-button twitter shariff-nocustomcolor"
                                                style={{ backgroundColor: "#32bbf5" }}
                                            >
                                                <a
                                                    href="#"
                                                    title="Share on Twitter"
                                                    aria-label="Share on Twitter"
                                                    role="button"
                                                    rel="noopener nofollow"
                                                    className="shariff-link"
                                                    style={{ backgroundColor: "#55acee", color: "#fff" }}
                                                    target="_blank"
                                                >
                                                    <span className="shariff-icon" style={{}}>
                                                        <img
                                                            src="https://www.herold.at/blog/wp-content/themes/heroldblog/assets/images/twitter_color.svg"
                                                            alt="tweet"
                                                            title="tweet"
                                                        />
                                                    </span>
                                                </a>
                                            </li>
                                            <li
                                                className="shariff-button linkedin shariff-nocustomcolor"
                                                style={{ backgroundColor: "#1488bf" }}
                                            >
                                                <a
                                                    href="#"
                                                    title="Share on LinkedIn"
                                                    aria-label="Share on LinkedIn"
                                                    role="button"
                                                    rel="noopener nofollow"
                                                    className="shariff-link"
                                                    style={{ backgroundColor: "#0077b5", color: "#fff" }}
                                                    target="_blank"
                                                >
                                                    <span className="shariff-icon" style={{}}>
                                                        <img
                                                            src="https://www.herold.at/blog/wp-content/themes/heroldblog/assets/images/linkedin_color.svg"
                                                            alt="linkedin"
                                                            title="linkedin"
                                                        />
                                                    </span>
                                                </a>
                                            </li>
                                            <li
                                                className="shariff-button xing shariff-nocustomcolor"
                                                style={{ backgroundColor: "#29888a" }}
                                            >
                                                <a
                                                    href="#"
                                                    title="Share on XING"
                                                    aria-label="Share on XING"
                                                    role="button"
                                                    rel="noopener nofollow"
                                                    className="shariff-link"
                                                    style={{ backgroundColor: "#126567", color: "#fff" }}
                                                    target="_blank"
                                                >
                                                    <span className="shariff-icon" style={{}}>
                                                        <img
                                                            src="https://www.herold.at/blog/wp-content/themes/heroldblog/assets/images/xing_color.svg"
                                                            alt="xing"
                                                            title="xing"
                                                        />
                                                    </span>
                                                </a>
                                            </li>
                                            <li
                                                className="shariff-button mailto shariff-nocustomcolor"
                                                style={{ backgroundColor: "#a8a8a8" }}
                                            >
                                                <a
                                                    href="#"
                                                    title="Send by email"
                                                    aria-label="Send by email"
                                                    role="button"
                                                    rel="noopener nofollow"
                                                    className="shariff-link"
                                                    style={{ backgroundColor: "#999", color: "#fff" }}
                                                >
                                                    <span className="shariff-icon" style={{}}>
                                                        <img
                                                            src="https://www.herold.at/blog/wp-content/themes/heroldblog/assets/images/mailto_color.svg"
                                                            alt="mailto"
                                                            title="mailto"
                                                        />
                                                    </span>
                                                </a>
                                            </li>
                                            <li
                                                className="shariff-button sms shariff-nocustomcolor shariff-mobile"
                                                style={{ backgroundColor: "#d7d9d8" }}
                                            >
                                                <a
                                                    href="#"
                                                    title="Share via SMS"
                                                    aria-label="Share via SMS"
                                                    role="button"
                                                    rel="noopener nofollow"
                                                    className="shariff-link"
                                                    style={{ backgroundColor: "#a1e877", color: "#fff" }}
                                                    target="_blank"
                                                >
                                                    <span className="shariff-icon" style={{}}>
                                                        <img
                                                            src="https://www.herold.at/blog/wp-content/themes/heroldblog/assets/images/sms_color.svg"
                                                            alt="sms"
                                                            title="sms"
                                                        />
                                                    </span>
                                                </a>
                                            </li>
                                            <li
                                                className="shariff-button whatsapp shariff-nocustomcolor"
                                                style={{ backgroundColor: "#5cbe4a" }}
                                            >
                                                <a
                                                    href="#"
                                                    title="Share on Whatsapp"
                                                    aria-label="Share on Whatsapp"
                                                    role="button"
                                                    rel="noopener nofollow"
                                                    className="shariff-link"
                                                    style={{ backgroundColor: "#34af23", color: "#fff" }}
                                                    target="_blank"
                                                >
                                                    <span className="shariff-icon" style={{}}>
                                                        <img
                                                            src="https://www.herold.at/blog/wp-content/themes/heroldblog/assets/images/whatsapp_color.svg"
                                                            alt="Whatsapp"
                                                            title="Whatsapp"
                                                        />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                                    style={{ flexBasis: "85%" }}
                                >
                                    <div
                                        id="content-right_column_post-block_54a39e06c51c5c6737648d8e8c5add61"
                                        className="flex_wrapper right_column_post "
                                    >

                                        <div
                                            className="right_author_infos shadow"
                                            itemScope=""
                                        >

                                            <div className="blurred_header_img_wrapper">

                                                <img
                                                    width={400}
                                                    height={144}
                                                    decoding="async"
                                                    className="blurred_header_img"
                                                    src="https://www.herold.at/blog/wp-content/uploads/2021/05/herold_hintergrund-400x144.jpeg"
                                                    alt=""
                                                    title="herald_background"
                                                />
                                            </div>
                                            <img
                                                width={200}
                                                height={200}
                                                decoding="async"
                                                className="author_profile_img"
                                                src={`${baseBackendRoute}${specificBlog?.editor?.editor_image}`}
                                                alt="HEROLD Blog Team"
                                                title="HEROLD Blog Team B2B"
                                                itemProp="image"
                                            />
                                            <p className="right_author_name" itemProp="name">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        {specificBlog?.editor?.editor_name}
                                                    </font>
                                                </font>
                                            </p>
                                            <meta itemProp="jobTitle" content="" />
                                            <p className="right_author_role" />
                                        </div>
                                        <style
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    " .ew__iframe{aspect-ratio:212 / 177}.iframe__container{position:relative}.iframe__container a{position:absolute !important;width:100% !important;height:100% !important;padding:0 !important;left:0;top:0;z-index:15;border:0!important}.iframe__container iframe{overflow:hidden;border-radius:30px}@media (max-width:1024px){.iframe__container iframe{width:100%!important}}"
                                            }}
                                        />
                                        <div className="iframe__container">

                                            <a
                                                href="https://www.herold.at/marketing/onlinecomplete/herold-sichtbarkeits-check?utm_source=herold_b2c_blog&utm_campaign=b2c_blog_sidebar&utm_content=handy_check_statisch&utm_medium=treppenlift-kosten"
                                                target="_blank"
                                            />
                                            <iframe
                                                loading="lazy"
                                                className="ew__iframe"
                                                src="https://www.herold.at/blog/wp-content/themes/heroldblog/banner_ads/Statsich_HTML5/index.html"
                                                frameBorder={0}
                                                height="100%"
                                                width="100%"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </article>

        </>
    )
}