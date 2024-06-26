import { useContext, useEffect, useState } from "react"
import AppContext from "../../AppContext"

export const AboutUsThirdDiv = () => {
    const { aboutContent, baseBackendRoute } = useContext(AppContext);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleContent = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {

    }, [aboutContent])
    return (
        <>
            <div id="r3696" className="row">
                <div class="container container-fixed colsStack">

                    <div className="col col-sm-12">
                        <div className="module text">
                            <h1 className="headline" style={{ textAlign: "center" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>Our management</font>
                                </font>
                            </h1>
                        </div>
                    </div>

                    {
                        aboutContent?.management.map((data, index) => (
                            <div id="c3473" className="col col-md-6 col-sm-12 col-lg-6">

                                <a href="#" rel="nofollow noopener" onclick="return false" style={{ cursor: "default" }} class="imageModuleWrap" id="w_m2744" data-track-event="click" data-track-action="internal_link_clicked">
                                    <img style={{ width: '100%' }} src={`${baseBackendRoute}${data.image}`} alt="John Goddard" data-author="" id="m2744" class="module image" data-req="" data-settings="enablehover=false,showelement=caption,hovertransition=slowFadeIn" _mstalt="172042" _msthash="43" />
                                    <noscript data-lazyload-id="m2744" data-lazyload-class="module image" data-lazyload-alt="John Goddard" data-req="" data-settings="enablehover=false,showelement=caption,hovertransition=slowFadeIn">
                                        <img id="m2744" class="module image" src={`${baseBackendRoute}${data.image}`} alt="John Goddard" data-author="" />
                                    </noscript>
                                </a>
                                <div id="m1284" className="module text">
                                    <p className="custom4" style={{ fontWeight: "bold", textAlign: "center" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>{data.name}</font>
                                        </font>
                                    </p>
                                </div>

                                <div id="m1494" className="module text">
                                    <p className="preamble" style={{ fontWeight: "bold", textAlign: "center" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                {data.designation}
                                            </font>
                                        </font>
                                    </p>
                                </div>
                                <div
                                    id="m2669"
                                    className="module accordion"
                                    data-req="accordion"
                                    data-collapseall=""
                                    role="presentation"
                                >

                                    <ul>

                                        <li>
                                            <p id="erfahre-mehr" class="subtitle itemTitle" onClick={() => toggleContent(index)}>
                                                <i class="itemIcon fa fa-" role="link"></i>
                                                <span _msttexthash="135525" _msthash="47">Learn more</span>
                                                <span class="input-group-icon" style={{ marginLeft: '10px' }}>
                                                    <img src="/gradimo_icons/down.png" width="15px" height="15px" alt="down" />
                                                </span>
                                            </p>
                                            <div className={`itemContent`} style={activeIndex === index ? { display: 'block' } : { display: 'none' }} role="region" _msthidden="2">
                                                <div dangerouslySetInnerHTML={{ __html: data?.description }} class="bodytext" _msthidden="2">

                                                </div>
                                            </div>



                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}