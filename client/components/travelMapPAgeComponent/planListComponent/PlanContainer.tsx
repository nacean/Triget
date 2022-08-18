import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import productDataType from "types/productTypes/productDataType";
import { travelMovingTime } from "types/travelMovingTime";
import PlanHeader from "./PlanHeader";
import PlanStepContainer from "./planSteps/PlanStepContainer";
import RescheduleBtn from "./RescheduleBtn";

interface PlanContainerType {
  travelListArray: (productDataType | travelMovingTime)[];
  setNowPickStep: Dispatch<SetStateAction<productDataType | null>>;
  nowPickIndex: number;
  setNowPickIndex: Dispatch<SetStateAction<number>>;
}

const StyledPlanContainer = styled.section`
  width: 35%;
  height: 100%;
  border: 1px solid #dee2e6;
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
      <RescheduleBtn />
    </StyledPlanContainer>
  );
}

export default PlanContainer;
