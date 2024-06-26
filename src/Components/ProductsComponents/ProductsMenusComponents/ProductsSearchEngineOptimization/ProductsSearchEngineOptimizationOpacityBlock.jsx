import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsSearchEnginOptimizationOpacityBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index === -1) {
            setIndex(4);
        }
        if (index === 5) {
            setIndex(0)
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
                                    <h2 _msttexthash="482001" _msthash="298">Your way to a top ranking. </h2>
                                    <h3 _msttexthash="2193737" _msthash="299">Five easy steps will get you to the top of the search results. </h3>
                                </div>
                                <div class="both" _msthidden="1">
                                    <div class="left">
                                        <img decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Yogalehrerin_Schritte-1.jpg" alt="" title="Herold-Yogalehrerin_Schritte" width="595" height="893" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Yogalehrerin_Schritte-1.jpg" data-ll-status="loaded" class="entered lazyloaded" />
                                    </div>
                                    <div class="right" _msthidden="1">
                                        <div class="card-slider slick-initialized slick-slider slick-dotted">

                                            <div class="slick-list draggable">
                                                <div class="slick-track" style={index === 0 ? { opacity: "1", width: "3685px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "3685px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "3685px", transform: "translate3d(-670px, 0px, 0px)" } : index === 3 ? { opacity: "1", width: "3685px", transform: "translate3d(-1000px, 0px, 0px)" } : index === 4 ? { opacity: "1", width: "3685px", transform: "translate3d(-1335px, 0px, 0px)" } : {}}>
                                                    <div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(244, 242, 249)", width: "320px" }} tabindex="0" role="tabpanel" id="slick-slide30" aria-describedby="slick-slide-control30" data-slick-index="0" aria-hidden="false">
                                                        <div class="number">
                                                            <p style={{ color: "#9184be" }} _msttexthash="4459" _msthash="67">1</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="390468" _msthash="68">Your goals and wishes</h2>
                                                            <p _msttexthash="12677964" _msthash="69">Together with you, we define which goals you are pursuing for your company. This step is the basis for the concept creation of your individual SEO campaign. </p>
                                                        </div>
                                                    </div><div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(244, 242, 249)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide31" aria-describedby="slick-slide-control31" data-slick-index="1" aria-hidden="true">
                                                        <div class="number">
                                                            <p style={{ color: "#9184be" }} _msttexthash="4550" _msthash="64">2</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="371969" _msthash="65">Tailor-made concept</h2>
                                                            <p _msttexthash="24243284" _msthash="66">We finalize your tailor-made SEO concept in consultation with you. This also includes a revision of the content of your website as well as the development of an optimal page structure and a high-quality link profile. </p>
                                                        </div>
                                                    </div><div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(244, 242, 249)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide32" aria-describedby="slick-slide-control32" data-slick-index="2" aria-hidden="true">
                                                        <div class="number">
                                                            <p style={{ color: "#9184be" }} _msttexthash="4641" _msthash="61">3</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="255502" _msthash="62">Campaign launch</h2>
                                                            <p _msttexthash="1899638" _msthash="63">Search engine optimization for your business starts. </p>
                                                        </div>
                                                    </div><div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(244, 242, 249)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide33" aria-describedby="slick-slide-control33" data-slick-index="3" aria-hidden="true">
                                                        <div class="number">
                                                            <p style={{ color: "#9184be" }} _msttexthash="4732" _msthash="58">4</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="426842" _msthash="59">Ongoing optimisation</h2>
                                                            <p _msttexthash="12785032" _msthash="60">We optimize your website according to all Google criteria and regularly carry out professional adjustments to guarantee you the best possible success. </p>
                                                        </div>
                                                    </div><div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(244, 242, 249)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide34" aria-describedby="slick-slide-control34" data-slick-index="4" aria-hidden="true">
                                                        <div class="number">
                                                            <p style={{ color: "#9184be" }} _msttexthash="4823" _msthash="55">5</p>
                                                        </div>
                                                        <div class="text">
                                                            <h2 _msttexthash="95992" _msthash="56">Success</h2>
                                                            <p _msttexthash="11883469" _msthash="57">Your Google ranking is now continuously improving. By positioning yourself in front of your competition, more visitors will land on your website. </p>
                                                        </div>
                                                    </div>

                                                </div></div></div>

                                        <div class="arrows_opacity herold_arrows_wrapper" _msthidden="1">
                                            <span class="opacity_prev_arrow slick-arrow" style={{}} _mstmutation="1">
                                                <img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>

                                            <span class="arrows_opacity_between">
                                                <ul class="slick-dots" style={{}} role="tablist">
                                                    <li className={index === 0 ? "slick-active" : ""} role="presentation">
                                                        <button onClick={() => { setIndex(0) }} type="button" role="tab" id="slick-slide-control30" aria-controls="slick-slide30" aria-label="1 of 5" tabindex="0" _mstaria-label="34827" _msthash="383" _msttexthash="4459" aria-selected="true">1</button></li>
                                                    <li role="presentation" className={index === 1 ? "slick-active" : ""}><button onClick={() => { setIndex(1) }} type="button" role="tab" id="slick-slide-control31" aria-controls="slick-slide31" aria-label="2 of 5" tabindex="-1" _mstaria-label="34918" _msthash="384" _msttexthash="4550">2</button></li>
                                                    <li role="presentation" className={index === 2 ? "slick-active" : ""}><button onClick={() => { setIndex(2) }} type="button" role="tab" id="slick-slide-control32" aria-controls="slick-slide32" aria-label="3 of 5" tabindex="-1" _mstaria-label="35009" _msthash="385" _msttexthash="4641">3</button></li>
                                                    <li role="presentation" className={index === 3 ? "slick-active" : ""}><button onClick={() => { setIndex(3) }} type="button" role="tab" id="slick-slide-control33" aria-controls="slick-slide33" aria-label="4 of 5" tabindex="-1" _mstaria-label="35100" _msthash="386" _msttexthash="4732">4</button></li>
                                                    <li role="presentation" className={index === 4 ? "slick-active" : ""}><button onClick={() => { setIndex(4) }} type="button" role="tab" id="slick-slide-control34" aria-controls="slick-slide34" aria-label="5 of 5" tabindex="-1" _mstaria-label="35191" _msthash="387" _msttexthash="4823">5</button></li>
                                                </ul></span>
                                            <span class="opacity_next_arrow slick-arrow" style={{}} _mstmutation="1">
                                                <img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div class="opacity">
                        <div class="opacity-inner container">
                            <div class="title-head">
                                <h2 _msttexthash="482001" _msthash="298">Your way to a top ranking. </h2>
                                <h3 _msttexthash="2193737" _msthash="299">Five easy steps will get you to the top of the search results. </h3>
                            </div>
                            <div class="both" _msthidden="1">
                                <div class="left">
                                    <img decoding="async" src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Yogalehrerin_Schritte-1.jpg" alt="" title="Herold-Yogalehrerin_Schritte" width="595" height="893" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Yogalehrerin_Schritte-1.jpg" data-ll-status="loaded" class="entered lazyloaded" />
                                </div>
                                <div class="right" _msthidden="1">
                                    <div class="card-slider">
                                        <div class="card" style={{ backgroundColor: "#f4f2f9" }} tabindex="0" role="tabpanel" id="slick-slide30" aria-describedby="slick-slide-control30">
                                            <div class="number">
                                                <p style={{ color: "#9184be" }} _msttexthash="4459" _msthash="67">1</p>
                                            </div>
                                            <div class="text">
                                                <h2 _msttexthash="390468" _msthash="68">Your goals and wishes</h2>
                                                <p _msttexthash="12677964" _msthash="69">Together with you, we define which goals you are pursuing for your company. This step is the basis for the concept creation of your individual SEO campaign. </p>
                                            </div>
                                        </div><div class="card" style={{ backgroundColor: "#f4f2f9" }} tabindex="-1" role="tabpanel" id="slick-slide31" aria-describedby="slick-slide-control31">
                                            <div class="number">
                                                <p style={{ color: "#9184be" }} _msttexthash="4550" _msthash="64">2</p>
                                            </div>
                                            <div class="text">
                                                <h2 _msttexthash="371969" _msthash="65">Tailor-made concept</h2>
                                                <p _msttexthash="24243284" _msthash="66">We finalize your tailor-made SEO concept in consultation with you. This also includes a revision of the content of your website as well as the development of an optimal page structure and a high-quality link profile. </p>
                                            </div>
                                        </div><div class="card" style={{ backgroundColor: "#f4f2f9" }} tabindex="-1" role="tabpanel" id="slick-slide32" aria-describedby="slick-slide-control32">
                                            <div class="number">
                                                <p style={{ color: "#9184be" }} _msttexthash="4641" _msthash="61">3</p>
                                            </div>
                                            <div class="text">
                                                <h2 _msttexthash="255502" _msthash="62">Campaign launch</h2>
                                                <p _msttexthash="1899638" _msthash="63">Search engine optimization for your business starts. </p>
                                            </div>
                                        </div><div class="card" style={{ backgroundColor: "#f4f2f9" }} tabindex="-1" role="tabpanel" id="slick-slide33" aria-describedby="slick-slide-control33">
                                            <div class="number">
                                                <p style={{ color: "#9184be" }} _msttexthash="4732" _msthash="58">4</p>
                                            </div>
                                            <div class="text">
                                                <h2 _msttexthash="426842" _msthash="59">Ongoing optimisation</h2>
                                                <p _msttexthash="12785032" _msthash="60">We optimize your website according to all Google criteria and regularly carry out professional adjustments to guarantee you the best possible success. </p>
                                            </div>
                                        </div><div class="card" style={{ backgroundColor: "#f4f2f9" }} tabindex="-1" role="tabpanel" id="slick-slide34" aria-describedby="slick-slide-control34">
                                            <div class="number">
                                                <p style={{ color: "#9184be" }} _msttexthash="4823" _msthash="55">5</p>
                                            </div>
                                            <div class="text">
                                                <h2 _msttexthash="95992" _msthash="56">Success</h2>
                                                <p _msttexthash="11883469" _msthash="57">Your Google ranking is now continuously improving. By positioning yourself in front of your competition, more visitors will land on your website. </p>
                                            </div>
                                        </div></div>

                                    <div class="arrows_opacity herold_arrows_wrapper" _msthidden="1">
                                        <font _mstmutation="1" _msttexthash="45056349" _msthidden="1" _msthash="300"><span class="opacity_prev_arrow" style={{}} _mstmutation="1"><img width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>

                                            <span class="opacity_next_arrow" style={{}} _mstmutation="1"><img width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span></font><div class="arrows_opacity_between"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}