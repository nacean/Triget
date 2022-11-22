import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { InputAdornment, MenuItem } from "@mui/material";
import airportState from "atoms/plannerAtoms/airportState";
import { useRecoilState } from "recoil";
import StyledTextField from "styles/styledTemplate/StyledTextField";
import { theme } from "styles/theme";

const airports = [
  {
    value: "GMP",
    label: "김포공항",
  },
  {
    value: "ICN",
    label: "인천공항",
  },
  {
    value: "CJU",
    label: "제주공항",
  },
];

function AirportForm() {
  const [airportValue, setAirportValue] = useRecoilState<string>(airportState);

  const airportOnChange = (newAirport: React.ChangeEvent<HTMLInputElement>) => {
    setAirportValue(newAirport.target.value);
  };

  return (
    <StyledTextField
      id="select-airport"
      select
      label="Airport"
      value={airportValue}
      onChange={airportOnChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AirplanemodeActiveIcon
              fontSize="small"
              sx={{
                color: airportValue ? theme.colors.mainblue : "#aaa",
                zIndex: 1200,
              }}
            />
          </InputAdornment>
        ),
        sx: {
          color: airportValue !== "" ? "#000" : "#aaa",
        },
      }}
      SelectProps={{
        displayEmpty: true,
        renderValue: airportValue !== "" ? undefined : () => "출발 공항",
      }}
      sx={{
        width: "49%",
      }}
    >
      {airports.map(airportParam => (
        <MenuItem key={airportParam.value} value={airportParam.value}>
          {airportParam.label}
        </MenuItem>
      ))}
    </StyledTextField>
  );
}

export default AirportForm;
