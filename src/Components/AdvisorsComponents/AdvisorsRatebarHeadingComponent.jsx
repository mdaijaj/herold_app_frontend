import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router";
import AppContext from "../../AppContext";
import { Helmet } from "react-helmet";
export const AdvisorsRatebarHeadingComponent = () => {
    const { gradimoAdvisorsPage } = useContext(AppContext);
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log('done!!');
        console.log(searchInput);
        window.location.href = `/specific-advisor/${searchInput}`;
    }
    useEffect(() => {
        console.log("advisor below");
        console.log(gradimoAdvisorsPage);

    }, [gradimoAdvisorsPage])
    return (
        <>

            <Helmet>

                <meta property="og:title" content={gradimoAdvisorsPage?.meta_title} />
                <meta property="og:description" content={gradimoAdvisorsPage?.meta_description} />
                <meta property="og:type" content={gradimoAdvisorsPage?.meta_tags} />


            </Helmet>
            <div className="flex_wrapper wide_flex_wrapper ratgeber_heading home_header" style={{ backgroundColor: '#fff', boxShadow: '0 3px 25px #0001' }}>
                <div className="text_header">
                    <h1 style={{ color: 'black' }}>{gradimoAdvisorsPage?.title}</h1>
                    <p className="subtitle" dangerouslySetInnerHTML={{ __html: gradimoAdvisorsPage?.description }}></p>
                </div>

                <div className="header_search_wrapper" style={{ backgroundColor: gradimoAdvisorsPage?.color }}>
                    <div>
                        <span className="search_heading">{gradimoAdvisorsPage?.search_field_name}</span>
                    </div>
                    {/* <form role="search" method="get" className="header-search_form" action="https://www.herold.at/ratgeber/"> */}
                    <div className="header-search_form">
                        <span className="screen-reader-text">Search for:</span>
                        <input
                            type="search"
                            className="header-search_field"
                            placeholder="Enter search term..."
                            value={searchInput}
                            onChange={(e) => { setSearchInput(e.target.value) }}
                            name="s"
                            title="Search for:"
                        />
                        <input onClick={handleSubmit} className="header-search_submit" type="image" src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/images/search_black.svg" alt="Submit" />
                    </div>
                    {/* </form> */}
                </div>
            </div>


            {/* <div className="flex_wrapper wide_flex_wrapper ratgeber_heading home_header" style={{ backgroundColor: "#fff", boxShadow: "0 3px 25px #0001" }}>
                <div className="text_header">
                    <h1 _msttexthash="912873" _msthash="101" style={{ color: 'black', fontSize: '89.6px' }}> Your guide to more business success </h1>
                    <p class="subtitle" _msttexthash="2615093" _msthash="102 "> Tips and tricks for your business from Gradimo Skupaj, the digital expert. </p>
                </div>
                <div class="header_search_wrapper">
                    <div>
                        <span class="search_heading" _msttexthash="600275" _msthash="103">Enter your search term here:</span>
                    </div>
                    <form role="search" class="header-search_form" action="#" data-tracked="true">
                        <span class="screen-reader-text" _msttexthash="146341" _msthash="104">Search for:</span>
                        <input type="text" value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} placeholder="Enter search term..." style={{ height: '3.5rem', fontWeight: 100, width: '100%', border: '0', borderRadius: '3rem 0 0 3rem', padding: '1rem' }}></input>
                        <input class="header-search_submit" type="image" style={{ padding: '0.8rem' }} src="https://www.herold.at/ratgeber/wp-content/themes/herold_blog_theme_neu/assets/images/search_black.svg" alt="Submit" _mstalt="78468" _msthash="106" data-tracked="true"></input>
                    </form>
                </div>
            </div> */}
        </>
    )
}