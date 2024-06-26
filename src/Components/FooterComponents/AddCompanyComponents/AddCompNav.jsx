import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export const AddCompNav = () => {
    const [show, setShow] = useState(false);
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
                                    <a href="/" class="nav-link" title="Telefonbuch Österreich" data-action="click" data-category="Main Navigation" data-label="WP" _msttexthash="98540" _msthash="38">Persons</a>
                                </li>
                                <li class="tab-REV nav-item">
                                    <a href="/reviews" class="nav-link" title="Suchen in den herold.at Bewertungen" data-action="click" data-category="Main Navigation" data-label="REV" _msttexthash="161044" _msthash="39">Valuations</a>
                                </li>
                                <li class="tab-BLOG nav-item">
                                    <a href="/blogs" class="nav-link" title="Tipps aus der herold.at Redaktion" data-action="click" data-category="Main Navigation" data-label="BLOG" _msttexthash="43615" _msthash="40">Blog</a>
                                </li>
                                <li class="tab-WERBEN nav-item">
                                    <a href="/marketing" class="nav-link" target="_blank" rel="noopener" title="Öffnet neues Fenster" data-action="click" data-category="Main Navigation" data-label="WERBEN" _msttexthash="359749" _msthash="41">Business Solutions</a>
                                </li>
                                <li class="tab-login nav-item">
                                    <a href="/login" class="nav-link" title="Bei Mein Herold anmelden" data-action="click" data-category="Main Navigation" _msttexthash="113659" _msthash="42">Announce</a>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex d-lg-none" _msthidden="1">
                            <button onClick={() => { setShow(!show) }} type="button" class="btn icon-only toggle-menu" data-toggle="collapse" data-target="#navbar-md-down" aria-controls="navbar-md-down" aria-expanded="false" aria-label="Menü ein- oder ausblenden" _msthidden="A" _mstaria-label="534833" _msthash="43">
                                <FontAwesomeIcon className="icon icon-hamburger" icon={faBars} />
                            </button>
                        </div>
                    </div>
                    <div class={show ? "row dropdown-menu collapse show" : "row dropdown-menu collapse"} id="navbar-md-down" _msthidden="6">
                        <ul class="nav navbar-nav" _mstvisible="1">
                            <li class="tab-YP nav-item" _mstvisible="2">
                                <a href="/" class="nav-link" title="Gelbe Seiten - Firmen- und Branchensuche" data-action="click" data-category="Main Navigation" data-label="YP" _msttexthash="136396" _msthash="44" _mstvisible="3">Corporate</a>
                            </li>
                            <li class="tab-WP nav-item" _mstvisible="2">
                                <a href="/" class="nav-link" title="Telefonbuch Österreich" data-action="click" data-category="Main Navigation" data-label="WP" _msttexthash="98540" _msthash="45" _mstvisible="3">Persons</a>
                            </li>
                            <li class="tab-REV nav-item" _mstvisible="2">
                                <a href="/reviews" class="nav-link" title="Suchen in den herold.at Bewertungen" data-action="click" data-category="Main Navigation" data-label="REV" _msttexthash="161044" _msthash="46" _mstvisible="3">Valuations</a>
                            </li>
                            <li class="tab-BLOG nav-item" _mstvisible="2">
                                <a href="/blogs" class="nav-link" title="Tipps aus der herold.at Redaktion" data-action="click" data-category="Main Navigation" data-label="BLOG" _msttexthash="43615" _msthash="47" _mstvisible="3">Blog</a>
                            </li>
                            <li class="tab-WERBEN nav-item" _mstvisible="2">
                                <a href="/marketing" class="nav-link" target="_blank" rel="noopener" title="Öffnet neues Fenster" data-action="click" data-category="Main Navigation" data-label="WERBEN" _msttexthash="359749" _msthash="48" _mstvisible="3">Business Solutions</a>
                            </li>
                            <li class="tab-login nav-item" _mstvisible="2">
                                <a href="/login" class="nav-link" title="Bei Mein Herold anmelden" data-action="click" data-category="Main Navigation" _msttexthash="113659" _msthash="49" _mstvisible="3">Announce</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}