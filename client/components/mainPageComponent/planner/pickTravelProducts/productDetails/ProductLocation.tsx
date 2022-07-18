import styled from "styled-components";

interface ProductLocationType {
  productCity: string;
  productDistrict: string;
  productAddress: string;
}

const StyledProductLocation = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const StyledAddress = styled.span`
  font-size: 14px;
  &::before {
    content: "·";
    font-weight: 700;
    padding: 0 10px;
  }
`;

function ProductLocation({
  productCity,
  productDistrict,
  productAddress,
}: ProductLocationType) {
  return (
    <StyledProductLocation>
      {`${productCity}, ${productDistrict}`}
      <StyledAddress>{productAddress}</StyledAddress>
    </StyledProductLocation>
  );
}

export default ProductLocation;
