import { useContext, useEffect } from "react"
import AppContext from "../../AppContext"

export const ContactAnotherSec = () => {
    const { gradimoContact } = useContext(AppContext);
    useEffect(() => {
        console.log(gradimoContact);
    }, [gradimoContact])
    return (
        <>
            <section class="wp-block-container container heading">
                <h2 class="kontakt_more wp-block-heading" _msttexthash="430014" _msthash="113">Other contact options</h2>
            </section>
            <section class="wp-block-container container">
                <div class="wp-block-columns kontakt_moeglichkeiten is-layout-flex wp-container-4 wp-block-columns-is-layout-flex">
                    <div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                        <section class="wp-block-container container para">
                            <p>
                                <img decoding="async" width="80" height="80" class="wp-image-88301 entered lazyloaded" style={{ width: "80px" }} src="https://www.herold.at/marketing/wp-content/uploads/2022/04/telefon.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/telefon.png" data-ll-status="loaded" />

                                <br />
                                <a href={`tel:${gradimoContact?.phone}`} _msttexthash="135252" _msthash="114">{gradimoContact?.phone}</a>
                            </p>
                        </section>
                        <section class="wp-block-container container para">
                            <p _msttexthash="189410" _msthash="115">Give us a call.</p>
                        </section>
                    </div>
                    <div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                        <section class="wp-block-container container para">
                            <p>
                                <img decoding="async" width="80" height="80" class="wp-image-88302 entered lazyloaded" style={{ width: "80px" }} src="https://www.herold.at/marketing/wp-content/uploads/2022/04/brief.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/brief.png" data-ll-status="loaded" />

                                <br />
                                <a href={`mailto:${gradimoContact?.email}`} _msttexthash="396565" _msthash="116">{gradimoContact?.email}</a>
                            </p>
                        </section>
                        <section class="wp-block-container container para">
                            <p _msttexthash="243685" _msthash="117">Drop us an email.</p>
                        </section>
                    </div>
                    <div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                        <section class="wp-block-container container para">
                            <p>
                                <img decoding="async" width="80" height="80" class="wp-image-88303 entered lazyloaded" style={{ width: "80px" }} src="https://www.herold.at/marketing/wp-content/uploads/2022/04/kalender.png" alt="" data-lazy-src="https://www.herold.at/marketing/wp-content/uploads/2022/04/kalender.png" data-ll-status="loaded" />

                                <br />
                                <a href={`${gradimoContact?.website}`} _msttexthash="356837" _msthash="118">Book an appointment</a>
                            </p>
                        </section>
                        <section class="wp-block-container container para">
                            <p _msttexthash="918021" _msthash="119">Book a non-binding appointment now.</p>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}