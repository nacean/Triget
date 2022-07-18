import { Button, List, ListItem, ListItemButton, Paper } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import ProductLocation from "./productDetails/ProductLocation";
import ProductName from "./productDetails/ProductName";
import ProductPopularity from "./productDetails/ProductPopularity";
import ProductPrice from "./productDetails/ProductPrice";
import ProductReviewRate from "./productDetails/ProductReviewRate";

interface ProductDataType {
  product_id: number;
  product_name: string;
  thumbnail_url: string;
  product_type: string;
  city: string;
  district: string;
  address: string;
  longitude: number;
  latitude: number;
  price: number;
  currency_code: string;
  review_score: number;
  popularity: number;
  product_detail_url: string;
  keywords_array: string[];
}

interface ProductPanelType {
  value: number;
  index: number;
  productArray: ProductDataType[];
}

const StyledPanel = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

const StyledLeftProductContainer = styled.div`
  width: 65%;
  margin-left: 20px;
  height: 250px;
`;
const StyledRightProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 18%;
  height: 250px;
`;

const StyledSeperateDiv = styled.div`
  width: 100%;
  padding-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

function ProductPanel({ value, index, productArray }: ProductPanelType) {
  return (
    <StyledPanel
      role="tabpanel"
      hidden={value !== index}
      id={`productPanel-${index}`}
      aria-labelledby={`productMenu-${index}`}
    >
      {value === index && (
        <List>
          {productArray.map((product: ProductDataType) => (
            <Paper square sx={{ marginBottom: "10px" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <Image
                    src={product.thumbnail_url}
                    alt="Product Thumbnail"
                    width={250}
                    height={250}
                  />
                  <StyledLeftProductContainer>
                    <StyledSeperateDiv>
                      <ProductName productName={product.product_name} />
                      <ProductReviewRate reviewRate={product.review_score} />
                    </StyledSeperateDiv>
                    <StyledSeperateDiv>
                      <ProductLocation
                        productCity={product.city}
                        productDistrict={product.district}
                        productAddress={product.address}
                      />
                    </StyledSeperateDiv>
                  </StyledLeftProductContainer>
                  <StyledRightProductContainer>
                    <ProductPopularity productPopularity={product.popularity} />
                    <ProductPrice
                      productPrice={product.price}
                      currency_code={product.currency_code}
                    />
                  </StyledRightProductContainer>
                </ListItemButton>
                <Button
                  variant="contained"
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                  }}
                  href={product.product_detail_url}
                  target="_blank"
                  rel="noreferrer"
                  size="large"
                >
                  상세페이지로 가기
                </Button>
              </ListItem>
            </Paper>
          ))}
        </List>
      )}
    </StyledPanel>
  );
}

export default ProductPanel;
