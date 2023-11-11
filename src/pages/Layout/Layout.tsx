import React from "react";

import { Wrapper } from "../../styles/reusables-styles";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { StyledApp } from "./styles";

import { LoaderFunction, Outlet, defer, useLoaderData } from "react-router-dom";
import { LocalStorage } from "../../repositories/localStorage";
import { MarkdownProvider } from "../../contexts/MarkdownProvider/MarkdownProvider";

import Markdown from "../../services/Markdown";

interface LoaderResponse {
  markdowns: Markdown[];
}

const loader: LoaderFunction = async () => {
  const storage = new LocalStorage("markdowns-app");
  let markdowns = (await storage.get("markdowns")) as Markdown[];

  if (!markdowns) {
    markdowns = [];
  }

  console.log({ markdowns });

  return defer({
    markdowns,
  });
};

function Layout() {
  const data = useLoaderData() as LoaderResponse;

  return (
    <MarkdownProvider markdowns={data.markdowns}>
      <StyledApp id="app">
        <Sidebar />

        <Wrapper id="document" as="section">
          <Outlet />
        </Wrapper>
      </StyledApp>
    </MarkdownProvider>
  );
}

export default Object.assign({
  Page: <Layout />,
  Loader: loader,
}) as {
  Page: React.ReactNode;
  Loader: LoaderFunction<unknown>;
};
