import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../AppContext';
import axios from 'axios';
export const TeasersNav = () => {
    const { setProductIdList, baseBackendRoute, handleMarketingRef, handleGoogleBannerRef, handleGoogleSearchRef, handleOnlineCompleteRef, handleSeoRef, handleWebsiteRef, setProductsList, productsList } = useContext(AppContext);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${baseBackendRoute}/api/v1/products/product/`);
            const resData = await res.data.sort((a, b) => a.id - b.id);
            setProductsList(resData);
            const ids = await resData.map(product => product.id);
            setProductIdList(ids);
            console.log(ids);
        }
        fetchData();
    }, [])
    return (
        <div className="teasers-nav_teasers_nav__12Lqk">
            <div className="container">

                <ul>
                    {
                        productsList?.map((res, index) => (
                            <li key={index}>
                                <a className="teasers-nav_blau__2NCZn" href={`#${res.name}`} onMouseEnter={(e) => { e.target.style.backgroundColor = res.color }} onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent' }}>{res.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

