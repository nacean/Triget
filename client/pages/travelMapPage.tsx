import pickedAccommodationsState from "atoms/pickProductAtoms/pickedAccommodationsState";
import pickedFlightState from "atoms/pickProductAtoms/pickedFlightState";
import pickedAttractionsState from "atoms/pickProductAtoms/pickedAttractionsState";
import pickedRestaurantsState from "atoms/pickProductAtoms/pickedRestaurantsState";
import MapContainer from "components/travelMapPAgeComponent/mapComponent/MapContainer";
import PlanContainer from "components/travelMapPAgeComponent/planListComponent/PlanContainer";
import fetchTravelPlanList from "modules/fetchTravelPlanList";
import { useState } from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import flightProductType from "types/flightTypes/flightProductType";
import productDataType from "types/productTypes/productDataType";
import journeyIdState from "atoms/recommendProductAtoms/journeyIdState";
import scheduleContainerType from "types/scheduleTypes/scheduleContainerType";

const StyledTravelMapPage = styled.article`
  width: 100%;
  display: flex;
  height: 900px;
`;

function travelMapPage() {
  // 현재 고른 product 정보
  const [nowPickStep, setNowPickStep] = useState<productDataType | null>(null);
  const [nowPickIndex, setNowPickIndex] = useState<number>(-1);
  const [nowPickDay, setNowPickDay] = useState<number>(0);

  const pickedFlight = useRecoilValue<flightProductType | null>(
    pickedFlightState,
  );
  const pickedAccommodations = useRecoilValue<productDataType[]>(
    pickedAccommodationsState,
  );
  const pickedRestaurants = useRecoilValue<productDataType[]>(
    pickedRestaurantsState,
  );
  const pickedAttractions = useRecoilValue<productDataType[]>(
    pickedAttractionsState,
  );

  const journeyId: string = useRecoilValue(journeyIdState);

  const { data, isSuccess, isLoading } = useQuery("travelList", () =>
    fetchTravelPlanList(
      pickedFlight,
      pickedAccommodations,
      pickedRestaurants,
      pickedAttractions,
      journeyId,
    ),
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isSuccess) {
    const { schedules } = data as scheduleContainerType;
    const { vertices } = schedules[nowPickDay];
    return (
      <StyledTravelMapPage>
        <MapContainer
          travelListArray={vertices}
          nowPickStep={nowPickStep}
          setNowPickStep={setNowPickStep}
          setNowPickIndex={setNowPickIndex}
          dayCnt={schedules.length}
          nowPickDay={nowPickDay}
          setNowPickDay={setNowPickDay}
        />
        <PlanContainer
          travelListArray={vertices}
          setNowPickStep={setNowPickStep}
          nowPickIndex={nowPickIndex}
          setNowPickIndex={setNowPickIndex}
        />
      </StyledTravelMapPage>
    );
  }

  return <div>error!</div>;
}

export default travelMapPage;
