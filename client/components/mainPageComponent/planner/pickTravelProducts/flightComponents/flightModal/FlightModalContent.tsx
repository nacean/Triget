import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import getExactTime from "modules/timeModule/getExactTime";
import styled from "styled-components";
import flightAirportInfoType from "types/flightTypes/flightAirportInfoType";

interface FlightModalContentType {
  startTime: string;
  airportInfo: flightAirportInfoType;
  movingTime?: string;
  waitingTime?: string;
}

const StyledExactTime = styled.span`
  display: inline-block;
  width: 4.5vw;
  height: 20px;
`;

const StyledMovingTime = styled.div`
  width: 6vw;
  position: absolute;
  top: 20%;
  right: 15px;
  font-size: 18px;
  font-weight: 500;
  text-align: end;
`;

const StyledWaitingTime = styled.div`
  width: 6vw;
  position: absolute;
  top: 20%;
  left: 22px;
  font-size: 18px;
  font-weight: 500;
  text-align: start;
`;

const StyledWaitingComment = styled.p`
  width: 6vw;
  height: 30px;
  position: absolute;
  top: 8%;
  right: 15px;
  font-size: 16px;
  font-weight: 400;
  background-color: #d1435b48;
  color: #212121;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FlightModalContent({
  startTime,
  airportInfo,
  movingTime,
  waitingTime,
}: FlightModalContentType) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        {movingTime && (
          <TimelineConnector sx={{ position: "relative" }}>
            <StyledMovingTime>{movingTime}</StyledMovingTime>
          </TimelineConnector>
        )}
        {waitingTime && (
          <TimelineConnector
            sx={{ position: "relative", bgcolor: "#d1435b", color: "#d1435b" }}
          >
            <StyledWaitingTime>{waitingTime}</StyledWaitingTime>
            <StyledWaitingComment>공항 경유 대기</StyledWaitingComment>
          </TimelineConnector>
        )}
      </TimelineSeparator>
      <TimelineContent>
        <StyledExactTime>{getExactTime(startTime)}</StyledExactTime>
        <span>{`${airportInfo.iata} ${airportInfo.name}`}</span>
      </TimelineContent>
    </TimelineItem>
  );
}

export default FlightModalContent;
