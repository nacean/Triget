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
  width: 992px;
  overflow: scroll;
  background-color: #ebebeb;
  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
`;

const StyledProductPaper = styled(Paper)`
  position: relative;
  width: 992px;
  height: 248px;
  margin-bottom: 22px;
  border-radius: 20px;
  box-shadow: 0 1px 27px 0 rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 0 1px 27px 0 rgba(0, 0, 0, 0.08);
`;

const StyledProductInfoContainer = styled.div`
  height: 248px;
  padding: 18px 24px 18px 24px;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;

const StyledImage = styled.div`
  width: 280px;
  height: 100%;
`;

const StyledLeftProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledRightProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
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
          {showingProducts.map((product: productDataType) => {
            return (
              <StyledProductPaper>
                <ListItemButton
                  href={product.detailUrl}
                  target="_blank"
                  rel="noreferrer"
                  sx={{ padding: 0 }}
                >
                  <StyledImage>
                    {product.thumbnail ? (
                      <Image
                        src={product.thumbnail}
                        alt="Product Thumbnail"
                        width={280}
                        height={248}
                        style={{ borderRadius: 20 }}
                      />
                    ) : (
                      <Empty
                        description="No Image"
                        imageStyle={{ width: "100%", height: "100%" }}
                      />
                    )}
                  </StyledImage>
                  <StyledProductInfoContainer>
                    <StyledLeftProductContainer>
                      <ProductName productName={product.name} />
                      <ProductReviewRate reviewRate={product.rating} />
                      <ProductLocation
                        productCity={product.city}
                        productDistrict={product.state}
                        productAddress={product.address}
                      />
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
                  </StyledProductInfoContainer>
                </ListItemButton>
                <ProductPickBtn
                  product={product}
                  setPickedProducts={setPickedProducts}
                  pickOrNot={isInPickedArray(product.id)}
                />
              </StyledProductPaper>
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
