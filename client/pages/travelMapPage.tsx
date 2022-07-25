import { Status, Wrapper } from "@googlemaps/react-wrapper";
import MapContainer from "components/travelMapPAgeComponent/mapComponent/MapContainer";
import PlanContainer from "components/travelMapPAgeComponent/planListComponent/PlanContainer";
import styled from "styled-components";

const StyledTravelMapPage = styled.article`
  width: 100%;
  display: flex;
  height: 900px;
  margin-top: 50px;
`;

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

function travelMapPage() {
  return (
    <Wrapper apiKey="AIzaSyD-0TIgNtpNFTKrgZEdvfGTN7Dy_LAh7Ww" render={render}>
      <StyledTravelMapPage>
        <MapContainer />
        <PlanContainer />
      </StyledTravelMapPage>
    </Wrapper>
  );
}

export default travelMapPage;
