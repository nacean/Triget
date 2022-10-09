import { Paper, ListItemButton, Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";
import flightProductType from "types/flightTypes/flightProductType";
import FlightModalContainer from "./flightModal/FlightModalContainer";
import FlightRoute from "./flightRouteComponents/FlightRoute";

interface FlightProductComponentType {
  pickedFlight: flightProductType | null;
  product: flightProductType;
  onFlightBtnClick: (product: flightProductType) => void;
}

const StyledFlightPaper = styled(Paper)`
  position: relative;
  height: 321px;
  margin-bottom: 22px;
  padding: 18px 18px 18px 18px;
  border-radius: 20px;
  box-shadow: 0 1px 27px 0 rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 0 1px 27px 0 rgba(0, 0, 0, 0.08);
`;

const StyledFlightRoutesContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledFlightPriceContainer = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 70px;
`;

const StyledCurrency = styled.span`
  font-size: 19px;
  font-weight: normal;
`;

const StyledRightContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
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

  const pickedOrNotFunc = (newProductid: string): boolean => {
    if (pickedFlight === null) return false;
    if (pickedFlight.id === newProductid) {
      return true;
    }
    return false;
  };

  const flightBtnText = () => {
    if (pickedFlight) {
      if (pickedOrNotFunc(product.id)) return "선택 취소하기";

      return "선택 변경하기";
    }

    return "상품 선택하기";
  };

  return (
    <StyledFlightPaper>
      <ListItemButton
        onClick={onModalClick}
        sx={{ width: "100%", height: "100%" }}
      >
        <StyledFlightRoutesContainer>
          <FlightRoute flightLeg={product.legs[0]} fontSize={22} />
          <FlightRoute flightLeg={product.legs[1]} fontSize={22} />
        </StyledFlightRoutesContainer>
        <StyledRightContainer>
          <StyledFlightPriceContainer>
            {`${product.price.toLocaleString()}`}
            <StyledCurrency>원</StyledCurrency>
          </StyledFlightPriceContainer>
        </StyledRightContainer>
      </ListItemButton>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          onFlightBtnClick(product);
        }}
        color={pickedOrNotFunc(product.id) ? "error" : "primary"}
        sx={{
          position: "absolute",
          bottom: 26,
          right: 34,
          backgroundColor: pickedOrNotFunc(product.id)
            ? theme.colors.cacelRed
            : theme.colors.mainblue,
          width: 160,
          borderRadius: "7.1px",
        }}
      >
        {flightBtnText()}
      </Button>
      <FlightModalContainer
        openModal={openModal}
        setOpenModal={setOpenModal}
        product={product}
      />
    </StyledFlightPaper>
  );
}

export default FlightProductComponent;
