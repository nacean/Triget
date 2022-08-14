import { useState } from "react";
import { useRecoilValue } from "recoil";
import { useMutation } from "react-query";
import fetchTravelSpec from "modules/fetchTravelSpec";
import airportState from "atoms/plannerAtoms/airportState";
import travelKeywordState from "atoms/plannerAtoms/travelKeywordState";
import countriesState from "atoms/plannerAtoms/countriesState";
import startDateState from "atoms/plannerAtoms/startDateState";
import endDateState from "atoms/plannerAtoms/endDateState";
import peopleCntState from "atoms/plannerAtoms/peopleCntState";
import budgetState from "atoms/plannerAtoms/budgetState";
import activityWeightState from "atoms/plannerAtoms/weightAtoms/activityWeightState";
import airportWeightState from "atoms/plannerAtoms/weightAtoms/airportWeightState";
import hotelWeightState from "atoms/plannerAtoms/weightAtoms/hotelWeightState";
import foodWeightState from "atoms/plannerAtoms/weightAtoms/foodWeightState";
import styled from "styled-components";
import TravelSpecContainer from "./userTravelSpecs/TravelSpecContainer";
import ProductPickContainer from "./pickTravelProducts/ProductPickContainer";

const StyledPlanningContainer = styled.div`
  width: 100%;
  display: flexbox;
  overflow: visible;
`;

function PlanningBox() {
  // slide state
  const [slideMove, setSlideMove] = useState(false);
  const travelMutation = useMutation(fetchTravelSpec);

  const theme = useRecoilValue(travelKeywordState);
  const place = useRecoilValue(countriesState);
  const departureDate = useRecoilValue(startDateState);
  const arrivalDate = useRecoilValue(endDateState);
  const peopleNum = useRecoilValue(peopleCntState);
  const budget = useRecoilValue(budgetState);
  const departureAirport = useRecoilValue(airportState);

  // recoil weight values
  const flightsPrior = useRecoilValue(airportWeightState);
  const accommodationsPrior = useRecoilValue(hotelWeightState);
  const restaurantsPrior = useRecoilValue(foodWeightState);
  const attractionsPrior = useRecoilValue(activityWeightState);

  // post travel spec and get data

  const onSlideBtnClick = () => {
    setSlideMove(!slideMove);
  };

  const onSpecPostBtnClick = () => {
    travelMutation.mutate({
      place,
      theme,
      peopleNum,
      departureDate,
      arrivalDate,
      departureAirport,
      budget,
      flightsPrior,
      accommodationsPrior,
      restaurantsPrior,
      attractionsPrior,
    });

    setSlideMove(!slideMove);
  };

  return (
    <StyledPlanningContainer>
      <TravelSpecContainer
        slideMove={slideMove}
        onSpecPostBtnClick={onSpecPostBtnClick}
      />
      <ProductPickContainer
        slideMove={slideMove}
        onSlideBtnClick={onSlideBtnClick}
        travelMutation={travelMutation}
      />
    </StyledPlanningContainer>
  );
}

export default PlanningBox;
