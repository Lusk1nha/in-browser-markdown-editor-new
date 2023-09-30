import React, { createContext } from "react";
import { IMarkdown } from "../../shared/types/IMarkdown";

const MarkdownContext = createContext<IMarkdown[]>([]);

interface IMarkdownProviderProps {
  markdowns: IMarkdown[];
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