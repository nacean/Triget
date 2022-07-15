import styled from "styled-components";
import AirportForm from "./AirportForm";
import BudgetForm from "./BudgetForm";
import DurationForm from "./DurationForm";
import PeopleCntForm from "./PeopleCntForm";

const RestFormsContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 0;
`;

function RestBox() {
  return (
    <RestFormsContainer>
      <DurationForm />
      <PeopleCntForm />
      <BudgetForm />
      <AirportForm />
    </RestFormsContainer>
  );
}

export default RestBox;
