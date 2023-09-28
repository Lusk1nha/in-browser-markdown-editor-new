import React from 'react';
import { AppThemeProvider } from '../../contexts/ThemeProvider/AppThemeProvider';
import { Menu } from '../Menu/Menu';

import { Wrapper } from '../../styles/reusables-styles';
import { Sidebar } from '../Sidebar/Sidebar';
import { StyledApp } from './styles';


function App() {
  const [isLightTheme, setIsLightTheme] = React.useState<boolean>(true);

  const onThemeChange = React.useCallback(() => {
    setIsLightTheme(prevTheme => !prevTheme)
  }, [])

  return (
    <AppThemeProvider isLightTheme={isLightTheme}>
      <StyledApp>
        <Sidebar />
        <Wrapper>
          <Menu />
          <button onClick={onThemeChange}>Mudar tema</button>
          <div></div>
        </Wrapper>

      </StyledApp>
    </AppThemeProvider>
  )
}

export default App
