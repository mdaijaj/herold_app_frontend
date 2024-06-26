import { useContext, useEffect, useState } from "react";
import AppContext from "../../AppContext";
import { Helmet } from "react-helmet";

export const ContactFAQ = () => {
    const { contactDetails } = useContext(AppContext);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleSelectedIndex = (index) => {
        setSelectedIndex(selectedIndex === index ? -1 : index);
    };

    const half = Math.ceil(contactDetails?.contact_faq?.length / 2);
    useEffect(() => {
        console.log(contactDetails);
    }, [contactDetails])

    return (
        <>

            <Helmet>

                <meta property="og:title" content={contactDetails?.contact_page?.meta_title} />
                <meta property="og:description" content={contactDetails?.contact_page?.meta_description} />
                <meta property="og:type" content={contactDetails?.contact_page?.meta_tags} />


            </Helmet>
            <div className="faq container">
                <div className="title-head">
                    <h2 className="title-head-h">Frequently Asked Questions</h2>
                    <h3>We answer the most frequently asked questions about the product.</h3>
                </div>
                <div className="schema-faq wp-block-yoast-faq-block">
                    <div className="faq_wrapper_1 faq_wrapper">
                        {contactDetails?.contact_faq?.slice(0, half).map((data, index) => (
                            <div className="schema-faq-section wrap1" key={index}>
                                <strong className={selectedIndex === index ? "schema-faq-question active" : "schema-faq-question"} onClick={() => handleSelectedIndex(index)}>
                                    {data.questions}
                                </strong>
                                <p dangerouslySetInnerHTML={{ __html: data.answare }} className={selectedIndex === index ? "schema-faq-answer active" : "schema-faq-answer"} style={{ display: selectedIndex === index ? "block" : "none" }}>

                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="faq_wrapper_2 faq_wrapper">
                        {contactDetails?.contact_faq?.slice(half).map((data, index) => (
                            <div className="schema-faq-section wrap2" key={index + half}>
                                <strong className={selectedIndex === index + half ? "schema-faq-question active" : "schema-faq-question"} onClick={() => handleSelectedIndex(index + half)}>
                                    {data.questions}
                                </strong>
                                <p dangerouslySetInnerHTML={{ __html: data.answare }} className={selectedIndex === index + half ? "schema-faq-answer active" : "schema-faq-answer"} style={{ display: selectedIndex === index + half ? "block" : "none" }}>

                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
