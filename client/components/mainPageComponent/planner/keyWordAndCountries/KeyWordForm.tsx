import { InputAdornment, TextField } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { useRecoilState } from "recoil";
import travelKeywordState from "atoms/plannerAtoms/travelKeywordState";

function KeyWordForm() {
  const [travelKeywordValue, setTravelKeywordValue] =
    useRecoilState<string>(travelKeywordState);

  const onTravelKeywordChange = (
    newKeyword: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTravelKeywordValue(newKeyword.target.value);
  };

  return (
    <TextField
      id="outlined-basic"
      label="Travel Keyword"
      variant="outlined"
      placeholder="가고 싶은 여행의 키워드를 입력해 주세요"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <ChatIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
      sx={{
        width: "65%",
      }}
      value={travelKeywordValue}
      onChange={onTravelKeywordChange}
    />
  );
}

export default KeyWordForm;
