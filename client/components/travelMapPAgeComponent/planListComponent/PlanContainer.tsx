import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { travelListType } from "types/travelListType";
import { travelMovingTime } from "types/travelMovingTime";
import PlanHeader from "./PlanHeader";
import PlanStepContainer from "./planSteps/PlanStepContainer";
import RescheduleBtn from "./RescheduleBtn";

interface PlanContainerType {
  travelListArray: (travelListType | travelMovingTime)[];
  setNowPickStep: Dispatch<SetStateAction<travelListType>>;
}

const StyledPlanContainer = styled.section`
  width: 35%;
  height: 100%;
  border: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
`;

function PlanContainer({ travelListArray, setNowPickStep }: PlanContainerType) {
  return (
    <StyledPlanContainer>
      <PlanHeader />
      <PlanStepContainer
        travelListArray={travelListArray}
        setNowPickStep={setNowPickStep}
      />
      <RescheduleBtn />
    </StyledPlanContainer>
  );
}

export default PlanContainer;
