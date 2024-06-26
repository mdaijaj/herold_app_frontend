import { useState } from "react"

export const LoginValuationMain = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div id="grid">
                <div id="hero" class="tiptop">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h1 _msttexthash="997802" _msthash="50"> The most popular <br _istranslated="1" />companies in Austria </h1>
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
                            <a class="item" href="https://www.herold.at/bewertungen/">
                                <img src="https://www.herold.at/bewertungen/img/quickNav/overview.svg" alt="back to overview" _mstalt="226369" _msthash="52" />
                                <span _msttexthash="118079" _msthash="53">Overview</span>
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
                    <div class="contentBlock gray padAll">
                        <div class="container">
                            <div class="row">
                                <div class="col-24 blockTeaser">
                                    <img src="https://www.herold.at/bewertungen/img/tip-top/tip-top-port-2024.svg" />
                                    <h2 _msttexthash="532259" _msthash="58">Award-winning providers</h2>
                                    <p _msttexthash="8975850" _msthash="59">Here you will find a selection of highly recommended companies that have been rated particularly well by visitors to Gradimo Skupaj.at.</p>
                                    <p _msttexthash="12797330" _msthash="60">The TIP TOP seal of approval stands for quality features such as at least 4.1 stars and at least 90% recommendation rate, based on a relevant number of reviews.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contentBlock padAll">
                        <div class="container">
                            <div class="row">
                                <div class="col-24">
                                    <section class="container" data-pagetype="reviews_tiptop">
                                        <div class="row intro">
                                            <div class="col-24 center">
                                                <h2 _msttexthash="748514" _msthash="61">Recommended by Gradimo Skupaj.at users!</h2>
                                                <h3 _msttexthash="1653223" _msthash="62">Discover the TIP TOP company just around the corner</h3>
                                            </div>
                                            <div class="col-24 d-md-none" _msthidden="27">
                                                <div class="dropdownWrapper" _msthidden="17">
                                                    <div class="dropdown-hbd d-flex justify-content-between" onClick={() => { setShow(!show) }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" id="dropdownCategory" _msthidden="1">
                                                        <div class="align-self-center" _msttexthash="219232" _msthidden="1" _msthash="63">Essen &amp; Trinken</div>
                                                        <div class="align-self-center">
                                                            <i class="icon-arrow_down"></i>
                                                        </div>
                                                    </div>
                                                    <div class={show ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdownCategory" id="dropdownCategory" _msthidden="16">
                                                        <a class="dropdown-item" id="category1" href="?regionC=9&amp;categoryC=1" _msttexthash="219232" _msthidden="1" _msthash="64">Essen &amp; Trinken</a>
                                                        <a class="dropdown-item" id="category2" href="?regionC=9&amp;categoryC=1" _msttexthash="278798" _msthidden="1" _msthash="65">Beauty &amp; Wellness</a>
                                                        <a class="dropdown-item" id="category3" href="?regionC=9&amp;categoryC=1" _msttexthash="115648" _msthidden="1" _msthash="66">Shopping</a>
                                                        <a class="dropdown-item" id="category4" href="?regionC=9&amp;categoryC=1" _msttexthash="223600" _msthidden="1" _msthash="67">Sport &amp; Fitness</a>
                                                        <a class="dropdown-item" id="category5" href="?regionC=9&amp;categoryC=1" _msttexthash="482859" _msthidden="1" _msthash="68">Freizeit &amp; Unterhaltung</a>
                                                        <a class="dropdown-item" id="category6" href="?regionC=9&amp;categoryC=1" _msttexthash="305617" _msthidden="1" _msthash="69">Bauen &amp; Renovieren</a>
                                                        <a class="dropdown-item" id="category7" href="?regionC=9&amp;categoryC=1" _msttexthash="255957" _msthidden="1" _msthash="70">Auto &amp; Transport</a>
                                                        <a class="dropdown-item" id="category8" href="?regionC=9&amp;categoryC=1" _msttexthash="438880" _msthidden="1" _msthash="71">Bildung &amp; Wissenschaft</a>
                                                        <a class="dropdown-item" id="category9" href="?regionC=9&amp;categoryC=1" _msttexthash="179829" _msthidden="1" _msthash="72">Büro &amp; Arbeit </a>
                                                        <a class="dropdown-item" id="category10" href="?regionC=9&amp;categoryC=1" _msttexthash="219817" _msthidden="1" _msthash="73">IT &amp; Elektronik </a>
                                                        <a class="dropdown-item" id="category11" href="?regionC=9&amp;categoryC=1" _msttexthash="302835" _msthidden="1" _msthash="74">Medien &amp; Agenturen</a>
                                                        <a class="dropdown-item" id="category12" href="?regionC=9&amp;categoryC=1" _msttexthash="324792" _msthidden="1" _msthash="75">Dienstleistungen</a>
                                                        <a class="dropdown-item" id="category13" href="?regionC=9&amp;categoryC=1" _msttexthash="140725" _msthidden="1" _msthash="76">Gesund &amp; Fit</a>
                                                        <a class="dropdown-item" id="category14" href="?regionC=9&amp;categoryC=1" _msttexthash="161941" _msthidden="1" _msthash="77">Haustier &amp; Co</a>
                                                        <a class="dropdown-item" id="category16" href="?regionC=9&amp;categoryC=1" _msttexthash="142792" _msthidden="1" _msthash="78">Tourismus</a>
                                                        <a class="dropdown-item" id="category17" href="?regionC=9&amp;categoryC=1" _msttexthash="244556" _msthidden="1" _msthash="79">Recht &amp; Finanzen</a>
                                                    </div>
                                                </div>
                                                <div class="dropdownWrapper" _msthidden="10">
                                                    <div class="dropdown-hbd d-flex justify-content-between" onClick={() => { setShow(!show) }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" id="dropdownRegion" _msthidden="1">
                                                        <div class="align-self-center" _msttexthash="44954" _msthidden="1" _msthash="80">Wien</div>
                                                        <div class="align-self-center">
                                                            <i class="icon-arrow_down"></i>
                                                        </div>
                                                    </div>
                                                    <div class={show ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdownRegion" id="dropdownRegion" _msthidden="9">
                                                        <a class="dropdown-item" id="region1" href="?regionC=1&amp;categoryC=1" _msttexthash="154661" _msthidden="1" _msthash="81">Burgenland</a>
                                                        <a class="dropdown-item" id="region2" href="?regionC=2&amp;categoryC=1" _msttexthash="109109" _msthidden="1" _msthash="82">Kärnten</a>
                                                        <a class="dropdown-item" id="region3" href="?regionC=3&amp;categoryC=1" _msttexthash="342082" _msthidden="1" _msthash="83">Niederösterreich</a>
                                                        <a class="dropdown-item" id="region4" href="?regionC=4&amp;categoryC=1" _msttexthash="279448" _msthidden="1" _msthash="84">Oberösterreich</a>
                                                        <a class="dropdown-item" id="region5" href="?regionC=5&amp;categoryC=1" _msttexthash="116415" _msthidden="1" _msthash="85">Salzburg</a>
                                                        <a class="dropdown-item" id="region6" href="?regionC=6&amp;categoryC=1" _msttexthash="157872" _msthidden="1" _msthash="86">Steiermark</a>
                                                        <a class="dropdown-item" id="region7" href="?regionC=7&amp;categoryC=1" _msttexthash="61776" _msthidden="1" _msthash="87">Tirol</a>
                                                        <a class="dropdown-item" id="region8" href="?regionC=8&amp;categoryC=1" _msttexthash="157066" _msthidden="1" _msthash="88">Vorarlberg</a>
                                                        <a class="dropdown-item" id="region9" href="?regionC=9&amp;categoryC=1" _msttexthash="44954" _msthidden="1" _msthash="89">Wien</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-24 d-none d-md-block">
                                                <div class="dropdownWrapper desktop">
                                                    <div class="dropdown-hbd d-flex justify-content-between" onClick={() => { setShow(!show) }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" id="dropdownRegion">
                                                        <div class="align-self-center" _msttexthash="75725" _msthash="90">Vienna</div>
                                                        <div class="align-self-center">
                                                            <i class="icon-arrow_down"></i>
                                                        </div>
                                                    </div>
                                                    <div class={show ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdownRegion" id="dropdownRegion" _msthidden="9">
                                                        <a class="dropdown-item" id="region1" href="?regionC=1&amp;categoryC=1" _msttexthash="154661" _msthidden="1" _msthash="91">Burgenland</a>
                                                        <a class="dropdown-item" id="region2" href="?regionC=2&amp;categoryC=1" _msttexthash="109109" _msthidden="1" _msthash="92">Kärnten</a>
                                                        <a class="dropdown-item" id="region3" href="?regionC=3&amp;categoryC=1" _msttexthash="342082" _msthidden="1" _msthash="93">Niederösterreich</a>
                                                        <a class="dropdown-item" id="region4" href="?regionC=4&amp;categoryC=1" _msttexthash="279448" _msthidden="1" _msthash="94">Oberösterreich</a>
                                                        <a class="dropdown-item" id="region5" href="?regionC=5&amp;categoryC=1" _msttexthash="116415" _msthidden="1" _msthash="95">Salzburg</a>
                                                        <a class="dropdown-item" id="region6" href="?regionC=6&amp;categoryC=1" _msttexthash="157872" _msthidden="1" _msthash="96">Steiermark</a>
                                                        <a class="dropdown-item" id="region7" href="?regionC=7&amp;categoryC=1" _msttexthash="61776" _msthidden="1" _msthash="97">Tirol</a>
                                                        <a class="dropdown-item" id="region8" href="?regionC=8&amp;categoryC=1" _msttexthash="157066" _msthidden="1" _msthash="98">Vorarlberg</a>
                                                        <a class="dropdown-item" id="region9" href="?regionC=9&amp;categoryC=1" _msttexthash="44954" _msthidden="1" _msthash="99">Wien</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-24 d-none d-md-block mt-3">
                                                <p class="medium text-center" _msttexthash="520845" _msthash="100">Please select your state.</p>
                                            </div>
                                        </div>
                                        <div class="blockContent">
                                            <div class="row">
                                                <div class="col-24">
                                                    <h4 id="cat-heading" _msttexthash="546325" _msthash="101">TOP 10: Food &amp; Drink in Vienna</h4>
                                                    <p id="cat-subheading" class="d-none d-md-block" _msttexthash="4816084" _msthash="102">The ranking is based on the number of reviews, the overall grade and the recommendation rate.</p>
                                                </div>
                                            </div>
                                            <div class="d-flex">
                                                <div id="categoryList" class="d-none d-md-block">
                                                    <a class="category noHover active" href="?regionC=9&amp;categoryC=1">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/essen.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="142025" _msthash="103">Food &amp; Drink</h5>
                                                            </div>
                                                            <div _msttexthash="180154" _msthash="104">1,551 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=2">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/beauty.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="278798" _msthash="105">Beauty &amp; Wellness</h5>
                                                            </div>
                                                            <div _msttexthash="147290" _msthash="106">671 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=3">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/shopping.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="115648" _msthash="107">Shopping</h5>
                                                            </div>
                                                            <div _msttexthash="180648" _msthash="108">1,933 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=4">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/sport.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="223600" _msthash="109">Sport &amp; Fitness</h5>
                                                            </div>
                                                            <div _msttexthash="146497" _msthash="110">240 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=5">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/freizeit.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="481208" _msthash="111">Leisure &amp; Entertainment</h5>
                                                            </div>
                                                            <div _msttexthash="147732" _msthash="112">287 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=6">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/bauen.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="401986" _msthash="113">Building &amp; Renovating</h5>
                                                            </div>
                                                            <div _msttexthash="147472" _msthash="114">871 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=7">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/auto.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="380679" _msthash="115">Car &amp; Transportation</h5>
                                                            </div>
                                                            <div _msttexthash="147641" _msthash="116">593 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=8">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/bildung.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="324753" _msthash="117">Education &amp; Science</h5>
                                                            </div>
                                                            <div _msttexthash="146432" _msthash="118">122 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=9">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/buro.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="164554" _msthash="119">Office &amp; Work </h5>
                                                            </div>
                                                            <div _msttexthash="131391" _msthash="120">75 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=10">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/it.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="246389" _msthash="121">IT &amp; Electronics </h5>
                                                            </div>
                                                            <div _msttexthash="147719" _msthash="122">377 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=11">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/medien.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="236262" _msthash="123">Media &amp; Agencies</h5>
                                                            </div>
                                                            <div _msttexthash="146523" _msthash="124">303 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=12">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/dienstleistungen.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="115193" _msthash="125">Services</h5>
                                                            </div>
                                                            <div _msttexthash="148382" _msthash="126">897 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=13">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/gesund.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="163748" _msthash="127">Healthy &amp; Fit</h5>
                                                            </div>
                                                            <div _msttexthash="180466" _msthash="128">2,417 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=14">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/haustier.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="63193" _msthash="129">Pet &amp; Co</h5>
                                                            </div>
                                                            <div _msttexthash="146640" _msthash="130">223 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=16">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/tourismus.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="99073" _msthash="131">Tourism</h5>
                                                            </div>
                                                            <div _msttexthash="147342" _msthash="132">148 reviews</div>
                                                        </div>
                                                    </a>
                                                    <a class="category noHover" href="?regionC=9&amp;categoryC=17">
                                                        <div class="image">
                                                            <img src="https://www.herold.at/bewertungen/img/heading/recht.svg" />
                                                        </div>
                                                        <div class="text">
                                                            <div>
                                                                <h5 _msttexthash="208442" _msthash="133">Legal &amp; Finance</h5>
                                                            </div>
                                                            <div _msttexthash="147095" _msthash="134">561 reviews</div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="w-100">
                                                    <div class="companyItem" data-sid="930595" data-heading="Restaurant" data-tiptop="true" data-category="Essen &amp; Trinken">
                                                        <div class="row main">
                                                            <div class="col companyLogo">
                                                                <img src="https://www.herold.at/FS/app/4/6/0/6506064.png" class="img-fluid" alt="OMNOM BURGER GmbH" _mstalt="220181" _msthash="135" />
                                                            </div>
                                                            <div class="col companyOverview">
                                                                <h5>
                                                                    <a href="/rest-az" id="companyLink930595" _msttexthash="220181" _msthash="136">OMNOM BURGER GmbH</a>
                                                                </h5>
                                                                <div class="bottom">
                                                                    <div class="address d-none d-md-block">
                                                                        <a class="highlight" href="/rest-az" _msttexthash="735397" _msthash="137"> Wiedner Hauptstr 125/3, 1050 Vienna </a>
                                                                    </div>
                                                                    <div class="review">
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <font _mstmutation="1" _msttexthash="52793" _msthash="139">
                                                                            <b _mstmutation="1" _istranslated="1">4.8</b>
                                                                            <span _mstmutation="1" _istranslated="1">(235)</span>
                                                                        </font>
                                                                        <img src="https://www.herold.at/bewertungen/img/tip-top/tip-top-land-2017.svg" alt="TIP TOP" _mstalt="59293" _msthash="138" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col companyContact d-none d-md-flex">
                                                                <a class="d-block btn-hbd lightGray" href="https://www.omnomburger.at" data-category="Weblink_result" data-action="click" data-label="REVIEWS:930595" _msttexthash="95017" _msthash="140">Website</a>
                                                                <div class="bottom">
                                                                    <button class="d-none d-md-flex btn btn-hbd yellow hasIcon fullWidth showPhone ellipsis switch btn-md" data-category="Telefonnummer_result" data-action="show" data-label="REVIEWS:930595">
                                                                        <i class="icon-phone"></i>
                                                                        <font _mstmutation="1" _msttexthash="87646" _msthash="141"> Show no. </font>
                                                                    </button>
                                                                    <a class="d-none d-md-block btn btn-hbd yellow fullWidth callPhone hidden ellipsis hasIcon" href="tel:+436607071015" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:930595" _msttexthash="111631" _msthidden="1" _msthash="142">+436607071015</a>
                                                                </div>
                                                            </div>
                                                            <span class="tag-counter" _msttexthash="4459" _msthash="143">1</span>
                                                        </div>
                                                        <div class="d-flex d-md-none address" _msthidden="1">
                                                            <a class="highlight" href="/rest-az" _msttexthash="637676" _msthidden="1" _msthash="144">
                                                                <i class="icon icon-pin" aria-hidden="true"></i> Wiedner Hauptstr 125/3, <br />1050 Wien </a>
                                                        </div>
                                                        <div class="d-flex d-md-none buttons" _msthidden="2">
                                                            <div class="col" _msthidden="1">
                                                                <a class="d-block btn-hbd gray" href="https://www.omnomburger.at" data-category="Weblink_result" data-action="click" data-label="REVIEWS:930595" _msttexthash="95017" _msthidden="1" _msthash="145">Website</a>
                                                            </div>
                                                            <div class="col phone" _msthidden="1">
                                                                <a class="btn-hbd yellow hasIcon" href="tel:+436607071015" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:930595" _msthidden="1">
                                                                    <i class="icon-phone"></i>
                                                                    <font _mstmutation="1" _msttexthash="94835" _msthidden="1" _msthash="146"> Anrufen </font>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="companyItem" data-sid="241387" data-heading="Gasthaus u Gasthof" data-tiptop="true" data-category="Essen &amp; Trinken">
                                                        <div class="row main">
                                                            <div class="col companyLogo">
                                                                <img src="https://www.herold.at/FS/app/4/6/0/6506064.png" class="img-fluid" alt="Gaststätte Pistauer Ramsauer Christian e.U." _mstalt="1326338" _msthash="147" />
                                                            </div>
                                                            <div class="col companyOverview">
                                                                <h5>
                                                                    <a href="https://www.herold.at/gelbe-seiten/wien/5NwvV/gastst%C3%A4tte-pistauer-ramsauer-christian-eu/" id="companyLink241387" _msttexthash="1326338" _msthash="148">Gaststätte Pistauer Ramsauer Christian e.U.</a>
                                                                </h5>
                                                                <div class="bottom">
                                                                    <div class="address d-none d-md-block">
                                                                        <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/5NwvV/gastst%C3%A4tte-pistauer-ramsauer-christian-eu/?showmap=true" _msttexthash="571701" _msthash="149"> Ravelinstraße 3 , 1110 Vienna </a>
                                                                    </div>
                                                                    <div class="review">
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <font _mstmutation="1" _msttexthash="43862" _msthash="151">
                                                                            <b _mstmutation="1" _istranslated="1">4.9</b>
                                                                            <span _mstmutation="1" _istranslated="1">(44)</span>
                                                                        </font>
                                                                        <img src="https://www.herold.at/bewertungen/img/tip-top/tip-top-land-2019.svg" alt="TIP TOP" _mstalt="59293" _msthash="150" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col companyContact d-none d-md-flex">
                                                                <a class="d-block btn-hbd lightGray" href="https://www.pistauer.at" data-category="Weblink_result" data-action="click" data-label="REVIEWS:241387" _msttexthash="95017" _msthash="152">Website</a>
                                                                <div class="bottom">
                                                                    <button class="d-none d-md-flex btn btn-hbd yellow hasIcon fullWidth showPhone ellipsis switch btn-md" data-category="Telefonnummer_result" data-action="show" data-label="REVIEWS:241387">
                                                                        <i class="icon-phone"></i>
                                                                        <font _mstmutation="1" _msttexthash="87646" _msthash="153"> Show no. </font>
                                                                    </button>
                                                                    <a class="d-none d-md-block btn btn-hbd yellow fullWidth callPhone hidden ellipsis hasIcon" href="tel:+4317672510" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:241387" _msttexthash="87477" _msthidden="1" _msthash="154">+4317672510</a>
                                                                </div>
                                                            </div>
                                                            <span class="tag-counter" _msttexthash="4550" _msthash="155">2</span>
                                                        </div>
                                                        <div class="d-flex d-md-none address" _msthidden="1">
                                                            <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/5NwvV/gastst%C3%A4tte-pistauer-ramsauer-christian-eu/?showmap=true" _msttexthash="490048" _msthidden="1" _msthash="156">
                                                                <i class="icon icon-pin" aria-hidden="true"></i> Ravelinstraße 3 , <br />1110 Wien </a>
                                                        </div>
                                                        <div class="d-flex d-md-none buttons" _msthidden="2">
                                                            <div class="col" _msthidden="1">
                                                                <a class="d-block btn-hbd gray" href="https://www.pistauer.at" data-category="Weblink_result" data-action="click" data-label="REVIEWS:241387" _msttexthash="95017" _msthidden="1" _msthash="157">Website</a>
                                                            </div>
                                                            <div class="col phone" _msthidden="1">
                                                                <a class="btn-hbd yellow hasIcon" href="tel:+4317672510" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:241387" _msthidden="1">
                                                                    <i class="icon-phone"></i>
                                                                    <font _mstmutation="1" _msttexthash="94835" _msthidden="1" _msthash="158"> Anrufen </font>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="companyItem" data-sid="883083" data-heading="Restaurant / Griechisch" data-tiptop="false" data-category="Essen &amp; Trinken">
                                                        <div class="row main">
                                                            <div class="col companyLogo">
                                                                <img src="https://www.herold.at/FS/app/4/6/0/6506064.png" class="img-fluid" alt="Restaurant Ambrosia Christos Tzirmpis KG" _mstalt="1186640" _msthash="159" />
                                                            </div>
                                                            <div class="col companyOverview">
                                                                <h5>
                                                                    <a href="https://www.herold.at/gelbe-seiten/wien/vzVPg/restaurant-ambrosia-christos-tzirmpis-kg/" id="companyLink883083" _msttexthash="1186640" _msthash="160">Restaurant Ambrosia Christos Tzirmpis KG</a>
                                                                </h5>
                                                                <div class="bottom">
                                                                    <div class="address d-none d-md-block">
                                                                        <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/vzVPg/restaurant-ambrosia-christos-tzirmpis-kg/?showmap=true" _msttexthash="592761" _msthash="161"> Speisinger Str 201, 1230 Vienna </a>
                                                                    </div>
                                                                    <div class="review">
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <font _mstmutation="1" _msttexthash="44499" _msthash="162">
                                                                            <b _mstmutation="1" _istranslated="1">4.9</b>
                                                                            <span _mstmutation="1" _istranslated="1">(39)</span>
                                                                        </font>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col companyContact d-none d-md-flex">
                                                                <a class="d-block btn-hbd lightGray" href="https://restaurant-ambrosia-wien.eatbu.com" data-category="Weblink_result" data-action="click" data-label="REVIEWS:883083" _msttexthash="95017" _msthash="163">Website</a>
                                                                <div class="bottom">
                                                                    <button class="d-none d-md-flex btn btn-hbd yellow hasIcon fullWidth showPhone ellipsis switch btn-md" data-category="Telefonnummer_result" data-action="show" data-label="REVIEWS:883083">
                                                                        <i class="icon-phone"></i>
                                                                        <font _mstmutation="1" _msttexthash="87646" _msthash="164"> Show no. </font>
                                                                    </button>
                                                                    <a class="d-none d-md-block btn btn-hbd yellow fullWidth callPhone hidden ellipsis hasIcon" href="tel:+4318881075" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:883083" _msttexthash="89297" _msthidden="1" _msthash="165">+4318881075</a>
                                                                </div>
                                                            </div>
                                                            <span class="tag-counter" _msttexthash="4641" _msthash="166">3</span>
                                                        </div>
                                                        <div class="d-flex d-md-none address" _msthidden="1">
                                                            <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/vzVPg/restaurant-ambrosia-christos-tzirmpis-kg/?showmap=true" _msttexthash="505752" _msthidden="1" _msthash="167">
                                                                <i class="icon icon-pin" aria-hidden="true"></i> Speisinger Str 201, <br />1230 Wien </a>
                                                        </div>
                                                        <div class="d-flex d-md-none buttons" _msthidden="2">
                                                            <div class="col" _msthidden="1">
                                                                <a class="d-block btn-hbd gray" href="https://restaurant-ambrosia-wien.eatbu.com" data-category="Weblink_result" data-action="click" data-label="REVIEWS:883083" _msttexthash="95017" _msthidden="1" _msthash="168">Website</a>
                                                            </div>
                                                            <div class="col phone" _msthidden="1">
                                                                <a class="btn-hbd yellow hasIcon" href="tel:+4318881075" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:883083" _msthidden="1">
                                                                    <i class="icon-phone"></i>
                                                                    <font _mstmutation="1" _msttexthash="94835" _msthidden="1" _msthash="169"> Anrufen </font>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="companyItem" data-sid="920981" data-heading="Kaffeehaus" data-tiptop="false" data-category="Essen &amp; Trinken">
                                                        <div class="row main">
                                                            <div class="col companyLogo">
                                                                <img src="https://www.herold.at/FS/app/4/6/0/6506064.png" class="img-fluid" alt="Shop of Wonders" _mstalt="181818" _msthash="170" />
                                                            </div>
                                                            <div class="col companyOverview">
                                                                <h5>
                                                                    <a href="https://www.herold.at/gelbe-seiten/wien/K98LQ/wunderladen/" id="companyLink920981" _msttexthash="232258" _msthash="171">Shop of Wonders</a>
                                                                </h5>
                                                                <div class="bottom">
                                                                    <div class="address d-none d-md-block">
                                                                        <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/K98LQ/wunderladen/?showmap=true" _msttexthash="639418" _msthash="172"> Argentinierstr 1-3, 1040 Vienna </a>
                                                                    </div>
                                                                    <div class="review">
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <font _mstmutation="1" _msttexthash="26936" _msthash="173">
                                                                            <b _mstmutation="1" _istranslated="1">5</b>
                                                                            <span _mstmutation="1" _istranslated="1">(20)</span>
                                                                        </font>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col companyContact d-none d-md-flex">
                                                                <a class="d-block btn-hbd lightGray" href="http://www.wunderladenmodecafe.at/" data-category="Weblink_result" data-action="click" data-label="REVIEWS:920981" _msttexthash="95017" _msthash="174">Website</a>
                                                                <div class="bottom">
                                                                    <button class="d-none d-md-flex btn btn-hbd yellow hasIcon fullWidth showPhone ellipsis switch btn-md" data-category="Telefonnummer_result" data-action="show" data-label="REVIEWS:920981">
                                                                        <i class="icon-phone"></i>
                                                                        <font _mstmutation="1" _msttexthash="87646" _msthash="175"> Show no. </font>
                                                                    </button>
                                                                    <a class="d-none d-md-block btn btn-hbd yellow fullWidth callPhone hidden ellipsis hasIcon" href="tel:+436607735863" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:920981" _msttexthash="115401" _msthidden="1" _msthash="176">+436607735863</a>
                                                                </div>
                                                            </div>
                                                            <span class="tag-counter" _msttexthash="4732" _msthash="177">4</span>
                                                        </div>
                                                        <div class="d-flex d-md-none address" _msthidden="1">
                                                            <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/K98LQ/wunderladen/?showmap=true" _msttexthash="549731" _msthidden="1" _msthash="178">
                                                                <i class="icon icon-pin" aria-hidden="true"></i> Argentinierstr 1-3, <br />1040 Wien </a>
                                                        </div>
                                                        <div class="d-flex d-md-none buttons" _msthidden="2">
                                                            <div class="col" _msthidden="1">
                                                                <a class="d-block btn-hbd gray" href="http://www.wunderladenmodecafe.at/" data-category="Weblink_result" data-action="click" data-label="REVIEWS:920981" _msttexthash="95017" _msthidden="1" _msthash="179">Website</a>
                                                            </div>
                                                            <div class="col phone" _msthidden="1">
                                                                <a class="btn-hbd yellow hasIcon" href="tel:+436607735863" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:920981" _msthidden="1">
                                                                    <i class="icon-phone"></i>
                                                                    <font _mstmutation="1" _msttexthash="94835" _msthidden="1" _msthash="180"> Anrufen </font>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="companyItem" data-sid="380146" data-heading="Eissalon" data-tiptop="true" data-category="Essen &amp; Trinken">
                                                        <div class="row main">
                                                            <div class="col companyLogo">
                                                                <img src="https://www.herold.at/FS/app/4/6/0/6506064.png" class="img-fluid" alt="SOMMARIVA" _mstalt="97539" _msthash="181" />
                                                            </div>
                                                            <div class="col companyOverview">
                                                                <h5>
                                                                    <a href="https://www.herold.at/gelbe-seiten/wien/rzdLT/sommariva/" id="companyLink380146" _msttexthash="97539" _msthash="182">SOMMARIVA</a>
                                                                </h5>
                                                                <div class="bottom">
                                                                    <div class="address d-none d-md-block">
                                                                        <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/rzdLT/sommariva/?showmap=true" _msttexthash="389688" _msthash="183"> Alser Str 45, 1080 Vienna </a>
                                                                    </div>
                                                                    <div class="review">
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <font _mstmutation="1" _msttexthash="43095" _msthash="185">
                                                                            <b _mstmutation="1" _istranslated="1">4.9</b>
                                                                            <span _mstmutation="1" _istranslated="1">(30)</span>
                                                                        </font>
                                                                        <img src="https://www.herold.at/bewertungen/img/tip-top/tip-top-land-2019.svg" alt="TIP TOP" _mstalt="59293" _msthash="184" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col companyContact d-none d-md-flex">
                                                                <a class="d-block btn-hbd lightGray" href="https://www.herold.at/gelbe-seiten/wien/rzdLT/sommariva/" _msttexthash="177125" _msthash="186">View Details</a>
                                                                <div class="bottom">
                                                                    <button class="d-none d-md-flex btn btn-hbd yellow hasIcon fullWidth showPhone ellipsis switch btn-md" data-category="Telefonnummer_result" data-action="show" data-label="REVIEWS:380146">
                                                                        <i class="icon-phone"></i>
                                                                        <font _mstmutation="1" _msttexthash="87646" _msthash="187"> Show no. </font>
                                                                    </button>
                                                                    <a class="d-none d-md-block btn btn-hbd yellow fullWidth callPhone hidden ellipsis hasIcon" href="tel:+4314056005" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:380146" _msttexthash="86424" _msthidden="1" _msthash="188">+4314056005</a>
                                                                </div>
                                                            </div>
                                                            <span class="tag-counter" _msttexthash="4823" _msthash="189">5</span>
                                                        </div>
                                                        <div class="d-flex d-md-none address" _msthidden="1">
                                                            <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/rzdLT/sommariva/?showmap=true" _msttexthash="318747" _msthidden="1" _msthash="190">
                                                                <i class="icon icon-pin" aria-hidden="true"></i> Alser Str 45, <br />1080 Wien </a>
                                                        </div>
                                                        <div class="d-flex d-md-none buttons" _msthidden="2">
                                                            <div class="col" _msthidden="1">
                                                                <a class="d-block btn-hbd gray" href="" data-category="Weblink_result" data-action="click" data-label="REVIEWS:380146" _msttexthash="95017" _msthidden="1" _msthash="191">Website</a>
                                                            </div>
                                                            <div class="col phone" _msthidden="1">
                                                                <a class="btn-hbd yellow hasIcon" href="tel:+4314056005" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:380146" _msthidden="1">
                                                                    <i class="icon-phone"></i>
                                                                    <font _mstmutation="1" _msttexthash="94835" _msthidden="1" _msthash="192"> Anrufen </font>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="companyItem" data-sid="440687" data-heading="Kaffeekonditorei" data-tiptop="true" data-category="Essen &amp; Trinken">
                                                        <div class="row main">
                                                            <div class="col companyLogo">
                                                                <img src="https://www.herold.at/FS/app/4/6/0/6506064.png" class="img-fluid" alt="Groissböck Cafe &amp; Confectionery" _mstalt="813267" _msthash="193" />
                                                            </div>
                                                            <div class="col companyOverview">
                                                                <h5>
                                                                    <a href="https://www.herold.at/gelbe-seiten/wien/Dj8vG/groissb%C3%B6ck-cafe-konditorei/" id="companyLink440687" _msttexthash="784108" _msthash="194">Groissböck Cafe &amp; Confectionery</a>
                                                                </h5>
                                                                <div class="bottom">
                                                                    <div class="address d-none d-md-block">
                                                                        <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/Dj8vG/groissb%C3%B6ck-cafe-konditorei/?showmap=true" _msttexthash="561847" _msthash="195"> Favoritenstr 128, 1100 Vienna </a>
                                                                    </div>
                                                                    <div class="review">
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <font _mstmutation="1" _msttexthash="43303" _msthash="197">
                                                                            <b _mstmutation="1" _istranslated="1">4.7</b>
                                                                            <span _mstmutation="1" _istranslated="1">(51)</span>
                                                                        </font>
                                                                        <img src="https://www.herold.at/bewertungen/img/tip-top/tip-top-land-2016.svg" alt="TIP TOP" _mstalt="59293" _msthash="196" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col companyContact d-none d-md-flex">
                                                                <a class="d-block btn-hbd lightGray" href="https://www.groissboeck.at" data-category="Weblink_result" data-action="click" data-label="REVIEWS:440687" _msttexthash="95017" _msthash="198">Website</a>
                                                                <div class="bottom">
                                                                    <button class="d-none d-md-flex btn btn-hbd yellow hasIcon fullWidth showPhone ellipsis switch btn-md" data-category="Telefonnummer_result" data-action="show" data-label="REVIEWS:440687">
                                                                        <i class="icon-phone"></i>
                                                                        <font _mstmutation="1" _msttexthash="87646" _msthash="199"> Show no. </font>
                                                                    </button>
                                                                    <a class="d-none d-md-block btn btn-hbd yellow fullWidth callPhone hidden ellipsis hasIcon" href="tel:+4316035589" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:440687" _msttexthash="89713" _msthidden="1" _msthash="200">+4316035589</a>
                                                                </div>
                                                            </div>
                                                            <span class="tag-counter" _msttexthash="4914" _msthash="201">6</span>
                                                        </div>
                                                        <div class="d-flex d-md-none address" _msthidden="1">
                                                            <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/Dj8vG/groissb%C3%B6ck-cafe-konditorei/?showmap=true" _msttexthash="477516" _msthidden="1" _msthash="202">
                                                                <i class="icon icon-pin" aria-hidden="true"></i> Favoritenstr 128, <br />1100 Wien </a>
                                                        </div>
                                                        <div class="d-flex d-md-none buttons" _msthidden="2">
                                                            <div class="col" _msthidden="1">
                                                                <a class="d-block btn-hbd gray" href="https://www.groissboeck.at" data-category="Weblink_result" data-action="click" data-label="REVIEWS:440687" _msttexthash="95017" _msthidden="1" _msthash="203">Website</a>
                                                            </div>
                                                            <div class="col phone" _msthidden="1">
                                                                <a class="btn-hbd yellow hasIcon" href="tel:+4316035589" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:440687" _msthidden="1">
                                                                    <i class="icon-phone"></i>
                                                                    <font _mstmutation="1" _msttexthash="94835" _msthidden="1" _msthash="204"> Anrufen </font>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="companyItem" data-sid="403737" data-heading="Restaurant / Italienisch" data-tiptop="true" data-category="Essen &amp; Trinken">
                                                        <div class="row main">
                                                            <div class="col companyLogo">
                                                                <img src="https://www.herold.at/FS/app/4/6/0/6506064.png" class="img-fluid" alt="Trattoria Martinelli" _mstalt="416234" _msthash="205" />
                                                            </div>
                                                            <div class="col companyOverview">
                                                                <h5>
                                                                    <a href="https://www.herold.at/gelbe-seiten/wien/nLZgk/trattoria-martinelli/" id="companyLink403737" _msttexthash="416234" _msthash="206">Trattoria Martinelli</a>
                                                                </h5>
                                                                <div class="bottom">
                                                                    <div class="address d-none d-md-block">
                                                                        <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/nLZgk/trattoria-martinelli/?showmap=true" _msttexthash="411554" _msthash="207"> Freyung 3-3a, 1010 Vienna </a>
                                                                    </div>
                                                                    <div class="review">
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <font _mstmutation="1" _msttexthash="44408" _msthash="209">
                                                                            <b _mstmutation="1" _istranslated="1">4.7</b>
                                                                            <span _mstmutation="1" _istranslated="1">(49)</span>
                                                                        </font>
                                                                        <img src="https://www.herold.at/bewertungen/img/tip-top/tip-top-land-2016.svg" alt="TIP TOP" _mstalt="59293" _msthash="208" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col companyContact d-none d-md-flex">
                                                                <a class="d-block btn-hbd lightGray" href="https://www.barbaro.at/trattoriamartinelli" data-category="Weblink_result" data-action="click" data-label="REVIEWS:403737" _msttexthash="95017" _msthash="210">Website</a>
                                                                <div class="bottom">
                                                                    <button class="d-none d-md-flex btn btn-hbd yellow hasIcon fullWidth showPhone ellipsis switch btn-md" data-category="Telefonnummer_result" data-action="show" data-label="REVIEWS:403737">
                                                                        <i class="icon-phone"></i>
                                                                        <font _mstmutation="1" _msttexthash="87646" _msthash="211"> Show no. </font>
                                                                    </button>
                                                                    <a class="d-none d-md-block btn btn-hbd yellow fullWidth callPhone hidden ellipsis hasIcon" href="tel:+4315336721" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:403737" _msttexthash="87594" _msthidden="1" _msthash="212">+4315336721</a>
                                                                </div>
                                                            </div>
                                                            <span class="tag-counter" _msttexthash="5005" _msthash="213">7</span>
                                                        </div>
                                                        <div class="d-flex d-md-none address" _msthidden="1">
                                                            <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/nLZgk/trattoria-martinelli/?showmap=true" _msttexthash="337935" _msthidden="1" _msthash="214">
                                                                <i class="icon icon-pin" aria-hidden="true"></i> Freyung 3-3a, <br />1010 Wien </a>
                                                        </div>
                                                        <div class="d-flex d-md-none buttons" _msthidden="2">
                                                            <div class="col" _msthidden="1">
                                                                <a class="d-block btn-hbd gray" href="https://www.barbaro.at/trattoriamartinelli" data-category="Weblink_result" data-action="click" data-label="REVIEWS:403737" _msttexthash="95017" _msthidden="1" _msthash="215">Website</a>
                                                            </div>
                                                            <div class="col phone" _msthidden="1">
                                                                <a class="btn-hbd yellow hasIcon" href="tel:+4315336721" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:403737" _msthidden="1">
                                                                    <i class="icon-phone"></i>
                                                                    <font _mstmutation="1" _msttexthash="94835" _msthidden="1" _msthash="216"> Anrufen </font>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="companyItem" data-sid="917722" data-heading="Restaurant / Griechisch" data-tiptop="true" data-category="Essen &amp; Trinken">
                                                        <div class="row main">
                                                            <div class="col companyLogo">
                                                                <img src="https://www.herold.at/FS/app/4/6/0/6506064.png" class="img-fluid" alt="Restaurant Athos Christos Tzirmpis KG" _mstalt="1023022" _msthash="217" />
                                                            </div>
                                                            <div class="col companyOverview">
                                                                <h5>
                                                                    <a href="https://www.herold.at/gelbe-seiten/wien/HhpBq/restaurant-athos-christos-tzirmpis-kg/" id="companyLink917722" _msttexthash="1023022" _msthash="218">Restaurant Athos Christos Tzirmpis KG</a>
                                                                </h5>
                                                                <div class="bottom">
                                                                    <div class="address d-none d-md-block">
                                                                        <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/HhpBq/restaurant-athos-christos-tzirmpis-kg/?showmap=true" _msttexthash="359268" _msthash="219"> Ketzerg 80, 1230 Vienna </a>
                                                                    </div>
                                                                    <div class="review">
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <font _mstmutation="1" _msttexthash="44070" _msthash="221">
                                                                            <b _mstmutation="1" _istranslated="1">4.8</b>
                                                                            <span _mstmutation="1" _istranslated="1">(37)</span>
                                                                        </font>
                                                                        <img src="https://www.herold.at/bewertungen/img/tip-top/tip-top-land-2016.svg" alt="TIP TOP" _mstalt="59293" _msthash="220" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col companyContact d-none d-md-flex">
                                                                <a class="d-block btn-hbd lightGray" href="https://restaurant-athos.eatbu.com" data-category="Weblink_result" data-action="click" data-label="REVIEWS:917722" _msttexthash="95017" _msthash="222">Website</a>
                                                                <div class="bottom">
                                                                    <button class="d-none d-md-flex btn btn-hbd yellow hasIcon fullWidth showPhone ellipsis switch btn-md" data-category="Telefonnummer_result" data-action="show" data-label="REVIEWS:917722">
                                                                        <i class="icon-phone"></i>
                                                                        <font _mstmutation="1" _msttexthash="87646" _msthash="223"> Show no. </font>
                                                                    </button>
                                                                    <a class="d-none d-md-block btn btn-hbd yellow fullWidth callPhone hidden ellipsis hasIcon" href="tel:+4319445168" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:917722" _msttexthash="89518" _msthidden="1" _msthash="224">+4319445168</a>
                                                                </div>
                                                            </div>
                                                            <span class="tag-counter" _msttexthash="5096" _msthash="225">8</span>
                                                        </div>
                                                        <div class="d-flex d-md-none address" _msthidden="1">
                                                            <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/HhpBq/restaurant-athos-christos-tzirmpis-kg/?showmap=true" _msttexthash="291005" _msthidden="1" _msthash="226">
                                                                <i class="icon icon-pin" aria-hidden="true"></i> Ketzerg 80, <br />1230 Wien </a>
                                                        </div>
                                                        <div class="d-flex d-md-none buttons" _msthidden="2">
                                                            <div class="col" _msthidden="1">
                                                                <a class="d-block btn-hbd gray" href="https://restaurant-athos.eatbu.com" data-category="Weblink_result" data-action="click" data-label="REVIEWS:917722" _msttexthash="95017" _msthidden="1" _msthash="227">Website</a>
                                                            </div>
                                                            <div class="col phone" _msthidden="1">
                                                                <a class="btn-hbd yellow hasIcon" href="tel:+4319445168" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:917722" _msthidden="1">
                                                                    <i class="icon-phone"></i>
                                                                    <font _mstmutation="1" _msttexthash="94835" _msthidden="1" _msthash="228"> Anrufen </font>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="companyItem" data-sid="708152" data-heading="Restaurant" data-tiptop="false" data-category="Essen &amp; Trinken">
                                                        <div class="row main">
                                                            <div class="col companyLogo">
                                                                <img src="https://www.herold.at/FS/app/4/6/0/6506064.png" class="img-fluid" alt="EF16 Restaurant Wine Bar" _mstalt="465816" _msthash="229" />
                                                            </div>
                                                            <div class="col companyOverview">
                                                                <h5>
                                                                    <a href="https://www.herold.at/gelbe-seiten/wien/sm4rW/ef16-restaurant-weinbar/" id="companyLink708152" _msttexthash="455247" _msthash="230">EF16 Restaurant Wine Bar</a>
                                                                </h5>
                                                                <div class="bottom">
                                                                    <div class="address d-none d-md-block">
                                                                        <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/sm4rW/ef16-restaurant-weinbar/?showmap=true" _msttexthash="529347" _msthash="231"> Fleischmarkt 16, 1010 Vienna </a>
                                                                    </div>
                                                                    <div class="review">
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <font _mstmutation="1" _msttexthash="20748" _msthash="232">
                                                                            <b _mstmutation="1" _istranslated="1">5</b>
                                                                            <span _mstmutation="1" _istranslated="1">(7)</span>
                                                                        </font>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col companyContact d-none d-md-flex">
                                                                <a class="d-block btn-hbd lightGray" href="https://www.ef16.at" data-category="Weblink_result" data-action="click" data-label="REVIEWS:708152" _msttexthash="95017" _msthash="233">Website</a>
                                                                <div class="bottom">
                                                                    <button class="d-none d-md-flex btn btn-hbd yellow hasIcon fullWidth showPhone ellipsis switch btn-md" data-category="Telefonnummer_result" data-action="show" data-label="REVIEWS:708152">
                                                                        <i class="icon-phone"></i>
                                                                        <font _mstmutation="1" _msttexthash="87646" _msthash="234"> Show no. </font>
                                                                    </button>
                                                                    <a class="d-none d-md-block btn btn-hbd yellow fullWidth callPhone hidden ellipsis hasIcon" href="tel:+4315132318" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:708152" _msttexthash="87113" _msthidden="1" _msthash="235">+4315132318</a>
                                                                </div>
                                                            </div>
                                                            <span class="tag-counter" _msttexthash="5187" _msthash="236">9</span>
                                                        </div>
                                                        <div class="d-flex d-md-none address" _msthidden="1">
                                                            <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/sm4rW/ef16-restaurant-weinbar/?showmap=true" _msttexthash="447694" _msthidden="1" _msthash="237">
                                                                <i class="icon icon-pin" aria-hidden="true"></i> Fleischmarkt 16, <br />1010 Wien </a>
                                                        </div>
                                                        <div class="d-flex d-md-none buttons" _msthidden="2">
                                                            <div class="col" _msthidden="1">
                                                                <a class="d-block btn-hbd gray" href="https://www.ef16.at" data-category="Weblink_result" data-action="click" data-label="REVIEWS:708152" _msttexthash="95017" _msthidden="1" _msthash="238">Website</a>
                                                            </div>
                                                            <div class="col phone" _msthidden="1">
                                                                <a class="btn-hbd yellow hasIcon" href="tel:+4315132318" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:708152" _msthidden="1">
                                                                    <i class="icon-phone"></i>
                                                                    <font _mstmutation="1" _msttexthash="94835" _msthidden="1" _msthash="239"> Anrufen </font>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="companyItem" data-sid="773819" data-heading="Restaurant / Italienisch" data-tiptop="false" data-category="Essen &amp; Trinken">
                                                        <div class="row main">
                                                            <div class="col companyLogo">
                                                                <img src="https://www.herold.at/FS/app/4/6/0/6506064.png" class="img-fluid" alt="Casa Mia" _mstalt="86034" _msthash="240" />
                                                            </div>
                                                            <div class="col companyOverview">
                                                                <h5>
                                                                    <a href="https://www.herold.at/gelbe-seiten/wien/vDw1l/casa-mia/" id="companyLink773819" _msttexthash="86034" _msthash="241">Casa Mia</a>
                                                                </h5>
                                                                <div class="bottom">
                                                                    <div class="address d-none d-md-block">
                                                                        <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/vDw1l/casa-mia/?showmap=true" _msttexthash="497393" _msthash="242"> Perfektastr 18, 1230 Vienna </a>
                                                                    </div>
                                                                    <div class="review">
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <i class="icon-star active" aria-hidden="true"></i>
                                                                        <font _mstmutation="1" _msttexthash="20748" _msthash="243">
                                                                            <b _mstmutation="1" _istranslated="1">5</b>
                                                                            <span _mstmutation="1" _istranslated="1">(7)</span>
                                                                        </font>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col companyContact d-none d-md-flex">
                                                                <a class="d-block btn-hbd lightGray" href="https://www.casamia1230.at" data-category="Weblink_result" data-action="click" data-label="REVIEWS:773819" _msttexthash="95017" _msthash="244">Website</a>
                                                                <div class="bottom">
                                                                    <button class="d-none d-md-flex btn btn-hbd yellow hasIcon fullWidth showPhone ellipsis switch btn-md" data-category="Telefonnummer_result" data-action="show" data-label="REVIEWS:773819">
                                                                        <i class="icon-phone"></i>
                                                                        <font _mstmutation="1" _msttexthash="87646" _msthash="245"> Show no. </font>
                                                                    </button>
                                                                    <a class="d-none d-md-block btn btn-hbd yellow fullWidth callPhone hidden ellipsis hasIcon" href="tel:+4319234638" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:773819" _msttexthash="89206" _msthidden="1" _msthash="246">+4319234638</a>
                                                                </div>
                                                            </div>
                                                            <span class="tag-counter" _msttexthash="9451" _msthash="247">10</span>
                                                        </div>
                                                        <div class="d-flex d-md-none address" _msthidden="1">
                                                            <a class="highlight" href="https://www.herold.at/gelbe-seiten/wien/vDw1l/casa-mia/?showmap=true" _msttexthash="418418" _msthidden="1" _msthash="248">
                                                                <i class="icon icon-pin" aria-hidden="true"></i> Perfektastr 18, <br />1230 Wien </a>
                                                        </div>
                                                        <div class="d-flex d-md-none buttons" _msthidden="2">
                                                            <div class="col" _msthidden="1">
                                                                <a class="d-block btn-hbd gray" href="https://www.casamia1230.at" data-category="Weblink_result" data-action="click" data-label="REVIEWS:773819" _msttexthash="95017" _msthidden="1" _msthash="249">Website</a>
                                                            </div>
                                                            <div class="col phone" _msthidden="1">
                                                                <a class="btn-hbd yellow hasIcon" href="tel:+4319234638" target="_top" data-category="Telefonnummer_result" data-action="call" data-label="REVIEWS:773819" _msthidden="1">
                                                                    <i class="icon-phone"></i>
                                                                    <font _mstmutation="1" _msttexthash="94835" _msthidden="1" _msthash="250"> Anrufen </font>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contentBlock gray padTop">
                        <div class="reviewBar">
                            <div class="container">
                                <section class="new d-md-flex">
                                    <div>
                                        <font _mstmutation="1" _msttexthash="1799161" _msthash="251">
                                            <span class="noBr/eak" _mstmutation="1">Wen findest du TIP TOP?</span>
                                            <span class="noBreak" _mstmutation="1">Empfiehl deine Lieblingsfirma!</span>
                                        </font>
                                    </div>
                                    <div class="d-none d-md-block">
                                        <a class="btn-hbd blue toggleBewerten" href="javascript:void(0)" _msttexthash="237120" _msthash="252">Jetzt bewerten</a>
                                    </div>
                                </section>
                            </div>
                            <div class="d-block d-md-none mobile" _msthidden="1">
                                <a class="btn-hbd blue d-inline-block toggleBewerten" href="javascript:void(0)" _msttexthash="237120" _msthidden="1" _msthash="253">Jetzt bewerten</a>
                            </div>
                        </div>
                    </div>
                    <div class="hidden rateCmp" id="rate_company" _msthidden="10">
                        <section _msthidden="10">
                            <div class="container" _msthidden="6">
                                <ul class="row list-unstyled reviewStepRow d-none d-md-flex" _msthidden="6">
                                    <li class="col" id="navStep1" _msthidden="2">
                                        <h3 _msttexthash="117780" _msthidden="1" _msthash="254">Schritt 1:</h3>
                                        <font _mstmutation="1" _msttexthash="179998" _msthidden="1" _msthash="255">Firma suchen</font>
                                    </li>
                                    <li class="col disabled" id="navStep2" _msthidden="2">
                                        <h3 _msttexthash="117962" _msthidden="1" _msthash="256">Schritt 2:</h3>
                                        <font _mstmutation="1" _msttexthash="313235" _msthidden="1" _msthash="257">Bewertung abgeben</font>
                                    </li>
                                    <li class="col disabled" id="navStep3" _msthidden="2">
                                        <h3 _msttexthash="118144" _msthidden="1" _msthash="258">Schritt 3:</h3>
                                        <font _mstmutation="1" _msttexthash="342277" _msthidden="1" _msthash="259">Beitrag abschicken</font>
                                    </li>
                                </ul>
                            </div>
                            <div class="container" _msthidden="4">
                                <div class="row wrap" id="wrap1" _msthidden="4">
                                    <form id="changeCompanyForm" action="newReview.json" method="get" data-tracked="true" _msthidden="4">
                                        <div class="d-block d-md-none" _msthidden="1">
                                            <h3 _msttexthash="431275" _msthidden="1" _msthash="260">Schritt 1: <span class="regular">Firma suchen</span>
                                            </h3>
                                        </div>
                                        <label for="companiesSearch" class="d-none d-md-inline-block" _msttexthash="350740" _msthidden="1" _msthash="261">Firmenname/PLZ/Ort:</label>
                                        <input type="hidden" id="companySID" name="sid" data-tracked="true" />
                                        <input type="hidden" name="provider" value="HEROLD" data-tracked="true" />
                                        <input type="text" id="companiesSearch" maxlength="100" value="" placeholder="Firmenname/PLZ/Ort" class="ui-autocomplete-input" autocomplete="off" data-tracked="true" _msthidden="A" _mstplaceholder="331890" _msthash="262" />
                                        <button class="btn-hbd blue reviewCompanyTracking" data-target="#wrap2" type="submit" _msttexthash="115050" _msthidden="1" _msthash="263">Bewerten</button>
                                    </form>
                                </div>
                                <div class="hidden wrap" id="wrap2"></div>
                                <div class="hidden wrap" id="wrap3"></div>
                            </div>
                        </section>
                    </div>

                    <div class="contentBlock gray padAll">
                        <div class="container">
                            <section class="new teaser ">
                                <div class="d-md-flex">
                                    <div class="image right" style={{ backgroundImage: "url(https://www.herold.at/bewertungen/img/teaser/teaser_rating.jpg)" }}></div>
                                    <div class="text">
                                        <h2 _msttexthash="383604" _msthash="264">Bewertung schreiben</h2>
                                        <p _msttexthash="8298186" _msthash="265">In dem du ein Unternehmen auf Gradimo Skupaj.at bewertest, hilfst du anderen User:innen bei der Auswahl eines passenden Anbieters.</p>
                                        <p _msttexthash="11292138" _msthash="266">You can find out how you can submit your reviews, what makes a good review and what general conditions you need to consider in our evaluation tips.</p>
                                        <a class="btn-hbd blue d-inline-block" href="/bewertungen/bewertung-schreiben/" _msttexthash="366418" _msthash="267">Tips for your review</a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="contentBlock gray padBot">
                        <div class="container">
                            <section class="new teaser ">
                                <div class="d-md-flex">
                                    <div class="image left" style={{ backgroundImage: "url(https://www.herold.at/bewertungen/img/teaser/teaser_quality.jpg)" }}></div>
                                    <div class="text">
                                        <h2 _msttexthash="653939" _msthash="268">Quality Assurance of Reviews</h2>
                                        <p _msttexthash="7233265" _msthash="269">Real reviews are very important to us, after all, you should be able to rely on the recommendations on our platform.</p>
                                        <p _msttexthash="13103740" _msthash="270">In order to be able to guarantee you the highest possible quality and authenticity of the reviews, we have implemented various quality assurance measures.</p>
                                        <a class="btn-hbd blue d-inline-block" href="/bewertungen/echte-bewertungen/" _msttexthash="554996" _msthash="271">How We Deliver Real Reviews</a>
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