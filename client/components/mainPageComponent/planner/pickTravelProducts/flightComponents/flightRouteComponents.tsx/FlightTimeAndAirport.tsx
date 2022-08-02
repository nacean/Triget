import styled from "styled-components";
import flightAirportInfoType from "types/flightTypes/flightAirportInfoType";

interface FlightTimeAndAirportType {
  flightTime: string;
  airportInfo: flightAirportInfoType;
  textRight: boolean; // 텍스트를 오른쪽으로 치우쳐야 하는가
}

const StyledFlightTimeAndAirport = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledTime = styled.div<{ textRight: boolean }>`
  font-size: 22px;
  font-weight: 700;
  text-align: ${props => (props.textRight ? "right" : "left")};
`;

const StyledAirportCode = styled.div<{ textRight: boolean }>`
  font-size: 22px;
  font-weight: 500;
  text-align: ${props => (props.textRight ? "right" : "left")};
  color: #68697f;
`;

function FlightTimeAndAirport({
  flightTime,
  airportInfo,
  textRight,
}: FlightTimeAndAirportType) {
  const exactTime = (): string => {
    const hour = Number(flightTime.substring(11, 13));
    const minute = Number(flightTime.substring(14, 16));

    const isAfternoon: boolean = hour >= 12;

    if (isAfternoon) {
      const exactHour: number = hour > 12 ? hour - 12 : hour;
      return `오후 ${exactHour}:${minute}`;
    }
    return `오전 ${hour}:${minute}`;
  };
  return (
    <StyledFlightTimeAndAirport>
      <StyledTime textRight={textRight}>{exactTime()}</StyledTime>
      <StyledAirportCode textRight={textRight}>
        {airportInfo.iata_code}
      </StyledAirportCode>
    </StyledFlightTimeAndAirport>
  );
}

export default FlightTimeAndAirport;
