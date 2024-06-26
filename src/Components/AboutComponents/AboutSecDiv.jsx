import { useContext, useEffect } from "react"
import AppContext from "../../AppContext"

export const AboutSecDiv = () => {
    const { aboutContent } = useContext(AppContext);
    useEffect(() => {

    }, [aboutContent])
    return (
        <>
            <div id="r2061" class="row ">
                <div class="container container-fixed colsStack">
                    <div id="c1120" class="col col-md-6 col-sm-12 col-lg-3 flexCol">
                        <div class="flexWrap">
                            <div id="m2437" class="module text">
                                <p class="subtitle" _msttexthash="155441" _msthash="18">{aboutContent?.about_gradimo?.manegement_card_name}</p>
                            </div>
                            <div id="m2382" class="module text">
                                <p style={{ textAlign: "center" }} _msttexthash="1425684" _msthash="19">{aboutContent?.about_gradimo?.manegement_card_title}</p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap">
                            <a id="m1438" class="module button" href="#geschaeftsleitung" title="" role="button" data-track-event="click" data-track-action="internal_link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="155441" _msthash="20">{aboutContent?.about_gradimo?.manegement_card_name}</span>
                            </a>
                        </div>
                    </div>
                    <div id="c2548" class="col col-md-6 col-sm-12 col-lg-3 flexCol">
                        <div class="flexWrap">
                            <div id="m3317" class="module text">
                                <p class="subtitle" _msttexthash="97253" _msthash="21">{aboutContent?.about_gradimo?.mission_name}</p>
                            </div>
                            <div id="m2687" class="module text">
                                <p style={{ textAlign: "center" }} _msttexthash="3166228" _msthash="22">{aboutContent?.about_gradimo?.mission_title}</p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap">
                            <a id="m2736" class="module button" href="#mission" title="" role="button" data-track-event="click" data-track-action="internal_link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="112112" _msthash="23">Our Goals</span>
                            </a>
                        </div>
                    </div>
                    <div id="c2294" class="col col-lg-3 col-md-6 col-sm-12 flexCol">
                        <div class="flexWrap">
                            <div id="m3190" class="module text">
                                <p class="subtitle" _msttexthash="78143" _msthash="24">{aboutContent?.about_gradimo?.values_name}</p>
                            </div>
                            <div id="m3344" class="module text">
                                <p style={{ textAlign: "center" }} _msttexthash="1392508" _msthash="25">{aboutContent?.about_gradimo?.values_title}</p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap">
                            <a id="m2199" class="module button" href="#werte" title="" role="button" data-track-event="click" data-track-action="internal_link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="200863" _msthash="26">Gradimo Skupaj Values</span>
                            </a>
                        </div>
                    </div>
                    <div id="c1365" class="col col-lg-3 col-md-6 col-sm-12 flexCol">
                        <div class="flexWrap">
                            <div id="m1278" class="module text">
                                <p class="subtitle" _msttexthash="204958" _msthash="27">{aboutContent?.about_gradimo?.competencies_card_name}</p>
                            </div>
                            <div id="m1128" class="module text">
                                <p style={{ textAlign: "center" }} _msttexthash="1206647" _msthash="28">{aboutContent?.about_gradimo?.competencies_card_title}</p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap">
                            <a id="m4991" class="module button" href="#ueberblick" title="" role="button" data-track-event="click" data-track-action="internal_link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="118079" _msthash="29">Overview</span>
                            </a>
                        </div>
                    </div>
                    <div id="c2341" class="col col-lg-3 col-md-6 col-sm-12 flexCol">
                        <div class="flexWrap">
                            <div id="m1657" class="module text">
                                <p class="subtitle" _msttexthash="76700" _msthash="30">{aboutContent?.about_gradimo?.awards_card_name}</p>
                            </div>
                            <div id="m4294" class="module text">
                                <p class="bodytext" style={{ textAlign: "center" }} _msttexthash="3124121" _msthash="31">{aboutContent?.about_gradimo?.awards_card_title}</p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap">
                            <a id="m3205" class="module button" href="#auszeichnungen" title="" role="button" data-track-event="click" data-track-action="internal_link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="198328" _msthash="32">Gradimo Skupaj Awards</span>
                            </a>
                        </div>
                    </div>
                    <div id="c4805" class="col col-md-6 col-sm-12 col-lg-3 flexCol">
                        <div class="flexWrap">
                            <div id="m4974" class="module text">
                                <p class="subtitle">
                                    <font _mstmutation="1" _msttexthash="118456" _msthash="33">{aboutContent?.about_gradimo?.century_name}</font>
                                    <br />
                                </p>
                            </div>
                            <div id="m4131" class="module text">
                                <p style={{ textAlign: "center" }} _msttexthash="3488264" _msthash="34">{aboutContent?.about_gradimo?.century_title}</p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap">
                            <a id="m4420" class="module button" href="#video" title="" role="button" data-track-event="click" data-track-action="internal_link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="231374" _msthash="35">Watch the video</span>
                            </a>
                        </div>
                    </div>
                    <div id="c1687" class="col col-md-6 col-sm-12 col-lg-3 flexCol">
                        <div class="flexWrap">
                            <div id="m1056" class="module text">
                                <p class="subtitle" _msttexthash="263692" _msthash="36">{aboutContent?.about_gradimo?.image_gallery_name}</p>
                            </div>
                            <div id="m1897" class="module text">
                                <p style={{ textAlign: "center" }} _msttexthash="2412917" _msthash="37">{aboutContent?.about_gradimo?.image_gallery_title}</p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap">
                            <a id="m4958" class="module button" href="/news" title="" role="button" data-track-event="click" data-track-action="internal_link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="186771" _msthash="38">Impressions</span>
                            </a>
                        </div>
                    </div>
                    <div id="c3912" class="col col-md-6 col-sm-12 col-lg-3 flexCol">
                        <div class="flexWrap">
                            <div id="m4768" class="module text">
                                <p class="subtitle" _msttexthash="136825" _msthash="39">Locations</p>
                            </div>
                            <div id="m3048" class="module text">
                                <p style={{ textAlign: "center" }} _msttexthash="2122042" _msthash="40">We are at home all over Austria. Find the Gradimo Skupaj offices here!</p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap">
                            <a id="m4745" class="module button" href="#standorte" title="" role="button" data-track-event="click" data-track-action="internal_link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="136825" _msthash="41">Locations</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}