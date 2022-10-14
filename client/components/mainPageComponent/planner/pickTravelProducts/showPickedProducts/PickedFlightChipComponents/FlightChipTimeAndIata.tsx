import styled from "styled-components";

interface FlightChipTimeAndIataType {
  airTime: string;
  airDate: string;
  iata: string;
  textRight: boolean;
}

const StyledTimeAndIataContainer = styled.div<{ textRight: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 11px;
`;

const StyledIataCode = styled.div<{ textRight: boolean }>`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.42px;
  margin-right: ${props => (props.textRight ? "auto" : "none")};
  margin-left: ${props => (props.textRight ? "none" : "auto")};
`;

const StyledTime = styled.div<{ textRight: boolean }>`
  font-size: 12px;
  font-weight: 500;
  line-height: 2;
  letter-spacing: -0.36px;
  color: #787878;
  margin-right: ${props => (props.textRight ? "auto" : "none")};
  margin-left: ${props => (props.textRight ? "none" : "auto")};
`;

const StyledDate = styled.div<{ textRight: boolean }>`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: -0.33px;
  color: #abadae;
  margin-right: ${props => (props.textRight ? "auto" : "none")};
  margin-left: ${props => (props.textRight ? "none" : "auto")};
`;

function FlightChipTimeAndIata({
  airTime,
  airDate,
  iata,
  textRight,
}: FlightChipTimeAndIataType) {
  return (
    <StyledTimeAndIataContainer textRight={textRight}>
      <StyledIataCode textRight={textRight}>{iata}</StyledIataCode>
      <StyledTime textRight={textRight}>{airTime}</StyledTime>
      <StyledDate textRight={textRight}>{airDate}</StyledDate>
    </StyledTimeAndIataContainer>
  );
}

export default FlightChipTimeAndIata;
