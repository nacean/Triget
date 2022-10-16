import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import StyledTextField from "styles/styledTemplate/StyledTextField";
import { theme } from "styles/theme";

const StyledSignUpPageContainer = styled.div`
  width: 528px;
  padding: 71px 64px 127px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  -webkit-box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.08);
`;

const StyledSignUpTitle = styled.h2`
  width: 165px;
  height: 40px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  line-height: 0.89;
  letter-spacing: -1px;
  margin-bottom: 49px;
  color: #1a1a1a;
`;

function SignUpPageContainer() {
  const router = useRouter();

  const [nickName, setNickName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const onNickNameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNickName(event.target.value);
  };
  const onIdChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setId(event.target.value);
  };
  const onPassWordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPassword(event.target.value);
  };
  const onPasswordConfirmChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPasswordConfirm(event.target.value);
  };

  const shouldDisabledBtn = () => {
    if (
      nickName === "" ||
      id === "" ||
      password === "" ||
      passwordConfirm === ""
    )
      return true;

    return false;
  };

  const onBackBtnClick = () => {
    router.push("/loginPage");
  };

  return (
    <StyledSignUpPageContainer>
      <StyledSignUpTitle>회원가입</StyledSignUpTitle>
      <StyledTextField
        id="nickNameForm"
        label="닉네임"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={nickName}
        onChange={onNickNameChange}
      />
      <StyledTextField
        id="idForm"
        label="아이디"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={id}
        onChange={onIdChange}
      />
      <StyledTextField
        id="passwordForm"
        label="비밀번호"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        required
        value={password}
        onChange={onPassWordChange}
      />
      <StyledTextField
        id="passwordConfirmForm"
        label="비밀번호 확인"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        required
        value={passwordConfirm}
        onChange={onPasswordConfirmChange}
      />
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{
          height: "56px",
          marginTop: "49px",
          marginBottom: "16px",
          backgroundColor: theme.colors.mainblue,
          borderRadius: "32px",
          boxShadow: 0,
          fontSize: "18px",
          fontWeight: "normal",
        }}
        disabled={shouldDisabledBtn()}
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
          borderRadius: "32px",
          boxShadow: 0,
          fontSize: "18px",
          fontWeight: "normal",
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
