import { useContext, useEffect } from "react";
import AppContext from "../../AppContext";

export const HomeAnotherImageLinks = () => {
    const { aboutGradimoHome, baseBackendRoute } = useContext(AppContext);
    const handleClick = (link) => {
        // Handle click event
        console.log(`Link clicked: ${link}`);
    };
    const handleLinkClick = (event) => {
        event.preventDefault();
        // Add your custom logic for handling link click here
    };
    useEffect(() => {
        console.log(aboutGradimoHome);
    }, [])
    return (
        <>
            <div>
                <div class="image-link-section_image_link_section__2mOHh">
                    <div class="container">
                        <h2 class="section_heading">About Gradimo Skupaj</h2>
                        <div class="image-link-section_about_main__1N4kZ">
                            {
                                aboutGradimoHome?.map((data, index) => (
                                    <div class="image-link-section_child__2oBGS">
                                        <div class="image-link-section_inner__2hzyT">
                                            <div class="image-link-block_main__31y9c"><a
                                                class="image-link-block_element__3Oei-"
                                                href={`${data.page_urls}`}>
                                                <div class="image-link-block_image__227xE">
                                                    <div
                                                        style={{
                                                            display: 'block',
                                                            overflow: 'hidden',
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            bottom: 0,
                                                            right: 0,
                                                            boxSizing: 'border-box',
                                                            margin: 0
                                                        }}
                                                    >
                                                        <img title={`${data.name}`} alt={`${data.name}`}
                                                            src={`${data.image}`}
                                                            decoding="async" data-nimg="fill"
                                                            style={{
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0,
                                                                bottom: 0,
                                                                right: 0,
                                                                boxSizing: 'border-box',
                                                                padding: 0,
                                                                border: 'none',
                                                                margin: 'auto',
                                                                display: 'block',
                                                                width: 0,
                                                                height: 0,
                                                                minWidth: '100%',
                                                                maxWidth: '100%',
                                                                minHeight: '100%',
                                                                maxHeight: '100%',
                                                                objectFit: 'cover'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div class="image-link-block_content__1D5RM">
                                                    <h3 class="image-link-block_text__2_ptI">{data.name}</h3>
                                                </div>
                                            </a></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}