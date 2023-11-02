import styled from "styled-components";

const StyledMenu = styled.nav`
  background: ${props => props.theme.colors.menu.navbar};

  width: 100%;
  min-height: 72px;

  display: flex;
  align-items: center;
  gap: 24px;

  padding-right: 16px;
`

const GroupTitleSeparator = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 24px;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.colors.menu.title};
  font-family: Commissioner;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 5px;
  margin-right: 5px;
  text-transform: uppercase;
`

const Separator = styled.div`
  background: ${props => props.theme.colors.menu.separator};
  width: 1px;
  height: 60%;
`;



export {
  StyledMenu,
  GroupTitleSeparator,
  Title,
  Separator
}