import { useContext, useEffect, useState } from "react"
import AppContext from "../../AppContext"

export const AboutFifthDiv = () => {
    const { aboutContent } = useContext(AppContext);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleContent = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    useEffect(() => {

    }, [aboutContent])
    return (
        <>
            <div id="r4399" class="row ">
                <a id="prinzipien" class="rowanchor"></a>
                <div class="container container-fixed">
                    <div class="col col-sm-12">
                        <div class="module text">
                            <p class="headline" style={{ textAlign: "center" }} _msttexthash="514332" _msthash="70">10 Leadership Principles</p>
                        </div>
                        <div class="module text">
                            <p class="bodytext" _msttexthash="30968197" _msthash="71">Despite clear hierarchies, we meet and communicate on an equal footing. For example, we live out a first-name culture throughout the company. We all learn from mistakes together and try to derive constructive measures for the future from them.</p>
                        </div>
                        <div id="m2474" class="module accordion" data-req="accordion" role="presentation">
                            <ul>
                                {
                                    aboutContent?.leadership_principles.map((data, index) => (
                                        <li class="" aria-expanded="false">
                                            <p id="loyalitat" class="subtitle itemTitle" onClick={() => toggleContent(index)} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <i class={`${data.icon}`} role="link"></i>
                                                <span style={{ paddingLeft: '10px' }} _msttexthash="99216" _msthash="72">{data.title}</span>
                                                <span class="input-group-icon">
                                                    <img src="/gradimo_icons/down.png" width="25px" height="25px" alt="down" style={{ marginRight: '20px' }} />
                                                </span>
                                            </p>
                                            <div class="itemContent" role="region" aria-hidden="true" style={activeIndex === index ? { display: 'block' } : { display: 'none' }}>
                                                <div dangerouslySetInnerHTML={{ __html: data?.description }} class="bodytext">
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}