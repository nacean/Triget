import getExactTime from "modules/timeModule/getExactTime";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import flightLegType from "types/flightTypes/flightLegType";
import FlightChipTimeAndIata from "./FlightChipTimeAndIata";

interface FlightChipDetailType {
  flightLeg: flightLegType;
}

const StyledFlightChipDetail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0.5rem;
`;

const StyledChipRouteContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`;

const StyledDivider = styled.div`
  width: 10%;
  margin: 0 0.4rem;
  height: 1.5px;
  padding: 0;
  border-radius: 0.375rem;
  background-color: #000;
`;

function FlightChipDetail({ flightLeg }: FlightChipDetailType) {
  const departureTime = getExactTime(flightLeg.departure);
  const arrivalTime = getExactTime(flightLeg.arrival);

  return (
    <StyledFlightChipDetail>
      <Image
        src={flightLeg.operations[0].logoUrl}
        alt="picked flight image"
        width={40}
        height={30}
      />
      <StyledChipRouteContainer style={{ display: "flex" }}>
        <FlightChipTimeAndIata
          airTime={departureTime}
          iata={flightLeg.origin.iata}
          textRight
        />
        <StyledDivider />
        <FlightChipTimeAndIata
          airTime={arrivalTime}
          iata={flightLeg.destination.iata}
          textRight={false}
        />
      </StyledChipRouteContainer>
    </StyledFlightChipDetail>
  );
}

export default FlightChipDetail;
