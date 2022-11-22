import { Badge, List, SvgIconProps } from "@mui/material";
import { SetterOrUpdater } from "recoil";
import styled from "styled-components";
import productDataType from "types/productTypes/productDataType";
import ProductItem from "./ProductItem";

interface PickedProductsChipsType {
  productKind: string;
  pickedProducts: productDataType[];
  setPickedProducts: SetterOrUpdater<productDataType[]>;
  icon: React.ReactElement<SvgIconProps>;
}

const StyledChipsContainer = styled.div`
  width: 240px;
  height: 176px;
  padding: 11px 16px 19px 16px;
  border-radius: 8px;
  border: solid 1px #ebebeb;
  background-color: #fafafa;
`;

const StyledProductHeader = styled.div`
  color: #787878;
  font-size: 16px;
  font-weight: bold;
  line-height: 2;
  letter-spacing: -0.44px;
  margin-bottom: 5px;
`;

function PickedProductsChips({
  productKind,
  pickedProducts,
  setPickedProducts,
  icon,
}: PickedProductsChipsType) {
  return (
    <StyledChipsContainer>
      <StyledProductHeader>
        <Badge
          badgeContent={pickedProducts.length}
          sx={{ marginRight: "6px", marginBottom: "2px" }}
        >
          {icon}
        </Badge>
        {productKind}
      </StyledProductHeader>
      <List
        disablePadding
        sx={{
          height: "85%",
          overflowY: "scroll",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#d8d8d8",
            height: "58px",
            borderRadius: "4px",
          },
        }}
      >
        {pickedProducts.map(product => (
          <ProductItem
            pickedProducts={pickedProducts}
            setPickedProducts={setPickedProducts}
            product={product}
            key={product.id}
          />
        ))}
      </List>
    </StyledChipsContainer>
  );
}

export default PickedProductsChips;
