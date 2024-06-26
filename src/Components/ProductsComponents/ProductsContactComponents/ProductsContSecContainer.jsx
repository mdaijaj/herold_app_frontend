import { useContext, useEffect, useState } from "react"
import AppContext from "../../../AppContext";

export const ProductsContSecContainer = () => {
    const [open_1, setOpen_1] = useState(false);
    const [open_2, setOpen_2] = useState(false);
    const { gradimoContact } = useContext(AppContext);
    useEffect(() => {
        console.log(gradimoContact);
    }, [gradimoContact])
    return (
        <>
            <div class="container sub-section">
                <div class="row f-co-outta">
                    <div class="col w-50">
                        <h2>
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>Further </font>
                            </font>
                            <br class="brdesk" />
                            <font style={{ verticalAlign: "inherit" }}>
                                <font style={{ verticalAlign: "inherit" }}>contact options</font>
                            </font>
                        </h2>
                    </div>
                    <div class="col w-50 cts-out">
                        <div class="cts" onClick={() => { setOpen_1(!open_1) }}>


                            <span class={open_1 ? "cts-show" : ""}>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>{open_1 ? gradimoContact?.phone : "SHOW PHONE NUMBER"}</font>
                                </font>
                            </span>
                        </div>
                        <div class="cts" onClick={() => { setOpen_2(!open_2) }}>

                            <span class={open_2 ? "cts-show" : ""}>
                                <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>{open_2 ? gradimoContact?.email : "SHOW EMAIL ADDRESS"}</font>
                                </font>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}