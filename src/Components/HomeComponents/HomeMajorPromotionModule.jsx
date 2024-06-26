import { useContext, useEffect, useState } from "react";
import AppContext from "../../AppContext";
import { Helmet } from "react-helmet";
export const HomeMajorPromotionModule = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    const { homeGradimo, baseBackendRoute, gradimoAdviceNow } = useContext(AppContext);

    useEffect(() => {
        console.log(homeGradimo);
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 500);
        };

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [homeGradimo]); // Empty dependency array means this effect will run only once after the initial render

    return (
        <div>
            <Helmet>

                <meta property="og:title" content={homeGradimo?.meta_title} />
                <meta property="og:description" content={homeGradimo?.meta_description} />
                <meta property="og:type" content={homeGradimo?.meta_tags} />


            </Helmet>
            <div className="major-promotion_module__1rfWk gruen" style={{ padding: '20px', backgroundColor: '#386' }}>
                {isLargeScreen && (
                    <div style={{ display: 'block', overflow: 'hidden', position: 'absolute', inset: '0px', boxSizing: 'border-box', margin: '0px' }}>
                        <img
                            title={homeGradimo?.heading}
                            alt={homeGradimo?.heading}
                            sizes="100vw"
                            srcSet={`${baseBackendRoute}${homeGradimo?.image}`}
                            src={`${baseBackendRoute}${homeGradimo?.image}`}
                            decoding="async"
                            data-nimg="fill"
                            className="major-promotion_bg_image__1TYos"
                            style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%', objectFit: 'cover' }}
                        />
                        <noscript></noscript>
                    </div>
                )}
                <div className="major-promotion_major_promotion_container__3HSOE">
                    <h1 className="major-promotion_heading__cXGmD" style={{ marginBottom: '20px' }}>{homeGradimo?.heading}</h1>
                    <p className="major-promotion_paragraph__2zXZv" dangerouslySetInnerHTML={{ __html: homeGradimo?.title }} style={{ marginBottom: '20px' }}></p>
                    <div className="major-promotion_btn_wrapper__16o5R">
                        <a href="/advice-now">
                            <button className="button_btn__3kzkB button_full_width__3lgu7 button_extra_large__1V7Uf" style={{ height: '100%' }}>{gradimoAdviceNow?.buttom_name}</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
