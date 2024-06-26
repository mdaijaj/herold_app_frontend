import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext";
export const ProductsSocialMediaAdvertisementRecommendedBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index === -1) {
            setIndex(2);
        }
        if (index === 3) {
            setIndex(0);
        }
        const intervalID = setInterval(() => {
            if (index === 2) {
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
                                    <div className="slick-track" style={index === 0 ? { opacity: 1, width: '2345px', transform: 'translate3d(-0px, 0px, 0px)' } : index === 1 ? { opacity: 1, width: '2345px', transform: 'translate3d(-335px, 0px, 0px)' } : { opacity: 1, width: '2345px', transform: 'translate3d(-670px, 0px, 0px)' }}>
                                        <div className="card-item slick-slide slick-current slick-active" style={{ width: '320px' }} tabIndex="-1" role="tabpanel">
                                            <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Mode_.jpg" style={{ backgroundImage: 'url("https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Mode_.jpg")' }} className="card-head rocket-lazyload entered lazyloaded"></div>
                                            <div style={{ backgroundColor: 'rgb(229, 89, 52)', height: '402px' }} className="card-body">
                                                <h2>Google Banner Advertising</h2>
                                                <p>Your individual banner on up to three million websites in Austria. Reach customers through Google's gigantic ad network.</p>
                                                <div className="secondary-button">
                                                    <a href="/marketing/gba/" tabIndex="-1">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-item slick-slide slick-current slick-active" style={{ width: '320px' }} tabIndex="-1" role="tabpanel">
                                            <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Yoga.jpg" style={{ backgroundImage: 'url("https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Yoga.jpg")' }} className="card-head rocket-lazyload entered lazyloaded"></div>
                                            <div style={{ backgroundColor: 'rgb(145, 132, 190)', height: '402px' }} className="card-body">
                                                <h2>Search Engine Optimization</h2>
                                                <p>Thanks to professional search engine optimization (SEO), you and your company appear in front of the competition - perfect for winning new customers efficiently and sustainably.</p>
                                                <div className="secondary-button">
                                                    <a href="/marketing/seo/" tabIndex="-1">Learn more</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-item slick-slide slick-current slick-active" style={{ width: '320px' }} tabIndex="-1" role="tabpanel">
                                            <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Steuerberater.jpg" style={{ backgroundImage: 'url("https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Steuerberater.jpg")' }} className="card-head rocket-lazyload entered lazyloaded"></div>
                                            <div style={{ backgroundColor: 'rgb(51, 136, 102)', height: '402px' }} className="card-body">
                                                <h2>Online Complete</h2>
                                                <p>Online Complete ensures that no one in Austria can get past your company. No matter where your customers are looking.</p>
                                                <div className="secondary-button">
                                                    <a href="/marketing/onlinecomplete/" tabIndex="-1">Learn more</a>
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
                                        <li className={index === 0 ? "slick-active" : ""} role="presentation">
                                            <button onClick={() => { setIndex(0) }} type="button" role="tab" id="slick-slide-control50" aria-controls="slick-slide50" aria-label="1 of 3" tabIndex="-1">1</button>
                                        </li>
                                        <li role="presentation" className={index === 1 ? "slick-active" : ""}>
                                            <button onClick={() => { setIndex(1) }} type="button" role="tab" id="slick-slide-control51" aria-controls="slick-slide51" aria-label="2 of 3" tabIndex="0" aria-selected="true">2</button>
                                        </li>
                                        <li role="presentation" className={index === 2 ? "slick-active" : ""}>
                                            <button onClick={() => { setIndex(2) }} type="button" role="tab" id="slick-slide-control52" aria-controls="slick-slide52" aria-label="3 of 3" tabIndex="-1">3</button>
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
                            <h2>For even more visibility, we recommend that you</h2>
                        </div>

                        <div className="container card-slider slick-initialized slick-slider slick-dotted">
                            <div className="slick-list draggable">
                                <div className="slick-track">
                                    <div className="card-item slick-slide slick-current slick-active" tabIndex="0" role="tabpanel" id="slick-slide50" aria-describedby="slick-slide-control50">
                                        <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Yoga.jpg" style={{ backgroundImage: 'url("https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Yoga.jpg")' }} className="card-head rocket-lazyload entered lazyloaded" data-ll-status="loaded"></div>
                                        <div style={{ backgroundColor: 'rgb(145, 132, 190)' }} className="card-body" id="card-body">
                                            <h2>Search Engine Optimization</h2>
                                            <p>Thanks to professional search engine optimization (SEO), you and your company appear in front of the competition - perfect for winning new customers efficiently and sustainably.</p>
                                            <div className="secondary-button" id="secondary-button">
                                                <a href="/marketing/seo/" tabIndex="0">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-item slick-slide slick-active" tabIndex="0" role="tabpanel" id="slick-slide51" aria-describedby="slick-slide-control51">
                                        <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Steuerberater.jpg" style={{ backgroundImage: 'url("https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Steuerberater.jpg")' }} className="card-head rocket-lazyload entered lazyloaded" data-ll-status="loaded"></div>
                                        <div style={{ backgroundColor: 'rgb(51, 136, 102)' }} className="card-body" id="card-body">
                                            <h2>Online Complete</h2>
                                            <p>Online Complete ensures that no one in Austria can get past your company. No matter where your customers are looking.</p>
                                            <div className="secondary-button" id="secondary-button">
                                                <a href="/marketing/onlinecomplete/" tabIndex="0">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-item slick-slide slick-active" tabIndex="0" role="tabpanel" id="slick-slide52" aria-describedby="slick-slide-control52">
                                        <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Mode_.jpg" style={{ backgroundImage: 'url("https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Mode_.jpg")' }} className="card-head rocket-lazyload entered lazyloaded" data-ll-status="loaded"></div>
                                        <div style={{ backgroundColor: 'rgb(229, 89, 52)' }} className="card-body" id="card-body">
                                            <h2>Google Banner Advertising</h2>
                                            <p>Your individual banner on up to three million websites in Austria. Reach customers through Google's gigantic ad network.</p>
                                            <div className="secondary-button" id="secondary-button">
                                                <a href="/marketing/gba/" tabIndex="0">Learn more</a>
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