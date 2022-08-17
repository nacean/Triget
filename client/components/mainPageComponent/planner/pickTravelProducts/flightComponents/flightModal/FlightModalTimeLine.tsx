import { Timeline } from "@mui/lab";
import getMovingTime from "modules/timeModule/getMovingTime";
import styled from "styled-components";
import flightLegType from "types/flightTypes/flightLegType";
import FlightModalContent from "./FlightModalContent";

interface FlightModalTimeLineType {
  flightLeg: flightLegType;
}

const StyledTimeLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function FlightModalTimeLine({ flightLeg }: FlightModalTimeLineType) {
  return (
    <StyledTimeLineContainer>
      {flightLeg.segments.map((legParam: flightLegType) => (
        <Timeline sx={{ width: "70%" }}>
          <FlightModalContent
            startTime={legParam.departure}
            airportInfo={legParam.origin}
            movingTime={getMovingTime(legParam.durationInMinutes)}
          />
          <FlightModalContent
            startTime={legParam.arrival}
            airportInfo={legParam.destination}
          />
        </Timeline>
      ))}
    </StyledTimeLineContainer>
  );
}

export default FlightModalTimeLine;
