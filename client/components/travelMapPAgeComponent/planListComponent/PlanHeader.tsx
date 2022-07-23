import travelKeywordState from "atoms/plannerAtoms/travelKeywordState";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const StyledPlanHeader = styled.h2`
  width: 100%;
  height: 100px;
  padding: 0 25px;
  background-color: #f8f9fb;
  font-size: 28px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

function PlanHeader() {
  const travelDescription = useRecoilValue(travelKeywordState);
  return <StyledPlanHeader>{`# ${travelDescription}`}</StyledPlanHeader>;
}

export default PlanHeader;
