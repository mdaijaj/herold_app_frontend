import { useContext, useEffect } from "react"
import AppContext from "../../../../AppContext"

export const BlogsMain = () => {
    const { blogsList, baseBackendRoute } = useContext(AppContext);
    useEffect(() => {
        // console.log(blogsList?.blogs[0]?.image);
    }, [blogsList])
    return (
        <>
            <main id="primary" className="site-main">

                <article>

                    <div className="entry-content">

                        <div className="wp-block-cover__inner-container home_highlight_wrapper">

                            <div>
                           
                                {
                                    blogsList?.blogs?.map((data, index) => (
                                        index === 0 ?
                                            <div
                                                id="fpost"
                                                className="highlight_home flex_wrapper wide_flex_wrapper"
                                            >
                                                <div className="highlight_home_img">

                                                    <img
                                                        width={824}
                                                        height={549}
                                                        src={`${baseBackendRoute}${data?.image}`}
                                                        className="attachment-fullwidth size-fullwidth wp-post-image"
                                                        alt="Find a hobby"
                                                        decoding="async"
                                                        fetchpriority="high"
                                                        srcSet={`${baseBackendRoute}${data?.image}`}
                                                        // srcSet="https://www.herold.at/blog/wp-content/uploads/2018/01/Hobby-finden_Titelbild.jpg 824w, https://www.herold.at/blog/wp-content/uploads/2018/01/Hobby-finden_Titelbild-250x167.jpg 250w, https://www.herold.at/blog/wp-content/uploads/2018/01/Hobby-finden_Titelbild-700x466.jpg 700w, https://www.herold.at/blog/wp-content/uploads/2018/01/Hobby-finden_Titelbild-768x512.jpg 768w, https://www.herold.at/blog/wp-content/uploads/2018/01/Hobby-finden_Titelbild-400x267.jpg 400w, https://www.herold.at/blog/wp-content/uploads/2018/01/Hobby-finden_Titelbild-750x500.jpg 750w, https://www.herold.at/blog/wp-content/uploads/2018/01/Hobby-finden_Titelbild-300x200.jpg 300w"
                                                        sizes="(max-width: 824px) 100vw, 824px"
                                                        _mstalt={178100}
                                                        _msthash={93}
                                                    />
                                                </div>
                                                <div className="highlight_home_text shadow">

                                                    <h3 _msttexthash={4488419} _msthash={94}>
                                                        {data.name}
                                                    </h3>
                                                    <div dangerouslySetInnerHTML={{ __html: data.description }}>
                                                    </div>
                                                    <a
                                                        href={`/specific-blog/${data.slug}`}
                                                        className="cta_btn blue border_blue"
                                                        target=""
                                                        _msttexthash={204802}
                                                        _msthash={96}
                                                    >
                                                        To the article
                                                    </a>
                                                </div>
                                            </div>
                                            :
                                            <></>
                                    ))
                                }
                            </div>
                            <div className="home_after_top">

                                <h2 className="populate_posts_title">

                                    <span _msttexthash={323089} _msthash={97}>

                                        Most Popular Posts
                                    </span>
                                </h2>
                                <div className="wp-block-cover__inner-container" style={{ display: 'block' }}>

                                    <div className="wp-block-columns flex_wrapper" style={{ display: 'flex' }}>

                                        <div
                                            className="wp-block-column flex_wrapper"
                                            style={{ flexBasis: "33.34%" }}
                                        >

                                            <div className="populate_posts_wrapper flex_wrapper">

                                                <ul className="current_posts shadow">
                                                    {
                                                        blogsList?.popular_post?.map((data, index) => (
                                                            <li className="populate_posts_inner_wrap 46487">

                                                                <a
                                                                    href={`/specific-blog/${data.slug}`}
                                                                    _msttexthash={1214304}
                                                                    _msthash={98}
                                                                >
                                                                    {data.name}
                                                                </a>
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className="wp-block-column flex_wrapper"
                                            style={{ flexBasis: "66.66%" }}
                                        >

                                            <div className="current_posts_wrapper four_posts flex_wrapper">

                                                <ul className="current_posts">
                                                    {
                                                        blogsList?.blogs?.map((data, index) => (
                                                            <li className="shadow">

                                                                <div className="sh_inner">

                                                                    <div className="sh_img_inner">

                                                                        <a href={`/specific-blog/${data.slug}`}>

                                                                            <img
                                                                                width={400}
                                                                                height={186}
                                                                                src={`${baseBackendRoute}${data.image}`}
                                                                                className="attachment-blurred_header size-blurred_header wp-post-image"
                                                                                alt="Plate filled with Martini goose in sauce with dumplings and vegetables"
                                                                                decoding="async"
                                                                                srcSet={`${baseBackendRoute}${data.image}`}
                                                                                sizes="(max-width: 400px) 100vw, 400px"
                                                                                _mstalt={2586727}
                                                                                _msthash={108}
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                    <div className="shadow_inner">

                                                                        <p className="right_author_name">
                                                                            <a
                                                                                href={`/specific-blog/${data.slug}`}
                                                                                className="anostyle"
                                                                                _msttexthash={1579344}
                                                                                _msthash={109}
                                                                            >
                                                                                {data.name}
                                                                            </a>
                                                                        </p>
                                                                        <p
                                                                            className="author_readtime"
                                                                            _msttexthash={561509}
                                                                            _msthash={110}
                                                                        >
                                                                            {data?.editor?.editor_name} | {data.duration}.
                                                                        </p>
                                                                        <a
                                                                            href={`/specific-blog/${data.slug}`}
                                                                            className="cta_btn blue"
                                                                            _msttexthash={204802}
                                                                            _msthash={111}
                                                                        >
                                                                            To the article
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex_wrapper display_all_cats">

                                        <h2 _msttexthash={1296607} _msthash={138}>
                                            Interesting facts <br _istranslated={1} />
                                            from various categories
                                        </h2>
                                        <ul className="all_cats_display">
                                            {
                                                blogsList?.blog_category?.map((data, index) => (

                                                    <li className="all_cats_inner shadow ">

                                                        <a
                                                            href={`/blog-category/${data.slug}`}
                                                            style={{
                                                                backgroundImage:
                                                                    `url(${baseBackendRoute}${data.image})`
                                                            }}
                                                        >
                                                            <span _msttexthash={863343} _msthash={139}>
                                                                {data.category_name}
                                                            </span>
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <p className="toggle_categories_wrapper">
                                            <a
                                                href="#"
                                                className="cta_btn blue toggle_categories"
                                                _msttexthash={117377}
                                                _msthash={146}
                                            >
                                                Show more
                                            </a>
                                        </p>
                                    </div>
                                    <div className="flex_wrapper current_posts_wrapper three_column_posts">

                                        <ul className="current_posts">
                                            {
                                                blogsList?.blogs?.slice(0, 3)?.map((data, index) => (
                                                    <li className="shadow">

                                                        <div className="sh_inner">

                                                            <div className="sh_img_inner">
                                                                <a href={`/specific-blog/${data.slug}`}>
                                                                    <img
                                                                        width={400}
                                                                        height={267}
                                                                        src={`${baseBackendRoute}${data.image}`}
                                                                        className="attachment-blurred_header size-blurred_header wp-post-image"
                                                                        alt="Doener Vienna"
                                                                        decoding="async"
                                                                        srcSet={`${baseBackendRoute}${data.image}`}
                                                                        sizes="(max-width: 400px) 100vw, 400px"
                                                                        _mstalt={152464}
                                                                        _msthash={147}
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="shadow_inner">

                                                                <p
                                                                    className="right_author_name"
                                                                    _msttexthash={884728}
                                                                    _msthash={148}
                                                                >
                                                                    {data.name}
                                                                </p>
                                                                <p
                                                                    className="author_readtime"
                                                                    _msttexthash={351741}
                                                                    _msthash={149}
                                                                >
                                                                    {data?.editor?.editor_name} | {data.duration}.
                                                                </p>
                                                                <a
                                                                    href={`/specific-blog/${data.slug}`}
                                                                    className="cta_btn blue"
                                                                    _msttexthash={204802}
                                                                    _msthash={150}
                                                                >
                                                                    To the article
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

        </>
    )
}