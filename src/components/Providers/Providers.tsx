import React from "react"
import { GlobalStyle } from "../../styles/globalStyle"
import { RouteHandler } from "../RouteHandler/RouteHandler"
import { RepoProvider } from "../../contexts/RepoProvider/RepoProvider"

function Providers() {

  return (
    <React.Fragment>
      <GlobalStyle />

      <RepoProvider>
        <RouteHandler />
      </RepoProvider>
    </React.Fragment>
  )
}

export {
  Providers
}