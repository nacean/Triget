import styled from "styled-components";
import BudgetWeightForm from "./budgetWeight/BudgetWeightForm";
import KeyWordAndCountriesBox from "./keyWordAndCountries/KeyWordAndCountriesBox";
import PlanningBtn from "./planningBtn/PlanningBtn";
import RestBox from "./restForms/RestBox";

const PlanningContainer = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  padding: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PlanningBox() {
  return (
    <PlanningContainer>
      <KeyWordAndCountriesBox />
      <RestBox />
      <BudgetWeightForm />
      <PlanningBtn />
    </PlanningContainer>
  );
}

export default PlanningBox;
