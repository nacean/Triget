import { Paper } from "@mui/material";
import styled from "styled-components";

interface ProductPopularityType {
  productPopularity: number;
}

const StyledProductPopularity = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
`;

function ProductPopularity({ productPopularity }: ProductPopularityType) {
  return (
    <StyledProductPopularity>
      유명도
      <Paper
        variant="outlined"
        sx={{
          width: "40px",
          height: "40px",
          color: "white",
          backgroundColor: "#0288d1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "10px",
          fontWeight: 700,
          fontSize: "18px",
        }}
      >
        {productPopularity}
      </Paper>
    </StyledProductPopularity>
  );
}

export default ProductPopularity;
