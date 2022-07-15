import { Stack } from "@mui/material";
import activityWeightState from "atoms/plannerAtoms/weightAtoms/activityWeightState";
import airportWeightState from "atoms/plannerAtoms/weightAtoms/airportWeightState";
import foodWeightState from "atoms/plannerAtoms/weightAtoms/foodWeightState";
import hotelWeightState from "atoms/plannerAtoms/weightAtoms/hotelWeightState";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import WeightTemplate from "./WeightTemplate";

const BudgetWeightFormContainer = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const BudgetWeightIntroduce = styled.h2`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
`;

const WeightBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

function BudgetWeightForm() {
  const [airportWeightValue, setAirportWeightValue] =
    useRecoilState(airportWeightState);
  const [hotelWeightValue, setHotelWeightValue] =
    useRecoilState(hotelWeightState);
  const [foodWeightValue, setFoodWeightValue] = useRecoilState(foodWeightState);
  const [activityWeightValue, setActivityWeightValue] =
    useRecoilState(activityWeightState);

  return (
    <BudgetWeightFormContainer>
      <BudgetWeightIntroduce>
        얼마정도 사용이 가능하신가요?
      </BudgetWeightIntroduce>
      <Stack spacing={3}>
        <WeightBox>
          <WeightTemplate
            subjectName="항공"
            weightValue={airportWeightValue}
            setWeightValue={setAirportWeightValue}
          />
          <WeightTemplate
            subjectName="숙박"
            weightValue={hotelWeightValue}
            setWeightValue={setHotelWeightValue}
          />
        </WeightBox>
        <WeightBox>
          <WeightTemplate
            subjectName="식당"
            weightValue={foodWeightValue}
            setWeightValue={setFoodWeightValue}
          />
          <WeightTemplate
            subjectName="액티비티"
            weightValue={activityWeightValue}
            setWeightValue={setActivityWeightValue}
          />
        </WeightBox>
      </Stack>
    </BudgetWeightFormContainer>
  );
}

export default BudgetWeightForm;
