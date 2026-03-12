import { createGlobalStyle } from "styled-components";
// fonts
import brand from "../assets/fonts/Barlow.ttf";
import lato from "../assets/fonts/Lato.ttf";

const Global = createGlobalStyle`
    *, *::before, *::after { 
      margin:0; 
      padding:0; 
      box-sizing:border-box; 
    }
    @font-face {
      font-family: Brand;
      src: url(${brand});
    }
    @font-face {
      font-family: Lato;
      src: url(${lato});
    }
    :root {
      --dark:   #060c18;
      --navy:   #0b1120;
      --blue:   #0d1b2e;
      --accent: #f97316;
      --accent2:#fb923c;
      --white:  #ffffff;
      --gray:   #94a3b8;
      --light:  #e2e8f0;
      --card:   #0f1c30;
      --border: rgba(255,255,255,.07);
      --radius: 8px;
      --font-h: Brand, sans-serif;
      --font-b: Lato, sans-serif;
    }
    html { scroll-behavior: smooth; }
    body { 
      background: var(--dark); 
      color: var(--light); 
      font-family: var(--font-b); 
      line-height: 1.65; 
      overflow-x:hidden; 
    }
    a { 
      text-decoration:none; 
      color:inherit; 
    }
    img { 
      max-width:100%; 
      display:block; 
    }
    ul { list-style:none; }
    button { 
      cursor:pointer; 
      border:none; 
      outline:none; 
    }
`;

export default Global;
