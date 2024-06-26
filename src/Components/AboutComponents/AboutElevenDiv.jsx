import { useContext, useEffect, useState } from "react"
import Slider from "react-slick"
import AppContext from "../../AppContext"

export const AboutElevenDiv = () => {
    const { aboutContent, baseBackendRoute } = useContext(AppContext);
    useEffect(() => {

    }, [aboutContent])
    return (
        <>
            <div id="r3676" className="row ">

                <a id="onboarding" className="rowanchor" />
                <div className="container container-fixed ">
                    <div className="col col-sm-12">
                        <div className="module text">
                            <p className="headline">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        Corporate Social Responsibility
                                    </font>
                                </font>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {
                aboutContent?.corporate_social_responsibility?.map((data, index) => (

                    <>
                        {
                            index % 2 === 0 ?

                                <>
                                    <div id="r2324" className="row ">

                                        <a id="onboarding" className="rowanchor" />
                                        <div className="container container-fixed">
                                            <div
                                                id="c4878"
                                                className="col col-md-2 col-lg-2 hidden-lg hidden-md col-sm-12 Col"
                                                style={{ backgroundImage: `url(${baseBackendRoute}${data.image})` }}
                                            />
                                            <div id="c3815" className="col col-md-7 col-lg-7 col-sm-12">
                                                <div id="m2819" className="module text">
                                                    <p className="custom4" style={{ fontWeight: "bold" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                {data.heading}
                                                            </font>
                                                        </font>
                                                    </p>
                                                    <div dangerouslySetInnerHTML={{ __html: data?.description }} class="bodytext" _msthidden="2">

                                                    </div>
                                                </div>
                                            </div>
                                            <div id="c1483" className="col col-sm-6 hidden-sm col-lg-5 col-md-5 Col" style={{ backgroundImage: `url(${baseBackendRoute}${data.image})` }} />
                                        </div>
                                    </div>
                                </>
                                :

                                <>

                                    <div id="r2716" className="row ">

                                        <a id="onboarding" className="rowanchor" />
                                        <div className="container container-fixed">
                                            <div id="c2281" style={{ backgroundImage: `url(${baseBackendRoute}${data.image})` }}
                                                className="col col-md-5 col-lg-5 col-sm-12 Col" />
                                            <div id="c4920" className="col col-md-7 col-lg-7 col-sm-12">
                                                <div id="m4700" className="module text">
                                                    <p className="custom4" style={{ fontWeight: "bold" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                {data.heading}
                                                            </font>
                                                        </font>
                                                    </p>
                                                    <div dangerouslySetInnerHTML={{ __html: data?.description }} class="bodytext" _msthidden="2">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                        }
                    </>
                ))
            }

        </>
    )
}