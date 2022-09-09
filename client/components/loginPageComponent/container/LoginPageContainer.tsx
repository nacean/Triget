import { TextField } from "@mui/material";
import styled from "styled-components";

const StyledLoginPageContainer = styled.div`
  width: 40%;
`;

function LoginPageContainer() {
  return (
    <StyledLoginPageContainer>
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
