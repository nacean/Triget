import Image from "next/image";
import styled from "styled-components";
import flightLegType from "types/flightTypes/flightLegType";
import FlightDuration from "./FlightDuration";
import FlightTimeAndAirport from "./FlightTimeAndAirport";

interface FlightRouteType {
  flightLeg: flightLegType;
}

const StyledFlightRoute = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledImageContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRouteInfo = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FlightRoute({ flightLeg }: FlightRouteType) {
  return (
    <StyledFlightRoute>
      <StyledImageContainer>
        <Image
          src={flightLeg.operatings[0].logo_url}
          alt="Product Thumbnail"
          width={120}
          height={60}
        />
      </StyledImageContainer>
      <StyledRouteInfo>
        <FlightTimeAndAirport
          flightTime={flightLeg.departure_time}
          airportInfo={flightLeg.origin}
          textRight
        />
        <FlightDuration
          duration_time={flightLeg.duration_time}
          stop_count={flightLeg.stop_count}
        />
        <FlightTimeAndAirport
          flightTime={flightLeg.arrival_time}
          airportInfo={flightLeg.destination}
          textRight={false}
        />
      </StyledRouteInfo>
    </StyledFlightRoute>
  );
}

export default FlightRoute;
