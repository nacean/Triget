import { DatePicker } from "antd";
import endDateState from "atoms/plannerAtoms/endDateState";
import startDateState from "atoms/plannerAtoms/startDateState";
import moment, { Moment } from "moment";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";

const { RangePicker } = DatePicker;

const DatePickContainer = styled.div`
  position: relative;
  display: flex;
  width: 25%;
  margin-right: 30px;
`;
function DurationForm() {
  const [startDateValue, setStartDateValue] = useRecoilState<string | null>(
    startDateState,
  );
  const [endDateValue, setEndDateValue] = useRecoilState<string | null>(
    endDateState,
  );

  const startMoment: Moment | null = startDateValue
    ? moment(startDateValue)
    : null;
  const endMoment: Moment | null = endDateValue ? moment(endDateValue) : null;

  const onCalendarChange = (
    dates: [Moment, Moment],
    dateStrings: [string, string],
  ) => {
    setStartDateValue(dateStrings[0]);
    setEndDateValue(dateStrings[1]);
  };

  return (
    <DatePickContainer>
      <ConnectingAirportsIcon
        sx={{
          position: "absolute",
          top: "16px",
          left: "2.5%",
          zIndex: 5,
          color: "#757575",
        }}
      />
      <RangePicker
        placeholder={["출발 날짜", "도착 날짜"]}
        format="YYYY-MM-DD"
        style={{
          width: "100%",
          borderRadius: 4,
          borderColor: "#C4C4C4",
          paddingLeft: 40,
        }}
        size="large"
        value={[startMoment, endMoment]}
        onCalendarChange={onCalendarChange}
      />
    </DatePickContainer>
  );
}

export default DurationForm;
