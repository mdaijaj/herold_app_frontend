import { useContext, useState } from "react"
import axios from 'axios';
import AppContext from "../../../AppContext";
import { useNavigate } from "react-router";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: "100vh"
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
export const AddCompBgGrad = () => {
    const theme = useTheme();
    const [input_1, setInput_1] = useState("");
    const [input_2, setInput_2] = useState("");
    const [stateValue, setStateValue] = useState("");
    const [districtValue, setDistrictValue] = useState("");
    const [input_3, setInput_3] = useState("");
    const [service, setService] = useState("");
    const [input_4, setInput_4] = useState("");
    const [input_5, setInput_5] = useState("");
    const [input_6, setInput_6] = useState("");
    const [paymentName, setPaymentName] = useState('');
    const [paymentIcon, setPaymentIcon] = useState('');
    const [input_7, setInput_7] = useState("");
    const [input_8, setInput_8] = useState("");
    const [input_9, setInput_9] = useState("");
    const [input_10, setInput_10] = useState("");
    const [input_11, setInput_11] = useState("");
    const [input_12, setInput_12] = useState();
    const [industry_name, setIndustry_Name] = useState("");
    const [input_13, setInput_13] = useState("");
    const [input_14, setInput_14] = useState("");
    const [input_15, setInput_15] = useState("");
    const [salutation, setSalutation] = useState("Mister");
    const [input_16, setInput_16] = useState("");
    const [input_17, setInput_17] = useState("");
    const [input_18, setInput_18] = useState("");
    const [foundingYear, setFoundingYear] = useState("");
    const [companyRegistration, setCompanyRegistration] = useState("");

    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [paymentMethods, setPaymentMethods] = useState([
        { name: '', icon: '' }
    ]);

    const handleInputChange = (index, field, value) => {
        const updatedPaymentMethods = [...paymentMethods];
        updatedPaymentMethods[index][field] = value;
        setPaymentMethods(updatedPaymentMethods);
    };

    const handleRemoveSection = (index) => {
        const updatedPaymentMethods = [...paymentMethods];
        updatedPaymentMethods.splice(index, 1);
        setPaymentMethods(updatedPaymentMethods);
    };

    const handleAddPaymentMethod = () => {
        setPaymentMethods([...paymentMethods, { name: '', icon: '' }]);
    };
    const navigate = useNavigate();
    const { baseBackendRoute, cookies, industryAZList, paymentMethod } = useContext(AppContext);
    const [countryState, setCountryState] = useState("");
    const handleSubmit = async () => {
        const cookie_value = decodeURI(cookies.token);
        console.log(cookie_value);
        console.log(input_1);
        console.log(input_10);
        console.log(input_11);
        console.log(salutation);
        if (cookies.token) {
            await axios.post(`${baseBackendRoute}/api/v1/companies/company-create/`, {
                "company": {
                    "company_name": input_1,
                    "postcode": input_2,
                    "city": input_3,
                    "street": input_4,
                    "country": countryState,
                    "phone_code": input_6,
                    "phone_number": input_7,
                    "fax_code": input_8,
                    "fax_number": input_9,
                    "industry": input_12,
                    "c_email": input_10,
                    "website_link": input_11,
                    "state": stateValue,
                    "district": districtValue,
                    "service": service,
                    "payment_method": personName,
                    "fountding_year": foundingYear,
                    "company_register_number": companyRegistration
                },
                "personal_information": {
                    "salutation": salutation,
                    "first_name": input_13,
                    "last_name": input_14,
                    "function": input_15,
                    "email": input_17,
                    "phone": input_16,
                    "about": input_18
                }
            }

                , {
                    headers: {
                        'Authorization': cookie_value
                    }
                })
                .then((res) => {
                    console.log(res);
                    navigate('/added-company')
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            await axios.post(`${baseBackendRoute}/api/v1/companies/guest-user-company-create/`, {
                "company": {
                    "company_name": input_1,
                    "postcode": input_2,
                    "city": input_3,
                    "street": input_4,
                    "country": countryState,
                    "phone_code": input_6,
                    "phone_number": input_7,
                    "fax_code": input_8,
                    "fax_number": input_9,
                    "industry": input_12,
                    "c_email": input_10,
                    "website_link": input_11,
                    "state": stateValue,
                    "district": districtValue,
                    "service": service,
                    "payment_method": personName,
                    "fountding_year": foundingYear,
                    "company_register_number": companyRegistration
                },
                "personal_information": {
                    "salutation": salutation,
                    "first_name": input_13,
                    "last_name": input_14,
                    "function": input_15,
                    "email": input_17,
                    "phone": input_16,
                    "about": input_18
                }
            })
                .then((res) => {
                    console.log(res);
                    navigate('/added-company')
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    return (
        <>
            <div class="withBGGrad">
                <div id="container-main" class="container">
                    {/* <form id="addcompany" name="changeData" method="post" class="form-horizontal py-3" action={`${baseBackendRoute}/api/v1/companies/company-create/`} role="form"> */}
                    <input type="hidden" name="context" value="ABOUT" />
                    <input type="hidden" name="sd" value="PWA02_17091815176530102" />
                    <input type="hidden" name="rd" value="" />
                    <input type="hidden" name="addUrl" value="false" />
                    <input type="hidden" name="ccr_id" value="-1" />
                    <input type="hidden" name="ccr_cd" value="-1" />
                    <div class="mb-5">
                        <h2 _msttexthash="703079" _msthash="51">Enter company address details</h2>
                        <div class="form-group">
                            <label for="ccr_cmpname" _msttexthash="275535" _msthash="52">Company wording*</label>
                            <input class="form-control " type="text" name="ccr_cmpname" id="ccr_cmpname" maxlength="130" value={input_1} onChange={(e) => { setInput_1(e.target.value) }} />
                        </div>
                        <div class="form-group row withPadding">
                            <div class="col-6">
                                <label for="ccr_zip" _msttexthash="101270" _msthash="53">Zip code*</label>
                                <input class="form-control " type="text" name="ccr_zip" id="ccr_zip" maxlength="5" value={input_2} onChange={(e) => { setInput_2(e.target.value) }} />
                            </div>
                            <div class="col-18">
                                <label for="ccr_city" _msttexthash="52325" _msthash="54">City*</label>
                                <input class="form-control " type="text" name="ccr_city" id="ccr_city" maxlength="70" value={input_3} onChange={(e) => { setInput_3(e.target.value) }} />
                            </div>
                        </div>

                        <div class="form-group row withPadding">
                            <div class="col-6">
                                <label for="ccr_zip" _msttexthash="101270" _msthash="53">State</label>
                                <input class="form-control " type="text" name="ccr_zip" id="ccr_zip" maxlength="5" value={stateValue} onChange={(e) => { setStateValue(e.target.value) }} />
                            </div>
                            <div class="col-18">
                                <label for="ccr_city" _msttexthash="52325" _msthash="54">District</label>
                                <input class="form-control " type="text" name="ccr_city" id="ccr_city" maxlength="70" value={districtValue} onChange={(e) => { setDistrictValue(e.target.value) }} />
                            </div>
                        </div>
                        <div class="form-group row withPadding">
                            <div class="col-12">
                                <label for="ccr_street" _msttexthash="78624" _msthash="55">Street</label>
                                <input class="form-control" type="text" name="ccr_street" id="ccr_street" maxlength="100" value={input_4} onChange={(e) => { setInput_4(e.target.value) }} />
                            </div>
                            <div class="col-12">
                                <label for="ccr_state" _msttexthash="48880" _msthash="56">Land*</label>
                                <select class="form-control" required={true} onChange={(e) => { setCountryState(e.target.value) }} name="ccr_state" id="ccr_state">
                                    <option value="AFG" data-countrycode="0093" _msttexthash="178906" _msthash="57">Afghanistan</option>
                                    <option value="ET" data-countrycode="0020" _msttexthash="108199" _msthash="58">Egypt</option>
                                    <option value="ÂL" data-countrycode="00358" _msttexthash="174473" _msthash="59">Åland Islands</option>
                                    <option value="AL" data-countrycode="00355" _msttexthash="110422" _msthash="60">Albania</option>
                                    <option value="DZ" data-countrycode="00213" _msttexthash="112099" _msthash="61">Algeria</option>
                                    <option value="UM" data-countrycode="manuell" _msttexthash="444821" _msthash="62">American Oceania</option>
                                    <option value="AS" data-countrycode="01684" _msttexthash="338845" _msthash="63">American Samoa</option>
                                    <option value="AND" data-countrycode="00376" _msttexthash="93964" _msthash="64">Andorra</option>
                                    <option value="ANG" data-countrycode="00244" _msttexthash="74412" _msthash="65">Angola</option>
                                    <option value="AIA" data-countrycode="001264" _msttexthash="112385" _msthash="66">Anguilla</option>
                                    <option value="ATA" data-countrycode="00672" _msttexthash="137670" _msthash="67">Antarctica</option>
                                    <option value="ANT" data-countrycode="001268" _msttexthash="337961" _msthash="68">Antigua and Barbuda</option>
                                    <option value="NA" data-countrycode="00599" _msttexthash="624052" _msthash="69">Antilles, Netherlands</option>
                                    <option value="GQ" data-countrycode="00240" _msttexthash="329537" _msthash="70">Equatorial Guinea</option>
                                    <option value="RA" data-countrycode="0054" _msttexthash="180336" _msthash="71">Argentina</option>
                                    <option value="ARM" data-countrycode="00374" _msttexthash="112853" _msthash="72">Armenia</option>
                                    <option value="ABW" data-countrycode="002978" _msttexthash="58071" _msthash="73">Aruba</option>
                                    <option value="AZ" data-countrycode="00994" _msttexthash="225472" _msthash="74">Azerbaijan</option>
                                    <option value="ETH" data-countrycode="00251" _msttexthash="146640" _msthash="75">Ethiopia</option>
                                    <option value="AUS" data-countrycode="0061" _msttexthash="157989" _msthash="76">Australia</option>
                                    <option value="BS" data-countrycode="001242" _msttexthash="91026" _msthash="77">Bahamas</option>
                                    <option value="BRN" data-countrycode="00973" _msttexthash="91923" _msthash="78">Bahrain</option>
                                    <option value="BD" data-countrycode="00880" _msttexthash="152269" _msthash="79">Bangladesh</option>
                                    <option value="BDS" data-countrycode="001246" _msttexthash="111332" _msthash="80">Barbados</option>
                                    <option value="BY" data-countrycode="00375" _msttexthash="463463" _msthash="81">Belarus-Belarus</option>
                                    <option value="B" data-countrycode="0032" _msttexthash="91897" _msthash="82">Belgium</option>
                                    <option value="BH" data-countrycode="00501" _msttexthash="75998" _msthash="83">Belize</option>
                                    <option value="DY" data-countrycode="0029" _msttexthash="58760" _msthash="84">Benin</option>
                                    <option value="BMU" data-countrycode="001441" _msttexthash="113672" _msthash="85">Bermuda</option>
                                    <option value="BTN" data-countrycode="00975" _msttexthash="76622" _msthash="86">Bhutan</option>
                                    <option value="BOL" data-countrycode="00591" _msttexthash="114179" _msthash="87">Bolivia</option>
                                    <option value="BIH" data-countrycode="00387" _msttexthash="404950" _msthash="88">Bosnia and Herzegovina</option>
                                    <option value="RB" data-countrycode="00267" _msttexthash="114465" _msthash="89">Botswana</option>
                                    <option value="BV" data-countrycode="manuell" _msttexthash="178776" _msthash="90">Bouvet Island</option>
                                    <option value="BR" data-countrycode="0055" _msttexthash="133601" _msthash="91">Brazil</option>
                                    <option value="IO" data-countrycode="manuell" _msttexthash="643266" _msthash="92">Brit. Terr. i. Indian Ocean</option>
                                    <option value="BRU" data-countrycode="00673" _msttexthash="76674" _msthash="93">Brunei</option>
                                    <option value="BG" data-countrycode="00359" _msttexthash="133432" _msthash="94">Bulgaria</option>
                                    <option value="BF" data-countrycode="00226" _msttexthash="174096" _msthash="95">Burkina Faso</option>
                                    <option value="RU" data-countrycode="00257" _msttexthash="95797" _msthash="96">Burundi</option>
                                    <option value="CYM" data-countrycode="001345" _msttexthash="200941" _msthash="97">Cayman Islands</option>
                                    <option value="RCH" data-countrycode="0056" _msttexthash="57681" _msthash="98">Chile</option>
                                    <option value="VCR" data-countrycode="0086" _msttexthash="408239" _msthash="99">China, People's Republic of</option>
                                    <option value="CXR" data-countrycode="00618" _msttexthash="256373" _msthash="100">Christmas Island</option>
                                    <option value="CCK" data-countrycode="00618" _msttexthash="177476" _msthash="101">Cocos Islands</option>
                                    <option value="COK" data-countrycode="00682" _msttexthash="153894" _msthash="102">Cook Islands</option>
                                    <option value="CR" data-countrycode="00506" _msttexthash="127517" _msthash="103">Costa Rica</option>
                                    <option value="CI" data-countrycode="00225" _msttexthash="190853" _msthash="104">Côte d'Ivoire</option>
                                    <option value="DK" data-countrycode="0045" _msttexthash="125359" _msthash="105">Denmark</option>
                                    <option value="D" data-countrycode="0049" _msttexthash="178477" _msthash="106">Germany</option>
                                    <option value="WD" data-countrycode="001767" _msttexthash="110630" _msthash="107">Dominica</option>
                                    <option value="DOM" data-countrycode="001809" _msttexthash="521222" _msthash="108">Dominican Republic</option>
                                    <option value="DJI" data-countrycode="00253" _msttexthash="134914" _msthash="109">Djibouti</option>
                                    <option value="EC" data-countrycode="00593" _msttexthash="93756" _msthash="110">Ecuador</option>
                                    <option value="ES" data-countrycode="00503" _msttexthash="153634" _msthash="111">El Salvador</option>
                                    <option value="ER" data-countrycode="00291" _msttexthash="93951" _msthash="112">Eritrea</option>
                                    <option value="EST" data-countrycode="00372" _msttexthash="93782" _msthash="113">Estonia</option>
                                    <option value="SD" data-countrycode="+268" _msttexthash="115440" _msthash="114">Eswatini</option>
                                    <option value="FK" data-countrycode="00500" _msttexthash="251810" _msthash="115">Falkland Islands</option>
                                    <option value="FO" data-countrycode="00298" _msttexthash="233025" _msthash="116">Faroe Islands</option>
                                    <option value="FJI" data-countrycode="00679" _msttexthash="92066" _msthash="117">Fiji</option>
                                    <option value="PI" data-countrycode="0063" _msttexthash="181714" _msthash="118">Philippines</option>
                                    <option value="SF" data-countrycode="00358" _msttexthash="111826" _msthash="119">Finland</option>
                                    <option value="F" data-countrycode="0033" _msttexthash="154076" _msthash="120">France</option>
                                    <option value="GF" data-countrycode="00594" _msttexthash="368160" _msthash="121">French Guiana</option>
                                    <option value="PF" data-countrycode="00589" _msttexthash="515905" _msthash="122">French Polynesia</option>
                                    <option value="TF" data-countrycode="manuell" _msttexthash="577174" _msthash="123">French Southern Territories</option>
                                    <option value="GAB" data-countrycode="00241" _msttexthash="58955" _msthash="124">Gabon</option>
                                    <option value="WAG" data-countrycode="00220" _msttexthash="72189" _msthash="125">Gambia</option>
                                    <option value="GE" data-countrycode="00995" _msttexthash="112970" _msthash="126">Georgia</option>
                                    <option value="GH" data-countrycode="00233" _msttexthash="56797" _msthash="127">Ghana</option>
                                    <option value="GBZ" data-countrycode="00350" _msttexthash="133874" _msthash="128">Gibraltar</option>
                                    <option value="WG" data-countrycode="001473" _msttexthash="90298" _msthash="129">Grenada</option>
                                    <option value="GR" data-countrycode="0030" _msttexthash="200148" _msthash="130">Greece</option>
                                    <option value="GRO" data-countrycode="00299" _msttexthash="128765" _msthash="131">Greenland</option>
                                    <option value="GB" data-countrycode="0044" _msttexthash="753584" _msthash="132">Great Britain and Northern Ireland</option>
                                    <option value="GLP" data-countrycode="00590" _msttexthash="157170" _msthash="133">Guadeloupe</option>
                                    <option value="GUM" data-countrycode="001671" _msttexthash="44148" _msthash="134">Guam</option>
                                    <option value="GCA" data-countrycode="00502" _msttexthash="131469" _msthash="135">Guatemala</option>
                                    <option value="GN" data-countrycode="00224" _msttexthash="74789" _msthash="136">Guinea</option>
                                    <option value="GNB" data-countrycode="00245" _msttexthash="215813" _msthash="137">Guinea-Bissau</option>
                                    <option value="GUY" data-countrycode="00592" _msttexthash="76258" _msthash="138">Guyana</option>
                                    <option value="RH" data-countrycode="00509" _msttexthash="59020" _msthash="139">Haiti</option>
                                    <option value="HM" data-countrycode="manuell" _msttexthash="505258" _msthash="140">Heard and McDonald Islands</option>
                                    <option value="HD" data-countrycode="00504" _msttexthash="115804" _msthash="141">Honduras</option>
                                    <option value="HK" data-countrycode="00852" _msttexthash="114309" _msthash="142">Hong Kong</option>
                                    <option value="IND" data-countrycode="0091" _msttexthash="75036" _msthash="143">India</option>
                                    <option value="RI" data-countrycode="0062" _msttexthash="156819" _msthash="144">Indonesia</option>
                                    <option value="IRQ" data-countrycode="00964" _msttexthash="43758" _msthash="145">Iraq</option>
                                    <option value="IR" data-countrycode="0098" _msttexthash="44148" _msthash="146">Iran</option>
                                    <option value="IRL" data-countrycode="00353" _msttexthash="75075" _msthash="147">Ireland</option>
                                    <option value="IS" data-countrycode="00354" _msttexthash="75179" _msthash="148">Iceland</option>
                                    <option value="GBM" data-countrycode="0044" _msttexthash="128271" _msthash="149">Isle of Man</option>
                                    <option value="IL" data-countrycode="00972" _msttexthash="75842" _msthash="150">Israel</option>
                                    <option value="I" data-countrycode="0039" _msttexthash="93457" _msthash="151">Italy</option>
                                    <option value="JA" data-countrycode="001876" _msttexthash="90285" _msthash="152">Jamaica</option>
                                    <option value="J" data-countrycode="0081" _msttexthash="58266" _msthash="153">Japan</option>
                                    <option value="ADN" data-countrycode="00967" _msttexthash="58851" _msthash="154">Yemen</option>
                                    <option value="HKJ" data-countrycode="00962" _msttexthash="133224" _msthash="155">Jordan</option>
                                    <option value="VIR" data-countrycode="+1340" _msttexthash="761787" _msthash="156">Virgin Islands, American</option>
                                    <option value="VGB" data-countrycode="001284" _msttexthash="588393" _msthash="157">Virgin Islands, British</option>
                                    <option value="K" data-countrycode="00855" _msttexthash="151788" _msthash="158">Cambodia</option>
                                    <option value="CAM" data-countrycode="00237" _msttexthash="95940" _msthash="159">Cameroon</option>
                                    <option value="CDN" data-countrycode="001" _msttexthash="71825" _msthash="160">Canada</option>
                                    <option value="CV" data-countrycode="002238" _msttexthash="108706" _msthash="161">Cape Verde</option>
                                    <option value="KZ" data-countrycode="007" _msttexthash="155701" _msthash="162">Kazakhstan</option>
                                    <option value="EAK" data-countrycode="00254" _msttexthash="57720" _msthash="163">Kenya</option>
                                    <option value="KS" data-countrycode="00996" _msttexthash="183209" _msthash="164">Kyrgyzstan</option>
                                    <option value="KIR" data-countrycode="00686" _msttexthash="112593" _msthash="165">Kiribati</option>
                                    <option value="CO" data-countrycode="0057" _msttexthash="134667" _msthash="166">Colombia</option>
                                    <option value="COM" data-countrycode="00269" _msttexthash="96200" _msthash="167">Comoros</option>
                                    <option value="ZRE" data-countrycode="00243" _msttexthash="721825" _msthash="168">Congo, Democratic Republic of the Congo</option>
                                    <option value="RCB" data-countrycode="00242" _msttexthash="228813" _msthash="169">Republic of the Congo</option>
                                    <option value="PRK" data-countrycode="00850" _msttexthash="713453" _msthash="170">People's Democratic Republic of Korea</option>
                                    <option value="ROK" data-countrycode="0082" _msttexthash="227019" _msthash="171">Republic of Korea</option>
                                    <option value="KM" data-countrycode="+38138" _msttexthash="80444" _msthash="172">Kosovo</option>
                                    <option value="HR" data-countrycode="00385" _msttexthash="114335" _msthash="173">Croatia</option>
                                    <option value="C" data-countrycode="0053" _msttexthash="43069" _msthash="174">Cuba</option>
                                    <option value="KWT" data-countrycode="00965" _msttexthash="78637" _msthash="175">Kuwait</option>
                                    <option value="LAO" data-countrycode="00856" _msttexthash="44941" _msthash="176">Laos</option>
                                    <option value="LS" data-countrycode="00266" _msttexthash="96876" _msthash="177">Lesotho</option>
                                    <option value="LV" data-countrycode="00371" _msttexthash="113438" _msthash="178">Latvia</option>
                                    <option value="RL" data-countrycode="00961" _msttexthash="93548" _msthash="179">Lebanon</option>
                                    <option value="LB" data-countrycode="00231" _msttexthash="91507" _msthash="180">Liberia</option>
                                    <option value="LAR" data-countrycode="00218" _msttexthash="76635" _msthash="181">Libya</option>
                                    <option value="FL" data-countrycode="00423" _msttexthash="233194" _msthash="182">Liechtenstein</option>
                                    <option value="LT" data-countrycode="00370" _msttexthash="95095" _msthash="183">Lithuania</option>
                                    <option value="L" data-countrycode="00352" _msttexthash="137735" _msthash="184">Luxembourg</option>
                                    <option value="MAC" data-countrycode="00853" _msttexthash="57161" _msthash="185">Macau</option>
                                    <option value="RM" data-countrycode="00261" _msttexthash="152802" _msthash="186">Madagascar</option>
                                    <option value="MW" data-countrycode="00265" _msttexthash="75738" _msthash="187">Malawi</option>
                                    <option value="MAL" data-countrycode="0060" _msttexthash="112983" _msthash="188">Malaysia</option>
                                    <option value="MV" data-countrycode="00960" _msttexthash="133315" _msthash="189">Maldives</option>
                                    <option value="RMM" data-countrycode="00223" _msttexthash="43381" _msthash="190">Mali</option>
                                    <option value="M" data-countrycode="00356" _msttexthash="58682" _msthash="191">Malta</option>
                                    <option value="MA" data-countrycode="00212" _msttexthash="95615" _msthash="192">Morocco</option>
                                    <option value="MH" data-countrycode="00692" _msttexthash="254735" _msthash="193">Marshall Islands</option>
                                    <option value="MQ" data-countrycode="00596" _msttexthash="159822" _msthash="194">Martinique</option>
                                    <option value="RIM" data-countrycode="00222" _msttexthash="180349" _msthash="195">Mauritania</option>
                                    <option value="MS" data-countrycode="00230" _msttexthash="140179" _msthash="196">Mauritius</option>
                                    <option value="YT" data-countrycode="00269" _msttexthash="97435" _msthash="197">Mayotte</option>
                                    <option value="MEX" data-countrycode="0052" _msttexthash="77818" _msthash="198">Mexico</option>
                                    <option value="FM" data-countrycode="00691" _msttexthash="182091" _msthash="199">Micronesia</option>
                                    <option value="MD" data-countrycode="00373" _msttexthash="76310" _msthash="200">Moldova</option>
                                    <option value="MC" data-countrycode="00377" _msttexthash="75504" _msthash="201">Monaco</option>
                                    <option value="MNL" data-countrycode="00976" _msttexthash="113711" _msthash="202">Mongolia</option>
                                    <option value="MNE" data-countrycode="00382" _msttexthash="159237" _msthash="203">Montenegro</option>
                                    <option value="MSR" data-countrycode="001664" _msttexthash="161759" _msthash="204">Montserrat</option>
                                    <option value="MOC" data-countrycode="00258" _msttexthash="112710" _msthash="205">Mozambique</option>
                                    <option value="MYA" data-countrycode="0095" _msttexthash="95225" _msthash="206">Myanmar</option>
                                    <option value="NAM" data-countrycode="00264" _msttexthash="90376" _msthash="207">Namibia</option>
                                    <option value="NAU" data-countrycode="00674" _msttexthash="62426" _msthash="208">Nauru</option>
                                    <option value="NEP" data-countrycode="00977" _msttexthash="58760" _msthash="209">Nepal</option>
                                    <option value="NCL" data-countrycode="00687" _msttexthash="229723" _msthash="210">New Caledonia</option>
                                    <option value="NZ" data-countrycode="0064" _msttexthash="154596" _msthash="211">New Zealand</option>
                                    <option value="NIC" data-countrycode="005505" _msttexthash="131261" _msthash="212">Nicaragua</option>
                                    <option value="NL" data-countrycode="0031" _msttexthash="175539" _msthash="213">Netherlands</option>
                                    <option value="NIG" data-countrycode="00227" _msttexthash="59501" _msthash="214">Niger</option>
                                    <option value="WAN" data-countrycode="00234" _msttexthash="92274" _msthash="215">Nigeria</option>
                                    <option value="NIU" data-countrycode="00683" _msttexthash="44837" _msthash="216">Niue</option>
                                    <option value="MP" data-countrycode="001670" _msttexthash="353288" _msthash="217">Northern Mariana Islands</option>
                                    <option value="MK" data-countrycode="+389" _msttexthash="259714" _msthash="218">North Macedonia</option>
                                    <option value="NF" data-countrycode="006723" _msttexthash="202293" _msthash="219">Norfolk Island</option>
                                    <option value="N" data-countrycode="0047" _msttexthash="115050" _msthash="220">Norway</option>
                                    <option value="OM" data-countrycode="00968" _msttexthash="44174" _msthash="221">Oman</option>
                                    <option value="A" data-countrycode="0043" selected="selected" _msttexthash="169338" _msthash="222">Austria</option>
                                    <option value="A2" data-countrycode="+43" _msttexthash="169338" _msthash="223">Austria</option>
                                    <option value="PAK" data-countrycode="0092" _msttexthash="114491" _msthash="224">Pakistan</option>
                                    <option value="PAL" data-countrycode="00970" _msttexthash="150865" _msthash="225">Palestine</option>
                                    <option value="PW" data-countrycode="00680" _msttexthash="59345" _msthash="226">Palau</option>
                                    <option value="PA" data-countrycode="00507" _msttexthash="73567" _msthash="227">Panama</option>
                                    <option value="PNG" data-countrycode="00675" _msttexthash="272714" _msthash="228">Papua New Guinea</option>
                                    <option value="PY" data-countrycode="00595" _msttexthash="114712" _msthash="229">Paraguay</option>
                                    <option value="PE" data-countrycode="0051" _msttexthash="46332" _msthash="230">Peru</option>
                                    <option value="PN" data-countrycode="00872" _msttexthash="114179" _msthash="231">Pitcairn</option>
                                    <option value="PL" data-countrycode="0048" _msttexthash="60320" _msthash="232">Poland</option>
                                    <option value="P" data-countrycode="00351" _msttexthash="116090" _msthash="233">Portugal</option>
                                    <option value="PR" data-countrycode="001787" _msttexthash="155350" _msthash="234">Puerto Rico</option>
                                    <option value="QA" data-countrycode="00974" _msttexthash="59943" _msthash="235">Qatar</option>
                                    <option value="RE" data-countrycode="00262" _msttexthash="96876" _msthash="236">Reunion</option>
                                    <option value="RWA" data-countrycode="00250" _msttexthash="74711" _msthash="237">Rwanda</option>
                                    <option value="R" data-countrycode="0040" _msttexthash="131222" _msthash="238">Romania</option>
                                    <option value="RUS" data-countrycode="007" _msttexthash="444691" _msthash="239">Russian Federation</option>
                                    <option value="SLB" data-countrycode="00260" _msttexthash="136032" _msthash="240">Solomon Islands</option>
                                    <option value="Z" data-countrycode="00260" _msttexthash="73281" _msthash="241">Zambia</option>
                                    <option value="WS" data-countrycode="00685" _msttexthash="58695" _msthash="242">Samoa</option>
                                    <option value="RSM" data-countrycode="00378" _msttexthash="131586" _msthash="243">San Marino</option>
                                    <option value="STP" data-countrycode="00239" _msttexthash="375986" _msthash="244">Sao Tome and Principe</option>
                                    <option value="SA" data-countrycode="00966" _msttexthash="195416" _msthash="245">Saudi Arabia</option>
                                    <option value="S" data-countrycode="0046" _msttexthash="112619" _msthash="246">Sweden</option>
                                    <option value="CH" data-countrycode="0041" _msttexthash="96928" _msthash="247">Switzerland</option>
                                    <option value="SN" data-countrycode="00221" _msttexthash="92170" _msthash="248">Senegal</option>
                                    <option value="SCG" data-countrycode="00381" _msttexthash="93496" _msthash="249">Serbia</option>
                                    <option value="SY" data-countrycode="00248" _msttexthash="156195" _msthash="250">Seychelles</option>
                                    <option value="WAL" data-countrycode="00232" _msttexthash="174616" _msthash="251">Sierra Leone</option>
                                    <option value="SGP" data-countrycode="0065" _msttexthash="116597" _msthash="252">Singapore</option>
                                    <option value="SK" data-countrycode="00421" _msttexthash="113984" _msthash="253">Slovakia</option>
                                    <option value="SLO" data-countrycode="00386" _msttexthash="136422" _msthash="254">Slovenia</option>
                                    <option value="SP" data-countrycode="00252" _msttexthash="92677" _msthash="255">Somalia</option>
                                    <option value="E" data-countrycode="0034" _msttexthash="94211" _msthash="256">Spain</option>
                                    <option value="SL" data-countrycode="0094" _msttexthash="108342" _msthash="257">Sri Lanka</option>
                                    <option value="SHN" data-countrycode="00290" _msttexthash="121654" _msthash="258">Saint Helena</option>
                                    <option value="KN" data-countrycode="001869" _msttexthash="311623" _msthash="259">Saint Kitts and Nevis</option>
                                    <option value="WL" data-countrycode="001758" _msttexthash="102453" _msthash="260">Saint Lucia</option>
                                    <option value="SPM" data-countrycode="00508" _msttexthash="445705" _msthash="261">Saint Pierre and Miquelon</option>
                                    <option value="WV" data-countrycode="001784" _msttexthash="675090" _msthash="262">Saint Vincent and the Grenadines</option>
                                    <option value="SSD" data-countrycode="+211" _msttexthash="124995" _msthash="263">South Sudan</option>
                                    <option value="ZA" data-countrycode="0027" _msttexthash="146575" _msthash="264">South Africa</option>
                                    <option value="SUD" data-countrycode="00249" _msttexthash="59761" _msthash="265">Sudan</option>
                                    <option value="SME" data-countrycode="00597" _msttexthash="114374" _msthash="266">Suriname</option>
                                    <option value="SJ" data-countrycode="manuell" _msttexthash="401700" _msthash="267">Svalbard and Jan Mayen</option>
                                    <option value="SYR" data-countrycode="00963" _msttexthash="78728" _msthash="268">Syria</option>
                                    <option value="TD" data-countrycode="007" _msttexthash="231881" _msthash="269">Tajikistan</option>
                                    <option value="RC" data-countrycode="00886" _msttexthash="76518" _msthash="270">Taiwan</option>
                                    <option value="EAT" data-countrycode="00255" _msttexthash="111982" _msthash="271">Tanzania</option>
                                    <option value="T" data-countrycode="0066" _msttexthash="110825" _msthash="272">Thailand</option>
                                    <option value="TL" data-countrycode="00670" _msttexthash="62049" _msthash="273">Timor</option>
                                    <option value="TG" data-countrycode="00228" _msttexthash="45669" _msthash="274">Togo</option>
                                    <option value="TKL" data-countrycode="00690" _msttexthash="95186" _msthash="275">Tokelau</option>
                                    <option value="TO" data-countrycode="00676" _msttexthash="59319" _msthash="276">Tonga</option>
                                    <option value="TT" data-countrycode="001868" _msttexthash="340769" _msthash="277">Trinidad and Tobago</option>
                                    <option value="TCH" data-countrycode="00235" _msttexthash="74178" _msthash="278">Chad</option>
                                    <option value="CZ" data-countrycode="00420" _msttexthash="153855" _msthash="279">Czechia</option>
                                    <option value="TN" data-countrycode="00216" _msttexthash="115726" _msthash="280">Tunisia</option>
                                    <option value="TR" data-countrycode="0090" _msttexthash="91923" _msthash="281">Turkey</option>
                                    <option value="TMN" data-countrycode="00993" _msttexthash="209833" _msthash="282">Turkmenistan</option>
                                    <option value="TCA" data-countrycode="001649" _msttexthash="445042" _msthash="283">Turks and Caicos Islands</option>
                                    <option value="TV" data-countrycode="00688" _msttexthash="79924" _msthash="284">Tuvalu</option>
                                    <option value="EAU" data-countrycode="00256" _msttexthash="73528" _msthash="285">Uganda</option>
                                    <option value="UA" data-countrycode="00380" _msttexthash="94055" _msthash="286">Ukraine</option>
                                    <option value="H" data-countrycode="0036" _msttexthash="77298" _msthash="287">Hungary</option>
                                    <option value="U" data-countrycode="00598" _msttexthash="98982" _msthash="288">Uruguay</option>
                                    <option value="UZB" data-countrycode="00998" _msttexthash="158314" _msthash="289">Uzbekistan</option>
                                    <option value="VU" data-countrycode="00678" _msttexthash="97734" _msthash="290">Vanuatu</option>
                                    <option value="V" data-countrycode="00379" _msttexthash="94159" _msthash="291">Vatican</option>
                                    <option value="YV" data-countrycode="0058" _msttexthash="135668" _msthash="292">Venezuela</option>
                                    <option value="UAE" data-countrycode="00971" _msttexthash="673374" _msthash="293">U.A.E</option>
                                    <option value="USA" data-countrycode="001" _msttexthash="728741" _msthash="294">United States of America</option>
                                    <option value="VN" data-countrycode="0084" _msttexthash="94926" _msthash="295">Viet Nam</option>
                                    <option value="WLF" data-countrycode="00681" _msttexthash="486057" _msthash="296">Wallis and Futuna Islands</option>
                                    <option value="SH" data-countrycode="00212" _msttexthash="151593" _msthash="297">Western Sahara</option>
                                    <option value="RCA" data-countrycode="00236" _msttexthash="734188" _msthash="298">Central African Republic</option>
                                    <option value="ZW" data-countrycode="00263" _msttexthash="112255" _msthash="299">Zimbabwe</option>
                                    <option value="CY" data-countrycode="00357" _msttexthash="80470" _msthash="300">Cyprus</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" value="N" name="ccr_geoc" id="ccr_geoc" />
                            <label for="ccr_geoc" class="ml-1" _msttexthash="1247454" _msthash="301">I do NOT want my location to appear on the map.</label>
                        </div>
                        <p class="small" _msttexthash="30946084" _msthash="302">Please enter your main telephone and fax number, e-mail address or Internet address. These are published free of charge on Gradimo Skupaj.at. The display of additional telephone and fax numbers, e-mail addresses or Internet addresses is subject to a fee.</p>
                        <div class="form-group row withPadding">
                            <input type="hidden" name="ccr_TelecomId_{@KEY}" value={input_5} onChange={(e) => { setInput_5(e.target.value) }} />
                            <div class="col-md-4 col-lg-3 col-xl-2">
                                <label for="ccr_cc_TELEFON" _msttexthash="143364" _msthash="303"> Telephone* </label>
                            </div>
                            <div class="col-md-5 col-lg-4 col-xl-3">
                                <label for="ccr_ac_TELEFON" _msttexthash="126802" _msthash="304">Area Codes</label>
                                <input class="form-control  " type="text" name="ccr_ac_TELEFON" id="ccr_ac_TELEFON" maxlength="5" value={input_6} onChange={(e) => { setInput_6(e.target.value) }} />
                            </div>
                            <div class="col-md-15 col-lg-17 col-xl-19">
                                <label for="ccr_no_TELEFON" _msttexthash="76986" _msthash="305">Number</label>
                                <input class="form-control  " type="text" name="ccr_no_TELEFON" id="ccr_no_TELEFON" maxlength="70" value={input_7} onChange={(e) => { setInput_7(e.target.value) }} />
                            </div>
                        </div>
                        <div class="form-group row withPadding">
                            <input type="hidden" name="ccr_TelecomId_{@KEY}" value="1" />
                            <div class="col-md-4 col-lg-3 col-xl-2">
                                <label for="ccr_cc_FAX" _msttexthash="30498" _msthash="306"> Fax</label>
                            </div>
                            <div class="col-md-5 col-lg-4 col-xl-3">
                                <label for="ccr_ac_FAX" _msttexthash="126802" _msthash="307">Area Codes</label>
                                <input class="form-control " type="text" name="ccr_ac_FAX" id="ccr_ac_FAX" maxlength="5" value={input_8} onChange={(e) => { setInput_8(e.target.value) }} />
                            </div>
                            <div class="col-md-15 col-lg-17 col-xl-19">
                                <label for="ccr_no_FAX" _msttexthash="76986" _msthash="308">Number</label>
                                <input class="form-control " type="text" name="ccr_no_FAX" id="ccr_no_FAX" maxlength="70" value={input_9} onChange={(e) => { setInput_9(e.target.value) }} />
                            </div>
                        </div>

                        <div class="form-group row withPadding">
                            <input type="hidden" name="ccr_TelecomId_{@KEY}" value="1" />

                            <div class="col-md-5 col-lg-4 col-xl-3">
                                <label for="founding_year" _msttexthash="126802" _msthash="307">Founding year</label>
                                <input class="form-control " type="text" name="founding_year" id="founding_year" maxlength="5" value={foundingYear} onChange={(e) => { setFoundingYear(e.target.value) }} />
                            </div>
                            <div class="col-md-15 col-lg-17 col-xl-19">
                                <label for="comp_registration_no" _msttexthash="76986" _msthash="308">Company registration number</label>
                                <input class="form-control " type="text" name="comp_registration_no" id="comp_registration_no" maxlength="70" value={companyRegistration} onChange={(e) => { setCompanyRegistration(e.target.value) }} />
                            </div>
                        </div>
                        <div class="form-group row withPadding">
                            <input type="hidden" name="ccr_TelecomId_2" value="2" />
                            <div class="col-24">
                                <label for="ccr_Telecom_EM" _msttexthash="234546" _msthash="309">E-mail address*</label>
                                <input class="form-control " type="email" required={true} name="ccr_Telecom_EM" id="ccr_Telecom_EM" maxlength="70" value={input_10} onChange={(e) => { setInput_10(e.target.value) }} />
                            </div>
                        </div>
                        <div class="form-group row withPadding">
                            <input type="hidden" name="ccr_TelecomId_3" value="3" />
                            <div class="col-24">
                                <label for="ccr_Telecom_INET" _msttexthash="262574" _msthash="310">Your web address</label>
                                <input class="form-control" type="url" placeholder="Includes http:// or https://" name="ccr_Telecom_INET" id="ccr_Telecom_INET" maxlength="70" value={input_11} onChange={(e) => { setInput_11(e.target.value) }} _mstplaceholder="694954" _msthash="311" />
                            </div>
                        </div>

                        <div class="form-group row withPadding">
                            <input type="hidden" name="service" value="3" />
                            <div class="col-24">
                                <label for="service" _msttexthash="262574" _msthash="310">Service</label>
                                <input class="form-control" type="text" placeholder="" name="service" id="service" maxlength="70" value={service} onChange={(e) => { setService(e.target.value) }} _mstplaceholder="694954" _msthash="311" />
                            </div>
                        </div>

                        <div class="form-group row withPadding">
                            <input type="hidden" name="service" value="3" />
                            <div class="col-24">
                                <label for="service" _msttexthash="262574" _msthash="310">Payment Methods*</label>

                                <Select
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    className="form-control"
                                    multiple
                                    label="payment methods"
                                    name={"payment methods"}
                                    value={personName}
                                    onChange={handleChange}
                                    MenuProps={MenuProps}
                                >
                                    {paymentMethod?.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name.id}
                                        // style={getStyles(name, personName, theme)}
                                        >
                                            {name.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>

                    </div>


                    <div class="mb-5">
                        <h2 _msttexthash="544518" _msthash="312">Specify company activity</h2>
                        <div class="form-group" id="changeCompanyCat">
                            <label for="ccr_hnNo" _msttexthash="228956" _msthash="313">Your industry *</label>
                            <select
                                class="form-control"
                                name="ccr_hnNo"
                                id="ccr_hnNo"
                                required={true}
                                value={input_12?.id}
                                onChange={(e) => {
                                    setInput_12(Number(e.target.value));
                                    const selectedIndustry = industryAZList.find(item => item.id === Number(e.target.value));
                                    if (selectedIndustry) {
                                        setIndustry_Name(selectedIndustry.industry_name);
                                    } else {
                                        setIndustry_Name(''); // Set to empty if no industry is selected
                                    }
                                }}
                            >
                                <option value="">Select an option</option>
                                {industryAZList?.map((item, index) => (
                                    <option key={index} value={item.id}>{item.industry_name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div class="mb-5">
                        <h2 _msttexthash="320684" _msthash="315">Your personal data</h2>
                        <div class="form-group row withPadding">
                            <div class="col-md-7 col-lg-5 col-xl-4">
                                <label for="ccr_gender" _msttexthash="169728" _msthash="316">Salutation*</label>
                                <select
                                    className="form-control"
                                    name="ccr_gender"
                                    id="ccr_gender"
                                    required={true}
                                    value={salutation} // Set the value attribute to maintain state
                                    onChange={(e) => setSalutation(e.target.value)} // Handle change event
                                >
                                    <option value="Mister">Lord</option>
                                    <option value="Woman">Wife</option>
                                </select>
                            </div>
                            <div class="col-md-9 col-lg-10 col-xl-10">
                                <label for="ccr_fn" _msttexthash="247624" _msthash="319">Your first name*</label>
                                <input class="form-control " type="text" name="ccr_fn" id="ccr_fn" required={true} maxlength="100" value={input_13} onChange={(e) => {
                                    setInput_13(e.target.value);
                                }} />
                            </div>
                            <div class="col-md-8 col-lg-9 col-xl-10">
                                <label for="ccr_cn" _msttexthash="218998" _msthash="320">Your last name*</label>
                                <input class="form-control " type="text" name="ccr_cn" id="ccr_cn" maxlength="100" required={true} value={input_14} onChange={(e) => { setInput_14(e.target.value) }} />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="ccr_cf" _msttexthash="118404" _msthash="321">Your role</label>
                            <input class="form-control" type="text" name="ccr_cf" id="ccr_cf" maxlength="130" value={input_15} onChange={(e) => { setInput_15(e.target.value) }} />
                        </div>
                        <div class="form-group row withPadding">
                            <div class="col-12">
                                <label for="ccr_phone" _msttexthash="306709" _msthash="322">Your phone number*</label>
                                <input class="form-control " type="text" name="ccr_phone" id="ccr_phone" maxlength="50" required={true} value={input_16} onChange={(e) => { setInput_16(e.target.value) }} />
                            </div>
                            <div class="col-12">
                                <label for="ccr_mail" _msttexthash="148629" _msthash="323">Your e-mail</label>
                                <input class="form-control" type="email" name="ccr_mail" id="ccr_mail" maxlength="130" value={input_17} onChange={(e) => { setInput_17(e.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 _msttexthash="1574183" _msthash="324">If there is anything else you would like to tell us</h2>
                        <div class="form-group">
                            <textarea class="form-control" name="ccr_comment" id="ccr_comment" cols="85" rows="3" maxlength="450" placeholder="Your Message" _mstplaceholder="224809" _msthash="325" value={input_18} onChange={(e) => { setInput_18(e.target.value) }}></textarea>
                            <p id="ccr_comment_hint" class="text-muted">
                                <small _msttexthash="513981" _msthash="326">450 characters remaining</small>
                            </p>
                        </div>
                        <button type="submit" onClick={handleSubmit} class="btn-hbd blue" _msttexthash="112749" _msthash="327">Dispatch</button>
                        <p class="mt-2 small text-muted" _msttexthash="5725746" _msthash="328">The personal data provided (name and email address) will only be used to answer your inquiry by email.</p>
                    </div>
                    {/* </form> */}
                </div>
            </div >
        </>
    )
}