import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styled from "styled-components";
import { theme } from "styles/theme";

const StyledPlanBtns = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: 31px;
`;

const StyledSaveBtn = styled(Button)`
  height: 56px;
  border-radius: 32px;
  background-color: ${theme.colors.mainblue};
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const StyledRescheduleBtn = styled(Button)`
  height: 56px;
  border-radius: 32px;
  background-color: #2c2e39;
  font-size: 18px;
  font-weight: 500;
  &:hover {
    background-color: #46495d;
  }
`;

function RescheduleBtn() {
  const router = useRouter();
  const onRescheduleBtnClick = () => {
    router.push("/ProductPickPage");
  };
  return (
    <StyledPlanBtns>
      <StyledSaveBtn
        fullWidth
        variant="contained"
        onClick={onRescheduleBtnClick}
      >
        일정표 저장하기
      </StyledSaveBtn>
      <StyledRescheduleBtn
        fullWidth
        variant="contained"
        onClick={onRescheduleBtnClick}
      >
        일정표 수정하기
      </StyledRescheduleBtn>
    </StyledPlanBtns>
  );
}

export default RescheduleBtn;
