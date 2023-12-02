import React, { Suspense } from "react";
import { GlobalStyle } from "../../styles/globalStyle";
import { RouteHandler } from "../../routes/RouteHandler";

import { AppThemeProvider } from "../../contexts/ThemeProvider/AppThemeProvider";
import { AppSidebarProvider } from "../../contexts/SidebarProvider/AppSidebarProvider";
import { AppLocalizationProvider } from "../../contexts/LocalizationProvider/LocalizationProvider";
import { Toaster } from "react-hot-toast";
import { SupabaseProvider } from "../../contexts/SupabaseProvider/SupabaseProvider";

import { SupabaseClient } from "@supabase/supabase-js";
import useSupabaseSession from "../../hooks/useSupabaseSession";

interface IAppProps {
  supabaseClient: SupabaseClient;
}

function App({ supabaseClient }: IAppProps) {
  const session = useSupabaseSession(supabaseClient);

  if (session === undefined) return;

  return (
    <React.Fragment>
      {/* Apply global styles */}
      <GlobalStyle />

      <Suspense fallback={<div>Loading</div>}>
        <SupabaseProvider supabaseClient={supabaseClient} session={session}>
          {/* Provide the localization context to the entire application */}
          <AppLocalizationProvider>
            {/* Provide the theme context to the entire application */}
            <AppThemeProvider>
              {/* Provide the sidebar context to the entire application */}
              <AppSidebarProvider>
                {/* Handle routes within the application */}
                <RouteHandler />

                {/* Shows application messages with toaster component */}
                <Toaster />
              </AppSidebarProvider>
            </AppThemeProvider>
          </AppLocalizationProvider>
        </SupabaseProvider>
      </Suspense>
    </React.Fragment>
  );
}

// Export the App component for usage in other parts of the application
export default App;
