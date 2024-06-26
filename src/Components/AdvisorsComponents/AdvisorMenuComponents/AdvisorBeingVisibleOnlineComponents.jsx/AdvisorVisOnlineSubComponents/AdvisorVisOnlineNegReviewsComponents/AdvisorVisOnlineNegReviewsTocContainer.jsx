import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../../../AppContext";

export const AdvisorVisOnlineNegReviewsTocContainer = () => {
    const [visible, setVisible] = useState(false);
    const { articlePageContent } = useContext(AppContext);
    useEffect(() => {

    }, [articlePageContent])
    return (
        <>
            <div class="ez-toc-title-container">
                <p class="ez-toc-title" _msttexthash="292773" _msthash="117">Table of contents</p>
                <span class="ez-toc-title-toggle">
                    <a onClick={() => { setVisible(!visible) }} class="ez-toc-pull-right ez-toc-btn ez-toc-btn-xs ez-toc-btn-default ez-toc-toggle" style={{ display: "inline" }}>
                        <i class="ez-toc-glyphicon ez-toc-icon-toggle">
                        </i>
                    </a>
                </span>
            </div>
            <nav _msthidden="20">
                <ul class="ez-toc-list ez-toc-list-level-1" style={visible ? { display: '' } : { display: 'none' }} _mstvisible="0">
                    {
                        articlePageContent?.article_card?.map((resonse, index) => (
                            <li class="ez-toc-page-1 ez-toc-heading-level-2" _mstvisible="1">
                                <a class="ez-toc-link ez-toc-heading-1" href={`#${resonse.heading}`} title={resonse.heading} _msttexthash="1756391" _msthash="118" _mstvisible="2">{resonse.heading}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}