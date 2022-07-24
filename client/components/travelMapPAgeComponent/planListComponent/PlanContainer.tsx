import pickedAccommodationsState from "atoms/pickProductAtoms/pickedAccommodationsState";
import pickedAirportsState from "atoms/pickProductAtoms/pickedAirportsState";
import pickedAttractionsState from "atoms/pickProductAtoms/pickedAttractionsState";
import pickedRestaurantsState from "atoms/pickProductAtoms/pickedRestaurantsState";
import fetchTravelPlanList from "modules/fetchTravelPlanList";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { productDataType } from "types/productDataType";
import { travelListType } from "types/travelListType";
import PlanHeader from "./PlanHeader";
import PlanStepContainer from "./planSteps/PlanStepContainer";
import RescheduleBtn from "./RescheduleBtn";

const StyledPlanContainer = styled.section`
  width: 35%;
  height: 100%;
  border: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
`;

function PlanContainer() {
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
  if (isSuccess) {
    const travelListArray = data as travelListType[];
    return (
      <StyledPlanContainer>
        <PlanHeader />
        <PlanStepContainer travelListArray={travelListArray} />
        <RescheduleBtn />
      </StyledPlanContainer>
    );
  }
}

export default PlanContainer;
