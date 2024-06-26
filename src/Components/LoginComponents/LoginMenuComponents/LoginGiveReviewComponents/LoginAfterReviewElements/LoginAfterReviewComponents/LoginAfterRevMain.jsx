import { useParams } from "react-router"

export const LoginAfterRevMain = () => {
    const { user } = useParams();
    return (
        <>
            <div id="grid">
                {
                    user === "guest" ?
                        <section className="subteaser review-finished">
                            <div
                                className="container "
                                style={{ backgroundColor: "#ffffff", paddingBottom: "2em", marginTop: 50 }}
                            >
                                <div className="row">
                                    <div className="col-md-24">
                                        <h2>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Thanks for your review!
                                                </font>
                                            </font>
                                        </h2>
                                        <p>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Your review has been saved and will soon be available online.
                                                </font>
                                            </font>
                                        </p>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a
                                                    href="/"
                                                    target="_blank"
                                                    rel="noopener"
                                                    title="Opens new window"
                                                >
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            To the Gradimo.si detailed entry
                                                        </font>
                                                    </font>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Write a new review!
                                                        </font>
                                                    </font>
                                                </a>
                                            </li>
                                        </ul>
                                        <h3>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Share your review with your friends:
                                                </font>
                                            </font>
                                        </h3>
                                        {/* <div className="share-buttons">
                                            <a
                                                title="Share on Facebook"
                                                className="facebook"
                                                href="javascript:void(0)"
                                                onclick="shareFacebook()"
                                            >
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Share on Facebook{" "}
                                                        </font>
                                                    </font>
                                                </span>
                                            </a>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <a
                                                    title="Auf Pinterest pinnen - Öffnet neues Fenster"
                                                    className="pinterest"
                                                    href="http://api.addthis.com/oexchange/0.8/forward/pinterest/offer?pubid=heroldbusinessdata&url=https%3A%2F%2Fwww.herold.at%2Fgelbe-seiten%2Fwien%2F975lh%2Fa-barraca-portugiesische-spezialit%25C3%25A4ten%2F&description=Ich%20habe%20A%20-%20Barraca%20-%20Portugiesische%20Spezialit%C3%A4ten%20auf%20herold.at%20bewertet."
                                                    target="_blank"
                                                    rel="noopener nofollow"
                                                >
                                                    <span>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Share on Pinterest
                                                        </font>
                                                    </span>
                                                </a>
                                            </font>
                                            <a
                                                title="Pin to Pinterest - Opens new window"
                                                className="pinterest"
                                                href="#"
                                                target="_blank"
                                                rel="noopener nofollow"
                                            >
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }} />
                                                </span>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                                <div id="fb-root" className=" fb_reset">
                                    <div
                                        style={{ position: "absolute", top: "-10000px", width: 0, height: 0 }}
                                    >
                                        <div />
                                    </div>
                                </div>
                            </div>
                        </section>

                        :
                        <section className="subteaser review-finished">
                            <div
                                className="container "
                                style={{ backgroundColor: "#ffffff", paddingBottom: "2em", marginTop: 50 }}
                            >
                                <div className="row">
                                    <div className="col-md-24">
                                        <h2>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Thanks for your review!
                                                </font>
                                            </font>
                                        </h2>
                                        <p>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Your review has been saved and will soon be available online.
                                                </font>
                                            </font>
                                        </p>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a
                                                    href="/"
                                                    target="_blank"
                                                    rel="noopener"
                                                    title="Opens new window"
                                                >
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            To the Gradimo.si detailed entry
                                                        </font>
                                                    </font>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Write a new review!
                                                        </font>
                                                    </font>
                                                </a>
                                            </li>
                                        </ul>
                                        <h3>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    Share your review with your friends:
                                                </font>
                                            </font>
                                        </h3>
                                        {/* <div className="share-buttons">
                                            <a
                                                title="Share on Facebook"
                                                className="facebook"
                                                href="javascript:void(0)"
                                                onclick="shareFacebook()"
                                            >
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Share on Facebook{" "}
                                                        </font>
                                                    </font>
                                                </span>
                                            </a>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <a
                                                    title="Auf Pinterest pinnen - Öffnet neues Fenster"
                                                    className="pinterest"
                                                    href="http://api.addthis.com/oexchange/0.8/forward/pinterest/offer?pubid=heroldbusinessdata&url=https%3A%2F%2Fwww.herold.at%2Fgelbe-seiten%2Fwien%2F975lh%2Fa-barraca-portugiesische-spezialit%25C3%25A4ten%2F&description=Ich%20habe%20A%20-%20Barraca%20-%20Portugiesische%20Spezialit%C3%A4ten%20auf%20herold.at%20bewertet."
                                                    target="_blank"
                                                    rel="noopener nofollow"
                                                >
                                                    <span>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            Share on Pinterest
                                                        </font>
                                                    </span>
                                                </a>
                                            </font>
                                            <a
                                                title="Pin to Pinterest - Opens new window"
                                                className="pinterest"
                                                href="#"
                                                target="_blank"
                                                rel="noopener nofollow"
                                            >
                                                <span>
                                                    <font style={{ verticalAlign: "inherit" }} />
                                                </span>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                                <div id="fb-root" className=" fb_reset">
                                    <div
                                        style={{ position: "absolute", top: "-10000px", width: 0, height: 0 }}
                                    >
                                        <div />
                                    </div>
                                </div>
                            </div>
                        </section>

                }

                <div id="hero" class="home">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h1 _msttexthash="651716" _msthash="50"> The best companies in Austria </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="subNavBar">
                    <div class="container">
                        <div class="d-flex justify-content-between align-items-stretch text-center">
                            <div class="item d-none d-md-flex align-items-center">
                                <span class="highlight" _msttexthash="157742" _msthash="51">Navigation</span>
                            </div>
                            <a class="item" href="/login-val">
                                <img src="https://www.herold.at/bewertungen/img/quickNav/tiptop.svg" alt="to the TIP TOP companies" _mstalt="502255" _msthash="52" />
                                <span _msttexthash="212433" _msthash="53">TIP TOP Company</span>
                            </a>
                            <a class="item" href="https://www.herold.at/bewertungen/echte-bewertungen/">
                                <img src="https://www.herold.at/bewertungen/img/quickNav/quality.svg" alt="for quality assurance" _mstalt="528554" _msthash="54" />
                                <font _mstmutation="1" _msttexthash="317668" _msthash="55">
                                    <span _mstmutation="1" _istranslated="1">Quality</span>
                                    <span class="break-md-down" _mstmutation="1" _istranslated="1">Assurance</span>
                                </font>
                                <span class="d-inline d-md-none">-</span>
                            </a>
                            <a class="item" href="https://www.herold.at/bewertungen/bewertung-schreiben/">
                                <img src="https://www.herold.at/bewertungen/img/quickNav/rating.svg" alt="To the evaluation tips" _mstalt="469404" _msthash="56" />
                                <font _mstmutation="1" _msttexthash="232414" _msthash="57">
                                    <span _mstmutation="1" _istranslated="1">Valuation</span>
                                    <span class="break-md-down" _mstmutation="1" _istranslated="1">Tips</span>
                                </font>
                                <span class="d-inline d-md-none">-</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="main-content">
                    <div class="contentBlock gray padTop">
                        <div class="container">
                            <section class="new row d-none d-md-flex">
                                <div class="d-md-flex bigTeaser">
                                    <div class="col-24 col-md limitWidth">
                                        <img src="https://www.herold.at/bewertungen/img/teaser/teaser_tiptopbig.jpg" class="img-fluid" />
                                    </div>
                                    <div class="col-24 col-md floatMe">
                                        <div class="text">
                                            <h2 _msttexthash="997802" _msthash="58">The most popular companies in Austria</h2>
                                            <p _msttexthash="12415338" _msthash="59">TIP TOP – these are the most popular companies in Austria, because they have been rated particularly well by a large number of users on Gradimo Skupaj .at.</p>
                                            <p _msttexthash="6845163" _msthash="60">Get inspired and find the most skilled hairdresser, the best restaurant or the most expert doctor in your area.</p>
                                            <a class="btn-hbd blue d-inline-block" href="/login-val" _msttexthash="425802" _msthash="61">To the TIP TOP companies</a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="new teaser d-flex d-md-none" _msthidden="4">
                                <div class="d-md-flex" _msthidden="4">
                                    <div class="image float" style={{ backgroundImage: "url(https://www.herold.at/bewertungen/img/teaser/teaser_tiptop.jpg)" }}></div>
                                    <div class="text" _msthidden="4">
                                        <h2 _msttexthash="1030757" _msthidden="1" _msthash="62">Die beliebtesten Firmen Österreichs</h2>
                                        <p _msttexthash="12392926" _msthidden="1" _msthash="63">TIP TOP – das sind die beliebtesten Firmen Österreichs, denn sie wurden von einer Vielzahl an User:innen auf Gradimo Skupaj .at besonders gut bewertet.</p>
                                        <p _msttexthash="8925774" _msthidden="1" _msthash="64">Lass dich inspirieren und finde den geschicktesten Frisör, das beste Restaurant oder den fachkundigsten Arzt in deiner Nähe.</p>
                                        <a class="btn-hbd blue d-inline-block" href="/login-val" _msttexthash="314899" _msthidden="1" _msthash="65">Zu den TIP TOP Firmen</a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="contentBlock gray padTop">
                        <div class="reviewBar">
                            <div class="container">
                                <section class="new d-md-flex">
                                    <div>
                                        <font _mstmutation="1" _msttexthash="1938989" _msthash="66">
                                            <span class="noBreak" _mstmutation="1" _istranslated="1">Who do you find TIP TOP?</span>
                                            <span class="noBreak" _mstmutation="1" _istranslated="1">Recommend your favorite company!</span>
                                        </font>
                                    </div>
                                    <div class="d-none d-md-block">
                                        <a class="btn-hbd blue toggleBewerten" href="javascript:void(0)" _msttexthash="97409" _msthash="67">Rate now</a>
                                    </div>
                                </section>
                            </div>
                            <div class="d-block d-md-none mobile" _msthidden="1">
                                <a class="btn-hbd blue d-inline-block toggleBewerten" href="javascript:void(0)" _msttexthash="237120" _msthidden="1" _msthash="68">Jetzt bewerten</a>
                            </div>
                        </div>
                    </div>
                    <div class="hidden rateCmp" id="rate_company" _msthidden="10">
                        <section _msthidden="10">
                            <div class="container" _msthidden="6">
                                <ul class="row list-unstyled reviewStepRow d-none d-md-flex" _msthidden="6">
                                    <li class="col" id="navStep1" _msthidden="2">
                                        <h3 _msttexthash="117780" _msthidden="1" _msthash="69">Schritt 1:</h3>
                                        <font _mstmutation="1" _msttexthash="179998" _msthidden="1" _msthash="70">Firma suchen</font>
                                    </li>
                                    <li class="col disabled" id="navStep2" _msthidden="2">
                                        <h3 _msttexthash="117962" _msthidden="1" _msthash="71">Schritt 2:</h3>
                                        <font _mstmutation="1" _msttexthash="313235" _msthidden="1" _msthash="72">Bewertung abgeben</font>
                                    </li>
                                    <li class="col disabled" id="navStep3" _msthidden="2">
                                        <h3 _msttexthash="118144" _msthidden="1" _msthash="73">Schritt 3:</h3>
                                        <font _mstmutation="1" _msttexthash="342277" _msthidden="1" _msthash="74">Beitrag abschicken</font>
                                    </li>
                                </ul>
                            </div>
                            <div class="container" _msthidden="4">
                                <div class="row wrap" id="wrap1" _msthidden="4">
                                    <form id="changeCompanyForm" action="newReview.json" method="get" _msthidden="4" data-tracked="true">
                                        <div class="d-block d-md-none" _msthidden="1">
                                            <h3 _msttexthash="431275" _msthidden="1" _msthash="75">Schritt 1: <span class="regular">Firma suchen</span>
                                            </h3>
                                        </div>
                                        <label for="companiesSearch" class="d-none d-md-inline-block" _msttexthash="350740" _msthidden="1" _msthash="76">Firmenname/PLZ/Ort:</label>
                                        <input type="hidden" id="companySID" name="sid" data-tracked="true" />
                                        <input type="hidden" name="provider" value="HEROLD" data-tracked="true" />
                                        <input type="text" id="companiesSearch" maxlength="100" value="" placeholder="Firmenname/PLZ/Ort" class="ui-autocomplete-input" autocomplete="off" _msthidden="A" _mstplaceholder="331890" _msthash="77" data-tracked="true" />
                                        <button class="btn-hbd blue reviewCompanyTracking" data-target="#wrap2" type="submit" _msttexthash="115050" _msthidden="1" _msthash="78">Bewerten</button>
                                    </form>
                                </div>
                                <div class="hidden wrap" id="wrap2"></div>
                                <div class="hidden wrap" id="wrap3"></div>
                            </div>
                        </section>
                    </div>

                    <div class="contentBlock gray padTop">
                        <div class="container">
                            <section class="new teaser ">
                                <div class="d-md-flex">
                                    <div class="image left" style={{ backgroundImage: "url(https://www.herold.at/bewertungen/img/teaser/teaser_quality.jpg)" }}></div>
                                    <div class="text">
                                        <h2 _msttexthash="653939" _msthash="79">Quality Assurance of Reviews</h2>
                                        <p _msttexthash="7233265" _msthash="80">Real reviews are very important to us, after all, you should be able to rely on the recommendations on our platform.</p>
                                        <p _msttexthash="13103740" _msthash="81">In order to be able to guarantee you the highest possible quality and authenticity of the reviews, we have implemented various quality assurance measures.</p>
                                        <a class="btn-hbd blue d-inline-block" href="/bewertungen/echte-bewertungen/" _msttexthash="554996" _msthash="82">How We Deliver Real Reviews</a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="contentBlock gray padAll">
                        <div class="container">
                            <section class="new teaser ">
                                <div class="d-md-flex">
                                    <div class="image right" style={{ backgroundImage: "url(https://www.herold.at/bewertungen/img/teaser/teaser_rating.jpg)" }}></div>
                                    <div class="text">
                                        <h2 _msttexthash="209378" _msthash="83">Write a review</h2>
                                        <p _msttexthash="3866278" _msthash="84">By rating a company on Gradimo Skupaj .at, you help other users choose a suitable provider.</p>
                                        <p _msttexthash="11292138" _msthash="85">You can find out how you can submit your reviews, what makes a good review and what general conditions you need to consider in our evaluation tips.</p>
                                        <a class="btn-hbd blue d-inline-block" href="/bewertungen/bewertung-schreiben/" _msttexthash="366418" _msthash="86">Tips for your review</a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="loginModal" tabindex="-1" role="dialog">
                    <div id="loginModalDialog" class="modal-dialog modal-lg" role="document" style={{ marginTop: "100px", height: "540px", backgroundColor: "#F2F2F2", maxWidth: "95%" }}>
                        <div class="modal-content" style={{ height: "100%" }}>
                            <iframe id="externalLoginIFrame" src="https://login.herold.at/externalLogin.do?type=email&amp;guestSuccessReferrer=https://www.herold.at/bewertungen/showAnonymSuccess.do?type=guest" style={{ height: "100%", width: "100%" }}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}