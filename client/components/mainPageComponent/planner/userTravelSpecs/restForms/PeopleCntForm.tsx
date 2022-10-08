import { InputAdornment, TextField } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import peopleCntState from "atoms/plannerAtoms/peopleCntState";
import { useRecoilState } from "recoil";

function PeopleCntForm() {
  const [peopleCntValue, setPeopleCntValue] =
    useRecoilState<number>(peopleCntState);

  const onPeopleCntChange = (
    newPeopleCnt: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPeopleCntValue(Number(newPeopleCnt.target.value));
  };

  return (
    <TextField
      id="outlined-basic"
      label="Party"
      variant="outlined"
      placeholder="여행 인원"
      type="number"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <GroupIcon fontSize="small" />
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
