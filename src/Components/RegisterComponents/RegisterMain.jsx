import { useContext, useEffect, useState } from "react"
import AppContext from "../../AppContext";
import axios from 'axios';


export const RegisterMain = () => {
    const { baseBackendRoute, baseFrontendRoute, gradimoContact } = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(false);

    const handleSubmit = async () => {
        console.log(email + " " + password + " " + userName);
        await axios.post(`${baseBackendRoute}/api/v1/account/register/`, {
            'email': email,
            'username': userName,
            'password': password,
            'tc': true,
            'base_url': `${baseFrontendRoute}/pswd-reset`
        })
            .then((res) => {
                console.log(res.data);
                setResponse(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }



    useEffect(() => {
        console.log(gradimoContact);
        const head_5 = document.head;
        const link_5 = document.createElement("link");
        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/register/register.css";
        link_5.media = "all"
        head_5.appendChild(link_5);
    }, [])
    return (
        <>
            <div id="fullBG">
                <div class="container" id="container-main">
                    <section id="register">
                        <div class="floatLook">
                            <div class="container">
                                <div id="registerform">
                                    {/* <form id="registerform" name="register" action="/register.do" autocomplete="off" method="POST" novalidate="novalidate"> */}
                                    <div class="row">
                                        <div class="col-24">
                                            <h2 _msttexthash="400673" _msthash="50">Register now for free!</h2>
                                        </div>
                                    </div>
                                    <div class="row">
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-24" data-title="Bitte füllen Sie dieses Feld aus!" data-errors="Bitte füllen Sie dieses Feld aus!" data-original-title="" title="" aria-describedby="tooltip110545">
                                            <input class="form-control validate-unique validate-error" onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" id="email" name="email" maxlength="180" required="required" autocomplete="new-password" autofocus="autofocus" placeholder="E-mail address" data-toggle="tooltip" data-title="Der Benutzername wird automatisch anhand der E-Mail-Adresse befüllt (bis zum @-Zeichen). Der Benutzername kann gegebenenfalls noch geändert werden." data-original-title="" title="" _mstplaceholder="230984" _msthash="55" />
                                        </div>
                                        <div class="validate-pos"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-24 col-md-12">
                                            <div class="mr-md-1">
                                                <input class="form-control" type="text" id="login-register" name="login" data-minlength="5" maxlength="30" required="required" autocomplete="new-password" placeholder="Username" value={userName} onChange={(e) => { setUserName(e.target.value) }} data-toggle="tooltip" data-title="Mindestens 5 Zeichen ohne Leerzeichen. Der Benutzername wird z.B. neben Ihrer Bewertung angezeigt." data-original-title="" title="" _mstplaceholder="207376" _msthash="56" />
                                            </div>
                                            <div class="validate-pos"></div>
                                        </div>
                                        <div class="col-24 col-md-12">
                                            <div class="ml-md-1">
                                                <input class="form-control validate-unique" type="password" id="password" name="password" data-minlength="8" maxlength="40" required="required" autocomplete="new-password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} data-toggle="tooltip" data-title="Mindestens 8 Zeichen. Ein Buchstabe und eine Ziffer bzw. Sonderzeichen (=,:?@!€$()#%&amp;_) müssen enthalten sein." data-original-title="" title="" aria-autocomplete="list" _mstplaceholder="120484" _msthash="57" />
                                            </div>
                                            <div class="validate-pos"></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-24 checkbox">
                                            <label class="checkboxContainer">
                                                <span class="agbText" _msttexthash="27613300" _msthash="58">Yes, I agree with the <a href="/legal/3/" target="_blank" rel="noopener" title="Öffnet neues Fenster" _istranslated="1">terms and conditions of use for Gradimo Skupaj Portals</a>. Regarding the use of my personal data, I have read and agree to the <a href="/legal/4/" rel="noopener" target="_blank" title="Öffnet neues Fenster" _istranslated="1">privacy policy</a>. I can revoke this consent at any time by sending an e-mail to <a href={`mailto:${gradimoContact?.email}`} _istranslated="1">{gradimoContact?.email}</a>. </span>
                                                <input type="checkbox" name="agb" id="agb" required="required" class="not-empty" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div class="validate-pos"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-24 checkbox">
                                            <label class="checkboxContainer">
                                                <span class="agbText" _msttexthash="73157643" _msthash="59">I give my consent that my data required for the user account (including e-mail address) will be used for advertising and marketing purposes, including e-mail marketing, as well as for market research purposes only for Gradimo Skupaj. I confirm my agreement to the <a href="/legal/4/" target="_blank" rel="noopener" title="Öffnet neues Fenster" _istranslated="1">privacy policy</a>. This consent can be revoked at any time in the Gradimo Skupaj User Zone or by sending an e-mail to <a href={`mailto:${gradimoContact?.email}`} _istranslated="1">{gradimoContact?.email}</a>. </span>
                                                <input type="checkbox" name="advertisementEmail" id="advertisementEmail" class="not-empty" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div class="validate-pos"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-24 checkbox">
                                            <label class="checkboxContainer">
                                                <span class="agbText" _msttexthash="76051118" _msthash="60">I give my consent that my data required for the user account (including telephone number) will be used for telephone marketing purposes (calls and SMS for advertising purposes) as well as for market research purposes only for Gradimo Skupaj. I confirm my agreement to the <a href="/legal/4/" target="_blank" rel="noopener" title="Öffnet neues Fenster" _istranslated="1">privacy policy</a>. This consent can be revoked at any time in the Gradimo Skupaj User Zone or by sending an e-mail to <a href={`mailto:${gradimoContact?.email}`} _istranslated="1">{gradimoContact?.email}</a>. </span>
                                                <input type="checkbox" name="advertisementPhone" id="advertisementPhone" class="not-empty" />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        <div class="validate-pos"></div>
                                    </div>

                                    <div class="row">

                                        <div class="validate-pos"></div>
                                    </div>
                                    <button type="submit" onClick={handleSubmit} class="btn-hbd blue fullWidth mt-3" data-action="Jetzt Registrieren" data-label="Herold" _msttexthash="186862" _msthash="61">Register now</button>

                                    {
                                        response ?
                                            <div class="row">
                                                <div class="col-24">
                                                    <p class="status success" style={{ color: 'green' }}><font style={{ verticalAlign: "inherit" }}><font style={{ verticalAlign: "inherit" }}>An email confirming the new address has been sent!</font></font></p>
                                                </div>
                                            </div>
                                            :
                                            ""
                                    }

                                    <div class="row mt-3">
                                        <div class="col registerLink">
                                            <a href="/login" target="_top" _msttexthash="369993" _msthash="62">Already registered?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section id="register-confirm" class="register-confirm wrapper hideit" _msthidden="4">
                        <div class="row" _msthidden="4">
                            <div class="col-24" _msthidden="4">
                                <h2 class="top" _msttexthash="1128998" _msthidden="1" _msthash="63">Herzlichen Dank für Ihre Registrierung</h2>
                                <p _msttexthash="4624555" _msthidden="1" _msthash="64">Sie erhalten nun einen Bestätigungslink per E-Mail zugeschickt (gültig für 24 Stunden).</p>
                                <p _msttexthash="3105128" _msthidden="1" _msthash="65">Bitte klicken Sie auf diesen Link, um die Registrierung abzuschließen!</p>
                                <p style={{ marginTop: "1em" }} _msttexthash="22787583" _msthidden="1" _msthash="66">Für Fragen steht Ihnen der Gradimo Skupaj Kundenservice von Montag bis Donnerstag 08:00-17:00 Uhr und Freitags 08:00-14:00 Uhr telefonisch unter <a href="tel:+4350485333">+43 (0)5 0485-333</a> oder per E-Mail unter <a href="mailto:kundenservice@Gradimoskupaj .at">kundenservice@Gradimoskupaj .at</a> zur Verfügung. </p>
                            </div>
                        </div>
                    </section> */}

                </div>
            </div>
        </>
    )
}