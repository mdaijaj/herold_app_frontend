import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router";
import AppContext from "../../AppContext";
import striptags from "striptags";

export const LegalMain = () => {
    const [show, setShow] = useState(false);
    const [anotherShow, setAnotherShow] = useState(true);
    const [otherShow, setOtherShow] = useState(false);
    const { dataSource, condition, disclosure, privacy } = useContext(AppContext);
    const { id } = useParams();
    useEffect(() => {

    }, [dataSource])
    return (
        <>

            <main className="ContentPagesTemplate" style={{ marginTop: '100px' }}>
                <div className="breadcrumb_breadcrumb_block__2z7Xe breadcrumb_isTransparent__3ZqTn">
                </div>
                <div className="section_section_element__2A5tN section_small__2pErf">
                    <div className="container">
                        <div className="content-pages_template_col_tabs_layout__tA3M2">
                            <div className="content-pages_template_left__bQlKW">
                                <div className="content-pages_template_left__bQlKW">
                                    <div onClick={() => { setShow(!show) }} className={show ? "content-pages_template_accordion_trigger__1liAh content-pages_template_rotated__2pIZe" : "content-pages_template_accordion_trigger__1liAh"}>
                                        <span>
                                            <font style={{ verticalAlign: "inherit" }}>
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    {id === "1" ? "Data sources and contact details for the phone book" : id === "2" ? "All help topics" : id === "3" ? " General Terms and Conditions (GTC) and Terms of Use" : id === 4 ? "Rating Guidelines" : ""}
                                                </font>
                                            </font>
                                        </span>
                                        <i className="icon-down" />
                                    </div>
                                    <ul className={show ? "content-pages_template_show__1r7Jl" : ""}>
                                        <li>
                                            <a className={id === "1" ? "content-pages_template_active__2T0u6" : ""} href="/legal/1">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        Data sources and contact details for the phone book
                                                    </font>
                                                </font>
                                            </a>
                                        </li>
                                        <li>
                                            <a className={id === "2" ? "content-pages_template_active__2T0u6" : ""} href="/legal/2">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>{disclosure?.title}</font>
                                                </font>
                                            </a>
                                        </li>
                                        <li>
                                            <a className={id === "3" ? "content-pages_template_active__2T0u6" : ""} href="/legal/3">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        {condition?.title}
                                                    </font>
                                                </font>
                                            </a>
                                        </li>
                                        <li>
                                            <a className={id === "4" ? "content-pages_template_active__2T0u6" : ""} href="/legal/4">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>{privacy?.title}</font>
                                                </font>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content-pages_template_right__1GEZB">
                                {
                                    id === "1" ?
                                        <>
                                            <h1 className="content-pages_template_content_pages_heading__3AwAH">
                                                <font style={{ verticalAlign: "inherit" }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        Data sources and contact details for the phone book
                                                    </font>
                                                </font>
                                            </h1>
                                            <div className="content-pages_template_content_pages_typography__7i7Sn">
                                                <p style={{ columnCount: 1 }}>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            For a new entry or a change in the telephone book, see
                                                        </font>
                                                    </font>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer nofollow"
                                                        href="#"
                                                    >
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Entry in the telephone book
                                                            </font>
                                                        </font>
                                                    </a>
                                                    <font style={{ verticalAlign: "inherit" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>

                                                            . This listing is subject to change.
                                                        </font>
                                                    </font>
                                                </p>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td colSpan={1} rowSpan={1}>
                                                                <p style={{ columnCount: 1 }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            operator
                                                                        </font>
                                                                    </font>
                                                                </p>
                                                            </td>
                                                            <td colSpan={1} rowSpan={1}>
                                                                <p style={{ columnCount: 1 }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                            Contact
                                                                        </font>
                                                                    </font>
                                                                </p>
                                                            </td>
                                                        </tr>

                                                        {
                                                            dataSource?.data_sources?.map((data, index) => (
                                                                <tr>
                                                                    <td colSpan={1} rowSpan={1}>
                                                                        <p style={{ columnCount: 1 }}>
                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                                    {data.operator_name}({data.operator_designation})
                                                                                </font>
                                                                            </font>
                                                                        </p>
                                                                    </td>
                                                                    <td colSpan={1} rowSpan={1}>
                                                                        <ul>
                                                                            <li>
                                                                                <p style={{ columnCount: 1 }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                                            Tel: {data.tel}
                                                                                        </font>
                                                                                    </font>
                                                                                </p>
                                                                            </li>
                                                                            <li>
                                                                                <p style={{ columnCount: 1 }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                                            Email:
                                                                                        </font>
                                                                                    </font>
                                                                                    <a
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer nofollow"
                                                                                        href={data.email}
                                                                                    >
                                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                                {data.email}
                                                                                            </font>
                                                                                        </font>
                                                                                    </a>
                                                                                </p>
                                                                            </li>
                                                                            <li>
                                                                                <p style={{ columnCount: 1 }}>
                                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                                            Website:
                                                                                        </font>
                                                                                    </font>
                                                                                    <a
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer nofollow"
                                                                                        href={data.website}
                                                                                    >
                                                                                        <font style={{ verticalAlign: "inherit" }}>
                                                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                                                {data.website}
                                                                                            </font>
                                                                                        </font>
                                                                                    </a>
                                                                                </p>
                                                                            </li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </>
                                        : id === "3" ?
                                            <>
                                                <div className="content-pages_template_right__1GEZB">
                                                    <h1 className="content-pages_template_content_pages_heading__3AwAH">
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                {condition?.title}
                                                            </font>
                                                        </font>
                                                    </h1>
                                                    <div dangerouslySetInnerHTML={{ __html: condition?.descriptions }} className="content-pages_template_content_pages_typography__7i7Sn" />


                                                </div>

                                            </>
                                            : id === "2" ?
                                                <>
                                                    <div className="content-pages_template_right__1GEZB">
                                                        <h1 className="content-pages_template_content_pages_heading__3AwAH">
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    {disclosure?.title}
                                                                </font>
                                                            </font>
                                                        </h1>
                                                        <div dangerouslySetInnerHTML={{ __html: disclosure?.descriptions }} className="content-pages_template_content_pages_typography__7i7Sn" />


                                                    </div>

                                                </>
                                                : id === "4" ?
                                                    <>
                                                        <div className="content-pages_template_right__1GEZB">
                                                            <h1 className="content-pages_template_content_pages_heading__3AwAH">
                                                                <font style={{ verticalAlign: "inherit" }}>
                                                                    <font style={{ verticalAlign: "inherit" }}>
                                                                        {privacy?.title}
                                                                    </font>
                                                                </font>
                                                            </h1>
                                                            <div dangerouslySetInnerHTML={{ __html: privacy?.descriptions }} className="content-pages_template_content_pages_typography__7i7Sn" />


                                                        </div>

                                                    </>
                                                    :
                                                    ""
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}