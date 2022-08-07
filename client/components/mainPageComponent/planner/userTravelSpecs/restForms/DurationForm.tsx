import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import endDateState from "atoms/plannerAtoms/endDateState";
import startDateState from "atoms/plannerAtoms/startDateState";
import { Dayjs } from "dayjs";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const DatePickContainer = styled.div`
  display: flex;
  margin-right: 30px;
`;
function DurationForm() {
  const [startDateValue, setStartDateValue] = useRecoilState<Dayjs | null>(
    startDateState,
  );
  const [endDateValue, setEndDateValue] = useRecoilState<Dayjs | null>(
    endDateState,
  );

  const onStartDateChange = (newStartDate: Dayjs | null) => {
    setStartDateValue(newStartDate);
  };

  const onEndDateChange = (newEndDate: Dayjs | null) => {
    setEndDateValue(newEndDate);
  };

  return (
    <DatePickContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Start Date"
          inputFormat="YYYY-MM-DD"
          renderInput={params => (
            <TextField {...params} sx={{ marginRight: 1 }} />
          )}
          value={startDateValue}
          onChange={onStartDateChange}
          PopperProps={{ placement: "bottom-start", disablePortal: true }}
        />
        <DesktopDatePicker
          label="End Date"
          inputFormat="YYYY-MM-DD"
          renderInput={params => <TextField {...params} />}
          value={endDateValue}
          onChange={onEndDateChange}
          PopperProps={{ placement: "bottom-start", disablePortal: true }}
        />
      </LocalizationProvider>
    </DatePickContainer>
  );
}

export default DurationForm;
