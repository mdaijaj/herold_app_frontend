import { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";
import axios from "axios";
import { ExternalLoginMain } from "./ExternalLoginMain";

export const ExternalLogin = () => {

    useEffect(() => {
        document.body.className = "mr-3 ml-3"
        document.body.style = "background: #f9f7f7"
        const head_5 = document.head;
        const link_5 = document.createElement("link");
        link_5.type = "text/css";
        link_5.rel = "stylesheet";
        link_5.href = "/login/login.herold.at/login.css"
        link_5.media = "all"
        head_5.appendChild(link_5);
    }, [])
    return (
        <>
            <ExternalLoginMain />
        </>
    )
} 