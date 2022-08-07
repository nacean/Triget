import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Paper,
} from "@mui/material";
import React from "react";
import { SetterOrUpdater } from "recoil";
import styled from "styled-components";
import flightProductType from "types/flightTypes/flightProductType";
import FlightRoute from "./flightRouteComponents/FlightRoute";

interface FlightPanelType {
  value: number;
  index: number;
  productArray: flightProductType[];
  pickedFlight: flightProductType | null;
  setPickedFlight: SetterOrUpdater<flightProductType>;
}

const StyledPanel = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

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

function FlightPanel({
  value,
  index,
  productArray,
  pickedFlight,
  setPickedFlight,
}: FlightPanelType) {
  const onFlightBtnClick = (newFlight: flightProductType) => {
    if (pickedFlight === null) setPickedFlight(newFlight);
    else if (pickedFlight._id === newFlight._id) setPickedFlight(null);
    else setPickedFlight(newFlight);
  };

  const pickedOrNotFunc = (newProduct_id: number): boolean => {
    if (pickedFlight === null) return false;
    if (pickedFlight._id === newProduct_id) {
      return true;
    }
    return false;
  };

  return (
    <StyledPanel
      role="tabpanel"
      hidden={value !== index}
      id={`flightPanel-${index}`}
      aria-labelledby={`productMenu-${index}`}
    >
      {value === index && (
        <List>
          {productArray.map((product: flightProductType) => (
            <Paper square sx={{ marginBottom: "10px" }}>
              <ListItem disablePadding>
                <ListItemButton
                  href={product.detail_url}
                  target="_blank"
                  rel="noreferrer"
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
                  {pickedOrNotFunc(product._id)
                    ? "상품 취소하기"
                    : "상품 선택하기"}
                </Button>
              </ListItem>
            </Paper>
          ))}
          <ListItem disablePadding sx={{ height: "50px" }} />
        </List>
      )}
    </StyledPanel>
  );
}

export default FlightPanel;
