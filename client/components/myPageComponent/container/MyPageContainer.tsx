import React from "react";
import styled from "styled-components";
import SavedPlansContainer from "../savedPlans/SavedPlansContainer";
import UserProfile from "../userProfile/UserProfile";

const StyledMyPageContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MyPageContainer() {
  return (
    <StyledMyPageContainer>
      <UserProfile />
      <SavedPlansContainer />
    </StyledMyPageContainer>
  );
}

export default MyPageContainer;
