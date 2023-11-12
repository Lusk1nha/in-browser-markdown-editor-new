import { NumericText, StyledNumericListComponent } from "./styles";

interface INumericListComponent {
  list: string[];
}

function NumericListComponent({ list }: INumericListComponent) {
  return (
    <StyledNumericListComponent>
      {list.map((item, index) => {
        return (
          <NumericText title={item} key={index}>
            {item}
          </NumericText>
        );
      })}
    </StyledNumericListComponent>
  );
}

export { NumericListComponent };
