import FlightIcon from "@mui/icons-material/Flight";
import styled from "styled-components";

const StyledLoginTitle = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitleParagraph = styled.p`
  font-size: 18px;
`;

function LoginTitle() {
  return (
    <StyledLoginTitle>
      <FlightIcon sx={{ fontSize: 100, marginBottom: 2 }} />
      <StyledTitleParagraph>
        자동 여행 계획 서비스 - 트리젯
      </StyledTitleParagraph>
    </StyledLoginTitle>
  );
}

export default LoginTitle;
