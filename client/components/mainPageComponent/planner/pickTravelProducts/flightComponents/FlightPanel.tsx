import { Button, List, ListItem, ListItemButton, Paper } from "@mui/material";
import React from "react";
import { SetterOrUpdater } from "recoil";
import styled from "styled-components";
import flightProductType from "types/flightTypes/flightProductType";
import FlightRoute from "./FlightRoute";

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

const StyledFlightRouteContainer = styled.div`
  width: 100%;
  height: 250px;
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
                >
                  <StyledFlightRouteContainer>
                    <FlightRoute flightLeg={product.legs[0]} />
                    <FlightRoute flightLeg={product.legs[1]} />
                  </StyledFlightRouteContainer>
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
