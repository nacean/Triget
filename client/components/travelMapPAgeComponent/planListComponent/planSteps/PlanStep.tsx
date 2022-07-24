import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import styled from "styled-components";
import { travelListType } from "types/travelListType";

interface PlanStepType {
  isPicked: boolean;
  product: travelListType;
  index: number;
  onStepClick: (product: travelListType, index: number) => void;
}

const IndexSphere = styled.div`
  width: 24px;
  height: 24px;
  font-size: 14px;
  background-color: ${({ color }) => color};
  color: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

function PlanStep({ isPicked, product, index, onStepClick }: PlanStepType) {
  return (
    <ListItem>
      <ListItemButton
        selected={isPicked}
        onClick={() => {
          onStepClick(product, index);
        }}
        sx={{
          "&.Mui-selected": {
            borderRadius: "10px",
          },
        }}
      >
        <ListItemIcon
          sx={{ fontSize: 18, color: isPicked ? "#000" : "#A4A5B6" }}
        >
          {product.travel_time}
        </ListItemIcon>
        <ListItemText>
          <Paper
            elevation={2}
            sx={{
              width: "20vw",
              height: "50px",
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
              color: isPicked ? "#000" : "#2C2E39",
            }}
          >
            <IndexSphere color={isPicked ? "#000" : "#A4A5B6"}>
              {index}
            </IndexSphere>
            {product.product_name}
          </Paper>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default PlanStep;
