import { Paper, Slider } from "@mui/material";
import budgetState from "atoms/plannerAtoms/budgetState";
import React from "react";
import { SetterOrUpdater, useRecoilValue } from "recoil";
import styled from "styled-components";

const WeightTemplateContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`;

const WeightSubject = styled.h3`
  width: 100px;
  height: 40px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f6f8fa;
  background-color: #f6f8fa;
  border-radius: 10px;
`;

interface WeightTemplateType {
  subjectName: string;
  weightValue: number;
  setWeightValue: SetterOrUpdater<number>;
}

function WeightTemplate({
  subjectName,
  weightValue,
  setWeightValue,
}: WeightTemplateType) {
  const budget = useRecoilValue(budgetState);

  const onWeightChange = (
    newWeightEvent: Event,
    newWeight: number | Array<number>,
  ) => {
    setWeightValue(newWeight as number);
  };

  return (
    <WeightTemplateContainer>
      <WeightSubject>{subjectName}</WeightSubject>
      <Slider
        size="medium"
        aria-label={`${subjectName}-label`}
        valueLabelDisplay="auto"
        sx={{ color: "#bababa" }}
        value={weightValue}
        onChange={onWeightChange}
      />
      <Paper
        sx={{
          width: "150px",
          height: "40px",
          marginLeft: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        elevation={2}
      >
        {`${(budget * (weightValue / 100)).toFixed(0)} 원`}
      </Paper>
    </WeightTemplateContainer>
  );
}

export default WeightTemplate;
