import { useContext, useEffect } from "react"
import AppContext from "../../AppContext"
import { Helmet } from "react-helmet";
export const AboutFirstDiv = () => {
    const { aboutContent, baseBackendRoute } = useContext(AppContext);
    useEffect(() => {
        console.log(aboutContent);
    }, [aboutContent])
    return (
        <>

            <Helmet>

                <meta property="og:title" content={aboutContent?.meta_title} />
                <meta property="og:description" content={aboutContent?.meta_description} />
                <meta property="og:type" content={aboutContent?.meta_tags} />


            </Helmet>
            <div id="r1553" class="row bgfilter" style={{ backgroundImage: `url(${baseBackendRoute}${aboutContent?.about_gradimo?.banner})` }}>
                <div class="container container-fixed">
                    <div class="col col-sm-12">
                        <div class="module text">
                            <p class="spottext" _msttexthash="176150" _msthash="16">{aboutContent?.about_gradimo?.banner_heading}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}