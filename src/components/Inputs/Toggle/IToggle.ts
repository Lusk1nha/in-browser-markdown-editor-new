


export interface IToggle {
  onClick: () => void;
  value?: boolean;
  offContent?: React.ReactNode;
  offContentActive?: React.ReactNode;
  onContent?: React.ReactNode;
  onContentActive?: React.ReactNode;
}