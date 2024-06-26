import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../../AppContext";
import { Helmet } from "react-helmet";
export const ProductsContFirstContainer = () => {

    const [surname, setSurname] = useState('');
    const [pursue, setPursue] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [success, setSuccess] = useState(false);
    const { baseBackendRoute, gradimoAdvicePage } = useContext(AppContext);
    const [service, setService] = useState(-1);
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState('');
    const [serviceName, setServiceName] = useState('');
    const { productsList } = useContext(AppContext);
    const handleSubmit = async () => {
        await axios.post(`${baseBackendRoute}/api/v1/products/advice-contact/`, {

            "surname": surname,
            "pursue": pursue,
            "email": email,
            "phone": phone,
            "service": service,
            "message": msg
        })
            .then((res) => {
                console.log(res);
                setSurname('');
                setPhone('');
                setEmail('');
                setPursue('');
                setServiceName('');
                setMsg('');
                setSuccess(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        console.log(productsList);
        console.log(show)
        console.log(service);
        console.log(serviceName);
    }, [productsList, service, serviceName])
    return (
        <>
            <Helmet>

                <meta property="og:title" content={gradimoAdvicePage?.meta_title} />
                <meta property="og:description"  content={gradimoAdvicePage?.meta_description} />
                <meta property="og:type" content={gradimoAdvicePage?.meta_tags} />


            </Helmet>
            <div class="yl-fs" style={{ backgroundColor: gradimoAdvicePage?.color }}>
                <div class="container">
                    <div class="row f-co-outta">
                        <div class="col w-50 text-out">
                            <h1>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>{gradimoAdvicePage?.title}</font>
                                </font>
                            </h1>
                            <ul class="head-ul" dangerouslySetInnerHTML={{ __html: gradimoAdvicePage?.description }}>
                            </ul>
                        </div>
                        <div class="col w-50 form-out">
                            <div class="form-container c-form">
                                <h3>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>{gradimoAdvicePage?.advice_from_heading}</font>
                                    </font>
                                </h3>
                                <div class="gf_browser_chrome gform_wrapper gravity-theme gform-theme--no-framework form-fl_wrapper imp-form_wrapper" data-form-theme="gravity-theme" data-form-index="0" id="gform_wrapper_39">
                                    <div id="gf_39" class="gform_anchor" tabindex="-1"></div>
                                    <div class="gform_heading">
                                        <p class="gform_required_legend">
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>“</font>
                                            </font>
                                            <span class="gfield_required gfield_required_asterisk">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>*</font>
                                                </font>
                                            </span>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>“ displays required fields</font>
                                            </font>
                                        </p>
                                    </div>
                                    <div class="gform-body gform_body">
                                        <div id="gform_fields_39" class="gform_fields top_label form_sublabel_below description_below">
                                            <div id="field_39_1" class="gfield gfield--type-text gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_39_1">
                                                {
                                                    surname.length === 0 ?
                                                        <label class="gfield_label gform-field-label" for="input_39_1">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>Surname</font>
                                                            </font>
                                                            <span class="gfield_required">
                                                                <span class="gfield_required gfield_required_asterisk">
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>*</font>
                                                                    </font>
                                                                </span>
                                                            </span>
                                                        </label>
                                                        :
                                                        <></>
                                                }
                                                <div class="ginput_container ginput_container_text">
                                                    <input name="input_1" value={surname} onChange={(e) => { setSurname(e.target.value) }} id="input_39_1" type="text" class="large" aria-required="true" aria-invalid="false" />
                                                </div>
                                            </div>
                                            <div id="field_39_2" class="gfield gfield--type-text gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_39_2">
                                                {
                                                    pursue.length === 0 ?
                                                        <label class="gfield_label gform-field-label" for="input_39_2">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>Pursue</font>
                                                            </font>
                                                            <span class="gfield_required">
                                                                <span class="gfield_required gfield_required_asterisk">
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>*</font>
                                                                    </font>
                                                                </span>
                                                            </span>
                                                        </label>
                                                        :
                                                        <></>
                                                }
                                                <div class="ginput_container ginput_container_text">
                                                    <input name="input_2" value={pursue} onChange={(e) => { setPursue(e.target.value) }} id="input_39_2" type="text" class="large" aria-required="true" aria-invalid="false" />
                                                </div>
                                            </div>
                                            <div id="field_39_3" class="gfield gfield--type-email gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_39_3">
                                                {
                                                    email.length === 0 ?
                                                        <label class="gfield_label gform-field-label" for="input_39_3">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>e-mail</font>
                                                            </font>
                                                            <span class="gfield_required">
                                                                <span class="gfield_required gfield_required_asterisk">
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>*</font>
                                                                    </font>
                                                                </span>
                                                            </span>
                                                        </label>
                                                        :
                                                        <></>
                                                }
                                                <div class="ginput_container ginput_container_email">
                                                    <input name="input_3" value={email} onChange={(e) => { setEmail(e.target.value) }} id="input_39_3" type="email" class="large" aria-required="true" aria-invalid="false" />
                                                </div>
                                            </div>
                                            <div id="field_39_4" class="gfield gfield--type-phone gfield--width-full gfield_contains_required field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_39_4">
                                                {
                                                    phone.length === 0 ?
                                                        <label class="gfield_label gform-field-label" for="input_39_4">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>phone</font>
                                                            </font>
                                                            <span class="gfield_required">
                                                                <span class="gfield_required gfield_required_asterisk">
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>*</font>
                                                                    </font>
                                                                </span>
                                                            </span>
                                                        </label>
                                                        : <></>
                                                }
                                                {/* <div class="ginput_container ginput_container_phone"> */}
                                                <input name="input_4" id="input_39_4" value={phone} onChange={(e) => { setPhone(e.target.value) }} type="tel" class="large" aria-required="true" aria-invalid="false" />
                                                {/* </div> */}
                                            </div>
                                            <div id="field_39_8" class="gfield gfield--type-select gfield--width-full custom-select has-input-name populated field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_39_8">
                                                {
                                                    serviceName?.length === 0 ?
                                                        <label class="gfield_label gform-field-label" for="input_39_8" onClick={() => { setShow(!show) }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>Select service</font>
                                                            </font>
                                                        </label>
                                                        :
                                                        <></>
                                                }
                                                <div id="field_39_8" class="gfield gfield--type-select gfield--width-full custom-select has-input-name populated field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_39_8">
                                                    {serviceName?.length === 0 ? <label class="gfield_label gform-field-label" for="input_39_8">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>Select service</font>
                                                        </font>
                                                    </label>
                                                        :
                                                        <></>}
                                                    <div class="ginput_container ginput_container_select" onClick={() => { setShow(!show) }}>
                                                        <select name="input_8" id="input_39_8" class="large gfield_select" aria-invalid="false" value={service} onChange={(e) => { setService(e.target.value) }}>
                                                            <option value=""></option>
                                                            {productsList?.map((data, index) => (
                                                                <option value={data.id}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>{data.name}</font>
                                                                    </font>
                                                                </option>
                                                            ))
                                                            }
                                                        </select>
                                                    </div>
                                                    <div class="select-selected" onClick={() => { setShow(!show) }}>{serviceName}</div>
                                                </div>
                                                <div class={show ? "select-items select" : "select-items select-hide"}>
                                                    {
                                                        productsList?.map((data, index) => (
                                                            <div id={data.id} value={data.name} onClick={(e) => {
                                                                setService(e.target.id);
                                                                setShow(false);
                                                                setServiceName(e.target.getAttribute('value'));
                                                            }}>
                                                                {data.name}
                                                            </div>

                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div id="field_39_7" class="gfield gfield--type-textarea gfield--width-full field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_39_7">
                                                {
                                                    msg.length === 0 ?
                                                        <label class="gfield_label gform-field-label" for="input_39_7">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>Your message</font>
                                                            </font>
                                                        </label>
                                                        :
                                                        <></>
                                                }
                                                <div class="ginput_container ginput_container_textarea">
                                                    <textarea name="input_7" id="input_39_7" value={msg} onChange={(e) => { setMsg(e.target.value) }} class="textarea large" aria-invalid="false" rows="10" cols="50"></textarea>
                                                </div>
                                                {
                                                    success ?
                                                        <div className="col-24">
                                                            <p className="success">
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit", color: 'green' }}>
                                                                        {"Thank you for your response, your response has been recorded"}
                                                                    </font>
                                                                </font>
                                                            </p>
                                                        </div>
                                                        :
                                                        <></>
                                                }

                                            </div>
                                            <fieldset id="field_39_9" class="gfield gfield--type-consent gfield--type-choice gfield--input-type-consent gfield--width-full has-input-name gfield_contains_required field_sublabel_below gfield--no-description field_description_below hidden_label gfield_visibility_visible" data-js-reload="field_39_9">
                                                <legend class="gfield_label gform-field-label gfield_label_before_complex">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>consent</font>
                                                    </font>
                                                    <span class="gfield_required">
                                                        <span class="gfield_required gfield_required_asterisk">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>*</font>
                                                            </font>
                                                        </span>
                                                    </span>
                                                </legend>
                                                <div class="ginput_container ginput_container_consent">
                                                    <input name="input_9.1" id="input_39_9_1" type="checkbox" value="1" aria-required="true" aria-invalid="false" />
                                                    <label class="gform-field-label gform-field-label--type-inline gfield_consent_label" for="input_39_9_1">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>I give my consent, which can be revoked at any time, to receive an offer for the services by email and telephone.</font>
                                                        </font>
                                                        <span class="gfield_required gfield_required_asterisk">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>*</font>
                                                            </font>
                                                        </span>
                                                    </label>
                                                    <input type="hidden" name="input_9.2" value="Ich erteile meine jederzeit widerrufliche Einwilligung, per E-Mail sowie telefonisch ein Angebot zu den Dienstleistungen zu erhalten." class="gform_hidden" />
                                                    <input type="hidden" name="input_9.3" value="6" class="gform_hidden" />
                                                </div>
                                            </fieldset>
                                            <div id="field_39_15" class="gfield gfield--type-hidden gfield--width-full gform_hidden field_sublabel_below gfield--no-description field_description_below gfield_visibility_visible" data-js-reload="field_39_15">
                                                <div class="ginput_container ginput_container_text">
                                                    <input name="input_15" id="input_39_15" type="hidden" class="gform_hidden" aria-invalid="false" />
                                                </div>
                                            </div>
                                            <div id="field_39_14" class="gfield gfield--type-text gfield--width-full field_sublabel_below gfield--no-description field_description_below gfield_visibility_hidden" data-js-reload="field_39_14">
                                                <div class="admin-hidden-markup">
                                                    <i class="gform-icon gform-icon--hidden"></i>
                                                    <span>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>Hidden</font>
                                                        </font>
                                                    </span>
                                                </div>
                                                <label class="gfield_label gform-field-label descup" for="input_39_14">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>utmSource</font>
                                                    </font>
                                                </label>
                                                <div class="ginput_container ginput_container_text">
                                                    <input name="input_14" id="input_39_14" type="text" value="internal_link" class="large" aria-invalid="false" />
                                                </div>
                                            </div>
                                            <div id="field_39_11" class="gfield gfield--type-text gfield--width-full field_sublabel_below gfield--no-description field_description_below gfield_visibility_hidden" data-js-reload="field_39_11">
                                                <div class="admin-hidden-markup">
                                                    <i class="gform-icon gform-icon--hidden"></i>
                                                    <span>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>Hidden</font>
                                                        </font>
                                                    </span>
                                                </div>
                                                <label class="gfield_label gform-field-label descup" for="input_39_11">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>utmMedium</font>
                                                    </font>
                                                </label>
                                                <div class="ginput_container ginput_container_text">
                                                    <input name="input_11" id="input_39_11" type="text" value="navigation_footer" class="large" aria-invalid="false" />
                                                </div>
                                            </div>
                                            <div id="field_39_12" class="gfield gfield--type-text gfield--width-full field_sublabel_below gfield--no-description field_description_below gfield_visibility_hidden" data-js-reload="field_39_12">
                                                <div class="admin-hidden-markup">
                                                    <i class="gform-icon gform-icon--hidden"></i>
                                                    <span>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>Hidden</font>
                                                        </font>
                                                    </span>
                                                </div>
                                                <label class="gfield_label gform-field-label descup" for="input_39_12">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>utmCampaign</font>
                                                    </font>
                                                </label>
                                                <div class="ginput_container ginput_container_text">
                                                    <input name="input_12" id="input_39_12" type="text" value="herold_marketing" class="large" aria-invalid="false" />
                                                </div>
                                            </div>
                                            <div id="field_39_13" class="gfield gfield--type-text gfield--width-full field_sublabel_below gfield--no-description field_description_below gfield_visibility_hidden" data-js-reload="field_39_13">
                                                <div class="admin-hidden-markup">
                                                    <i class="gform-icon gform-icon--hidden"></i>
                                                    <span>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>Hidden</font>
                                                        </font>
                                                    </span>
                                                </div>
                                                <label class="gfield_label gform-field-label descup" for="input_39_13">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>utmContent</font>
                                                    </font>
                                                </label>
                                                <div class="ginput_container ginput_container_text">
                                                    <input name="input_13" id="input_39_13" type="text" value="kontakt" class="large" aria-invalid="false" />
                                                </div>
                                            </div>
                                            <div id="field_39_16" class="gfield gfield--type-honeypot gform_validation_container field_sublabel_below gfield--has-description field_description_below gfield_visibility_visible" data-js-reload="field_39_16">
                                                <label class="gfield_label gform-field-label" for="input_39_16">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>E-mail</font>
                                                    </font>
                                                </label>
                                                <div class="ginput_container">
                                                    <input name="input_16" id="input_39_16" type="text" autocomplete="new-password" />
                                                </div>
                                                <div class="gfield_description" id="gfield_description_39_16">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>This field is for validation and should not be changed.</font>
                                                    </font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="gform_footer top_label">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <input type="submit" id="gform_submit_button_39" class="gform_button button make_visible" onClick={handleSubmit} value="Get advice now" onclick="if(window[&quot;gf_submitting_39&quot;]){return false;}  if( !jQuery(&quot;#gform_39&quot;)[0].checkValidity || jQuery(&quot;#gform_39&quot;)[0].checkValidity()){window[&quot;gf_submitting_39&quot;]=true;}  " onkeypress="if( event.keyCode == 13 ){ if(window[&quot;gf_submitting_39&quot;]){return false;} if( !jQuery(&quot;#gform_39&quot;)[0].checkValidity || jQuery(&quot;#gform_39&quot;)[0].checkValidity()){window[&quot;gf_submitting_39&quot;]=true;}  jQuery(&quot;#gform_39&quot;).trigger(&quot;submit&quot;,[true]); }" />
                                            </font>
                                        </font>
                                        <input type="hidden" class="gform_hidden" name="is_submit_39" value="1" />
                                        <input type="hidden" class="gform_hidden" name="gform_submit" value="39" />
                                        <input type="hidden" class="gform_hidden" name="gform_unique_id" />
                                        <input type="hidden" class="gform_hidden" name="state_39" value="WyJ7XCI5LjFcIjpcIjJhZWI1MDY3Y2I4OGIzZWE0ZWY2NjlmZGU1NjE4NjNkXCIsXCI5LjJcIjpcImY5NjU4NjA0ZDllZTI3YzFkMWYyMmVkYzA5NTFmMjRmXCIsXCI5LjNcIjpcIjY1NTE4YTE5Nzc4OWI5NTNjMjYwZGVhZGU4MzZkYzU0XCJ9IiwiZGE0YjZiYjk0ZjE0MGQ3NTc4MjY1NjBkMTA3NTQ4MzUiXQ==" />
                                        <input type="hidden" class="gform_hidden" name="gform_target_page_number_39" id="gform_target_page_number_39" value="0" />
                                        <input type="hidden" class="gform_hidden" name="gform_source_page_number_39" id="gform_source_page_number_39" value="1" />
                                        <input type="hidden" name="gform_field_values" />
                                    </div>
                                </div>

                                <p style={{ fontSize: "13px" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>You can find information about how we handle personal data in our </font>
                                    </font>
                                    <a href="/legal/4/" target="_blank" style={{ textDecoration: "underline" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>data protection information</font>
                                        </font>
                                    </a>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}> .</font>
                                    </font>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}