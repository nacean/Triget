import {
  Badge,
  Divider,
  IconButton,
  List,
  ListItem,
  Paper,
  SvgIconProps,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { SetterOrUpdater } from "recoil";
import styled from "styled-components";
import flightProductType from "types/flightTypes/flightProductType";
import FlightChipDetail from "./FlightChipDetail";

interface PickedProductsChipsType {
  productKind: string;
  pickedFlight: flightProductType | null;
  setPickedFlight: SetterOrUpdater<flightProductType>;
  icon: React.ReactElement<SvgIconProps>;
}

const StyledChipsContainer = styled.div`
  width: 100%;
  min-height: 50px;
`;

function PickedFlightChips({
  productKind,
  pickedFlight,
  setPickedFlight,
  icon,
}: PickedProductsChipsType) {
  const onItemDelete = () => {
    setPickedFlight(null);
  };

  return (
    <StyledChipsContainer>
      <Divider sx={{ color: "#9e9e9e" }}>
        <Badge
          badgeContent={pickedFlight ? 1 : 0}
          sx={{ color: "#9e9e9e", marginRight: "3px" }}
        >
          {icon}
        </Badge>
        {productKind}
      </Divider>
      {pickedFlight !== null && (
        <List>
          <Paper variant="outlined" sx={{ marginBottom: "3px" }}>
            <ListItem
              disablePadding
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={onItemDelete}
                >
                  <DeleteIcon />
                </IconButton>
              }
              sx={{ borderTopColor: "#9e9e9e", display: "block" }}
            >
              <FlightChipDetail flightLeg={pickedFlight.legs[0]} />
              <FlightChipDetail flightLeg={pickedFlight.legs[1]} />
            </ListItem>
          </Paper>
        </List>
      )}
    </StyledChipsContainer>
  );
}

export default PickedFlightChips;
