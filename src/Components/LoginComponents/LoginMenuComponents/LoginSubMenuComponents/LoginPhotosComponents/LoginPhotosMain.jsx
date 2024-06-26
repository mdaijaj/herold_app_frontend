import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../../AppContext";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';

export const LoginPhotosMain = () => {
    const [data, setData] = useState('');
    const { cookies, baseBackendRoute } = useContext(AppContext);
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
                                        <li className="active">
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
                            <section id="myPhotos" className="myPhotos">
                                <div className="row">
                                    <div className="col-md-24">
                                        <h1>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>My photos</font>
                                            </font>
                                        </h1>
                                        <p className="intro">
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Take a picture of what deserves the rating “worth seeing” at your
                                                    hairdresser, your favorite restaurant or any other Austrian
                                                    company! Search for the relevant company on herold.at, click on
                                                    “Upload photo” in the entry and save the photo here! After a quick
                                                    check by our editorial team, your picture will appear in the
                                                    company's entry.
                                                </font>
                                            </font>
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-24">
                                        <h2>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Which company would you like to upload a photo to?
                                                </font>
                                            </font>
                                        </h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 rightTxt">
                                        <label htmlFor="fotoCompanySearch">
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>Company name:</font>
                                            </font>
                                        </label>
                                    </div>
                                    <div className="col-md-10">
                                        <input
                                            type="text"
                                            id="fotoCompanySearch"
                                            maxLength={100}
                                            placeholder="Please select a company"
                                            defaultValue=""
                                            className="ui-autocomplete-input"
                                            autoComplete="off"
                                        />
                                        <span
                                            role="status"
                                            aria-live="polite"
                                            className="ui-helper-hidden-accessible"
                                        >
                                            460531
                                        </span>
                                    </div>
                                    <div className="col-md-6" />
                                </div>
                                <div className="row">
                                    <div className="col-md-24">
                                        {/* Fotos einer ausgewählten Firma from autocomplete ajax; fotosuche.ftl */}
                                        <section id="fotoVerwaltenSuchergebnis">
                                            <div className="multiFileUpload" style={{ display: "block" }}>
                                                <div className="row">
                                                    <div className="col-md-6 rightTxt">
                                                        <label htmlFor="multipleFileUploadField">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    Choose picture:
                                                                </font>
                                                            </font>
                                                        </label>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <label
                                                            htmlFor="multipleFileUploadField"
                                                            className="btn btn-hbd gray file_input_multiple_button file_input_multiple_button_hover"
                                                        >
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    Select photos
                                                                </font>
                                                            </font>
                                                        </label>
                                                        <input
                                                            id="multipleFileUploadField"
                                                            type="file"
                                                            name="userfile"
                                                            multiple=""
                                                            className="multipleFileUploadField sr-only"
                                                        />
                                                    </div>
                                                    <div className="col-md-6" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6" />
                                                    <div className="col-md-18">
                                                        <p className="multiFileUploadInfo">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    Please only upload photos in JPG, PNG, BMP or GIF format
                                                                    with a maximum file size of 10 MB. The minimum size is 640
                                                                    x 480 pixels.
                                                                </font>
                                                            </font>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-24">
                                                        <div id="progress" className="progress">
                                                            <div className="progress-bar progress-bar-success">
                                                                <div className="progress-percent" />
                                                            </div>
                                                        </div>
                                                        <form id="multiFileUploadForm" noValidate="novalidate">
                                                            <div className="multiFileUploadContent">
                                                                <div className="head">
                                                                    <h3>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                Photo preview
                                                                            </font>
                                                                        </font>
                                                                    </h3>
                                                                    <p>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                Here you can edit the photos and assign a title or
                                                                                text.{" "}
                                                                            </font>
                                                                        </font>
                                                                        <br />
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                Save your photos with the “Save Photos” button or
                                                                                remove your photos with the “Remove Photo Preview”
                                                                                button.{" "}
                                                                            </font>
                                                                        </font>
                                                                        <br />
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                You can then upload more photos.
                                                                            </font>
                                                                        </font>
                                                                    </p>
                                                                    <p>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                Fields marked with * are mandatory.
                                                                            </font>
                                                                        </font>
                                                                    </p>
                                                                </div>
                                                                <ul className="multipleUploadFiles" data-sid="false" />
                                                                <p className="uploadstatus block hideit" />
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-hbd blue"
                                                                    id="submit_multiple_fotos"
                                                                >
                                                                    <i className="icon-save" aria-hidden="true" />
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            Save photos
                                                                        </font>
                                                                    </font>
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-hbd gray"
                                                                    id="cancel_mulitple_photo_upload"
                                                                >
                                                                    <i className="icon-x" aria-hidden="true" />
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            Remove photo preview
                                                                        </font>
                                                                    </font>
                                                                </button>
                                                                <p className="status block hideit" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="searchstate">
                                                <p className="status loading" style={{ display: "none" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Your assigned photos for Maria Saal Volunteer Fire Department
                                                            are loading...
                                                        </font>
                                                    </font>
                                                </p>
                                            </div>
                                            <div id="searchresult">
                                                <section className="companyPhotos">
                                                    <div className="row">
                                                        <div className="col-md-24">
                                                            <ul className="fotoGrid" id="firmenFotoGrid"></ul>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-24">
                                        {/* alle zugeordneten Fotos; Ajax getMyAssignedPhotos.do; fotoverwaltungAssigned.ftl */}
                                        <section id="assignedPhotos">
                                            <div className="row">
                                                <div className="col-md-24">
                                                    <h1>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Your published photos
                                                            </font>
                                                        </font>
                                                    </h1>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                                <div id="photoEditDialog" className="editPhoto modal">
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
                                                        <font style={{ verticalAlign: "inherit" }}>Edit photo</font>
                                                    </font>
                                                </h4>
                                                <p className="">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Fields marked with * are mandatory.
                                                        </font>
                                                    </font>
                                                </p>
                                            </div>
                                            <div className="modal-body">
                                                <form
                                                    id="editPhotoForm"
                                                    action="https://www.herold.at/meinherold/modifyPhoto.do"
                                                    method="post"
                                                >
                                                    <input type="hidden" name="sid" defaultValue="" />
                                                    <input type="hidden" name="userPhotoNo" defaultValue="" />
                                                    <input type="hidden" name="versionNo" defaultValue="" />
                                                    <input type="hidden" name="accountKey" defaultValue="" />
                                                    <label htmlFor="title">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>Title*:</font>
                                                        </font>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        name="title"
                                                        minLength={6}
                                                        maxLength={100}
                                                        defaultValue=""
                                                    />
                                                    <label htmlFor="text">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>Description:</font>
                                                        </font>
                                                    </label>
                                                    <textarea
                                                        id="text"
                                                        name="text"
                                                        maxLength={500}
                                                        defaultValue={""}
                                                    />
                                                    <div className="counter">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                500 characters left
                                                            </font>
                                                        </font>
                                                    </div>
                                                    <p>
                                                        <img
                                                            id="editPhotoImg"
                                                            src="assets/img/empty.gif"
                                                            width={215}
                                                            alt=""
                                                        />
                                                    </p>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-hbd blue"
                                                        id="submit_photo_edit"
                                                    >
                                                        <i className="icon-save" aria-hidden="true" />
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>save photo</font>
                                                        </font>
                                                    </button>
                                                    <p className="status" />
                                                </form>
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