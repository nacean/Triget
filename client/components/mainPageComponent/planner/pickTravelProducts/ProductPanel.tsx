import { List, ListItem, ListItemButton, Paper } from "@mui/material";
import { productDataType } from "types/productDataType";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import fetchTravelSpec from "modules/fetchTravelSpec";
import journeyDataType from "types/journeyDataType";
import ProductKeywords from "./productDetails/ProductKeywords";
import ProductLocation from "./productDetails/ProductLocation";
import ProductName from "./productDetails/ProductName";
import ProductPopularity from "./productDetails/ProductPopularity";
import ProductPrice from "./productDetails/ProductPrice";
import ProductReviewRate from "./productDetails/ProductReviewRate";
import ProductPickBtn from "./ProductPickBtn";
import LoadingBackdrop from "./LoadingBackDrop";

interface ProductPanelType {
  value: number;
  index: number;
  productArray: productDataType[];
  pickedProducts: productDataType[];
  setPickedProducts: Dispatch<SetStateAction<productDataType[]>>;
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

function ProductPanel({
  value,
  index,
  productArray,
  pickedProducts,
  setPickedProducts,
}: ProductPanelType) {
  const [showingProducts, setShowingProducts] =
    useState<productDataType[]>(productArray);

  const [loading, setLoading] = useState<boolean>(false);

  const { ref: scrollRef } = useInView({
    threshold: 0.5,
    onChange: async (inView: boolean) => {
      if (inView) {
        setLoading(true);
        const newProducts: journeyDataType = await fetchTravelSpec();
        setShowingProducts([...showingProducts, ...newProducts.attractions]);
        setLoading(false);
      }
    },
  });

  const isInPickedArray = (newProduct_id: number): boolean => {
    return (
      pickedProducts.findIndex(
        productParam => newProduct_id === productParam._id,
      ) !== -1
    );
  };

  return (
    <StyledPanel
      role="tabpanel"
      hidden={value !== index}
      id={`productPanel-${index}`}
      aria-labelledby={`productMenu-${index}`}
    >
      {value === index && (
        <List>
          {showingProducts.map((product: productDataType) => {
            return (
              <Paper square sx={{ marginBottom: "10px" }}>
                <ListItem disablePadding>
                  <ListItemButton
                    href={product.product_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={product.thumbnail}
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
                          productDistrict={product.state}
                          productAddress={product.address}
                        />
                      </StyledSeperateDiv>
                      <ProductKeywords keywords_array={product.keywords} />
                    </StyledLeftProductContainer>
                    <StyledRightProductContainer>
                      <ProductPopularity
                        productPopularity={product.popularity}
                      />
                      <ProductPrice
                        productPrice={product.price}
                        currency_code={product.currency_code}
                      />
                    </StyledRightProductContainer>
                  </ListItemButton>
                  <ProductPickBtn
                    product={product}
                    setPickedProducts={setPickedProducts}
                    pickOrNot={isInPickedArray(product._id)}
                  />
                </ListItem>
              </Paper>
            );
          })}
          <ListItem ref={scrollRef} disablePadding sx={{ height: "50px" }} />
          <LoadingBackdrop loading={loading} />
        </List>
      )}
    </StyledPanel>
  );
}

export default ProductPanel;
