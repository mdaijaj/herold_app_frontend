import { useEffect, useState } from "react"

export const ProductsOnlineCompleteFAQSection = () => {
    const [index, setIndex] = useState(-1);
    useEffect(() => {

    }, [index])
    return (
        <>
            <div className="faq container">
                <div className="title-head">
                    <h2 style={{ textAlign: "center" }} _msttexthash="614237" _msthash="328">Frequently Asked Questions</h2>
                    <h3 _msttexthash="2344953" _msthash="329"> We answer the most frequently asked questions about website.</h3>
                </div>
                <div className="schema-faq wp-block-yoast-faq-block">
                    <div class="faq_wrapper_1 faq_wrapper">
                        <div onClick={() => { if (index === 0) { setIndex(-1) } else { setIndex(0) } }} class="schema-faq-section wrap1" id="faq-question-1649227971015">
                            <strong className={index === 0 ? "schema-faq-question active" : "schema-faq-question"} _msttexthash="1235975" _msthash="198">What feature does Online Complete offer me?</strong>
                            <p className={index === 0 ? "schema-faq-answer active" : "schema-faq-answer"} style={index === 0 ? { display: 'block' } : {}} _msttexthash="207561302" _msthidden="1" _msthash="199">Neben der zentralen Verwaltung deiner Daten in nur einem System, bietet Online Complete noch viele weitere Vorteile. Online Complete gibt dir die Möglichkeit, auf bestimmten Plattformen Postings abzusetzen, wenn du willst auch zeitgesteuert. Mit dem Bewertungs-Manager kannst du dich benachrichtigen lassen, sobald für dein Unternehmen neue Bewertungen abgegeben wurden. Dabei kannst du festlegen, ob du in Echtzeit informiert werden möchtest – täglich, wöchentlich oder monatlich. Für weitere Details kontaktiere uns und wir helfen dir unverbindlich weiter.</p>
                        </div>
                        <div onClick={() => { if (index === 1) { setIndex(-1) } else { setIndex(1) } }} class="schema-faq-section wrap1" id="faq-question-1649227987748">
                            <strong className={index === 1 ? "schema-faq-question active" : "schema-faq-question"} _msttexthash="1171157" _msthash="200">What data is managed with Online Complete?</strong>
                            <p className={index === 1 ? "schema-faq-answer active" : "schema-faq-answer"} style={index === 1 ? { display: 'block' } : {}} _msttexthash="45040606" _msthidden="1" _msthash="201">Mit Online Complete kannst du sämtliche Informationen zu deinem Unternehmen verwalten, auch auf Social-Media-Kanälen. Angefangen von deinen Kontaktdaten bis hin zu Öffnungszeiten, Unternehmens-Details, Event-Informationen, Fotos uvm. Bei Fragen beraten wir dich gerne und unverbindlich.</p> </div>
                        <div onClick={() => { if (index === 2) { setIndex(-1) } else { setIndex(2) } }} class="schema-faq-section wrap1" id="faq-question-1649227998157">
                            <strong className={index === 2 ? "schema-faq-question active" : "schema-faq-question"} _msttexthash="1706016" _msthash="202">For which size of company is Online Complete useful?</strong> <p className={index === 2 ? "schema-faq-answer active" : "schema-faq-answer"} style={index === 2 ? { display: 'block' } : {}} _msttexthash="44676931" _msthidden="1" _msthash="203">Online Complete ist für Unternehmen jeglicher Größe geeignet. Ganz egal, ob es sich um ein Einzelunternehmen oder einen Filialisten handelt. Auch mehrere hundert Standorte lassen sich mit Online Complete übersichtlich verwalten. Unsere Expert:innen beraten dich gerne und unverbindlich.</p> </div>
                        <div onClick={() => { if (index === 3) { setIndex(-1) } else { setIndex(3) } }} class="schema-faq-section wrap1" id="faq-question-1649228005480">
                            <strong className={index === 3 ? "schema-faq-question active" : "schema-faq-question"} _msttexthash="372502" _msthash="204">Who collects my data?</strong>
                            <p className={index === 3 ? "schema-faq-answer active" : "schema-faq-answer"} style={index === 3 ? { display: 'block' } : {}} _msttexthash="28482506" _msthidden="1" _msthash="205">Deine Daten werden im Rahmen eines Welcome-Calls von eine:r Gradimo Skupaj -Mitarbeiter:in erfasst. Dabei wirst du auch um die Übersendung von Fotos bzw. Logos gebeten, die auf Gradimo Skupaj .at und den angebundenen Plattformen ausgespielt werden.</p>
                        </div>
                    </div>
                    <div onClick={() => { if (index === 0) { setIndex(-1) } else { setIndex(0) } }} class="faq_wrapper_2 faq_wrapper">
                        <div class="schema-faq-section wrap2" id="faq-question-1649228016405">
                            <strong className={index === 0 ? "schema-faq-question active" : "schema-faq-question"} _msttexthash="1198548" _msthash="206">On which portals will my data be displayed?</strong>
                            <p className={index === 0 ? "schema-faq-answer active" : "schema-faq-answer"} style={index === 0 ? { display: 'block' } : {}} _msttexthash="158835612" _msthidden="1" _msthash="207">Die folgenden Portale befinden sich im Online Complete Netzwerk: Gradimo Skupaj .at, Google My BusinessTM, Facebook, Instagram, TripAdvisor, Snapchat, Google ReviewsTM, Amazon AlexaTM, Yelp, TomTom, Tupalo, Foursquare, Cylex, iGlobal, Infobel, HERE, Navmii, Pitney Bowes, Bing, Arztsuche24, Bauwohnwelt.at, Apple, Factual, Waze, Brownbook.net, Yalwa, Stadtbranchenbuch, Where To?, Baidu Maps (Overseas), Yandex, HotFrog, FindOpen und Around Me. Außerdem kann dein Unternhmen in den Navigationssystemen von über 50 der größten Automobilhersteller gefunden werden.</p>

                        </div>
                        <div onClick={() => { if (index === 0) { setIndex(-1) } else { setIndex(0) } }} class="schema-faq-section wrap2" id="faq-question-1651586006713">
                            <strong className={index === 0 ? "schema-faq-question active" : "schema-faq-question"} _msttexthash="1259336" _msthash="208">Will my business be found in voice searches?</strong>
                            <p className={index === 0 ? "schema-faq-answer active" : "schema-faq-answer"} style={index === 0 ? { display: 'block' } : {}} _msttexthash="26456053" _msthidden="1" _msthash="209">Mit der zunehmenden Beliebtheit von Sprachsuchen müssen Firmen auch hier aufrufbar sein. Die meistgenutzten Sprachassistenten AlexaTM, Siri® und Google HomeTM greifen bei Suchanfragen auf die Daten von Online Complete zu.</p> </div>
                        <div onClick={() => { if (index === 0) { setIndex(-1) } else { setIndex(0) } }} class="schema-faq-section wrap2" id="faq-question-1651586075764">
                            <strong className={index === 0 ? "schema-faq-question active" : "schema-faq-question"} _msttexthash="4794764" _msthash="210">I don't have time to worry about maintaining my company data. What service does Gradimo Skupaj offer?</strong> <p className={index === 0 ? "schema-faq-answer active" : "schema-faq-answer"} style={index === 0 ? { display: 'block' } : {}} _msttexthash="62992306" _msthidden="1" _msthash="211">Das Paket Online Complete Plus beinhaltet das Gradimo Skupaj Service-Paket. Dabei kümmert sich Gradimo Skupaj auch um deinen Google My BusinessTM Eintrag und befüllt Online Complete mit all deinen Informationen für dich. Du hast die Möglichkeit alle Änderungen von Gradimo Skupaj durchführen zu lassen. Du kannst dich also zurücklehnen und uns die Arbeit überlassen.</p> </div><div class="schema-faq-section wrap2" id="faq-question-1651586079136"><strong class="schema-faq-question" _msttexthash="680784" _msthash="212">How does Online Complete work?</strong> <p class="schema-faq-answer" _msttexthash="195138814" _msthidden="1" _msthash="213">Online Complete gibt dir die volle Kontrolle über deine Daten im Internet. Alle Informationen zu deinem Unternehmen werden zentral erfasst und gepflegt. Mit einem Klick werden diese Daten auf alle angebundenen Online-Portale ausgespielt. Alle Änderungen werden somit in Echtzeit auf die Portale übertragen. Du sparst somit also nicht nur viel Zeit, sondern schließt auch aus, dass falsche Daten über dein Unternehmen online sind. Online Complete schützt deine Daten außerdem vor ungewollten Manipulationen durch Dritte. Weitere Details erfährst du in einem unverbindlichen Gespräch mit unseren Expert:innen.</p> </div></div>
                </div>
            </div>
        </>
    )
}