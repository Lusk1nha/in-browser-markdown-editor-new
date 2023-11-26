import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App/App";

import "./i18n/config";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_PUBLIC_SUPABASE_URL,
  import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App supabaseClient={supabase} />
  </React.StrictMode>
);
