import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsGoogleSearchAdvertisingFirstBlock = () => {
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
                        <div className="block">
                            <div className="usp-inner container">
                                <div className="title-head">
                                    <h2 className="stop">Why Google Search Advertising by Gradimo Skupaj?</h2>
                                    <div className="sbanner-container">
                                        <div>
                                            <a href="https://www.google.com/partners/agency?id=6812782193" target="_blank">
                                                <img
                                                    width="299"
                                                    height="286"
                                                    decoding="async"
                                                    className="sbanner-logo entered lazyloaded"
                                                    src="https://www.herold.at/marketing/wp-content/uploads/2023/06/PremierPartner-RGB.png"
                                                    alt="Google Leading Agency"
                                                />
                                            </a>
                                        </div>
                                        <div>
                                            <h3>
                                                Gradimo Skupaj is not only one of the most experienced Google Premium Partners in Austria, but also one of only 10 Google Leading Agencies. For you, this means that we can optimize your campaign even better and achieve your goals as efficiently as possible.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-slider slick-initialized slick-slider slick-dotted" >
                                    <div className="slick-list draggable">
                                        <div className="slick-track" style={index === 0 ? { opacity: "1", width: "2345px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: "1", width: "2345px", transform: "translate3d(-335px, 0px, 0px)" } : index === 2 ? { opacity: "1", width: "2345px", transform: "translate3d(-670px, 0px, 0px)" } : {}}>

                                            <div className="card slick-slide slick-current slick-active" style={{ backgroundColor: '#fff0f0', width: '320px' }} tabIndex="-1" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20">
                                                <div className="text">
                                                    <h2 className="stop"><e>59.963</e></h2>
                                                    <p>Campaigns have been successfully implemented by Austria's largest team of experts.</p>
                                                </div>
                                            </div>
                                            <div className="card slick-slide" style={{ backgroundColor: '#fff0f0', width: '320px' }} tabIndex="-1" role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21">
                                                <div className="text">
                                                    <h2 className="stop"><e>92</e>%</h2>
                                                    <p>of Austrians find your business through Google Advertising. <sup>2</sup></p>
                                                </div>
                                            </div>
                                            <div className="card slick-slide " style={{ backgroundColor: '#fff0f0', width: '320px' }} tabIndex="0" role="tabpanel" id="slick-slide22" aria-describedby="slick-slide-control22">
                                                <div className="text">
                                                    <h2 className="stop"><e>20</e></h2>
                                                    <p>years of experience with Google Advertising Gradimo Skupaj has a team of experts vetted by Google for this. <sup>3</sup></p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="arrows_usp herold_arrows_wrapper">
                                    <span className="usp_prev_arrow herold_slick_btn_4" style={{ marginRight: '10px' }}>
                                        <img
                                            onClick={() => { setIndex(index - 1) }}
                                            width="24"
                                            height="24"
                                            decoding="async"
                                            src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg"
                                            alt=""
                                        />
                                    </span>

                                    <div className="arrows_usp_between">
                                        <ul class="slick-dots" style={{}
                                        } role="tablist">
                                            <li className={index === 0 ? "slick-active" : ""} role="presentation">
                                                <button onClick={() => { setIndex(0) }} type="button" role="tab" id="slick-slide-control20" aria-controls="slick-slide20" aria-label="1 of 3" tabindex="-1" _mstaria-label="34567" _msthash="314" _msttexthash="4459">1</button>
                                            </li>
                                            <li className={index === 1 ? "slick-active" : ""} role="presentation">
                                                <button onClick={() => { setIndex(1) }} type="button" role="tab" id="slick-slide-control21" aria-controls="slick-slide21" aria-label="2 of 3" tabindex="0" _mstaria-label="34658" _msthash="315" _msttexthash="4550" aria-selected="true">2
                                                </button>
                                            </li>
                                            <li role="presentation" className={index === 2 ? "slick-active" : ""}>
                                                <button onClick={() => { setIndex(2) }} type="button" role="tab" id="slick-slide-control22" aria-controls="slick-slide22" aria-label="3 of 3" tabindex="-1" _mstaria-label="34749" _msthash="316" _msttexthash="4641">3</button>
                                            </li>
                                        </ul>

                                    </div>

                                    <span className="usp_next_arrow herold_slick_btn_4" style={{ marginRight: '10px' }}>
                                        <img
                                            onClick={() => { setIndex(index + 1) }}
                                            width="20"
                                            height="20"
                                            decoding="async"
                                            src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg"
                                            alt=""
                                        />
                                    </span>
                                </div>
                                <span className="subtext-quell">
                                    <sup>2</sup>Statista 2023 | Statista 2023, <sup>3</sup>Google,Gradimo Skupaj 2023
                                </span>
                            </div>
                        </div>
                    </>
                    :
                    <div className="block">
                        <div className="usp-inner container">
                            <div className="title-head">
                                <h2 className="stop" style={{ margin: 0 }}>Why Google Search Advertising by Gradimo Skupaj?</h2>
                                <div className="sbanner-container">
                                    <div>
                                        <a href="https://www.google.com/partners/agency?id=6812782193" target="_blank">
                                            <img
                                                width="299"
                                                height="286"
                                                decoding="async"
                                                className="sbanner-logo entered lazyloaded"
                                                src="https://www.herold.at/marketing/wp-content/uploads/2023/06/PremierPartner-RGB.png"
                                                alt="Google Leading Agency"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <h3>
                                            Gradimo Skupaj is not only one of the most experienced Google Premium Partners in Austria, but also one of only 10 Google Leading Agencies. For you, this means that we can optimize your campaign even better and achieve your goals as efficiently as possible.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card-slider" >
                                <div className="card" style={{ backgroundColor: '#fff0f0' }} tabIndex="-1" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20">
                                    <div className="text">
                                        <h2 className="stop"><e>59.963</e></h2>
                                        <p>Campaigns have been successfully implemented by Austria's largest team of experts.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ backgroundColor: '#fff0f0' }} tabIndex="-1" role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21">
                                    <div className="text">
                                        <h2 className="stop"><e>92</e>%</h2>
                                        <p>of Austrians find your business through Google Advertising. <sup>2</sup></p>
                                    </div>
                                </div>
                                <div className="card" style={{ backgroundColor: '#fff0f0' }} tabIndex="0" role="tabpanel" id="slick-slide22" aria-describedby="slick-slide-control22">
                                    <div className="text">
                                        <h2 className="stop"><e>20</e></h2>
                                        <p>years of experience with Google Advertising Gradimo Skupaj has a team of experts vetted by Google for this. <sup>3</sup></p>
                                    </div>
                                </div>
                            </div>
                            <div className="arrows_usp herold_arrows_wrapper">
                                <span className="usp_prev_arrow herold_slick_btn_4" style={{ marginRight: '10px' }}>
                                    <img
                                        width="24"
                                        height="24"
                                        decoding="async"
                                        src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg"
                                        alt=""
                                    />
                                </span>
                                <span className="usp_next_arrow herold_slick_btn_4" style={{ marginRight: '10px' }}>
                                    <img
                                        width="20"
                                        height="20"
                                        decoding="async"
                                        src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg"
                                        alt=""
                                    />
                                </span>
                                <div className="arrows_usp_between"></div>
                            </div>
                            <span className="subtext-quell">
                                <sup>2</sup>Statista 2023 | Statista 2023, <sup>3</sup>Google,Gradimo Skupaj 2023
                            </span>
                        </div>
                    </div>
            }

        </>
    )
}