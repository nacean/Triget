import { ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import styled from "styled-components";
import { theme } from "styles/theme";
import productDataType from "types/productTypes/productDataType";

interface PlanStepType {
  isPicked: boolean;
  product: productDataType;
  index: number;
  onStepClick: (product: productDataType, index: number) => void;
}

const IndexSphere = styled.div`
  width: 32px;
  height: 32px;
  font-size: 16px;
  font-weight: 800;
  background-color: ${({ color }) => color};
  color: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 18px;
  margin-left: 18px;
`;

function PlanStep({ isPicked, product, index, onStepClick }: PlanStepType) {
  return (
    <ListItem disablePadding>
      <ListItemButton
        selected={isPicked}
        onClick={() => {
          onStepClick(product, index);
        }}
      >
        {/* <ListItemIcon
          sx={{
            fontSize: 16,
            fontWeight: "bold",
            lineHeight: 1.8,
            letterSpacing: "-0.44px",
            color: isPicked ? theme.colors.mainblue : "#1a1a1a",
          }}
        >
          {product.travelTime}
        </ListItemIcon> */}
        <IndexSphere color={isPicked ? theme.colors.mainblue : "#A4A5B6"}>
          {index}
        </IndexSphere>
        <ListItemText>
          <Paper
            variant="outlined"
            sx={{
              maxWidth: 560,
              minHeight: 40,
              display: "flex",
              alignItems: "center",
              borderRadius: "4px",
              border: "solid 1px #ebebeb",
              lineHeight: 2.13,
              letterSpacing: "-0.38px",
              color: "#1a1a1a",
              backgroundColor: "$fff",
              padding: "4px 71px 4px 16px",
              fontSize: 14,
            }}
          >
            {product.name}
          </Paper>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default PlanStep;
