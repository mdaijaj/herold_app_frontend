import { useEffect } from "react"

export const ForgotPswdMain = () => {
    useEffect(() => {
        const head_5 = document.head;
        const link_5 = document.createElement("link");
        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/forgotpswd/forgothead.css";
        link_5.media = "all"
        head_5.appendChild(link_5);
    }, [])
    return (
        <>
            <div id="fullBG">
                <div class="container" id="container-main">
                    <section id="login" class="login wrapper">
                        <div class="floatLook">
                            <form id="form_login" name="form_login" action="j_spring_security_check" method="POST" style={{ display: "none" }} _msthidden="11">
                                <input name="redirectUrl" type="hidden" value="" />
                                <div class="row" _msthidden="4">
                                </div>
                                <hr />
                                <div _msthidden="4">
                                    <div class="col-24" _msthidden="1">
                                        <input class="form-control" type="text" id="username" name="j_username" required="required" maxlength="180" value="" autofocus="autofocus" placeholder="Benutzername / E-Mail" autocomplete="username" _msthidden="A" _mstplaceholder="368095" _msthash="54" />
                                        <div class="validate-pos"></div>
                                    </div>
                                    <div class="col-24" _msthidden="1">
                                        <input class="form-control" type="password" id="password" name="j_password" required="required" maxlength="180" value="" placeholder="Passwort" autocomplete="current-password" _msthidden="A" _mstplaceholder="120484" _msthash="55" />
                                        <div class="validate-pos"></div>
                                    </div>
                                    <div class="col-24 checkbox" _msthidden="1">
                                        <label class="checkboxContainer" _msthidden="1">
                                            <span _msttexthash="341861" _msthidden="1" _msthash="56">Angemeldet bleiben</span>
                                            <input type="checkbox" name="keepLoggedIn" id="keepLoggedIn" value="true" checked="checked" class="not-empty" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-24" _msthidden="1">
                                        <p class="agbText" _msttexthash="11917789" _msthidden="1" _msthash="57">Mit der Anmeldung stimmen Sie den <a href="https://www.herold.at/nutzungsbedingungen/" target="_blank" rel="noopener" title="Öffnet neues Fenster">Allgemeinen Nutzungsbedingungen fürGradimo Skupaj  Portale</a> und der <a href="https://www.herold.at/datenschutzerklaerung/" target="_blank" rel="noopener" title="Öffnet neues Fenster">Datenschutzerklärung</a> in der aktuellen Fassung zu. </p>
                                    </div>
                                </div>
                                <button type="submit" class="btn-hbd blue fullWidth" data-action="Anmelden" data-label="Herold" _msttexthash="111371" _msthidden="1" _msthash="58">Anmelden</button>
                                <div class="d-flex justify-content-between small mt-3" _msthidden="2">
                                    <div class="forgotLink" _msthidden="1">
                                        <a href="javascript:void(0);" class="txt-besidebtn" id="pwd-forgot" _msttexthash="381472" _msthidden="1" _msthash="59">Passwort vergessen?</a>
                                    </div>
                                    <div class="registerLink" _msthidden="1">
                                        <a href="/register.do?referrer=https://www.herold.at/meinherold/home.do" target="_top" _msttexthash="731705" _msthidden="1" _msthash="60">Jetzt kostenlos registrieren!</a>
                                    </div>
                                </div>
                            </form>
                            <form id="send_password" class="hideit" action="/createPasswordMail.do" method="POST" novalidate="novalidate" style={{ display: "block" }}>
                                <script src="https://www.google.com/recaptcha/api.js"></script>
                                <h2 _msttexthash="262561" _msthash="61">Forgot Password</h2>
                                <div class="row">
                                    <div class="col-24">
                                        <input class="form-control" name="email" type="text" id="useremail" required="required" maxlength="180" placeholder="Username or email address" _mstplaceholder="813410" _msthash="62" />
                                        <div class="validate-pos"></div>
                                    </div>
                                </div>
                                <div class="row">

                                </div>
                                <button type="submit" class="btn-hbd blue fullWidth mt-3" data-action="Anmelden" data-label="Herold" _msttexthash="92950" _msthash="63">Send off</button>
                                <div class="d-flex justify-content-between small mt-3">
                                    <div class="forgotLink">
                                        <a href="/login" class="txt-besidebtn" id="back-login" _msttexthash="180180" _msthash="64">Back to login</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}