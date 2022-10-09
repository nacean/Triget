import styled from "styled-components";

interface FlightDurationType {
  durationTime: number;
  stop_count: number;
}

const StyledFlightDuration = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const StyledDuration = styled.div`
  height: 24px;
  font-weight: 600;
`;

const StyledDirect = styled.div<{ stop_count: number }>`
  height: 24px;
  font-weight: 600;
  color: ${props => (props.stop_count ? "#ff555d" : "#00b172")};
`;

function FlightDuration({ durationTime, stop_count }: FlightDurationType) {
  const calculatedTime = (): string => {
    const hour: number = Math.floor(durationTime / 60);
    const minute: number = durationTime % 60;

    return `${hour}시간 ${minute}분`;
  };

  return (
    <StyledFlightDuration>
      <StyledDirect stop_count={stop_count}>
        {stop_count ? `${stop_count}회 경유` : "직항"}
      </StyledDirect>
      <StyledDuration>{calculatedTime()}</StyledDuration>
    </StyledFlightDuration>
  );
}

export default FlightDuration;
