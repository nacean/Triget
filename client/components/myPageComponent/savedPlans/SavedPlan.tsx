import { Paper } from "@mui/material";
import Image from "next/image";
import FlightIcon from "@mui/icons-material/Flight";
import styled from "styled-components";
import { theme } from "styles/theme";

const StyledPlan = styled(Paper)`
  display: flex;
  margin-bottom: 40px;
  height: 240px;
`;

const StyledPlanImg = styled.div`
  position: relative;
  width: 21%;
  height: 100%;
`;

const StyledPlanContent = styled.div`
  display: flex;
  padding: 30px 2.7vw;
  flex-grow: 1;
`;

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

const StyledCardRight = styled.div`
  width: 30%;
`;

function SavedPlan() {
  return (
    <StyledPlan elevation={3}>
      <StyledPlanImg>
        <Image
          layout="fill"
          src="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-gallery-with-text/london_skyline_vb34141644.jpg"
          alt="Card Image"
          style={{ borderRadius: "4px" }}
        />
      </StyledPlanImg>
      <StyledPlanContent>
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
        <StyledCardRight>right</StyledCardRight>
      </StyledPlanContent>
    </StyledPlan>
  );
}

export default SavedPlan;
