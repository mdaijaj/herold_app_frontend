import { useContext, useEffect } from "react"
import AppContext from "../../../AppContext"

export const IndustryAZSections = () => {
    const { industryAZList } = useContext(AppContext);
    const Alphabets = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
    useEffect(() => {
        console.log("industryAZList", industryAZList)
        console.log("industryAZListA", industryAZList?.A)

        // console.log(industryAZList?.A);
        // console.log(industryAZList?.D);

    }, [industryAZList])
    return (
        <>
            {
                Alphabets?.map((data, index) => (
                    <div class="section_section_element__2A5tN section_small__2pErf">
                        <div class="container">
                            <h2 class="az-landing_az_heading__3PyQH" _msttexthash="5915" _msthash="221">{data}</h2>
                            <ul class="az-landing_col_list__1_at-">
                            {console.log("pppppppp", industryAZList[data])}
                            {/* const listWithOnly3Items = list.filter((element,index) => index < 3); */}

                                {
                                    industryAZList[data]?.slice(0, 20).map((da, ind) => (
                                        <li class="az-landing_list_item__2546J">
                                            <a href={`/industry/list/${da}`} _msttexthash="320333" _msthash="222">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        {da}
                                                    </font>
                                                </font>
                                            </a>
                                        </li>

                                    ))
                                }
                            </ul>
                            <a class="az-landing_all_link__2tydO" href={`/industry-az/${data}`} _msttexthash="701181" _msthash="236">All industries starting with {data}</a>
                        </div>
                    </div>
                ))
            }


        </>
    )
}