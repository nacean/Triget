import { Checkbox, FormControlLabel } from "@mui/material";
import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import styled from "styled-components";

interface RememberIdType {
  rememberId: boolean;
  setRememberId: Dispatch<SetStateAction<boolean>>;
}

const StyledRememberIdContainer = styled.div`
  width: 100%;
  margin: 5px 0;
`;

function RememberId({ rememberId, setRememberId }: RememberIdType) {
  const onChangeCheckBox = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean,
  ) => {
    setRememberId(checked);
  };

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
        checked={rememberId}
        onChange={onChangeCheckBox}
      />
    </StyledRememberIdContainer>
  );
}

export default RememberId;
