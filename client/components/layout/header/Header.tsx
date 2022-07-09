import styled from "styled-components";
import MenuNav from "./menuNav/MenuNav";
import PrimaryNav from "./primaryNav/PrimaryNav";

// css
const HeaderContainer = styled.header`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-bottom: 1px solid #dee2e6;
`;

function Header() {
  return (
    <HeaderContainer>
      <PrimaryNav />
      <MenuNav />
    </HeaderContainer>
  );
}

export default Header;
