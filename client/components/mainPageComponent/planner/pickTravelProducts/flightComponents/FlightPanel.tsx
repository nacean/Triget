import { List, ListItem } from "@mui/material";
import journeyIdState from "atoms/recommendProductAtoms/journeyIdState";
import getExtraFlight from "modules/extraProduct.ts/getExtraFlight";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { SetterOrUpdater, useRecoilValue } from "recoil";
import styled from "styled-components";
import flightProductType from "types/flightTypes/flightProductType";
import flightArrayType from "types/journeyTypes/flightArrayType";
import LoadingBackdrop from "../LoadingBackDrop";
import FlightProductComponent from "./FlightProductComponent";

interface FlightPanelType {
  value: number;
  index: number;
  productArray: flightArrayType;
  pickedFlight: flightProductType | null;
  setPickedFlight: SetterOrUpdater<flightProductType>;
}

const StyledPanel = styled.div`
  width: 992px;
  overflow: scroll;
  background-color: #ebebeb;
  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
`;

function FlightPanel({
  value,
  index,
  productArray,
  pickedFlight,
  setPickedFlight,
}: FlightPanelType) {
  const [showingFlights, setShowingFlights] = useState<flightProductType[]>(
    productArray.content,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [isLast, setIsLast] = useState<boolean>(false);

  const journeyId: string = useRecoilValue(journeyIdState);

  const { ref: scrollRef } = useInView({
    threshold: 0.5,
    onChange: async (inView: boolean) => {
      if (inView && !isLast) {
        setLoading(true);
        const newFlights: flightArrayType = await getExtraFlight(
          journeyId,
          page,
        );
        setShowingFlights([
          ...showingFlights,
          ...newFlights.content,
        ] as flightProductType[]);

        setIsLast(newFlights.last);
        setPage(page + 1);
        setLoading(false);
      }
    },
  });

  const onFlightBtnClick = (newFlight: flightProductType) => {
    if (pickedFlight === null) setPickedFlight(newFlight);
    else if (pickedFlight.id === newFlight.id) setPickedFlight(null);
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
        <List sx={{ backgroundColor: "#ebebeb" }}>
          {showingFlights.map((product: flightProductType) => (
            <FlightProductComponent
              pickedFlight={pickedFlight}
              product={product}
              onFlightBtnClick={onFlightBtnClick}
              key={product.id}
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
