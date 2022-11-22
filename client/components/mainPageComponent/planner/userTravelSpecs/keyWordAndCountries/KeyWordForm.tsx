import { InputAdornment, MenuItem } from "@mui/material";
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
      <MenuItem key={keyword.label} value={keyword.value}>
        {keyword.label}
      </MenuItem>
    ));

  return (
    <StyledTextField
      id="select-keyword"
      label="Travel Keyword"
      select
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <ChatIcon
              fontSize="small"
              sx={{
                color: travelKeywordValue ? theme.colors.mainblue : "#aaa",
                zIndex: 1200,
              }}
            />
          </InputAdornment>
        ),
        sx: {
          color: travelKeywordValue !== "" ? "#000" : "#aaa",
        },
      }}
      SelectProps={{
        displayEmpty: true,
        renderValue:
          travelKeywordValue !== "" ? undefined : () => "키워드를 선택해주세요",
      }}
      value={travelKeywordValue}
      onChange={onTravelKeywordChange}
      sx={{ marginBottom: "16px" }}
    >
      {getKeywords()}
    </StyledTextField>
  );
}

export default KeyWordForm;
