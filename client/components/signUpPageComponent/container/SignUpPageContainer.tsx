import { Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

const StyledSignUpPageContainer = styled.div`
  width: 30%;
  padding: 3% 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);
`;

const StyledSignUpTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const StyledForm = styled(TextField)`
  border-radius: 30px;
  background-color: #fafafa;
  color: AFB1B2;
`;

function SignUpPageContainer() {
  const router = useRouter();

  const onBackBtnClick = () => {
    router.push("/loginPage");
  };

  return (
    <StyledSignUpPageContainer>
      <StyledSignUpTitle>회원가입</StyledSignUpTitle>
      <StyledForm
        id="nickNameForm"
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
        id="passwordConfirmForm"
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
        sx={{
          height: 56,
          margin: "20px 0",
          backgroundColor: theme.colors.mainblue,
          borderRadius: 10,
          boxShadow: 0,
          fontSize: 17,
          fontWeight: 400,
        }}
      >
        회원가입
      </Button>
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{
          height: 56,
          backgroundColor: "#2D2D39",
          color: "#fff",
          borderRadius: 10,
          boxShadow: 0,
          fontSize: 17,
          fontWeight: 400,
          ":hover": {
            backgroundColor: "#2d2d39d7",
            boxShadow: 0,
          },
        }}
        onClick={onBackBtnClick}
      >
        뒤로가기
      </Button>
    </StyledSignUpPageContainer>
  );
}

export default SignUpPageContainer;
