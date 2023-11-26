import { useContext } from "react";

import { Toggle } from "../Inputs/Toggle/Toggle";

import {
  StyledSideBar,
  SidebarHeader,
  HeaderTitle,
  SidebarMyDocumentsContainer,
  SidebarMyDocumentsTitle,
  SidebarNewDocumentButton,
  SidebarThemeContainer,
  SignOutButton,
} from "./styles";

import DocumentRender from "../DocumentRender/DocumentRender";

import { AppThemeContext } from "../../contexts/ThemeProvider/AppThemeProvider";
import { AppSidebarContext } from "../../contexts/SidebarProvider/AppSidebarProvider";
import { MoonIcon } from "../Icons/MoonIcon";
import { SunIcon } from "../Icons/SunIcon";
import { redirect, useNavigate } from "react-router-dom";

import { MarkdownContext } from "../../contexts/MarkdownProvider/MarkdownProvider";
import { useGoToNew } from "../../hooks/useGoToNew";
import { AppLocalizationContext } from "../../contexts/LocalizationProvider/LocalizationProvider";
import { Wrapper } from "../../styles/reusables-styles";
import { SignOutIcon } from "../Icons/SignOutIcon";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import AuthService from "../../services/AuthService";
import { Paths } from "../../shared/enums/Paths";

// Sidebar component to render a sidebar with header, document section, and theme toggle
function Sidebar() {
  const supabaseClient = useSupabaseClient();

  // Access the localization context
  const strings = useContext(AppLocalizationContext);

  // Access various contexts and hooks for data and functionality
  const { markdowns } = useContext(MarkdownContext);
  const { onThemeChange } = useContext(AppThemeContext);
  const { on } = useContext(AppSidebarContext);
  const navigate = useNavigate();

  // Function to redirect to the new document page
  function redirectToNewDocument() {
    useGoToNew({ navigate });
  }

  async function onSignOut() {
    const authService = new AuthService(supabaseClient);
    await authService.signOut();

    redirect(Paths.Login);
  }

  return (
    <StyledSideBar id="sidebar" $on={on}>
      {/* SidebarHeader is a styled component for the sidebar header */}
      <SidebarHeader>
        {/* HeaderTitle is a styled component for rendering the header title */}
        <HeaderTitle to={Paths.NewMarkdown}>{strings.SideBarTitle}</HeaderTitle>
      </SidebarHeader>

      {/* SidebarMyDocumentsContainer is a styled component for the document section */}
      <SidebarMyDocumentsContainer>
        {/* SidebarMyDocumentsTitle is a styled component for the document section title */}
        <SidebarMyDocumentsTitle>
          {strings.SidebarMyDocumentsTitle}
        </SidebarMyDocumentsTitle>

        {/* SidebarNewDocumentButton is a styled button for creating a new document */}
        <SidebarNewDocumentButton type="button" onClick={redirectToNewDocument}>
          {strings.SidebarNewDocumentText}
        </SidebarNewDocumentButton>

        {/* DocumentRender component for rendering the list of documents */}
        <DocumentRender markdowns={markdowns} />
      </SidebarMyDocumentsContainer>

      <Wrapper $gap="2rem">
        {/* SidebarThemeContainer is a styled component for the theme toggle section */}
        <SidebarThemeContainer>
          {/* Toggle component for rendering the theme toggle */}
          <Toggle
            onClick={onThemeChange}
            value={on}
            offContent={<MoonIcon className="moon" />}
            offContentActive={
              <MoonIcon className="moonActive" fillColor="white" />
            }
            onContent={<SunIcon className="sun" />}
            onContentActive={
              <SunIcon className="sunActive" fillColor="white" />
            }
          />
        </SidebarThemeContainer>

        <SignOutButton onClick={onSignOut}>
          <SignOutIcon />
          Click here to sign out
        </SignOutButton>
      </Wrapper>
    </StyledSideBar>
  );
}

// Export the Sidebar component for usage in other parts of the application
export { Sidebar };
