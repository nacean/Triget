import { ReactElement } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface LayoutType {
  children: ReactElement;
}

function Layout({ children }: LayoutType) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
