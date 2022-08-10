import { Dialog, DialogTitle } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import flightProductType from "types/flightTypes/flightProductType";

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
    <Dialog open={openModal} onClose={onCloseModal}>
      <DialogTitle>wow</DialogTitle>
      <DialogTitle>wow</DialogTitle>
    </Dialog>
  );
}

export default FlightModalContainer;
