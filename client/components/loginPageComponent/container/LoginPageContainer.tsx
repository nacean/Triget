import { TextField } from "@mui/material";
import styled from "styled-components";
import LoginTitle from "../title/LoginTitle";

const StyledLoginPageContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function LoginPageContainer() {
  return (
    <StyledLoginPageContainer>
      <LoginTitle />
      <TextField
        id="idForm"
        label="아이디"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="passwordForm"
        label="비밀번호"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
      />
    </StyledLoginPageContainer>
  );
}

export default LoginPageContainer;
