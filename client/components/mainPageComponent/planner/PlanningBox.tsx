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

  const journey_theme = useRecoilValue(travelKeywordState);
  const place = useRecoilValue(countriesState);
  const departure_date = useRecoilValue(startDateState);
  const arrival_date = useRecoilValue(endDateState);
  const people_num = useRecoilValue(peopleCntState);
  const budget = useRecoilValue(budgetState);
  const departure_airport = useRecoilValue(airportState);

  // recoil weight values
  const airport_prior = useRecoilValue(airportWeightState);
  const accommodation_prior = useRecoilValue(hotelWeightState);
  const restaurant_prior = useRecoilValue(foodWeightState);
  const activity_prior = useRecoilValue(activityWeightState);

  // post travel spec and get data

  const onSlideBtnClick = () => {
    setSlideMove(!slideMove);
  };

  const onSpecPostBtnClick = () => {
    travelMutation.mutate({
      place,
      people_num,
      departure_date,
      arrival_date,
      departure_airport,
      budget,
      journey_theme,
      airport_prior,
      accommodation_prior,
      restaurant_prior,
      activity_prior,
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
