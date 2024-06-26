import { useContext, useEffect } from "react"
import AppContext from "../../../../../../AppContext"

export const AdvisorVisOnlineNegReviewsElementorInlineItems = () => {
    const { articlePageContent } = useContext(AppContext);
    useEffect(() => {

    }, [articlePageContent])
    return (
        <>
            <ul class="elementor-inline-items elementor-icon-list-items elementor-post-info">
                <li class="elementor-icon-list-item elementor-inline-item" itemprop="about">
                    <span class="elementor-icon-list-icon"></span>
                    <span class="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-terms">
                        <span class="elementor-post-info__terms-list">
                            <span class="elementor-post-info__terms-list-item" _msttexthash="287482" _msthash="105"> {articlePageContent?.tags[0]} </span>
                        </span>
                    </span>
                </li>

                <li class="elementor-icon-list-item elementor-inline-item" itemprop="datePublished">
                    <span class="elementor-icon-list-icon"></span>
                    <span class="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date" _msttexthash="73177" _msthash="106">{articlePageContent?.tags[1]}</span>
                </li>
                <li class="elementor-icon-list-item elementor-inline-item" itemprop="author">
                    <span class="elementor-icon-list-icon"></span>
                    <span class="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-author">
                        <font _mstmutation="1" _msttexthash="620412" _msthash="107"><span class="elementor-post-info__item-prefix" _mstmutation="1" _istranslated="1">{articlePageContent?.tags[2]}</span></font></span>
                </li>
            </ul>
        </>
    )
}