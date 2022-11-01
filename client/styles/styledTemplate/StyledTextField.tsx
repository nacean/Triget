import { TextField } from "@mui/material";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-notchedOutline {
    border-color: #ebebeb;
    background-color: #fafafa;
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
  & .MuiInputBase-root {
    border-radius: 8px;
  }
`;
export default StyledTextField;
