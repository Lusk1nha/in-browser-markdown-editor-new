import React from 'react';
import { AppThemeProvider } from '../../contexts/ThemeProvider/AppThemeProvider';
import { Menu } from '../Menu/Menu';

import { Wrapper } from '../../styles/reusables-styles';
import { Sidebar } from '../Sidebar/Sidebar';
import { StyledApp } from './styles';


function App() {
  const [isLightTheme, setIsLightTheme] = React.useState<boolean>(true);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

  const onThemeChange = React.useCallback(() => {
    setIsLightTheme(prevTheme => !prevTheme)
  }, [])

  const onSidebarChange = React.useCallback(() => {
    setIsSidebarOpen(prevState => !prevState)
  }, [])

  return (
    <AppThemeProvider isLightTheme={isLightTheme}>
      <StyledApp>
        <Sidebar isOpen={isSidebarOpen} onThemeChange={onThemeChange} />
        <Wrapper>
          <Menu onSidebarChange={onSidebarChange} />
          <div></div>
        </Wrapper>

      </StyledApp>
    </AppThemeProvider>
  )
}

export default App
