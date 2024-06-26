import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsSocialMediaAdvertisementFirstBlock = () => {
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
                    <div className="block">
                        <div className="usp-inner container">
                            <div className="title-head">
                                <h2 style={{ textAlign: 'center' }}>What are the advantages of Gradimo Skupaj's social media advertising?</h2>
                                <h3>Be where your customers spend their time!</h3>
                            </div>

                            <div className="card-slider slick-initialized slick-slider slick-dotted">
                                <div className="slick-list draggable">
                                    <div className="slick-track" style={index === 0 ? { opacity: 1, width: '2345px', transform: 'translate3d(-0px, 0px, 0px)' } : index === 1 ? { opacity: 1, width: '2345px', transform: 'translate3d(-335px, 0px, 0px)' } : index === 2 ? { opacity: 1, width: '2345px', transform: 'translate3d(-670px, 0px, 0px)' } : {}}>
                                        <div className="card slick-slide slick-current slick-active" style={{ backgroundColor: 'rgb(235, 240, 247)', width: '320px' }} tabindex="-1" role="tabpanel" aria-describedby="slick-slide-control22">
                                            <div className="text">
                                                <h2 data-startnumber="5,5">5,5</h2>
                                                <p><span className="badge-usp">Millions of users</span><font>in Austria have Facebook & Instagram. <sup>3</sup></font></p>
                                            </div>
                                        </div>
                                        <div className="card slick-slide slick-current slick-active" style={{ backgroundColor: 'rgb(235, 240, 247)', width: '320px' }} tabindex="0" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20">
                                            <div className="text">
                                                <h2 data-startnumber="1,5">1,5</h2>
                                                <p><span className="badge-usp">Hours per day</span><font>Austrians spend time on social media. <sup>1</sup></font></p>
                                            </div>
                                        </div>
                                        <div className="card slick-slide slick-current slick-active" style={{ backgroundColor: 'rgb(235, 240, 247)', width: '320px' }} tabindex="-1" role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21">
                                            <div className="text">
                                                <h2 data-startnumber="7 von 10">7 of 10</h2>
                                                <p><span className="badge-usp">People buy</span><font>An achievement after seeing regular advertisements about it. <sup>2</sup></font></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="arrows_usp herold_arrows_wrapper">
                                <span className="usp_prev_arrow herold_slick_btn_4 slick-arrow">
                                    <img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" />
                                </span>
                                <span className="arrows_usp_between">
                                    <ul className="slick-dots" role="tablist">
                                        <li className={index === 0 ? "slick-active" : ""} role="presentation">
                                            <button onClick={() => { setIndex(0) }} type="button" role="tab" id="slick-slide-control20" aria-controls="slick-slide20" aria-label="1 of 3" tabIndex="0">1</button>
                                        </li>
                                        <li className={index === 1 ? "slick-active" : ""} role="presentation">
                                            <button onClick={() => { setIndex(1) }} type="button" role="tab" id="slick-slide-control21" aria-controls="slick-slide21" aria-label="2 of 3" tabIndex="-1">2</button>
                                        </li>
                                        <li role="presentation" className={index === 2 ? "slick-active" : ""}>
                                            <button onClick={() => { setIndex(2) }} type="button" role="tab" id="slick-slide-control22" aria-controls="slick-slide22" aria-label="3 of 3" tabIndex="-1">3</button>
                                        </li>
                                    </ul>
                                </span>
                                <span className="usp_next_arrow herold_slick_btn_4 slick-arrow">
                                    <img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" />
                                </span>
                            </div>

                            <span className="subtext-quell"><sup>1</sup> 1.5h: Statista, 2023 | <sup>2</sup> 7 of 10: Gradimo Skupaj, 2023 | <sup>3</sup> 5.5 million: Statista, 2023</span>
                        </div>
                    </div>
                    :
                    <div className="block">
                        <div className="usp-inner container">
                            <div className="title-head">
                                <h2 style={{ textAlign: 'center' }}>What are the advantages of Gradimo Skupaj's social media advertising?</h2>
                                <h3>Be where your customers spend their time!</h3>
                            </div>

                            <div className="card-slider">
                                <div className="card" style={{ backgroundColor: '#ebf0f7' }} tabindex="0" role="tabpanel" id="slick-slide20" aria-describedby="slick-slide-control20">
                                    <div className="text">
                                        <h2 data-startnumber="1,5">1,5</h2>
                                        <p><span className="badge-usp">Hours per day</span><font>Austrians spend time on social media. <sup>1</sup></font></p>
                                    </div>
                                </div>
                                <div className="card" style={{ backgroundColor: '#ebf0f7' }} tabindex="-1" role="tabpanel" id="slick-slide21" aria-describedby="slick-slide-control21">
                                    <div className="text">
                                        <h2 data-startnumber="7 von 10">7 of 10</h2>
                                        <p><span className="badge-usp">People buy</span><font>An achievement after seeing regular advertisements about it. <sup>2</sup></font></p>
                                    </div>
                                </div>
                                <div className="card" style={{ backgroundColor: '#ebf0f7' }} tabindex="-1" role="tabpanel" id="slick-slide22" aria-describedby="slick-slide-control22">
                                    <div className="text">
                                        <h2 data-startnumber="5,5">5,5</h2>
                                        <p><span className="badge-usp">Millions of users</span><font>In Austria have Facebook & Instagram. <sup>3</sup></font></p>
                                    </div>
                                </div>
                            </div>

                            <div className="arrows_usp herold_arrows_wrapper">
                                <span className="usp_prev_arrow herold_slick_btn_4" style={{}}><img width="24" height="24" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3C/svg%3E" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" /><noscript><img width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" /></noscript></span>
                                <div className="arrows_usp_between"></div>
                                <span className="usp_next_arrow herold_slick_btn_4" style={{}}><img width="20" height="20" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%3E%3C/svg%3E" data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" /><noscript><img width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" /></noscript></span>
                            </div>

                            <span className="subtext-quell"><sup>1</sup> 1.5h: Statista, 2023 | <sup>2</sup> 7 of 10: Gradimo Skupaj, 2023 | <sup>3</sup> 5.5 million: Statista, 2023</span>
                        </div>
                    </div>
            }
        </>
    )
}