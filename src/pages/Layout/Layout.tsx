import React from 'react';
import { Menu } from '../../components/Menu/Menu';

import { Wrapper } from '../../styles/reusables-styles';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { StyledApp } from './styles';

import { LoaderFunction, Outlet, defer, useLoaderData } from 'react-router-dom';
import { LocalStorage } from '../../repositories/localStorage';
import { IMarkdown } from '../../shared/types/IMarkdown';
import { MarkdownProvider } from '../../contexts/MarkdownProvider/MarkdownProvider';


interface LoaderResponse {
  markdowns: IMarkdown[]
}


const loader: LoaderFunction = async () => {
  const storage = new LocalStorage('markdowns-app');
  let markdowns: IMarkdown[] = await storage.get('markdowns');

  if (markdowns === undefined || markdowns === null) {
    markdowns = []
  }

  console.log(markdowns)

  return defer({
    markdowns
  })
}

function Layout() {
  const data: LoaderResponse = useLoaderData() as any;

  return (
    <MarkdownProvider markdowns={data.markdowns}>
      <StyledApp>
        <Sidebar />

        <Wrapper as="section">
          <Outlet />
        </Wrapper>
      </StyledApp>
    </MarkdownProvider>
  )
}


export default Object.assign({
  Page: (<Layout />),
  Loader: loader
}) as {
  Page: React.ReactNode;
  Loader: LoaderFunction<any>;
}