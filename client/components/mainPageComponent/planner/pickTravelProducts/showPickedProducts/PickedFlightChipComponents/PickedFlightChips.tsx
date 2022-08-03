import {
  Badge,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  SvgIconProps,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { SetterOrUpdater } from "recoil";
import styled from "styled-components";
import Image from "next/image";
import flightProductType from "types/flightTypes/flightProductType";

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

const StyledFlightChip = styled.div`
  display: flex;
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
              <StyledFlightChip>
                <Image
                  src={pickedFlight.legs[0].operatings[0].logo_url}
                  alt="pickedProductImage"
                  width={50}
                  height={25}
                />
                <ListItemText
                  primary="test"
                  sx={{
                    width: "50%",
                    marginLeft: "10px",
                  }}
                />
              </StyledFlightChip>
              <div>
                <Image
                  src={pickedFlight.legs[0].operatings[0].logo_url}
                  alt="pickedProductImage"
                  width={50}
                  height={25}
                />
                <ListItemText
                  primary="test"
                  sx={{
                    width: "50%",
                    marginLeft: "10px",
                  }}
                />
              </div>
            </ListItem>
          </Paper>
        </List>
      )}
    </StyledChipsContainer>
  );
}

export default PickedFlightChips;
