import styled from "styled-components";

const StyledBulletList = styled.ul`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;

  list-style: none;
`;

const BulletItem = styled.li`
  color: ${(props) => props.theme.colors.textComponents.bulletList};
  font-feature-settings:
    "clig" off,
    "liga" off;

  /* Preview Paragraph */
  font-family: Roboto Slab;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */

  &::before {
    content: "•";
    color: ${(props) => props.theme.colors.textComponents.bulletListBallColor};
    font-weight: bold;
    display: inline-block;
    font-size: 0.8rem;
    width: 1rem;
    margin-left: -1em;
  }
`;

export { StyledBulletList, BulletItem };
