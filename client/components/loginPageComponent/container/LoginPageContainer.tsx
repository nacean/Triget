import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import userState from "atoms/loginAtoms/userState";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import userType from "types/userTypes/userType";
import { theme } from "styles/theme";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useCookies } from "react-cookie";
import Image from "next/image";
import LoginTitle from "../title/LoginTitle";
import RememberId from "../rememberId/RememberId";
import GoogleImg from "../../../assets/Google__G__Logo.svg";

const StyledLoginPageContainer = styled.div`
  width: 35%;
  padding: 4.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);
`;

const StyledLogoBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
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

  // id cookie
  const [Cookies, setIdCookie, removeCookie] = useCookies(["idCookie"]);

  // remember id state
  const [rememberId, setRememberId] = useState<boolean>(false);

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
    if (rememberId) {
      setIdCookie("idCookie", userID, { maxAge: 604800 });
    } else {
      removeCookie("idCookie");
    }
    setUser({ userID, userPW });
    router.push("/");
  };

  const responseGoogle = response => {
    console.log(response);
  };

  useEffect(() => {
    if (Cookies.idCookie !== undefined) {
      setUserID(Cookies.idCookie);
      setRememberId(true);
    } else {
      setUserID("");
    }
  }, []);

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
      <RememberId rememberId={rememberId} setRememberId={setRememberId} />
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
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        render={renderProps => (
          <StyledLogoBtn
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <Image src={GoogleImg} alt="googleLogo" width={20} height={20} />
          </StyledLogoBtn>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </StyledLoginPageContainer>
  );
}

export default LoginPageContainer;
