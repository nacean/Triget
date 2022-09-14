import { Button, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledSignUpPageContainer = styled.div`
  width: 30%;
`;

const StyledSignUpTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

function SignUpPageContainer() {
  return (
    <StyledSignUpPageContainer>
      <StyledSignUpTitle>회원가입</StyledSignUpTitle>
      <TextField
        id="idForm"
        label="닉네임"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="idForm"
        label="아이디"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        id="passwordForm"
        label="비밀번호"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        required
      />
      <TextField
        id="passwordForm"
        label="비밀번호 확인"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        required
      />
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{ height: 56, margin: "20px 0" }}
      >
        로그인
      </Button>
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{ height: 56, backgroundColor: "#515151" }}
      >
        뒤로가기
      </Button>
    </StyledSignUpPageContainer>
  );
}

export default SignUpPageContainer;
