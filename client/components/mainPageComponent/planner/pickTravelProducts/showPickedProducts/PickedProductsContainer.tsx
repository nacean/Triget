import pickedAccommodationsState from "atoms/pickProductAtoms/pickedAccommodationsState";
import pickedAirportsState from "atoms/pickProductAtoms/pickedAirportsState";
import pickedAttractionsState from "atoms/pickProductAtoms/pickedAttractionsState";
import pickedRestaurantsState from "atoms/pickProductAtoms/pickedRestaurantsState";
import { productDataType } from "types/productDataType";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PickedProductsChips from "./PickedProductsChips";

const StyledPickedProductsContainer = styled.div`
  width: 20%;
  height: 800px;
  margin-left: 0.5%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHead = styled.h2`
  position: relative;
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666666;
  font-size: 24px;
`;

function PickedProductsContainer() {
  useEffect(() => {
    window.scrollTo({ top: 1070, left: 0, behavior: "smooth" });
  });

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

  const onClickResetBtn = () => {
    setPickedAirports([]);
    setPickedAccommodations([]);
    setPickedRestaurants([]);
    setPickedAttractions([]);
  };

  return (
    <StyledPickedProductsContainer>
      <StyledHead>
        선택목록
        <Button
          color="warning"
          variant="text"
          sx={{ position: "absolute", right: 7 }}
          onClick={onClickResetBtn}
        >
          초기화
        </Button>
      </StyledHead>
      <PickedProductsChips
        productKind="항공"
        pickedProducts={pickedAirports}
        setPickedProducts={setPickedAirports}
        icon={<FlightIcon />}
      />
      <PickedProductsChips
        productKind="숙박"
        pickedProducts={pickedAccommodations}
        setPickedProducts={setPickedAccommodations}
        icon={<HotelIcon />}
      />
      <PickedProductsChips
        productKind="식당"
        pickedProducts={pickedRestaurants}
        setPickedProducts={setPickedRestaurants}
        icon={<RestaurantIcon />}
      />
      <PickedProductsChips
        productKind="액티비티"
        pickedProducts={pickedAttractions}
        setPickedProducts={setPickedAttractions}
        icon={<DirectionsRunIcon />}
      />
    </StyledPickedProductsContainer>
  );
}

export default PickedProductsContainer;
