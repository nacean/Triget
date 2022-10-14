import styled from "styled-components";
import PrimaryNav from "./primaryNav/PrimaryNav";

// css
const HeaderContainer = styled.header`
  width: 100%;
  height: 65px;
  padding: 0 3%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-bottom: 1px solid #f1f1f1;
`;

function Header() {
  return (
    <HeaderContainer>
      <PrimaryNav />
    </HeaderContainer>
  );
}

export default Header;
