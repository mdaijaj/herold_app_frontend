import { useContext, useEffect } from "react"
import AppContext from "../../AppContext"

export const AboutSixDiv = () => {
    const { aboutContent, baseBackendRoute } = useContext(AppContext);
    useEffect(() => {

    }, [aboutContent])
    return (
        <>
            <div id="r3826" class="row ">
                <div class="container container-fixed colsStack">
                    <div class="col col-sm-12">
                        <div class="module text">
                            <p class="headline" style={{ textAlign: "center" }} _msttexthash="722462" _msthash="92">{aboutContent?.about_gradimo?.corporate_mission_headig}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="r3715" style={{ backgroundImage: `url(${baseBackendRoute}${aboutContent?.about_gradimo?.corporate_mission_image})` }} class="row bgfilter">
                <div class="container container-fixed">
                    <div class="col col-md-7 col-lg-7 col-sm-12">
                        <div id="m3217" class="module divider"></div>
                        <div id="m1388" class="module text">
                            <p class="custom6">
                                <span style={{ fontWeight: "bold" }}></span>
                                <span style={{ fontWeight: "bold" }}></span>
                                <span style={{ fontWeight: "bold" }}></span>
                            </p>
                            <p dangerouslySetInnerHTML={{ __html: aboutContent?.about_gradimo?.corporate_mission_description }} className="custom6">

                            </p>
                        </div>
                        <div id="m3814" class="module divider"></div>
                    </div>
                    <div class="col col col-sm-5 hidden-sm"></div>
                </div>
            </div>


        </>
    )
}