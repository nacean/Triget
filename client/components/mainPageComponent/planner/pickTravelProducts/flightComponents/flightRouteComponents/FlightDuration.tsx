import styled from "styled-components";
import FlightIcon from "@mui/icons-material/Flight";

interface FlightDurationType {
  durationTime: number;
  stop_count: number;
}

const StyledFlightDuration = styled.div`
  width: 30%;
  height: 100%;
  margin: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledDuration = styled.div`
  text-align: center;
`;

const StyledDirect = styled.div<{ stop_count: number }>`
  text-align: center;
  color: ${props => (props.stop_count ? "#d1435b" : "#00a698")};
`;

const StyledDivider = styled.div`
  position: relative;
  width: 80%;
  height: 0.25rem;
  margin: 0.375rem;
  padding: 0;
  border-radius: 0.375rem;
  background-color: #68697f;
`;

function FlightDuration({ durationTime, stop_count }: FlightDurationType) {
  const calculatedTime = (): string => {
    const hour: number = Math.floor(durationTime / 60);
    const minute: number = durationTime % 60;

    return `${hour}시간 ${minute}분`;
  };

  return (
    <StyledFlightDuration>
      <StyledDuration>{calculatedTime()}</StyledDuration>
      <StyledDivider>
        <FlightIcon
          sx={{
            position: "absolute",
            top: "50%",
            right: "-1.75rem",
            marginTop: "-12px",
            transform: "rotate(90deg)",
            color: "#68697f",
          }}
        />
      </StyledDivider>
      <StyledDirect stop_count={stop_count}>
        {stop_count ? `${stop_count}회 경유` : "직항"}
      </StyledDirect>
    </StyledFlightDuration>
  );
}

export default FlightDuration;
