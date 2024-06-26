import { useContext, useEffect } from "react"
import AppContext from "../../AppContext"

export const AboutTwelveDiv = () => {
    const { aboutContent } = useContext(AppContext);
    useEffect(() => {

    }, [aboutContent])
    return (
        <>
            {/* <div id="r2007" class="row ">
                <a id="standorte" class="rowanchor"></a>
                <div class="container container-fixed ">
                    <div class="col col-sm-12">
                        <div class="module text">
                            <p class="headline" _msttexthash="136825" _msthash="219">Locations</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="r2169" class="row ">
                <div class="container container-fluid ">
                    <div id="c4171" class="col col-sm-12">
                        <div id="m3739" class="module map osmap osmap osmap animated animationDone" data-url="?m=m3739" data-req="mapbox-gl,leaflet,osmap" data-animate="">
                            <div class="map-container cookieconsent-optin-marketing mapboxgl-map" data-address="Canettistraße 5, 1100 Wien" data-zoom="7" data-extraaddress="Grabenweg 68, 6020 Innsbruck|Hintere Achmühlerstraße 1a, 6850 Dornbirn|Liebenauer Hauptstraße 2-6, 8041 Graz|Johann Roithner-Straße 131, 4050 St. Dionysen|Paulitschgasse 11/9, 9020 Klagenfurt am Wörthersee|Siezenheimerstraße 35, 5020 Salzburg">
                                <div class="mapboxgl-canvas-container mapboxgl-interactive">
                                    <canvas class="mapboxgl-canvas" tabindex="0" aria-label="Map" style={{ position: "absolute", width: "1280px", height: "640px" }} width="2560" height="1280" _mstaria-label="30199" _msthash="291"></canvas>
                                    <img src="https://site-assets.cdnmns.com/373112e167f382e58a142456f0fdbb68/css/images/marker-icon-2x.png" alt="Aktueller Standort: Canettistraße 5, 1100 Wien" class="mapboxgl-marker" style={{ width: "25px", height: "41px", transform: "translate(628px, 279px)" }} role="button" tabindex="0" _mstalt="1368653" _msthash="295" />
                                    <img src="https://site-assets.cdnmns.com/373112e167f382e58a142456f0fdbb68/css/images/marker-icon-2x.png" alt="Aktueller Standort: Grabenweg 68, 6020 Innsbruck" class="mapboxgl-marker" style={{ width: "25px", height: "41px", transform: "translate(-272px, 528px)" }} role="button" tabindex="0" _mstalt="1439997" _msthash="296" />
                                    <img src="https://site-assets.cdnmns.com/373112e167f382e58a142456f0fdbb68/css/images/marker-icon-2x.png" alt="Aktueller Standort: Hintere Achmühlerstraße 1a, 6850 Dornbirn" class="mapboxgl-marker" style={{ width: "25px", height: "41px", transform: "translate(-581px, 490px)" }} role="button" tabindex="0" _mstalt="2446769" _msthash="297" />
                                    <img src="https://site-assets.cdnmns.com/373112e167f382e58a142456f0fdbb68/css/images/marker-icon-2x.png" alt="Aktueller Standort: Liebenauer Hauptstraße 2-6, 8041 Graz" class="mapboxgl-marker" style={{ width: "25px", height: "41px", transform: "translate(459px, 586px)" }} role="button" tabindex="0" _mstalt="1986140" _msthash="298" />
                                    <img src="https://site-assets.cdnmns.com/373112e167f382e58a142456f0fdbb68/css/images/marker-icon-2x.png" alt="Aktueller Standort: Johann Roithner-Straße 131, 4050 St. Dionysen" class="mapboxgl-marker" style={{ width: "25px", height: "41px", transform: "translate(240px, 267px)" }} role="button" tabindex="0" _mstalt="2489994" _msthash="299" />
                                    <img src="https://site-assets.cdnmns.com/373112e167f382e58a142456f0fdbb68/css/images/marker-icon-2x.png" alt="Aktueller Standort: Paulitschgasse 11/9, 9020 Klagenfurt am Wörthersee" class="mapboxgl-marker" style={{ width: "25px", height: "41px", transform: "translate(250px, 700px)" }} role="button" tabindex="0" _mstalt="3097770" _msthash="300" />
                                    <img src="https://site-assets.cdnmns.com/373112e167f382e58a142456f0fdbb68/css/images/marker-icon-2x.png" alt="Aktueller Standort: Siezenheimerstraße 35, 5020 Salzburg" class="mapboxgl-marker" style={{ width: "25px", height: "41px", transform: "translate(14px, 382px)" }} role="button" tabindex="0" _mstalt="2059512" _msthash="301" />
                                </div>
                                <div class="mapboxgl-control-container">
                                    <div class="mapboxgl-ctrl-top-left">
                                        <div class="mapboxgl-ctrl mapboxgl-ctrl-group">
                                            <button class="mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-in" type="button" aria-label="Zoom In" _mstaria-label="74490" _msthash="292"></button>
                                            <button class="mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-out" type="button" aria-label="Zoom Out" _mstaria-label="96044" _msthash="293"></button>
                                            <button class="mapboxgl-ctrl-icon mapboxgl-ctrl-compass" type="button" aria-label="Reset North" style={{ display: "none" }} _msthidden="A" _mstaria-label="157066" _msthash="294">
                                                <span class="arrow" style={{ transform: "rotate(0deg)" }}></span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mapboxgl-ctrl-top-right"></div>
                                    <div class="mapboxgl-ctrl-bottom-left"></div>
                                    <div class="mapboxgl-ctrl-bottom-right">
                                        <div class="mapboxgl-ctrl mapboxgl-ctrl-attrib" _msttexthash="1180270" _msthash="302">
                                            <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a>
                                            <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



            {/* <div id="r4365" class="row ">
                <div class="container container-fixed colsStack">
                    <div id="c3737" class="col col-lg-3 col-md-6 col-sm-12 flexCol">
                        <div class="flexWrap">
                            <div id="m1962" class="module text" >
                                <p class="subtitle" style={{ textAlign: "center" }} _msttexthash="75725" _msthash="220">Vienna</p>
                            </div>
                            <div id="m3959" class="module text" >
                                <p class="bodytext" style={{ textAlign: "center" }}>
                                    <span style={{ fontWeight: "bold" }} _msttexthash="208689" _msthash="221">Headquarters</span>
                                </p>
                                <p class="bodytext" style={{ textAlign: "center" }} _msttexthash="571623" _msthash="222">Canettistraße 5, <br _istranslated="10" />1100 Vienna </p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <a id="m4437" class="module button" href="https://www.google.com/maps/dir//Canettistra%C3%9Fe+5,+1100+Wien/@47.7631404,11.805535,7z/data=!4m9!4m8!1m0!1m5!1m1!1s0x476da9ca88bc5cb5:0xd7e41d5231cb25c1!2m2!1d16.381629!2d48.1850682!3e0" title="" role="button" data-track-event="click" data-track-action="link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="62218" _msthash="223">Route</span>
                            </a>
                        </div>
                    </div>
                    <div id="c4188" class="col col-md-6 col-sm-12 col-lg-3 flexCol">
                        <div class="flexWrap">
                            <div id="m4138" class="module text">
                                <p class="subtitle" style={{ textAlign: "center" }} _msttexthash="159289" _msthash="224">Klagenfurt</p>
                            </div>
                            <div id="m3813" class="module text">
                                <p class="bodytext" style={{ textAlign: "center" }} _msttexthash="1656226" _msthash="225">Paulitschgasse 11/9 <br />9020 Klagenfurt am Wörthersee </p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <a id="m2023" class="module button" href="https://maps.google.com/maps?&amp;daddr=46.621751,14.3095663" title="" role="button" data-track-event="click" data-track-action="link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="62218" _msthash="226">Route</span>
                            </a>
                        </div>
                    </div>
                    <div id="c4979" class="col col-md-6 col-sm-12 col-lg-3 flexCol">
                        <div class="flexWrap">
                            <div id="m3527" class="module text">
                                <p class="subtitle" style={{ textAlign: "center" }} _msttexthash="136357" _msthash="227">Innsbr/uck</p>
                            </div>
                            <div id="m4738" class="module text">
                                <p class="bodytext" style={{ textAlign: "center" }} _msttexthash="527033" _msthash="228">Grabenweg 68 <br />6020 Innsbr/uck </p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <a id="m3864" class="module button" href="https://maps.google.com/maps?&amp;daddr=47.2648298,11.4398371" title="" role="button" data-track-event="click" data-track-action="link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="62218" _msthash="229">Route</span>
                            </a>
                        </div>
                    </div>
                    <div id="c3697" class="col col-lg-3 col-md-6 col-sm-12 flexCol">
                        <div class="flexWrap">
                            <div id="m4362" class="module text">
                                <p class="subtitle" style={{ textAlign: "center" }} _msttexthash="115050" _msthash="230">Dornbirn</p>
                            </div>
                            <div id="m4912" class="module text">
                                <p class="bodytext" style={{ textAlign: "center" }} _msttexthash="1162421" _msthash="231">Hintere Achmühlerstraße 1a <br />6850 Dornbirn </p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <a id="m4828" class="module button" href="https://maps.google.com/maps?&amp;daddr=47.4048688,9.7597901" title="" role="button" data-track-event="click" data-track-action="link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="62218" _msthash="232">Route</span>
                            </a>
                        </div>
                    </div>
                    <div id="c2921" class="col col-lg-3 col-md-6 col-sm-12 flexCol">
                        <div class="flexWrap">
                            <div id="m2054" class="module text">
                                <p class="subtitle" style={{ textAlign: "center" }} _msttexthash="61789" _msthash="233">Traun</p>
                            </div>
                            <div id="m4721" class="module text">
                                <p class="bodytext" style={{ textAlign: "center" }} _msttexthash="899392" _msthash="234">Johann Roithner-Straße 131 <br />4050 Traun </p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <a id="m4876" class="module button" href="https://maps.google.com/maps?&amp;daddr=48.2287836,14.2551927" title="" role="button" data-track-event="click" data-track-action="link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="62218" _msthash="235">Route</span>
                            </a>
                        </div>
                    </div>
                    <div id="c4800" class="col col-lg-3 col-md-6 col-sm-12 flexCol">
                        <div class="flexWrap">
                            <div id="m1622" class="module text">
                                <p class="subtitle" style={{ textAlign: "center" }} _msttexthash="45526" _msthash="236">Graz</p>
                            </div>
                            <div id="m1794" class="module text">
                                <p class="bodytext" style={{ textAlign: "center" }} _msttexthash="864188" _msthash="237">Liebenauer Hauptstraße 2-6 <br />8041 Graz </p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <a id="m2226" class="module button" href="https://maps.google.com/maps?&amp;daddr=47.0329107,15.4428566" title="" role="button" data-track-event="click" data-track-action="link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="62218" _msthash="238">Route</span>
                            </a>
                        </div>
                    </div>
                    <div id="c4420" class="col col-lg-3 col-md-6 col-sm-12 flexCol">
                        <div class="flexWrap">
                            <div id="m4391" class="module text">
                                <p class="subtitle" style={{ textAlign: "center" }} _msttexthash="84383" _msthash="239">SALZBURG</p>
                            </div>
                            <div id="m4934" class="module text">
                                <p class="bodytext" style={{ textAlign: "center" }} _msttexthash="908726" _msthash="240">Siezenheimerstraße 35 <br />5020 Salzburg </p>
                            </div>
                        </div>
                        <div class="module autospacer"></div>
                        <div class="flexWrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <a id="m1502" class="module button" href="https://www.google.com/maps/dir//Jakob-Haringer-Stra%C3%9Fe+3,+5020+Salzburg/@47.8227343,13.0387101,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47769a9a32894acf:0x8fb0f4253fc8a5a5!2m2!1d13.0408988!2d47.8227343" title="" role="button" data-track-event="click" data-track-action="link_clicked">
                                <span style={{ fontWeight: 'bold' }} class="buttonLabel labelRight" _msttexthash="62218" _msthash="241">Route</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}


            <div id="r2794" class="row ">
                <div class="container container-fixed ">
                    <div class="col col-sm-12">
                        <div class="module text">
                            <p class="headline" _msttexthash="309972" _msthash="242">{aboutContent?.about_gradimo?.act_heading}</p>
                        </div>
                        <div id="m3390" class="module text">
                            <div dangerouslySetInnerHTML={{ __html: aboutContent?.about_gradimo?.act_descriptions }} class="bodytext" _msthidden="2">

                            </div>
                        </div>
                        <div class="module text">
                            <p class="headline" _msttexthash="236548" _msthash="250">Whistleblower</p>
                        </div>
                        <div class="module text">
                            <div dangerouslySetInnerHTML={{
                                __html: aboutContent?.about_gradimo?.whistleblower
                            }} class="bodytext" _msthidden="2">

                            </div>
                        </div>
                        <div class="module text">
                            <p class="headline" _msttexthash="61867" _msthash="252">Owner</p>
                        </div>
                        <div class="module text">
                            <div dangerouslySetInnerHTML={{
                                __html: aboutContent?.about_gradimo?.owner
                            }} class="bodytext" _msthidden="2">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}