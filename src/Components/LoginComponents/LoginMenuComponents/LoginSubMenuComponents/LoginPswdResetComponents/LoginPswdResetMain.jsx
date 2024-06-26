import { useEffect } from "react"

export const LoginPswdResetMain = () => {
    useEffect(() => {


        const head_9 = document.head;
        const link_9 = document.createElement("link");
        link_9.type = "text/css";
        link_9.rel = "stylesheet";
        link_9.href = "/login-home/icons.css";
        link_9.media = "all"
        head_9.appendChild(link_9);



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
                    <section id="register-success" className="register-confirm wrapper">
                        <div className="row">
                            <div className="col-24">
                                <div className="col-24">
                                    <h2 className="top"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Your user account for My Gradimo Skupaj has been successfully activated!</font></font></h2>
                                </div>
                                <div className="col-12 push-6">
                                    <p><a className="btn btn-hbd blue" href="/login"><font style={{ "vertical-align": "inherit" }}><font style={{ "vertical-align": "inherit" }}>Log in to My Gradimo Skupaj now</font></font></a></p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
            </div >
        </>
    )
}