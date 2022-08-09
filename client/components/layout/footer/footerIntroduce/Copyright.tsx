import styled from "styled-components";

const StyledFooterCopyright = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 15px;
  font-size: 13px;
  font-weight: 300;
`;

function FooterCopyright() {
  return (
    <StyledFooterCopyright>
      © 2022 Triget All rights reserved.
    </StyledFooterCopyright>
  );
}

export default FooterCopyright;
