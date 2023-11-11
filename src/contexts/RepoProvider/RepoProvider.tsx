import React from "react";
import { LocalStorage } from "../../repositories/localStorage";

const RepoContext = React.createContext<LocalStorage | null>(null);

interface IRepoProviderProps {
  children?: React.ReactNode;
}

function RepoProvider({ children }: IRepoProviderProps) {
  const repo = new LocalStorage(
    "markdowns",
    "Database used to storage user markdowns",
  );

  return <RepoContext.Provider value={repo}>{children}</RepoContext.Provider>;
}

export { RepoProvider, RepoContext };
