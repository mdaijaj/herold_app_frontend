export const AddedCompanyMain = () => {
    return (
        <>
            <div id="subheader">
                <div className="container clearfix">
                    <div id="breadcrumbs">
                        <ol
                            className="list-unstyled"
                            itemScope="itemscope"
                            itemType="http://schema.org/BreadcrumbList"
                        >
                            <li
                                itemProp="itemListElement"
                                itemScope="itemscope"
                                itemType="http://schema.org/ListItem"
                            >
                                <meta itemProp="position" content={1} />
                                <a
                                    itemProp="item"
                                    href="/"
                                    data-category="Breadcrumb"
                                    data-action="click"
                                >
                                    <span itemProp="name">
                                        <font style={{ verticalAlign: "inherit" }}>
                                            <font style={{ verticalAlign: "inherit" }}>Companies</font>
                                        </font>
                                    </span>
                                </a>
                                <i className="icon-arrow_right" style={
                                    {
                                        '::before': {
                                            content: "'\\e802'", // Unicode character representing the icon
                                        },
                                    }
                                } aria-hidden="true" />
                            </li>
                            <li
                                itemProp="itemListElement"
                                itemScope="itemscope"
                                itemType="http://schema.org/ListItem"
                                className="bold"
                            >
                                <meta itemProp="position" content={2} />
                                <span itemProp="name">
                                    <font style={{ verticalAlign: "inherit" }}>
                                        <font style={{ verticalAlign: "inherit" }}>Add company</font>
                                    </font>
                                </span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div role="alert" className="alert alert-info">
                    <p className="mb-0">
                        <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                                Thank you for taking the time to send us your current details. We will
                                contact you shortly to confirm your change requests.
                            </font>
                        </font>
                    </p>
                </div>
            </div>

        </>
    )
}