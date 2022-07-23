import { List } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { travelListType } from "types/travelListType";
import PlanStep from "./PlanStep";

interface PlanStepContainerType {
  travelListArray: travelListType[];
}

const StyledPlanStepContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

function PlanStepContainer({ travelListArray }: PlanStepContainerType) {
  const [nowPickIndex, setNowPickIndex] = useState<number>(-1);
  const [nowPickStep, setNowPickStep] = useState<travelListType | null>(null);

  const onStepClick = (productParam: travelListType, indexParam: number) => {
    setNowPickIndex(indexParam);
    setNowPickStep(productParam);
  };

  return (
    <StyledPlanStepContainer>
      <List>
        {travelListArray.map((product, index) => (
          <PlanStep
            isPicked={nowPickIndex === index}
            product={product}
            index={index}
            onStepClick={onStepClick}
          />
        ))}
      </List>
    </StyledPlanStepContainer>
  );
}

export default PlanStepContainer;
