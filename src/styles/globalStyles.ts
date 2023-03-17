import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  button {
    border: none;
    outline: none;
  }

  body {
    background: #141414;
  }
`

export default GlobalStyles;