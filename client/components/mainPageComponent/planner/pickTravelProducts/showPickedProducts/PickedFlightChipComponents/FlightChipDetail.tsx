import getExactDate from "modules/timeModule/getExactDate";
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
  justify-content: space-between;
`;

const StyledImg = styled.div`
  margin-right: 16px;
`;

const StyledChipRouteContainer = styled.div`
  display: flex;
  flex-grow: 1;
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
  const departureDate = getExactDate(flightLeg.departure);
  const arrivalTime = getExactTime(flightLeg.arrival);
  const arrivalDate = getExactDate(flightLeg.arrival);

  return (
    <StyledFlightChipDetail>
      <StyledImg>
        <Image
          src={flightLeg.operations[0].logoUrl}
          alt="picked flight image"
          width={24}
          height={24}
          style={{ borderRadius: "4px" }}
        />
      </StyledImg>
      <StyledChipRouteContainer style={{ display: "flex" }}>
        <FlightChipTimeAndIata
          airTime={departureTime}
          airDate={departureDate}
          iata={flightLeg.origin.iata}
          textRight
        />
        <StyledDivider />
        <FlightChipTimeAndIata
          airTime={arrivalTime}
          airDate={arrivalDate}
          iata={flightLeg.destination.iata}
          textRight={false}
        />
      </StyledChipRouteContainer>
    </StyledFlightChipDetail>
  );
}

export default FlightChipDetail;
