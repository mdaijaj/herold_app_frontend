import { useContext, useEffect, useState } from "react"
import AppContext from "../../AppContext"
import axios from "axios";
import { useNavigate } from "react-router";

export const LoginMain = () => {
    const { baseBackendRoute, cookies, setCookie } = useContext(AppContext);
    const [errorMsg, setErrorMsg] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const handleSubmit = async () => {
        await axios.post(`${baseBackendRoute}/api/v1/account/login/`, {
            'email': email,
            'password': password
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setCookie('token', decodeURI(`token ${res.data.token}`))
                navigate('/user-profile')

            })
            .catch((err) => {
                console.log("err below");
                console.log(err);
                setErrorMsg(err?.response?.data?.message);
            })
    }
    return (
        <>
            <div id="fullBG">
                <div class="container" id="container-main">
                    <section id="login" class="login wrapper">
                        <div class="floatLook">
                            {/* <form id="form_login" method="POST"> */}
                            <div id="form_login">
                                <input name="redirectUrl" type="hidden" value="" />
                                <div class="row">
                                    <h1>Login</h1>
                                </div>
                                <hr />
                                <div className="col-24">
                                    <p className="warning">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                {errorMsg}
                                            </font>
                                        </font>
                                    </p>
                                </div>

                                <div>
                                    <div class="col-24">
                                        <input class="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" id="username" name="j_username" required="required" maxlength="180" autofocus="autofocus" placeholder="Username / Email" autocomplete="username" _mstplaceholder="368095" _msthash="54" />
                                        <div class="validate-pos"></div>
                                    </div>
                                    <div class="col-24">
                                        <input class="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" id="password" name="j_password" required="required" maxlength="180" placeholder="Password" autocomplete="current-password" _mstplaceholder="120484" _msthash="55" />
                                        <div class="validate-pos"></div>
                                    </div>
                                    <div class="col-24 checkbox">
                                        <label class="checkboxContainer">
                                            <span _msttexthash="154804" _msthash="56">Remember me</span>
                                            <input type="checkbox" name="keepLoggedIn" id="keepLoggedIn" value="true" checked="checked" class="not-empty" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="col-24">
                                        <p class="agbText" _msttexthash="7868757" _msthash="57">By registering, you agree to the <a href="/legal/4/" target="_blank" rel="noopener" title="Öffnet neues Fenster" _istranslated="1">General Terms and Conditions of Use for Gradimo Skupaj Portals</a> and the <a href="/legal/3/" target="_blank" rel="noopener" title="Öffnet neues Fenster" _istranslated="1">Privacy Policy</a> as amended. </p>
                                    </div>
                                </div>
                                <button type="submit" onClick={handleSubmit} class="btn-hbd blue fullWidth" data-action="Anmelden" data-label="Herold" _msttexthash="113659" _msthash="58">Login</button>
                                <div class="d-flex justify-content-between small mt-3">
                                    <div class="forgotLink">
                                        <a href="/forgot-pswd" class="txt-besidebtn" id="pwd-forgot" _msttexthash="421538" _msthash="59">Forgot your password?</a>
                                    </div>
                                    <div class="registerLink">
                                        <a href="/register" target="_top" _msttexthash="400673" _msthash="60">Register now for free!</a>
                                    </div>
                                </div>
                            </div>
                            {/* </form> */}
                            {/* <form id="send_password" class="hideit" action="/createPasswordMail.do" method="POST" novalidate="novalidate" _msthidden="4">
                                <script src="https://www.google.com/recaptcha/api.js"></script>
                                <h2 _msttexthash="361816" _msthidden="1" _msthash="61">Passwort vergessen</h2>
                                <div class="row" _msthidden="1">
                                    <div class="col-24" _msthidden="1">
                                        <input class="form-control" name="email" type="text" id="useremail" required="required" maxlength="180" placeholder="Benutzername oder E-Mail-Adresse" _msthidden="A" _mstplaceholder="813410" _msthash="62" />
                                        <div class="validate-pos"></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-24 captcha">
                                        <div name="captcha" id="captcha" class="g-recaptcha" data-sitekey="6LeX5iUTAAAAACMJDFi1qNofqcJj0mTq_HbNHgEV">
                                            <div style={{ width: "304px", height: "78px" }}>
                                                <div>
                                                    <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-zidm81m05kgx" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeX5iUTAAAAACMJDFi1qNofqcJj0mTq_HbNHgEV&amp;co=aHR0cHM6Ly9sb2dpbi5oZXJvbGQuYXQ6NDQz&amp;hl=en&amp;v=vj7hFxe2iNgbe-u95xTozOXW&amp;size=normal&amp;cb=eoziu14l5vek"></iframe>
                                                </div>
                                                <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style={{ width: "250px", height: "40px", border: "1px solid rgb(193, 193, 193)", margin: "10px 25px", padding: "0px", resize: "none", display: "none" }}></textarea>
                                            </div>
                                            <iframe style={{ display: "none" }}></iframe>
                                        </div>
                                        <div class="validate-pos"></div>
                                    </div>
                                </div>
                                <button type="submit" class="btn-hbd blue fullWidth mt-3" data-action="Anmelden" data-label="Herold" _msttexthash="152464" _msthidden="1" _msthash="63">Abschicken</button>
                                <div class="d-flex justify-content-between small mt-3" _msthidden="1">
                                    <div class="forgotLink" _msthidden="1">
                                        <a href="javascript:void(0);" class="txt-besidebtn" id="back-login" _msttexthash="279448" _msthidden="1" _msthash="64">Zurück zum Login</a>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}