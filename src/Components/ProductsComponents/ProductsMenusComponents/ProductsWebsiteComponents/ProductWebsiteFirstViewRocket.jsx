import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext"
import axios from "axios";
import { useParams } from "react-router";

export const ProductWebsiteFirstViewRocket = () => {
    const [productDetails,setproductDetails]=useState();
    const { currentPageContent, currentPage, setCurrentPageContent, baseBackendRoute, gradimoAdviceNow } = useContext(AppContext);
    const titleParts = currentPageContent?.title.split(' ');
    const { edit } = useParams();
    console.log("kkkkk", edit)
    const buttonFunction= async()=>{
        await axios.get(`${baseBackendRoute}/api/v1/products/product/${edit}`)
        .then((res) => {
            console.log(res);
            setproductDetails(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(()=>{
        buttonFunction()
    }, [])

    return (
        <>
            {
                // currentPageContent?.map((value, index) => (
                <>
                    <div
                        className="first-view rocket-lazyload entered lazyloaded"
                        style={{
                            backgroundImage: `url("${baseBackendRoute}${currentPageContent?.background_image}")`
                        }}
                        data-ll-status="loaded"
                    >
                        <div className="container">
                            <div className="title-head">
                                {
                                    titleParts ?
                                        <>
                                            {
                                                currentPage === "1" ?
                                                    <>
                                                        {
                                                            titleParts ?
                                                                <h1 _msttexthash="663663" _msthash="252">{titleParts[0] + " " + titleParts[1]}

                                                                    < br class="brdesk" _istranslated="1" />

                                                                    {
                                                                        titleParts?.slice(2).map((value, index) => (
                                                                            <>
                                                                                {value + " "}
                                                                            </>
                                                                        ))
                                                                    }
                                                                </h1>
                                                                : ""
                                                        }
                                                    </>

                                                    :
                                                    currentPage === "2" ?
                                                        <>
                                                            {
                                                                titleParts ?
                                                                    <h1 _msttexthash="663663" _msthash="252">{titleParts[0]}

                                                                        < br class="brdesk" _istranslated="1" />

                                                                        {
                                                                            titleParts?.slice(1).map((value, index) => (
                                                                                <>
                                                                                    {value + " "}
                                                                                </>
                                                                            ))
                                                                        }
                                                                    </h1>
                                                                    : ""
                                                            }

                                                        </>
                                                        : currentPage === "4" ?
                                                            <>
                                                                {
                                                                    titleParts ?
                                                                        <h1 _msttexthash="663663" _msthash="252">{titleParts[0] + " " + titleParts[1]}

                                                                            < br class="brdesk" _istranslated="1" />

                                                                            {
                                                                                titleParts?.slice(2).map((value, index) => (
                                                                                    <>
                                                                                        {value + " "}
                                                                                    </>
                                                                                ))
                                                                            }
                                                                        </h1>
                                                                        : ""
                                                                }
                                                            </>
                                                            : currentPage === "5" ?
                                                                <>
                                                                    {
                                                                        titleParts ?
                                                                            <h1 _msttexthash="663663" _msthash="252">{titleParts[0] + " " + titleParts[1] + " " + titleParts[2]}

                                                                                < br class="brdesk" _istranslated="1" />

                                                                                {
                                                                                    titleParts?.slice(3).map((value, index) => (
                                                                                        <>
                                                                                            {value + " "}
                                                                                        </>
                                                                                    ))
                                                                                }
                                                                            </h1>
                                                                            : ""
                                                                    }
                                                                </>
                                                                :
                                                                <>
                                                                    <h1 _msttexthash="663663" _msthash="252">{titleParts[0] + " " + titleParts[1]}

                                                                        < br class="brdesk" _istranslated="1" />

                                                                        {
                                                                            titleParts?.slice(2).map((value, index) => (
                                                                                <>
                                                                                    {value + " "}
                                                                                </>
                                                                            ))
                                                                        }
                                                                    </h1>
                                                                </>


                                            }
                                        </>
                                        : ""
                                }

                                {/* <h1 _msttexthash="663663" _msthash="252">Your business <br class="brdesk" _istranslated="1" />on the Internet</h1> */}
                                <h2 _msttexthash="8093618" _msthash="253">{currentPageContent?.sub_title}</h2>
                            </div>
                            <div className="buttons">
                                <div className="primary-button">
                                    <a href="#pricing_gradimo" target="" _msttexthash="180739" _msthash="254">{productDetails?.buttom_name}</a>
                                </div>
                                <div className="secondary-button">
                                    <a href="/advice-now" target="" _msttexthash="206570" _msthash="255">{gradimoAdviceNow?.buttom_name}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="produkte"></div>
                </>
                // ))
            }
        </>
    )
}