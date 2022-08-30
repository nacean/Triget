import { Tooltip } from "@mui/material";
import getExactDate from "modules/timeModule/getExactDate";
import getExactTime from "modules/timeModule/getExactTime";
import styled from "styled-components";
import flightAirportInfoType from "types/flightTypes/flightAirportInfoType";

interface FlightTimeAndAirportType {
  flightTime: string;
  airportInfo: flightAirportInfoType;
  textRight: boolean; // 텍스트를 오른쪽으로 치우쳐야 하는가
  fontSize: number;
}

const StyledFlightTimeAndAirport = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledTime = styled.div<{ textRight: boolean; fontSize: number }>`
  font-size: ${props => props.fontSize}px;
  font-weight: 700;
  margin-left: ${props => (props.textRight ? "auto" : "none")};
  margin-right: ${props => (props.textRight ? "none" : "auto")};
`;

const StyledDate = styled.div<{ textRight: boolean }>`
  font-size: 14px;
  font-weight: 500;
  margin-left: ${props => (props.textRight ? "auto" : "none")};
  margin-right: ${props => (props.textRight ? "none" : "auto")};
  color: #68697f;
`;

const StyledAirportCode = styled.div<{ textRight: boolean; fontSize: number }>`
  font-size: ${props => props.fontSize}px;
  font-weight: 500;
  margin-left: ${props => (props.textRight ? "auto" : "none")};
  margin-right: ${props => (props.textRight ? "none" : "auto")};
  color: #68697f;
`;

function FlightTimeAndAirport({
  flightTime,
  airportInfo,
  textRight,
  fontSize,
}: FlightTimeAndAirportType) {
  const exactTime = getExactTime(flightTime);
  const exactDate = getExactDate(flightTime);
  return (
    <StyledFlightTimeAndAirport>
      <StyledDate textRight={textRight}>{exactDate}</StyledDate>
      <StyledTime textRight={textRight} fontSize={fontSize}>
        {exactTime}
      </StyledTime>
      <Tooltip
        title={airportInfo.name}
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
        <StyledAirportCode textRight={textRight} fontSize={fontSize}>
          {airportInfo.iata}
        </StyledAirportCode>
      </Tooltip>
    </StyledFlightTimeAndAirport>
  );
}

export default FlightTimeAndAirport;
