import styled from "styled-components";

interface FlightChipTimeAndIataType {
  airTime: string;
  iataCode: string;
  textRight: boolean;
}

const StyledTimeAndIataContainer = styled.div<{ textRight: boolean }>`
  width: 38%;
  display: flex;
  flex-direction: column;
`;

const StyledTime = styled.div<{ textRight: boolean }>`
  font-size: 13px;
  font-weight: 500;
  margin-left: ${props => (props.textRight ? "auto" : "none")};
  margin-right: ${props => (props.textRight ? "none" : "auto")};
  margin-bottom: 5px;
`;

const StyledIataCode = styled.div<{ textRight: boolean }>`
  font-size: 13px;
  font-weight: 500;
  color: #68697f;
  margin-left: ${props => (props.textRight ? "auto" : "none")};
  margin-right: ${props => (props.textRight ? "none" : "auto")};
`;

function FlightChipTimeAndIata({
  airTime,
  iataCode,
  textRight,
}: FlightChipTimeAndIataType) {
  return (
    <StyledTimeAndIataContainer textRight={textRight}>
      <StyledTime textRight={textRight}>{airTime}</StyledTime>
      <StyledIataCode textRight={textRight}>{iataCode}</StyledIataCode>
    </StyledTimeAndIataContainer>
  );
}

export default FlightChipTimeAndIata;
