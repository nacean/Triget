import { Chip } from "@mui/material";
import styled from "styled-components";

interface ProductKeywordsType {
  keywords_array: string[];
}

const StyledProductKeywordsContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
`;

function ProductKeywords({ keywords_array }: ProductKeywordsType) {
  return (
    <StyledProductKeywordsContainer>
      {keywords_array.map((keyword: string) => (
        <Chip
          label={`#${keyword}`}
          sx={{
            height: "40px",
            marginRight: "5px",
            fontSize: "16px",
            fontWeight: 500,
          }}
        />
      ))}
    </StyledProductKeywordsContainer>
  );
}

export default ProductKeywords;
