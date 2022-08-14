import { List } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { allProductType } from "types/productTypes/productDataType";
import { travelMovingTime } from "types/travelMovingTime";
import MovingTime from "./MovingTime";
import PlanStep from "./PlanStep";

interface PlanStepContainerType {
  travelListArray: (allProductType | travelMovingTime)[];
  setNowPickStep: Dispatch<SetStateAction<allProductType | null>>;
  nowPickIndex: number;
  setNowPickIndex: Dispatch<SetStateAction<number>>;
}

const StyledPlanStepContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PlanStepContainer({
  travelListArray,
  setNowPickStep,
  nowPickIndex,
  setNowPickIndex,
}: PlanStepContainerType) {
  let travelIndex = 0;

  const onStepClick = (productParam: allProductType, indexParam: number) => {
    setNowPickIndex(indexParam);
    setNowPickStep(productParam);
  };

  const productOrTimeComponent = (
    product: allProductType | travelMovingTime,
  ) => {
    // if it is time Obj
    if ("transitMode" in product) {
      return <MovingTime timeObj={product as travelMovingTime} />;
    }

    // else it is product Obj
    travelIndex += 1;
    return (
      <PlanStep
        isPicked={nowPickIndex === travelIndex}
        product={product as allProductType}
        index={travelIndex}
        onStepClick={onStepClick}
      />
    );
  };

  return (
    <StyledPlanStepContainer>
      <List>
        {travelListArray.map((product: allProductType | travelMovingTime) =>
          productOrTimeComponent(product),
        )}
      </List>
    </StyledPlanStepContainer>
  );
}

export default PlanStepContainer;
