import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import styled from "styled-components";
import productDataType from "types/productTypes/productDataType";

interface PlanStepType {
  isPicked: boolean;
  product: productDataType;
  index: number;
  onStepClick: (product: productDataType, index: number) => void;
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
    <ListItem sx={{ width: "100%" }} disablePadding>
      <ListItemButton
        selected={isPicked}
        onClick={() => {
          onStepClick(product, index);
        }}
        sx={{ width: "27vw" }}
      >
        <ListItemIcon
          sx={{ fontSize: 18, color: isPicked ? "#000" : "#A4A5B6" }}
        >
          {product.travelTime}
        </ListItemIcon>
        <ListItemText>
          <Paper
            elevation={2}
            sx={{
              width: "95%",
              height: "50px",
              display: "flex",
              alignItems: "center",
              marginLeft: "5%",
              color: isPicked ? "#000" : "#2C2E39",
            }}
          >
            <IndexSphere color={isPicked ? "#000" : "#A4A5B6"}>
              {index}
            </IndexSphere>
            {product.name}
          </Paper>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default PlanStep;
