import { Paper } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

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
        <LeftContent />
        <RightContent />
      </StyledPlanContent>
    </StyledPlan>
  );
}

export default SavedPlan;
