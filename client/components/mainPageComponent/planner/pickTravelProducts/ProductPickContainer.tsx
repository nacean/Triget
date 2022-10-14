import { useEffect, useState } from "react";
import styled from "styled-components";
import { Slide, CircularProgress } from "@mui/material";
import { UseMutationResult } from "react-query";
import { useRecoilState } from "recoil";
import pickedFlightState from "atoms/pickProductAtoms/pickedFlightState";
import pickedAccommodationsState from "atoms/pickProductAtoms/pickedAccommodationsState";
import pickedRestaurantsState from "atoms/pickProductAtoms/pickedRestaurantsState";
import pickedAttractionsState from "atoms/pickProductAtoms/pickedAttractionsState";
import flightProductType from "types/flightTypes/flightProductType";
import journeyDataType from "types/journeyTypes/journeyDataType";
import productDataType from "types/productTypes/productDataType";
import ProductMenu from "./ProductMenu";
import ProductPanel from "./ProductPanel";
import PickedProductsContainer from "./showPickedProducts/PickedProductsContainer";
import FlightPanel from "./flightComponents/FlightPanel";

interface ProductPickContainerType {
  slideMove: boolean;
  onSlideBtnClick: () => void;
  travelMutation: UseMutationResult;
}

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

const LoadingParagraph = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

function ProductPickContainer({
  slideMove,
  onSlideBtnClick,
  travelMutation,
}: ProductPickContainerType) {
  const { data, isLoading, isError, error, isSuccess } = travelMutation;

  const [menuNum, setMenuNum] = useState(0);
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

  if (isError)
    return (
      <Slide direction="left" in={slideMove} mountOnEnter unmountOnExit>
        <StyledProductPickContainer className="cannot">
          {`There is Error. Error name : ${error}`}
        </StyledProductPickContainer>
      </Slide>
    );

  if (isLoading)
    return (
      <Slide direction="left" in={slideMove} mountOnEnter unmountOnExit>
        <StyledProductPickContainer
          style={{ width: "100%" }}
          className="cannot"
        >
          <CircularProgress size={100} sx={{ color: "#606060" }} />
          <LoadingParagraph>
            맞춤 상품을 가져오는 중입니다. 잠시만 기다려주세요.
          </LoadingParagraph>
        </StyledProductPickContainer>
      </Slide>
    );

  if (isSuccess) {
    const { flights, accommodations, restaurants, attractions } =
      data as journeyDataType;

    return (
      <Slide direction="left" in={slideMove} mountOnEnter unmountOnExit>
        <StyledProductListContainer>
          <ProductMenu menuNum={menuNum} setMenuNum={setMenuNum} />
          <StyledProductPickContainer>
            <FlightPanel
              value={menuNum}
              index={0}
              productArray={flights}
              pickedFlight={pickedFlight}
              setPickedFlight={setPickedFlight}
            />
            <ProductPanel
              value={menuNum}
              index={1}
              productArray={accommodations}
              pickedProducts={pickedAccommodations}
              setPickedProducts={setPickedAccommodations}
            />
            <ProductPanel
              value={menuNum}
              index={2}
              productArray={restaurants}
              pickedProducts={pickedRestaurants}
              setPickedProducts={setPickedRestaurants}
            />
            <ProductPanel
              value={menuNum}
              index={3}
              productArray={attractions}
              pickedProducts={pickedAttractions}
              setPickedProducts={setPickedAttractions}
            />
            <PickedProductsContainer onSlideBtnClick={onSlideBtnClick} />
          </StyledProductPickContainer>
        </StyledProductListContainer>
      </Slide>
    );
  }
}

export default ProductPickContainer;
