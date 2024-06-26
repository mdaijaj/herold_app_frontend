import { useContext, useEffect, useState } from "react"
import AppContext from "../../../../AppContext";
import Slider from "react-slick";
import { data } from "jquery";
import axios from "axios";
import { useParams } from "react-router";

export const ProductsWebsiteRecommended = () => {
    const { baseBackendRoute, setProductRecommendIdList, currentPageContent, currentPage, productIdList, setProductIdList, productRecommendData, setProductRecommendData, isMobile, productsList, productRecommendIdList } = useContext(AppContext);
    const { id } = useParams();
    const [index, setIndex] = useState(0);
    if (index === 3) {
        setIndex(0);
    }
    if (index === -1) {
        setIndex(2);


    }



    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia('(max-width: 768px)').matches);

    var settings = {
        infinite: false,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: 'container card-slider'

    }

    const slides = [
        {
            imageUrl: "https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Yoga.jpg",
            bgColor: "rgb(145, 132, 190)",
            title: "Search Engine Optimization",
            description: "Thanks to professional search engine optimization (SEO), you and your company appear in front of the competition - perfect for winning new customers efficiently and sustainably.",
            buttonUrl: "https://www.herold.at/marketing/suchmaschinenoptimierung-seo/",
            buttonText: "Learn more"
        },
        {
            imageUrl: "https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Steuerberater.jpg",
            bgColor: "rgb(51, 136, 102)",
            title: "Online Complete",
            description: "Online Complete ensures that no one in Austria can get past your company. No matter where your customers are looking.",
            buttonUrl: "https://www.herold.at/marketing/onlinecomplete/",
            buttonText: "Learn more"
        },
        {
            imageUrl: "https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Mode_.jpg",
            bgColor: "rgb(229, 89, 52)",
            title: "Google Banner Advertising",
            description: "Your individual banner on up to three million websites in Austria. Reach customers through Google's gigantic ad network.",
            buttonUrl: "https://www.herold.at/marketing/google-banner-werbung/",
            buttonText: "Learn more"
        }
    ];
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get(`${baseBackendRoute}/api/v1/products/product/`);
    //             const resData = await res.data.sort((a, b) => a.id - b.id);
    //             const ids = await resData.map(product => product.id);
    //             setProductIdList(ids);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };
    //     fetchData();

    //     const fetchRandomProducts = async () => {
    //         try {
    //             const randomProducts = await randomThreeExcept(productIdList, currentPage);
    //             setProductRecommendIdList(randomProducts);
    //         } catch (error) {
    //             console.error("Error fetching random products:", error);
    //         }
    //     };
    //     fetchRandomProducts();
    // }, [baseBackendRoute, currentPage]);

    // useEffect(() => {
    //     const selectedProduct = async () => {
    //         try {
    //             const selectedProducts = productRecommendIdList.map(id => {
    //                 return productsList.find(product => product.id === id);
    //             }).filter(Boolean);
    //             setProductRecommendData(selectedProducts);
    //         } catch (error) {
    //             console.error("Error selecting products:", error);
    //         }
    //     };
    //     selectedProduct();
    // }, [productRecommendIdList, productsList]);
    useEffect(() => {
        console.log(productRecommendIdList);


        const randomThreeExcept = async (list, excludedValue) => {
            console.log(list);
            console.log(excludedValue);
            const filteredList = await list.filter(item => Number(item) !== Number(excludedValue));
            console.log("filtered list:" + filteredList)
            if (filteredList.length >= 3) {
                const shuffledList = await filteredList.sort(() => Math.random() - 0.5);
                console.log(shuffledList)
                await setProductRecommendIdList(shuffledList.slice(0, 3));
            } else {
                await setProductRecommendIdList(list.slice(0, 3))
            }
        }
        randomThreeExcept(productIdList, currentPageContent?.id);
    }, [productIdList, id])


    useEffect(() => {
        const handleRecommend = async () => {
            let l = await [];
            for (const i of productRecommendIdList) {
                for (const f of productsList) {
                    if (i === f.id) {
                        console.log(f);
                        l.push(f);
                        break;
                    }
                    else {
                        continue;
                    }
                }
            }
            setProductRecommendData(l);
        }
        handleRecommend();
    }, [productRecommendIdList])
    return (
        <>
            {
                isLargeScreen ?
                    <>
                        <div className="block recommend">
                            <div className="title-head">
                                <h2>For even more visibility, we recommend that you</h2>
                            </div>
                            <div className="container card-slider slick-initialized slick-slider slick-dotted">
                                <div className="slick-list draggable">
                                    <div className="slick-track" style={index === 0 ? { opacity: 1, width: '2345px', transform: 'translate3d(-0px, 0px, 0px)' } : index === 1 ? { opacity: 1, width: '2345px', transform: 'translate3d(-340px, 0px, 0px)' } : index === 2 ? { opacity: 1, width: '2345px', transform: 'translate3d(-670px, 0px, 0px)' } : {}}>
                                        {
                                            productRecommendData.map((value, ind) => (
                                                <div className="card-item slick-slide slick-current slick-active" style={{ width: '320px' }} tabIndex="-1" role="tabpanel">
                                                    <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Mode_.jpg" style={{ backgroundImage: `url("${value?.background_image}")` }} className="card-head rocket-lazyload entered lazyloaded"></div>
                                                    <div style={{ backgroundColor: value?.color, height: '402px' }} className="card-body">
                                                        <h2>{value?.name}</h2>
                                                        <p>{value?.short_description}</p>
                                                        <div className="secondary-button">
                                                            <a href={`/marketing/${value?.slug}`} tabIndex="-1">Learn more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="arrows_recommend herold_arrows_wrapper">
                                <span className="recommend_prev_arrow slick-arrow" style={{ marginRight: '10px' }} onClick={() => { setIndex(index - 1) }}>
                                    <img width="24" height="24" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-left.svg" style={{ maxWidth: '100%' }} />
                                </span>
                                <div className="arrows_recommend_between" style={{ display: 'inline-block', marginRight: '10px' }}>
                                    <ul role="tablist" style={{ display: 'flex' }}>
                                        <li className={index === 0 ? "slick-active" : ""} style={{ marginLeft: '10px', marginRight: '20px' }} onClick={() => { setIndex(0) }} role="presentation">
                                            <img
                                                src={index === 0 ? "/gradimo_icons/active-dot.png" : '/gradimo_icons/dot.png'}

                                                style={{ width: '20px', height: '20px' }}
                                            />



                                        </li>
                                        <li role="presentation" style={{ marginRight: '20px' }} onClick={() => { setIndex(1) }} className={index === 1 ? "slick-active" : ""}>
                                            <img
                                                src={index === 1 ? "/gradimo_icons/active-dot.png" : '/gradimo_icons/dot.png'}

                                                style={{ width: '20px', height: '20px' }}
                                            />
                                        </li>
                                        <li role="presentation" onClick={() => { setIndex(2) }} className={index === 2 ? "slick-active" : ""}>
                                            <img
                                                src={index === 2 ? "/gradimo_icons/active-dot.png" : '/gradimo_icons/dot.png'}

                                                style={{ width: '20px', height: '20px' }}
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <span className="recommend_next_arrow slick-arrow" onClick={() => { setIndex(index + 1) }}>
                                    <img width="20" height="20" decoding="async" src="https://www.herold.at/marketing/wp-content/themes/heroldmarketing/img/angle-right.svg" style={{ maxWidth: '100%' }} />
                                </span>
                            </div>
                        </div>


                    </>
                    :
                    <div className="block recommend">
                        <div className="title-head">
                            <h2 _msttexthash="1475812" _msthash="265">For even more visibility,<br _istranslated="1" /> we recommend that you</h2>
                        </div>

                        <div className="container card-slider slick-initialized slick-slider slick-dotted">
                            <div className="slick-list draggable">
                                <div className="slick-track">
                                    {
                                        productRecommendData?.map((value, ind) => (
                                            <div className="card-item slick-slide slick-current slick-active" tabIndex="-1" role="tabpanel">
                                                <div data-bg="https://www.herold.at/marketing/wp-content/uploads/2022/04/Base-Mode_.jpg" style={{ backgroundImage: `url("${value.background_image}")` }} className="card-head rocket-lazyload entered lazyloaded"></div>
                                                <div style={{ backgroundColor: value.color }} className="card-body">
                                                    <h2>{value.name}</h2>
                                                    <p>{value.short_description}</p>
                                                    <div className="secondary-button">
                                                        <a href={`/marketing/${value.slug}`} tabIndex="-1">Learn more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <div className="arrows_recommend herold_arrows_wrapper">
                            <span className="recommend_prev_arrow slick-arrow slick-hidden" aria-disabled="true" tabIndex="-1">
                                <img width="24" height="24" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3C/svg%3E" />
                            </span>
                            <div className="arrows_recommend_between">
                                <ul className="slick-dots" role="tablist">
                                    <li className="slick-active" role="presentation">
                                        <button type="button" role="tab" id="slick-slide-control50" aria-controls="slick-slide50" aria-label="1 of 1" tabIndex="0" aria-selected="true">1</button>
                                    </li>
                                    <li role="presentation">
                                        {/* Additional slick dots go here */}
                        {/* </li>
                                </ul >
                            </div >
    <span className="recommend_next_arrow slick-arrow slick-hidden" aria-disabled="true" tabIndex="-1">
        <img width="20" height="20" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%3E%3C/svg%3E" />
    </span>
                        </div > * /} */}
                    </div >
            }
        </>
    )
}