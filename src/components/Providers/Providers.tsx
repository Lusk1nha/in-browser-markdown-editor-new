import React from "react"
import { GlobalStyle } from "../../styles/globalStyle"
import App from "../App/App"


function Providers() {

  return (
    <React.Fragment>
      <GlobalStyle />

      <App />
    </React.Fragment>
  )
}

export { Providers }