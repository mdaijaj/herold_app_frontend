import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsSearchEngineOptimizationFirstBlock = () => {
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
            <div class="block">
                <div class="usp-inner container">
                    <div class="title-head">
                        <h2 _msttexthash="2157870" _msthash="297" class="stop">What makes  Gradimo Skupaj's search engine optimization stand out?</h2>
                        <h3 _msttexthash="3711747" _msthash="298">A top ranking on Google depends on many different factors.  Gradimo Skupaj knows them all.</h3>
                        <div class="sbanner-container">
                            <div>
                                <a href="https://www.google.com/partners/agency?id=6812782193" target="_blank">
                                    <img width="598" height="570" decoding="async" class="sbanner-logo entered lazyloaded" src="https://www.herold.at/marketing/wp-content/uploads/2022/08/PremierPartner-RGB.png" alt="Google Leading Agency" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/08/PremierPartner-RGB.png" _mstalt="397917" _msthash="299" data-ll-status="loaded" />
                                </a>
                            </div>
                            <div>
                                <h3 _msttexthash="30989868" _msthash="300"> Gradimo Skupaj is not only one of the most experienced Google Premium Partners in Austria, but also one of only 10 Google Leading Agencies. For you, this means that we can optimize your campaign even better and achieve your goals as efficiently as possible.
                                </h3>
                            </div>
                        </div>
                    </div>
                    {
                        isMobile === false ?
                            <>
                                <div class="card-slider">
                                    <div class="card" style={{ backgroundColor: "#f4f2f9" }} tabindex="0" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20">
                                        <div class="text" style={{ color: 'black' }}>
                                            <h2 data-startnumber="2000" style={{ color: 'black' }} class="stop"><e _msttexthash="28054" _msthash="100">2.000</e>+</h2>
                                            <p _msttexthash="7440433" style={{ color: 'black' }} _msthash="101">Implemented projects make  Gradimo Skupaj the largest provider of search engine optimization in the SME segment in Austria<sup _istranslated="1">1</sup>. </p>
                                        </div>
                                    </div>
                                    <div class="card" style={{ backgroundColor: "#f4f2f9" }} tabindex="-1" role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21">
                                        <div class="text" style={{ color: 'black' }}>
                                            <h2 data-startnumber="90" style={{ color: 'black' }} class="stop"><e _msttexthash="10179" _msthash="98">90</e>%</h2>
                                            <p _msttexthash="4589091" style={{ color: 'black' }} _msthash="99">of all optimized websites will get  Gradimo Skupaj on page 1 of Google search results<sup _istranslated="1">2</sup> in 6 to 9 months. </p>
                                        </div>
                                    </div>
                                    <div class="card" style={{ backgroundColor: "#f4f2f9" }} tabindex="-1" role="tabpanel" id="slick-slide22" aria-describedby="slick-slide-control22">
                                        <div class="text" style={{ color: 'black' }}>
                                            <h2 data-startnumber="40" style={{ color: 'black' }} class="stop"><e _msttexthash="9724" _msthash="96">40</e>%</h2>
                                            <p _msttexthash="2939092" style={{ color: 'black' }} _msthash="97">On average,  Gradimo Skupaj achieves an increase in traffic for its customers<sup _istranslated="1">3</sup>. </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <>

                                <div class="card-slider slick-initialized slick-slider slick-dotted">
                                    <div class="slick-list draggable">
                                        <div class="slick-track" style={index === 0 ? { opacity: "1", width: "2345px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "2345px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "2345px", transform: "translate3d(-670px, 0px, 0px)" } : {}}>
                                            <div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(244, 242, 249)", width: "320px" }} tabindex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control22" data-slick-index="-1" aria-hidden="true">
                                                <div class="text" style={{ color: 'black' }}>
                                                    <h2 data-startnumber="40" style={{ color: 'black' }} class="stop"><e _msttexthash="9724" _msthash="96">40</e>%</h2>
                                                    <p _msttexthash="2939092" style={{ color: 'black' }} _msthash="97">On average,  Gradimo Skupaj achieves an increase in traffic for its customers<sup _istranslated="1">3</sup>. </p>
                                                </div>
                                            </div><div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(244, 242, 249)", width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20" data-slick-index="0" aria-hidden="true">
                                                <div class="text" style={{ color: 'black' }}>
                                                    <h2 data-startnumber="2000" style={{ color: 'black' }} class="stop"><e _msttexthash="28054" _msthash="100">2.000</e>+</h2>
                                                    <p _msttexthash="7440433" style={{ color: 'black' }} _msthash="101">Implemented projects make  Gradimo Skupaj the largest provider of search engine optimization in the SME segment in Austria<sup _istranslated="1">1</sup>. </p>
                                                </div>
                                            </div>

                                            <div class="card slick-slide slick-current slick-active" style={{ backgroundColor: "rgb(244, 242, 249)", width: "320px" }} tabindex="0" role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21" data-slick-index="1" aria-hidden="false">
                                                <div class="text" style={{ color: 'black' }}>
                                                    <h2 data-startnumber="90" style={{ color: 'black' }} class="stop"><e _msttexthash="10179" _msthash="98">90</e>%</h2>
                                                    <p _msttexthash="4589091" style={{ color: 'black' }} _msthash="99">of all optimized websites will get  Gradimo Skupaj on page 1 of Google search results<sup _istranslated="1">2</sup> in 6 to 9 months. </p>
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
                            </>
                    }


                    <span class="subtext-quell" _msttexthash="1332656" _msthash="302"><sup _istranslated="1">1</sup> Herald, 2020 | <sup _istranslated="1">2</sup> Herald, 2020 | <sup _istranslated="1">3</sup> Boostability, 2023</span>


                </div>

            </div>
        </>
    )
}