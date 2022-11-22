import { Paper } from "@mui/material";
import styled from "styled-components";
import { theme } from "styles/theme";

interface ProductPopularityType {
  productPopularity: number;
}

const StyledProductPopularity = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  color: #1a1a1a;
`;
const StyledText = styled.div`
  width: 38px;
  font-size: 14px;
  font-weight: 500;
`;

function ProductPopularity({ productPopularity }: ProductPopularityType) {
  return (
    <StyledProductPopularity>
      <StyledText>유명도</StyledText>
      <Paper
        variant="outlined"
        sx={{
          width: "40px",
          height: "40px",
          color: "white",
          backgroundColor: theme.colors.mainblue,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "10px",
          fontWeight: 700,
          fontSize: "15px",
        }}
      >
        {productPopularity}
      </Paper>
    </StyledProductPopularity>
  );
}

export default ProductPopularity;
