import { useContext } from "react"
import AppContext from "../../../../AppContext"

export const ProductsGoogleSearchAdvertisingFAQBlock = () => {
    const { isMobile } = useContext(AppContext);
    return (
        <>
            {
                isMobile ?
                    <>
                        <div className="faq container">
                            <div className="title-head">
                                <h2>Frequently Asked Questions</h2>
                                <h3>We answer the most frequently asked questions about Google search advertising.</h3>
                            </div>
                            <div className="schema-faq wp-block-yoast-faq-block">
                                <div className="faq_wrapper_1 faq_wrapper">
                                    <div className="schema-faq-section wrap1" id="faq-question-1651058776535">
                                        <strong className="schema-faq-question">Why should my campaigns be set up by Gradimo Skupaj experts?</strong>
                                        <p className="schema-faq-answer">Unsere internen Analysen zeigen, dass von uns eingerichtete Kampagnen durchschnittlich 30% effektiver sind als selbsteingerichtete Kampagnen.</p>
                                    </div>
                                    <div className="schema-faq-section wrap1" id="faq-question-1649850837185">
                                        <strong className="schema-faq-question">Who optimizes my campaigns?</strong>
                                        <p className="schema-faq-answer">Unsere Systeme sorgen zusammen mit unseren zertifizierten Kampagnen-Manager:innen dafür, dass eine Kampagne mit Fortdauer der Laufzeit immer besser wird.</p>
                                    </div>
                                    <div className="schema-faq-section wrap1" id="faq-question-1649850842834">
                                        <strong className="schema-faq-question">Why is there a setup fee?</strong>
                                        <p className="schema-faq-answer">Aufgrund des Aufwands und der Komplexität bei der Kampagnen-Einrichtung verrechnen wir eine einmalige Setup-Gebühr. Sie ist abhängig von der Größe und dem Umfang der Kampagne.</p>
                                    </div>
                                    <div className="schema-faq-section wrap1" id="faq-question-1649850854354">
                                        <strong className="schema-faq-question">What data can be measured to determine campaign success?</strong>
                                        <p className="schema-faq-answer">Standardmäßig messen wir Anrufe, Besuche der Website und schriftliche Kontaktaufnahmen (Email und Website) – sowie Kaufabschlüsse und Buchungen, falls vorhanden. Allerdings können wir auf Wunsch auch weitere Erfolgsfaktoren messen.</p>
                                    </div>
                                </div>
                                <div className="faq_wrapper_2 faq_wrapper">
                                    <div className="schema-faq-section wrap2" id="faq-question-1649850861336">
                                        <strong className="schema-faq-question">Is it possible to work with existing Google campaigns?</strong>
                                        <p className="schema-faq-answer">Wir setzen grundsätzlich eine neue Kampagne für jede:n Kund:in auf, können allerdings Information aus einem bestehenden Account verwenden, um aufbauend auf der bisherigen Performance das Maximum herauszuholen.</p>
                                    </div>
                                    <div className="schema-faq-section wrap2" id="faq-question-1649850869233">
                                        <strong className="schema-faq-question">Is it possible to change a campaign that has been set up?</strong>
                                        <p className="schema-faq-answer">Ja, unsere Kund:innen können jederzeit das Expert:innen-Team kontaktieren und Änderungswünsche mitteilen. Gleichzeitig führen wir abhängig vom Paket auch Service-Anrufe durch, um uns mit dir über den Erfolg der Kampagne zu unterhalten.</p>
                                    </div>
                                    <div className="schema-faq-section wrap2" id="faq-question-1649850875841">
                                        <strong className="schema-faq-question">Why do clicks only play a minor role in Herold's Google advertising campaigns?</strong>
                                        <p className="schema-faq-answer">Unsere Erfahrung zeigt, dass die Optimierung auf kaufrelevante Handlungen für unsere Kund:innen den größtmöglichen wirtschaftlichen Erfolg bietet.</p>
                                    </div>
                                    <div className="schema-faq-section wrap2" id="faq-question-1649850881865">
                                        <strong className="schema-faq-question">Do I have a personal contact person?</strong>
                                        <p className="schema-faq-answer">Ja, du wirst von einem Team von Expert:innen betreut.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="faq container">
                            <div className="title-head">
                                <h2 >Frequently Asked Questions</h2>
                                <h3>We answer the most frequently asked questions about Google search advertising.</h3>
                            </div>
                            <div className="schema-faq wp-block-yoast-faq-block">
                                <div className="faq_wrapper_1 faq_wrapper">
                                    <div className="schema-faq-section wrap1" id="faq-question-1651058776535">
                                        <strong className="schema-faq-question" >Why should my campaigns be set up by Gradimo Skupaj experts?</strong>
                                        <p className="schema-faq-answer">Unsere internen Analysen zeigen, dass von uns eingerichtete Kampagnen durchschnittlich 30% effektiver sind als selbsteingerichtete Kampagnen.</p>
                                    </div>
                                    <div className="schema-faq-section wrap1" id="faq-question-1649850837185">
                                        <strong className="schema-faq-question" >Who optimizes my campaigns?</strong>
                                        <p className="schema-faq-answer">Unsere Systeme sorgen zusammen mit unseren zertifizierten Kampagnen-Manager:innen dafür, dass eine Kampagne mit Fortdauer der Laufzeit immer besser wird.</p>
                                    </div>
                                    <div className="schema-faq-section wrap1" id="faq-question-1649850842834">
                                        <strong className="schema-faq-question" >Why is there a setup fee?</strong>
                                        <p className="schema-faq-answer">Aufgrund des Aufwands und der Komplexität bei der Kampagnen-Einrichtung verrechnen wir eine einmalige Setup-Gebühr. Sie ist abhängig von der Größe und dem Umfang der Kampagne.</p>
                                    </div>
                                    <div className="schema-faq-section wrap1" id="faq-question-1649850854354">
                                        <strong className="schema-faq-question" >What data can be measured to determine campaign success?</strong>
                                        <p className="schema-faq-answer">Standardmäßig messen wir Anrufe, Besuche der Website und schriftliche Kontaktaufnahmen (Email und Website) – sowie Kaufabschlüsse und Buchungen, falls vorhanden. Allerdings können wir auf Wunsch auch weitere Erfolgsfaktoren messen.</p>
                                    </div>
                                </div>
                                <div className="faq_wrapper_2 faq_wrapper">
                                    <div className="schema-faq-section wrap2" id="faq-question-1649850861336">
                                        <strong className="schema-faq-question" >Is it possible to work with existing Google campaigns?</strong>
                                        <p className="schema-faq-answer">Wir setzen grundsätzlich eine neue Kampagne für jede:n Kund:in auf, können allerdings Information aus einem bestehenden Account verwenden, um aufbauend auf der bisherigen Performance das Maximum herauszuholen.</p>
                                    </div>
                                    <div className="schema-faq-section wrap2" id="faq-question-1649850869233">
                                        <strong className="schema-faq-question" >Is it possible to change a campaign that has been set up?</strong>
                                        <p className="schema-faq-answer">Ja, unsere Kund:innen können jederzeit das Expert:innen-Team kontaktieren und Änderungswünsche mitteilen. Gleichzeitig führen wir abhängig vom Paket auch Service-Anrufe durch, um uns mit dir über den Erfolg der Kampagne zu unterhalten.</p>
                                    </div>
                                    <div className="schema-faq-section wrap2" id="faq-question-1649850875841">
                                        <strong className="schema-faq-question" >Why do clicks only play a minor role in Herold's Google advertising campaigns?</strong>
                                        <p className="schema-faq-answer">Unsere Erfahrung zeigt, dass die Optimierung auf kaufrelevante Handlungen für unsere Kund:innen den größtmöglichen wirtschaftlichen Erfolg bietet.</p>
                                    </div>
                                    <div className="schema-faq-section wrap2" id="faq-question-1649850881865">
                                        <strong className="schema-faq-question" >Do I have a personal contact person?</strong>
                                        <p className="schema-faq-answer">Ja, du wirst von einem Team von Expert:innen betreut.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}