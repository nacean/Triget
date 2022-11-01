import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { useRecoilState } from "recoil";
import travelKeywordState from "atoms/plannerAtoms/travelKeywordState";
import StyledTextField from "styles/styledTemplate/StyledTextField";
import { theme } from "styles/theme";

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

const StyledSelect = styled(Select)`
  & .MuiOutlinedInput-notchedOutline {
    border-color: #ebebeb;
    background-color: #fafafa;
    border-radius: 8px;
  }
  & .MuiInputBase-input {
    z-index: 1300;
  }
  & .MuiFormLabel-root {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.45px;
    color: #abadae;
  }
`;

function KeyWordForm() {
  const [travelKeywordValue, setTravelKeywordValue] =
    useRecoilState<string>(travelKeywordState);

  const onTravelKeywordChange = (
    newKeyword: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setTravelKeywordValue(newKeyword.target.value);
  };

  const getKeywords = () =>
    keywords.map((keyword: { value: string; label: string }) => (
      <MenuItem value={keyword.value}>{keyword.label}</MenuItem>
    ));

  return (
    // <StyledTextField
    //   id="select-keyword"
    //   select
    //   label="Travel Keyword"
    //   placeholder="가고 싶은 여행의 키워드를 입력해 주세요"
    //   InputProps={{
    //     startAdornment: (
    //       <InputAdornment position="start">
    //         <ChatIcon
    //           fontSize="small"
    //           sx={{
    //             color: travelKeywordValue ? theme.colors.mainblue : "#aaa",
    //             zIndex: 1200,
    //           }}
    //         />
    //       </InputAdornment>
    //     ),
    //   }}
    //   fullWidth
    //   value={travelKeywordValue}
    //   onChange={onTravelKeywordChange}
    //   sx={{ marginBottom: "16px" }}
    // >
    //   {keywords.map(keywordParam => (
    //     <MenuItem key={keywordParam.value} value={keywordParam.value}>
    //       {keywordParam.label}
    //     </MenuItem>
    //   ))}
    // </StyledTextField>
    <StyledSelect
      id="select-keyword"
      labelId="Travel Keyword"
      label="keyword"
      fullWidth
      value={travelKeywordValue}
      onChange={onTravelKeywordChange}
      sx={{ marginBottom: "16px" }}
      placeholder="wow"
      renderValue={selected => (
        <ChatIcon
          fontSize="small"
          sx={{
            zIndex: 1200,
            marginLeft: "4px",
          }}
        />
      )}
    >
      <MenuItem disabled value="">
        <em>가고 싶은 여행의 키워드를 입력해 주세요</em>
      </MenuItem>
      {getKeywords()}
    </StyledSelect>
  );
}

export default KeyWordForm;
