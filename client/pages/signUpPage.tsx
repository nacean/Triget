import SignUpPageContainer from "components/signUpPageComponent/container/signUpPageContainer";
import styled from "styled-components";

const StyledSignUpPage = styled.section`
  display: flex;
  justify-content: center;
  margin: 60px 0;
`;

function signUpPage() {
  return (
    <StyledSignUpPage>
      <SignUpPageContainer />
    </StyledSignUpPage>
  );
}

export default signUpPage;
