import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import userState from "atoms/loginAtoms/userState";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import GoogleLogin from "react-google-login";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import userType from "types/userTypes/userType";
import { theme } from "styles/theme";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginTitle from "../title/LoginTitle";
import RememberId from "../rememberId/RememberId";

const StyledLoginPageContainer = styled.div`
  width: 28%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function LoginPageContainer() {
  // router
  const router = useRouter();

  // local userID, PW
  const [userID, setUserID] = useState<string>("");
  const [userPW, setUserPW] = useState<string>("");

  // showPassword
  const [showPW, setShowPW] = useState<boolean>(false);

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

  const onShowPWClick = () => {
    setShowPW(!showPW);
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
        variant="standard"
        fullWidth
        margin="normal"
        required
        placeholder="아이디"
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                color: `${theme.colors.textlightgrey}`,
              }}
            >
              <PersonOutlineOutlinedIcon color="inherit" />
            </InputAdornment>
          ),
          style: {
            paddingBottom: 10,
          },
        }}
        value={userID}
        onChange={onIDChange}
        sx={{
          ":hover": {},
        }}
      />
      <TextField
        id="passwordForm"
        variant="standard"
        fullWidth
        margin="normal"
        type={showPW ? "text" : "password"}
        required
        placeholder="비밀번호"
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                color: `${theme.colors.textlightgrey}`,
              }}
            >
              <HttpsOutlinedIcon color="inherit" />
            </InputAdornment>
          ),
          style: {
            paddingBottom: 10,
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                onClick={onShowPWClick}
                sx={{
                  color: `${theme.colors.textlightgrey}`,
                }}
              >
                {showPW ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        value={userPW}
        onChange={onPWChange}
      />
      <RememberId />
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
        onClick={onLoginBtnClick}
      >
        로그인
      </Button>
      <Link href="/signUpPage" passHref>
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{
            height: 56,
            backgroundColor: "#F4F5F6",
            color: "#98999B",
            borderRadius: 10,
            boxShadow: 0,
            fontSize: 17,
            fontWeight: 400,
            ":hover": {
              color: "#98999B",
              backgroundColor: "#e4e4e4",
              boxShadow: 0,
            },
          }}
        >
          회원가입
        </Button>
      </Link>
      <Divider
        flexItem
        sx={{ marginTop: 7, marginBottom: 3.5, height: 9, color: "#a6a6a6" }}
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
