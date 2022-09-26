import userState from "atoms/loginAtoms/userState";
import { ReactElement, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import userType from "types/userTypes/userType";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface LayoutType {
  children: ReactElement;
}

const StyledMain = styled.main`
  width: 80%;
  margin: 0 auto;
`;

function Layout({ children }: LayoutType) {
  const setUser = useSetRecoilState<userType | null>(userState);

  useEffect(() => {
    const userID: string = localStorage.getItem("userID");
    const userPW: string = localStorage.getItem("userPW");
    if (userID && userPW) {
      setUser({ userID, userPW });
    }
  }, []);

  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}

export default Layout;
