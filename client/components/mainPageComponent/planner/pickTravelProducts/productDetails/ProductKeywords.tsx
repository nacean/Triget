import { Chip } from "@mui/material";
import styled from "styled-components";

interface ProductKeywordsType {
  keywords: string[];
}

const keywordsToKorean = new Map();

keywordsToKorean.set("relaxing", "휴식");
keywordsToKorean.set("photo", "SNS");
keywordsToKorean.set("natural", "자연");
keywordsToKorean.set("active", "액티비티");
keywordsToKorean.set("local", "지역문화");
keywordsToKorean.set("cheap", "가성비");
keywordsToKorean.set("learn", "경험");

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
          label={`#${keywordsToKorean.get(keyword)}`}
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
