import '@fortawesome/fontawesome-free/css/all.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../../../../../AppContext';
export const LoginPhotosNav = () => {
    const { baseBackendRoute, cookies } = useContext(AppContext);
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState();
    useEffect(() => {
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
            <nav id="nav-main" className="navbar navbar-light sticky">
                <div className="container-fluid d-block">
                    <div className="row titlebar justify-content-between">
                        <div className="d-flex">
                            <a className="navbar-brand" href="/">
                                <img src="/logo_img/new-logo-modified.png" alt="Yellow pages, business directory, company reviews, telephone directory - herold.at" title="Yellow pages, business directory, company reviews, telephone directory - herold.at" />
                            </a>
                        </div>
                        <div className="d-none d-lg-flex">
                            <ul className="nav navbar-nav navbar-desktop">
                                <li className="tab-YP nav-item">
                                    <a href="/" className="nav-link" title="Yellow Pages - Company and industry search" data-action="click" data-category="Main Navigation" data-label="YP"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Companies</font></font></a>
                                </li>
                                <li className="tab-WP nav-item">
                                    <a href="/" className="nav-link" title="Austria telephone book" data-action="click" data-category="Main Navigation" data-label="WP"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>persons</font></font></a>
                                </li>
                                <li className="tab-REV nav-item">
                                    <a href="/" className="nav-link" title="Search the herold.at reviews" data-action="click" data-category="Main Navigation" data-label="REV"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>reviews</font></font></a>
                                </li>
                                <li className="tab-BLOG nav-item">
                                    <a href="/blog/" className="nav-link" title="Tips from the herold.at editorial team" data-action="click" data-category="Main Navigation" data-label="BLOG"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Blog</font></font></a>
                                </li>
                                <li className="tab-WERBEN nav-item">
                                    <a href="/marketing/" className="nav-link" target="_blank" rel="noopener" title="Opens new window" data-action="click" data-category="Main Navigation" data-label="WERBEN"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Business solutions</font></font></a>
                                </li>
                                <li onClick={() => { setVisible(!visible) }} className={visible ? "tab-usermenu nav-item dropdown show" : "tab-usermenu nav-item dropdown"}>
                                    <a className="nav-link" id="dropdownUsermenuButton" href="javascript:void(0);" title="Show user menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="username"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>			{data?.username}
                                        </font></font></div>
                                        <img src="https://login.herold.at/assets/hui/img/avatar-user-small.png" className="ml-2 rounded-circle" alt="software developers48" width={22} />
                                    </a>
                                    <div className={visible ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdownUsermenuButton">
                                        <a className="dropdown-item" href="/meinherold/home.do"><b><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>My herald</font></font></b></a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="/myProfile.do"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>edit profile</font></font></a>
                                        <a className="dropdown-item" href="/j_spring_security_logout"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Log out</font></font></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Mobile Navigation */}
                        <div className="d-flex d-lg-none">
                            <button type="button" onClick={() => { setShow(!show) }} className={"btn icon-only toggle-menu"} data-toggle="collapse" data-target="#navbar-md-down" aria-controls="navbar-md-down" aria-expanded="false" aria-label="Show or hide menu">
                                <i className="fas fa-bars" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    {/* Mobile Navigation */}
                    <div className={show ? "row dropdown-menu collapse show" : "row dropdown-menu collapse"} id="navbar-md-down">
                        <ul className="nav navbar-nav">
                            <li className="tab-YP nav-item">
                                <a href="/" className="nav-link" title="Yellow Pages - Company and industry search" data-action="click" data-category="Main Navigation" data-label="YP"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Companies</font></font></a>
                            </li>
                            <li className="tab-WP nav-item">
                                <a href="/" className="nav-link" title="Austria telephone book" data-action="click" data-category="Main Navigation" data-label="WP"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>persons</font></font></a>
                            </li>
                            <li className="tab-REV nav-item">
                                <a href="/" className="nav-link" title="Search the herold.at reviews" data-action="click" data-category="Main Navigation" data-label="REV"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>reviews</font></font></a>
                            </li>
                            <li className="tab-BLOG nav-item">
                                <a href="/blog/" className="nav-link" title="Tips from the herold.at editorial team" data-action="click" data-category="Main Navigation" data-label="BLOG"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Blog</font></font></a>
                            </li>
                            <li className="tab-WERBEN nav-item">
                                <a href="/marketing/" className="nav-link" target="_blank" rel="noopener" title="Opens new window" data-action="click" data-category="Main Navigation" data-label="WERBEN"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Business solutions</font></font></a>
                            </li>
                            <li className="tab-usermenu nav-item">
                                <a href="/myProfile.do" className="nav-link" title="edit profile"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>edit profile</font></font></a>
                            </li>
                            <li className="tab-usermenu nav-item">
                                <a href="/j_spring_security_logout" className="nav-link" title="Log out"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Log out</font></font></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}