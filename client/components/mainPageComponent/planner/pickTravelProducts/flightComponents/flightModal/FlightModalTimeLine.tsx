import { Timeline } from "@mui/lab";
import getMovingTime from "modules/timeModule/getMovingTime";
import getWaitingTime from "modules/timeModule/getWaitingTime";
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
  margin-top: 20px;
`;

function FlightModalTimeLine({ flightLeg }: FlightModalTimeLineType) {
  const getTimeLineComponent = () => {
    const timeArray = [];

    for (
      let segIndex = 0;
      segIndex < flightLeg.segments.length;
      segIndex += 1
    ) {
      const legParam = flightLeg.segments[segIndex];

      if (segIndex === flightLeg.segments.length - 1) {
        timeArray.push(
          <FlightModalContent
            startTime={legParam.departure}
            airportInfo={legParam.origin}
            movingTime={getMovingTime(legParam.durationInMinutes)}
          />,
        );
        timeArray.push(
          <FlightModalContent
            startTime={legParam.arrival}
            airportInfo={legParam.destination}
          />,
        );
      } else {
        timeArray.push(
          <FlightModalContent
            startTime={legParam.departure}
            airportInfo={legParam.origin}
            movingTime={getMovingTime(legParam.durationInMinutes)}
          />,
        );
        timeArray.push(
          <FlightModalContent
            startTime={legParam.arrival}
            airportInfo={legParam.destination}
            waitingTime={getWaitingTime(
              legParam.arrival,
              flightLeg.segments[segIndex + 1].departure,
            )}
          />,
        );
      }
    }
    return timeArray;
  };

  return (
    <StyledTimeLineContainer>
      <Timeline sx={{ width: "80%" }}>{getTimeLineComponent()}</Timeline>
    </StyledTimeLineContainer>
  );
}

export default FlightModalTimeLine;
