import { BulletItem, StyledBulletList } from "./styles";

interface IBulletListComponentProps {
  list: string[];
}

function BulletListComponent({ list }: IBulletListComponentProps) {
  return (
    <StyledBulletList>
      {list.map((item, index) => (
        <BulletItem title={item} key={index}>
          {item}
        </BulletItem>
      ))}
    </StyledBulletList>
  );
}

export { BulletListComponent };
