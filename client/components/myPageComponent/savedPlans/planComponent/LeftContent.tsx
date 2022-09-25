import FlightIcon from "@mui/icons-material/Flight";
import styled from "styled-components";
import { theme } from "styles/theme";

const StyledCardLeft = styled.div`
  width: 70%;
`;

const StyledTitle = styled.div`
  margin: 20px 0;
  font-size: 24px;
  font-weight: 600;
`;
const StyledTravelInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

const StyledTravelTown = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.mainblue};
`;

const StyledPlanDate = styled.div`
  color: #a3a7a8;
`;

const StyledDot = styled.div`
  color: #a3a7a8;
  margin: 0 10px;
`;

function LeftContent() {
  return (
    <StyledCardLeft>
      <StyledTitle>2022 겨울 휴가</StyledTitle>
      <StyledTravelInfo>
        <StyledTravelTown>
          <FlightIcon sx={{ fontSize: "26px", rotate: "45deg" }} />
          일본 도쿄
        </StyledTravelTown>
        <StyledDot>·</StyledDot>
        <StyledPlanDate>11.20 - 11.24</StyledPlanDate>
      </StyledTravelInfo>
    </StyledCardLeft>
  );
}

export default LeftContent;
