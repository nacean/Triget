import styled from "styled-components";
import MyPageLink from "./myPageLink/MyPageLink";
import Title from "./title/Title";

// css
const PrimaryNavContainer = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 맨 위에 표시하는 navigation (웹페이지 title, mypage 버튼 등)
function PrimaryNav() {
  return (
    <PrimaryNavContainer aria-label="primary-navigation">
      <Title />
      <MyPageLink />
    </PrimaryNavContainer>
  );
}

export default PrimaryNav;
