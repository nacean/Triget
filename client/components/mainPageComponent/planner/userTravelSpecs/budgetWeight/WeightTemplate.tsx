import { Paper, Slider } from "@mui/material";
import budgetState from "atoms/plannerAtoms/budgetState";
import React, { ChangeEvent } from "react";
import { SetterOrUpdater, useRecoilValue } from "recoil";
import styled from "styled-components";
import { theme } from "styles/theme";

const WeightTemplateContainer = styled(Paper)`
  position: relative;
  width: 440px;
  height: 150px;
  padding: 19px 24px 25px 23px;
  border-radius: 8px;
  border: 1px solid #ebebeb;
`;

const WeightSubject = styled.h3`
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.56px;
  margin-bottom: 4px;
  color: #1a1a1a;
`;

const sliderMark = [
  {
    value: 1,
    label: "최소",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "최대",
  },
];

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
    newWeightEvent: Event | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    newWeightParam?: number | Array<number>,
  ) => {
    if (newWeightParam !== undefined) {
      setWeightValue(newWeightParam as number);
    } else {
      const newWeight = Number(
        (
          newWeightEvent as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ).target.value.replace(/,/g, ""),
      );
      if (Number.isNaN(newWeight) === false) {
        if (newWeight <= budget) setWeightValue(newWeight);
      }
    }
  };

  return (
    <WeightTemplateContainer variant="outlined">
      <WeightSubject>{subjectName}</WeightSubject>
      <Slider
        size="medium"
        aria-label={`${subjectName}-label`}
        valueLabelDisplay="auto"
        sx={{
          display: "block",
          width: "375px",
          margin: "0 auto",
          color: "#e6e6e6",
          "& .MuiSlider-thumb": {
            backgroundColor: "#fff",
            border: `5.5px solid ${theme.colors.mainblue}`,
          },
          "& .MuiSlider-markLabel": {
            fontSize: "13px",
          },
          "& .MuiSlider-rail": {
            height: 7,
            backgroundColor: "e6e6e6",
            opacity: 1,
          },
          "& .MuiSlider-track": {
            height: 7,
            backgroundColor: theme.colors.mainblue,
            opacity: 1,
          },
        }}
        value={weightValue}
        onChange={onWeightChange}
        min={1}
        max={5}
        marks={sliderMark}
      />
    </WeightTemplateContainer>
  );
}

export default WeightTemplate;
