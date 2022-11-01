import { DatePicker } from "antd";
import endDateState from "atoms/plannerAtoms/endDateState";
import startDateState from "atoms/plannerAtoms/startDateState";
import moment, { Moment } from "moment";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import { theme } from "styles/theme";

const { RangePicker } = DatePicker;

const StyledRangePicker = styled(RangePicker)`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  border-color: #ebebeb;
  padding-left: 40;
  background-color: #fafafa;
  & .ant-picker-input {
    left: 31px;
  }
  & .ant-picker-active-bar {
    margin-left: 40px;
    width: 390px !important;
  }
`;

const DatePickContainer = styled.div`
  position: relative;
  width: 100%;
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
          left: "11.5px",
          zIndex: 1200,
          color:
            startDateValue && endDateValue ? theme.colors.mainblue : "#aaa",
        }}
      />
      <StyledRangePicker
        placeholder={["출발 날짜", "도착 날짜"]}
        format="YYYY-MM-DD"
        popupStyle={{
          zIndex: 1300,
        }}
        size="large"
        value={[startMoment, endMoment]}
        onCalendarChange={onCalendarChange}
      />
    </DatePickContainer>
  );
}

export default DurationForm;
