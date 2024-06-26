import { useContext, useEffect } from "react"
import AppContext from "../../../../AppContext"

export const AdvisorBeingVisibleOnlineFirstContainer = () => {
    const { advisorPageContent } = useContext(AppContext);
    useEffect(() => {
        console.log(advisorPageContent);
    }, [advisorPageContent])
    return (
        <div class="container">
            <div id="bcn_widget-2" class="widget_breadcrumb_navxt">
                <div
                    className="breadcrumbs"
                    vocab="https://schema.org/"
                    typeof="BreadcrumbList"
                >
                    {/* Breadcrumb NavXT 6.6.0 */}
                    <span property="itemListElement" typeof="ListItem">
                        <span property="name" className="archive taxonomy category current-item">
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>
                                    {advisorPageContent?.counselor?.name}
                                </font>
                            </font>
                        </span>

                    </span>
                    <img src="https://www.herold.at/ratgeber/wp-content/uploads/2021/08/slide_right.svg" />
                    <span property="itemListElement" typeof="ListItem">
                        <a
                            property="item"
                            typeof="WebPage"
                            title="Go to Gradimo Skupaj Guide."
                            href="/adv"
                            className="home"
                        >
                            <span property="name">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>Home</font>
                                </font>
                            </span>
                        </a>
                    </span>
                </div>

            </div>
            <div class="entry-content">
                <div class="flex_wrapper wide_flex_wrapper ratgeber_heading archive_head">
                    <div class="text_header">
                        <div>
                            <h1>{advisorPageContent?.counselor?.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}