import { useContext } from "react";
import AppContext from "../../AppContext";
import { Helmet } from "react-helmet";
export const ProductFirstViewRocket = () => {
    const { gradimoContact, productsPage, baseBackendRoute } = useContext(AppContext);
    return (
        <>

            <Helmet>

                <meta property="og:title" content={productsPage?.meta_title} />
                <meta property="og:description" content={productsPage?.meta_description} />
                <meta property="og:type" content={productsPage?.meta_tags} />


            </Helmet>
            <div
                className="first-view rocket-lazyload entered lazyloaded"
                style={{
                    backgroundImage: `url(${baseBackendRoute}${productsPage?.image})`
                }}
                data-ll-status="loaded"
            >
                <div className="container">
                    <div className="title-head">
                        <h1 >{productsPage?.title}</h1>
                        <h2 dangerouslySetInnerHTML={{ __html: productsPage?.description }}></h2>
                    </div>

                    <div className="buttons">
                        <div className="primary-button">
                            <a href="#products" target="">To the products</a>
                        </div>

                        <div className="secondary-button">
                            <a href={`tel:${productsPage?.phone_number}`} target="">{`${productsPage?.phone_number}`}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="products"></div>
        </>
    )
}