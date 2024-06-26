import { useContext, useEffect } from "react";
import AppContext from "../../AppContext";

export const HomeImageLinks = () => {
    const { baseBackendRoute, cityList } = useContext(AppContext);
    useEffect(() => {

    }, [cityList])
    return (
        <>
            <div className="image-link-section_image_link_section__2mOHh">
                <div className="container">
                    <h2 className="section_heading">Cities industry overview</h2>
                    <div className="image-link-section_about_main__1N4kZ">
                        {
                            cityList?.map((data, index) => (
                                <div className="image-link-section_child__2oBGS">
                                    <ImageLinkBlock
                                        href={`/city/${data.slug}`}
                                        imageUrl={`${baseBackendRoute}${data.city_image}`}
                                        imageAlt={data.city_name}
                                        title={data.city_name}
                                    />
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </>
    )
}
function ImageLinkBlock({ href, imageUrl, imageAlt, title }) {
    return (
        <div className="image-link-section_inner__2hzyT">
            <div className="image-link-block_main__31y9c">
                <a className="image-link-block_element__3Oei-" href={href}>
                    <div className="image-link-block_image__227xE">
                        <img
                            title={title}
                            alt={imageAlt}
                            src={imageUrl}
                            data-nimg="fill"
                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover' }}
                            decoding="async"
                            loading="lazy"
                        />
                    </div>
                    <div className="image-link-block_content__1D5RM">
                        <h3 className="image-link-block_text__2_ptI">{title}</h3>
                    </div>
                </a>
            </div>
        </div>
    );
}
