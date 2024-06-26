import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsSocialMediaAdvertisementOpacityBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index === -1) {
            setIndex(4);
        }
        if (index === 5) {
            setIndex(0);
        }
    }, [index])
    return (
        <>
            {
                isMobile ?
                    <div className="opacity">
                        <div className="opacity-inner container">
                            <div className="title-head">
                                <h2>Your Path to Social Media Advertising</h2>
                                <h3>5 easy steps to reach the right people at the right time</h3>
                            </div>
                            <div className="both">
                                <div className="left">
                                    <img
                                        src="https://www.herold.at/marketing/wp-content/uploads/2023/09/AdobeStock_454362611.jpg"
                                        alt="AdobeStock_454362611"
                                        title="AdobeStock_454362611"
                                        width="665"
                                        height="1001"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                    />
                                </div>
                                <div className="right">
                                    <div className="card-slider slick-initialized slick-slider slick-dotted">
                                        <div className="slick-list draggable">
                                            <div className="slick-track" style={index === 0 ? { opacity: '1', width: '3685px', transform: 'translate3d(-0px, 0px, 0px)' } : index === 1 ? { opacity: '1', width: '3685px', transform: 'translate3d(-335px, 0px, 0px)' } : index === 2 ? { opacity: '1', width: '3685px', transform: 'translate3d(-670px, 0px, 0px)' } : index === 3 ? { opacity: '1', width: '3685px', transform: 'translate3d(-1000px, 0px, 0px)' } : index === 4 ? { opacity: '1', width: '3685px', transform: 'translate3d(-1335px, 0px, 0px)' } : {}}>
                                                {/* Card 1 */}
                                                <div className="card slick-slide slick-cloned" style={{ backgroundColor: 'rgb(235, 240, 247)', width: '320px' }} tabIndex="-1" role="tabpanel" aria-hidden="true">
                                                    <div className="number">
                                                        <p style={{ color: '#3f6cb3' }}>1</p>
                                                    </div>
                                                    <div className="text">
                                                        <h2 style={{ margin: '0' }}>Budget Determination</h2>
                                                        <p>In the first step, our media consultants will work with you to clarify the budget you want to spend on your social media advertising.</p>
                                                    </div>
                                                </div>
                                                {/* Card 2 */}
                                                <div className="card slick-slide" style={{ backgroundColor: 'rgb(235, 240, 247)', width: '320px' }} tabIndex="-1" role="tabpanel" aria-hidden="true">
                                                    <div className="number">
                                                        <p style={{ color: '#3f6cb3' }}>2</p>
                                                    </div>
                                                    <div className="text">
                                                        <h2 style={{ margin: '0' }}>Briefing Talk</h2>
                                                        <p>Our experts will discuss goals, content, texts and images with you.</p>
                                                    </div>
                                                </div>
                                                {/* Card 3 */}
                                                <div className="card slick-slide" style={{ backgroundColor: 'rgb(235, 240, 247)', width: '320px' }} tabIndex="-1" role="tabpanel" aria-hidden="true">
                                                    <div className="number">
                                                        <p style={{ color: '#3f6cb3' }}>3</p>
                                                    </div>
                                                    <div className="text">
                                                        <h2 style={{}}>Linking the company page</h2>
                                                        <p>To run ads, you'll need your own Facebook Business Page. Don't have one yet? No problem! We'll create one for you and then hand it over to you. This means that you are the sole owner of your Facebook company profile.</p>
                                                    </div>
                                                </div>
                                                {/* Card 4 */}
                                                <div className="card slick-slide" style={{ backgroundColor: 'rgb(235, 240, 247)', width: '320px' }} tabIndex="-1" role="tabpanel" aria-hidden="true">
                                                    <div className="number">
                                                        <p style={{ color: '#3f6cb3' }}>4</p>
                                                    </div>
                                                    <div className="text">
                                                        <h2 style={{}}>Reporting</h2>
                                                        <p>We'll send you monthly reports with the most important metrics for your social media advertising.</p>
                                                    </div>
                                                </div>
                                                {/* Card 5 */}
                                                <div className="card slick-slide" style={{ backgroundColor: 'rgb(235, 240, 247)', width: '320px' }} tabIndex="-1" role="tabpanel" aria-hidden="true">
                                                    <div className="number">
                                                        <p style={{ color: '#3f6cb3' }}>5</p>
                                                    </div>
                                                    <div className="text">
                                                        <h2 style={{}}>Updates</h2>
                                                        <p>Gradimo Skupaj's experts will always keep your ads and, above all, you up to date.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="arrows_opacity herold_arrows_wrapper" >
                                            <div className="opacity_prev_arrow slick-arrow">
                                                <img onClick={() => { setIndex(index - 1) }} width="24" height="24" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" alt="Previous" />
                                            </div>

                                            <div className="arrows_opacity_between">
                                                <ul className="slick-dots" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                    <li className={index === 0 ? "slick-active" : ""}>
                                                        <button onClick={() => { setIndex(0) }} type="button" aria-label="1 of 5" tabIndex="0">1</button>
                                                    </li>
                                                    <li className={index === 1 ? "slick-active" : ""}>
                                                        <button onClick={() => { setIndex(1) }} type="button" aria-label="2 of 5" tabIndex="-1">2</button>
                                                    </li>
                                                    <li className={index === 2 ? "slick-active" : ""}>
                                                        <button onClick={() => { setIndex(2) }} type="button" aria-label="3 of 5" tabIndex="-1">3</button>
                                                    </li>
                                                    <li className={index === 3 ? "slick-active" : ""}>
                                                        <button onClick={() => { setIndex(3) }} type="button" aria-label="4 of 5" tabIndex="-1">4</button>
                                                    </li>
                                                    <li className={index === 4 ? "slick-active" : ""}>
                                                        <button onClick={() => { setIndex(4) }} type="button" aria-label="5 of 5" tabIndex="-1">5</button>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="opacity_next_arrow slick-arrow">
                                                <img onClick={() => { setIndex(index + 1) }} width="20" height="20" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" alt="Next" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <div className="opacity">
                            <div className="opacity-inner container">
                                <div className="title-head">
                                    <h2>Your Path to Social Media Advertising</h2>
                                    <h3>5 easy steps to reach the right people at the right time</h3>
                                </div>
                                <div className="both">
                                    <div className="left">
                                        <img
                                            src="https://www.herold.at/marketing/wp-content/uploads/2023/09/AdobeStock_454362611.jpg"
                                            alt="AdobeStock_454362611"
                                            title="AdobeStock_454362611"
                                            width="665"
                                            height="1001"
                                        />
                                    </div>
                                    <div className="right">
                                        <div className="card-slider">
                                            <div className="card" >
                                                <div className="number">
                                                    <p style={{ color: '#3f6cb3' }}>1</p>
                                                </div>
                                                <div className="text">
                                                    <h2>Budget Determination</h2>
                                                    <p>In the first step, our media consultants will work with you to clarify the budget you want to spend on your social media advertising.</p>
                                                </div>
                                            </div>
                                            <div className="card" >
                                                <div className="number">
                                                    <p style={{ color: '#3f6cb3' }}>2</p>
                                                </div>
                                                <div className="text">
                                                    <h2>Briefing Talk</h2>
                                                    <p>Our experts will discuss goals, content, texts and images with you.</p>
                                                </div>
                                            </div>
                                            <div className="card" >
                                                <div className="number">
                                                    <p style={{ color: '#3f6cb3' }}>3</p>
                                                </div>
                                                <div className="text">
                                                    <h2>Linking the company page</h2>
                                                    <p>To run ads, you'll need your own Facebook Business Page. Don't have one yet? No problem! We'll create one for you and then hand it over to you. This means that you are the sole owner of your Facebook company profile.</p>
                                                </div>
                                            </div>
                                            <div className="card" >
                                                <div className="number">
                                                    <p style={{ color: '#3f6cb3' }}>4</p>
                                                </div>
                                                <div className="text">
                                                    <h2>Reporting</h2>
                                                    <p>We'll send you monthly reports with the most important metrics for your social media advertising.</p>
                                                </div>
                                            </div>
                                            <div className="card" >
                                                <div className="number">
                                                    <p style={{ color: '#3f6cb3' }}>5</p>
                                                </div>
                                                <div className="text">
                                                    <h2>Updates</h2>
                                                    <p>Gradimo Skupaj's experts will always keep your ads and, above all, you up to date.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="arrows_opacity herold_arrows_wrapper">
                                            <div className="opacity_prev_arrow">
                                                <img width="24" height="24" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" alt="Previous" />
                                            </div>
                                            <div className="opacity_next_arrow">
                                                <img width="20" height="20" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" alt="Next" />
                                            </div>
                                            <div className="arrows_opacity_between">
                                                <ul className="slick-dots" style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                                                    <li className="slick-active">
                                                        <button type="button" aria-label="1 of 5" tabIndex="0">1</button>
                                                    </li>
                                                    <li>
                                                        <button type="button" aria-label="2 of 5" tabIndex="-1">2</button>
                                                    </li>
                                                    <li>
                                                        <button type="button" aria-label="3 of 5" tabIndex="-1">3</button>
                                                    </li>
                                                    <li>
                                                        <button type="button" aria-label="4 of 5" tabIndex="-1">4</button>
                                                    </li>
                                                    <li>
                                                        <button type="button" aria-label="5 of 5" tabIndex="-1">5</button>
                                                    </li>
                                                </ul>
                                            </div>
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