import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
import airportState from "atoms/plannerAtoms/airportState";
import { useRecoilState } from "recoil";

const airports = [
  {
    value: "김포공항",
    label: "김포공항",
  },
  {
    value: "인천공항",
    label: "인천공항",
  },
  {
    value: "제주공항",
    label: "제주공항",
  },
];

function AirportForm() {
  const [airportValue, setAirportValue] = useRecoilState<string>(airportState);

  const airportOnChange = (newAirport: React.ChangeEvent<HTMLInputElement>) => {
    setAirportValue(newAirport.target.value);
  };

  return (
    <TextField
      id="select-airport"
      select
      label="Airport"
      value={airportValue}
      onChange={airportOnChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AirplanemodeActiveIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
      sx={{
        width: "13%",
      }}
    >
      {airports.map(airportParam => (
        <MenuItem key={airportParam.value} value={airportParam.value}>
          {airportParam.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default AirportForm;
