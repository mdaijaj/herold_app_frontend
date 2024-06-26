import { useEffect } from "react";
import { FreeCheckNav } from "./FreeCheckComponents/FreeCheckNav";
import { FreeCheckMain } from "./FreeCheckComponents/FreeCheckMain";
import { FreeCheckFoot } from "./FreeCheckComponents/FreeCheckFoot";

export const FreeCheck = () => {
    useEffect(() => {
        const head_9 = document.head;
        const link_9 = document.createElement("link");
        link_9.type = "text/css";
        link_9.rel = "stylesheet";
        link_9.href = "/marketing/wp-content/plugins/auto-advance-for-gravity-forms/css/aafg_stylescf89.css"
        link_9.media = "all"
        head_9.appendChild(link_9);

        const head_10 = document.head;
        const link_10 = document.createElement("link");
        link_10.type = "text/css";
        link_10.rel = "stylesheet";
        link_10.href = "/marketing/wp-includes/css/dist/block-library/style.min9b30.css"
        link_10.media = "all"
        head_10.appendChild(link_10);


        var head3 = document.head;
        var link3 = document.createElement("link");

        link3.type = "text/css";
        link3.rel = "stylesheet";
        link3.href = "/marketing/wp-content/plugins/gravityforms/assets/css/dist/basic.min27a2.css"
        link3.media = "all"
        head3.appendChild(link3)

        var head5 = document.head;
        var link5 = document.createElement("link");

        link5.type = "text/css";
        link5.rel = "stylesheet";
        link5.href = "/marketing/wp-content/themes/heroldmarketing/template-parts/block/scan/css/occheck.css"
        link5.media = "all"
        head5.appendChild(link5)

        var head2 = document.head;
        var link2 = document.createElement("link");

        link2.type = "text/css";
        link2.rel = "stylesheet";
        link2.href = "/marketing/wp-content/themes/heroldmarketing/css/style.min10d4.css"
        link2.media = "all"
        head2.appendChild(link2)




        // t/marketing/wp-content/plugins/gravityforms/assets/css/dist/basic.min27a2.css

        // /marketing/wp-content/themes/heroldmarketing/template-parts/block/scan/css/occheck.css

        //         <link rel='stylesheet' id='auto-trigger-next-css-css' href='../../wp-content/plugins/auto-advance-for-gravity-forms/css/aafg_stylescf89.css?ver=32' type='text/css' media='all' />
        // <link rel='stylesheet' id='wp-block-library-css' href='../../wp-includes/css/dist/block-library/style.min9b30.css?ver=6.3.1' type='text/css' media='all' />
    }, [])
    return (
        <>
            <div id="page" className="site">
                <FreeCheckNav />
                <a class="skip-link screen-reader-text" href="#primary" _msttexthash="238654" _msthash="15">Skip to content</a>
                {/* <main id="main" className="site-main" role="main" style={{ marginTop: "100px" }}>
                    <FreeCheckNav />
                    <article id="post-53318" className="post-53318 page type-page status-publish hentry">
                        <div className="entry-content">

                        </div>
                    </article>

                </main> */}
                <FreeCheckMain />

                <FreeCheckFoot />
            </div>
        </>
    )
}