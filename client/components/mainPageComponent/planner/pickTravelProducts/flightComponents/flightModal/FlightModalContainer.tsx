import { Button, Dialog, DialogActions } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import flightProductType from "types/flightTypes/flightProductType";
import FlightModalFlightInfo from "./FlightModalFlightInfo";

interface FlightModalContainerType {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  product: flightProductType;
}

function FlightModalContainer({
  openModal,
  setOpenModal,
  product,
}: FlightModalContainerType) {
  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Dialog open={openModal} onClose={onCloseModal} maxWidth="md" fullWidth>
      <FlightModalFlightInfo pathName="출발" flightLeg={product.legs[0]} />
      <FlightModalFlightInfo pathName="도착" flightLeg={product.legs[1]} />
      <DialogActions>
        <Button onClick={onCloseModal}>닫기</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FlightModalContainer;
