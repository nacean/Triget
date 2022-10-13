import { Paper } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import flightLegType from "types/flightTypes/flightLegType";
import FlightIcon from "@mui/icons-material/Flight";
import FlightDuration from "./FlightDuration";
import FlightTimeAndAirport from "./FlightTimeAndAirport";

interface FlightRouteType {
  flightLeg: flightLegType;
  fontSize: number;
  containerwidth: number;
}

const StyledFlightRoute = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: space-between;
`;

const StyledAirlineName = styled.span`
  margin-left: 8.3px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 1.6;
  color: #1a1a1a;
`;

const StyledNameContainer = styled.div`
  width: 20%;
  height: 24px;
  display: flex;
  align-items: center;
`;

const StyledRouteInfo = styled(Paper)<{ containerwidth: number }>`
  width: ${props => props.containerwidth}px;
  height: 128px;
  padding: 16px 18.1px 16px 18px;
  border-radius: 7.2px;
  border-bottom-left-radius: ${props =>
    props.containerwidth === 632 ? 0 : 7.2}px;
  border-bottom-right-radius: ${props =>
    props.containerwidth === 632 ? 0 : 7.2}px;
  border: solid 0.9px #ebebeb;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDivider = styled.div`
  position: relative;
  width: 5%;
  height: 0.125rem;
  margin: 0.375rem;
  padding: 0;
  border-radius: 0.375rem;
  background-color: #68697f;
`;

function FlightRoute({ flightLeg, fontSize, containerwidth }: FlightRouteType) {
  return (
    <StyledFlightRoute>
      <StyledNameContainer>
        <Image
          src={flightLeg.operations[0].logoUrl}
          alt="Product Thumbnail"
          width={24}
          height={24}
          style={{ borderRadius: "10px" }}
        />
        <StyledAirlineName>{flightLeg.operations[0].name}</StyledAirlineName>
      </StyledNameContainer>
      <StyledRouteInfo variant="outlined" containerwidth={containerwidth}>
        <FlightTimeAndAirport
          flightTime={flightLeg.departure}
          airportInfo={flightLeg.origin}
          textRight
          fontSize={fontSize}
        />
        <StyledDivider />
        <FlightIcon
          sx={{
            height: "300px",
            transform: "rotate(90deg)",
            color: "#68697f",
          }}
        />
        <StyledDivider />
        <FlightTimeAndAirport
          flightTime={flightLeg.arrival}
          airportInfo={flightLeg.destination}
          textRight={false}
          fontSize={fontSize}
        />
        <FlightDuration
          durationTime={flightLeg.durationInMinutes}
          stop_count={flightLeg.stopCount}
        />
      </StyledRouteInfo>
    </StyledFlightRoute>
  );
}

export default FlightRoute;
