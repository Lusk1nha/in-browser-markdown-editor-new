import React, { createContext, useEffect, useState } from "react";
import Markdown from "../../services/Markdown";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import MarkdownService from "../../services/MarkdownService";

// Define the shape of the context data
export interface IMarkdownContext {
  markdowns: Markdown[];
  setMarkdowns: React.Dispatch<React.SetStateAction<Markdown[]>>;
  loader: () => Promise<Markdown[]>;
}

// Create a context with default values
const MarkdownContext = createContext<IMarkdownContext>({
  markdowns: [],
  setMarkdowns: () => console.warn("State not defined..."),
  loader: () => Promise.resolve([] as Markdown[]),
});

// Define the properties that the provider component accepts
interface IMarkdownProviderProps {
  children?: React.ReactNode;
}

// Provider component for managing the markdowns state
function MarkdownProvider({ children }: IMarkdownProviderProps) {
  // Initialize state for markdowns and set its default value
  const [markdowns, setMarkdowns] = useState<Markdown[]>([]);

  const supabaseClient = useSupabaseClient();

  // Use effect to load markdowns on component mount
  useEffect(() => {
    // Use an async function to load markdowns and handle errors
    loader().catch((err) => {
      // If the error is an instance of Error, rethrow it with a custom message
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      // If it's an unexpected error, throw with a generic message
      throw new Error("Unexpected error: " + err.message);
    });
  }, []);

  // Async function to load markdowns and update the state
  async function loader() {
    const markdownService = new MarkdownService(supabaseClient);

    // Use the GetMarkdowns service to fetch markdowns
    const markdownsInStorage = await markdownService.getAll();

    // Update the state with the fetched markdowns
    setMarkdowns(markdownsInStorage);

    return markdownsInStorage;
  }

  // Provide the context values to the wrapped components
  return (
    <MarkdownContext.Provider value={{ markdowns, setMarkdowns, loader }}>
      {children}
    </MarkdownContext.Provider>
  );
}

// Export the context and provider for usage in other parts of the application
export { MarkdownContext, MarkdownProvider };
