import pickedAccommodationsState from "atoms/pickProductAtoms/pickedAccommodationsState";
import pickedAirportsState from "atoms/pickProductAtoms/pickedAirportsState";
import pickedAttractionsState from "atoms/pickProductAtoms/pickedAttractionsState";
import pickedRestaurantsState from "atoms/pickProductAtoms/pickedRestaurantsState";
import { productDataType } from "atoms/pickProductAtoms/productDataType";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import styled from "styled-components";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PickedProductsChips from "./PickedProductsChips";

const StyledPickedProductsContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 128px;
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
  return (
    <StyledPickedProductsContainer>
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
