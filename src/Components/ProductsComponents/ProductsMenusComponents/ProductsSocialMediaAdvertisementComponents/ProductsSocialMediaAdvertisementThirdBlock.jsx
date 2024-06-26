import { useContext } from "react"
import AppContext from "../../../../AppContext"
import check_img from "./check_img.png";

export const ProductsSocialMediaAdvertisementThirdBlock = () => {
    const { isMobile } = useContext(AppContext);
    return (
        <>
            {
                isMobile ?
                    <>
                        <div class="block">
                            <div class="block-inner container">
                                <div class="title-head">
                                    <h2 style={{ textAlign: "center" }} _msttexthash="669188" _msthash="178">Advertising without wastage</h2>
                                    <h3 _msttexthash="31723159" _msthash="179">Through a wide range of settings, your advertising will be presented to those people who have an interest in your products or services. This way, you can reach exactly the right people at the right time and achieve maximum results for your business.</h3>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src="https://www.herold.at/marketing/wp-content/uploads/2023/09/Zielgruppe_Trichter_Mobile.png" />
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div class="block">
                            <div class="block-inner container">
                                <div class="title-head">
                                    <h2 style={{ textAlign: "center" }} _msttexthash="669188" _msthash="178">Advertising without wastage</h2>
                                    <h3 _msttexthash="31723159" _msthash="179">Through a wide range of settings, your advertising will be presented to those people who have an interest in your products or services. This way, you can reach exactly the right people at the right time and achieve maximum results for your business.</h3>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <img src={check_img} />
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}