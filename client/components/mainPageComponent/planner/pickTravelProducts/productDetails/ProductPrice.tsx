import styled from "styled-components";

interface ProductPriceType {
  productPrice: number;
  currency_code: string;
}

const StyledProductPrice = styled.div`
  margin-top: 110px;
  font-size: 28px;
  font-weight: 700;
`;

function ProductPrice({ productPrice, currency_code }: ProductPriceType) {
  return (
    <StyledProductPrice>{`${productPrice} ${currency_code}`}</StyledProductPrice>
  );
}

export default ProductPrice;
