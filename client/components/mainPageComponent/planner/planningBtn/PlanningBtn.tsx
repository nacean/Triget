import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function PlanningBtn() {
  return (
    <Button
      variant="contained"
      endIcon={<SearchIcon />}
      size="large"
      sx={{
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#000000b7",
        borderRadius: "12px",
        ":hover": {
          backgroundColor: "#0000009f",
        },
      }}
    >
      일정표 만들기
    </Button>
  );
}

export default PlanningBtn;
