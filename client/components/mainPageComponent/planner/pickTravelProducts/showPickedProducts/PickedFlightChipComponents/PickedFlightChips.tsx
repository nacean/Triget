import { Badge, IconButton, List, SvgIconProps } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { SetterOrUpdater } from "recoil";
import styled from "styled-components";
import flightProductType from "types/flightTypes/flightProductType";
import FlightChipDetail from "./FlightChipDetail";
import { useState } from "react";

interface PickedProductsChipsType {
  productKind: string;
  pickedFlight: flightProductType | null;
  setPickedFlight: SetterOrUpdater<flightProductType>;
  icon: React.ReactElement<SvgIconProps>;
}

const StyledChipsContainer = styled.div`
  width: 240px;
  height: 176px;
  padding: 11px 16px 19px 16px;
  border-radius: 8px;
  border: solid 1px #ebebeb;
  background-color: #fafafa;
`;

const StyledProductHeader = styled.div`
  color: #787878;
  font-size: 16px;
  font-weight: bold;
  line-height: 2;
  letter-spacing: -0.44px;
  margin-bottom: 5px;
`;

function PickedFlightChips({
  productKind,
  pickedFlight,
  setPickedFlight,
  icon,
}: PickedProductsChipsType) {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  const onItemDelete = () => {
    setPickedFlight(null);
  };

  const onMouseOverList = () => {
    setShowDeleteBtn(true);
  };

  const onMouseOutList = () => {
    setShowDeleteBtn(false);
  };

  return (
    <StyledChipsContainer>
      <StyledProductHeader>
        <Badge
          badgeContent={pickedFlight ? 1 : 0}
          sx={{ marginRight: "6px", marginBottom: "2px" }}
        >
          {icon}
        </Badge>
        {productKind}
      </StyledProductHeader>
      {pickedFlight !== null && (
        <List
          disablePadding
          onMouseOver={onMouseOverList}
          onMouseOut={onMouseOutList}
          sx={{
            height: "85%",
            overflowY: "scroll",
            overflowX: "hidden",
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#d8d8d8",
              height: "58px",
              borderRadius: "4px",
            },
          }}
        >
          <FlightChipDetail flightLeg={pickedFlight.legs[0]} />
          <FlightChipDetail flightLeg={pickedFlight.legs[1]} />
          {showDeleteBtn && (
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={onItemDelete}
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                padding: 0,
                marginRight: 0,
              }}
            >
              <DeleteIcon sx={{ fontSize: 16 }} />
            </IconButton>
          )}
        </List>
      )}
    </StyledChipsContainer>
  );
}

export default PickedFlightChips;
