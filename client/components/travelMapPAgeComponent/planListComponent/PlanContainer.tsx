import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import productDataType from "types/productTypes/productDataType";
import { travelMovingTime } from "types/travelMovingTime";
import PlanHeader from "./PlanHeader";
import PlanStepContainer from "./planSteps/PlanStepContainer";
import PlanBtns from "./PlanBtns";

interface PlanContainerType {
  travelListArray: (productDataType | travelMovingTime)[];
  setNowPickStep: Dispatch<SetStateAction<productDataType | null>>;
  nowPickIndex: number;
  setNowPickIndex: Dispatch<SetStateAction<number>>;
}

const StyledPlanContainer = styled.section`
  flex-grow: 1;
  height: 100%;
  padding: 0 30px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
`;

function PlanContainer({
  travelListArray,
  setNowPickStep,
  nowPickIndex,
  setNowPickIndex,
}: PlanContainerType) {
  return (
    <StyledPlanContainer>
      <PlanHeader />
      <PlanStepContainer
        travelListArray={travelListArray}
        setNowPickStep={setNowPickStep}
        nowPickIndex={nowPickIndex}
        setNowPickIndex={setNowPickIndex}
      />
      <PlanBtns />
    </StyledPlanContainer>
  );
}

export default PlanContainer;
