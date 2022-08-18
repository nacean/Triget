import { List, ListItem, ListItemButton, Paper } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import fetchTravelSpec from "modules/fetchTravelSpec";
import journeyDataType from "types/journeyTypes/journeyDataType";
import productDataType from "types/productTypes/productDataType";
import productArrayType from "types/journeyTypes/productArrayType";
import { Empty } from "antd";
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
  productArray: productArrayType;
  pickedProducts: productDataType[];
  setPickedProducts: Dispatch<SetStateAction<productDataType[]>>;
}

const StyledPanel = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

const StyledLeftProductContainer = styled.div`
  width: 65%;
  height: 250px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
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

const StyledImage = styled.div`
  width: 13.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProductPanel({
  value,
  index,
  productArray,
  pickedProducts,
  setPickedProducts,
}: ProductPanelType) {
  const [showingProducts, setShowingProducts] = useState<productDataType[]>(
    productArray.content as productDataType[],
  );

  const [loading, setLoading] = useState<boolean>(false);

  const { ref: scrollRef } = useInView({
    threshold: 0.5,
    onChange: async (inView: boolean) => {
      if (inView) {
        setLoading(true);
        const newProducts: journeyDataType = await fetchTravelSpec();
        setShowingProducts([
          ...showingProducts,
          ...newProducts.attractions.content,
        ] as productDataType[]);
        setLoading(false);
      }
    },
  });

  const isInPickedArray = (newProductid: string): boolean => {
    return (
      pickedProducts.findIndex(
        productParam => newProductid === productParam.id,
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
          {showingProducts.map((product: T) => {
            return (
              <Paper square sx={{ marginBottom: "10px" }}>
                <ListItem disablePadding>
                  <ListItemButton
                    href={product.detailUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StyledImage>
                      {product.thumbnail ? (
                        <Image
                          src={product.thumbnail}
                          alt="Product Thumbnail"
                          width={250}
                          height={250}
                          style={{ borderRadius: 10 }}
                        />
                      ) : (
                        <Empty
                          description="No Image"
                          imageStyle={{ width: "100%", height: "30%" }}
                        />
                      )}
                    </StyledImage>
                    <StyledLeftProductContainer>
                      <StyledSeperateDiv>
                        <ProductName productName={product.name} />
                        <ProductReviewRate reviewRate={product.rating} />
                      </StyledSeperateDiv>
                      <StyledSeperateDiv>
                        <ProductLocation
                          productCity={product.city}
                          productDistrict={product.state}
                          productAddress={product.address}
                        />
                      </StyledSeperateDiv>
                      <ProductKeywords keywords={product.keywords} />
                    </StyledLeftProductContainer>
                    <StyledRightProductContainer>
                      <ProductPopularity
                        productPopularity={product.popularity}
                      />
                      {"price" in product && product.price !== 0 && (
                        <ProductPrice
                          productPrice={product.price}
                          currency_code={product.currencyCode}
                        />
                      )}
                    </StyledRightProductContainer>
                  </ListItemButton>
                  <ProductPickBtn
                    product={product}
                    setPickedProducts={setPickedProducts}
                    pickOrNot={isInPickedArray(product.id)}
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
