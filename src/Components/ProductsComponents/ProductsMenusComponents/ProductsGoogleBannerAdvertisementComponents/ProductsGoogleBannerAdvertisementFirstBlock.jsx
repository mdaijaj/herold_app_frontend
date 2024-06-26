import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsGoogleBannerAdvertisementFirstBlock = () => {
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
                    <div class="block">
                        <div class="usp-inner container">
                            <div class="title-head">
                                <h2 style={{ textAlign: "center" }} _msttexthash="695097" _msthash="251" class="stop">Why Google Banner Ads by Gradimo Skupaj?</h2>
                                <h3 _msttexthash="13316823" _msthash="252">As a Google Leading Agency, Gradimo Skupaj draws on many years of experience and has particularly close relationships with Google. Your business benefits from this.</h3>
                                <div class="sbanner-container">
                                    <div>
                                        <a href="https://www.google.com/partners/agency?id=6812782193" target="_blank">
                                            <img width="299" height="286" decoding="async" class="sbanner-logo entered lazyloaded" src="https://www.herold.at/marketing/wp-content/uploads/2023/06/PremierPartner-RGB.png" alt="Google Leading Agency" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/06/PremierPartner-RGB.png" _mstalt="397917" _msthash="253" data-ll-status="loaded" />
                                        </a>
                                    </div>
                                    <div>
                                        <h3 _msttexthash="30989868" _msthash="254">Gradimo Skupaj is not only one of the most experienced Google Premium Partners in Austria, but also one of only 10 Google Leading Agencies. For you, this means that we can optimize your campaign even better and achieve your goals as efficiently as possible.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="card-slider slick-initialized slick-slider slick-dotted">
                                <div class="slick-list draggable">
                                    <div class="slick-track" style={index === 0 ? { opacity: "1", width: "2345px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "2345px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "2345px", transform: "translate3d(-670px, 0px, 0px)" } : {}}><div class="card slick-slide slick-cloned" style={{ backgroundColor: "rgb(253, 238, 234)", width: "320px" }} tabindex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control22" data-slick-index="-1" aria-hidden="true">
                                        <div class="text" style={{ color: 'black' }}>
                                            <h2 data-startnumber="100" style={{ color: 'black' }} class="stop"><e _msttexthash="10699" _msthash="73">95</e>%</h2>
                                            <p _msttexthash="4002232" style={{ color: 'black' }} _msthash="74">Advertising flexibility thanks to state-of-the-art banner creation technology.</p>
                                        </div>
                                    </div><div class="card slick-slide" style={{ backgroundColor: "rgb(253, 238, 234)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20" data-slick-index="0" aria-hidden="true">
                                            <div class="text" style={{ color: 'black' }}>
                                                <h2 data-startnumber="95" style={{ color: 'black' }} class="stop"><e _msttexthash="10530" _msthash="77">66</e>%</h2>
                                                <p _msttexthash="2712736" style={{ color: 'black' }} _msthash="78">of all Austrians can be reached through Google Banner advertising. <sup _istranslated="1">2</sup></p>
                                            </div>
                                        </div><div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(253, 238, 234)", width: "320px" }} tabindex="0" role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21" data-slick-index="1" aria-hidden="false">
                                            <div class="text" style={{ color: 'black' }}>
                                                <h2 data-startnumber="20" style={{ color: 'black' }} class="stop"><e _msttexthash="9867" _msthash="75">14</e></h2>
                                                <p _msttexthash="5600166" style={{ color: 'black' }} _msthash="76">years of experience with Google advertising. Gradimo Skupaj has a team of experts vetted by Google for this. <sup _istranslated="1">3</sup></p>
                                            </div>
                                        </div>

                                    </div></div></div>

                            <div class="arrows_usp herold_arrows_wrapper" _msthidden="1">
                                <span class="usp_prev_arrow herold_slick_btn_4 slick-arrow" style={{}} _mstmutation="1">
                                    <img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                <span class="arrows_usp_between"><ul class="slick-dots" style={{}} role="tablist">
                                    <li className={index === 0 ? "slick-active" : ""} role="presentation"><button onClick={() => { setIndex(0) }} type="button" role="tab" id="slick-slide-control20" aria-controls="slick-slide20" aria-label="1 of 3" tabindex="-1" _mstaria-label="34567" _msthash="341" _msttexthash="4459">1</button></li>
                                    <li role="presentation" className={index === 1 ? "slick-active" : ""}><button onClick={() => { setIndex(1) }} type="button" role="tab" id="slick-slide-control21" aria-controls="slick-slide21" aria-label="2 of 3" tabindex="0" _mstaria-label="34658" _msthash="342" _msttexthash="4550" aria-selected="true">2</button></li>
                                    <li className={index === 2 ? "slick-active" : ""} role="presentation"><button onClick={() => { setIndex(2) }} type="button" role="tab" id="slick-slide-control22" aria-controls="slick-slide22" aria-label="3 of 3" tabindex="-1" _mstaria-label="34749" _msthash="343" _msttexthash="4641">3</button></li></ul></span>
                                <span class="usp_next_arrow herold_slick_btn_4 slick-arrow" style={{}} _mstmutation="1"><img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>

                            </div>
                            <span class="subtext-quell" _msttexthash="679250" _msthash="256"><sup _istranslated="1">2</sup> Google 2021 | <sup _istranslated="1">3</sup> Google, Gradimo Skupaj 2023 </span>
                        </div>
                    </div>
                    :
                    <div class="block">
                        <div class="usp-inner container">
                            <div class="title-head">
                                <h2 style={{ textAlign: "center" }} _msttexthash="695097" _msthash="251">Why Google Banner Ads by Gradimo Skupaj?</h2>
                                <h3 _msttexthash="13316823" _msthash="252">As a Google Leading Agency, Gradimo Skupaj draws on many years of experience and has particularly close relationships with Google. Your business benefits from this.</h3>

                                <div class="sbanner-container">
                                    <div><a href="https://www.google.com/partners/agency?id=6812782193" target="_blank">
                                        <img width="299" height="286" decoding="async" class="sbanner-logo entered lazyloaded" src="https://www.herold.at/marketing/wp-content/uploads/2023/06/PremierPartner-RGB.png" alt="Google Leading Agency" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2023/06/PremierPartner-RGB.png" _mstalt="397917" _msthash="253" data-ll-status="loaded" /></a></div>
                                    <div><h3 _msttexthash="30989868" _msthash="254">Gradimo Skupaj is not only one of the most experienced Google Premium Partners in Austria, but also one of only 10 Google Leading Agencies. For you, this means that we can optimize your campaign even better and achieve your goals as efficiently as possible. </h3></div>
                                </div>

                            </div>
                            <div class="card-slider">
                                <div class="card" style={{ backgroundColor: "#fdeeea" }} tabindex="-1" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20">
                                    <div class="text" style={{ color: 'black' }}>
                                        <h2 data-startnumber="95" style={{ color: 'black' }}><e _msttexthash="4368" _msthash="77">0</e>%</h2>
                                        <p _msttexthash="2712736" style={{ color: 'black' }} _msthash="78">of all Austrians can be reached through Google Banner advertising. <sup _istranslated="1">2</sup></p>
                                    </div>
                                </div><div class="card" style={{ backgroundColor: "#fdeeea" }} tabindex="-1" role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21">
                                    <div class="text" style={{ color: 'black' }}>
                                        <h2 data-startnumber="20" style={{ color: 'black' }} ><e _msttexthash="4368" _msthash="75">0</e></h2>
                                        <p _msttexthash="5600166" style={{ color: 'black' }} _msthash="76">years of experience with Google advertising. Gradimo Skupaj has a team of experts vetted by Google for this. <sup _istranslated="1">3</sup></p>
                                    </div>
                                </div><div class="card" style={{ backgroundColor: "#fdeeea" }} tabindex="0" role="tabpanel" id="slick-slide22" aria-describedby="slick-slide-control22">
                                    <div class="text" style={{ color: 'black' }}>
                                        <h2 data-startnumber="100" style={{ color: 'black' }}><e _msttexthash="4368" _msthash="73">0</e>%</h2>
                                        <p _msttexthash="4002232" style={{ color: 'black' }} _msthash="74">Advertising flexibility thanks to state-of-the-art banner creation technology.</p>
                                    </div>
                                </div></div>
                            <div class="arrows_usp herold_arrows_wrapper" _msthidden="1">
                                <font _mstmutation="1" _msttexthash="45056349" _msthidden="1" _msthash="255"><span class="usp_prev_arrow herold_slick_btn_4" style={{}} _mstmutation="1">
                                    <img width="24" height="24" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3C/svg%3E" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" /></span>

                                    <span class="usp_next_arrow herold_slick_btn_4" style={{}} _mstmutation="1">
                                        <img width="20" height="20" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%3E%3C/svg%3E" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" />
                                    </span></font><div class="arrows_usp_between"></div>
                            </div>
                            <span class="subtext-quell" _msttexthash="679250" _msthash="256"><sup _istranslated="1">2</sup> Google 2021 | <sup _istranslated="1">3</sup> Google, Gradimo Skupaj 2023 </span>
                        </div>
                    </div>
            }
        </>
    )
}