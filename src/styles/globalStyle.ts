import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    transition-property: color, background, border;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
  }

  body {
    width: 100%;
    min-height: 100vh;

    display: flex;

    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  }

  #root {
    width: 100%;
  }
`

export { GlobalStyle }