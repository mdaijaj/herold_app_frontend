export const LoginValuationNav = () => {
    return (
        <>
            <nav id="nav-main" class="navbar navbar-light sticky">
                <div class="container-fluid d-block">
                    <div class="row titlebar justify-content-between">
                        <div class="d-flex">
                            <a class="navbar-brand" href="/">
                                <img src="/logo_img/new-logo-modified.png" alt="Yellow Pages, Business Directory, Company Valuations, Phone Book - herold.at" title="Gelbe Seiten, Branchenbuch, Firmenbewertungen, Telefonbuch - herold.at" _mstalt="3177642" _msthash="36" />
                            </a>
                        </div>
                        <div class="d-none d-lg-flex">
                            <ul class="nav navbar-nav navbar-desktop">
                                <li class="tab-YP nav-item">
                                    <a href="/" class="nav-link" title="Gelbe Seiten - Firmen- und Branchensuche" data-action="click" data-category="Main Navigation" data-label="YP" _msttexthash="136396" _msthash="37">Corporate</a>
                                </li>
                                <li class="tab-WP nav-item">
                                    <a href="/telefonbuch/" class="nav-link" title="Telefonbuch Österreich" data-action="click" data-category="Main Navigation" data-label="WP" _msttexthash="98540" _msthash="38">Persons</a>
                                </li>
                                <li class="tab-REV nav-item active">
                                    <a href="/bewertungen/" class="nav-link" title="Suchen in den herold.at Bewertungen" data-action="click" data-category="Main Navigation" data-label="REV" _msttexthash="161044" _msthash="39">Valuations</a>
                                </li>
                                <li class="tab-BLOG nav-item">
                                    <a href="https://www.herold.at/blog/" class="nav-link" title="Tipps aus der herold.at Redaktion" data-action="click" data-category="Main Navigation" data-label="BLOG" _msttexthash="43615" _msthash="40">Blog</a>
                                </li>
                                <li class="tab-WERBEN nav-item">
                                    <a href="https://www.herold.at/marketing/" class="nav-link" target="_blank" rel="noopener" title="Öffnet neues Fenster" data-action="click" data-category="Main Navigation" data-label="WERBEN" _msttexthash="359749" _msthash="41">Business Solutions</a>
                                </li>
                                <li class="tab-login nav-item dropdown">
                                    <a class="nav-link" id="dropdownLoginButton" href="javascript:void(0);" title="Bei Mein Herold anmelden" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" _msttexthash="113659" _msthash="42"> Announce </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownLoginButton">
                                        <iframe width="450" height="525" src="https://login.herold.at/externalLoginDropdown.do?redirectUrl=https://www.herold.at/bewertungen/admin/externalHomeRedirect.do&amp;referrer=https://www.herold.at/bewertungen/admin/externalHomeRedirect.do" style={{ border: "none" }}></iframe>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex d-lg-none" _msthidden="1">
                            <button type="button" class="btn icon-only toggle-menu" data-toggle="collapse" data-target="#navbar-md-down" aria-controls="navbar-md-down" aria-expanded="false" aria-label="Menü ein- oder ausblenden" _msthidden="A" _mstaria-label="534833" _msthash="43">
                                <i class="icon icon-hamburger" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div class="row dropdown-menu collapse" id="navbar-md-down" _msthidden="6">
                        <ul class="nav navbar-nav" _msthidden="6">
                            <li class="tab-YP nav-item" _msthidden="1">
                                <a href="/" class="nav-link" title="Gelbe Seiten - Firmen- und Branchensuche" data-action="click" data-category="Main Navigation" data-label="YP" _msttexthash="76401" _msthidden="1" _msthash="44">Firmen</a>
                            </li>
                            <li class="tab-WP nav-item" _msthidden="1">
                                <a href="/telefonbuch/" class="nav-link" title="Telefonbuch Österreich" data-action="click" data-category="Main Navigation" data-label="WP" _msttexthash="116194" _msthidden="1" _msthash="45">Personen</a>
                            </li>
                            <li class="tab-REV nav-item active" _msthidden="1">
                                <a href="/bewertungen/" class="nav-link" title="Suchen in den herold.at Bewertungen" data-action="click" data-category="Main Navigation" data-label="REV" _msttexthash="183157" _msthidden="1" _msthash="46">Bewertungen</a>
                            </li>
                            <li class="tab-BLOG nav-item" _msthidden="1">
                                <a href="https://www.herold.at/blog/" class="nav-link" title="Tipps aus der herold.at Redaktion" data-action="click" data-category="Main Navigation" data-label="BLOG" _msttexthash="43615" _msthidden="1" _msthash="47">Blog</a>
                            </li>
                            <li class="tab-WERBEN nav-item" _msthidden="1">
                                <a href="https://www.herold.at/marketing/" class="nav-link" target="_blank" rel="noopener" title="Öffnet neues Fenster" data-action="click" data-category="Main Navigation" data-label="WERBEN" _msttexthash="370383" _msthidden="1" _msthash="48">Business-Lösungen</a>
                            </li>
                            <li class="tab-login nav-item" _msthidden="1">
                                <a href="https://login.herold.at/login.do?redirectUrl=https://www.herold.at/bewertungen/admin/externalHomeRedirect.do&amp;referrer=https://www.herold.at/bewertungen/admin/externalHomeRedirect.do" class="nav-link" title="Bei Mein Herold anmelden" data-action="click" data-category="Main Navigation" _msttexthash="111371" _msthidden="1" _msthash="49">Anmelden</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}