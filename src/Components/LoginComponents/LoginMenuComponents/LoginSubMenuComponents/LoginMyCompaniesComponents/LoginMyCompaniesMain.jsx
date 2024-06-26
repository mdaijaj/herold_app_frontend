import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../../AppContext";
import { useNavigate } from "react-router";
import axios from "axios";

export const LoginMyCompaniesMain = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState('');
    const { myCompanies, baseBackendRoute, cookies } = useContext(AppContext);
    const cookie_value = decodeURI(cookies.token);
    console.log(cookie_value);
    const navigate = useNavigate();
    useEffect(() => {


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


    }, [myCompanies])
    return (
        <>

            <div className="container-grid" id="container-main">
                <div id="info" className="container-fluid">
                    <div className="d-flex align-items-center">
                        <div className="mx-3">
                            <a href="https://login.herold.at/myProfile.do?redirectUrl=https://www.herold.at/meinherold/home.do">
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
                            </h2>
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

                                        <li className="active">
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
                            <section id="reviews" className="row">
                                <div className="col-md-12">
                                    <h1>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>My Companies</font>
                                        </font>
                                    </h1>
                                </div>
                                <div className="col-md-24 mb-3">
                                    <p>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                Here you will find all the companies you
                                            </font>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                have created and has been approved so far on
                                            </font>
                                        </font>
                                        <a
                                            href="https://www.herold.at"
                                            target="_blank"
                                            rel="noopener"
                                            title="Opens new window"
                                        >
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>Gradimo Skupaj</font>
                                            </font>
                                        </a>
                                        <font style={{ verticalAlign: "inherit" }} />
                                    </p>
                                </div>
                                <div className="col-md-24 accordion" onClick={() => { setShow(!show) }}>
                                    <h2 className={show ? "accordion-head selected" : ""}>
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                Your companies on Gradimo Skupaj
                                            </font>
                                        </font>
                                        <span className="ml-auto">
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>{myCompanies?.length} companies</font>
                                            </font>
                                        </span>
                                        <span className={show ? "acc-toggle icon-arrow_up" : "acc-toggle icon-arrow_down"} />
                                    </h2>
                                    <div className="accordion-content" style={show ? { display: "block" } : { display: 'none' }}>
                                        {
                                            myCompanies?.map((data, index) => (
                                                <div className="ownReview review" data-uid={1382204}>
                                                    <h3>
                                                        <a href="https://www.herold.at/gelbe-seiten/braunau-am-inn/NnxZz/smart-solutions-eu/">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    {data?.company_name}
                                                                </font>
                                                            </font>
                                                        </a>
                                                    </h3>
                                                    <article className="row review">
                                                        <div className="col-24 col-md-13 d-flex align-items-center mb-2">
                                                            <div className="user_date_info mr-auto">

                                                                <b>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            {data?.industry?.industry_name} Industry
                                                                        </font>
                                                                    </font>
                                                                </b>
                                                            </div>
                                                        </div>
                                                        <div className="col-24 col-md-13 mb-2">
                                                            <h4 className="convert-emoji mt-2">
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>{data?.postcode} , {data?.street}</font>
                                                                </font>
                                                            </h4>
                                                            <p className="convert-emoji">
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>{data?.city} , {data?.country}</font>
                                                                </font>
                                                            </p>
                                                        </div>
                                                        <div className="col-24 col-md-13 mb-2">
                                                            <div className="row review-cats mt-2 d-none">

                                                            </div>
                                                        </div>
                                                        <div className="slickGallery4Reviews slick-initialized slick-slider">
                                                            <div className="slick-list draggable">
                                                                <div
                                                                    className="slick-track"
                                                                    style={{
                                                                        opacity: 1,
                                                                        width: 280,
                                                                        transform: "translate3d(0px, 0px, 0px)"
                                                                    }}
                                                                >
                                                                    <div
                                                                        className="slick-slide slick-current slick-active"
                                                                        data-slick-index={0}
                                                                        aria-hidden="false"
                                                                        style={{ width: 280 }}
                                                                    >
                                                                        <div>
                                                                            <img
                                                                                className="img-fluid"
                                                                                src="https://www.herold.at/bewertungen/rest/files/file/44150.png"
                                                                                alt=""
                                                                                style={{ width: "100%", display: "inline-block" }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="review-actions">
                                                            <button type="button" onClick={() => { window.location.href = `/update-company-details/${data.slug}/` }} className="btn btn-hbd blue edit">
                                                                <span className="icon-edit" aria-hidden="true" />
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>Edit</font>
                                                                </font>
                                                            </button>
                                                        </div>
                                                    </article>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </section>
                            <link
                                rel="stylesheet"
                                href="https://www.herold.at/meinherold/assets/node_modules/slick-slider/slick/slick.css?v=2.82-20231206_124242"
                            />
                            <link
                                rel="stylesheet"
                                href="https://www.herold.at/meinherold/assets/node_modules/slick-slider/slick/slick-theme.css?v=2.82-20231206_124242"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}