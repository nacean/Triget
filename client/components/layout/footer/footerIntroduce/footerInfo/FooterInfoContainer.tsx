import styled from "styled-components";
import CompanyInfo from "./CompanyInfo";
import TermsOfService from "./TermsOfService";

const StlyedFooterInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 300;
`;

function FooterInfoContainer() {
  return (
    <StlyedFooterInfoContainer>
      <TermsOfService />
      <CompanyInfo />
    </StlyedFooterInfoContainer>
  );
}

export default FooterInfoContainer;
