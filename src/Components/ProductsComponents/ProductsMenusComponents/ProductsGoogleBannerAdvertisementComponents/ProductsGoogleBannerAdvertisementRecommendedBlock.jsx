import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsGoogleBannerAdvertisementRecommendedBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index === -1) {
            setIndex(2);
        }
        if (index === 3) {

            setIndex(0);
        }
    }, [index])

    return (
        <>
            {
                isMobile ?
                    <>
                        <div class="block recommend">
                            <div class="title-head">
                                <h2 _msttexthash="1475812" _msthash="267">For even more visibility,<br _istranslated="1" /> we recommend that you</h2>
                            </div>
                            <div class="container card-slider slick-initialized slick-slider slick-dotted">
                                <div class="slick-list draggable">
                                    <div class="slick-track" style={index === 0 ? { opacity: "1", width: "2345px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "2345px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "2345px", transform: "translate3d(-670px, 0px, 0px)" } : {}}>
                                        <div class="card-item slick-slide slick-current slick-active" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control42" _mstvisible="1" _msthidden="2" data-slick-index="-1" aria-hidden="true">
                                            <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Installateur.jpg" style={{ backgroundImage: "url(https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Installateur.jpg)" }} class="card-head rocket-lazyload entered lazyloaded exited" data-ll-status="entered" _mstvisible="2"></div>
                                            <div style={{ backgroundColor: "rgb(255, 109, 106)", height: "380px" }} class="card-body" id="" _mstvisible="2">
                                                <h2 _msttexthash="558987" _msthash="18" _mstvisible="3">Google Search Advertising</h2>
                                                <p _msttexthash="9079954" _msthash="19" _mstvisible="3">Google Search Advertising (SEA) ensures that your business is found by 92% of Austrians who search for local businesses on Google. </p>
                                                <div class="secondary-button" id="" _mstvisible="3">
                                                    <a href="/marketing/sea" tabindex="-1" _msttexthash="135525" _msthash="20" _mstvisible="4">Learn more</a>
                                                </div>
                                            </div>
                                        </div><div class="card-item slick-slide slick-current slick-active" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide40" aria-describedby="slick-slide-control40" _mstvisible="1" _msthidden="2" data-slick-index="0" aria-hidden="true">
                                            <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/09/MicrosoftTeams-image-3.jpg" style={{ backgroundImage: "url(https://www.herold.at/marketing/wp-content/uploads/2022/09/MicrosoftTeams-image-3.jpg)" }} class="card-head rocket-lazyload entered lazyloaded exited" data-ll-status="entered" _mstvisible="2"></div>
                                            <div style={{ backgroundColor: "rgb(141, 200, 232)", height: "380px" }} class="card-body" id="card-body" _mstvisible="2">
                                                <h2 _msttexthash="95017" _msthash="12" _mstvisible="3">Website</h2>
                                                <p _msttexthash="15371798" _msthash="13" _mstvisible="3">Your website is your business on the internet. Gradimo Skupaj makes sure it feels the same way – for you and your customers. </p>
                                                <div class="secondary-button" id="secondary-button" _mstvisible="3">
                                                    <a href="/marketing/websites/" tabindex="-1" _msttexthash="135525" _msthash="14" _mstvisible="4">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-item slick-slide slick-current slick-active" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide41" aria-describedby="slick-slide-control41" _mstvisible="1" _msthidden="2" data-slick-index="1" aria-hidden="true">
                                            <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Steuerberater.jpg" style={{ backgroundImage: "url(https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Steuerberater.jpg)" }} class="card-head rocket-lazyload entered lazyloaded exited" data-ll-status="entered" _mstvisible="2"></div>
                                            <div style={{ backgroundColor: "rgb(51, 136, 102)", height: "380px" }} class="card-body" id="card-body" _mstvisible="2">
                                                <h2 _msttexthash="254891" _msthash="15" _mstvisible="3">Online Complete</h2>
                                                <p _msttexthash="7525232" _msthash="16" _mstvisible="3">Online Complete ensures that no one in Austria can get past your company. No matter where your customers are looking. </p>
                                                <div class="secondary-button" id="secondary-button" _mstvisible="3">
                                                    <a href="/marketing/onlinecomplete/" tabindex="-1" _msttexthash="135525" _msthash="17" _mstvisible="4">Learn more</a>
                                                </div>
                                            </div>
                                        </div>


                                    </div></div></div>

                            <div class="arrows_recommend herold_arrows_wrapper" _msthidden="1">
                                <span class="recommend_prev_arrow slick-arrow" style={{}}><img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                <span class="arrows_recommend_between" _msthidden="1"><ul class="slick-dots" style={{}} role="tablist">
                                    <li className={index === 0 ? "slick-active" : ""} role="presentation">
                                        <button onClick={() => { setIndex(0) }} type="button" role="tab" id="slick-slide-control40" aria-controls="slick-slide40" aria-label="1 of 3" tabindex="-1" _mstaria-label="34567" _msthash="348" _msttexthash="4459">1</button></li>
                                    <li role="presentation" className={index === 1 ? "slick-active" : ""}>
                                        <button onClick={() => { setIndex(1) }} type="button" role="tab" id="slick-slide-control41" aria-controls="slick-slide41" aria-label="2 of 3" tabindex="-1" _mstaria-label="34658" _msthash="349" _msttexthash="4550">2</button></li>
                                    <li role="presentation" className={index === 2 ? "slick-active" : ""}>
                                        <button onClick={() => { setIndex(2) }} type="button" role="tab" id="slick-slide-control42" aria-controls="slick-slide42" aria-label="3 of 3" tabindex="0" _mstaria-label="34749" _msthash="350" _msttexthash="4641" aria-selected="true">3</button></li></ul></span>
                                <span class="recommend_next_arrow slick-arrow" style={{}}><img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div class="block recommend">
                            <div class="title-head">
                                <h2 _msttexthash="1475812" _msthash="267">For even more visibility,<br _istranslated="1" /> we recommend that you</h2>
                            </div>
                            <div class="container card-slider slick-initialized slick-slider slick-dotted">
                                <div class="slick-list draggable" _msthidden="2">
                                    <div class="slick-track" _mstvisible="0">
                                        <div class="card-item slick-slide slick-current slick-active" tabindex="0" role="tabpanel" id="slick-slide40" aria-describedby="slick-slide-control40" data-slick-index="0" aria-hidden="false" _mstvisible="1">
                                            <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/09/MicrosoftTeams-image-3.jpg" style={{ backgroundImage: "url(https://www.herold.at/marketing/wp-content/uploads/2022/09/MicrosoftTeams-image-3.jpg)" }} class="card-head rocket-lazyload entered lazyloaded exited" data-ll-status="entered" _mstvisible="2"></div>
                                            <div style={{ backgroundColor: "rgb(141, 200, 232)" }} class="card-body" id="card-body" _mstvisible="2">
                                                <h2 _msttexthash="95017" _msthash="12" _mstvisible="3">Website</h2>
                                                <p _msttexthash="15371798" _msthash="13" _mstvisible="3">Your website is your business on the internet. Gradimo Skupaj makes sure it feels the same way – for you and your customers. </p>
                                                <div class="secondary-button" id="secondary-button" _mstvisible="3">
                                                    <a href="/marketing/websites/" tabindex="0" _msttexthash="135525" _msthash="14" _mstvisible="4">Learn more</a>
                                                </div>
                                            </div>
                                        </div><div class="card-item slick-slide slick-active" tabindex="0" role="tabpanel" id="slick-slide41" aria-describedby="slick-slide-control41" data-slick-index="1" aria-hidden="false" _mstvisible="1">
                                            <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Steuerberater.jpg" style={{ backgroundImage: "url(https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Steuerberater.jpg)" }} class="card-head rocket-lazyload entered lazyloaded exited" data-ll-status="entered" _mstvisible="2"></div>
                                            <div style={{ backgroundColor: "rgb(51, 136, 102)" }} class="card-body" id="card-body" _mstvisible="2">
                                                <h2 _msttexthash="254891" _msthash="15" _mstvisible="3">Online Complete</h2>
                                                <p _msttexthash="7525232" _msthash="16" _mstvisible="3">Online Complete ensures that no one in Austria can get past your company. No matter where your customers are looking. </p>
                                                <div class="secondary-button" id="secondary-button" _mstvisible="3">
                                                    <a href="/marketing/onlinecomplete/" tabindex="0" _msttexthash="135525" _msthash="17" _mstvisible="4">Learn more</a>
                                                </div>
                                            </div>
                                        </div><div class="card-item slick-slide slick-active" tabindex="0" role="tabpanel" id="slick-slide42" aria-describedby="slick-slide-control42" data-slick-index="2" aria-hidden="false" _mstvisible="1">
                                            <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Installateur.jpg" style={{ backgroundImage: "url(https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Installateur.jpg)" }} class="card-head rocket-lazyload entered lazyloaded exited" data-ll-status="entered" _mstvisible="2"></div>
                                            <div style={{ backgroundColor: "rgb(255, 109, 106)" }} class="card-body" id="card-body" _mstvisible="2">
                                                <h2 _msttexthash="558987" _msthash="18" _mstvisible="3">Google Search Advertising</h2>
                                                <p _msttexthash="9079954" _msthash="19" _mstvisible="3">Google Search Advertising (SEA) ensures that your business is found by 92% of Austrians who search for local businesses on Google. </p>
                                                <div class="secondary-button" id="secondary-button" _mstvisible="3">
                                                    <a href="/marketing/sea/" tabindex="0" _msttexthash="135525" _msthash="20" _mstvisible="4">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="arrows_recommend herold_arrows_wrapper" _msthidden="1">
                                <span class="recommend_prev_arrow slick-arrow slick-hidden" style={{}} aria-disabled="true" tabindex="-1">
                                    <img width="24" height="24" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3C/svg%3E" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" />
                                </span>
                                <div class="arrows_recommend_between" _msthidden="1">
                                    <ul class="slick-dots" role="tablist" _msthidden="2">
                                        <li class="slick-active" role="presentation" _msthidden="2">
                                            <button type="button" role="tab" id="slick-slide-control40" aria-controls="slick-slide40" aria-label="1 of 1" tabindex="0" _msthidden="A" _mstaria-label="34307" _msthash="309" _msttexthash="4459" aria-selected="true">1</button>
                                        </li></ul></div>
                                <span class="recommend_next_arrow slick-arrow slick-hidden" style={{}} aria-disabled="true" tabindex="-1"><img width="20" height="20" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%3E%3C/svg%3E" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" /></span>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}