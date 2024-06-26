import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsOnlineCompleteFirstBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index === 3) {
            setIndex(0);
        }
        if (index === -1) {
            setIndex(2);
        }
    }, [index])
    return (
        <>
            {
                isMobile ?
                    <>
                        <div class="block">
                            <div class="usp-inner container">
                                <div class="title-head">
                                    <h2 _msttexthash="673946" _msthash="243" class="stop">Why Gradimo Skupaj is the right choice?</h2>
                                    <h3 _msttexthash="9503975" _msthash="244">As Austria's largest digital expert, Gradimo Skupaj  offers online solutions that companies really need. Affordable, simple and effective.</h3>
                                </div>
                                <div class="card-slider slick-initialized slick-slider slick-dotted">

                                    <div class="slick-list draggable"><div class="slick-track" style={index === 0 ? { opacity: "1", width: "2345px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "2345px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "2345px", transform: "translate3d(-670px, 0px, 0px)" } : {}}>
                                        <div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(234, 243, 239)", width: "320px" }} data-slick-index="-1" id="" aria-hidden="true" tabindex="-1">
                                            <div class="text">
                                                <h2 data-startnumber="100" class="stop"><e _msttexthash="15067" _msthash="67">100</e>%</h2>
                                                <p _msttexthash="5677230" _msthash="68">Worry-free, because your company data is protected from unwanted manipulation by Online Complete. </p>
                                            </div>
                                        </div><div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(234, 243, 239)", width: "320px" }} data-slick-index="0" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20">
                                            <div class="text">
                                                <h2 data-startnumber="95" class="stop"><e _msttexthash="10699" _msthash="69">95</e>%</h2>
                                                <p _msttexthash="3808311" _msthash="70">of online searches in Austria will find your business thanks to Online Complete. <sup _istranslated="1">1</sup></p>
                                            </div>
                                        </div><div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(234, 243, 239)", width: "320px" }} data-slick-index="1" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21">
                                            <div class="text">
                                                <h2 data-startnumber="60" class="stop"><e _msttexthash="9906" _msthash="71">60</e>%</h2>
                                                <p _msttexthash="2825212" _msthash="72">More sales through an optimal online presence with Online Complete. <sup _istranslated="1">2</sup></p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div class="arrows_usp herold_arrows_wrapper">
                                    <span class="usp_prev_arrow herold_slick_btn_4 slick-arrow" style={{}}><img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                    <div class="arrows_usp_between"><ul class="slick-dots" style={{}} role="tablist"><li className={index === 0 ? "slick-active" : ""} role="presentation"><button type="button" role="tab" id="slick-slide-control20" aria-controls="slick-slide20" aria-label="1 of 3" tabindex="-1" _mstaria-label="34567" _msthash="3" _msttexthash="4459">1</button></li><li className={index === 1 ? "slick-active" : ""} role="presentation" class="slick-active"><button type="button" role="tab" id="slick-slide-control21" aria-controls="slick-slide21" aria-label="2 of 3" tabindex="0" _mstaria-label="34658" _msthash="4" _msttexthash="4550" aria-selected="true">2</button></li><li role="presentation" className={index === 2 ? "slick-active" : ""}><button type="button" role="tab" id="slick-slide-control22" aria-controls="slick-slide22" aria-label="3 of 3" tabindex="-1" _mstaria-label="34749" _msthash="5" _msttexthash="4641">3</button></li></ul></div>
                                    <span class="usp_next_arrow herold_slick_btn_4 slick-arrow" style={{}}><img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                </div>
                                <span class="subtext-quell" _msttexthash="411398" _msthash="245"><sup _istranslated="1">1</sup> Gradimo Skupaj 2021 | <sup _istranslated="1">2</sup> Gradimo Skupaj 2020</span>
                            </div>
                        </div>
                    </>
                    :
                    <div className="block">
                        <div className="usp-inner container">
                            <div className="title-head">
                                <h2 >Why Gradimo Skupaj is the right choice? </h2>
                                <h3 >As Austria's largest digital expert, Gradimo Skupaj  offers online solutions that companies really need. Affordable, simple and effective.</h3>
                            </div>
                            <div className="card-slider">
                                <div className="card" style={{ backgroundColor: '#f3fafd' }}>
                                    <div className="text">
                                        <h2 >95%</h2>
                                        <p >of online searches in Austria will find your business thanks to Online Complete. <sup style={{ fontSize: '12px' }}>1</sup></p>
                                    </div>
                                </div>
                                <div className="card" style={{ backgroundColor: '#f3fafd' }}>
                                    <div className="text">
                                        <h2 >60%</h2>
                                        <p >More sales through an optimal online presence with Online Complete.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ backgroundColor: '#f3fafd' }}>
                                    <div className="text">
                                        <h2 >100%</h2>
                                        <p >Worry-free, because your company data is protected from unwanted manipulation by Online Complete. </p>
                                    </div>
                                </div>
                            </div>
                            <span className="subtext-quell" style={{ fontSize: '14px', color: '#888', marginTop: '10px' }}><sup style={{ fontSize: '12px' }}>1</sup> Gradimo Skupaj, 2020</span>
                        </div>
                    </div>
            }
        </>
    )
}