import React, { useContext } from 'react';
import { AppThemeProvider } from '../../contexts/ThemeProvider/AppThemeProvider';
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

  return defer({
    markdowns
  })
}

function Root() {
  const data: LoaderResponse = useLoaderData() as any;

  const [isDarkTheme, setIsDarkTheme] = React.useState<boolean>(true);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

  const onThemeChange = React.useCallback(() => {
    setIsDarkTheme(prevTheme => !prevTheme)
  }, [])

  const onSidebarChange = React.useCallback(() => {
    setIsSidebarOpen(prevState => !prevState)
  }, [])

  return (
    <AppThemeProvider isDarkTheme={isDarkTheme}>
      <MarkdownProvider markdowns={data.markdowns}>
        <StyledApp>
          <Sidebar isOpen={isSidebarOpen} onThemeChange={onThemeChange} />

          <Wrapper>
            <Menu isOpen={isSidebarOpen} onSidebarChange={onSidebarChange} />
            <Outlet />
          </Wrapper>
        </StyledApp>
      </MarkdownProvider>
    </AppThemeProvider>
  )
}


export default Object.assign({
  Page: (<Root />),
  Loader: loader
}) as {
  Page: React.ReactNode;
  Loader: LoaderFunction<any>;
}