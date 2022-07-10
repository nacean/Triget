import styled from "styled-components";

const PlanningContainer = styled.section`
  width: 100%;
  height: 450px;
  padding: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.2);
`;

function PlanningPlace() {
  return <PlanningContainer>PlanningPlace</PlanningContainer>;
}

export default PlanningPlace;
