import pickedAccommodationsState from "atoms/pickProductAtoms/pickedAccommodationsState";
import pickedAirportsState from "atoms/pickProductAtoms/pickedAirportsState";
import pickedAttractionsState from "atoms/pickProductAtoms/pickedAttractionsState";
import pickedRestaurantsState from "atoms/pickProductAtoms/pickedRestaurantsState";
import { productDataType } from "atoms/pickProductAtoms/productDataType";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import PickedProductsChips from "./PickedProductsChips";

const StyledPickedProductsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 128px;
`;

function PickedProductsContainer() {
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
      />
      <PickedProductsChips
        productKind="숙박"
        pickedProducts={pickedAccommodations}
        setPickedProducts={setPickedAccommodations}
      />
      <PickedProductsChips
        productKind="식당"
        pickedProducts={pickedRestaurants}
        setPickedProducts={setPickedRestaurants}
      />
      <PickedProductsChips
        productKind="액티비티"
        pickedProducts={pickedAttractions}
        setPickedProducts={setPickedAttractions}
      />
    </StyledPickedProductsContainer>
  );
}

export default PickedProductsContainer;
