import { Backdrop, Button, Divider } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import airportState from "atoms/plannerAtoms/airportState";
import budgetState from "atoms/plannerAtoms/budgetState";
import countriesState from "atoms/plannerAtoms/countriesState";
import endDateState from "atoms/plannerAtoms/endDateState";
import peopleCntState from "atoms/plannerAtoms/peopleCntState";
import startDateState from "atoms/plannerAtoms/startDateState";
import travelKeywordState from "atoms/plannerAtoms/travelKeywordState";
import activityWeightState from "atoms/plannerAtoms/weightAtoms/activityWeightState";
import airportWeightState from "atoms/plannerAtoms/weightAtoms/airportWeightState";
import foodWeightState from "atoms/plannerAtoms/weightAtoms/foodWeightState";
import hotelWeightState from "atoms/plannerAtoms/weightAtoms/hotelWeightState";
import fetchTravelSpec from "modules/fetchTravelSpec";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import recommendProductState from "atoms/recommendProductAtoms/recommendProductState";
import { useState } from "react";
import travelSpecType from "types/travelSpecType/travelSpecType";
import RestBox from "./restForms/RestBox";
import KeyWordAndCountriesBox from "./keyWordAndCountries/KeyWordAndCountriesBox";
import BudgetWeightForm from "./budgetWeight/BudgetWeightForm";
import LoadingProduct from "./loadingProduct/LoadingProduct";

const StyledTravelSpecContainer = styled.section`
  position: relative;
  width: 992px;
  height: 1050px;
  margin: 0 auto;
  margin-bottom: 64px;
  padding: 40px 36px;
  border-radius: 20px;
  -webkit-box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function TravelSpecContainer() {
  const router = useRouter();

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

  // set recommendProducts from server
  const setRecommendProduct = useSetRecoilState(recommendProductState);

  // loading progress to get recommendProducts from server
  const [loading, setLoading] = useState<boolean>(false);

  const travelMutation = useMutation(
    (spec: travelSpecType) => fetchTravelSpec(spec),
    {
      onSuccess: data => {
        setRecommendProduct(data);
        router.push("/ProductPickPage");
        setLoading(false);
      },
    },
  );

  const shouldDisableBtn = () => {
    if (
      theme === "" ||
      place === "" ||
      departureAirport === "" ||
      departureDate === null ||
      arrivalDate === null ||
      peopleNum <= 0 ||
      budget <= 0
    )
      return true;
    return false;
  };

  const onSpecPostBtnClick = () => {
    setLoading(true);
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
  };

  return (
    <StyledTravelSpecContainer>
      <KeyWordAndCountriesBox />
      <RestBox />
      <Divider flexItem light sx={{ margin: "48px 0" }} />
      <BudgetWeightForm />
      <Button
        variant="contained"
        endIcon={<NavigateNextIcon />}
        size="large"
        sx={{
          position: "absolute",
          bottom: 20,
          right: 35,
          backgroundColor: "#424242",
          borderRadius: "12px",
          ":hover": {
            backgroundColor: "#616161",
          },
        }}
        disabled={shouldDisableBtn()}
        onClick={onSpecPostBtnClick}
      >
        맞춤상품 선택
      </Button>
      <Backdrop open={loading} sx={{ zIndex: 2000 }}>
        <LoadingProduct />
      </Backdrop>
    </StyledTravelSpecContainer>
  );
}

export default TravelSpecContainer;
