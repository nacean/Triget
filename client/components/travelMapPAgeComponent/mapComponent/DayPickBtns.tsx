import { Button } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface DayPickBtnsType {
  dayCnt: number;
  nowPickDay: number;
  setNowPickDay: Dispatch<SetStateAction<number>>;
}

const StyledDayPickBtnsContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3000;
`;

const StyledDayPickBtns = styled(Button)<{ nowPick: boolean }>`
  width: 130px;
  height: 70px;
  border-radius: 20px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.nowPick ? "#fff" : "rgba(255, 255, 255, 0.8)"};
  -webkit-box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

function DayPickBtns({ dayCnt, nowPickDay, setNowPickDay }: DayPickBtnsType) {
  const makePickBtn = () => {
    const btns = [];
    for (let i = 1; i <= dayCnt; i += 1) {
      btns.push(
        <StyledDayPickBtns
          onClick={() => {
            setNowPickDay(i - 1);
          }}
          nowPick={i - 1 === nowPickDay}
        >
          Day {i}
        </StyledDayPickBtns>,
      );
    }
    return btns;
  };

  return (
    <StyledDayPickBtnsContainer>{makePickBtn()}</StyledDayPickBtnsContainer>
  );
}

export default DayPickBtns;
