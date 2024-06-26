import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../../AppContext";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';

export const LoginSubscribeMain = () => {
    const [vis1, setVis1] = useState(false);
    const [vis2, setVis2] = useState(false);
    const { baseBackendRoute, cookies } = useContext(AppContext);
    const [data, setData] = useState();

    useEffect(() => {
        var head = document.head;
        var link = document.createElement("link");

        link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "/about us/site-assets.cdnmns.com/373112e167f382e58a142456f0fdbb68/css/grids4247.css"
        link.media = "all";
        head.appendChild(link);

        const head_6 = document.head;
        const link_6 = document.createElement("link");
        link_6.type = "text/css";
        link_6.rel = "stylesheet";
        link_6.href = "/login-home/style.css";
        link_6.media = "all"
        head_6.appendChild(link_6);



        const head_7 = document.head;
        const link_7 = document.createElement("link");
        link_7.type = "text/css";
        link_7.rel = "stylesheet";
        link_7.href = "/login-home/navigation.css";
        link_7.media = "all"
        head_7.appendChild(link_7);

        const head_8 = document.head;
        const link_8 = document.createElement("link");
        link_8.type = "text/css";
        link_8.rel = "stylesheet";
        link_8.href = "/login-home/styles.css";
        link_8.media = "all"
        head_8.appendChild(link_8);

        const head_9 = document.head;
        const link_9 = document.createElement("link");
        link_9.type = "text/css";
        link_9.rel = "stylesheet";
        link_9.href = "/login-home/icons.css";
        link_9.media = "all"
        head_9.appendChild(link_9);

        const head_10 = document.head;
        const link_10 = document.createElement("link");
        link_10.type = "text/css";
        link_10.rel = "stylesheet";
        link_10.href = "/login-home/home.css";
        link_10.media = "all"
        head_10.appendChild(link_10);



        const head_5 = document.head;
        const link_5 = document.createElement("link");
        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/scripting/dist/css/head8341.css";
        link_5.media = "all"
        head_5.appendChild(link_5);


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
            })
            .catch((err) => {
                console.log(err);
            })


    }, [])
    return (
        <>

            <div className="container-grid" id="container-main">
                <div id="info" className="container-fluid">
                    <div className="d-flex align-items-center">
                        <div className="mx-3">
                            <a href="/login/home">
                                <img
                                    src="https://www.herold.at/meinherold/assets/img/avatar-user-medium.png"
                                    alt="Profile picture"
                                    width={50}
                                    height={50}
                                />
                            </a>
                        </div>
                        <div>
                            <h2>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>{data?.first_name} {data?.last_name}</font>
                                </font>
                            </h2>{" "}
                            <a href="/user-profile">
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>(Edit profile)</font>
                                </font>
                            </a>
                            <div>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                        Username: {data?.username}
                                    </font>
                                </font>
                            </div>
                        </div>
                        <div className="ml-auto mr-3"></div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6" id="navResponsive">
                            <nav id="sidebar" role="navigation">
                                <div>
                                    <h1>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>Overview</font>
                                        </font>
                                    </h1>
                                    <ul>
                                        <li>
                                            <a
                                                id="user_home"
                                                href="/login/home"
                                            >
                                                <span className="glyphicon glyphicon-home" />
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            activities
                                                        </font>
                                                    </font>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id="user_reviews"
                                                href="/login/review"
                                            >
                                                <span className="glyphicon glyphicon-star" />
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            My reviews
                                                        </font>
                                                    </font>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="active">
                                            <a
                                                id="user_reviews_follower"
                                                href="/login/subscribe"
                                            >
                                                <span className="glyphicon glyphicon-star" />
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Subscribe to reviews
                                                        </font>
                                                    </font>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id="user_newsaustria"
                                                href="/login/news"
                                            >
                                                <span className="glyphicon glyphicon-comment" />
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            News from Austria
                                                        </font>
                                                    </font>
                                                </span>
                                            </a>

                                        </li>
                                        <li>
                                            <a
                                                id="user_photos"
                                                href="/login/photos"
                                            >
                                                <span className="glyphicon glyphicon-camera" />
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            My photos
                                                        </font>
                                                    </font>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id="follow_company"
                                                href="/login/comp-follow"
                                            >
                                                <span className="glyphicon glyphicon-thumbs-up" />
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Companies follow
                                                        </font>
                                                    </font>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div id="selectCompany">
                                    <h1>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>My companies</font>
                                        </font>
                                    </h1>
                                    <ul>
                                        <li>
                                            <a
                                                id="company_claim"
                                                href="/add-company"
                                            >
                                                <span className="glyphicon glyphicon-plus-sign" />
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Add new company
                                                        </font>
                                                    </font>
                                                </span>
                                            </a>
                                        </li>

                                        <li className="">
                                            <a
                                                id="company_claim"
                                                href="/login/companies"
                                            >
                                                <span className="glyphicon glyphicon-plus-sign" />
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Companies
                                                        </font>
                                                    </font>
                                                </span>
                                            </a>
                                            <div className="arrow arrow-right" />
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-18">
                            <section id="content">
                                <div className="row">
                                    <div className="col-md-24">
                                        <h1>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Subscribe to author reviews
                                                </font>
                                            </font>
                                        </h1>
                                        <p>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Are you interested in the reviews of another user because they
                                                    have similar tastes to you or rate restaurants, shops or other
                                                    providers that are interesting to you?
                                                </font>
                                            </font>
                                        </p>
                                        <p>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Then subscribe to this user's reviews! For each review in the
                                                    Yellow Pages you will find a button to subscribe to the reviews of
                                                    the corresponding author. You will be automatically informed by
                                                    email when they have submitted a new review.
                                                </font>
                                            </font>
                                        </p>
                                        <p>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    If you have already subscribed to authors, you will see them
                                                    listed here. You can also manage your subscriptions here.
                                                </font>
                                            </font>
                                        </p>
                                    </div>
                                </div>
                                <form
                                    id="accountFollowFlagForm"
                                    className="d-flex align-items-center"
                                    method="post"
                                    action="/meinherold/setAccountFollowFlag.do"
                                    noValidate="novalidate"
                                >
                                    <input
                                        type="checkbox"
                                        name="accountFollowFlag"
                                        id="accountFollowFlag"
                                        defaultValue="true"
                                        defaultChecked=""
                                    />
                                    <label htmlFor="accountFollowFlag" className="ml-2">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                You can subscribe to your reviews
                                            </font>
                                        </font>
                                    </label>
                                </form>
                                <div className="accordion mb-3" onClick={() => { setVis2(!vis2) }}>
                                    <h2 className="accordion-head selected">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                Authors whose reviews you have subscribed to (0)
                                            </font>
                                        </font>
                                        <span className="ml-auto" />
                                        <span className={vis2 ? "acc-toggle icon-arrow_up" : "acc-toggle icon-arrow_down"} />
                                    </h2>
                                    <div className="accordion-content" style={vis2 ? { display: "block" } : {}}>
                                        <p>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    You are not currently subscribed to anyone else!
                                                </font>
                                            </font>
                                        </p>
                                    </div>
                                </div>
                                <div className="accordion mb-3" onClick={() => { setVis1(!vis1) }}>
                                    <h2 className="accordion-head selected">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                People who have subscribed to your reviews (0)
                                            </font>
                                        </font>
                                        <span className="ml-auto " />
                                        <span className={vis1 ? "acc-toggle icon-arrow_up" : "acc-toggle icon-arrow_down"} />
                                    </h2>
                                    <div className="accordion-content" style={vis1 ? { display: 'block' } : {}}>
                                        <p>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    You currently have no subscribers!
                                                </font>
                                            </font>
                                        </p>
                                    </div>
                                </div>
                                {/* MODAL DIALOG to check if Customer really wants to set the no follow Flag */}
                                <div
                                    id="modalConfirmDialog"
                                    className="modal"
                                    tabIndex={-1}
                                    role="dialog"
                                    aria-hidden="true"
                                >
                                    <div
                                        className="modal-dialog modal-lg"
                                        role="document"
                                        style={{ padding: 0, top: 200, textAlign: "center" }}
                                    >
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <p>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            If you disable this feature, you will lose all of your
                                                            existing subscribers. Deactivate now?
                                                        </font>
                                                    </font>
                                                </p>
                                            </div>
                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    data-dismiss="modal"
                                                    id="modalButtonYes"
                                                    className="btn btn-hbd blue"
                                                >
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>Yes</font>
                                                    </font>
                                                </button>
                                                <button
                                                    type="button"
                                                    data-dismiss="modal"
                                                    id="modalButtonNo"
                                                    className="btn"
                                                >
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>No</font>
                                                    </font>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}