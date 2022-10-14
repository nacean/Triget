import { VisibilityOff, Visibility } from "@mui/icons-material";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import styled from "styled-components";
import { theme } from "styles/theme";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

interface LoginFormsType {
  userID: string;
  setUserID: Dispatch<SetStateAction<string>>;
  userPW: string;
  setUserPW: Dispatch<SetStateAction<string>>;
}

const StyledLoginForms = styled.div``;

function LoginForms({ userID, setUserID, userPW, setUserPW }: LoginFormsType) {
  // showPassword
  const [showPW, setShowPW] = useState<boolean>(false);

  const onIDChange = (
    idEvent: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setUserID(idEvent.target.value);
  };

  const onPWChange = (
    pwEvent: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setUserPW(pwEvent.target.value);
  };

  const onShowPWClick = () => {
    setShowPW(!showPW);
  };

  return (
    <StyledLoginForms>
      <TextField
        id="idForm"
        variant="standard"
        fullWidth
        margin="normal"
        required
        placeholder="아이디"
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                color: `${
                  userID !== ""
                    ? theme.colors.mainblue
                    : theme.colors.textlightgrey
                }`,
              }}
            >
              <PersonOutlineOutlinedIcon color="inherit" />
            </InputAdornment>
          ),
          style: {
            paddingBottom: 10,
          },
        }}
        value={userID}
        onChange={onIDChange}
        sx={{
          "& .MuiInputBase-root::before": {
            borderBottomColor:
              userID !== "" ? theme.colors.mainblue : "#e6e6e6",
          },
        }}
      />
      <TextField
        id="passwordForm"
        variant="standard"
        fullWidth
        margin="normal"
        type={showPW ? "text" : "password"}
        required
        placeholder="비밀번호"
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{
                color: `${
                  userPW !== ""
                    ? theme.colors.mainblue
                    : theme.colors.textlightgrey
                }`,
              }}
            >
              <HttpsOutlinedIcon color="inherit" />
            </InputAdornment>
          ),
          style: {
            paddingBottom: 10,
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                onClick={onShowPWClick}
                sx={{
                  color: `${theme.colors.textlightgrey}`,
                }}
              >
                {showPW ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        value={userPW}
        onChange={onPWChange}
        sx={{
          "& .MuiInputBase-root::before": {
            borderBottomColor:
              userPW !== "" ? theme.colors.mainblue : "#e6e6e6",
          },
        }}
      />
    </StyledLoginForms>
  );
}

export default LoginForms;
