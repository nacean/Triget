import styled from "styled-components";
import { theme } from "styles/theme";
import SavedPlan from "./SavedPlan";

const StyledSavedPlansContainer = styled.div`
  width: 100%;
`;

const StyledPlansHeader = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const StyledPlansCnt = styled.span`
  color: ${theme.colors.mainblue};
`;

function SavedPlansContainer() {
  return (
    <StyledSavedPlansContainer>
      <StyledPlansHeader>
        저장한 일정 <StyledPlansCnt>3</StyledPlansCnt>
      </StyledPlansHeader>
      <SavedPlan />
      <SavedPlan />
    </StyledSavedPlansContainer>
  );
}

export default SavedPlansContainer;
