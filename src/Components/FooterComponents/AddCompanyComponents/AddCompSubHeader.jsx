export const AddCompSubHeader = () => {
    return (
        <>
            <div id="subheader">
                <div class="container clearfix">
                    <div id="breadcrumbs">
                        <ol class="list-unstyled" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList">
                            <li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem">
                                <meta itemprop="position" content="1" />
                                <a itemprop="item" href="/" data-category="Breadcrumb" data-action="click">
                                    <span itemprop="name" _msttexthash="136396" _msthash="46">Corporate</span>
                                </a>
                                <i class="icon-arrow_right" aria-hidden="true"></i>
                            </li>
                            <li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem" class="bold">
                                <meta itemprop="position" content="2" />
                                <span itemprop="name" _msttexthash="152802" _msthash="47">Add Company</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}