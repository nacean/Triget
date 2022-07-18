import styled from "styled-components";

interface ProductNameType {
  productName: string;
}

const StyledProductName = styled.h2`
  font-size: 26px;
  font-weight: 500;
`;

function ProductName({ productName }: ProductNameType) {
  return <StyledProductName>{productName}</StyledProductName>;
}

export default ProductName;
