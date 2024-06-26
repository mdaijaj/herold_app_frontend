import { useContext, useEffect } from "react"
import AppContext from "../../AppContext"
import axios from "axios";

export const AdvisorHomeTopComponent = () => {
    const { counselerList, setArticlesList, counselerIdList, articlesList, baseBackendRoute } = useContext(AppContext);
    // const getAllArticles = () => {
    //     console.log(counselerIdList)
    //     for (let i of counselerIdList) {
    //         console.log(i);
    //         axios.get(`${baseBackendRoute}/api/v1/counselor/counselor/${i}/articles/`)
    //             .then((response) => {
    //                 console.log(response.data);
    //                 setArticlesList((prevState) => [...prevState, response.data])
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             })
    //     }
    // }


    useEffect(() => {
        console.log("articles below");
        console.log(articlesList);
    }, [articlesList, counselerList])
    return (
        <>
            <div class="home_after_top">

                <h2 class="populate_posts_title_ratgeber js-filter">
                    {
                        counselerList?.map((data, index) => (
                            <span class="js-filter-item" data-category="5">{data.name}</span>
                        ))
                    }
                    {/* <span class="js-filter-item" data-category="2">Around Websites</span>
                    <span class="js-filter-item" data-category="11">Google Ads</span>
                    <span class="js-filter-item" data-category="8">Being Visible Online</span>
                    <span class="js-filter-item" data-category="14">Digital SME Tips</span> */}
                </h2>
                <div class="wp-block-cover__inner-container">
                    <div class="wp-block-columns flex_wrapper no_padd">

                        <div class="wp-block-column flex_wrapper" style={{ flexBasis: "100%" }}>
                            <div class="current_posts_wrapper four_posts flex_wrapper">
                                <ul class="current_posts" data-category="date">

                                    {
                                        articlesList?.map((data, index) => (
                                            <>
                                                {
                                                    data.articles?.map((res, ind) => (
                                                        <li class="shadow" style={{ flexBasis: "calc(33% - 1.5rem)" }}>
                                                            <div class="sh_inner">
                                                                <div class="sh_img_inner">
                                                                    <a
                                                                        href={`/adv/${data?.counselor?.slug}/${res.slug}`}>
                                                                        <img width="400" height="207"
                                                                            src={`${baseBackendRoute}${res.article_image}`}
                                                                            class="attachment-blurred_header size-blurred_header wp-post-image"
                                                                            alt="Google SERPs Result List"
                                                                            loading="lazy"
                                                                            srcset={`${baseBackendRoute}${res.article_image}`}
                                                                            sizes="(max-width: 400px) 100vw, 400px" />
                                                                    </a>
                                                                </div>
                                                                <div class="shadow_inner">

                                                                    <a
                                                                        href={`/adv/${data?.counselor?.slug}/${res.slug}`}>
                                                                        <p class="right_author_name">{res.article_title}</p>
                                                                    </a>


                                                                    <p class="author_readtime">
                                                                        {res.image_tags[0]}
                                                                        |
                                                                        {res.image_tags[1]}
                                                                    </p>

                                                                    <a href={`/adv/${data?.counselor?.slug}/${res.slug}`}
                                                                        class="cta_btn blue">Read More</a>
                                                                </div>

                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </>
                                        ))
                                    }

                                    {/* <li class="shadow" style={{ flexBasis: "calc(33% - 1.5rem)" }}>
                                        <div class="sh_inner">
                                            <div class="sh_img_inner">
                                                <a
                                                    href="website-erstellen/unternehmenswebsite-erstellen/index.html">
                                                    <img width="400" height="207"
                                                        src="wp-content/uploads/2022/04/061_R_23_Header_neu-400x207.jpg"
                                                        class="attachment-blurred_header size-blurred_header wp-post-image"
                                                        alt="Image showing a man who can create his company website."
                                                        loading="lazy"
                                                        srcset="https://www.herold.at/ratgeber/wp-content/uploads/2022/04/061_R_23_Header_neu-400x207.jpg 400w, https://www.herold.at/ratgeber/wp-content/uploads/2022/04/061_R_23_Header_neu-300x155.jpg 300w, https://www.herold.at/ratgeber/wp-content/uploads/2022/04/061_R_23_Header_neu-1024x529.jpg 1024w, https://www.herold.at/ratgeber/wp-content/uploads/2022/04/061_R_23_Header_neu-768x397.jpg 768w, https://www.herold.at/ratgeber/wp-content/uploads/2022/04/061_R_23_Header_neu.jpg 1120w"
                                                        sizes="(max-width: 400px) 100vw, 400px" />
                                                </a>
                                            </div>
                                            <div class="shadow_inner">

                                                <a
                                                    href="website-erstellen/unternehmenswebsite-erstellen/index.html">
                                                    <p class="right_author_name">Creating a company website in 7 steps</p>
                                                </a>
                                                <p class="author_readtime">Florian Damien Singh | Around Websites <br />21st February 2024</p>
                                                <a href="website-erstellen/unternehmenswebsite-erstellen/index.html"
                                                    class="cta_btn blue">Read More</a>
                                            </div>

                                        </div>
                                    </li>

                                    <li class="shadow" style={{ flexBasis: "calc(33% - 1.5rem)" }}>
                                        <div class="sh_inner">
                                            <div class="sh_img_inner">
                                                <a
                                                    href="website-erstellen/blog-erstellen-blog-auf-website-einbinden/index.html">
                                                    <img width="400" height="207"
                                                        src="wp-content/uploads/2022/03/138_R_23_Header_v1_blog_erstellen_blog_auf_website_einbinden-400x207.jpg"
                                                        class="attachment-blurred_header size-blurred_header wp-post-image"
                                                        alt="An entrepreneur wants to create a blog and integrate it into the website."
                                                        loading="lazy"
                                                        srcset="https://www.herold.at/ratgeber/wp-content/uploads/2022/03/138_R_23_Header_v1_blog_erstellen_blog_auf_website_einbinden-400x207.jpg 400w, https://www.herold.at/ratgeber/wp-content/uploads/2022/03/138_R_23_Header_v1_blog_erstellen_blog_auf_website_einbinden-300x155.jpg 300w, https://www.herold.at/ratgeber/wp-content/uploads/2022/03/138_R_23_Header_v1_blog_erstellen_blog_auf_website_einbinden-1024x529.jpg 1024w, https://www.herold.at/ratgeber/wp-content/uploads/2022/03/138_R_23_Header_v1_blog_erstellen_blog_auf_website_einbinden-768x397.jpg 768w, https://www.herold.at/ratgeber/wp-content/uploads/2022/03/138_R_23_Header_v1_blog_erstellen_blog_auf_website_einbinden.jpg 1120w"
                                                        sizes="(max-width: 400px) 100vw, 400px" />
                                                </a>
                                            </div>
                                            <div class="shadow_inner">

                                                <a
                                                    href="website-erstellen/blog-erstellen-blog-auf-website-einbinden/index.html">
                                                    <p class="right_author_name">Creating a blog: How to embed a blog on the website</p>
                                                </a>
                                                <p class="author_readtime">Florian Damien Singh | Around Websites <br />19th February 2024</p>
                                                <a href="website-erstellen/blog-erstellen-blog-auf-website-einbinden/index.html"
                                                    class="cta_btn blue">Read More</a>
                                            </div>

                                        </div>
                                    </li>

                                    <li class="shadow" style={{ flexBasis: "calc(33% - 1.5rem)" }}>
                                        <div class="sh_inner">
                                            <div class="sh_img_inner">
                                                <a
                                                    href="website-erstellen/suchintention/index.html">
                                                    <img width="400" height="207"
                                                        src="wp-content/uploads/2022/08/suchintension_header_Bild-%c2%a9-HEROLD-Quelle-Kiattisak-400x207.jpg"
                                                        class="attachment-blurred_header size-blurred_header wp-post-image"
                                                        alt="Two women in a fashion store, one showing something on a tablet to the other. In the background, you can see the Google search being performed on the tablet."
                                                        loading="lazy"
                                                        srcset="https://www.herold.at/ratgeber/wp-content/uploads/2022/08/suchintension_header_Bild-©-HEROLD-Quelle-Kiattisak-400x207.jpg 400w, https://www.herold.at/ratgeber/wp-content/uploads/2022/08/suchintension_header_Bild-©-HEROLD-Quelle-Kiattisak-300x155.jpg 300w, https://www.herold.at/ratgeber/wp-content/uploads/2022/08/suchintension_header_Bild-©-HEROLD-Quelle-Kiattisak-1024x530.jpg 1024w, https://www.herold.at/ratgeber/wp-content/uploads/2022/08/suchintension_header_Bild-©-HEROLD-Quelle-Kiattisak-768x398.jpg 768w, https://www.herold.at/ratgeber/wp-content/uploads/2022/08/suchintension_header_Bild-©-HEROLD-Quelle-Kiattisak.jpg 1120w"
                                                        sizes="(max-width: 400px) 100vw, 400px" />
                                                </a>
                                            </div>
                                            <div class="shadow_inner">

                                                <a
                                                    href="website-erstellen/suchintention/index.html">
                                                    <p class="right_author_name">Explaining search intent understandably</p>
                                                </a>
                                                <p class="author_readtime">Julia Jaekel | Around Websites <br />16th February 2024</p>
                                                <a href="website-erstellen/suchintention/index.html"
                                                    class="cta_btn blue">Read More</a>
                                            </div>

                                        </div>
                                    </li>

                                    <li class="shadow" style={{ flexBasis: "calc(33% - 1.5rem)" }}>
                                        <div class="sh_inner">
                                            <div class="sh_img_inner">
                                                <a href="kmu-tipps/virales-marketing/index.html">
                                                    <img width="400" height="207"
                                                        src="wp-content/uploads/2021/03/Virales-Marketing_Headerbild-400x207.png"
                                                        class="attachment-blurred_header size-blurred_header wp-post-image"
                                                        alt="Owner of a café holds a tablet in her store, which visually illustrates how Viral Marketing works."
                                                        loading="lazy"
                                                        srcset="https://www.herold.at/ratgeber/wp-content/uploads/2021/03/Virales-Marketing_Headerbild-400x207.png 400w, https://www.herold.at/ratgeber/wp-content/uploads/2021/03/Virales-Marketing_Headerbild-300x155.png 300w, https://www.herold.at/ratgeber/wp-content/uploads/2021/03/Virales-Marketing_Headerbild-1024x530.png 1024w, https://www.herold.at/ratgeber/wp-content/uploads/2021/03/Virales-Marketing_Headerbild-768x398.png 768w, https://www.herold.at/ratgeber/wp-content/uploads/2021/03/Virales-Marketing_Headerbild.png 1120w"
                                                        sizes="(max-width: 400px) 100vw, 400px" />
                                                </a>
                                            </div>
                                            <div class="shadow_inner">

                                                <a href="kmu-tipps/virales-marketing/index.html">
                                                    <p class="right_author_name">Going Viral: How does Viral Marketing work for companies?</p>
                                                </a>
                                                <p class="author_readtime">Florian Damien Singh | Digital SME Tips <br />14th February 2024</p>
                                                <a href="kmu-tipps/virales-marketing/index.html"
                                                    class="cta_btn blue">Read More</a>
                                            </div>

                                        </div>
                                    </li>

                                    <li class="shadow" style={{ flexBasis: "calc(33% - 1.5rem)" }}>
                                        <div class="sh_inner">
                                            <div class="sh_img_inner">
                                                <a
                                                    href="website-erstellen/was-ist-eine-website/index.html">
                                                    <img width="400" height="207"
                                                        src="wp-content/uploads/2022/02/060_R_23_Header_neu_was_ist_eine_website-400x207.jpg"
                                                        class="attachment-blurred_header size-blurred_header wp-post-image"
                                                        alt="Image symbolizing the question: What is a website?"
                                                        loading="lazy"
                                                        srcset="https://www.herold.at/ratgeber/wp-content/uploads/2022/02/060_R_23_Header_neu_was_ist_eine_website-400x207.jpg 400w, https://www.herold.at/ratgeber/wp-content/uploads/2022/02/060_R_23_Header_neu_was_ist_eine_website-300x155.jpg 300w, https://www.herold.at/ratgeber/wp-content/uploads/2022/02/060_R_23_Header_neu_was_ist_eine_website-1024x529.jpg 1024w, https://www.herold.at/ratgeber/wp-content/uploads/2022/02/060_R_23_Header_neu_was_ist_eine_website-768x397.jpg 768w, https://www.herold.at/ratgeber/wp-content/uploads/2022/02/060_R_23_Header_neu_was_ist_eine_website.jpg 1120w"
                                                        sizes="(max-width: 400px) 100vw, 400px" />
                                                </a>
                                            </div>
                                            <div class="shadow_inner">

                                                <a
                                                    href="website-erstellen/was-ist-eine-website/index.html">
                                                    <p class="right_author_name">What is a website? Fachbegriffe and quality criteria explained simply!</p>
                                                </a>
                                                <p class="author_readtime">Florian Damien Singh | Around Websites <br />12th February 2024</p>
                                                <a href="website-erstellen/was-ist-eine-website/index.html"
                                                    class="cta_btn blue">Read More</a>
                                            </div>

                                        </div>
                                    </li> */}

                                </ul>
                                <div class="categoryswitch_btn-container">
                                    <a href="#"
                                        class="cta_btn categoryswitch_btn_filled">View All</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <div class="flex_wrapper display_all_cats">
                        <ul class="all_cats_display">
                            {
                                counselerList?.map((res, index) => (

                                    <li class="all_cats_inner shadow">
                                        <a href={`/adv/${res.slug}`}
                                            style={{ backgroundImage: `url("${baseBackendRoute}${res.image}")` }}><span>{res.name}</span></a>
                                    </li>
                                ))
                            }

                            {/* <li class="all_cats_inner shadow">
                                <a href="suchmaschinenoptimierung-seo/index.html"
                                    style={{ backgroundImage: "url(https://www.herold.at/ratgeber/wp-content/uploads/2022/08/Suchmaschinenoptimierung-SEO-400x267-1.jpeg)" }}><span>Search Engine Optimization</span></a>
                            </li>

                            <li class="all_cats_inner shadow">
                                <a href="google-ads/index.html"
                                    style={{ backgroundImage: "url(https://www.herold.at/ratgeber/wp-content/uploads/2022/08/Suchmaschinenwerbung-SEA-400x267-1.jpg)" }}><span>Google Ads</span></a>
                            </li>

                            <li class="all_cats_inner shadow">
                                <a href="online-praesenz/index.html"
                                    style={{ backgroundImage: "url(https://www.herold.at/ratgeber/wp-content/uploads/2022/08/Ueberall-gefunden-werden-400x267-1.jpg)" }}><span>Being Visible Online</span></a>
                            </li>

                            <li class="all_cats_inner shadow">
                                <a href="kmu-tipps/index.html"
                                    style={{ backgroundImage: "url(https://www.herold.at/ratgeber/wp-content/uploads/2022/08/KMU-Tipps-400x267-1.jpg)" }}><span>Digital SME Tips</span></a>
                            </li>

                            <li class="all_cats_inner shadow">

                                <a href="lexikon/index.html"
                                    style={{ backgroundImage: "url(https://www.herold.at/ratgeber/wp-content/uploads/2022/10/Herold-Online-Marketing-Lexikon.jpeg)" }}><span>Online Marketing Lexicon</span></a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}