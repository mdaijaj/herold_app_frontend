import { useContext, useEffect } from "react"
import AppContext from "../../../../../../AppContext"

export const AdvisorVisOnlineNegReviewsHead = () => {
    const { articlePageContent, filteredArticlesIdList, articleIdList, setFilteredArticlesList, moreArticlesList } = useContext(AppContext);

    useEffect(() => {

        const getFilteredArticlesList = async () => {

            const mappedList = await filteredArticlesIdList?.map(number => {
                return moreArticlesList?.find(obj => Number(obj.id) === Number(number));
            });
            console.log(mappedList);

            setFilteredArticlesList(mappedList);
        }
        getFilteredArticlesList();

    }, [filteredArticlesIdList])
    return (
        <>
            <h1 class="heroldblog_single_title" _msttexthash="2601651" _msthash="104">{articlePageContent?.article_title}</h1>
        </>
    )
}