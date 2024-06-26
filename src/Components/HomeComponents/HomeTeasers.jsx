import { useContext, useEffect } from "react";
import AppContext from "../../AppContext";


export const Teasers = () => {
    const { websiteRef, onlineCompleteRef, googleBannerRef, googleSearchRef, seoRef, marketingRef, productsList } = useContext(AppContext);
    useEffect(() => {

    }, [productsList])
    return (
        <>
            {
                productsList?.map((data, index) => (
                    <div class="teaser_teaser__1P1u8" id={data.name}>
                        <div className={index % 2 === 0 ? "teaser_teaser_inner__fbs_d teaser_left_content__ovYdm" : "teaser_teaser_inner__fbs_d teaser_right_content__2CVaO"} style={{ background: data.color }}>
                            <div class="teaser_image_section__3ZGXy">
                                <div style={{ display: 'block', overflow: 'hidden', position: 'absolute', top: '0', left: '0', bottom: '0', right: '0', boxSizing: 'border-box', margin: '0' }}>
                                    <img
                                        title="title"
                                        alt={data.name}
                                        sizes="(min-width:768px) 50vw,100vw"
                                        srcSet={data.background_image}
                                        src={data.background_image}
                                        decoding="async"
                                        data-nimg="fill"
                                        style={{ position: 'absolute', top: '0', left: '0', bottom: '0', right: '0', boxSizing: 'border-box', padding: '0', border: 'none', margin: 'auto', display: 'block', width: '0', height: '0', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover', objectPosition: '0px 0' }}
                                    />
                                </div>
                            </div>
                            <div class="container">
                                <div class="teaser_content_section__uCWx3">
                                    <div class="teaser_content_inner__3ja-p">
                                        <h2 class="teaser_heading__2kfFu">{data.name}</h2>
                                        <p class="teaser_paragraph__2t_HX">{data.short_description}</p>
                                        <div class="teaser_button_wrapper__2Q_rb">
                                            <a href={`/marketing/${data.slug}`}>
                                                <button class="button_btn__3kzkB button_full_width__3lgu7 button_extra_large__1V7Uf button_secondary__s1GX9" style={{ height: '100%' }}>learn more</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {/* Online Complete Teaser */}
            {/* <div>
                <div>
                    <div class="teaser_teaser__1P1u8" ref={onlineCompleteRef} id="Online_Complete">
                        <div class="teaser_teaser_inner__fbs_d teaser_right_content__2CVaO teaser_gruen__Kmc7C">
                            <div class="teaser_image_section__3ZGXy">
                                <img title="title" alt="Online Complete" src="https://www.herold.at/_next/image/?url=https%3A%2F%2Fstrapi.herold.at%2Fuploads%2FBase_Steuerberater_6de23b81d9.jpg&w=750&q=75" style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    boxSizing: 'border-box',
                                    padding: 0,
                                    border: 'none',
                                    margin: 'auto',
                                    display: 'block',
                                    width: 0,
                                    height: 0,
                                    minWidth: '100%',
                                    maxWidth: '100%',
                                    minHeight: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'cover',
                                    objectPosition: '0px 0'
                                }} />
                            </div>
                            <div class="container">
                                <div class="teaser_content_section__uCWx3">
                                    <div class="teaser_content_inner__3ja-p">
                                        <h2 class="teaser_heading__2kfFu">Online Complete</h2>
                                        <p class="teaser_paragraph__2t_HX">Online Complete ensures that no one in Austria can miss your company. No matter where your customers are looking.</p>
                                        <div class="teaser_button_wrapper__2Q_rb">
                                            <a href="/marketing/onlinecomplete/">
                                                <button class="button_btn__3kzkB button_full_width__3lgu7 button_extra_large__1V7Uf button_secondary__s1GX9" style={{ height: '100%' }}>learn more</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div class="teaser_teaser__1P1u8" ref={googleSearchRef} id="Google_Such_Werbung">
                        <div class="teaser_teaser_inner__fbs_d teaser_left_content__ovYdm teaser_rosa__2ILUK">
                            <div class="teaser_image_section__3ZGXy">
                                <img title="title" alt="Google Such Werbung" src="https://www.herold.at/_next/image/?url=https%3A%2F%2Fstrapi.herold.at%2Fuploads%2FBase_Installateur_5f8871695a.jpg&w=750&q=75" style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    boxSizing: 'border-box',
                                    padding: 0,
                                    border: 'none',
                                    margin: 'auto',
                                    display: 'block',
                                    width: 0,
                                    height: 0,
                                    minWidth: '100%',
                                    maxWidth: '100%',
                                    minHeight: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'cover',
                                    objectPosition: '0px 0'
                                }} />
                            </div>
                            <div class="container">
                                <div class="teaser_content_section__uCWx3">
                                    <div class="teaser_content_inner__3ja-p">
                                        <h2 class="teaser_heading__2kfFu">Google Search Advertising</h2>
                                        <p class="teaser_paragraph__2t_HX">Google Search Advertising (SEA) ensures that your business is found by 92% of Austrians who search for local businesses on Google.</p>
                                        <div class="teaser_button_wrapper__2Q_rb">
                                            <a href="/marketing/sea/">
                                                <button class="button_btn__3kzkB button_full_width__3lgu7 button_extra_large__1V7Uf button_secondary__s1GX9" style={{ height: '100%' }}>learn more</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div class="teaser_teaser__1P1u8" ref={googleBannerRef} id="Google_Banner_Werbung">
                        <div class="teaser_teaser_inner__fbs_d teaser_right_content__2CVaO teaser_orange__27H3o">
                            <div class="teaser_image_section__3ZGXy">
                                <img title="title" alt="Google Banner Werbung" src="https://www.herold.at/_next/image/?url=https%3A%2F%2Fstrapi.herold.at%2Fuploads%2FBase_Mode_31910e4590.jpg&w=750&q=75" style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    boxSizing: 'border-box',
                                    padding: 0,
                                    border: 'none',
                                    margin: 'auto',
                                    display: 'block',
                                    width: 0,
                                    height: 0,
                                    minWidth: '100%',
                                    maxWidth: '100%',
                                    minHeight: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'cover',
                                    objectPosition: '0px 0'
                                }} />
                            </div>
                            <div class="container">
                                <div class="teaser_content_section__uCWx3">
                                    <div class="teaser_content_inner__3ja-p">
                                        <h2 class="teaser_heading__2kfFu">Google banner advertising</h2>
                                        <p class="teaser_paragraph__2t_HX">Your individually designed banner on up to 3 million websites in Austria. Reach your customers via the gigantic Google advertising network.</p>
                                        <div class="teaser_button_wrapper__2Q_rb">
                                            <a href="/marketing/gba">
                                                <button class="button_btn__3kzkB button_full_width__3lgu7 button_extra_large__1V7Uf button_secondary__s1GX9" style={{ height: '100%' }}>learn more</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div class="teaser_teaser__1P1u8" ref={seoRef} id="Suchmaschinen_Optimierung">
                        <div class="teaser_teaser_inner__fbs_d teaser_left_content__ovYdm teaser_violett__2Ybkm">
                            <div class="teaser_image_section__3ZGXy">
                                <img title="title" alt="Suchmaschinen Optimierung" src="https://www.herold.at/_next/image/?url=https%3A%2F%2Fstrapi.herold.at%2Fuploads%2FBase_Yoga_d07e4b4b0a.jpg&w=750&q=75" style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    boxSizing: 'border-box',
                                    padding: 0,
                                    border: 'none',
                                    margin: 'auto',
                                    display: 'block',
                                    width: 0,
                                    height: 0,
                                    minWidth: '100%',
                                    maxWidth: '100%',
                                    minHeight: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'cover',
                                    objectPosition: '0px 0'
                                }} />
                            </div>
                            <div class="container">
                                <div class="teaser_content_section__uCWx3">
                                    <div class="teaser_content_inner__3ja-p">
                                        <h2 class="teaser_heading__2kfFu">Search engine optimization</h2>
                                        <p class="teaser_paragraph__2t_HX">Thanks to professional search engine optimization (SEO), your company will appear ahead of the competition - perfect for attracting new customers.</p>
                                        <div class="teaser_button_wrapper__2Q_rb">
                                            <a href="/marketing/seo/">
                                                <button class="button_btn__3kzkB button_full_width__3lgu7 button_extra_large__1V7Uf button_secondary__s1GX9" style={{ height: '100%' }}>learn more</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div class="teaser_teaser__1P1u8" ref={marketingRef} id="Marketingdaten_Online">
                        <div class="teaser_teaser_inner__fbs_d teaser_right_content__2CVaO teaser_grau__1aZO8">
                            <div class="teaser_image_section__3ZGXy">
                                <img title="title" alt="Marketingdaten Online" src="https://www.herold.at/_next/image/?url=https%3A%2F%2Fstrapi.herold.at%2Fuploads%2FAdobe_Stock_206192440_ec5591f3b1.jpg&w=750&q=75" style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    boxSizing: 'border-box',
                                    padding: 0,
                                    border: 'none',
                                    margin: 'auto',
                                    display: 'block',
                                    width: 0,
                                    height: 0,
                                    minWidth: '100%',
                                    maxWidth: '100%',
                                    minHeight: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'cover',
                                    objectPosition: '0px 0'
                                }} />
                            </div>
                            <div class="container">
                                <div class="teaser_content_section__uCWx3">
                                    <div class="teaser_content_inner__3ja-p">
                                        <h2 class="teaser_heading__2kfFu">Marketing data online</h2>
                                        <p class="teaser_paragraph__2t_HX">Get an overview of all the important metrics of your advertising campaigns and find out in real time how many people click on your ads or call.</p>
                                        <div class="teaser_button_wrapper__2Q_rb">
                                            <a href="marketing/marketingdaten-online/index.html">
                                                <button class="button_btn__3kzkB button_full_width__3lgu7 button_extra_large__1V7Uf button_secondary__s1GX9" style={{ height: '100%' }}>learn more</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
        </>
    );
}
