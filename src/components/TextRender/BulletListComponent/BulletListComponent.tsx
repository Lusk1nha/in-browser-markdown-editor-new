import { BulletItem, StyledBulletList } from "./styles";

interface IBulletListComponentProps {
  list: string[];
}

function BulletListComponent({ list }: IBulletListComponentProps) {
  return (
    <StyledBulletList className="bullet-list-component">
      {list.map((item, index) => (
        <BulletItem data-bullet-index={index} className="bullet-list-item" title={item} key={index}>
          {item}
        </BulletItem>
      ))}
    </StyledBulletList>
  );
}

export { BulletListComponent };
