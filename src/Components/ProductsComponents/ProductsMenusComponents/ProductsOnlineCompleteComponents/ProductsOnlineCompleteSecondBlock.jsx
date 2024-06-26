import { useContext, useEffect, useState } from "react";
import AppContext from "../../../../AppContext";

export const ProductsOnlineCompleteSecondBlock = () => {
    const { isMobile } = useContext(AppContext);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index === -1) {
            setIndex(1);
        }
        if (index === 2) {
            setIndex(0);
        }
    }, [index])
    return (
        <>
            {
                isMobile ?
                    <>
                        <div className="block">
                            <div className="block-inner container">
                                <div className="title-head" >
                                    <h2 style={{ textAlign: 'center' }}>For more visibility that pays off.</h2>
                                    <h3>Choose one of two Online Complete packages.</h3>
                                </div>
                                <div className="cardos-slider slick-initialized slick-slider slick-dotted">
                                    <div className="slick-list draggable">
                                        <div className="slick-track" style={index === 0 ? { opacity: 1, width: "1005px", transform: "translate3d(-0px, 0px, 0px)" } : index === 1 ? { opacity: 1, width: "1005px", transform: "translate3d(-335px, 0px, 0px)" } : {}}>
                                            <div className="light_color bestseller-card card slick-slide slick-current slick-active" style={{ backgroundColor: '#eaf3ef', width: '320px' }}>
                                                <div className="text">
                                                    <p _msttexthash="47151" _msthash="131">Plus</p>
                                                    <p class="price" _msttexthash="793559" _msthash="132">€49,20</p>
                                                    <p class="month" _msttexthash="72384" _msthash="133">/Month</p>
                                                </div>
                                                <div className="primary-button yellow  basic ">
                                                    <a href="tel:00432236907235" tabIndex="0">+43 (0)5 0485-607</a>
                                                </div>
                                                <div className="all-check-marks">
                                                    <div className="check-mark-slide-container 10 " _msthidden={10}>
                                                        <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                            <div className="check-mark" data-tooltip={0} _msthidden={1}>
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                    </svg>
                                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                    <svg
                                                                        version="1.1"
                                                                        id="Layer_1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                        x="0px"
                                                                        y="0px"
                                                                        viewBox="0 0 512 512"
                                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                                        xmlSpace="preserve"
                                                                        className="question-mark"
                                                                    >
                                                                        <g>
                                                                            <g>
                                                                                <path
                                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                                />
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <p _msttexthash={315523} _msthidden={1} _msthash={135}>
                                                                    Google My Business
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="check-mark check-mark-tooltip"
                                                                data-tooltiptext={0}
                                                                _msthidden={1}
                                                            >
                                                                <p _msttexthash={3090919} _msthidden={1} _msthash={136}>
                                                                    Wir erstellen den Google My Business (GMB) Eintrag für dein
                                                                    Unternehmen.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                            <div className="check-mark" data-tooltip={1} _msthidden={1}>
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                    </svg>
                                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                    <svg
                                                                        version="1.1"
                                                                        id="Layer_1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                        x="0px"
                                                                        y="0px"
                                                                        viewBox="0 0 512 512"
                                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                                        xmlSpace="preserve"
                                                                        className="question-mark"
                                                                    >
                                                                        <g>
                                                                            <g>
                                                                                <path
                                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                                />
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <p _msttexthash={657891} _msthidden={1} _msthash={137}>
                                                                    Umfassende Datenverwaltung
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="check-mark check-mark-tooltip"
                                                                data-tooltiptext={1}
                                                                _msthidden={1}
                                                            >
                                                                <p _msttexthash={5014659} _msthidden={1} _msthash={138}>
                                                                    Wir verwalten die wichtigsten Infos zu deinem Unternehmen auf mehr als
                                                                    25 Online-Plattformen.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                            <div className="check-mark" data-tooltip={2} _msthidden={1}>
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                    </svg>
                                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                    <svg
                                                                        version="1.1"
                                                                        id="Layer_1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                        x="0px"
                                                                        y="0px"
                                                                        viewBox="0 0 512 512"
                                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                                        xmlSpace="preserve"
                                                                        className="question-mark"
                                                                    >
                                                                        <g>
                                                                            <g>
                                                                                <path
                                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                                />
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <p _msttexthash={305578} _msthidden={1} _msthash={139}>
                                                                    Geschützte Daten
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="check-mark check-mark-tooltip"
                                                                data-tooltiptext={2}
                                                                _msthidden={1}
                                                            >
                                                                <p _msttexthash={2463682} _msthidden={1} _msthash={140}>
                                                                    Wir schützen deine Firmendaten vor Manipulation durch Dritte.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                            <div className="check-mark" data-tooltip={3} _msthidden={1}>
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                    </svg>
                                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                    <svg
                                                                        version="1.1"
                                                                        id="Layer_1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                        x="0px"
                                                                        y="0px"
                                                                        viewBox="0 0 512 512"
                                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                                        xmlSpace="preserve"
                                                                        className="question-mark"
                                                                    >
                                                                        <g>
                                                                            <g>
                                                                                <path
                                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                                />
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <p _msttexthash={581555} _msthidden={1} _msthash={141}>
                                                                    Übersicht der Bewertungen
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="check-mark check-mark-tooltip"
                                                                data-tooltiptext={3}
                                                                _msthidden={1}
                                                            >
                                                                <p _msttexthash={4333719} _msthidden={1} _msthash={142}>
                                                                    Mit Online Complete hast du alle Bewertungen zu deinem Unternehmen
                                                                    gesammelt im Blick.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                            <div className="check-mark" data-tooltip={4} _msthidden={1}>
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                    </svg>
                                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                    <svg
                                                                        version="1.1"
                                                                        id="Layer_1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                        x="0px"
                                                                        y="0px"
                                                                        viewBox="0 0 512 512"
                                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                                        xmlSpace="preserve"
                                                                        className="question-mark"
                                                                    >
                                                                        <g>
                                                                            <g>
                                                                                <path
                                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                                />
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <p _msttexthash={631228} _msthidden={1} _msthash={143}>
                                                                    Firmeneintrag auf herold.at
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="check-mark check-mark-tooltip"
                                                                data-tooltiptext={4}
                                                                _msthidden={1}
                                                            >
                                                                <p _msttexthash={6397430} _msthidden={1} _msthash={144}>
                                                                    Wir befüllen deinen herold.at Firmeneintrag mit den wichtigsten Infos
                                                                    (z.B.: Fotos, Öffnungszeiten etc.).
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="check-mark-wrapper 10 4  ">
                                                        <div className="check-mark" data-tooltip={5}>
                                                            <div className="check-mark-icon ">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                </svg>
                                                            </div>
                                                            <p _msttexthash={400647} _msthash={145}>
                                                                Contract term: 3 years
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="check-mark-wrapper 10 4  clickable">
                                                        <div className="check-mark" data-tooltip={6}>
                                                            <div className="check-mark-icon tooltip-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                </svg>
                                                                {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                <svg
                                                                    version="1.1"
                                                                    id="Layer_1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    x="0px"
                                                                    y="0px"
                                                                    viewBox="0 0 512 512"
                                                                    style={{ enableBackground: "new 0 0 512 512" }}
                                                                    xmlSpace="preserve"
                                                                    className="question-mark"
                                                                >
                                                                    <g>
                                                                        <g>
                                                                            <path
                                                                                d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <p _msttexthash={319254} _msthash={146}>
                                                                Ongoing Reporting
                                                            </p>
                                                        </div>
                                                        <div className="check-mark check-mark-tooltip" data-tooltiptext={6}>
                                                            <p _msttexthash={3764267} _msthash={147}>
                                                                Every month, you will receive statistics on your company's online
                                                                performance.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="check-mark-wrapper 10 4  clickable">
                                                        <div className="check-mark" data-tooltip={7}>
                                                            <div className="check-mark-icon tooltip-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                </svg>
                                                                {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                <svg
                                                                    version="1.1"
                                                                    id="Layer_1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    x="0px"
                                                                    y="0px"
                                                                    viewBox="0 0 512 512"
                                                                    style={{ enableBackground: "new 0 0 512 512" }}
                                                                    xmlSpace="preserve"
                                                                    className="question-mark"
                                                                >
                                                                    <g>
                                                                        <g>
                                                                            <path
                                                                                d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <p _msttexthash={403975} _msthash={148}>
                                                                Data Filling by Herold
                                                            </p>
                                                        </div>
                                                        <div className="check-mark check-mark-tooltip" data-tooltiptext={7}>
                                                            <p _msttexthash={2806960} _msthash={149}>
                                                                We enter the data about your company on more than 25 platforms for you.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="check-mark-wrapper 10 4  clickable">
                                                        <div className="check-mark" data-tooltip={8}>
                                                            <div className="check-mark-icon tooltip-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                </svg>
                                                                {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                <svg
                                                                    version="1.1"
                                                                    id="Layer_1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    x="0px"
                                                                    y="0px"
                                                                    viewBox="0 0 512 512"
                                                                    style={{ enableBackground: "new 0 0 512 512" }}
                                                                    xmlSpace="preserve"
                                                                    className="question-mark"
                                                                >
                                                                    <g>
                                                                        <g>
                                                                            <path
                                                                                d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <p _msttexthash={301600} _msthash={150}>
                                                                Personal support
                                                            </p>
                                                        </div>
                                                        <div className="check-mark check-mark-tooltip" data-tooltiptext={8}>
                                                            <p _msttexthash={2863965} _msthash={151}>
                                                                We take care of updating your data on more than 25 platforms at any
                                                                time.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="check-mark-wrapper 10 4  clickable">
                                                        <div className="check-mark" data-tooltip={9}>
                                                            <div className="check-mark-icon tooltip-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                </svg>
                                                                {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                <svg
                                                                    version="1.1"
                                                                    id="Layer_1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    x="0px"
                                                                    y="0px"
                                                                    viewBox="0 0 512 512"
                                                                    style={{ enableBackground: "new 0 0 512 512" }}
                                                                    xmlSpace="preserve"
                                                                    className="question-mark"
                                                                >
                                                                    <g>
                                                                        <g>
                                                                            <path
                                                                                d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <p _msttexthash={418899} _msthash={152}>
                                                                Regular service calls
                                                            </p>
                                                        </div>
                                                        <div className="check-mark check-mark-tooltip" data-tooltiptext={9}>
                                                            <p _msttexthash={3037606} _msthash={153}>
                                                                We call you regularly to ensure that your data is quality and
                                                                up-to-date.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="light_color bestseller-card card slick-slide slick-current slick-active" style={{ backgroundColor: '#eaf3ef', width: '320px' }}>
                                                <div className="text">
                                                    <p _msttexthash="47151" _msthash="131">Plus</p>
                                                    <p class="price" _msttexthash="793559" _msthash="132">€65,85</p>
                                                    <p class="month" _msttexthash="72384" _msthash="133">/Month</p>
                                                </div>
                                                <div className="primary-button yellow  basic ">
                                                    <a href="tel:00432236907235" tabIndex="0">+43 (0)5 0485-607</a>
                                                </div>
                                                <div className="all-check-marks">
                                                    <div className="check-mark-slide-container 10 " _msthidden={10}>
                                                        <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                            <div className="check-mark" data-tooltip={0} _msthidden={1}>
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                    </svg>
                                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                    <svg
                                                                        version="1.1"
                                                                        id="Layer_1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                        x="0px"
                                                                        y="0px"
                                                                        viewBox="0 0 512 512"
                                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                                        xmlSpace="preserve"
                                                                        className="question-mark"
                                                                    >
                                                                        <g>
                                                                            <g>
                                                                                <path
                                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                                />
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <p _msttexthash={315523} _msthidden={1} _msthash={135}>
                                                                    Google My Business
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="check-mark check-mark-tooltip"
                                                                data-tooltiptext={0}
                                                                _msthidden={1}
                                                            >
                                                                <p _msttexthash={3090919} _msthidden={1} _msthash={136}>
                                                                    Wir erstellen den Google My Business (GMB) Eintrag für dein
                                                                    Unternehmen.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                            <div className="check-mark" data-tooltip={1} _msthidden={1}>
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                    </svg>
                                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                    <svg
                                                                        version="1.1"
                                                                        id="Layer_1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                        x="0px"
                                                                        y="0px"
                                                                        viewBox="0 0 512 512"
                                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                                        xmlSpace="preserve"
                                                                        className="question-mark"
                                                                    >
                                                                        <g>
                                                                            <g>
                                                                                <path
                                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                                />
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <p _msttexthash={657891} _msthidden={1} _msthash={137}>
                                                                    Umfassende Datenverwaltung
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="check-mark check-mark-tooltip"
                                                                data-tooltiptext={1}
                                                                _msthidden={1}
                                                            >
                                                                <p _msttexthash={5014659} _msthidden={1} _msthash={138}>
                                                                    Wir verwalten die wichtigsten Infos zu deinem Unternehmen auf mehr als
                                                                    25 Online-Plattformen.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                            <div className="check-mark" data-tooltip={2} _msthidden={1}>
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                    </svg>
                                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                    <svg
                                                                        version="1.1"
                                                                        id="Layer_1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                        x="0px"
                                                                        y="0px"
                                                                        viewBox="0 0 512 512"
                                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                                        xmlSpace="preserve"
                                                                        className="question-mark"
                                                                    >
                                                                        <g>
                                                                            <g>
                                                                                <path
                                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                                />
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <p _msttexthash={305578} _msthidden={1} _msthash={139}>
                                                                    Geschützte Daten
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="check-mark check-mark-tooltip"
                                                                data-tooltiptext={2}
                                                                _msthidden={1}
                                                            >
                                                                <p _msttexthash={2463682} _msthidden={1} _msthash={140}>
                                                                    Wir schützen deine Firmendaten vor Manipulation durch Dritte.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                            <div className="check-mark" data-tooltip={3} _msthidden={1}>
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                    </svg>
                                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                    <svg
                                                                        version="1.1"
                                                                        id="Layer_1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                        x="0px"
                                                                        y="0px"
                                                                        viewBox="0 0 512 512"
                                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                                        xmlSpace="preserve"
                                                                        className="question-mark"
                                                                    >
                                                                        <g>
                                                                            <g>
                                                                                <path
                                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                                />
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <p _msttexthash={581555} _msthidden={1} _msthash={141}>
                                                                    Übersicht der Bewertungen
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="check-mark check-mark-tooltip"
                                                                data-tooltiptext={3}
                                                                _msthidden={1}
                                                            >
                                                                <p _msttexthash={4333719} _msthidden={1} _msthash={142}>
                                                                    Mit Online Complete hast du alle Bewertungen zu deinem Unternehmen
                                                                    gesammelt im Blick.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                            <div className="check-mark" data-tooltip={4} _msthidden={1}>
                                                                <div className="check-mark-icon tooltip-icon">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                    >
                                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                    </svg>
                                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                    <svg
                                                                        version="1.1"
                                                                        id="Layer_1"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                        x="0px"
                                                                        y="0px"
                                                                        viewBox="0 0 512 512"
                                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                                        xmlSpace="preserve"
                                                                        className="question-mark"
                                                                    >
                                                                        <g>
                                                                            <g>
                                                                                <path
                                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                                />
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <p _msttexthash={631228} _msthidden={1} _msthash={143}>
                                                                    Firmeneintrag auf herold.at
                                                                </p>
                                                            </div>
                                                            <div
                                                                className="check-mark check-mark-tooltip"
                                                                data-tooltiptext={4}
                                                                _msthidden={1}
                                                            >
                                                                <p _msttexthash={6397430} _msthidden={1} _msthash={144}>
                                                                    Wir befüllen deinen herold.at Firmeneintrag mit den wichtigsten Infos
                                                                    (z.B.: Fotos, Öffnungszeiten etc.).
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="check-mark-wrapper 10 4  ">
                                                        <div className="check-mark" data-tooltip={5}>
                                                            <div className="check-mark-icon ">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                </svg>
                                                            </div>
                                                            <p _msttexthash={400647} _msthash={145}>
                                                                Contract term: 3 years
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="check-mark-wrapper 10 4  clickable">
                                                        <div className="check-mark" data-tooltip={6}>
                                                            <div className="check-mark-icon tooltip-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                </svg>
                                                                {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                <svg
                                                                    version="1.1"
                                                                    id="Layer_1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    x="0px"
                                                                    y="0px"
                                                                    viewBox="0 0 512 512"
                                                                    style={{ enableBackground: "new 0 0 512 512" }}
                                                                    xmlSpace="preserve"
                                                                    className="question-mark"
                                                                >
                                                                    <g>
                                                                        <g>
                                                                            <path
                                                                                d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <p _msttexthash={319254} _msthash={146}>
                                                                Ongoing Reporting
                                                            </p>
                                                        </div>
                                                        <div className="check-mark check-mark-tooltip" data-tooltiptext={6}>
                                                            <p _msttexthash={3764267} _msthash={147}>
                                                                Every month, you will receive statistics on your company's online
                                                                performance.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="check-mark-wrapper 10 4  clickable">
                                                        <div className="check-mark" data-tooltip={7}>
                                                            <div className="check-mark-icon tooltip-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                </svg>
                                                                {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                <svg
                                                                    version="1.1"
                                                                    id="Layer_1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    x="0px"
                                                                    y="0px"
                                                                    viewBox="0 0 512 512"
                                                                    style={{ enableBackground: "new 0 0 512 512" }}
                                                                    xmlSpace="preserve"
                                                                    className="question-mark"
                                                                >
                                                                    <g>
                                                                        <g>
                                                                            <path
                                                                                d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <p _msttexthash={403975} _msthash={148}>
                                                                Data Filling by Herold
                                                            </p>
                                                        </div>
                                                        <div className="check-mark check-mark-tooltip" data-tooltiptext={7}>
                                                            <p _msttexthash={2806960} _msthash={149}>
                                                                We enter the data about your company on more than 25 platforms for you.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="check-mark-wrapper 10 4  clickable">
                                                        <div className="check-mark" data-tooltip={8}>
                                                            <div className="check-mark-icon tooltip-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                </svg>
                                                                {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                <svg
                                                                    version="1.1"
                                                                    id="Layer_1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    x="0px"
                                                                    y="0px"
                                                                    viewBox="0 0 512 512"
                                                                    style={{ enableBackground: "new 0 0 512 512" }}
                                                                    xmlSpace="preserve"
                                                                    className="question-mark"
                                                                >
                                                                    <g>
                                                                        <g>
                                                                            <path
                                                                                d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <p _msttexthash={301600} _msthash={150}>
                                                                Personal support
                                                            </p>
                                                        </div>
                                                        <div className="check-mark check-mark-tooltip" data-tooltiptext={8}>
                                                            <p _msttexthash={2863965} _msthash={151}>
                                                                We take care of updating your data on more than 25 platforms at any
                                                                time.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="check-mark-wrapper 10 4  clickable">
                                                        <div className="check-mark" data-tooltip={9}>
                                                            <div className="check-mark-icon tooltip-icon">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                                </svg>
                                                                {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                <svg
                                                                    version="1.1"
                                                                    id="Layer_1"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    x="0px"
                                                                    y="0px"
                                                                    viewBox="0 0 512 512"
                                                                    style={{ enableBackground: "new 0 0 512 512" }}
                                                                    xmlSpace="preserve"
                                                                    className="question-mark"
                                                                >
                                                                    <g>
                                                                        <g>
                                                                            <path
                                                                                d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                            />
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <p _msttexthash={418899} _msthash={152}>
                                                                Regular service calls
                                                            </p>
                                                        </div>
                                                        <div className="check-mark check-mark-tooltip" data-tooltiptext={9}>
                                                            <p _msttexthash={3037606} _msthash={153}>
                                                                We call you regularly to ensure that your data is quality and
                                                                up-to-date.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div class="decision" _msthidden="1">
                                    <a href="#" _msttexthash="397306" _msthidden="1" _msthash="315">VIEW ALL PACKAGE DETAILS</a>
                                </div>

                                <div className="arrows_pricing herold_arrows_wrapper" >
                                    <span className="pricing_prev_arrow slick-arrow"  >
                                        <img
                                            onClick={() => { setIndex(index + 1) }}
                                            width="24"
                                            height="24"
                                            src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg"
                                            alt="Previous"
                                        />
                                    </span>

                                    <div className="arrows_pricing_between">
                                        <ul className="slick-dots">
                                            <li className={index === 0 ? "slick-active" : ""}>
                                                <button
                                                    onClick={() => { setIndex(0) }}
                                                    type="button"
                                                    aria-label="Slide 1 of 2"
                                                >
                                                    1
                                                </button>
                                            </li>
                                            <li className={index === 1 ? "slick-active" : ""}>
                                                <button
                                                    onClick={() => { setIndex(1) }}
                                                    type="button"
                                                    aria-label="Slide 2 of 2"
                                                >
                                                    2
                                                </button>
                                            </li>

                                        </ul>
                                    </div>

                                    <span className="pricing_next_arrow slick-arrow slick-disabled">
                                        <img
                                            onClick={() => { setIndex(index - 1) }}
                                            width="20"
                                            height="20"
                                            src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg"
                                            alt="Next"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>

                    </>
                    :
                    <div className="block">
                        <div className="block-inner container">
                            <div className="title-head" >
                                <h2 style={{ textAlign: 'center' }}>For more visibility that pays off.</h2>
                                <h3>Choose one of two Online Complete packages.</h3>
                            </div>
                            <div className="cardos-slider">
                                <div
                                    data-priceindex="0"
                                    className="light_color bestseller-card card"
                                    style={{ backgroundColor: '#eaf3ef' }}
                                    tabIndex="0"
                                    role="tabpanel"
                                    id="slick-slide00"
                                    aria-describedby="slick-slide-control00"
                                >

                                    <div className="text">
                                        <p>Plus</p>
                                        <p className="price">€49,20</p>
                                        <p className="month">/Month</p>
                                    </div>
                                    <div className="primary-button yellow  basic ">
                                        <a href="tel:00432236907235" tabIndex="0">+43 (0)5 0485-607</a>
                                    </div>
                                    <div className="all-check-marks">
                                        <div className="check-mark-slide-container 10 " _msthidden={10}>
                                            <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                <div className="check-mark" data-tooltip={0} _msthidden={1}>
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                        </svg>
                                                        {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                        {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                        <svg
                                                            version="1.1"
                                                            id="Layer_1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 512 512"
                                                            style={{ enableBackground: "new 0 0 512 512" }}
                                                            xmlSpace="preserve"
                                                            className="question-mark"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <path
                                                                        d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash={315523} _msthidden={1} _msthash={135}>
                                                        Google My Business
                                                    </p>
                                                </div>
                                                <div
                                                    className="check-mark check-mark-tooltip"
                                                    data-tooltiptext={0}
                                                    _msthidden={1}
                                                >
                                                    <p _msttexthash={3090919} _msthidden={1} _msthash={136}>
                                                        Wir erstellen den Google My Business (GMB) Eintrag für dein
                                                        Unternehmen.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                <div className="check-mark" data-tooltip={1} _msthidden={1}>
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                        </svg>
                                                        {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                        {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                        <svg
                                                            version="1.1"
                                                            id="Layer_1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 512 512"
                                                            style={{ enableBackground: "new 0 0 512 512" }}
                                                            xmlSpace="preserve"
                                                            className="question-mark"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <path
                                                                        d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash={657891} _msthidden={1} _msthash={137}>
                                                        Umfassende Datenverwaltung
                                                    </p>
                                                </div>
                                                <div
                                                    className="check-mark check-mark-tooltip"
                                                    data-tooltiptext={1}
                                                    _msthidden={1}
                                                >
                                                    <p _msttexthash={5014659} _msthidden={1} _msthash={138}>
                                                        Wir verwalten die wichtigsten Infos zu deinem Unternehmen auf mehr als
                                                        25 Online-Plattformen.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                <div className="check-mark" data-tooltip={2} _msthidden={1}>
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                        </svg>
                                                        {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                        {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                        <svg
                                                            version="1.1"
                                                            id="Layer_1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 512 512"
                                                            style={{ enableBackground: "new 0 0 512 512" }}
                                                            xmlSpace="preserve"
                                                            className="question-mark"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <path
                                                                        d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash={305578} _msthidden={1} _msthash={139}>
                                                        Geschützte Daten
                                                    </p>
                                                </div>
                                                <div
                                                    className="check-mark check-mark-tooltip"
                                                    data-tooltiptext={2}
                                                    _msthidden={1}
                                                >
                                                    <p _msttexthash={2463682} _msthidden={1} _msthash={140}>
                                                        Wir schützen deine Firmendaten vor Manipulation durch Dritte.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                <div className="check-mark" data-tooltip={3} _msthidden={1}>
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                        </svg>
                                                        {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                        {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                        <svg
                                                            version="1.1"
                                                            id="Layer_1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 512 512"
                                                            style={{ enableBackground: "new 0 0 512 512" }}
                                                            xmlSpace="preserve"
                                                            className="question-mark"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <path
                                                                        d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash={581555} _msthidden={1} _msthash={141}>
                                                        Übersicht der Bewertungen
                                                    </p>
                                                </div>
                                                <div
                                                    className="check-mark check-mark-tooltip"
                                                    data-tooltiptext={3}
                                                    _msthidden={1}
                                                >
                                                    <p _msttexthash={4333719} _msthidden={1} _msthash={142}>
                                                        Mit Online Complete hast du alle Bewertungen zu deinem Unternehmen
                                                        gesammelt im Blick.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                <div className="check-mark" data-tooltip={4} _msthidden={1}>
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                        </svg>
                                                        {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                        {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                        <svg
                                                            version="1.1"
                                                            id="Layer_1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 512 512"
                                                            style={{ enableBackground: "new 0 0 512 512" }}
                                                            xmlSpace="preserve"
                                                            className="question-mark"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <path
                                                                        d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash={631228} _msthidden={1} _msthash={143}>
                                                        Firmeneintrag auf herold.at
                                                    </p>
                                                </div>
                                                <div
                                                    className="check-mark check-mark-tooltip"
                                                    data-tooltiptext={4}
                                                    _msthidden={1}
                                                >
                                                    <p _msttexthash={6397430} _msthidden={1} _msthash={144}>
                                                        Wir befüllen deinen herold.at Firmeneintrag mit den wichtigsten Infos
                                                        (z.B.: Fotos, Öffnungszeiten etc.).
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="check-mark-wrapper 10 4  ">
                                            <div className="check-mark" data-tooltip={5}>
                                                <div className="check-mark-icon ">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                    </svg>
                                                </div>
                                                <p _msttexthash={400647} _msthash={145}>
                                                    Contract term: 3 years
                                                </p>
                                            </div>
                                        </div>
                                        <div className="check-mark-wrapper 10 4  clickable">
                                            <div className="check-mark" data-tooltip={6}>
                                                <div className="check-mark-icon tooltip-icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                    </svg>
                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                    <svg
                                                        version="1.1"
                                                        id="Layer_1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        x="0px"
                                                        y="0px"
                                                        viewBox="0 0 512 512"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="question-mark"
                                                    >
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <p _msttexthash={319254} _msthash={146}>
                                                    Ongoing Reporting
                                                </p>
                                            </div>
                                            <div className="check-mark check-mark-tooltip" data-tooltiptext={6}>
                                                <p _msttexthash={3764267} _msthash={147}>
                                                    Every month, you will receive statistics on your company's online
                                                    performance.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="check-mark-wrapper 10 4  clickable">
                                            <div className="check-mark" data-tooltip={7}>
                                                <div className="check-mark-icon tooltip-icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                    </svg>
                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                    <svg
                                                        version="1.1"
                                                        id="Layer_1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        x="0px"
                                                        y="0px"
                                                        viewBox="0 0 512 512"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="question-mark"
                                                    >
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <p _msttexthash={403975} _msthash={148}>
                                                    Data Filling by Herold
                                                </p>
                                            </div>
                                            <div className="check-mark check-mark-tooltip" data-tooltiptext={7}>
                                                <p _msttexthash={2806960} _msthash={149}>
                                                    We enter the data about your company on more than 25 platforms for you.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="check-mark-wrapper 10 4  clickable">
                                            <div className="check-mark" data-tooltip={8}>
                                                <div className="check-mark-icon tooltip-icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                    </svg>
                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                    <svg
                                                        version="1.1"
                                                        id="Layer_1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        x="0px"
                                                        y="0px"
                                                        viewBox="0 0 512 512"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="question-mark"
                                                    >
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <p _msttexthash={301600} _msthash={150}>
                                                    Personal support
                                                </p>
                                            </div>
                                            <div className="check-mark check-mark-tooltip" data-tooltiptext={8}>
                                                <p _msttexthash={2863965} _msthash={151}>
                                                    We take care of updating your data on more than 25 platforms at any
                                                    time.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="check-mark-wrapper 10 4  clickable">
                                            <div className="check-mark" data-tooltip={9}>
                                                <div className="check-mark-icon tooltip-icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                    </svg>
                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                    <svg
                                                        version="1.1"
                                                        id="Layer_1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        x="0px"
                                                        y="0px"
                                                        viewBox="0 0 512 512"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="question-mark"
                                                    >
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <p _msttexthash={418899} _msthash={152}>
                                                    Regular service calls
                                                </p>
                                            </div>
                                            <div className="check-mark check-mark-tooltip" data-tooltiptext={9}>
                                                <p _msttexthash={3037606} _msthash={153}>
                                                    We call you regularly to ensure that your data is quality and
                                                    up-to-date.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div
                                    data-priceindex="0"
                                    className="light_color bestseller-card card"
                                    style={{ backgroundColor: '#eaf3ef' }}
                                    tabIndex="0"
                                    role="tabpanel"
                                    id="slick-slide00"
                                    aria-describedby="slick-slide-control00"
                                >


                                    <div className="text">
                                        <p>Plus</p>
                                        <p className="price">€69,85</p>
                                        <p className="month">/Month</p>
                                    </div>
                                    <div className="primary-button yellow  basic ">
                                        <a href="tel:00432236907235" tabIndex="0">+43 (0)5 0485-607</a>
                                    </div>
                                    <div className="all-check-marks">
                                        <div className="check-mark-slide-container 10 " _msthidden={10}>
                                            <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                <div className="check-mark" data-tooltip={0} _msthidden={1}>
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                        </svg>
                                                        {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                        {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                        <svg
                                                            version="1.1"
                                                            id="Layer_1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 512 512"
                                                            style={{ enableBackground: "new 0 0 512 512" }}
                                                            xmlSpace="preserve"
                                                            className="question-mark"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <path
                                                                        d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash={315523} _msthidden={1} _msthash={158}>
                                                        Google My Business
                                                    </p>
                                                </div>
                                                <div
                                                    className="check-mark check-mark-tooltip"
                                                    data-tooltiptext={0}
                                                    _msthidden={1}
                                                >
                                                    <p _msttexthash={3090919} _msthidden={1} _msthash={159}>
                                                        Wir erstellen den Google My Business (GMB) Eintrag für dein
                                                        Unternehmen.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                <div className="check-mark" data-tooltip={1} _msthidden={1}>
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                        </svg>
                                                        {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                        {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                        <svg
                                                            version="1.1"
                                                            id="Layer_1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 512 512"
                                                            style={{ enableBackground: "new 0 0 512 512" }}
                                                            xmlSpace="preserve"
                                                            className="question-mark"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <path
                                                                        d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash={657891} _msthidden={1} _msthash={160}>
                                                        Umfassende Datenverwaltung
                                                    </p>
                                                </div>
                                                <div
                                                    className="check-mark check-mark-tooltip"
                                                    data-tooltiptext={1}
                                                    _msthidden={1}
                                                >
                                                    <p _msttexthash={5014659} _msthidden={1} _msthash={161}>
                                                        Wir verwalten die wichtigsten Infos zu deinem Unternehmen auf mehr als
                                                        25 Online-Plattformen.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                <div className="check-mark" data-tooltip={2} _msthidden={1}>
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                        </svg>
                                                        {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                        {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                        <svg
                                                            version="1.1"
                                                            id="Layer_1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 512 512"
                                                            style={{ enableBackground: "new 0 0 512 512" }}
                                                            xmlSpace="preserve"
                                                            className="question-mark"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <path
                                                                        d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash={305578} _msthidden={1} _msthash={162}>
                                                        Geschützte Daten
                                                    </p>
                                                </div>
                                                <div
                                                    className="check-mark check-mark-tooltip"
                                                    data-tooltiptext={2}
                                                    _msthidden={1}
                                                >
                                                    <p _msttexthash={2463682} _msthidden={1} _msthash={163}>
                                                        Wir schützen deine Firmendaten vor Manipulation durch Dritte.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                <div className="check-mark" data-tooltip={3} _msthidden={1}>
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                        </svg>
                                                        {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                        {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                        <svg
                                                            version="1.1"
                                                            id="Layer_1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 512 512"
                                                            style={{ enableBackground: "new 0 0 512 512" }}
                                                            xmlSpace="preserve"
                                                            className="question-mark"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <path
                                                                        d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash={581555} _msthidden={1} _msthash={164}>
                                                        Übersicht der Bewertungen
                                                    </p>
                                                </div>
                                                <div
                                                    className="check-mark check-mark-tooltip"
                                                    data-tooltiptext={3}
                                                    _msthidden={1}
                                                >
                                                    <p _msttexthash={4333719} _msthidden={1} _msthash={165}>
                                                        Mit Online Complete hast du alle Bewertungen zu deinem Unternehmen
                                                        gesammelt im Blick.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="check-mark-wrapper 10 4  clickable" _msthidden={2}>
                                                <div className="check-mark" data-tooltip={4} _msthidden={1}>
                                                    <div className="check-mark-icon tooltip-icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                        </svg>
                                                        {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                        {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                        <svg
                                                            version="1.1"
                                                            id="Layer_1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 512 512"
                                                            style={{ enableBackground: "new 0 0 512 512" }}
                                                            xmlSpace="preserve"
                                                            className="question-mark"
                                                        >
                                                            <g>
                                                                <g>
                                                                    <path
                                                                        d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p _msttexthash={631228} _msthidden={1} _msthash={166}>
                                                        Firmeneintrag auf herold.at
                                                    </p>
                                                </div>
                                                <div
                                                    className="check-mark check-mark-tooltip"
                                                    data-tooltiptext={4}
                                                    _msthidden={1}
                                                >
                                                    <p _msttexthash={6397430} _msthidden={1} _msthash={167}>
                                                        Wir befüllen deinen herold.at Firmeneintrag mit den wichtigsten Infos
                                                        (z.B.: Fotos, Öffnungszeiten etc.).
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="check-mark-wrapper 10 4  ">
                                            <div className="check-mark" data-tooltip={5}>
                                                <div className="check-mark-icon ">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                    </svg>
                                                </div>
                                                <p _msttexthash={505947} _msthash={168}>
                                                    Contract duration: 1 year
                                                </p>
                                            </div>
                                        </div>
                                        <div className="check-mark-wrapper 10 4  clickable">
                                            <div className="check-mark" data-tooltip={6}>
                                                <div className="check-mark-icon tooltip-icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                    </svg>
                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                    <svg
                                                        version="1.1"
                                                        id="Layer_1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        x="0px"
                                                        y="0px"
                                                        viewBox="0 0 512 512"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="question-mark"
                                                    >
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <p _msttexthash={319254} _msthash={169}>
                                                    Ongoing Reporting
                                                </p>
                                            </div>
                                            <div className="check-mark check-mark-tooltip" data-tooltiptext={6}>
                                                <p _msttexthash={3764267} _msthash={170}>
                                                    Every month, you will receive statistics on your company's online
                                                    performance.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="check-mark-wrapper 10 4  clickable">
                                            <div className="check-mark" data-tooltip={7}>
                                                <div className="check-mark-icon tooltip-icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                    </svg>
                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                    <svg
                                                        version="1.1"
                                                        id="Layer_1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        x="0px"
                                                        y="0px"
                                                        viewBox="0 0 512 512"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="question-mark"
                                                    >
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <p _msttexthash={403975} _msthash={171}>
                                                    Data Filling by Herold
                                                </p>
                                            </div>
                                            <div className="check-mark check-mark-tooltip" data-tooltiptext={7}>
                                                <p _msttexthash={2806960} _msthash={172}>
                                                    We enter the data about your company on more than 25 platforms for you.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="check-mark-wrapper 10 4  clickable">
                                            <div className="check-mark" data-tooltip={8}>
                                                <div className="check-mark-icon tooltip-icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                    </svg>
                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                    <svg
                                                        version="1.1"
                                                        id="Layer_1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        x="0px"
                                                        y="0px"
                                                        viewBox="0 0 512 512"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="question-mark"
                                                    >
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <p _msttexthash={301600} _msthash={173}>
                                                    Personal support
                                                </p>
                                            </div>
                                            <div className="check-mark check-mark-tooltip" data-tooltiptext={8}>
                                                <p _msttexthash={2863965} _msthash={174}>
                                                    We take care of updating your data on more than 25 platforms at any
                                                    time.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="check-mark-wrapper 10 4  clickable">
                                            <div className="check-mark" data-tooltip={9}>
                                                <div className="check-mark-icon tooltip-icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
                                                    </svg>
                                                    {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                                                    {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                    <svg
                                                        version="1.1"
                                                        id="Layer_1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        x="0px"
                                                        y="0px"
                                                        viewBox="0 0 512 512"
                                                        style={{ enableBackground: "new 0 0 512 512" }}
                                                        xmlSpace="preserve"
                                                        className="question-mark"
                                                    >
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M256,0C114.509,0,0,114.496,0,256c0,141.489,114.496,256,256,256c141.491,0,256-114.496,256-256
                                                          C512,114.509,397.504,0,256,0z M248.425,375.819c-14.49,0-25.61-12.131-25.61-25.948c0-14.153,11.457-25.946,25.61-25.946
                                                          c14.154,0,25.946,11.794,25.946,25.947C274.371,363.687,262.914,375.819,248.425,375.819z M286.839,244.736
                                                          c-18.533,14.49-18.871,24.599-18.871,42.121c0,6.404-3.37,13.817-19.881,13.817c-13.817,0-18.533-5.055-18.533-22.577
                                                          c0-28.98,12.805-42.796,22.577-51.22c11.12-9.436,29.991-19.881,29.991-38.077c0-15.502-13.479-22.915-30.328-22.915
                                                          c-34.371,0-26.957,25.948-45.155,25.948c-9.098,0-20.218-6.067-20.218-19.208c0-18.196,20.892-45.155,66.384-45.155
                                                          c43.132,0,71.775,23.926,71.775,55.601S295.937,237.66,286.839,244.736z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <p _msttexthash={418899} _msthash={175}>
                                                    Regular service calls
                                                </p>
                                            </div>
                                            <div className="check-mark check-mark-tooltip" data-tooltiptext={9}>
                                                <p _msttexthash={3037606} _msthash={176}>
                                                    We call you regularly to ensure that your data is quality and
                                                    up-to-date.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="decision">
                                <a href="#" _msttexthash="339469" _msthash="177">VIEW ALL PACKAGE DETAILS</a>
                            </div>
                        </div>

                    </div>

            }

        </>
    )
}