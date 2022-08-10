import { List, ListItem } from "@mui/material";
import fetchTravelSpec from "modules/fetchTravelSpec";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { SetterOrUpdater } from "recoil";
import styled from "styled-components";
import flightProductType from "types/flightTypes/flightProductType";
import journeyDataType from "types/journeyDataType";
import LoadingBackdrop from "../LoadingBackDrop";
import FlightProductComponent from "./FlightProductComponent";

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

function FlightPanel({
  value,
  index,
  productArray,
  pickedFlight,
  setPickedFlight,
}: FlightPanelType) {
  const [showingFlights, setShowingFlights] =
    useState<flightProductType[]>(productArray);
  const [loading, setLoading] = useState<boolean>(false);

  const { ref: scrollRef } = useInView({
    threshold: 0.5,
    onChange: async (inView: boolean) => {
      if (inView) {
        setLoading(true);
        const newProducts: journeyDataType = await fetchTravelSpec();
        setShowingFlights([...showingFlights, ...newProducts.flights]);
        setLoading(false);
      }
    },
  });

  const onFlightBtnClick = (newFlight: flightProductType) => {
    if (pickedFlight === null) setPickedFlight(newFlight);
    else if (pickedFlight._id === newFlight._id) setPickedFlight(null);
    else setPickedFlight(newFlight);
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
          {showingFlights.map((product: flightProductType) => (
            <FlightProductComponent
              pickedFlight={pickedFlight}
              product={product}
              onFlightBtnClick={onFlightBtnClick}
            />
          ))}
          <ListItem ref={scrollRef} disablePadding sx={{ height: "50px" }} />
          <LoadingBackdrop loading={loading} />
        </List>
      )}
    </StyledPanel>
  );
}

export default FlightPanel;
