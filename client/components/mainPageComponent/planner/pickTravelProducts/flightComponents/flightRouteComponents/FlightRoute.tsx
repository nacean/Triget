import { Tooltip } from "@mui/material";
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

function FlightRoute({ flightLeg, fontSize }: FlightRouteType) {
  return (
    <StyledFlightRoute>
      <StyledImageContainer>
        <Tooltip
          title={flightLeg.operations[0].name}
          PopperProps={{
            disablePortal: true,
            sx: {
              "& .MuiTooltip-tooltip": {
                backgroundColor: "#fff",
                color: "#000",
                fontSize: 12,
                WebkitBoxShadow:
                  "0px 10px 13px -7px #000000, 0px 0px 5px 1px rgba(0,0,0,0)",
                boxShadow:
                  "0px 10px 13px -7px #000000, 0px 0px 5px 1px rgba(0,0,0,0)",
              },
            },
          }}
        >
          <Image
            src={flightLeg.operations[0].logoUrl}
            alt="Product Thumbnail"
            width={120}
            height={60}
          />
        </Tooltip>
      </StyledImageContainer>
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
