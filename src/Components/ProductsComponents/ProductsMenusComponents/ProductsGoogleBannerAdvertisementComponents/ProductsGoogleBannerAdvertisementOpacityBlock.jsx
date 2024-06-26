import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsGoogleBannerAdvertisementOpacityBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index === -1) {
            setIndex(3);
        }
        if (index === 4) {
            setIndex(0);
        }
    }, [index])
    return (
        <>
            {
                isMobile ?
                    <>

                        <div class="opacity">
                            <div class="opacity-inner container">
                                <div class="title-head">
                                    <h2 _msttexthash="691470" _msthash="380">Your Way to Banner Advertising</h2>
                                    <h3 _msttexthash="3013868" _msthash="381">In four easy steps, you can find your message on three million websites.</h3>
                                </div>
                                <div class="both">
                                    <div class="left">
                                        <img decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Modehändlerin_Schritte.jpg" alt="" title="Radimo Skupaj -Modehändlerin_Schritte" width="600" height="900" data-lazy-src="https://www.Radimo Skupaj .at/marketing/wp-content/uploads/2022/04/Radimo Skupaj -Modehändlerin_Schritte.jpg" data-ll-status="loaded" class="entered lazyloaded" />
                                    </div>
                                    <div class="right">
                                        <div class="card-slider slick-initialized slick-slider slick-dotted">

                                            <div class="slick-list draggable">
                                                <div class="slick-track" style={index === 0 ? { opacity: "1", width: "3015px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "3015px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "3015px", transform: "translate3d(-670px, 0px, 0px)" } : index === 3 ? { opacity: "1", width: "3015px", transform: "translate3d(-1000px, 0px, 0px)" } : {}}>

                                                    <div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(253, 238, 234)", width: "320px" }} tabindex="0" role="tabpanel" id="slick-slide30" aria-describedby="slick-slide-control30" data-slick-index="0" aria-hidden="false">
                                                        <div class="number">
                                                            <p style={{ color: "#e55934" }} _msttexthash="4459" _msthash="382">1</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="415974" _msthash="383">Budget Determination</h2>
                                                            <p _msttexthash="7185659" _msthash="384">In the first step, our media consultants will work with you to clarify the budget you want to spend on advertising.</p>
                                                        </div>
                                                    </div>
                                                    <div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(253, 238, 234)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide31" aria-describedby="slick-slide-control31" data-slick-index="1" aria-hidden="true">
                                                        <div class="number">
                                                            <p style={{ color: "#e55934" }} _msttexthash="4550" _msthash="385">2</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="197041" _msthash="386">Briefing Talk</h2>
                                                            <p _msttexthash="2721589" _msthash="387">Our experts will discuss goals, content, texts and images with you.</p>
                                                        </div>
                                                    </div>

                                                    <div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(253, 238, 234)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide32" aria-describedby="slick-slide-control32" data-slick-index="2" aria-hidden="true">
                                                        <div class="number">
                                                            <p style={{ color: "#e55934" }} _msttexthash="4641" _msthash="388">3</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="137748" _msthash="389">Reporting</h2>
                                                            <p _msttexthash="4509128" _msthash="390">We'll send you monthly reports with the most important metrics for your online banners.</p>
                                                        </div>
                                                    </div>

                                                    <div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(253, 238, 234)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide33" aria-describedby="slick-slide-control33" data-slick-index="3" aria-hidden="true">
                                                        <div class="number">
                                                            <p style={{ color: "#e55934" }} _msttexthash="4732" _msthash="391">4</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="95472" _msthash="392">Updates</h2>
                                                            <p _msttexthash="3598764" _msthash="393">Radimo Skupaj 's Google experts always keep your banners and, above all, you up to date.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="arrows_opacity herold_arrows_wrapper" _msthidden="1">
                                            <span class="opacity_prev_arrow slick-arrow" style={{}} _mstmutation="1">
                                                <img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/Radimo Skupaj marketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                            <span class="arrows_opacity_between">
                                                <ul class="slick-dots" style={{}} role="tablist">
                                                    <li className={index === 0 ? "slick-active" : ""} role="presentation">
                                                        <button onClick={() => { setIndex(0) }} type="button" role="tab" id="slick-slide-control30" aria-controls="slick-slide30" aria-label="1 of 4" tabindex="0" _mstaria-label="34697" _msthash="487" _msttexthash="4459" aria-selected="true">1</button></li>
                                                    <li className={index === 1 ? "slick-active" : ""} role="presentation">
                                                        <button onClick={() => { setIndex(1) }} type="button" role="tab" id="slick-slide-control31" aria-controls="slick-slide31" aria-label="2 of 4" tabindex="-1" _mstaria-label="34788" _msthash="488" _msttexthash="4550">2</button></li>
                                                    <li className={index === 2 ? "slick-active" : ""} role="presentation">
                                                        <button onClick={() => { setIndex(2) }} type="button" role="tab" id="slick-slide-control32" aria-controls="slick-slide32" aria-label="3 of 4" tabindex="-1" _mstaria-label="34879" _msthash="489" _msttexthash="4641">3</button></li>
                                                    <li className={index === 3 ? "slick-active" : ""} role="presentation">
                                                        <button onClick={() => { setIndex(3) }} type="button" role="tab" id="slick-slide-control33" aria-controls="slick-slide33" aria-label="4 of 4" tabindex="-1" _mstaria-label="34970" _msthash="490" _msttexthash="4732">4</button>
                                                    </li></ul></span>
                                            <span class="opacity_next_arrow slick-arrow" style={{}} _mstmutation="1">
                                                <img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.Radimo Skupaj .at/marketing/wp-content/themes/Radimo Skupaj marketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>

                        <div class="opacity">
                            <div class="opacity-inner container">
                                <div class="title-head">
                                    <h2 _msttexthash="691470" _msthash="380">Your Way to Banner Advertising</h2>
                                    <h3 _msttexthash="3013868" _msthash="381">In four easy steps, you can find your message on three million websites.</h3>
                                </div>
                                <div class="both">
                                    <div class="left">
                                        <img decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Modehändlerin_Schritte.jpg" alt="" title="Radimo Skupaj -Modehändlerin_Schritte" width="600" height="900" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/herold-Modehändlerin_Schritte.jpg" data-ll-status="loaded" class="entered lazyloaded" />
                                    </div>
                                    <div class="right">
                                        <div class="card-slider">

                                            <div class="card" style={{ backgroundColor: "#fdeeea" }} tabindex="0" role="tabpanel" id="slick-slide30" aria-describedby="slick-slide-control30">
                                                <div class="number">
                                                    <p style={{ color: "#e55934" }} _msttexthash="4459" _msthash="382">1</p>
                                                </div>
                                                <div class="text">
                                                    <h2 _msttexthash="415974" _msthash="383">Budget Determination</h2>
                                                    <p _msttexthash="7185659" _msthash="384">In the first step, our media consultants will work with you to clarify the budget you want to spend on advertising.</p>
                                                </div>
                                            </div><div class="card" style={{ backgroundColor: "#fdeeea" }} tabindex="-1" role="tabpanel" id="slick-slide31" aria-describedby="slick-slide-control31">
                                                <div class="number">
                                                    <p style={{ color: "#e55934" }} _msttexthash="4550" _msthash="385">2</p>
                                                </div>
                                                <div class="text">
                                                    <h2 _msttexthash="197041" _msthash="386">Briefing Talk</h2>
                                                    <p _msttexthash="2721589" _msthash="387">Our experts will discuss goals, content, texts and images with you.</p>
                                                </div>
                                            </div><div class="card" style={{ backgroundColor: "#fdeeea" }} tabindex="-1" role="tabpanel" id="slick-slide32" aria-describedby="slick-slide-control32">
                                                <div class="number">
                                                    <p style={{ color: "#e55934" }} _msttexthash="4641" _msthash="388">3</p>
                                                </div>
                                                <div class="text">
                                                    <h2 _msttexthash="137748" _msthash="389">Reporting</h2>
                                                    <p _msttexthash="4509128" _msthash="390">We'll send you monthly reports with the most important metrics for your online banners.</p>
                                                </div>
                                            </div><div class="card" style={{ backgroundColor: "#fdeeea" }} tabindex="-1" role="tabpanel" id="slick-slide33" aria-describedby="slick-slide-control33">
                                                <div class="number">
                                                    <p style={{ color: "#e55934" }} _msttexthash="4732" _msthash="391">4</p>
                                                </div>
                                                <div class="text">
                                                    <h2 _msttexthash="95472" _msthash="392">Updates</h2>
                                                    <p _msttexthash="3598764" _msthash="393">Radimo Skupaj 's Google experts always keep your banners and, above all, you up to date.</p>
                                                </div>
                                            </div></div>

                                        <div class="arrows_opacity Radimo Skupaj _arrows_wrapper" _msthidden="1">
                                            <font _mstmutation="1" _msttexthash="45056349" _msthidden="1" _msthash="394"><span class="opacity_prev_arrow" style={{}} _mstmutation="1"><img width="24" height="24" decoding="async" src="https://www.Radimo Skupaj .at/marketing/wp-content/themes/Radimo Skupaj marketing/img/angle-left.svg" data-lazy-src="https://www.Radimo Skupaj .at/marketing/wp-content/themes/Radimo Skupaj marketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>

                                                <span class="opacity_next_arrow" style={{}} _mstmutation="1"><img width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.Radimo Skupaj .at/marketing/wp-content/themes/Radimo Skupaj marketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span></font><div class="arrows_opacity_between"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}