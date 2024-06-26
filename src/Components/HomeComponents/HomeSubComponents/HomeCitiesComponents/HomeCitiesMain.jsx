import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"
import { HomeSearchModule } from "../../HomeSearchModule";

export const HomeCitiesMain = () => {
    const [icons, setIcons] = useState('');
    const { cityContent, baseBackendRoute } = useContext(AppContext);
    useEffect(() => {

    }, [cityContent])
    return (
        <>
            <main>
                <HomeSearchModule />
                <div className="geo-overview_template_geoInfo__3BP-T">
                    <div
                        style={{
                            display: "block",
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            margin: 0
                        }}
                    >

                        <img
                            alt=""
                            src={`${baseBackendRoute}${cityContent?.city?.city_image}`}
                            decoding="async"
                            data-nimg="fill"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "cover"
                            }}
                            sizes="100vw"
                            srcSet={`${baseBackendRoute}${cityContent?.city?.city_image}`}
                        />
                    </div>


                    <div className="geo-overview_template_geoInfoContainer__3PiUE">
                        <div className="geo-overview_template_geoInfoBox__2Cgh0">
                            <div className="geo-overview_template_geoInfoTitle__2290I">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        {cityContent?.city?.title}
                                    </font>
                                </font>
                            </div>
                            <div className="geo-overview_template_geoInfoDescription__1n_Z8">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        {cityContent?.city?.descriptions}
                                    </font>
                                </font>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="geo-overview_template_geoGroups__2B5Nr">
                    <div className="geo-overview_template_geoGroupsContainer__oC37W">
                        {
                            cityContent?.industry_categories?.map((data, index) => (
                                <div className="geo-overview_template_geoGroup__gRjQW">
                                    <div className="geo-overview_template_geoGroupHeader__3nUY1">
                                        <div dangerouslySetInnerHTML={{ __html: data.icon }} />
                                        <span>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    {data.name}
                                                </font>
                                            </font>
                                        </span>
                                    </div>
                                    {
                                        data?.industry?.map((txt, ind) => (
                                            <a
                                                className="geo-overview_template_geoGroupItem__ojEL6"
                                                href={`/industry/list/${txt.industry_name}`}
                                            >
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>{txt.industry_name}</font>
                                                </font>
                                            </a>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    )
}