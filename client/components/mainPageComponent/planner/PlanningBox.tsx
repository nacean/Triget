import { Slide, Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
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
import SearchIcon from "@mui/icons-material/Search";
import KeyWordAndCountriesBox from "./keyWordAndCountries/KeyWordAndCountriesBox";
import BudgetWeightForm from "./budgetWeight/BudgetWeightForm";
import RestBox from "./restForms/RestBox";

const PlanningSlideContainer = styled.div`
  width: 100%;
`;

const PlanningContainer = styled.section`
  position: relative;
  width: 100%;
  height: 500px;
  padding: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PlanningBox() {
  //slide state
  const [slideMove, setSlideMove] = useState(false);

  const travelKeywordValue = useRecoilValue(travelKeywordState);
  const countryValue = useRecoilValue(countriesState);
  const startDateValue = useRecoilValue(startDateState);
  const endDateValue = useRecoilValue(endDateState);
  const peopleCntValue = useRecoilValue(peopleCntState);
  const budgetValue = useRecoilValue(budgetState);
  const airportValue = useRecoilValue(airportState);

  // recoil weight values
  const airportWeightValue = useRecoilValue(airportWeightState);
  const hotelWeightValue = useRecoilValue(hotelWeightState);
  const foodWeightValue = useRecoilValue(foodWeightState);
  const activityWeightValue = useRecoilValue(activityWeightState);

  const onBtnClick = () => {
    setSlideMove(!slideMove);
  };

  return (
    <PlanningSlideContainer>
      <Slide direction="right" in={!slideMove} mountOnEnter unmountOnExit>
        <PlanningContainer>
          <KeyWordAndCountriesBox />
          <RestBox />
          <BudgetWeightForm />
          <Button
            variant="contained"
            endIcon={<SearchIcon />}
            size="large"
            sx={{
              position: "absolute",
              bottom: 20,
              right: 20,
              backgroundColor: "#000000b7",
              borderRadius: "12px",
              ":hover": {
                backgroundColor: "#0000009f",
              },
            }}
            onClick={onBtnClick}
          >
            일정표 만들기
          </Button>
        </PlanningContainer>
      </Slide>
      <Slide direction="left" in={slideMove} mountOnEnter unmountOnExit>
        <PlanningContainer />
      </Slide>
    </PlanningSlideContainer>
  );
}

export default PlanningBox;
