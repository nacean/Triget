import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Dispatch, SetStateAction } from "react";
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

interface PlanningBtnType {
  setChecked: Dispatch<SetStateAction<boolean>>;
}

function PlanningBtn({ setChecked }: PlanningBtnType) {
  const travelKeywordValue = useRecoilValue(travelKeywordState);
  const countryValue = useRecoilValue(countriesState);
  const startDateValue = useRecoilValue(startDateState);
  const endDateValue = useRecoilValue(endDateState);
  const peopleCntValue = useRecoilValue(peopleCntState);
  const budgetValue = useRecoilValue(budgetState);
  const airportValue = useRecoilValue(airportState);

  //recoil weight values
  const airportWeightValue = useRecoilValue(airportWeightState);
  const hotelWeightValue = useRecoilValue(hotelWeightState);
  const foodWeightValue = useRecoilValue(foodWeightState);
  const activityWeightValue = useRecoilValue(activityWeightState);

  const onBtnClick = () => {
    setChecked(value => !value);
  };

  return (
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
  );
}

export default PlanningBtn;
