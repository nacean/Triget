import { useGoogleLogin } from "@react-oauth/google";
import styled from "styled-components";
import Image from "next/image";
import GoogleImg from "../../../assets/Google__G__Logo.svg";

const StyledLogoBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  transition: 0.3s all;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #eeeeee;
  }
`;

function GoogleLoginBtn() {
  const googleLogin = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: () => console.log("login failed"),
  });

  return (
    <StyledLogoBtn
      onClick={() => {
        googleLogin();
      }}
    >
      <Image src={GoogleImg} alt="googleLogo" width={20} height={20} />
    </StyledLogoBtn>
  );
}

export default GoogleLoginBtn;
