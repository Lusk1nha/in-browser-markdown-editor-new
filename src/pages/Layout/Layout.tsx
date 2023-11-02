import React from 'react';

import { Wrapper } from '../../styles/reusables-styles';
import { Sidebar } from '../../components/Preview/Sidebar/Sidebar';
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
  let markdowns = await storage.get('markdowns') as IMarkdown[];
  
  if (!markdowns) {
    markdowns = []
  }

  console.log({ markdowns })

  return defer({
    markdowns
  })
}

function Layout() {
  const data = useLoaderData() as LoaderResponse;

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
  Loader: LoaderFunction<unknown>;
}