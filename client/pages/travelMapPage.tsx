import pickedAccommodationsState from "atoms/pickProductAtoms/pickedAccommodationsState";
import pickedAirportsState from "atoms/pickProductAtoms/pickedAirportsState";
import pickedAttractionsState from "atoms/pickProductAtoms/pickedAttractionsState";
import pickedRestaurantsState from "atoms/pickProductAtoms/pickedRestaurantsState";
import MapContainer from "components/travelMapPAgeComponent/mapComponent/MapContainer";
import PlanContainer from "components/travelMapPAgeComponent/planListComponent/PlanContainer";
import fetchTravelPlanList from "modules/fetchTravelPlanList";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { productDataType } from "types/productDataType";
import { travelListType } from "types/travelListType";

const StyledTravelMapPage = styled.article`
  width: 100%;
  display: flex;
  height: 900px;
  margin-top: 50px;
`;

function travelMapPage() {
  //현재 고른 product 정보
  const [nowPickStep, setNowPickStep] = useState<travelListType | null>(null);

  const [pickedAirports, setPickedAirports] =
    useRecoilState<productDataType[]>(pickedAirportsState);
  const [pickedAccommodations, setPickedAccommodations] = useRecoilState<
    productDataType[]
  >(pickedAccommodationsState);
  const [pickedRestaurants, setPickedRestaurants] = useRecoilState<
    productDataType[]
  >(pickedRestaurantsState);
  const [pickedAttractions, setPickedAttractions] = useRecoilState<
    productDataType[]
  >(pickedAttractionsState);

  const { data, isSuccess, isLoading, isError, error } = useQuery(
    "travelList",
    fetchTravelPlanList,
  );

  useEffect(() => {
    window.scrollTo({ top: 2000, left: 0, behavior: "smooth" });
  });

  if (isSuccess) {
    const travelListArray = data as (travelListType | travelMovingTime)[];

    return (
      <StyledTravelMapPage>
        <MapContainer
          travelListArray={travelListArray}
          nowPickStep={nowPickStep}
          setNowPickStep={setNowPickStep}
        />
        <PlanContainer
          travelListArray={travelListArray}
          setNowPickStep={setNowPickStep}
        />
      </StyledTravelMapPage>
    );
  }
}

export default travelMapPage;
