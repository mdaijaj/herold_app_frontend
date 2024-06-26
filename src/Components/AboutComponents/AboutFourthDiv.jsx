import { useContext, useEffect } from "react"
import AppContext from "../../AppContext"

export const AboutFourthDiv = () => {
    const { aboutContent, baseBackendRoute } = useContext(AppContext);
    useEffect(() => {

    }, [aboutContent])
    return (
        <>
            <div id="r3502" class="row ">
                <a id="mission" class="rowanchor"></a>
                <div class="container container-fixed colsStack">
                    <div class="col col-sm-12">
                        <div class="module text">
                            <h1 class="headline" style={{ textAlign: "center" }} _msttexthash="666042" _msthash="65">{aboutContent?.about_gradimo?.mission_heading}</h1>
                        </div>
                    </div>
                    <div id="c3943" class="col col-sm-12 col-md-12 col-lg-8">
                        <a href="#" rel="nofollow noopener" onclick="return false" style={{ cursor: "default" }} class="imageModuleWrap" id="w_m4398" data-track-event="click" data-track-action="internal_link_clicked">
                            <img src={`${baseBackendRoute}${aboutContent?.about_gradimo?.mission_image}`} alt="Mission" data-author="" id="m4398" class="module image" data-req="" data-settings="enablehover=false,showelement=none,hovertransition=slowFadeIn" _mstalt="97253" _msthash="66" />
                        </a>
                    </div>
                    <div class="col col-sm-12 col-lg-4 col-md-12">
                        <div dangerouslySetInnerHTML={{ __html: aboutContent?.about_gradimo?.mission_description }} id="m1685" class="module text">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}