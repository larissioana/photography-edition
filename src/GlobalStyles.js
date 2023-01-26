
import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        background:#212121;
        overflow-x: hidden;
       
    }
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }
    h1,h2,h3,h4,p,a{
        font-family: "Raleway",sans-serif;
       
    }
`