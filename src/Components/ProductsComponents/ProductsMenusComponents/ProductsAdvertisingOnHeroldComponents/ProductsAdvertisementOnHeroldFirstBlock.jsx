import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsAdvertisementOnHeroldFirstBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index === -1) {
            setIndex(2);
        }
        if (index === 3) {
            setIndex(0)
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
                                    <h2 _msttexthash="580203" _msthash="116" class="stop">Why advertise on Gradimo Skupaj.at?</h2>
                                    <h3 _msttexthash="3614143" _msthash="117">We answer the most frequently asked questions about advertising on Gradimo Skupaj.at</h3>
                                </div>
                                <div class="card-slider slick-initialized slick-slider slick-dotted">
                                    <div class="slick-list draggable"><div class="slick-track" style={index === 0 ? { opacity: "1", width: "2345px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "2345px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "2345px", transform: "translate3d(-670px, 0px, 0px)" } : {}}>
                                        <div class="card slick-slide slick-cloned" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="" aria-describedby="slick-slide-control12" data-slick-index="-1" aria-hidden="true">
                                            <div class="text">
                                                <h2 data-startnumber="50" class="stop" style={{ color: 'black' }}><e _msttexthash="9815" _msthash="122">50</e>%</h2>
                                                <p _msttexthash="1493830" _msthash="123" style={{ color: 'black' }}>Of visitors to Gradimo Skupaj.at also contact a company<sup _istranslated="1">3</sup></p>
                                            </div>
                                        </div><div class="card slick-slide slick-current slick-active" style={{ width: "320px" }} tabindex="0" role="tabpanel" id="slick-slide10" aria-describedby="slick-slide-control10" data-slick-index="0" aria-hidden="false">
                                            <div class="text">
                                                <h2 data-startnumber="1" _msttexthash="27521" _msthash="118" class="stop" style={{ color: 'black' }}><e _istranslated="1" _msttexthash="4459" _msthash="259">1</e>bn</h2>
                                                <p _msttexthash="7374718" _msthash="119" style={{ color: 'black' }}>Google Impressions<sup _istranslated="1">1</sup> receives Gradimo Skupaj.at per year, making it the most visible online business directory in Austria</p>
                                            </div>
                                        </div><div class="card slick-slide" style={{ width: "320px" }} tabindex="-1" role="tabpanel" id="slick-slide11" aria-describedby="slick-slide-control11" data-slick-index="1" aria-hidden="true">
                                            <div class="text">
                                                <h2 data-startnumber="10" _msttexthash="127543" style={{ color: 'black' }} _msthash="120" class="stop"><e _istranslated="1" _msttexthash="9451" _msthash="260">10</e>million</h2>
                                                <p _msttexthash="3563989" _msthash="121" style={{ color: 'black' }}>Measurable contact requests<sup _istranslated="1">2</sup> listed companies receive on Gradimo Skupaj.at per year </p>
                                            </div>
                                        </div>


                                    </div></div></div>

                                <div class="arrows_usp herold_arrows_wrapper" _msthidden="1">
                                    <span class="usp_prev_arrow Gradimo Skupaj_slick_btn_4 slick-arrow" style={{}} _mstmutation="1">
                                        <img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>

                                    <span class="arrows_usp_between">
                                        <ul class="slick-dots" style={{}} role="tablist">
                                            <li className={index === 0 ? "slick-active" : ""} role="presentation"><button onClick={() => { setIndex(0) }} type="button" role="tab" id="slick-slide-control10" aria-controls="slick-slide10" aria-label="1 of 3" tabindex="0" _mstaria-label="34567" _msthash="264" _msttexthash="4459" aria-selected="true">1</button></li>
                                            <li className={index === 1 ? "slick-active" : ""} role="presentation"><button onClick={() => { setIndex(1) }} type="button" role="tab" id="slick-slide-control11" aria-controls="slick-slide11" aria-label="2 of 3" tabindex="-1" _mstaria-label="34658" _msthash="265" _msttexthash="4550">2</button></li>
                                            <li role="presentation" className={index === 2 ? "slick-active" : ""}><button onClick={() => { setIndex(2) }} type="button" role="tab" id="slick-slide-control12" aria-controls="slick-slide12" aria-label="3 of 3" tabindex="-1" _mstaria-label="34749" _msthash="266" _msttexthash="4641">3</button></li></ul></span>
                                    <span class="usp_next_arrow Gradimo Skupaj_slick_btn_4 slick-arrow" style={{}} _mstmutation="1"><img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-ll-status="loaded" class="entered lazyloaded" /></span>
                                </div>

                                <span class="subtext-quell" _msttexthash="938678" _msthash="125"><sup _istranslated="1">1</sup> Gradimo Skupaj, 2020 | <sup _istranslated="1">2</sup> Gradimo Skupaj, 2020 | <sup _istranslated="1">3</sup> Gradimo Skupaj, 2020</span>




                            </div>
                        </div>
                    </>

                    :
                    <>
                        <div class="block">
                            <div class="usp-inner container">
                                <div class="title-head">
                                    <h2 _msttexthash="580203" _msthash="116" class="stop">Why advertise on Gradimo Skupaj.at?</h2>
                                    <h3 _msttexthash="3614143" _msthash="117">We answer the most frequently asked questions about advertising on Gradimo Skupaj.at</h3>


                                </div>


                                <div class="card-slider">






                                    <div class="card" style={{ backgroundColor: "" }} tabindex="-1" role="tabpanel" id="slick-slide10" aria-describedby="slick-slide-control10">
                                        <div class="text">
                                            <h2 data-startnumber="1" _msttexthash="27430" _msthash="118" class="stop" style={{ color: 'black' }}><e _istranslated="1" _msttexthash="4459" _msthash="259">1</e>bn</h2>
                                            <p _msttexthash="7374718" _msthash="119" style={{ color: 'black' }}>Google Impressions<sup _istranslated="1" >1</sup> receives Gradimo Skupaj.at per year, making it the most visible online business directory in Austria</p>
                                        </div>
                                    </div><div class="card" style={{ backgroundColor: "" }} tabindex="0" role="tabpanel" id="slick-slide11" aria-describedby="slick-slide-control11">
                                        <div class="text">
                                            <h2 data-startnumber="10" _msttexthash="112632" style={{ color: 'black' }} _msthash="120" class="stop"><e _istranslated="1" _msttexthash="9451" _msthash="260">10</e>million</h2>
                                            <p _msttexthash="3563989" _msthash="121" style={{ color: 'black' }}>Measurable contact requests<sup _istranslated="1">2</sup> listed companies receive on Gradimo Skupaj.at per year </p>
                                        </div>
                                    </div><div class="card" style={{ backgroundColor: "" }} tabindex="-1" role="tabpanel" id="slick-slide12" aria-describedby="slick-slide-control12">
                                        <div class="text">
                                            <h2 data-startnumber="50" class="stop" style={{ color: 'black' }}><e _msttexthash="9815" _msthash="122">50</e>%</h2>
                                            <p _msttexthash="1493830" _msthash="123" style={{ color: 'black' }}>Of visitors to Gradimo Skupaj.at also contact a company<sup _istranslated="1">3</sup></p>
                                        </div>
                                    </div></div>

                                <div class="arrows_usp Gradimo Skupaj_arrows_wrapper" _msthidden="1">
                                    <font _mstmutation="1" _msttexthash="45056349" _msthidden="1" _msthash="124"><span class="usp_prev_arrow Gradimo Skupaj_slick_btn_4" style={{}} _mstmutation="1"><img width="24" height="24" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3C/svg%3E" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" /></span>

                                        <span class="usp_next_arrow Gradimo Skupaj_slick_btn_4" style={{}} _mstmutation="1"><img width="20" height="20" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%3E%3C/svg%3E" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" /></span></font><div class="arrows_usp_between"></div>
                                </div>


                                <span class="subtext-quell" _msttexthash="938678" _msthash="125"><sup _istranslated="1">1</sup> Gradimo Skupaj, 2020 | <sup _istranslated="1">2</sup> Gradimo Skupaj, 2020 | <sup _istranslated="1">3</sup> Gradimo Skupaj, 2020</span>





                            </div>
                        </div>
                    </>
            }
        </>
    )
}