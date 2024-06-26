import { useContext, useEffect, useState } from "react"
import AppContext from "../AppContext";
export const FooterSection = () => {
    const { gradimoContact, gradimoAdviceNow } = useContext(AppContext);
    const [openSearch, setOpenSearch] = useState(false);
    const [openLegal, setOpenLegal] = useState(false);
    const [openAboutUs, setOpenAboutUs] = useState(false);
    const [openLearnMore, setOpenLearnMore] = useState(false);
    return (
        <>
            <footer class="footer_footer_module__3_Gcn footer_bg_white__ylxpx" style={{ background: 'inherit' }}>
                <div class="footer_footer_container__2N-DZ">
                    <div class="footer_footer_top__iL7KP" style={{ backgroundColor: gradimoAdviceNow?.color }}>
                        <div class="footer_content_wrapper__1BOdN" dangerouslySetInnerHTML={{ __html: gradimoAdviceNow?.content }}>
                            {/* <h2 class="footer_heading__9bBBH">Do you have a question about Gradimo Skupaj products?</h2>
                            <p class="footer_paragraph__2St2Y">We would be happy to help you without obligation.</p> */}
                        </div>
                        <div class="footer_button_wrapper__3oEJ1">
                            <a href="/advice-now">
                                <button class="button_btn__3kzkB  button_full_width__3lgu7  button_medium__3zOx_  button_secondary__s1GX9 " style={{ height: '40px' }}>
                                    {gradimoAdviceNow?.buttom_name}
                                </button>
                            </a>
                        </div>
                    </div>
                    <div class="footer_footer_middle__3RULA " style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div class="footer_footer_block__1lGwY">
                            <div class="footer_dropdown_trigger__2ZP1s">
                                <h4 class="footer_footer_block_label__1MjwF">Search & Find</h4>
                                <div class="footer_dropdown_icon__3FDrb">
                                    <div className='input-group-icon' onClick={() => { setOpenSearch(!openSearch) }}>
                                        <img src="/gradimo_icons/down.png" alt="down" style={{ width: '25px', height: '25px' }} />
                                    </div>

                                </div>
                            </div>
                            {
                                openSearch ?
                                    <>
                                        <ul class="footer_footer_block_links__2_V-c  footer_active__2w8ZF">
                                            <li><a title="Add Company" target="_self" href="/add-company">Add Company</a></li>
                                            <li><a title="Industries A-Z" target="_self" href="/industry-az">Industries A-Z</a></li>
                                            <li><a title="Companies A-Z" target="_self" href="/company-az/A/">Companies A-Z</a></li>
                                        </ul>
                                    </>
                                    :
                                    <>
                                        <ul class="footer_footer_block_links__2_V-c ">
                                            <li><a title="Add Company" target="_self" href="/add-company">Add Company</a></li>
                                            <li><a title="Industries A-Z" target="_self" href="/industry-az">Industries A-Z</a></li>
                                            <li><a title="Companies A-Z" target="_self" href="/company-az/A/">Companies A-Z</a></li>
                                        </ul>
                                    </>
                            }
                        </div>
                        <div class="footer_footer_block__1lGwY">
                            <div class="footer_dropdown_trigger__2ZP1s">
                                <h4 class="footer_footer_block_label__1MjwF">Legal</h4>
                                <div class="footer_dropdown_icon__3FDrb ">
                                    <div className='input-group-icon' onClick={() => { setOpenLegal(!openLegal) }}>
                                        <img src="/gradimo_icons/down.png" alt="down" style={{ width: '25px', height: '25px' }} />
                                    </div>
                                </div>
                            </div>
                            {
                                openLegal ?
                                    <ul class="footer_footer_block_links__2_V-c  footer_active__2w8ZF">
                                        <li><a title="Data Sources" target="_self" href="/legal/1/">Data Sources</a></li>
                                        <li><a title="Terms & Conditions" target="_self" href="/legal/3/">Terms & Conditions</a></li>
                                        <li><a title="Disclosure" target="_self" href="/legal/2">Disclosure</a></li>
                                        <li><a title="Privacy Policy" target="_self" href="/legal/4/">Privacy Policy</a></li>
                                    </ul>
                                    :
                                    <ul class="footer_footer_block_links__2_V-c ">
                                        <li><a title="Data Sources" target="_self" href="/legal/1">Data Sources</a></li>
                                        <li><a title="Terms & Conditions" target="_self" href="/legal/3">Terms & Conditions</a></li>
                                        <li><a title="Disclosure" target="_self" href="/legal/2">Disclosure</a></li>
                                        <li><a title="Privacy Policy" target="_self" href="/legal/4">Privacy Policy</a></li>
                                    </ul>

                            }
                        </div>


                        <div class="footer_footer_block__1lGwY">
                            <div class="footer_dropdown_trigger__2ZP1s ">
                                <h4 class="footer_footer_block_label__1MjwF">About us</h4>
                                <div class="footer_dropdown_icon__3FDrb ">
                                    <div className='input-group-icon' onClick={() => { setOpenAboutUs(!openAboutUs) }}>
                                        <img src="/gradimo_icons/down.png" alt="down" style={{ width: '25px', height: '25px' }} />
                                    </div>
                                </div>
                            </div>
                            {
                                openAboutUs ?
                                    <ul class="footer_footer_block_links__2_V-c  footer_active__2w8ZF">
                                        <li><a title="Products" target="_self" href="/marketing">Products</a></li>
                                        <li><a title="Contact" target="_self" href="/advice-now">Contact</a></li>
                                        <li><a title="About Herold" target="_blank" href="/about">About Gradimo Skupaj</a></li>
                                    </ul>
                                    :
                                    <ul class="footer_footer_block_links__2_V-c  ">
                                        <li><a title="Products" target="_self" href="/marketing">Products</a></li>
                                        <li><a title="Contact" target="_self" href="/advice-now">Contact</a></li>
                                        <li><a title="About Herold" target="_blank" href="/about">About Gradimo Skupaj</a></li>
                                    </ul>
                            }
                        </div>
                    </div>

                    <div class="footer_footer_bottom__UGPQO " style={{ marginBottom: '50px' }}>
                        <div class="footer_logo_wrapper__3Qr2d ">
                            <a class="footer_logo_link__uT1O6 " title="Link to root" href="/">
                                <div style={{
                                    display: "block",
                                    overflow: "hidden",
                                    position: "absolute",
                                    top: "0px",
                                    left: "0px",
                                    bottom: "0px",
                                    right: "0px",
                                    boxSizing: "border-box",
                                    margin: "0"
                                }}>
                                    <img title="HEROLD: Yellow Pages, Business Directory, Company Reviews, Telephone Directory" alt="HEROLD: Yellow Pages, Business Directory, Company Reviews, Telephone Directory" src="/logo_img/new-logo-modified.png" decoding="async" data-nimg="fill" style={{ position: 'absolute', top: '0', left: '0', bottom: '0', right: '0', boxSizing: 'border-box', padding: '0', border: 'none', margin: 'auto', display: 'block', width: '0', height: '0', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                </div>
                            </a>
                        </div>
                        <div class="footer_copy_rights__ho1Vc ">
                            <p>© 2024 <a title="HEROLD: Yellow Pages, Business Directory, Company Reviews, Telephone Directory" href="/">Gradimo Skupaj</a> Business Data GmbH</p>
                            <p>Data as of: 8.2.2024</p>
                        </div>
                        <ul>
                            <li><a data-htype="social_link" data-hvalue="facebook" href="https://www.facebook.com/" title="https://www.facebook.com/herolddigital" target="_blank" rel="noopener noreferrer nofollow">
                                <div className='input-group-icon'>
                                    <img src="/gradimo_icons/facebook.png" alt="facebook" />
                                </div>
                            </a>
                            </li>
                            <li><a data-htype="social_link" data-hvalue="youtube" href="https://www.youtube.com/" title="https://www.youtube.com/channel/UCyaxJo8N2x2fSr_-hwvKafQ" target="_blank" rel="noopener noreferrer nofollow">

                                <div className='input-group-icon'>
                                    <img src="/gradimo_icons/youtube.png" alt="youtube" />
                                </div>
                            </a></li>
                            <li><a data-htype="social_link" data-hvalue="instagram" href="https://www.pinterest.at/" title="https://www.pinterest.at/herolddigital" target="_blank" rel="noopener noreferrer nofollow">
                                <div className='input-group-icon'>
                                    <img src="/gradimo_icons/pinetrest.png" alt="pinetrest" />
                                </div>
                            </a></li>
                            <li><a data-htype="social_link" data-hvalue="linkedin" href="https://www.linkedin.com/" title="https://www.linkedin.com/company/herolddigital/" target="_blank" rel="noopener noreferrer nofollow">
                                <div className='input-group-icon'>
                                    <img src="/gradimo_icons/linkedin.png" alt="linkedin" />
                                </div>

                            </a></li>
                            <li><a data-htype="social_link" data-hvalue="xing" href="https://www.xing.com/" title="https://www.xing.com/pages/heroldbusinessdatagmbh" target="_blank" rel="noopener noreferrer nofollow">
                                <div className='input-group-icon'>
                                    <img src="/gradimo_icons/xing.png" alt="xing" />
                                </div>

                            </a></li>
                        </ul>
                    </div>
                    {/* <div class="footer_footer_middle__3RULA  ">
                        <div class="footer_footer_block_ lGwY  ">
                            <div class="footer_dropdown_trigger__2ZP1s ">
                                <h4 class="footer_footer_block_label_ MjwF">Search &amp; Find</h4>
                                <div class="footer_dropdown_icon__3FDrb "><i class="icon-down"></i></div>
                            </div>
                            <ul class="footer_footer_block_links__2_V-c ">
                                <li><a title="Add Company" target="_self" href="/add-company">Add Company</a></li>
                                <li><a title="Industries A-Z" target="_self" href="/industry-az">Industries A-Z</a></li>
                                <li><a title="Companies A-Z" target="_self" href="/gelbe-seiten/firmen-az/a/">Companies A-Z</a></li>
                                <li><a title="People A-Z" target="_self" href="/telefonbuch/personen-az/a/">People A-Z</a></li>
                            </ul>
                        </div>
                        <div class="footer_footer_block__1lGwY">
                            <div class="footer_dropdown_trigger__2ZP1s ">
                                <h4 class="footer_footer_block_label_ MjwF">Legal</h4>
                                <div class="footer_dropdown_icon__3FDrb "><i class="icon-down"></i></div>
                            </div>
                            <ul class="footer_footer_block_links__2_V-c ">
                                <li><a title="Data Sources" target="_self" href="#">Data Sources</a></li>
                                <li><a title="Terms & Conditions" target="_self" href="#">Terms & Conditions</a></li>
                                <li><a title="Disclosure" target="_self" href="#">Disclosure</a></li>
                                <li><a title="Privacy Policy" target="_self" href="/datenschutzerklaerung/">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="footer_footer_block__1lGwY">
                            <div class="footer_dropdown_trigger__2ZP1s ">
                                <h4 class="footer_footer_block_label_ MjwF">About us</h4>
                                <div class="footer_dropdown_icon__3FDrb "><i class="icon-down"></i></div>
                            </div>
                            <ul class="footer_footer_block_links__2_V-c ">
                                <li><a title="Products" target="_self" href="/marketing">Products</a></li>
                                <li><a title="Contact" target="_self" href="/advice-now">Contact</a></li>
                                <li><a title="About Herold" target="_blank" href="/about">About Gradimo Skupaj</a></li>
                                <li><a title="Gradimo Skupaj as an Employer" target="_blank" href="/adv">Gradimo Skupaj as an Employer</a></li>
                            </ul>
                        </div>
                        <div class="footer_footer_block__1lGwY">
                            <div class="footer_dropdown_trigger__2ZP1s ">
                                <h4 class="footer_footer_block_label_ MjwF">Learn more</h4>
                                <div class="footer_dropdown_icon__3FDrb "><i class="icon-down"></i></div>
                            </div>
                            <ul class="footer_footer_block_links__2_V-c ">
                                <li><a title="Job Openings" target="_blank" href="#">Job Openings</a></li>
                                <li><a title="Route Planner" target="_self" href="#">Route Planner</a></li>
                                <li><a title="Doctor Search 24" target="_blank" href="#">Doctor Search 24</a></li>
                                <li><a title="Press" target="_self" href="#">Press</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer_footer_bottom__UGPQO">
                        <div class="footer_logo_wrapper__3Qr2d">
                            <a class="footer_logo_link__uT1O6" title="Link to root" href="index.html">
                                <img
                                    title="HEROLD: Gelbe Seiten, Branchenbuch, Firmenbewertungen, Telefonbuch"
                                    alt="HEROLD: Gelbe Seiten, Branchenbuch, Firmenbewertungen, Telefonbuch"
                                    srcSet="https://www.herold.at/_next/image/?url=%2Fassets%2FLogo_Classic.svg&w=750&q=75"
                                    src="https://www.herold.at/_next/image/?url=%2Fassets%2FLogo_Classic.svg&w=750&q=75"
                                    decoding="async"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        boxSizing: 'border-box',
                                        margin: 0,
                                        width: 0,
                                        height: 0,
                                        minWidth: '100%',
                                        maxWidth: '100%',
                                        minHeight: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                            </a>
                        </div>
                        <div class="footer_copy_rights__ho1Vc">
                            <p>© 2024 <a title="HEROLD: Gelbe Seiten, Branchenbuch, Firmenbewertungen, Telefonbuch" href="index.html">HERALD</a> Business Data GmbH</p>
                            <p>Data status: February 6, 2024</p>
                        </div>
                        <ul>
                            <li><a data-htype="social_link" data-hvalue="facebook"
                                href="https://www.facebook.com/herolddigital"
                                title="https://www.facebook.com/herolddigital" target="_blank"
                                rel="noopener noreferrer nofollow"><i class="icon-facebook"></i></a></li>
                            <li><a data-htype="social_link" data-hvalue="youtube"
                                href="https://www.youtube.com/channel/UCyaxJo8N2x2fSr_-hwvKafQ"
                                title="https://www.youtube.com/channel/UCyaxJo8N2x2fSr_-hwvKafQ"
                                target="_blank" rel="noopener noreferrer nofollow"><i
                                    class="icon-youtube"></i></a></li>
                            <li><a data-htype="social_link" data-hvalue="instagram"
                                href="https://www.pinterest.at/herolddigital"
                                title="https://www.pinterest.at/herolddigital" target="_blank"
                                rel="noopener noreferrer nofollow"><i class="icon-pinterest"></i></a></li>
                            <li><a data-htype="social_link" data-hvalue="linkedin"
                                href="https://www.linkedin.com/company/herolddigital/"
                                title="https://www.linkedin.com/company/herolddigital/" target="_blank"
                                rel="noopener noreferrer nofollow"><i class="icon-linkedin"></i></a></li>
                            <li><a data-htype="social_link" data-hvalue="xing"
                                href="https://www.xing.com/pages/heroldbusinessdatagmbh"
                                title="https://www.xing.com/pages/heroldbusinessdatagmbh" target="_blank"
                                rel="noopener noreferrer nofollow"><i class="icon-xing"></i></a></li>
                        </ul>
                    </div>
                </div> */}
                </div>
            </footer >
        </>
    )
}