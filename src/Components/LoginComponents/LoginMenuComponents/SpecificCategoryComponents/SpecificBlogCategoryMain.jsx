import { useContext, useEffect } from "react";
import AppContext from "../../../../AppContext";
import './blog_details.css';

export const SpecificBlogCategoryMain = () => {
    const { blogCategory, baseBackendRoute } = useContext(AppContext);

    useEffect(() => {
        // Your effect logic here
    }, [blogCategory]);

    return (
        <>
            <main id="primary" className="site-main">
                <div id="bcn_widget-2" className="widget_breadcrumb_navxt">
                    <div className="breadcrumbs" vocab="https://schema.org/" typeof="BreadcrumbList">
                        <span property="itemListElement" typeof="ListItem">
                            <a property="item" typeof="WebPage" title="Go to Herald Blog." href="/blogs" className="home">
                                <span property="name">Home</span>
                            </a>
                            <meta property="position" content={1} />
                        </span>
                        <img width={504} height={504} src="https://www.herold.at/blog/wp-content/uploads/2021/04/slide_right.svg" />
                        <span property="itemListElement" typeof="ListItem">
                            <span property="name" className="archive taxonomy category current-item">
                                {blogCategory?.blog_category[0].category_name}
                            </span>
                        </span>
                    </div>
                </div>
                <div className="row">
                    <h1 className="cols-6">
                        {blogCategory?.category?.category_name}
                    </h1>
                    <div className="flex_wrapper wide_flex_wrapper">
                        <div
                            className="wp-block-cover has-background-dim herold_header_single header_archive"
                            style={{ backgroundImage: `url(${baseBackendRoute}${blogCategory?.category?.image})` }}
                        >
                            {/* Blog details list */}
                            <div className="fullwidth_inner">
                                {blogCategory?.blogs.map((blog, index) => (
                                    <div key={index} className="blog-category-card-details card">
                                        <h2>{blog.title}</h2>
                                        <p>{blog.name}</p>
                                        <p>{blog.slug}</p>
                                        <p>{blog.image_title}</p>
                                        <p>{blog.description}</p>
                                        <p>{blog.duration}</p>
                                        <div className="image-container">
                                            <img src={`${baseBackendRoute}/${blog.image}`} alt={blog.title} className="category-image" />
                                        </div>
                                        <a href={`/specific-blog/${blog.slug}`} className="cta_btn yellow">Show more</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="button-wrapper">
                        <a href="/some-route" className="cta_btn blue btn">Click Me</a>
                    </div>

                    {/* Category details list */}
                    <div className="flex_wrapper wide_flex_wrapper">
                        <div className="fullwidth_inner">
                            {blogCategory?.blog_category.map((category, index) => (
                                <div key={index} className="blog-category-card-details card">
                                    <h2>{category.title}</h2>
                                    <p>{category.category_name}</p>
                                    <p>{category.slug}</p>
                                    <div className="image-container">
                                        <img src={`${baseBackendRoute}/${category.image}`} alt={category.title} className="category-image" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="archive_desc flex_wrapper">
                        <p>
                            <strong>{blogCategory?.category?.title}</strong>
                        </p>
                    </div>
                    
                    <div className="flex_wrapper three_posts_wrap">
                        <ul className="current_posts three_posts">
                            {blogCategory?.blog_card?.map((data, index) => (
                                <li key={index} className="shadow">
                                    <div className="sh_inner">
                                        <div className="sh_img_inner">
                                            <a href={`/specific-blog/${data.slug}/`}>
                                                <img
                                                    width={400}
                                                    height={267}
                                                    src={`${baseBackendRoute}/media/${data.image}`}
                                                    className="attachment-blurred_header size-blurred_header wp-post-image"
                                                    alt={data.title}
                                                    decoding="async"
                                                    fetchpriority="high"
                                                    srcSet={`${baseBackendRoute}/media/${data.image}`}
                                                    sizes="(max-width: 400px) 100vw, 400px"
                                                />
                                            </a>
                                        </div>
                                        <div className="shadow_inner">
                                            <p className="right_author_name">{data.title}</p>
                                            <p className="author_readtime">{`${blogCategory?.editor?.editor_name} | ${blogCategory?.duration}`}</p>
                                            <a href={`/specific-blog/${data.slug}/`} className="cta_btn blue">To the post</a>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <a href="/blogs" className="cta_btn blue btn loadMoreBtn">Back to overview</a>
                    </div>
                </div>
            </main>
        </>
    );
};
