import PublicIcon from "@mui/icons-material/Public";
import { InputAdornment, TextField } from "@mui/material";
import countriesState from "atoms/plannerAtoms/countriesState";
import { useRecoilState } from "recoil";

function CountriesForm() {
  const [countryValue, setCountryValue] =
    useRecoilState<string>(countriesState);

  const onCountryChange = (newCountry: React.ChangeEvent<HTMLInputElement>) => {
    setCountryValue(newCountry.target.value);
  };

  return (
    <TextField
      id="outlined-basic"
      label="Countries"
      variant="outlined"
      placeholder="가고 싶은 나라를 선택해주세요"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PublicIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
      sx={{
        width: "30%",
      }}
      value={countryValue}
      onChange={onCountryChange}
    />
  );
}

export default CountriesForm;
