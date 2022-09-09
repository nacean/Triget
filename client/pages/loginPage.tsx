import LoginPageContainer from "components/loginPageComponent/container/LoginPageContainer";
import styled from "styled-components";

const StyledLoginPage = styled.section`
  display: flex;
  justify-content: center;
  margin: 60px 0;
`;

function loginPage() {
  return (
    <StyledLoginPage>
      <LoginPageContainer />
    </StyledLoginPage>
  );
}

export default loginPage;
