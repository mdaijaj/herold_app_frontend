import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../../../AppContext";
import axios from "axios";

export const LoginSubMain = () => {
    const { cookies, baseBackendRoute, gradimoContact } = useContext(AppContext);
    const [changePswd, setChangePswd] = useState(false);
    const [changeProfile, setChangeProfile] = useState(false);
    const [changeEmail, setChangeEmail] = useState(false);
    const [data, setData] = useState();
    const [newValue, setNewValue] = useState(100);
    const [selectedImage, setSelectedImage] = useState(null);
    const [dob, setDob] = useState('1958-04-02');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [salutation, setSalutation] = useState('');
    const [homeTown, setHomeTown] = useState('');
    const [postCode, setPostCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [title, setTitle] = useState('');
    const [lastName, setLastName] = useState('');
    const [oldPswd, setOldPswd] = useState('');
    const [newPswd, setNewPswd] = useState('');
    const [profilePic, setProfilePic] = useState();
    const [cnfrmPswd, setCnfrmPswd] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleChangePasswordSubmit = async () => {
        const cookie_value = decodeURI(cookies.token);
        console.log(cookie_value);
        await axios.post(`${baseBackendRoute}/api/v1/account/change-password/`, {
            'old_password': oldPswd,
            'new_password': newPswd,
            'confirm_new_password': cnfrmPswd
        },
            {
                headers: {
                    'Authorization': cookie_value
                }
            }

        )
            .then((res) => {
                console.log(res);
                setChangePswd(true);

            })
            .catch((err) => {
                console.log(err);
            })

    }

    const handleChangeEmailSubmit = async () => {
        await axios.post(`${baseBackendRoute}/api/v1/account/change-email-address`, {
            'old_email': email,
            'new_email': newEmail,
        })
            .then((res) => {
                console.log(res);
                setChangeEmail(true);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleSubmit = async () => {
        // const isValidDate = dob && !isNaN(new Date(dob).getTime());

        // if (!isValidDate) {
        //     console.log("Invalid date of birth");
        //     return;
        // }

        // // Format date of birth in YYYY-MM-DD format
        // const parts = dob.split('-');
        // const formattedDob = `${parts[2]}-${parts[1]}-${parts[0]}`;
        var formData = new FormData();
        // const formattedDob = dob ? new Date(dob).toISOString().split('T')[0] : null;
        // console.log(formattedDob);
        formData.append('date_of_birth', dob);
        formData.append('email', email);
        formData.append('username', userName);
        formData.append('salutation', salutation);
        formData.append('hometown', homeTown);
        formData.append('postcode', postCode);
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('title', title);
        // formData.append('profile_picture', selectedImage);
        if (selectedImage instanceof File) {
            formData.append('profile_picture', selectedImage); // Append the file object
        }

        const cookie_value = decodeURI(cookies.token);
        await axios.patch(`${baseBackendRoute}/api/v1/account/user-profile-update/`, formData, {
            headers: {
                'Authorization': cookie_value
            }
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setChangeProfile(true);
            })
            .catch((err) => {
                console.log(err);
            })

    }

    useEffect(() => {
        let value = 100;
        const cookie_value = decodeURI(cookies.token);
        console.log(cookie_value);

        axios.get(`${baseBackendRoute}/api/v1/account/user-profile/`, {
            headers: {
                'Authorization': cookie_value
            }
        })
            .then((res) => {
                console.log(res);
                setData(res.data);

                console.log(res.data.date_of_birth === null);


                console.log(res.data.first_name === null);

                console.log(res.data.last_name === null);


                console.log(res.data.hometown === null);


                console.log(res.data.phone === null);


                if (res.data.date_of_birth === null) {
                    value -= 10;
                    console.log('hello-1: ' + value)
                }
                else {
                    setDob(res.data.date_of_birth)
                }
                if (res.data.first_name === null || res.data.first_name === '') {
                    value -= 10;
                    console.log('hello-2: ' + value)
                }
                else {
                    setFirstName(res.data.first_name);
                }
                if (res.data.last_name === null || res.data.last_name === '') {
                    value -= 10;
                    console.log('hello-3: ' + value)
                }
                else {
                    setLastName(res.data.last_name);
                }
                if (res.data.hometown === null || res.data.hometown === '') {
                    value -= 10;
                    console.log('hello-4: ' + value)
                }
                else {
                    setHomeTown(res.data.hometown)
                }
                if (res.data.postcode === null || res.data.hometown === '') {
                    value -= 10;
                }
                else {
                    setPostCode(res.data.postcode);
                }
                if (res.data.salutation === null || res.data.salutation === '') {
                    value -= 10;
                }
                else {
                    setSalutation(res.data.salutation)
                }
                if (res.data.title === null || res.data.title === '') {
                    value -= 10;
                }
                else {
                    setTitle(res.data.title);
                }
                if (res.data.username === null || res.data.username === '') {
                    value -= 10;
                }
                else {
                    setUserName(res.data.username)
                }
                console.log("picture!!");
                console.log(res.data.profile_picture)
                setProfilePic(res.data.profile_picture);
                setEmail(res.data.email);
                setNewValue(value);
            })
            .catch((err) => {
                console.log(err);
            })
        var head = document.head;
        var link = document.createElement("link");

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/about us/site-assets.cdnmns.com/373112e167f382e58a142456f0fdbb68/css/grids4247.css"
        link.media = "all";
        head.appendChild(link);

        const head_5 = document.head;
        const link_5 = document.createElement("link");
        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/scripting/dist/css/head8341.css";
        link_5.media = "all"
        head_5.appendChild(link_5);
    }, [])
    return (
        <>
            <div id="fullBG">
                <div className="container" id="container-main">
                    <section id="myProfile">
                        <div className="container">
                            <div className="row">
                                <div className="col-24">
                                    <h2 className="top"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>My profile</font></font></h2>
                                </div>
                            </div>
                            {/* <form id="profileSaveForm" method="patch" action={`${baseBackendRoute}`} noValidate="novalidate"> */}
                            <input type="hidden" name="accountKey" defaultValue={20526713} className="not-empty" />
                            <div className="row">
                                <div className="col-11 col-md-9 col-lg-7 col-xl-5">
                                    <span className="imgUploadBtn">
                                        {selectedImage !== null ? (
                                            <img
                                                alt="Selected profile picture"
                                                src={URL.createObjectURL(selectedImage)}
                                                width={160}
                                                height={160}
                                                className="previewTempImage"
                                            />
                                        ) : (
                                            <img
                                                alt="Default profile picture"
                                                src={profilePic ? profilePic : "https://login.herold.at/assets/shared/img/avatar-user-large.png"}
                                                width={160}
                                                height={160}
                                                className="previewTempImage"
                                            />
                                        )}
                                        <label htmlFor="imageInput" className="btn link openPhotoDialog noIcon">
                                            <span className="btn-inner">
                                                <span className="btn-text">Change profile picture</span>
                                            </span>
                                        </label>
                                        <input
                                            type="file"
                                            id="imageInput"
                                            accept="image/*"
                                            style={{ display: "none" }}
                                            onChange={handleImageChange}
                                        />
                                    </span>
                                </div>
                                <div className="col-13 col-md-15 col-lg-17 col-xl-19">
                                    {/* see https://css-tricks.com/css-pie-timer/ */}
                                    <div className="pie-wrapper pie-lower50">
                                        <div className="pie-spinner pie" style={newValue === 100 ? { transform: `rotate(1turn)` } : { transform: `rotate(0.${newValue}turn)` }} />
                                        <div className="pie-filler pie" style={newValue === 100 ? { transform: `rotate(1turn)`, opacity: 1 } : {}} />
                                        <div className="pie-mask" />
                                        <p className="pie-text"> <span><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>{newValue}%</font></font></span> </p>
                                    </div>
                                    <p><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>{newValue === 100 ? "Your profile is completely filled out." : "There are still gaps in your profile."}</font></font></p>
                                </div>
                                <div className="validate-pos" />
                            </div>
                            <div className="row">
                                <div className="col-24">
                                    <h2 className="sub"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Personal Data:</font></font></h2>
                                </div>
                                <div className="col-24">
                                    <p className="required"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Fields marked with * are mandatory.</font></font></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="login"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>User name *</font></font></label>
                                    <input value={userName} onChange={(e) => { setUserName(e.target.value) }} className="form-control validate-login not-empty" type="text" id="login" name="login" defaultValue="developerssoftware48" data-uid={20526713} maxLength={50} data-minlength={3} required="required" data-title="Mindestens 5 Zeichen. Keine Leerzeichen." data-toggle="tooltip" data-placement="right" data-original-title title />
                                    <div className="validate-pos" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="gender"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Salutation</font></font></label>
                                    <select value={salutation} onChange={(e) => { setSalutation(e.target.value) }} className="form-control" id="gender" name="gender" >
                                        <option value='' />
                                        <option value="Mister">Mister</option>
                                        <option value="Woman">Woman</option>
                                    </select>
                                    <div className="validate-pos" />
                                </div>
                                <div className="col-md-8 pr5px">
                                    <label htmlFor="title"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>title</font></font></label>
                                    <input value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" type="text" id="title" name="title" defaultValue maxLength={30} />
                                    <div className="validate-pos" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="firstName"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>First name</font></font></label>
                                    <input value={firstName} onChange={(e) => { setFirstName(e.target.value) }} className="form-control" type="text" id="firstName" name="firstName" defaultValue maxLength={30} />
                                    <div className="validate-pos" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="lastName"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Last name</font></font></label>
                                    <input value={lastName} onChange={(e) => { setLastName(e.target.value) }} className="form-control" type="text" id="lastName" name="lastName" defaultValue maxLength={30} />
                                    <div className="validate-pos" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="zip"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Postcode</font></font></label>
                                    <input value={postCode} onChange={(e) => { setPostCode(e.target.value) }} className="form-control" type="text" id="zip" name="zip" defaultValue maxLength={4} />
                                    <div className="validate-pos" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="city"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Hometown</font></font></label>
                                    <input value={homeTown} onChange={(e) => { setHomeTown(e.target.value) }} className="form-control" type="text" id="city" name="city" defaultValue maxLength={30} />
                                    <div className="validate-pos" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="birthdate"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>birth date</font></font></label>
                                    <input value={dob} onChange={(e) => { setDob(e.target.value) }} className="form-control" type="date" id="birthdate" name="birthdate" defaultValue />
                                    <div className="validate-pos" />
                                </div>
                            </div>


                            <div class="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div class="col-12">
                                    <button onClick={handleSubmit} type="submit" class="btn-hbd blue fullWidth" data-action="edit_myprofile" data-label="Profil editieren">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>save profile</font>
                                        </font>
                                    </button>
                                </div>
                            </div>
                            {
                                changeProfile ?
                                    <div className="row">
                                        <div className="col-24">
                                            <p className="status success">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        Your profile has been updated
                                                    </font>
                                                </font>
                                            </p>
                                        </div>
                                    </div>
                                    :
                                    <></>
                            }
                            {/* </form> */}
                        </div>
                    </section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <section id="change_password" className="grid8 forms separate">
                                    <h2 className="top"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Change Password</font></font></h2>
                                    <p className="intro"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Here you can change your password for logging into My Gradimo Skupaj. </font></font></p>
                                    {/* <form id="pwChangePasswordForm" action="/changeProfilePassword.do" method="POST" noValidate="novalidate"> */}
                                    <input type="hidden" name="accountKey" defaultValue={20526713} className="not-empty" />
                                    <div className="row">
                                        <div className="col-24">
                                            <label htmlFor="actualPassword"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Old Password</font></font></label>
                                            <input value={oldPswd} onChange={(e) => { setOldPswd(e.target.value) }} className="form-control novalidate-password" type="password" id="actualPassword" name="actualPassword" maxLength={50} required="required" autoComplete="off" />
                                            <div className="validate-pos" />
                                        </div>
                                        <div className="col-24">
                                            <label htmlFor="password"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>New Password</font></font></label>
                                            <input value={newPswd} onChange={(e) => { setNewPswd(e.target.value) }} className="form-control" type="password" id="password" name="password" data-minlength={8} maxLength={40} required="required" data-toggle="tooltip" data-title="Mindestens 8 Zeichen. Ein Buchstabe und eine Ziffer bzw. Sonderzeichen (=,:?@!€$()#%&_) müssen enthalten sein." data-original-title title />
                                            <div className="validate-pos" />
                                        </div>
                                        <div className="col-24">
                                            <label htmlFor="passwordConfirmation"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>New password (again)</font></font></label>
                                            <input value={cnfrmPswd} onChange={(e) => { setCnfrmPswd(e.target.value) }} className="form-control novalidate-password" type="password" id="passwordConfirmation" name="passwordConfirmation" maxLength={40} required="required" data-equals="password" />
                                            <div className="validate-pos" />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="col-12">
                                            <button onClick={handleChangePasswordSubmit} type="submit" className="btn-hbd blue fullWidth"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Change Password</font></font></button>
                                        </div>
                                    </div>

                                    {
                                        changePswd ?
                                            <div className="row">
                                                <div className="col-24">
                                                    <p className="status success">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Your password has been changed
                                                            </font>
                                                        </font>
                                                    </p>
                                                </div>
                                            </div>
                                            :
                                            <></>
                                    }
                                    {/* </form> */}
                                </section>
                            </div>
                            <div className="col-md-12">
                                <section id="change_email" className="grid8 forms separate">
                                    <h2 className="top"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>change E-Mail address</font></font></h2>
                                    <p className="intro"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Here you can change your email address for My Gradimo Skupaj.</font></font><br /><br /></p>
                                    {/* <form id="pwChangeEmailForm" action="/changeProfileEmail.do" method="POST" noValidate="novalidate"> */}
                                    <input type="hidden" name="accountKey" defaultValue={20526713} className="not-empty" />
                                    <div className="row">
                                        <div className="col-24">
                                            <label htmlFor="emailold"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Current Email Address</font></font></label>
                                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control not-empty" type="text" id="emailold" name="emailold" defaultValue="developerssoftware48@gmail.com" maxLength={180} disabled />
                                            <div className="validate-pos" />
                                        </div>
                                        <div className="col-24">
                                            <label htmlFor="email"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>New E-mail adress</font></font></label>
                                            <input value={newEmail} onChange={(e) => { setNewEmail(e.target.value) }} className="form-control validate-unique" type="email" id="email" name="email" maxLength={180} required="required" data-uid={20526713} />
                                            <div className="validate-pos" />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="col-12">
                                            <button onChange={handleChangeEmailSubmit} type="submit" className="btn-hbd blue fullWidth"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>change E-Mail address</font></font></button>
                                        </div>
                                    </div>
                                    {
                                        changeEmail ?
                                            <div className="row">
                                                <div className="col-24">
                                                    <p className="status success">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                An confirmation mail has been sent to your mail for the email updation
                                                            </font>
                                                        </font>
                                                    </p>
                                                </div>
                                            </div>
                                            :
                                            <></>
                                    }
                                    {/* </form> */}
                                </section>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}