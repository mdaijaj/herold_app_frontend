import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsAdvertisementOnHeroldRecommendedBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index === 3) {
            setIndex(0);
        }
        if (index === -1) {
            setIndex(2);
        }
        const intervalID = setInterval(() => {
            if (index === 3) {
                setIndex(0);
            }
            else {
                setIndex(index + 1);
            }
        }, 3000);
        return () => clearInterval(intervalID);
    }, [index, window.innerWidth])
    return (
        <>
            {
                isMobile ?
                    <>
                        <div class="block recommend">
                            <div class="title-head">
                                <h2 _msttexthash="1068301" _msthash="241">For even more visibility,<br _istranslated="1" /> we recommend:</h2>
                            </div>

                            <div class="container card-slider slick-initialized slick-slider slick-dotted">
                                <div class="slick-list draggable">
                                    <div class="slick-track" style={index === 0 ? { opacity: 1, width: '2345px', transform: 'translate3d(-0px, 0px, 0px)' } : index === 1 ? { opacity: 1, width: '2345px', transform: 'translate3d(-340px, 0px, 0px)' } : index === 2 ? { opacity: 1, width: '2345px', transform: 'translate3d(-670px, 0px, 0px)' } : {}}>
                                        <div class="card-item slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" style={{ width: "320px" }}
                                            tabindex="-1">
                                            <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/09/MicrosoftTeams-image-3.jpg" style={{ backgroundImage: "url(https://www.herold.at/marketing/wp-content/uploads/2022/09/MicrosoftTeams-image-3.jpg)" }} class="card-head rocket-lazyload"></div>
                                            <div style={{ backgroundColor: "#8dc8e8" }} class="card-body" id="">
                                                <h2 _msttexthash="95017" _msthash="242">Website</h2>
                                                <p _msttexthash="15371798" _msthash="243">Your website is your business on the internet. Gradimo Skupaj makes sure it feels the same way – for you and your customers. </p>
                                                <div class="secondary-button" id="">
                                                    <a href="/marketing/websites/" tabindex="-1" _msttexthash="135525" _msthash="244">Learn more</a>
                                                </div>
                                            </div>
                                        </div><div class="card-item slick-slide" data-slick-index="0" aria-hidden="true" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide30" aria-describedby="slick-slide-control30">
                                            <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Yoga.jpg" style={{ backgroundImage: "url(https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Yoga.jpg)" }} class="card-head rocket-lazyload entered lazyloaded exited" data-ll-status="loaded"></div>
                                            <div style={{ backgroundColor: "#9184be" }} class="card-body" id="card-body">
                                                <h2 _msttexthash="607958" _msthash="245">Search Engine Optimization</h2>
                                                <p _msttexthash="17231461" _msthash="246">Thanks to professional search engine optimization (SEO), you and your company appear in front of the competition - perfect for winning new customers efficiently and sustainably. </p>
                                                <div class="secondary-button" id="secondary-button">
                                                    <a href="/marketing/seo/" tabindex="-1" _msttexthash="135525" _msthash="247">Learn more</a>
                                                </div>
                                            </div>
                                        </div><div class="card-item slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" style={{ width: "320px" }} tabindex="0" role="tabpanel" id="slick-slide31" aria-describedby="slick-slide-control31">
                                            <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Steuerberater.jpg" style={{ backgroundImage: "url(https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Steuerberater.jpg)" }} class="card-head rocket-lazyload entered lazyloaded" data-ll-status="loaded"></div>
                                            <div style={{ backgroundColor: "#338866" }} class="card-body" id="card-body">
                                                <h2 _msttexthash="254891" _msthash="248">Online Complete</h2>
                                                <p _msttexthash="7525232" _msthash="249">Online Complete ensures that no one in Austria can get past your company. No matter where your customers are looking. </p>
                                                <div class="secondary-button" id="secondary-button">
                                                    <a href="/marketing/onlinecomplete/" tabindex="0" _msttexthash="135525" _msthash="250">Learn more</a>
                                                </div>
                                            </div>
                                        </div>



                                    </div></div>



                            </div>

                            <div className="arrows_recommend herold_arrows_wrapper">
                                <span className="recommend_prev_arrow slick-arrow" style={{ marginRight: '10px' }} onClick={() => { setIndex(index - 1) }}>
                                    <img width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" style={{ maxWidth: '100%' }} />
                                </span>
                                <div className="arrows_recommend_between" style={{ display: 'inline-block', marginRight: '10px' }}>
                                    <ul className="slick-dots" role="tablist">
                                        <li className={index === 0 ? "slick-active" : ""} onClick={() => { setIndex(0) }} role="presentation">
                                            <button type="button" role="tab" id="slick-slide-control50" aria-controls="slick-slide50" aria-label="1 of 3" tabIndex="-1">1</button>
                                        </li>
                                        <li role="presentation" onClick={() => { setIndex(1) }} className={index === 1 ? "slick-active" : ""}>
                                            <button type="button" role="tab" id="slick-slide-control51" aria-controls="slick-slide51" aria-label="2 of 3" tabIndex="0" aria-selected="true">2</button>
                                        </li>
                                        <li role="presentation" onClick={() => { setIndex(2) }} className={index === 2 ? "slick-active" : ""}>
                                            <button type="button" role="tab" id="slick-slide-control52" aria-controls="slick-slide52" aria-label="3 of 3" tabIndex="-1">3</button>
                                        </li>
                                    </ul>
                                </div>
                                <span className="recommend_next_arrow slick-arrow" onClick={() => { setIndex(index + 1) }}>
                                    <img width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" style={{ maxWidth: '100%' }} />
                                </span>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div class="block recommend">
                            <div class="title-head">
                                <h2 _msttexthash="1068301" _msthash="206">For even more visibility,<br _istranslated="1" /> we recommend:</h2>
                            </div>

                            <div class="container card-slider slick-initialized slick-slider slick-dotted">
                                <div class="slick-list draggable" _msthidden="2"><div class="slick-track" _mstvisible="0"><div class="card-item slick-slide slick-current slick-active" tabindex="0" role="tabpanel" id="slick-slide30" aria-describedby="slick-slide-control30" data-slick-index="0" aria-hidden="false" _mstvisible="1">
                                    <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Yoga.jpg" style={{ backgroundImage: "url(https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Yoga.jpg)" }} class="card-head rocket-lazyload entered lazyloaded exited" data-ll-status="entered" _mstvisible="2"></div>
                                    <div style={{ backgroundColor: "rgb(145, 132, 190)" }} class="card-body" id="card-body" _mstvisible="2">
                                        <h2 _msttexthash="607958" _msthash="207" _mstvisible="3">Search Engine Optimization</h2>
                                        <p _msttexthash="17231461" _msthash="208" _mstvisible="3">Thanks to professional search engine optimization (SEO), you and your company appear in front of the competition - perfect for winning new customers efficiently and sustainably. </p>
                                        <div class="secondary-button" id="secondary-button" _mstvisible="3">
                                            <a href="/marketing/seo/" tabindex="0" _msttexthash="135525" _msthash="209" _mstvisible="4">Learn more</a>
                                        </div>
                                    </div>
                                </div><div class="card-item slick-slide slick-active" tabindex="0" role="tabpanel" id="slick-slide31" aria-describedby="slick-slide-control31" data-slick-index="1" aria-hidden="false" _mstvisible="1">
                                        <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Steuerberater.jpg" style={{ backgroundImage: "url(https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Steuerberater.jpg)" }} class="card-head rocket-lazyload entered lazyloaded exited" data-ll-status="entered" _mstvisible="2"></div>
                                        <div style={{ backgroundColor: "rgb(51, 136, 102)" }} class="card-body" id="card-body" _mstvisible="2">
                                            <h2 _msttexthash="254891" _msthash="210" _mstvisible="3">Online Complete</h2>
                                            <p _msttexthash="7525232" _msthash="211" _mstvisible="3">Online Complete ensures that no one in Austria can get past your company. No matter where your customers are looking. </p>
                                            <div class="secondary-button" id="secondary-button" _mstvisible="3">
                                                <a href="/marketing/onlinecomplete/" tabindex="0" _msttexthash="135525" _msthash="212" _mstvisible="4">Learn more</a>
                                            </div>
                                        </div>
                                    </div><div class="card-item slick-slide slick-active" tabindex="0" role="tabpanel" id="slick-slide32" aria-describedby="slick-slide-control32" data-slick-index="2" aria-hidden="false" _mstvisible="1">
                                        <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/09/MicrosoftTeams-image-3.jpg" style={{ backgroundImage: "url(https://www.herold.at/marketing/wp-content/uploads/2022/09/MicrosoftTeams-image-3.jpg)" }} class="card-head rocket-lazyload entered lazyloaded exited" data-ll-status="loaded" _mstvisible="2"></div>
                                        <div style={{ backgroundColor: "rgb(141, 200, 232)" }} class="card-body" id="card-body" _mstvisible="2">
                                            <h2 _msttexthash="95017" _msthash="213" _mstvisible="3">Website</h2>
                                            <p _msttexthash="15371798" _msthash="214" _mstvisible="3">Your website is your business on the internet. Gradimo Skupaj makes sure it feels the same way – for you and your customers. </p>
                                            <div class="secondary-button" id="secondary-button" _mstvisible="3">
                                                <a href="/marketing/websites/" tabindex="0" _msttexthash="135525" _msthash="215" _mstvisible="4">Learn more</a>
                                            </div>
                                        </div>
                                    </div></div></div></div>

                            <div class="arrows_recommend herold_arrows_wrapper" _msthidden="2">
                                <span class="recommend_prev_arrow slick-arrow slick-hidden" style={{}} aria-disabled="true" tabindex="-1"><img width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                <div class="arrows_recommend_between" _msthidden="2"><ul class="slick-dots" role="tablist" _msthidden="2"><li class="slick-active" role="presentation" _msthidden="2"><button type="button" role="tab" id="slick-slide-control30" aria-controls="slick-slide30" aria-label="1 of 1" tabindex="0" _msthidden="A" _mstaria-label="34307" _msthash="260" _msttexthash="4459" aria-selected="true">1</button></li></ul></div>
                                <span class="recommend_next_arrow slick-arrow slick-hidden" style={{}} aria-disabled="true" tabindex="-1"><img width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}