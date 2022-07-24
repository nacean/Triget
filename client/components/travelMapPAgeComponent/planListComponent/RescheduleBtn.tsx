import { Button } from "@mui/material";
import { useRouter } from "next/router";

function RescheduleBtn() {
  const router = useRouter();
  const onRescheduleBtnClick = () => {
    router.push("/");
  };
  return (
    <Button
      fullWidth
      variant="contained"
      sx={{
        height: "80px",
        marginTop: "auto",
        backgroundColor: "#2C2E39",
        fontSize: "19px",
        ":hover": {
          backgroundColor: "#46495d",
        },
      }}
      onClick={onRescheduleBtnClick}
    >
      일정표 수정하기
    </Button>
  );
}

export default RescheduleBtn;
