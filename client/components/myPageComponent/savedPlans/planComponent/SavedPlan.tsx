import { Paper } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
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
  const [viewManipulateBtns, setViewManipulateBtns] = useState<boolean>(false);

  const onPlanMouseOver = () => {
    setViewManipulateBtns(true);
  };

  const onPlanMouseOut = () => {
    setViewManipulateBtns(false);
  };

  return (
    <StyledPlan
      elevation={3}
      onMouseOver={onPlanMouseOver}
      onMouseOut={onPlanMouseOut}
    >
      <StyledPlanImg>
        <Image
          layout="fill"
          src="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-gallery-with-text/london_skyline_vb34141644.jpg"
          alt="Card Image"
          style={{ borderRadius: "4px" }}
          priority
        />
      </StyledPlanImg>
      <StyledPlanContent>
        <LeftContent />
        <RightContent viewManipulateBtns={viewManipulateBtns} />
      </StyledPlanContent>
    </StyledPlan>
  );
}

export default SavedPlan;
