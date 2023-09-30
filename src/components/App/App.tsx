import React from 'react';
import { AppThemeProvider } from '../../contexts/ThemeProvider/AppThemeProvider';
import { Menu } from '../Menu/Menu';

import { Wrapper } from '../../styles/reusables-styles';
import { Sidebar } from '../Sidebar/Sidebar';
import { StyledApp } from './styles';
import { Content } from '../Content/Content';


function App() {
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
      <StyledApp>
        <Sidebar isOpen={isSidebarOpen} onThemeChange={onThemeChange} />

        <Wrapper>
          <Menu isOpen={isSidebarOpen} onSidebarChange={onSidebarChange} />
          <Content />
        </Wrapper>
      </StyledApp>
    </AppThemeProvider>
  )
}

export default App