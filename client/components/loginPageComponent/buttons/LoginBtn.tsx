import { Button } from "@mui/material";
import { theme } from "styles/theme";

interface LoginBtnType {
  onLoginBtnClick: () => void;
  userID: string;
  userPW: string;
}

function LoginBtn({ onLoginBtnClick, userID, userPW }: LoginBtnType) {
  return (
    <Button
      variant="contained"
      fullWidth
      size="large"
      sx={{
        height: 56,
        margin: "20px 0",
        backgroundColor: theme.colors.mainblue,
        borderRadius: 10,
        boxShadow: 0,
        fontSize: 17,
        fontWeight: 400,
      }}
      onClick={onLoginBtnClick}
      disabled={userID === "" || userPW === ""}
    >
      로그인
    </Button>
  );
}

export default LoginBtn;
