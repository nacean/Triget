import styled from "styled-components";
import FooterCopyright from "./Copyright";
import FooterInfoContainer from "./footerInfo/FooterInfoContainer";

const StyledFooterContainer = styled.div`
  text-align: center;
  width: 80%;
  margin: 40px auto 0 auto;
  color: #6f767d;
`;

function FooterContainer() {
  return (
    <StyledFooterContainer>
      <FooterInfoContainer />
      <FooterCopyright />
    </StyledFooterContainer>
  );
}

export default FooterContainer;
