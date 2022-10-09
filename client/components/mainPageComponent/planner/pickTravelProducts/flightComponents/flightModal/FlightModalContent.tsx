import {
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import getExactTime from "modules/timeModule/getExactTime";
import styled from "styled-components";
import { theme } from "styles/theme";
import flightAirportInfoType from "types/flightTypes/flightAirportInfoType";

interface FlightModalContentType {
  startTime: string;
  airportInfo: flightAirportInfoType;
  movingTime?: string;
  waitingTime?: string;
}

const StyledExactTime = styled.span`
  margin-right: 16px;
  color: ${theme.colors.mainblue};
  font-size: 16px;
  font-weight: bold;
  line-height: 1.8;
  letter-spacing: -0.44px;
`;

const StyledAirportInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 2;
  letter-spacing: -0.4px;
  color: #1a1a1a;
`;

const StyledMovingTime = styled.div`
  width: 112px;
  height: 28px;
  border: solid 1px #ebebeb;
  border-radius: 6px;
  position: absolute;
  top: 20%;
  right: 15px;
  font-size: 14px;
  font-weight: 500;
  line-height: 2.29;
  letter-spacing: -0.35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWaitingComment = styled.p`
  width: 208px;
  height: 28px;
  position: absolute;
  top: 8%;
  right: 15px;
  font-size: 14px;
  font-weight: 600;
  background-color: #ff555d;
  color: #fff;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTimelineContent = styled(TimelineContent)`
  width: 336px;
  height: 40px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  padding: 0 17px;
  border-radius: 4px;
  border: solid 1px #ebebeb;
`;

function FlightModalContent({
  startTime,
  airportInfo,
  movingTime,
  waitingTime,
}: FlightModalContentType) {
  return (
    <TimelineItem
      sx={{
        width: "100%",
        "&.MuiTimelineItem-missingOppositeContent::before": {
          flex: 0.8,
        },
      }}
    >
      <TimelineSeparator>
        <TimelineDot sx={{ borderWidth: 0 }} />
        {movingTime && (
          <TimelineConnector sx={{ position: "relative" }}>
            <StyledMovingTime>{movingTime}</StyledMovingTime>
          </TimelineConnector>
        )}
        {waitingTime && (
          <TimelineConnector sx={{ position: "relative", bgcolor: "#ff555d" }}>
            <StyledWaitingComment>{`공항 경유 대기: ${waitingTime}`}</StyledWaitingComment>
          </TimelineConnector>
        )}
      </TimelineSeparator>
      <StyledTimelineContent>
        <StyledExactTime>{getExactTime(startTime)}</StyledExactTime>
        <StyledAirportInfo>{`${airportInfo.iata} ${airportInfo.name}`}</StyledAirportInfo>
      </StyledTimelineContent>
    </TimelineItem>
  );
}

export default FlightModalContent;
