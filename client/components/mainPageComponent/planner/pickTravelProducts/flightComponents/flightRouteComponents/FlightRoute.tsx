import Image from "next/image";
import styled from "styled-components";
import flightLegType from "types/flightTypes/flightLegType";
import FlightDuration from "./FlightDuration";
import FlightTimeAndAirport from "./FlightTimeAndAirport";

interface FlightRouteType {
  flightLeg: flightLegType;
  fontSize: number;
}

const StyledFlightRoute = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledAirlineName = styled.p`
  margin-left: 1vw;
  font-size: 22px;
  font-weight: 700;
`;

const StyledNameContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

const StyledRouteInfo = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FlightRoute({ flightLeg, fontSize }: FlightRouteType) {
  return (
    <StyledFlightRoute>
      <StyledNameContainer>
        <Image
          src={flightLeg.operations[0].logoUrl}
          alt="Product Thumbnail"
          width={35}
          height={30}
          style={{ borderRadius: 5 }}
        />
        <StyledAirlineName>{flightLeg.operations[0].name}</StyledAirlineName>
      </StyledNameContainer>
      <StyledRouteInfo>
        <FlightTimeAndAirport
          flightTime={flightLeg.departure}
          airportInfo={flightLeg.origin}
          textRight
          fontSize={fontSize}
        />
        <FlightDuration
          durationTime={flightLeg.durationInMinutes}
          stop_count={flightLeg.stopCount}
        />
        <FlightTimeAndAirport
          flightTime={flightLeg.arrival}
          airportInfo={flightLeg.destination}
          textRight={false}
          fontSize={fontSize}
        />
      </StyledRouteInfo>
    </StyledFlightRoute>
  );
}

export default FlightRoute;
