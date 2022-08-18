import { InputAdornment, MenuItem, TextField } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { useRecoilState } from "recoil";
import travelKeywordState from "atoms/plannerAtoms/travelKeywordState";

const keywords = [
  {
    value: "cheap",
    label: "가성비 좋은 여행",
  },
  {
    value: "photo",
    label: "SNS에 올리기 좋은 명소",
  },
  {
    value: "natural",
    label: "자연과 즐길 수 있는 여행",
  },
  {
    value: "active",
    label: "다양한 액티비티를 즐길 수 있는 여행",
  },
  {
    value: "local",
    label: "지역 특색을 경험 할 수 있는 여행",
  },
  {
    value: "relaxing",
    label: "휴식을 취할 수 있는 힐링 여행",
  },
  {
    value: "local",
    label: "로컬 지식과 경험을 쌓을 수 있는 여행",
  },
];

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
      id="select-keyword"
      select
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
    >
      {keywords.map(keywordParam => (
        <MenuItem key={keywordParam.value} value={keywordParam.value}>
          {keywordParam.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default KeyWordForm;
