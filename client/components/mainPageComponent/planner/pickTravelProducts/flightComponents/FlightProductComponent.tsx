import {
  Paper,
  ListItem,
  ListItemButton,
  Divider,
  Button,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import flightProductType from "types/flightTypes/flightProductType";
import FlightModalContainer from "./flightModal/FlightModalContainer";
import FlightRoute from "./flightRouteComponents/FlightRoute";

interface FlightProductComponentType {
  pickedFlight: flightProductType | null;
  product: flightProductType;
  onFlightBtnClick: (product: flightProductType) => void;
}

const StyledFlightRoutesContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledFlightPriceContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
`;

function FlightProductComponent({
  pickedFlight,
  product,
  onFlightBtnClick,
}: FlightProductComponentType) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onModalClick = () => {
    setOpenModal(true);
  };

  const pickedOrNotFunc = (newProduct_id: number): boolean => {
    if (pickedFlight === null) return false;
    if (pickedFlight._id === newProduct_id) {
      return true;
    }
    return false;
  };

  return (
    <Paper square sx={{ marginBottom: "10px" }}>
      <ListItem disablePadding>
        <ListItemButton
          onClick={onModalClick}
          sx={{
            height: 250,
            display: "flex",
          }}
        >
          <StyledFlightRoutesContainer>
            <FlightRoute flightLeg={product.legs[0]} />
            <FlightRoute flightLeg={product.legs[1]} />
          </StyledFlightRoutesContainer>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ backgroundColor: "#DDDCE5" }}
          />
          <StyledFlightPriceContainer>
            {`₩${product.price.toLocaleString()}`}
          </StyledFlightPriceContainer>
        </ListItemButton>
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
          size="large"
          onClick={() => {
            onFlightBtnClick(product);
          }}
          color={pickedOrNotFunc(product._id) ? "error" : "primary"}
        >
          {pickedOrNotFunc(product._id) ? "상품 취소하기" : "상품 선택하기"}
        </Button>
      </ListItem>
      <FlightModalContainer
        openModal={openModal}
        setOpenModal={setOpenModal}
        product={product}
      />
    </Paper>
  );
}

export default FlightProductComponent;
