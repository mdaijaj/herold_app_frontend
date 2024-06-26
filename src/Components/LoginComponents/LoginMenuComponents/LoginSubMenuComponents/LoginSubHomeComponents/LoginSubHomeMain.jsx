import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../../AppContext";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';

export const LoginSubHomeMain = () => {
    const { cookies, baseBackendRoute } = useContext(AppContext);
    const [data, setData] = useState('');
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
                                    <font style={{ verticalAlign: "inherit" }}>{data.first_name} {data.last_name}</font>
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
                                        Username: {data.username}
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
                                        <li className="active">
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
                                        <li>
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
                            <section id="content" className="activities">
                                <div className="row">
                                    <div className="col-md-24 help">
                                        <h1>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Latest activities
                                                </font>
                                            </font>
                                        </h1>
                                        <div
                                            className="helpBtn icon-information info"
                                            aria-hidden="true"
                                        />
                                        <div className="d-none helpContent">
                                            <div className="col-md-24">
                                                <section id="helpContent">
                                                    <h1>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                What information do you get here?
                                                            </font>
                                                        </font>
                                                    </h1>
                                                    <p>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Under “Latest Activities” you will find at a glance
                                                                all the news about the companies you follow on
                                                                herold.at.{" "}
                                                            </font>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                This includes new user reviews, uploaded photos,
                                                                changed opening times, etc. The same naturally also
                                                                applies to those companies that you manage yourself on
                                                                herold.at.
                                                            </font>
                                                        </font>
                                                    </p>
                                                    <p>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                You will also be notified here as soon as your
                                                                uploaded images and submitted reviews have been
                                                                approved by our editorial team.
                                                            </font>
                                                        </font>
                                                    </p>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-24 firstSteps">
                                        <h2>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>First steps</font>
                                            </font>
                                        </h2>
                                        <div className="firstStepsBox">
                                            <div className="num">
                                                <b>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>1</font>
                                                    </font>
                                                </b>
                                            </div>
                                            <div>
                                                <h3>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Write a Review
                                                        </font>
                                                    </font>
                                                </h3>
                                                <p>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Were you satisfied with the performance of a company?{" "}
                                                        </font>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Then recommend them on herold.at!{" "}
                                                        </font>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Simply enter your review directly in the corresponding
                                                            company entry!
                                                        </font>
                                                    </font>
                                                </p>
                                                <p>
                                                    <a href="https://www.herold.at">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Search and evaluate companies
                                                            </font>
                                                        </font>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="firstStepsBox">
                                            <div className="num">
                                                <b>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>2</font>
                                                    </font>
                                                </b>
                                            </div>
                                            <div>
                                                <h3>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Follow companies and upload photos
                                                        </font>
                                                    </font>
                                                </h3>
                                                <p>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Are you interested in a company?{" "}
                                                        </font>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Then click on the “Follow Company” button and you will
                                                            automatically receive updates from them!{" "}
                                                        </font>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Do you have suitable photos for a company?{" "}
                                                        </font>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Simply upload these to your company entry!
                                                        </font>
                                                    </font>
                                                </p>
                                                <p>
                                                    <a href="https://www.herold.at">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Search for companies
                                                            </font>
                                                        </font>
                                                    </a>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}> , </font>
                                                    </font>
                                                    <a href="https://www.herold.at/meinherold/followCompany.do">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                follow them
                                                            </font>
                                                        </font>
                                                    </a>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}> or </font>
                                                    </font>
                                                    <a href="https://www.herold.at/meinherold/getMyPhotos.do">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                upload photos
                                                            </font>
                                                        </font>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="firstStepsBox">
                                            <div className="num">
                                                <b>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>3</font>
                                                    </font>
                                                </b>
                                            </div>
                                            <div>
                                                <h3>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Manage company
                                                        </font>
                                                    </font>
                                                </h3>
                                                <p>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Are you responsible for the appearance of your company?{" "}
                                                        </font>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Then you can register it on herold.at or manage an
                                                            existing company entry.{" "}
                                                        </font>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Easily add your opening times, product information,
                                                            contact details, etc.!
                                                        </font>
                                                    </font>
                                                </p>
                                                <p>
                                                    <a href="https://www.herold.at/servlet/at.herold.gso.servlet.GSOChangeRequestServlet?context=ABOUT">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Register your company now!
                                                            </font>
                                                        </font>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div id="activityGallery" className="modal activityGallery">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal">
                                                <span aria-hidden="true">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>×</font>
                                                    </font>
                                                </span>
                                                <span className="sr-only">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>Close</font>
                                                    </font>
                                                </span>
                                            </button>
                                            <h4 className="modal-title">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>View photo</font>
                                                </font>
                                            </h4>
                                        </div>
                                        <div className="modal-body">
                                            <img src="https://www.herold.at/meinherold/https://www.herold.at/assets/img/empty.gif" />
                                            <div className="description" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}