import styled from "styled-components";

const StyledLoginTitle = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLoginMainName = styled.h2`
  font-size: 40px;
  color: ${props => props.theme.colors.mainblue};
  font-weight: 800;
  margin-bottom: 22px;
  font-style: italic;
`;

const StyledTitleParagraph = styled.p`
  font-size: 16px;
  font-weight: 300;
`;

const StyledSmallTitle = styled.span`
  font-weight: 500;
  color: ${props => props.theme.colors.mainblue};
`;

function LoginTitle() {
  return (
    <StyledLoginTitle>
      <StyledLoginMainName>TRIGET</StyledLoginMainName>
      <StyledTitleParagraph>
        자동 여행 계획 서비스 <StyledSmallTitle>Triget</StyledSmallTitle>
      </StyledTitleParagraph>
    </StyledLoginTitle>
  );
}

export default LoginTitle;
