import { Chip } from "@mui/material";
import keywordsToKorean from "modules/keywordModule/keywordsToKorean";
import styled from "styled-components";

interface ProductKeywordsType {
  keywords: string[];
}

const StyledProductKeywordsContainer = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

function ProductKeywords({ keywords }: ProductKeywordsType) {
  return (
    <StyledProductKeywordsContainer>
      {keywords.map((keyword: string) => (
        <Chip
          label={`#${keywordsToKorean(keyword)}`}
          sx={{
            height: "32px",
            marginRight: "5px",
            borderRadius: "16px",
            padding: "4px 0",
            backgroundColor: "#eee",
            fontSize: "15px",
            color: "#787878",
            lineHeight: 1.9,
            letterSpacing: "-0.38px",
            fontWeight: 500,
          }}
        />
      ))}
    </StyledProductKeywordsContainer>
  );
}

export default ProductKeywords;
