import styled from "styled-components";

interface ProductPriceType {
  productPrice: number;
  currency_code: string;
}

const StyledProductPrice = styled.div`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.02;
  letter-spacing: -0.7px;
  color: #1a1a1a;
  font-weight: 700;
  margin-bottom: 60px;
`;
const StyledCurrency = styled.span`
  font-size: 18px;
  font-weight: normal;
`;

function ProductPrice({ productPrice, currency_code }: ProductPriceType) {
  return (
    <StyledProductPrice>
      {`${productPrice.toLocaleString()}`}
      <StyledCurrency>{currency_code}</StyledCurrency>
    </StyledProductPrice>
  );
}

export default ProductPrice;
