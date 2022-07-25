import { List } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { travelListType } from "types/travelListType";
import { travelMovingTime } from "types/travelMovingTime";
import MovingTime from "./MovingTime";
import PlanStep from "./PlanStep";

interface PlanStepContainerType {
  travelListArray: (travelListType | travelMovingTime)[];
}

const StyledPlanStepContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PlanStepContainer({ travelListArray }: PlanStepContainerType) {
  const [nowPickIndex, setNowPickIndex] = useState<number>(-1);
  const [nowPickStep, setNowPickStep] = useState<travelListType | null>(null);
  let travelIndex = 0;

  const onStepClick = (productParam: travelListType, indexParam: number) => {
    setNowPickIndex(indexParam);
    setNowPickStep(productParam);
  };

  const productOrTimeComponent = (
    product: travelListType | travelMovingTime,
  ) => {
    // if it is time Obj
    if ("moving_time" in product) {
      return <MovingTime timeObj={product as travelMovingTime} />;
    }

    // else it is product Obj
    travelIndex += 1;
    return (
      <PlanStep
        isPicked={nowPickIndex === travelIndex}
        product={product as travelListType}
        index={travelIndex}
        onStepClick={onStepClick}
      />
    );
  };

  return (
    <StyledPlanStepContainer>
      <List>
        {travelListArray.map((product: travelListType | travelMovingTime) =>
          productOrTimeComponent(product),
        )}
      </List>
    </StyledPlanStepContainer>
  );
}

export default PlanStepContainer;
