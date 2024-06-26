import { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";
import axios from "axios";
import { useNavigate } from "react-router";

export const ExternalLoginMain = () => {
    const [show, setShow] = useState(false);
    const [finalData, setFinalData] = useState();
    const navigate = useNavigate();
    const { baseBackendRoute, reviewReqBody, externalGuestEmail, setExternalGuestEmail, externalGuestName, setExternalGuestName, externalEmail, setExternalEmail, externalPassword, setExternalPassword } = useContext(AppContext);
    const handleRegisteredSubmit = async () => {
        await axios.post(`${baseBackendRoute}/api/v1/account/login/`, {
            'email': externalEmail,
            'password': externalPassword
        })
            .then(async (res) => {
                console.log(res);
                console.log(res.data);
                if (res) {
                    console.log(finalData)
                    await axios.post(`${baseBackendRoute}/api/v1/companies/create-company-rating/`, {
                        ...finalData,
                        'user': res.data.id
                    })
                        .then((resp) => {
                            console.log(resp);
                            console.log("everything done!!");
                            window.parent.location.href = '/reviews/?user=user';
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                }

            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleGuestSubmit = async () => {
        console.log(finalData);
        await axios.post(`${baseBackendRoute}/api/v1/companies/create-company-rating/`, {
            ...finalData,
            'guest_name': externalGuestName,
            'guest_email': externalGuestEmail
        })
            .then((res) => {
                console.log(res);
                // Inside the iframe modal
                window.parent.location.href = '/reviews/?user=guest';


                console.log('guest done!');

            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        // Listen for messages from the parent window
        const receiveMessage = (event) => {
            // Check if the message is from a trusted origin if needed
            // if (event.origin !== 'http://example.com') return;

            // Handle received data
            console.log('Data received in iframe modal:', event.data);
            setFinalData(event.data);
        };

        // Add event listener for message events
        window.addEventListener('message', receiveMessage);

        // Clean up event listener when component unmounts
        return () => {
            window.removeEventListener('message', receiveMessage);
        };
    }, []);
    return (
        <>
            <div id="externalLoginContent">
                <ul className="nav nav-tabs" role="tablist">
                    {/* <li className="col-12 nav-item">
                        <a
                            id="navLoginTab"
                            className={show ? "nav-link active" : "nav-link"}
                            href="#loginTab"
                            onClick={() => { setShow(true) }}
                            role="tab"
                            data-toggle="tab"
                            aria-selected="false"
                        >
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Login</font>
                            </font>
                        </a>
                    </li> */}
                    <li className="col-12 nav-item">
                        <a
                            id="navGuestTab"
                            className={show ? "nav-link" : "nav-link active"}
                            onClick={() => { setShow(false) }}
                            href="#emailTab"
                            role="tab"
                            data-toggle="tab"
                            aria-selected="true"
                        >
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Rate as a guest</font>
                            </font>
                        </a>
                    </li>
                </ul>
                <div className="tab-content orderTabs">
                    <div id="loginTab" className={show ? "mt-3 tab-pane fade active show" : "mt-3 tab-pane fade"}>
                        <div className="row">
                            <div className="col-24 col-md-8">
                            </div>
                            <div className="col-24 col-md-8">

                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-24">
                                <input
                                    className="form-control"
                                    type="text"
                                    id="dropdown-username"
                                    name="username"
                                    required="required"
                                    maxLength={180}
                                    placeholder="Username or e-mail address"
                                    autoComplete="username"
                                    value={externalEmail}
                                    onChange={(e) => { setExternalEmail(e.target.value) }}
                                />
                            </div>
                            <div className="col-24">
                                <input
                                    className="form-control"
                                    type="password"
                                    id="dropdown-password"
                                    name="password"
                                    required="required"
                                    maxLength={180}
                                    placeholder="password"
                                    autoComplete="current-password"
                                    value={externalPassword}
                                    onChange={(e) => { setExternalPassword(e.target.value) }}
                                />
                            </div>
                            <div className="col-24 checkbox">
                                <input
                                    type="checkbox"
                                    name="keepLoggedInExternal"
                                    id="keepLoggedInExternal"
                                    defaultValue="true"
                                    defaultChecked="checked"
                                    className="not-empty"
                                />
                                <label htmlFor="keepLoggedInExternal">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            remain signed in
                                        </font>
                                    </font>
                                </label>
                            </div>
                            <div className="col-24">
                                <p className="small">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            By registering, you agree to the
                                        </font>
                                    </font>
                                    <a
                                        href="/legal/4/"
                                        target="_blank"
                                        rel="noopener"
                                        title="Opens new window"
                                    >
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                General Terms of Use for Gradimo Skupaj Portals
                                            </font>
                                        </font>
                                    </a>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}> and the </font>
                                    </font>
                                    <a

                                        target="_blank"
                                        rel="noopener"
                                        title="Opens new window"
                                    >
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                data protection declaration
                                            </font>
                                        </font>
                                    </a>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>

                                            in the current version.
                                        </font>
                                    </font>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="col-12">
                                <button onClick={handleRegisteredSubmit} type="submit" className="btn-hbd blue fullWidth">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Register</font>
                                    </font>
                                </button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between small mt-3">
                            <div className="forgotLink">
                                <a target="_top" href="/forgot-pswd">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            Forgot Password?
                                        </font>
                                    </font>
                                </a>
                            </div>
                            <div className="registerLink">
                                <a
                                    target="_top"
                                    href="/register"
                                >
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            Sign up now for free!
                                        </font>
                                    </font>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="emailTab" className={show ? "mt-3 tab-pane fade" : "mt-3 tab-pane fade active show"}>

                        <div id="eMailLogin" className="row">
                            <div className="col-24">
                                <h5 style={{ fontWeight: "bold" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            Serious reviews are important to us.
                                        </font>
                                    </font>
                                </h5>
                                <p className="status" id="email-error-text" />
                                <p>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            Please enter your name and email address to confirm your
                                            review.
                                        </font>
                                    </font>
                                </p>
                            </div>
                            <div className="col-24">
                                <input
                                    className="form-control"
                                    type="text"
                                    id="dropdown-author"
                                    name="author"
                                    required="required"
                                    maxLength={180}
                                    placeholder="Author name"
                                    value={externalGuestName}
                                    onChange={(e) => { setExternalGuestName(e.target.value) }}
                                />
                            </div>
                            <div className="col-24">
                                <input
                                    className="form-control"
                                    type="email"
                                    id="dropdown-email"
                                    name="email"
                                    required="required"
                                    maxLength={180}
                                    placeholder="E-mail address"
                                    value={externalGuestEmail}
                                    onChange={(e) => { setExternalGuestEmail(e.target.value) }}
                                />
                            </div>
                            <div>

                                <div className="validate-pos" />
                            </div>
                            <div className="col-24">
                                <input
                                    type="checkbox"
                                    name="agb"
                                    id="agb"
                                    required="required"
                                    className="not-empty"
                                />
                                <label htmlFor="agb">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            I hereby agree to the
                                        </font>
                                    </font>
                                    <a
                                        href="/legal/4/"
                                        target="_blank"
                                        rel="noopener"
                                        title="Opens new window"
                                    >
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                general terms of use for Gradimo Skupaj portals
                                            </font>
                                        </font>
                                    </a>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}> and the </font>
                                    </font>
                                    <a

                                        target="_blank"
                                        title="Opens new window"
                                        rel="noopener"
                                    >
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                data protection declaration
                                            </font>
                                        </font>
                                    </a>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}> .</font>
                                    </font>
                                </label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="col-12">
                                <button onClick={handleGuestSubmit} type="submit" className="btn-hbd blue fullWidth">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Submit review</font>
                                    </font>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
} 