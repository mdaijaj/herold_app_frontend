import { useContext, useEffect } from "react"
import AppContext from "../../../../../../AppContext"

export const AdvisorVisOnlineNegReviewsSideBarContent = () => {
    const { articlePageContent, baseBackendRoute } = useContext(AppContext);
    useEffect(() => {

    }, [articlePageContent])
    return (
        <>
            <div class="wp-block-columns flex_wrapper">
                <div class="wp-block-column" style={{ flexBasis: "15%" }}>
                    <div class="shariff shariff-align-flex-start shariff-widget-align-flex-start">
                        <ul class="shariff-buttons theme-round orientation-horizontal buttonsize-medium" style={{ listStyle: 'none' }}>
                            <li class="shariff-button facebook shariff-nocustomcolor" style={{ listStyle: 'none', backgroundColor: "#4273c8" }}>
                                <a href="https://www.facebook.com" title="Bei Facebook teilen" aria-label="Share on Facebook" role="button" rel="nofollow" class="shariff-link" style={{ backgroundColor: "#3b5998", color: "#fff" }} target="_blank" _mstaria-label="341146" _msthash="228">
                                    <span class="shariff-icon" style={{}}>
                                        <img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme/assets/images/facebook_color.svg" alt="Facebook" title="facebook" _mstalt="113646" _msthash="229" /></span></a></li>
                            <li class="shariff-button twitter shariff-nocustomcolor" style={{ listStyle: 'none', backgroundColor: "#32bbf5" }}><a href="https://twitter.com" title="Bei Twitter teilen" aria-label="Share on Twitter" role="button" rel="noopener nofollow" class="shariff-link" style={{ backgroundColor: "#55acee", color: "#fff" }} target="_blank" _mstaria-label="319553" _msthash="230"><span class="shariff-icon" style={{}}><img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme/assets/images/twitter_color.svg" alt="Twitter" title="twitter" _mstalt="101907" _msthash="231" /></span></a>
                            </li>
                            <li class="shariff-button linkedin shariff-nocustomcolor" style={{ listStyle: 'none', backgroundColor: "#1488bf" }}>
                                <a href="https://www.linkedin.com" title="Bei LinkedIn teilen" aria-label="Share on LinkedIn" role="button" rel="noopener nofollow" class="shariff-link" style={{ backgroundColor: "#0077b5", color: "#fff" }} target="_blank" _mstaria-label="336960" _msthash="232"><span class="shariff-icon" style={{}}><img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme/assets/images/linkedin_color.svg" alt="LinkedIn" title="linkedin" _mstalt="115336" _msthash="233" /></span></a>
                            </li>
                            <li class="shariff-button xing shariff-nocustomcolor" style={{ listStyle: 'none', backgroundColor: "#29888a" }}><a href="https://www.xing.com/" title="Bei XING teilen" aria-label="Share on XING" role="button" rel="noopener nofollow" class="shariff-link" style={{ backgroundColor: "#126567", color: "#fff" }} target="_blank" _mstaria-label="212160" _msthash="234"><span class="shariff-icon" style={{}}><img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme/assets/images/xing_color.svg" alt="Xing" title="xing" _mstalt="48100" _msthash="235" />
                            </span></a>
                            </li>
                            <li class="shariff-button mailto shariff-nocustomcolor" style={{ listStyle: 'none', backgroundColor: "#a8a8a8" }}>
                                <a href="mailto:" title="Per E-Mail versenden" aria-label="Send by e-mail" role="button" rel="noopener nofollow" class="shariff-link" style={{ backgroundColor: "#999", color: "#fff" }} _mstaria-label="366457" _msthash="236"><span class="shariff-icon" style={{}}>
                                    <img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme/assets/images/mailto_color.svg" alt="mailto" title="mailto" _mstalt="80236" _msthash="237" /></span></a></li>
                            <li class="shariff-button sms shariff-nocustomcolor shariff-mobile" style={{ listStyle: 'none', backgroundColor: "#d7d9d8" }} _msthidden="2">
                                <a href="sms:" title="Per SMS teilen" aria-label="Per SMS teilen" role="button" rel="noopener nofollow" class="shariff-link" style={{ backgroundColor: "#a1e877", color: "#fff" }} target="_blank" _msthidden="1" _mstaria-label="194857" _msthash="238"><span class="shariff-icon" style={{}}><img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme/assets/images/sms_color.svg" alt="sms" title="sms" _msthidden="A" _mstalt="35256" _msthash="239" /></span></a>
                            </li>
                            <li class="shariff-button whatsapp shariff-nocustomcolor" style={{ listStyle: 'none', backgroundColor: "#5cbe4a" }}><a href="https://api.whatsapp.com/" title="Bei Whatsapp teilen" aria-label="Share on Whatsapp" role="button" rel="noopener nofollow" class="shariff-link" style={{ backgroundColor: "#34af23", color: "#fff" }} target="_blank" _mstaria-label="348257" _msthash="240">
                                <span class="shariff-icon" style={{}}>
                                    <img src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme/assets/images/whatsapp_color.svg" alt="whatsapp" title="whatsapp" _mstalt="118963" _msthash="241" /></span>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="wp-block-column" style={{ flexBasis: "66.66%" }}>

                    <div id="content-right_column_post-block_60996956230fa" class="flex_wrapper right_column_post ">
                        <div class="autorbox-new" itemscope="" itemtype="https://schema.org/Person">
                            <img class="author_profile_img" src={`${baseBackendRoute}${articlePageContent?.editor?.editor_image}`} alt="Florian Damien Singh" title="3986_Florian_Damien_Singh_400x400" itemprop="image" style={{ aspectRatio: "1 / 1" }} _mstalt="367068" _msthash="242" />
                            <div>
                                <p class="right_author_name" itemprop="name" _msttexthash="367068" _msthash="243">{articlePageContent?.editor?.editor_name}</p>
                                <meta itemprop="jobTitle" content="Online Redakteur" />
                                <p class="right_author_role"><a href={`/about-editor/${articlePageContent?.editor?.slug}`} _msttexthash="202072" _msthash="244">Online Editor</a></p>
                            </div>
                        </div>
                        <div class="iframe__container">
                            <a href="https://www.herold.at/marketing/onlinecomplete/herold-sichtbarkeits-check?utm_source=herold_ratgeberutm_campaign=ratgeber_sidebarutm_content=handy_check_statischutm_medium=umgang-negative-bewertungen" target="_blank"></a>
                            <iframe loading="lazy" class="ew__iframe" src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/banner_ads/Statsich_HTML5/index.html" frameborder="0" height="100%" width="100%"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}