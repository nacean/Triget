import PublicIcon from "@mui/icons-material/Public";
import { Autocomplete, InputAdornment } from "@mui/material";
import countriesState from "atoms/plannerAtoms/countriesState";
import { SyntheticEvent } from "react";
import { useRecoilState } from "recoil";
import StyledTextField from "styles/styledTemplate/StyledTextField";
import { theme } from "styles/theme";

interface countryListType {
  label: string;
  value: string;
}

const countryArray = [
  { label: "일본-도쿄", value: "도쿄" },
  { label: "일본-오사카", value: "오사카" },
  { label: "일본-후쿠오카", value: "후쿠오카" },
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
    else setCountryValue(newCountry.value);
  };

  return (
    <Autocomplete
      id="country-autoComplete"
      options={countryArray}
      value={countryValue}
      onChange={onCountryChange}
      noOptionsText="일치하는 여행지가 없습니다"
      fullWidth
      renderInput={params => (
        <StyledTextField
          {...params}
          label="countries"
          placeholder="가고 싶은 나라를 선택해주세요"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <PublicIcon
                  fontSize="small"
                  sx={{
                    color: countryValue ? theme.colors.mainblue : "#aaa",
                    zIndex: 1200,
                    marginLeft: "4px",
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
              paddingLeft: 0,
            },
          }}
        />
      )}
    />
  );
}

export default CountriesForm;
