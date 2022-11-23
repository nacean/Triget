import { List } from "@mui/material";
import getTimeLongLat from "modules/timeModule/getTimeLongLat";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import productDataType from "types/productTypes/productDataType";
import { travelMovingTime } from "types/travelMovingTime";
import MovingTime from "./MovingTime";
import PlanStep from "./PlanStep";

interface PlanStepContainerType {
  travelListArray: (productDataType | travelMovingTime)[];
  setNowPickStep: Dispatch<SetStateAction<productDataType | null>>;
  nowPickIndex: number;
  setNowPickIndex: Dispatch<SetStateAction<number>>;
}

const StyledPlanStepContainer = styled.div`
  width: 100%;
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

  const onStepClick = (productParam: productDataType, indexParam: number) => {
    setNowPickIndex(indexParam);
    setNowPickStep(productParam);
  };

  const makeTravelList = () => {
    const travelList = [];
    for (let i = 0; i < travelListArray.length; i += 1) {
      const product: productDataType | travelMovingTime = travelListArray[i];
      travelIndex += 1;
      travelList.push(
        <PlanStep
          isPicked={nowPickIndex === travelIndex}
          product={product as productDataType}
          index={travelIndex}
          onStepClick={onStepClick}
        />,
      );

      if (i !== travelListArray.length - 1) {
        const lat1 = (product as productDataType).latitude;
        const lon1 = (product as productDataType).longitude;
        const lat2 = (travelListArray[i + 1] as productDataType).latitude;
        const lon2 = (travelListArray[i + 1] as productDataType).longitude;

        travelList.push(
          <MovingTime timeObj={getTimeLongLat(lat1, lon1, lat2, lon2)} />,
        );
      }
    }
    return travelList;
  };

  return (
    <StyledPlanStepContainer>
      <List sx={{ width: "100%" }}>{makeTravelList()}</List>
    </StyledPlanStepContainer>
  );
}

export default PlanStepContainer;
