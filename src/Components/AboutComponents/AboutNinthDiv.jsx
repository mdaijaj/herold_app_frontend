import { useContext, useEffect, useState } from "react";
import AppContext from "../../AppContext";

export const AboutNinthDiv = () => {
    const { aboutContent } = useContext(AppContext);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleContent = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        // Your useEffect logic here
    }, [aboutContent]);

    return (
        <>
            <div id="r3572" class="row ">
                <a id="auszeichnungen" class="rowanchor"></a>
                <div class="container container-fixed ">
                    <div class="col col-sm-12">
                        <div class="module text">
                            <p class="headline" _msttexthash="76700" _msthash="116">Awards</p>
                        </div>
                        <div id="m2690" class="module accordion" data-req="accordion" role="presentation">
                            <ul>
                                {aboutContent?.awards?.map((data, index) => (
                                    <li className={activeIndex === index ? "active" : ""} aria-expanded="false" onClick={() => toggleContent(index)}>
                                        <p id="2023" class="subtitle itemTitle" style={{ display: "flex", justifyContent: "space-between" }}>
                                            <i class="itemIcon fa fa-" role="link"></i>
                                            <span _msttexthash="22022" _msthash="117">{data.title}</span>
                                            <span class="input-group-icon" style={{ marginRight: '20px' }}>
                                                <img src="/gradimo_icons/down.png" width="25px" height="25px" alt="down" />
                                            </span>
                                        </p>
                                        <div className={`itemContent`} style={activeIndex === index ? { display: 'block' } : { display: 'none' }} role="region" _msthidden="2">
                                            <div dangerouslySetInnerHTML={{ __html: data?.description }} class="bodytext" _msthidden="2"></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
