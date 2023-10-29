
type Functionality = {
  name: string;
  title?: string;
  icon?: React.ReactNode;
  onClick?: () => unknown;
}

interface ITopLabel {
  text: string;
  functionalities?: Functionality[];
}