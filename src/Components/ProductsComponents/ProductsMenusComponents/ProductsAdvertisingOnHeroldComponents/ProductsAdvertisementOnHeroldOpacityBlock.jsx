import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsAdvertisementOnHeroldOpacityBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
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

                    <>
                        <div class="opacity">
                            <div class="opacity-inner container">
                                <div class="title-head">
                                    <h2 _msttexthash="336258" _msthash="167">Here's how it works.</h2>
                                    <h3 _msttexthash="1349673" _msthash="168">Your way to a successful ranking on Gradimo Skupaj.at.</h3>
                                </div>
                                <div class="both">
                                    <div class="left">
                                        <img decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/06/ablauf-herold.jpg" alt="" title="ablauf-herold" width="697" height="1140" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/06/ablauf-herold.jpg" data-ll-status="loaded" class="entered lazyloaded" />
                                    </div>
                                    <div class="right">
                                        <div class="card-slider slick-initialized slick-slider slick-dotted">
                                            <div class="slick-list draggable">
                                                <div class="slick-track" style={index === 0 ? { opacity: "1", width: "3015px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "3015px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "3015px", transform: "translate3d(-670px, 0px, 0px)" } : index === 3 ? { opacity: "1", width: "3015px", transform: "translate3d(-1000px, 0px, 0px)" } : {}}>
                                                    <div class="card slick-slide slick-current slick-active" style={{ width: "320px" }} tabindex="0" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20" data-slick-index="0" aria-hidden="false">
                                                        <div class="number">
                                                            <p style={{ color: "#fec600" }} _msttexthash="4459" _msthash="169">1</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="267202" _msthash="170">Suitable for you</h2>
                                                            <p _msttexthash="1576809" _msthash="171">Together we will choose the right package for you.</p>
                                                        </div>
                                                    </div><div class="card slick-slide" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21" data-slick-index="1" aria-hidden="true">
                                                        <div class="number">
                                                            <p style={{ color: "#fec600" }} _msttexthash="4550" _msthash="172">2</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="371969" _msthash="173">Tailor-made concept</h2>
                                                            <p _msttexthash="1521221" _msthash="174">You choose the desired industries and keywords.</p>
                                                        </div>
                                                    </div><div class="card slick-slide" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide22" aria-describedby="slick-slide-control22" data-slick-index="2" aria-hidden="true">
                                                        <div class="number">
                                                            <p style={{ color: "#fec600" }} _msttexthash="4641" _msthash="175">3</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="262678" _msthash="176">Implementation</h2>
                                                            <p _msttexthash="927888" _msthash="177">We'll create your business listing.</p>
                                                        </div>
                                                    </div><div class="card slick-slide" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide23" aria-describedby="slick-slide-control23" data-slick-index="3" aria-hidden="true">
                                                        <div class="number">
                                                            <p style={{ color: "#fec600" }} _msttexthash="4732" _msthash="178">4</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="265382" _msthash="179">First successes</h2>
                                                            <p _msttexthash="817050" _msthash="180">You benefit from a better ranking.</p>
                                                        </div>
                                                    </div><div class="card slick-slide slick-cloned" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control20" data-slick-index="4" aria-hidden="true">
                                                        <div class="number">
                                                            <p style={{ color: "#fec600" }} _msttexthash="4459" _msthash="169">1</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="267202" _msthash="170">Suitable for you</h2>
                                                            <p _msttexthash="1576809" _msthash="171">Together we will choose the right package for you.</p>
                                                        </div>
                                                    </div><div class="card slick-slide slick-cloned" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control21" data-slick-index="5" aria-hidden="true">
                                                        <div class="number">
                                                            <p style={{ color: "#fec600" }} _msttexthash="4550" _msthash="172">2</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="371969" _msthash="173">Tailor-made concept</h2>
                                                            <p _msttexthash="1521221" _msthash="174">You choose the desired industries and keywords.</p>
                                                        </div>
                                                    </div><div class="card slick-slide slick-cloned" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control22" data-slick-index="6" aria-hidden="true">
                                                        <div class="number">
                                                            <p style={{ color: "#fec600" }} _msttexthash="4641" _msthash="175">3</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="262678" _msthash="176">Implementation</h2>
                                                            <p _msttexthash="927888" _msthash="177">We'll create your business listing.</p>
                                                        </div>
                                                    </div><div class="card slick-slide slick-cloned" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control23" data-slick-index="7" aria-hidden="true">
                                                        <div class="number">
                                                            <p style={{ color: "#fec600" }} _msttexthash="4732" _msthash="178">4</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="265382" _msthash="179">First successes</h2>
                                                            <p _msttexthash="817050" _msthash="180">You benefit from a better ranking.</p>
                                                        </div>
                                                    </div></div></div></div>

                                        <div class="arrows_opacity herold_arrows_wrapper" _msthidden="1">
                                            <span class="opacity_prev_arrow slick-arrow" style={{}} _mstmutation="1">
                                                <img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>

                                            <span class="arrows_opacity_between">
                                                <ul class="slick-dots" style={{}} role="tablist">
                                                    <li className={index === 0 ? "slick-active" : ""} role="presentation"><button onClick={() => { setIndex(0) }} type="button" role="tab" id="slick-slide-control20" aria-controls="slick-slide20" aria-label="1 of 4" tabindex="0" _mstaria-label="34697" _msthash="281" _msttexthash="4459" aria-selected="true">1</button></li>
                                                    <li className={index === 1 ? "slick-active" : ""} role="presentation"><button onClick={() => { setIndex(1) }} type="button" role="tab" id="slick-slide-control21" aria-controls="slick-slide21" aria-label="2 of 4" tabindex="-1" _mstaria-label="34788" _msthash="282" _msttexthash="4550">2</button></li>
                                                    <li className={index === 2 ? "slick-active" : ""} role="presentation"><button onClick={() => { setIndex(2) }} type="button" role="tab" id="slick-slide-control22" aria-controls="slick-slide22" aria-label="3 of 4" tabindex="-1" _mstaria-label="34879" _msthash="283" _msttexthash="4641">3</button></li>
                                                    <li className={index === 3 ? "slick-active" : ""} role="presentation"><button onClick={() => { setIndex(3) }} type="button" role="tab" id="slick-slide-control23" aria-controls="slick-slide23" aria-label="4 of 4" tabindex="-1" _mstaria-label="34970" _msthash="284" _msttexthash="4732">4</button></li></ul></span>

                                            <span class="opacity_next_arrow slick-arrow" style={{}} _mstmutation="1">
                                                <img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                        </div>
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
                                    <h2 _msttexthash="336258" _msthash="167">Here's how it works.</h2>
                                    <h3 _msttexthash="1349673" _msthash="168">Your way to a successful ranking on Gradimo Skupaj.at.</h3>
                                </div>
                                <div class="both">
                                    <div class="left">
                                        <img decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/06/ablauf-herold.jpg" alt="" title="ablauf-herold" width="697" height="1140" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/06/ablauf-herold.jpg" data-ll-status="loaded" class="entered lazyloaded" />
                                    </div>
                                    <div class="right">
                                        <div class="card-slider">
                                            <div class="card" style={{ backgroundColor: "" }} tabindex="0" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20">
                                                <div class="number">
                                                    <p style={{ color: "#fec600" }} _msttexthash="4459" _msthash="169">1</p>
                                                </div>
                                                <div class="text">
                                                    <h2 _msttexthash="267202" _msthash="170">Suitable for you</h2>
                                                    <p _msttexthash="1576809" _msthash="171">Together we will choose the right package for you.</p>
                                                </div>
                                            </div><div class="card" style={{ backgroundColor: "" }} tabindex="-1" role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21">
                                                <div class="number">
                                                    <p style={{ color: "#fec600" }} _msttexthash="4550" _msthash="172">2</p>
                                                </div>
                                                <div class="text">
                                                    <h2 _msttexthash="371969" _msthash="173">Tailor-made concept</h2>
                                                    <p _msttexthash="1521221" _msthash="174">You choose the desired industries and keywords.</p>
                                                </div>
                                            </div><div class="card" style={{ backgroundColor: "" }} tabindex="-1" role="tabpanel" id="slick-slide22" aria-describedby="slick-slide-control22">
                                                <div class="number">
                                                    <p style={{ color: "#fec600" }} _msttexthash="4641" _msthash="175">3</p>
                                                </div>
                                                <div class="text">
                                                    <h2 _msttexthash="262678" _msthash="176">Implementation</h2>
                                                    <p _msttexthash="927888" _msthash="177">We'll create your business listing.</p>
                                                </div>
                                            </div><div class="card" style={{ backgroundColor: "" }} tabindex="-1" role="tabpanel" id="slick-slide23" aria-describedby="slick-slide-control23">
                                                <div class="number">
                                                    <p style={{ color: "#fec600" }} _msttexthash="4732" _msthash="178">4</p>
                                                </div>
                                                <div class="text">
                                                    <h2 _msttexthash="265382" _msthash="179">First successes</h2>
                                                    <p _msttexthash="817050" _msthash="180">You benefit from a better ranking.</p>
                                                </div>
                                            </div></div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}