import { Button, Divider, TextField } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";
import LoginTitle from "../title/LoginTitle";

const StyledLoginPageContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSignUpLink = styled.a`
  transition: none;
  :hover {
    text-decoration: underline;
  }
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
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{ height: 56, margin: "20px 0" }}
      >
        로그인
      </Button>
      <Link href="/signUp" passHref>
        <StyledSignUpLink>회원가입 하기</StyledSignUpLink>
      </Link>
      <Divider flexItem sx={{ marginTop: 6, height: 9, color: "#a6a6a6" }}>
        SNS 로그인
      </Divider>
    </StyledLoginPageContainer>
  );
}

export default LoginPageContainer;
