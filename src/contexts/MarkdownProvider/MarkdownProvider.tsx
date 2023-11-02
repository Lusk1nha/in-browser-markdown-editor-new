import React, { createContext } from "react";
import Markdown from "../../services/Markdown";

const MarkdownContext = createContext<Markdown[]>([]);

interface IMarkdownProviderProps {
  markdowns: Markdown[];
  children?: React.ReactNode;
}

function MarkdownProvider({ markdowns, children }: IMarkdownProviderProps) {
  return (
    <MarkdownContext.Provider value={markdowns}>
      {children}
    </MarkdownContext.Provider>
  )
}


export {
  MarkdownContext,
  MarkdownProvider
}