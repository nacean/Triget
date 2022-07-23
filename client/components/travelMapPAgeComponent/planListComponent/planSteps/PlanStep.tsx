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
  background-color: black;
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
      >
        <ListItemIcon sx={{ fontSize: 18 }}>{product.travel_time}</ListItemIcon>
        <ListItemText>
          <Paper
            elevation={2}
            sx={{
              width: "20vw",
              height: "50px",
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <IndexSphere>{index}</IndexSphere>
            {product.product_name}
          </Paper>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default PlanStep;
