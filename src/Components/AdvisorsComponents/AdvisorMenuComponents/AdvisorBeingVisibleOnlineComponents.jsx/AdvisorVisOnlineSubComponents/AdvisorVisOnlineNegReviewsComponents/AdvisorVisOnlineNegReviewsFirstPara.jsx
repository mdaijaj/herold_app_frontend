import { useContext, useEffect } from "react"
import AppContext from "../../../../../../AppContext"
import striptags from "striptags";
import Parser from 'html-react-parser';
import { useParams } from "react-router";
export const AdvisorVisOnlineNegReviewsFirstPara = () => {
    const { articlePageContent, filteredArticlesList } = useContext(AppContext);
    const { articleIdList } = useContext(AppContext);
    const { page } = useParams();
    useEffect(() => {
        console.log(filteredArticlesList);
    }, [articleIdList, articlePageContent, filteredArticlesList])
    return (
        <>
            <p><strong _msttexthash="136081647" _msthash="116">{
                Parser(striptags(articlePageContent?.short_description))
            }</strong> </p>
        </>
    )
}