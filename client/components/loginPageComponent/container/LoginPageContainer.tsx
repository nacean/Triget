import { Button, Divider, TextField } from "@mui/material";
import userState from "atoms/loginAtoms/userState";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import GoogleLogin from "react-google-login";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import userType from "types/userTypes/userType";
import LoginTitle from "../title/LoginTitle";

const StyledLoginPageContainer = styled.div`
  width: 30%;
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
  // router
  const router = useRouter();

  // local userID, PW
  const [userID, setUserID] = useState<string>("");
  const [userPW, setUserPW] = useState<string>("");

  // global userID, PW
  const setUser = useSetRecoilState<userType | null>(userState);

  const onIDChange = (
    idEvent: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setUserID(idEvent.target.value);
  };

  const onPWChange = (
    pwEvent: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setUserPW(pwEvent.target.value);
  };

  const onLoginBtnClick = () => {
    setUser({ userID, userPW });
    router.push("/");
  };

  const responseGoogle = response => {
    console.log(response);
  };

  return (
    <StyledLoginPageContainer>
      <LoginTitle />
      <TextField
        id="idForm"
        label="아이디"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={userID}
        onChange={onIDChange}
      />
      <TextField
        id="passwordForm"
        label="비밀번호"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        required
        value={userPW}
        onChange={onPWChange}
      />
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{ height: 56, margin: "20px 0" }}
        onClick={onLoginBtnClick}
      >
        로그인
      </Button>
      <Link href="/signUpPage" passHref>
        <StyledSignUpLink>회원가입 하기</StyledSignUpLink>
      </Link>
      <Divider
        flexItem
        sx={{ marginTop: 6, marginBottom: 3.5, height: 9, color: "#a6a6a6" }}
      >
        SNS 로그인
      </Divider>
      <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </StyledLoginPageContainer>
  );
}

export default LoginPageContainer;
