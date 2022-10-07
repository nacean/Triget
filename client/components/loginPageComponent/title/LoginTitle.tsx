import styled from "styled-components";
import titleLogo from "assets/trigetMainLogo.png";
import Image from "next/image";

const StyledLoginTitle = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLoginMainName = styled.h2`
  margin-bottom: 24px;
`;

const StyledTitleParagraph = styled.p`
  letter-spacing: -0.2px;
  font-size: 18px;
  font-weight: normal;
`;

const StyledSmallTitle = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.mainblue};
`;

function LoginTitle() {
  return (
    <StyledLoginTitle>
      <StyledLoginMainName>
        <Image src={titleLogo} width={139} height={29} quality={100} />
      </StyledLoginMainName>
      <StyledTitleParagraph>
        자동 여행 계획 서비스 <StyledSmallTitle>Triget</StyledSmallTitle>
      </StyledTitleParagraph>
    </StyledLoginTitle>
  );
}

export default LoginTitle;
