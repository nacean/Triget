import { Divider } from "@mui/material";
import styled from "styled-components";
import FooterContainer from "./footerIntroduce/FooterContainer";

const StyledFooter = styled.footer`
  margin-top: 200px;
  width: 100%;
`;

function Footer() {
  return (
    <StyledFooter>
      <Divider variant="fullWidth" />
      <FooterContainer />
    </StyledFooter>
  );
}

export default Footer;
