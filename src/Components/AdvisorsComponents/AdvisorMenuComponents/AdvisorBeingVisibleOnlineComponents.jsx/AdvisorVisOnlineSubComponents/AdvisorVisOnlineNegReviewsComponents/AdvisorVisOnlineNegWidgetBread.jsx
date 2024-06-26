import { useContext, useEffect } from "react"
import AppContext from "../../../../../../AppContext"
import { useParams } from "react-router";
import { get } from "jquery";

export const AdvisorVisOnlineNegReviewsWidgetBreadcrumb = () => {
    const { setFilteredArticlesIdList, setFilteredEditorIdList, setFilteredArticlesList, setArticleIdList, articleIdList, moreArticlesList } = useContext(AppContext);
    const { id, page } = useParams();


    useEffect(() => {
        console.log(articleIdList);
        const randomThreeExcept = async (list, excludedValue) => {
            console.log(list);
            const filteredList = await list.filter(item => Number(item) !== Number(excludedValue));
            console.log("filtered list:" + filteredList)
            if (filteredList.length >= 2) {
                const shuffledList = await filteredList.sort(() => Math.random() - 0.5);
                console.log(shuffledList);
                setFilteredArticlesIdList(shuffledList);
            }
        }

        randomThreeExcept(articleIdList, page);




    }, [articleIdList])
    return (
        <>
            <div id="bcn_widget-2" class="widget_breadcrumb_navxt">
                <div class="breadcrumbs" vocab="https://schema.org/" typeof="BreadcrumbList">
                    <span typeof="ListItem" itemprop="itemListElement" itemscope="">
                        <span itemprop="item" typeof="WebPage" title={page} itemid="https://www.herold.at/ratgeber/online-praesenz/umgang-negative-bewertungen/" itemscope="" itemtype="https://schema.org/WebPage">
                            <span itemprop="name" class="post post-post current-item" _msttexthash="2601651" _msthash="101">{page}</span>
                        </span>
                    </span>
                    <img src="https://www.herold.at/ratgeber/wp-content/uploads/2021/08/slide_right.svg" />
                    <span property="itemListElement" typeof="ListItem">
                        <a property="item" typeof="WebPage" title={id} href={`/adv/${id}`} class="taxonomy category">
                            <span property="name" _msttexthash="287482" _msthash="102">{id}</span></a>
                        <meta property="position" content="2" />
                    </span>
                    <img src="https://www.herold.at/ratgeber/wp-content/uploads/2021/08/slide_right.svg" />
                    <span property="itemListElement" typeof="ListItem">
                        <a property="item" typeof="WebPage" title="Go to Gradimo Skupaj Advisor." href="/adv" class="home">
                            <span property="name" _msttexthash="43979" _msthash="103">Home</span></a><meta property="position" content="3" />
                    </span>
                </div>
            </div>
        </>
    )
}