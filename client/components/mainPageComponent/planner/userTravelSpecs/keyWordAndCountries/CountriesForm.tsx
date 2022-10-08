import PublicIcon from "@mui/icons-material/Public";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import countriesState from "atoms/plannerAtoms/countriesState";
import { SyntheticEvent } from "react";
import { useRecoilState } from "recoil";

interface countryListType {
  label: string;
  year: number;
}

const countryArray = [
  { label: "일본-도쿄" },
  { label: "일본-오사카" },
  { label: "일본-후쿠오카" },
];

function CountriesForm() {
  const [countryValue, setCountryValue] = useRecoilState<string | null>(
    countriesState,
  );

  const onCountryChange = (
    event: SyntheticEvent<Element, Event>,
    newCountry: countryListType | null,
  ) => {
    if (!newCountry) setCountryValue(null);
    else setCountryValue(newCountry.label);
  };

  return (
    <Autocomplete
      disablePortal
      id="country-autoComplete"
      options={countryArray}
      value={countryValue}
      onChange={onCountryChange}
      noOptionsText="일치하는 여행지가 없습니다"
      fullWidth
      renderInput={params => (
        <TextField
          {...params}
          label="countries"
          placeholder="가고 싶은 나라를 선택해주세요"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <PublicIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}

export default CountriesForm;
