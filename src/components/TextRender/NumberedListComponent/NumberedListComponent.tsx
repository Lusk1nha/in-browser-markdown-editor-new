import { NumericText, StyledNumberedListComponent } from "./styles";

interface INumberedListComponent {
  list?: string[];
}

function NumberedListComponent({ list }: INumberedListComponent) {
  return (
    <StyledNumberedListComponent className="numeric-list-component">
      {list?.map((item, index) => {
        return (
          <NumericText
            data-numeric-index={index}
            className="numeric-list-item"
            title={item}
            key={index}
          >
            {item}
          </NumericText>
        );
      })}
    </StyledNumberedListComponent>
  );
}

export { NumberedListComponent };
