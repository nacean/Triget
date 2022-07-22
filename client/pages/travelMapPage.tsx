import MapContainer from "components/travelMapPAgeComponent/mapComponent/MapContainer";
import PlanContainer from "components/travelMapPAgeComponent/planListComponent/PlanContainer";
import styled from "styled-components";

const StyledTravelMapPage = styled.article`
  width: 100%;
  display: flex;
  height: 900px;
  margin-top: 50px;
`;

function travelMapPage() {
  return (
    <StyledTravelMapPage>
      <MapContainer />
      <PlanContainer />
    </StyledTravelMapPage>
  );
}

export default travelMapPage;
