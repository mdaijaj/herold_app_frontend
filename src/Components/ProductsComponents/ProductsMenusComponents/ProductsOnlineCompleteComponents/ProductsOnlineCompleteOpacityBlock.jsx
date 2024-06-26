import { useContext, useEffect, useState } from "react";
import AppContext from "../../../../AppContext";

export const ProductsOnlineCompleteOpacityBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(-1);
    useEffect(() => {
        if (index === 4) {
            setIndex(0);
        }
        if (index === -1) {
            setIndex(3);
        }
    }, [index])
    return (
        <>
            {
                isMobile ?
                    <div class="opacity">
                        <div class="opacity-inner container">
                            <div class="title-head">
                                <h2 _msttexthash="609804" _msthash="249">Your way to more visibility.</h2>
                                <h3 _msttexthash="3034109" _msthash="250">In four easy steps, you can find your business anywhere on the internet.</h3>
                            </div>
                            <div class="both">
                                <div class="left">
                                    <img decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Steuerberater_Schritte-1.jpg" alt="" title="Herold-Steuerberater_Schritte" width="481" height="722" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Steuerberater_Schritte-1.jpg" data-ll-status="loaded" class="entered lazyloaded" />
                                </div>
                                <div class="right">
                                    <div class="card-slider slick-initialized slick-slider slick-dotted">

                                        <div class="slick-list draggable">
                                            <div class="slick-track" style={index === 0 ? { opacity: "1", width: "3015px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "3015px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "3015px", transform: "translate3d(-670px, 0px, 0px)" } : index === 3 ? { opacity: "1", width: "3015px", transform: "translate3d(-1000px, 0px, 0px)" } : {}}>

                                                <div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(234, 243, 239)", width: "320px" }} data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide30" aria-describedby="slick-slide-control30">
                                                    <div class="number">
                                                        <p style={{ color: "#338866" }} _msttexthash="4459" _msthash="49">1</p>
                                                    </div>
                                                    <div class="text">
                                                        <h2 _msttexthash="383669" _msthash="50">Easy data collection</h2>
                                                        <p _msttexthash="13271102" _msthash="51">As part of a welcome call, we collect your data. In this step, we also ask you to submit photos and logos to be displayed on Gradimo Skupaj  .at and the connected platforms.</p>
                                                    </div>
                                                </div><div class="card slick-slide" style={{ backgroundColor: "rgb(234, 243, 239)", width: "320px" }} data-slick-index="1" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide31" aria-describedby="slick-slide-control31">
                                                    <div class="number">
                                                        <p style={{ color: "#338866" }} _msttexthash="4550" _msthash="52">2</p>
                                                    </div>
                                                    <div class="text">
                                                        <h2 _msttexthash="537264" _msthash="53">Simple portal connection</h2>
                                                        <p _msttexthash="27521793" _msthash="54">With Online Complete, you can manage all the information about your business – even on social media channels: from your contact details to opening hours, event information, photos and much more. </p>
                                                    </div>
                                                </div><div class="card slick-slide" style={{ backgroundColor: "rgb(234, 243, 239)", width: "320px" }} data-slick-index="2" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide32" aria-describedby="slick-slide-control32">
                                                    <div class="number">
                                                        <p style={{ color: "#338866" }} _msttexthash="4641" _msthash="55">3</p>
                                                    </div>
                                                    <div class="text">
                                                        <h2 _msttexthash="278109" _msthash="56">One-click update</h2>
                                                        <p _msttexthash="32754228" _msthash="57">All changes are transmitted in real time – with one click. This saves time and eliminates the possibility of incorrect data circulating on the Internet. In addition, your data is protected from unwanted manipulation by third parties.</p>
                                                    </div>
                                                </div><div class="card slick-slide" style={{ backgroundColor: "rgb(234, 243, 239)", width: "320px" }} data-slick-index="3" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide33" aria-describedby="slick-slide-control33">
                                                    <div class="number">
                                                        <p style={{ color: "#338866" }} _msttexthash="4732" _msthash="58">4</p>
                                                    </div>
                                                    <div class="text">
                                                        <h2 _msttexthash="95992" _msthash="59">Success</h2>
                                                        <p _msttexthash="13265226" _msthash="60">Online Complete helps your company to achieve optimal visibility on the web - and thus also to more customers and purchases. Minimum effort, maximum success!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div class="arrows_opacity herold_arrows_wrapper">
                                        <span class="opacity_prev_arrow slick-arrow" style={{}}>
                                            <img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" />
                                        </span>
                                        <div class="arrows_opacity_between">
                                            <ul class="slick-dots" style={{}} role="tablist">
                                                <li onClick={() => { setIndex(0) }} className={index === 0 ? "slick-active" : ""} role="presentation"><button type="button" role="tab" id="slick-slide-control30" aria-controls="slick-slide30" aria-label="1 of 4" tabindex="0" aria-selected="true" _mstaria-label="34697" _msthash="6" _msttexthash="4459">1</button></li>
                                                <li onClick={() => { setIndex(1) }} className={index === 1 ? "slick-active" : ""} role="presentation"><button type="button" role="tab" id="slick-slide-control31" aria-controls="slick-slide31" aria-label="2 of 4" tabindex="-1" _mstaria-label="34788" _msthash="7" _msttexthash="4550">2</button></li>
                                                <li onClick={() => { setIndex(2) }} className={index === 2 ? "slick-active" : ""} role="presentation"><button type="button" role="tab" id="slick-slide-control32" aria-controls="slick-slide32" aria-label="3 of 4" tabindex="-1" _mstaria-label="34879" _msthash="8" _msttexthash="4641">3</button></li>
                                                <li onClick={() => { setIndex(3) }} className={index === 3 ? "slick-active" : ""} role="presentation"><button type="button" role="tab" id="slick-slide-control33" aria-controls="slick-slide33" aria-label="4 of 4" tabindex="-1" _mstaria-label="34970" _msthash="9" _msttexthash="4732">4</button></li>
                                            </ul>
                                        </div>
                                        <span class="opacity_next_arrow slick-arrow" style={{}}><img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    :
                    <>
                        <div className="opacity">
                            <div className="opacity-inner container">
                                <div className="title-head">
                                    <h2 style={{}}>
                                        Your way to more visibility.
                                    </h2>
                                    <h3 style={{}}>
                                        Four easy steps to your dream website.
                                    </h3>
                                </div>
                                <div className="both">
                                    <div className="left">
                                        <img
                                            decoding="async"
                                            src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Steuerberater_Schritte-1.jpg"
                                            alt=""
                                            title="Herold-Ärztin_Schritte"
                                            width="586"
                                            height="879"
                                            data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Ärztin_Schritte.jpg"
                                            data-ll-status="loaded"
                                            className="entered lazyloaded"
                                        />
                                    </div>
                                    <div className="right" >
                                        <div className="card-slider">
                                            <div className="card" tabIndex="0" role="tabpanel" aria-hidden="true">
                                                <div className="number">
                                                    <p style={{ color: '#338866' }}>1</p>
                                                </div>
                                                <div className="text">
                                                    <h2>Easy data collection</h2>
                                                    <p>As part of a welcome call, we collect your data. In this step, we also ask you to submit photos and logos to be displayed on Gradimo Skupaj  .at and the connected platforms.</p>
                                                </div>
                                            </div>
                                            <div className="card" tabIndex="-1" role="tabpanel" aria-hidden="true">
                                                <div className="number">
                                                    <p style={{ color: '#338866' }}>2</p>
                                                </div>
                                                <div className="text">
                                                    <h2>Simple portal connection</h2>
                                                    <p>With Online Complete, you can manage all the information about your business – even on social media channels: from your contact details to opening hours, event information, photos and much more.</p>
                                                </div>
                                            </div>
                                            <div className="card" tabIndex="-1" role="tabpanel" aria-hidden="true">
                                                <div className="number">
                                                    <p style={{ color: '#338866' }}>3</p>
                                                </div>
                                                <div className="text">
                                                    <h2>One-click update</h2>
                                                    <p>All changes are transmitted in real time – with one click. This saves time and eliminates the possibility of incorrect data circulating on the Internet. In addition, your data is protected from unwanted manipulation by third parties.</p>
                                                </div>
                                            </div>
                                            <div className="card" tabIndex="-1" role="tabpanel" aria-hidden="true">
                                                <div className="number">
                                                    <p style={{ color: '#338866' }}>4</p>
                                                </div>
                                                <div className="text">
                                                    <h2>Success</h2>
                                                    <p>Online Complete helps your company to achieve optimal visibility on the web - and thus also to more customers and purchases. Minimum effort, maximum success!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="arrows_opacity Gradimo Skupaj  _arrows_wrapper" style={{ marginLeft: '10px' }}>
                                            <span className="opacity_prev_arrow">
                                                <img width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" />
                                            </span>
                                            <span className="opacity_next_arrow">
                                                <img width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" />
                                            </span>
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