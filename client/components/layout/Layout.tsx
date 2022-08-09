import { ReactElement } from "react";
import styled from "styled-components";
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
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}

export default Layout;
