import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext";

export const ProductsOnlineCompleteRecommendedBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index === -1) {
            setIndex(2)
        }
        if (index === 3) {
            setIndex(0)
        }
        const intervalID = setInterval(() => {
            if (index === 3) {
                setIndex(0);
            }
            else {
                setIndex(index + 1);
            }
        }, 3000);
        return () => clearInterval(intervalID);
    }, [index])
    return (
        <>
            {
                isMobile ?
                    <>
                        <div className="block recommend">
                            <div className="title-head">
                                <h2>For even more visibility, we recommend that you</h2>
                            </div>
                            <div className="container card-slider slick-initialized slick-slider slick-dotted">
                                <div className="slick-list draggable">
                                    <div className="slick-track" style={index === 0 ? { opacity: 1, width: '2345px', transform: 'translate3d(-0px, 0px, 0px)' } : index === 1 ? { opacity: 1, width: '2345px', transform: 'translate3d(-340px, 0px, 0px)' } : index === 2 ? { opacity: 1, width: '2345px', transform: 'translate3d(-670px, 0px, 0px)' } : {}}>
                                        <div className="card-item slick-slide slick-current slick-active" style={{ width: '320px' }} tabIndex="0" role="tabpanel" id="slick-slide40" aria-describedby="slick-slide-control40" data-slick-index="0" aria-hidden="false">
                                            <div style={{ backgroundImage: 'url("https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Installateur.jpg")' }} className="card-head rocket-lazyload entered lazyloaded"></div>
                                            <div style={{ backgroundColor: 'rgb(255, 109, 106)', height: '378px' }} className="card-body" id="card-body">
                                                <h2>Google Search Advertising</h2>
                                                <p>Google Search Advertising (SEA) ensures that your business is found by 92% of Austrians who search for local businesses on Google.</p>
                                                <div className="secondary-button" id="secondary-button">
                                                    <a href="/marketing/sea/">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-item slick-slide slick-active" style={{ width: '320px' }} tabIndex="0" role="tabpanel" id="slick-slide41" aria-describedby="slick-slide-control41" data-slick-index="1" aria-hidden="false">
                                            <div style={{ backgroundImage: 'url("https://www.herold.at/marketing/wp-content/uploads/2022/09/MicrosoftTeams-image-3.jpg")' }} className="card-head rocket-lazyload entered lazyloaded"></div>
                                            <div style={{ backgroundColor: 'rgb(141, 200, 232)', height: '378px' }} className="card-body" id="card-body">
                                                <h2>Website</h2>
                                                <p>Your website is your business on the internet. Gradimo Skupaj makes sure it feels the same way – for you and your customers.</p>
                                                <div className="secondary-button" id="secondary-button">
                                                    <a href="/marketing/websites/">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-item slick-slide slick-current slick-active" style={{ width: '320px' }} tabIndex="-1" role="tabpanel">
                                            <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Mode_.jpg" style={{ backgroundImage: 'url("https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Mode_.jpg")' }} className="card-head rocket-lazyload entered lazyloaded"></div>
                                            <div style={{ backgroundColor: 'rgb(229, 89, 52)', height: '378px' }} className="card-body">
                                                <h2>Google Banner Advertising</h2>
                                                <p>Your individual banner on up to three million websites in Austria. Reach customers through Google's gigantic ad network.</p>
                                                <div className="secondary-button">
                                                    <a href="/marketing/gba/" tabIndex="-1">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="arrows_recommend herold_arrows_wrapper">
                                <span className="recommend_prev_arrow slick-arrow" style={{ marginRight: '10px' }}>
                                    <img onClick={() => { setIndex(index - 1) }} width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" style={{ maxWidth: '100%' }} />
                                </span>
                                <div className="arrows_recommend_between" style={{ display: 'inline-block', marginRight: '10px' }}>
                                    <ul className="slick-dots" role="tablist">
                                        <li onClick={() => { setIndex(0) }} className={index === 0 ? "slick-active" : ""} role="presentation">
                                            <button type="button" role="tab" id="slick-slide-control50" aria-controls="slick-slide50" aria-label="1 of 3" tabIndex="-1">1</button>
                                        </li>
                                        <li onClick={() => { setIndex(1) }} role="presentation" className={index === 1 ? "slick-active" : ""}>
                                            <button type="button" role="tab" id="slick-slide-control51" aria-controls="slick-slide51" aria-label="2 of 3" tabIndex="0" aria-selected="true">2</button>
                                        </li>
                                        <li onClick={() => { setIndex(2) }} role="presentation" className={index === 2 ? "slick-active" : ""}>
                                            <button type="button" role="tab" id="slick-slide-control52" aria-controls="slick-slide52" aria-label="3 of 3" tabIndex="-1">3</button>
                                        </li>
                                    </ul>
                                </div>
                                <span className="recommend_next_arrow slick-arrow">
                                    <img onClick={() => { setIndex(index + 1) }} width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" style={{ maxWidth: '100%' }} />
                                </span>
                            </div>
                        </div>


                    </>
                    :
                    <div className="block recommend">
                        <div className="title-head">
                            <h2>For even more visibility,
                                <br /> we recommend that you</h2>
                        </div>

                        <div className="container card-slider slick-initialized slick-slider slick-dotted">
                            <div className="slick-list draggable">
                                <div className="slick-track" >
                                    <div className="card-item slick-slide slick-current slick-active" tabIndex="0" role="tabpanel" id="slick-slide40" aria-describedby="slick-slide-control40" data-slick-index="0" aria-hidden="false">
                                        <div style={{ backgroundImage: 'url("https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Installateur.jpg")' }} className="card-head rocket-lazyload entered lazyloaded"></div>
                                        <div style={{ backgroundColor: 'rgb(255, 109, 106)' }} className="card-body" id="card-body">
                                            <h2>Google Search Advertising</h2>
                                            <p>Google Search Advertising (SEA) ensures that your business is found by 92% of Austrians who search for local businesses on Google.</p>
                                            <div className="secondary-button" id="secondary-button">
                                                <a href="/marketing/sea/">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-item slick-slide slick-active" tabIndex="0" role="tabpanel" id="slick-slide41" aria-describedby="slick-slide-control41" data-slick-index="1" aria-hidden="false">
                                        <div style={{ backgroundImage: 'url("https://www.herold.at/marketing/wp-content/uploads/2022/09/MicrosoftTeams-image-3.jpg")' }} className="card-head rocket-lazyload entered lazyloaded"></div>
                                        <div style={{ backgroundColor: 'rgb(141, 200, 232)' }} className="card-body" id="card-body">
                                            <h2>Website</h2>
                                            <p>Your website is your business on the internet. Gradimo Skupaj makes sure it feels the same way – for you and your customers.</p>
                                            <div className="secondary-button" id="secondary-button">
                                                <a href="/marketing/websites/">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-item slick-slide slick-current slick-active" tabIndex="-1" role="tabpanel">
                                        <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Mode_.jpg" style={{ backgroundImage: 'url("https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Mode_.jpg")' }} className="card-head rocket-lazyload entered lazyloaded"></div>
                                        <div style={{ backgroundColor: 'rgb(229, 89, 52)' }} className="card-body">
                                            <h2>Google Banner Advertising</h2>
                                            <p>Your individual banner on up to three million websites in Austria. Reach customers through Google's gigantic ad network.</p>
                                            <div className="secondary-button">
                                                <a href="/marketing/gba/" tabIndex="-1">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="arrows_recommend herold_arrows_wrapper">
                            <span className="recommend_prev_arrow slick-arrow slick-hidden" aria-disabled="true" tabIndex="-1">
                                <img width="24" height="24" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3C/svg%3E" />
                            </span>
                            <div className="arrows_recommend_between">
                                <ul className="slick-dots" role="tablist">
                                    <li className="slick-active" role="presentation">
                                        <button type="button" role="tab" id="slick-slide-control50" aria-controls="slick-slide50" aria-label="1 of 1" tabIndex="0" aria-selected="true">1</button>
                                    </li>
                                    <li role="presentation">
                                        {/* Additional slick dots go here */}
                                    </li>
                                </ul>
                            </div>
                            <span className="recommend_next_arrow slick-arrow slick-hidden" aria-disabled="true" tabIndex="-1">
                                <img width="20" height="20" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%3E%3C/svg%3E" />
                            </span>
                        </div>
                    </div>
            }
        </>
    )
}