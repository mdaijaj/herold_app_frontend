import { useContext, useEffect, useState } from "react"
import AppContext from "../../AppContext";

export const AboutEightDiv = () => {
    const [currentRow, setCurrentRow] = useState(0); // State to manage current visible row
    const { aboutContent, baseBackendRoute } = useContext(AppContext);
    const [totalLength, setTotalLength] = useState(1);
    const handleRowChange = (rowIndex) => {
        setCurrentRow(rowIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentRow((prevRow) => (prevRow + 1) % (totalLength)); // Increment row index cyclically
        }, 3000);

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    useEffect(() => {
        console.log(aboutContent?.core_competencies?.length);
        setTotalLength(aboutContent?.core_competencies?.length);
    }, [aboutContent])
    return (
        <>

            <div id="r4617" class="row ">
                <a id="ueberblick" class="rowanchor"></a>
                <div class="container container-fixed colsStack">
                    <div class="col col-lg-12 col-md-12 col-sm-11">
                        <div id="m3216" class="module text">
                            <p class="headline" _msttexthash="410566" _msthash="95">Our Core Competencies</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="r2002" class="row row hidden-sm">
                <div class="container container-fixed colsStack">

                    {
                        aboutContent?.core_competencies?.map((data, index) => (
                            <div id="c2391" class="col col-lg-4 col-md-4 col-sm-12 flexCol">
                                <div class="flexWrap">
                                    <a href="#" rel="nofollow noopener" onclick="return false" style={{ cursor: "default" }} class="imageModuleWrap" id="w_m3805" data-track-event="click" data-track-action="internal_link_clicked">
                                        <img src={`${baseBackendRoute}${data.image}`} alt="" data-author="" id="m3805" class="module image" data-req="" data-settings="enablehover=false,showelement=none,hovertransition=slowFadeIn" />

                                    </a>
                                    <div id="m1532" class="module text">
                                        <p class="custom4" style={{ textAlign: "center", fontSize: "30px" }} _msttexthash="225459" _msthash="96">{data.heading}</p>
                                    </div>
                                    <div id="m4910" class="module text">
                                        <p class="preamble" style={{ textAlign: "center" }} _msttexthash="2413463" _msthash="97">{data.title}</p>
                                    </div>
                                </div>
                                <div class="module autospacer"></div>
                                <div class="flexWrap">
                                    <a id="m2386" class="module button button button3" href={`/marketing/${data?.slug}`} title="" role="button" data-track-event="click" data-track-action="link_clicked">
                                        <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="115778" _msthash="98">read more</span>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* https://www.karriere.herold.at */}

            <div
                id="r9427"
                className="rowGroup rowGroup rowGroup hidden-md hidden-lg"
                data-req="rowgroup"
                data-rowgroupsettings="dots=true,auto=true,transition=sliding"
                data-arrow-before="Vorher"
                data-arrow-after="Nachher"
                _msthidden="12"
            >
                <ul className="dots">
                    {
                        aboutContent?.core_competencies?.map((data, index) => (
                            <li className={currentRow === index ? 'active' : ''} onClick={() => handleRowChange(index)}></li>
                        ))
                    }
                    {/* <li className={currentRow === 1 ? 'active' : ''} onClick={() => handleRowChange(1)}></li>
                    <li className={currentRow === 2 ? 'active' : ''} onClick={() => handleRowChange(2)}></li> */}
                </ul>
                {
                    aboutContent?.core_competencies?.map((data, index) => (
                        <div
                            id="r1954"
                            className={`row ${currentRow === index ? 'inRowgroupView' : 'outOfRowgroupView'}`}
                            style={{ display: currentRow === index ? 'block' : 'none' }}
                        >
                            <div className="container container-fixed colsStack" _mstvisible="1">
                                <div id="c2611" className="col col-sm-12 col-lg-12 col-md-12 flexCol" _mstvisible="2">
                                    <div className="flexWrap" _mstvisible="3">
                                        <a href="#" rel="nofollow noopener" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }} className="imageModuleWrap" id="w_m4388" data-track-event="click" data-track-action="internal_link_clicked" _mstvisible="4">
                                            <img src={`${baseBackendRoute}${data.image}`} alt="Magnifying glass" data-author="" id="m4388" className="module image" data-req="" data-settings="enablehover=false,showelement=none,hovertransition=slowFadeIn" style={{}} _mstalt="45318" _msthash="105" _mstvisible="5" />
                                            <noscript data-lazyload-id="m4388" data-lazyload-class="module image" data-lazyload-alt="Lupe" data-req="" data-settings="enablehover=false,showelement=none,hovertransition=slowFadeIn" _mstvisible="5">
                                                <img id="m4388" className="module image" src={`${data.image}`} alt="Lupe" data-author="" />
                                            </noscript>
                                        </a>
                                        <div id="m3016" className="module text" _mstvisible="4">
                                            <p className="custom4" style={{ textAlign: 'center', fontWeight: 'bold' }} _msttexthash="249704" _msthash="106" _mstvisible="5">{data.heading}</p>
                                        </div>
                                        <div className="module text" _mstvisible="4">
                                            <p className="preamble" style={{ textAlign: 'center' }} _msttexthash="2936024" _msthash="107" _mstvisible="5">{data.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {/* <div
                    id="r4187"
                    className={`row ${currentRow === 1 ? 'inRowgroupView' : 'outOfRowgroupView'}`}
                    style={{ display: currentRow === 1 ? 'block' : 'none' }}
                >
                    <div className="container container-fixed colsStack" _mstvisible="1">
                        <div id="c4839" className="col col-sm-12 col-lg-12 col-md-12 flexCol" _mstvisible="2">
                            <div className="flexWrap" _mstvisible="3">
                                <a href="#" rel="nofollow noopener" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }} className="imageModuleWrap" id="w_m3400" data-track-event="click" data-track-action="internal_link_clicked" _mstvisible="4">
                                    <img src="https://www.karriere.herold.at/uploads/EwNjh7Kk/oc.png" alt="OC" data-author="" id="m3400" className="module image" data-req="" data-settings="enablehover=false,showelement=none,hovertransition=slowFadeIn" style={{}} _mstalt="14157" _msthash="109" _mstvisible="5" />
                                    <noscript data-lazyload-id="m3400" data-lazyload-class="module image" data-lazyload-alt="OC" data-req="" data-settings="enablehover=false,showelement=none,hovertransition=slowFadeIn" _mstvisible="5">
                                        <img id="m3400" className="module image" src="/uploads/EwNjh7Kk/oc.png" alt="OC" data-author="" />
                                    </noscript>
                                </a>
                                <div id="m4313" className="module text" _mstvisible="4">
                                    <p className="custom4" style={{ textAlign: 'center', fontWeight: 'bold' }} _msttexthash="422123" _msthash="110" _mstvisible="5">HEROLD Online Complete</p>
                                </div>
                                <div className="module text" _mstvisible="4">
                                    <p className="preamble" style={{ textAlign: 'center' }} _msttexthash="4095936" _msthash="111" _mstvisible="5">Maximum online visibility, minimum time expenditure and optimal data protection.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="r4826"
                    className={`row ${currentRow === 2 ? 'inRowgroupView' : 'outOfRowgroupView'}`}
                    style={{ display: currentRow === 2 ? 'block' : 'none' }}
                >
                    <div className="container container-fixed colsStack" _mstvisible="1">
                        
                        <div id="c4727" className="col col-sm-12 col-lg-12 col-md-12 flexCol" _mstvisible="2">
                            <div className="flexWrap" _mstvisible="3">
                                <a href="#" rel="nofollow noopener" onClick={(e) => e.preventDefault()} style={{ cursor: 'default' }} className="imageModuleWrap" id="w_m2655" data-track-event="click" data-track-action="internal_link_clicked" _mstvisible="4">
                                    <img src="https://www.karriere.herold.at/uploads/99zHxCeS/websites.png" alt="Sites" data-author="" id="m2655" className="module image" data-req="" data-settings="enablehover=false,showelement=none,hovertransition=slowFadeIn" style={{}} _mstalt="61620" _msthash="113" _mstvisible="5" />
                                    <noscript data-lazyload-id="m2655" data-lazyload-class="module image" data-lazyload-alt="Websites" data-req="" data-settings="enablehover=false,showelement=none,hovertransition=slowFadeIn" _mstvisible="5">
                                        <img id="m2655" className="module image" src="/uploads/99zHxCeS/websites.png" alt="Websites" data-author="" />
                                    </noscript>
                                </a>
                                <div id="m2290" className="module text" _mstvisible="4">
                                    <p className="custom4" style={{ textAlign: 'center', fontWeight: 'bold' }} _msttexthash="204659" _msthash="114" _mstvisible="5">HERALD Website</p>
                                </div>
                                <div className="module text" _mstvisible="4">
                                    <p className="preamble" style={{ textAlign: 'center' }} _msttexthash="2274012" _msthash="115" _mstvisible="5">Our customers are doing a great job. HEROLD makes your website.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}