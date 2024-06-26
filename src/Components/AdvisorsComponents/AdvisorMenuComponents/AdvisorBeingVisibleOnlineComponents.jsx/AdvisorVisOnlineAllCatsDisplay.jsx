import { useContext, useEffect } from "react"
import AppContext from "../../../../AppContext"

export const AdvisorBeingVisibleOnlineAllCatsDisplay = () => {
    const { baseBackendRoute, counselerList } = useContext(AppContext);
    useEffect(() => {

    }, [counselerList])
    return (
        <>
            <ul class="all_cats_display">
                {
                    counselerList?.map((data, index) => (
                        <li class="all_cats_inner shadow">
                            <a href={`/adv/${data.slug}`} style={{ backgroundImage: `url(${baseBackendRoute}${data.image})` }}><span _msttexthash="323947" _msthash="180">{data.name}</span></a>
                        </li>
                    ))
                }

                {/* <li class="all_cats_inner shadow">
                    <a href="https://www.herold.at/ratgeber/suchmaschinenoptimierung-seo/" style={{ backgroundImage: "url(https://www.herold.at/ratgeber/wp-content/uploads/2022/08/Suchmaschinenoptimierung-SEO-400x267-1.jpeg)" }}><span _msttexthash="607958" _msthash="181">Search Engine Optimization</span></a>
                </li>

                <li class="all_cats_inner shadow">
                    <a href="https://www.herold.at/ratgeber/google-ads/" style={{ backgroundImage: "url(https://www.herold.at/ratgeber/wp-content/uploads/2022/08/Suchmaschinenwerbung-SEA-400x267-1.jpg)" }}><span _msttexthash="127192" _msthash="182">Google Ads</span></a>
                </li>

                <li class="all_cats_inner shadow">
                    <a href="https://www.herold.at/ratgeber/online-praesenz/" style={{ backgroundImage: "url(https://www.herold.at/ratgeber/wp-content/uploads/2022/08/Ueberall-gefunden-werden-400x267-1.jpg)" }}><span _msttexthash="287482" _msthash="183">Be visible online</span></a>
                </li>

                <li class="all_cats_inner shadow">
                    <a href="https://www.herold.at/ratgeber/kmu-tipps/" style={{ backgroundImage: "url(https://www.herold.at/ratgeber/wp-content/uploads/2022/08/KMU-Tipps-400x267-1.jpg)" }}><span _msttexthash="245024" _msthash="184">Digital SME tips</span></a>
                </li>

                <li class="all_cats_inner shadow">
                    <a href="https://www.herold.at/ratgeber/lexikon/" style={{ backgroundImage: "url(https://www.herold.at/ratgeber/wp-content/uploads/2022/10/Herold-Online-Marketing-Lexikon.jpeg)" }}><span _msttexthash="725491" _msthash="185">Online Marketing Encyclopedia</span></a>
                </li> */}
            </ul>
        </>
    )
}