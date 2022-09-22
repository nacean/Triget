import { Checkbox, FormControlLabel } from "@mui/material";
import styled from "styled-components";
import { theme } from "styles/theme";

const StyledRememberIdContainer = styled.div`
  width: 100%;
  margin: 5px 0;
`;

function RememberId() {
  return (
    <StyledRememberIdContainer>
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            sx={{
              color: "inherit",
            }}
          />
        }
        label="아이디 저장"
        sx={{
          color: "#828386",
        }}
      />
    </StyledRememberIdContainer>
  );
}

export default RememberId;
