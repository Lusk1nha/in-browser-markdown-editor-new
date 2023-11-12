import { NumericText, StyledNumericListComponent } from "./styles";

interface INumericListComponent {
  list: string[];
}

function NumericListComponent({ list }: INumericListComponent) {
  return (
    <StyledNumericListComponent className="numeric-list-component">
      {list.map((item, index) => {
        return (
          <NumericText data-numeric-index={index} className="numeric-list-item"  title={item} key={index}>
            {item}
          </NumericText>
        );
      })}
    </StyledNumericListComponent>
  );
}

export { NumericListComponent };
