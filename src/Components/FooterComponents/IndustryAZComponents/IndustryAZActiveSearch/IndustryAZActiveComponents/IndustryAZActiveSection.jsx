import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../../../AppContext";
import { useParams } from "react-router";

export const IndustryAZActiveSection = () => {
    const { industryListWithAlpha } = useContext(AppContext);
    const { alpha } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of items to display per page

    useEffect(() => {
        console.log("mmmm", industryListWithAlpha)
    }, [industryListWithAlpha]);

    // Calculate index of the first and last item to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Get the current page of items
    const currentItems = industryListWithAlpha?.results?.[alpha]?.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total number of pages
    const totalPages = Math.ceil((industryListWithAlpha?.results?.[alpha]?.length || 0) / itemsPerPage);

    // Function to handle pagination
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="section_section_element__2A5tN section_medium__3dvm3">
                <div className="container">
                    <h2 className="az-pages_az_heading__3qBsX">
                        <font _mstmutation="1" _msttexthash="1166295" _msthash="66">
                            All industries starting with the letter {alpha}
                        </font>
                    </h2>
                    <ul className="az-list_element_col_list__2bXWf az-list_element_two_col_list__vtmD6">
                        {currentItems?.map((data, index) => (
                            <li key={index} className="az-list_element_list_item__mkJ9F">
                                <a
                                    title={data?.industry_name}
                                    href={`/industry/list/${data?.industry_name}`}
                                    _msttexthash="249145"
                                    _msthash="67"
                                >
                                    {data?.industry_name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Pagination */}
                    <div className="pagination">
                    <button style={{margin: "15px"}}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>

                        <span>{currentPage}</span>

                        <button style={{margin: "15px"}}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
