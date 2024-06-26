import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext";
import striptags from "striptags";

export const ProductsWebsiteFAQSection = () => {
    const { currentPageContent } = useContext(AppContext);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const half = Math.ceil(currentPageContent?.productfaq?.length / 2);
    const full = currentPageContent?.productfaq?.length;
    console.log('half:' + half + " " + "full:" + full);
    const handleSelectedIndex = (index) => {
        if (index === selectedIndex) {
            setSelectedIndex(-1);
        }
        else {
            setSelectedIndex(index)
        }
    }
    return (
        <>
            <div className="faq container">
                <div className="title-head">
                    <h2 style={{ textAlign: "center" }} _msttexthash="614237" _msthash="328">Frequently Asked Questions</h2>
                    <h3 _msttexthash="2344953" _msthash="329"> We answer the most frequently asked questions about website.</h3>
                </div>
                <div className="schema-faq wp-block-yoast-faq-block">
                    <div className="faq_wrapper_1 faq_wrapper">
                        {
                            currentPageContent?.productfaq.slice(0, half).map((value, index) => (
                                <div key={value.id} className="schema-faq-section wrap1" id="faq-question-1649772329233">
                                    <strong onClick={() => { handleSelectedIndex(value.id) }} className={value.id === selectedIndex ? "schema-faq-question active" : "schema-faq-question "}>{value.questions}
                                    </strong>
                                    <p className={value.id === selectedIndex ? "schema-faq-answer active" : "schema-faq-answer"} style={value.id === selectedIndex ? { display: 'block' } : { display: 'none' }}>{striptags(value?.answare).replace(/&nbsp;/g, '')}</p>
                                </div>

                            ))
                        }
                    </div>

                    <div className="faq_wrapper_2 faq_wrapper">
                        {
                            currentPageContent?.productfaq.slice(half).map((value, index) => (
                                <div key={value.id} className="schema-faq-section wrap1" id="faq-question-1649772329233">
                                    <strong onClick={() => { handleSelectedIndex(value.id) }} className={value.id === selectedIndex ? "schema-faq-question active" : "schema-faq-question "}>{value.questions}
                                    </strong>
                                    <p className={value.id === selectedIndex ? "schema-faq-answer active" : "schema-faq-answer"} style={value.id === selectedIndex ? { display: 'block' } : { display: 'none' }}>{striptags(value?.answare).replace(/&nbsp;/g, '')}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}