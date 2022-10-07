import { Button } from "@mui/material";
import Link from "next/link";

function SignUpBtn() {
  return (
    <Link href="/signUpPage" passHref>
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{
          height: 56,
          backgroundColor: "#F4F5F6",
          color: "#98999B",
          borderRadius: 10,
          boxShadow: 0,
          fontSize: 17,
          fontWeight: 400,
          ":hover": {
            color: "#98999B",
            backgroundColor: "#e4e4e4",
            boxShadow: 0,
          },
        }}
      >
        회원가입
      </Button>
    </Link>
  );
}

export default SignUpBtn;
