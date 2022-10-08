import PlanningBox from "components/mainPageComponent/planner/PlanningBox";
import styled from "styled-components";

const StyledMainPage = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainAsk = styled.h1`
  width: 992px;
  margin-top: 64px;
  margin-bottom: 54px;
  font-size: 36px;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: -1px;
  color: #1a1a1a;
`;

function MainPage() {
  return (
    <StyledMainPage>
      <MainAsk>
        어떤 여행을
        <br style={{ margin: "20px 20px" }} />
        하고 싶으신가요?
      </MainAsk>
      <PlanningBox />
    </StyledMainPage>
  );
}

export default MainPage;
