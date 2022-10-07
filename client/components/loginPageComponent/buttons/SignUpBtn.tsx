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
          backgroundColor: "#f4f5f6",
          color: "#5d6063",
          borderRadius: 10,
          boxShadow: 0,
          fontSize: 18,
          fontWeight: "normal",
          ":hover": {
            color: "#5d6063",
            backgroundColor: "#dfdfdf",
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
