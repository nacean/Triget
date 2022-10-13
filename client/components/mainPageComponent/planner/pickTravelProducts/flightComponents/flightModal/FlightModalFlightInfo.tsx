import { DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import styled from "styled-components";
import flightLegType from "types/flightTypes/flightLegType";
import FlightRoute from "../flightRouteComponents/FlightRoute";
import FlightModalTimeLine from "./FlightModalTimeLine";

interface FlightModalFlightInfoType {
  pathName: string;
  flightLeg: flightLegType;
}

const StyledFlightModalFlightInfo = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledPathName = styled.span`
  font-weight: bold;
  font-size: 22px;
  margin-right: 14px;
`;
const StyledDepartureDate = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #abadae;
`;

const week: string[] = ["일", "월", "화", "수", "목", "금", "토"];

function FlightModalFlightInfo({
  pathName,
  flightLeg,
}: FlightModalFlightInfoType) {
  const departureDateString: string = flightLeg.departure.substring(0, 10);

  const year = departureDateString.substring(0, 4);
  const month = Number(departureDateString.substring(5, 7)).toString();
  const day = Number(departureDateString.substring(8, 11)).toString();

  const exactWeek: string = week[new Date(departureDateString).getDay()];

  const exactDepartureDate = `${year}년 ${month}월 ${day}일 (${exactWeek})`;

  return (
    <StyledFlightModalFlightInfo>
      <DialogTitle>
        <StyledPathName>{pathName}</StyledPathName>
        <StyledDepartureDate>{exactDepartureDate}</StyledDepartureDate>
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <FlightRoute flightLeg={flightLeg} fontSize={18} containerwidth={632} />
        <FlightModalTimeLine flightLeg={flightLeg} />
      </DialogContent>
    </StyledFlightModalFlightInfo>
  );
}

export default FlightModalFlightInfo;
