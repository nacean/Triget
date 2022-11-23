import { useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import pickedFlightState from "atoms/pickProductAtoms/pickedFlightState";
import pickedAccommodationsState from "atoms/pickProductAtoms/pickedAccommodationsState";
import pickedRestaurantsState from "atoms/pickProductAtoms/pickedRestaurantsState";
import pickedAttractionsState from "atoms/pickProductAtoms/pickedAttractionsState";
import flightProductType from "types/flightTypes/flightProductType";
import journeyDataType from "types/journeyTypes/journeyDataType";
import productDataType from "types/productTypes/productDataType";
import recommendProductState from "atoms/recommendProductAtoms/recommendProductState";
import journeyIdState from "atoms/recommendProductAtoms/journeyIdState";
import { useRouter } from "next/router";
import ProductMenu from "./ProductMenu";
import ProductPanel from "./ProductPanel";
import PickedProductsContainer from "./showPickedProducts/PickedProductsContainer";
import FlightPanel from "./flightComponents/FlightPanel";

const StyledProductListContainer = styled.section`
  width: 100%;
  position: relative;
  z-index: 1000;
  overflow: hidden;
  background-color: #ebebeb;
`;

const StyledProductPickContainer = styled.div`
  width: 100%;
  height: 1000px;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  justify-content: ${props =>
    props.className === "cannot" ? "center" : "none"};
`;

function ProductPickContainer() {
  const [menuNum, setMenuNum] = useState(0);
  const router = useRouter();
  // recommend Data from server
  const recommendProduct = useRecoilValue(recommendProductState);

  const [pickedFlight, setPickedFlight] =
    useRecoilState<flightProductType | null>(pickedFlightState);
  const [pickedAccommodations, setPickedAccommodations] = useRecoilState<
    productDataType[]
  >(pickedAccommodationsState);
  const [pickedRestaurants, setPickedRestaurants] = useRecoilState<
    productDataType[]
  >(pickedRestaurantsState);
  const [pickedAttractions, setPickedAttractions] = useRecoilState<
    productDataType[]
  >(pickedAttractionsState);

  const setJourney = useSetRecoilState(journeyIdState);

  if (recommendProduct) {
    const { journeyId, flights, accommodations, restaurants, attractions } =
      recommendProduct as journeyDataType;

    setJourney(journeyId);
    return (
      <StyledProductListContainer>
        <ProductMenu menuNum={menuNum} setMenuNum={setMenuNum} />
        <StyledProductPickContainer>
          <FlightPanel
            value={menuNum}
            index={0}
            productArray={flights}
            pickedFlight={pickedFlight}
            setPickedFlight={setPickedFlight}
            key="flights"
          />
          <ProductPanel
            value={menuNum}
            index={1}
            productArray={accommodations}
            pickedProducts={pickedAccommodations}
            setPickedProducts={setPickedAccommodations}
            productType="accommodations"
            key="accomodations"
          />
          <ProductPanel
            value={menuNum}
            index={2}
            productArray={restaurants}
            pickedProducts={pickedRestaurants}
            setPickedProducts={setPickedRestaurants}
            productType="restaurants"
            key="restaurants"
          />
          <ProductPanel
            value={menuNum}
            index={3}
            productArray={attractions}
            pickedProducts={pickedAttractions}
            setPickedProducts={setPickedAttractions}
            productType="attractions"
            key="attractions"
          />
          <PickedProductsContainer />
        </StyledProductPickContainer>
      </StyledProductListContainer>
    );
  }
  if (!recommendProduct && router.isReady) {
    router.push("/");
  }
  return <div>error</div>;
}

export default ProductPickContainer;
