import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"

export const ProductsGoogleSearchAdvertisingOpacityBlock = () => {
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
                                <h2>Your way to more new customers.</h2>
                                <h3 style={{ marginBottom: 0 }}>In five simple steps, 92% of Austrians will find<sup>you 4</sup>.</h3>
                                <p><span className="subtext-quell">4 Source: Statista 2023</span></p>
                            </div>
                            <div className="both">
                                <div className="left">
                                    <img
                                        decoding="async"
                                        src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Installateur_Schritte-1.jpg"
                                        alt=""
                                        title="Herold-Installateur_Schritte"
                                        width="517"
                                        height="776"
                                        data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Installateur_Schritte-1.jpg"
                                        data-ll-status="loaded"
                                        className="entered lazyloaded"
                                    />
                                    <noscript>
                                        <img
                                            decoding="async"
                                            src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Installateur_Schritte-1.jpg"
                                            alt=""
                                            title="Herold-Installateur_Schritte"
                                            width="517"
                                            height="776"
                                        />
                                    </noscript>
                                </div>
                                <div className="right">
                                    <div className="card-slider slick-initialized slick-slider slick-dotted">
                                        <div className="slick-list draggable">
                                            <div className="slick-track" style={index === 0 ? { opacity: 1, width: '3685px', transform: 'translate3d(-0px, 0px, 0px)' } : index === 1 ? { opacity: 1, width: '3685px', transform: 'translate3d(-335px, 0px, 0px)' } : index === 2 ? { opacity: 1, width: '3685px', transform: 'translate3d(-670px, 0px, 0px)' } : index === 3 ? { opacity: 1, width: '3685px', transform: 'translate3d(-1000px, 0px, 0px)' } : index === 4 ? { opacity: 1, width: '3685px', transform: 'translate3d(-1675px, 0px, 0px)' } : {}}>
                                                <div className="card slick-slide slick-current slick-active" style={{ backgroundColor: 'rgb(255, 240, 240)', width: '320px' }}>
                                                    <div className="number">
                                                        <p style={{ color: '#ff6d6a' }}>1</p>
                                                    </div>
                                                    <div className="text">
                                                        <h2>Your goals and wishes</h2>
                                                        <p>In an initial meeting, we will discuss your wishes, requirements and goals for your company.</p>
                                                    </div>
                                                </div>
                                                <div className="card slick-slide" style={{ backgroundColor: 'rgb(255, 240, 240)', width: '320px' }}>
                                                    <div className="number">
                                                        <p style={{ color: '#ff6d6a' }}>2</p>
                                                    </div>
                                                    <div className="text">
                                                        <h2>Individual campaign setup</h2>
                                                        <p>As an experienced Google Premium Partner in Austria, we have many years of experience and expertise in the SME sector. This is how we set up your individual campaign quickly and professionally.</p>
                                                    </div>
                                                </div>
                                                <div className="card slick-slide" style={{ backgroundColor: 'rgb(255, 240, 240)', width: '320px' }}>
                                                    <div className="number">
                                                        <p style={{ color: '#ff6d6a' }}>3</p>
                                                    </div>
                                                    <div className="text">
                                                        <h2>Implementation and campaign launch</h2>
                                                        <p>A team of experts certified by Google will start implementing your campaign.</p>
                                                    </div>
                                                </div>
                                                <div className="card slick-slide" style={{ backgroundColor: 'rgb(255, 240, 240)', width: '320px' }}>
                                                    <div className="number">
                                                        <p style={{ color: '#ff6d6a' }}>4</p>
                                                    </div>
                                                    <div className="text">
                                                        <h2>Ongoing optimisation</h2>
                                                        <p>We carry out a potential and optimisation analysis for you and are always at your side with ongoing text and budget optimisations as well as service calls.</p>
                                                    </div>
                                                </div>
                                                <div className="card slick-slide slick-cloned" style={{ backgroundColor: 'rgb(255, 240, 240)', width: '320px' }}>
                                                    <div className="number">
                                                        <p style={{ color: '#ff6d6a' }}>1</p>
                                                    </div>
                                                    <div className="text">
                                                        <h2>Your goals and wishes</h2>
                                                        <p>In an initial meeting, we will discuss your wishes, requirements and goals for your company.</p>
                                                    </div>
                                                </div>
                                                <div class="card slick-slide slick-cloned" style={{ backgroundColor: "rgb(255, 240, 240)", width: "320px" }} data-slick-index="9" id="" aria-hidden="true" tabindex="-1">
                                                    <div class="number">
                                                        <p style={{ color: "#ff6d6a" }} _msttexthash="4823" _msthash="52">5</p>
                                                    </div>
                                                    <div class="text">
                                                        <h2 _msttexthash="137748" _msthash="53">Reporting</h2>
                                                        <p _msttexthash="15341625" _msthash="54">Together with technical optimisation systems, our teams of experts ensure that you always know exactly how many calls, inquiries or purchases your campaign brings in.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="arrows_opacity herold_arrows_wrapper">
                                        <span className="opacity_prev_arrow slick-arrow">
                                            <img
                                                width="24"
                                                height="24"
                                                decoding="async"
                                                src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg"
                                                data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg"
                                                data-ll-status="loaded"
                                                className="entered lazyloaded"
                                                onClick={() => { setIndex(index - 1) }}
                                            />

                                        </span>


                                        <div className="arrows_opacity_between">
                                            <ul className="slick-dots" style={{}} role="tablist">
                                                <li className={index === 0 ? "slick-active" : ""} role="presentation">
                                                    <button onClick={() => { setIndex(0) }} type="button" role="tab" aria-controls="slick-slide30" aria-label="1 of 5" tabIndex="0">1</button>
                                                </li>
                                                <li className={index === 1 ? "slick-active" : ""} role="presentation">
                                                    <button onClick={() => { setIndex(1) }} type="button" role="tab" aria-controls="slick-slide31" aria-label="2 of 5" tabIndex="-1">2</button>
                                                </li>
                                                <li className={index === 2 ? "slick-active" : ""} role="presentation">
                                                    <button onClick={() => { setIndex(2) }} type="button" role="tab" aria-controls="slick-slide32" aria-label="3 of 5" tabIndex="-1">3</button>
                                                </li>
                                                <li className={index === 3 ? "slick-active" : ""} role="presentation">
                                                    <button onClick={() => { setIndex(3) }} type="button" role="tab" aria-controls="slick-slide33" aria-label="4 of 5" tabIndex="-1">4</button>
                                                </li>
                                                <li className={index === 4 ? "slick-active" : ""} role="presentation">
                                                    <button onClick={() => { setIndex(4) }} type="button" role="tab" aria-controls="slick-slide34" aria-label="5 of 5" tabIndex="-1">5</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <span className="opacity_next_arrow slick-arrow">
                                            <img
                                                onClick={() => { setIndex(index + 1) }}
                                                width="20"
                                                height="20"
                                                decoding="async"
                                                src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg"
                                                data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg"
                                                data-ll-status="loaded"
                                                className="entered lazyloaded"
                                            />
                                            <noscript>
                                                <img
                                                    width="20"
                                                    height="20"
                                                    decoding="async"
                                                    src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg"
                                                />
                                            </noscript>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="opacity">
                        <div className="opacity-inner container">
                            <div className="title-head">
                                <h2 style={{ marginBottom: 0 }}>Your way to more new customers.</h2>
                                <h3 style={{ marginBottom: 0 }}>In five simple steps, 92% of Austrians will find<sup>you 4</sup>.</h3>
                                <p><span className="subtext-quell">4 Source: Statista 2023</span></p>
                            </div>
                            <div className="both">
                                <div className="left">
                                    <img
                                        decoding="async"
                                        src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Installateur_Schritte-1.jpg"
                                        alt=""
                                        title="Herold-Installateur_Schritte"
                                        width="517"
                                        height="776"
                                        data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Installateur_Schritte-1.jpg"
                                        data-ll-status="loaded"
                                        className="entered lazyloaded"
                                    />
                                    <noscript>
                                        <img
                                            decoding="async"
                                            src="https://www.herold.at/marketing/wp-content/uploads/2022/04/Herold-Installateur_Schritte-1.jpg"
                                            alt=""
                                            title="Herold-Installateur_Schritte"
                                            width="517"
                                            height="776"
                                        />
                                    </noscript>
                                </div>
                                <div className="right">
                                    <div className="card-slider">
                                        <div className="card" style={{ backgroundColor: '#fff0f0' }} tabIndex="0" role="tabpanel" id="slick-slide30" aria-describedby="slick-slide-control30">
                                            <div className="number">
                                                <p style={{ color: '#ff6d6a' }}>1</p>
                                            </div>
                                            <div className="text">
                                                <h2>Your goals and wishes</h2>
                                                <p>In an initial meeting, we will discuss your wishes, requirements and goals for your company.</p>
                                            </div>
                                        </div>

                                        <div className="card" style={{ backgroundColor: '#fff0f0' }} tabIndex="0" role="tabpanel" id="slick-slide30" aria-describedby="slick-slide-control30">
                                            <div className="number">
                                                <p style={{ color: '#ff6d6a' }}>2</p>
                                            </div>
                                            <div className="text">
                                                <h2>Individual campaign setup</h2>
                                                <p>As an experienced Google Premium Partner in Austria, we have many years of experience and expertise in the SME sector. This is how we set up your individual campaign quickly and professionally.</p>
                                            </div>
                                        </div>

                                        <div className="card" style={{ backgroundColor: '#fff0f0' }} tabIndex="0" role="tabpanel" id="slick-slide30" aria-describedby="slick-slide-control30">
                                            <div className="number">
                                                <p style={{ color: '#ff6d6a' }}>3</p>
                                            </div>
                                            <div className="text">
                                                <h2>Implementation and campaign launch</h2>
                                                <p>A team of experts certified by Google will start implementing your campaign.</p>
                                            </div>
                                        </div>

                                        <div className="card" style={{ backgroundColor: '#fff0f0' }} tabIndex="0" role="tabpanel" id="slick-slide30" aria-describedby="slick-slide-control30">
                                            <div className="number">
                                                <p style={{ color: '#ff6d6a' }}>4</p>
                                            </div>
                                            <div className="text">
                                                <h2>Ongoing optimisation</h2>
                                                <p>We carry out a potential and optimisation analysis for you and are always at your side with ongoing text and budget optimisations as well as service calls.</p>
                                            </div>
                                        </div>

                                        <div className="card" style={{ backgroundColor: '#fff0f0' }} tabIndex="0" role="tabpanel" id="slick-slide30" aria-describedby="slick-slide-control30">
                                            <div className="number">
                                                <p style={{ color: '#ff6d6a' }}>5</p>
                                            </div>
                                            <div className="text">
                                                <h2>Reporting</h2>
                                                <p>Together with technical optimisation systems, our teams of experts ensure that you always know exactly how many calls, inquiries or purchases your campaign brings in.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="arrows_opacity herold_arrows_wrapper">
                                        <span className="opacity_prev_arrow">
                                            <img
                                                width="24"
                                                height="24"
                                                decoding="async"
                                                src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg"
                                                data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg"
                                                data-ll-status="loaded"
                                                className="entered lazyloaded"
                                            />
                                            <noscript>
                                                <img
                                                    width="24"
                                                    height="24"
                                                    decoding="async"
                                                    src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg"
                                                />
                                            </noscript>
                                        </span>
                                        <span className="opacity_next_arrow">
                                            <img
                                                width="20"
                                                height="20"
                                                decoding="async"
                                                src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg"
                                                data-lazy-src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg"
                                                data-ll-status="loaded"
                                                className="entered lazyloaded"
                                            />
                                            <noscript>
                                                <img
                                                    width="20"
                                                    height="20"
                                                    decoding="async"
                                                    src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg"
                                                />
                                            </noscript>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}