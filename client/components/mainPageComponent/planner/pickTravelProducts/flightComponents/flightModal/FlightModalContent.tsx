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
  movingTime?: string;
  airportInfo: flightAirportInfoType;
}

const StyledExactTime = styled.span`
  display: inline-block;
  width: 4.5vw;
`;

function FlightModalContent({
  startTime,
  movingTime,
  airportInfo,
}: FlightModalContentType) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        {movingTime && (
          <TimelineConnector sx={{ position: "relative" }}>
            <div
              style={{
                width: "6vw",
                position: "absolute",
                top: 6,
                right: 25,
              }}
            >
              {movingTime}
            </div>
          </TimelineConnector>
        )}
      </TimelineSeparator>
      <TimelineContent>
        <StyledExactTime>{getExactTime(startTime)}</StyledExactTime>
        <span>{`${airportInfo.iataCode} ${airportInfo.name}`}</span>
      </TimelineContent>
    </TimelineItem>
  );
}

export default FlightModalContent;
