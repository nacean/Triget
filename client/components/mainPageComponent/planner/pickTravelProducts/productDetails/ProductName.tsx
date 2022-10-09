import styled from "styled-components";

interface ProductNameType {
  productName: string;
}

const StyledProductName = styled.h2`
  max-width: 420px;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.19;
  letter-spacing: -0.6px;
  color: #1a1a1a;
`;

function ProductName({ productName }: ProductNameType) {
  return <StyledProductName>{productName}</StyledProductName>;
}

export default ProductName;
