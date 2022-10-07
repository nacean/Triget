import { Divider } from "@mui/material";
import userState from "atoms/loginAtoms/userState";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import userType from "types/userTypes/userType";
import { useCookies } from "react-cookie";
import LoginTitle from "../title/LoginTitle";
import LoginForms from "../forms/LoginForms";
import RememberId from "../rememberId/RememberId";
import LoginBtn from "../buttons/LoginBtn";
import SignUpBtn from "../buttons/SignUpBtn";
import GoogleLoginBtn from "../buttons/GoogleLoginBtn";

const StyledLoginPageContainer = styled.div`
  width: 528px;
  height: 736px;
  padding: 83px 63px 56px 64px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.08);
`;

function LoginPageContainer() {
  // router
  const router = useRouter();

  // local userID, PW
  const [userID, setUserID] = useState<string>("");
  const [userPW, setUserPW] = useState<string>("");

  // remember id state
  const [rememberId, setRememberId] = useState<boolean>(false);

  // global userID, PW
  const setUser = useSetRecoilState<userType | null>(userState);
  // id cookie
  const [Cookies, setIdCookie, removeCookie] = useCookies(["idCookie"]);

  const onLoginBtnClick = () => {
    if (rememberId) {
      setIdCookie("idCookie", userID, { maxAge: 604800 });
    } else {
      removeCookie("idCookie");
    }
    setUser({ userID, userPW });
    localStorage.setItem("userID", userID);
    localStorage.setItem("userPW", userPW);
    router.push("/");
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
      <LoginForms
        userID={userID}
        setUserID={setUserID}
        userPW={userPW}
        setUserPW={setUserPW}
      />
      <RememberId rememberId={rememberId} setRememberId={setRememberId} />
      <LoginBtn
        onLoginBtnClick={onLoginBtnClick}
        userID={userID}
        userPW={userPW}
      />
      <SignUpBtn />
      <Divider
        flexItem
        sx={{ marginTop: 7, marginBottom: 3.5, height: 9, color: "#a6a6a6" }}
      >
        SNS 로그인
      </Divider>
      <GoogleLoginBtn />
    </StyledLoginPageContainer>
  );
}

export default LoginPageContainer;
