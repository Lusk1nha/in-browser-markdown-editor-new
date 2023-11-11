type Functionality = {
  name?: string;
  title?: string;
  icon?: React.ReactNode;
  onClick?: () => unknown;
  onRender?: (key: number) => React.ReactNode;
};

export { Functionality };
