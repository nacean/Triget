import { InputAdornment } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import peopleCntState from "atoms/plannerAtoms/peopleCntState";
import { useRecoilState } from "recoil";
import StyledTextField from "styles/styledTemplate/StyledTextField";
import { theme } from "styles/theme";

function PeopleCntForm() {
  const [peopleCntValue, setPeopleCntValue] =
    useRecoilState<number>(peopleCntState);

  const onPeopleCntChange = (
    newPeopleCnt: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPeopleCntValue(Number(newPeopleCnt.target.value));
  };

  return (
    <StyledTextField
      id="outlined-basic"
      label="Party"
      variant="outlined"
      placeholder="여행 인원"
      type="number"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <GroupIcon
              fontSize="small"
              sx={{
                color: peopleCntValue ? theme.colors.mainblue : "#aaa",
                zIndex: 1200,
              }}
            />
          </InputAdornment>
        ),
      }}
      sx={{
        width: "49%",
      }}
      value={peopleCntValue}
      onChange={onPeopleCntChange}
    />
  );
}

export default PeopleCntForm;
