import styled from "styled-components";
import AirportForm from "./AirportForm";
import BudgetForm from "./BudgetForm";
import DurationForm from "./DurationForm";
import PeopleCntForm from "./PeopleCntForm";

const RestFormsContainer = styled.div`
  width: 100%;
`;

const StyledPeopleAirportContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 40px;
`;

function RestBox() {
  return (
    <RestFormsContainer>
      <DurationForm />
      <StyledPeopleAirportContainer>
        <PeopleCntForm />
        <AirportForm />
      </StyledPeopleAirportContainer>
      <BudgetForm />
    </RestFormsContainer>
  );
}

export default RestBox;
