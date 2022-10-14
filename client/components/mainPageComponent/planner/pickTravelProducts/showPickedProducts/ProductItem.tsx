import { ListItem, ListItemText, IconButton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import productDataType from "types/productTypes/productDataType";
import DeleteIcon from "@mui/icons-material/Delete";
import { SetterOrUpdater } from "recoil";
import styled from "styled-components";

interface ProductItemType {
  product: productDataType;
  pickedProducts: productDataType[];
  setPickedProducts: SetterOrUpdater<productDataType[]>;
}

const StyledListItem = styled(ListItem)`
  margin-bottom: 10px;
`;

function ProductItem({
  pickedProducts,
  setPickedProducts,
  product,
}: ProductItemType) {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  const onItemDelete = (newProductid: string) => {
    setPickedProducts(
      pickedProducts.filter(productParam => productParam.id !== newProductid),
    );
  };

  const onMouseOverList = () => {
    setShowDeleteBtn(true);
  };

  const onMouseOutList = () => {
    setShowDeleteBtn(false);
  };

  return (
    <StyledListItem
      disablePadding
      onMouseOver={onMouseOverList}
      onMouseOut={onMouseOutList}
    >
      {product.thumbnail !== "" && (
        <Image
          src={product.thumbnail}
          alt="pickedProductImage"
          width={72}
          height={72}
          style={{ borderRadius: "4px" }}
        />
      )}
      <ListItemText
        primary={product.name}
        primaryTypographyProps={{
          width: 120,
          marginLeft: "14px",
          padding: 0,
          fontSize: "13px",
          fontWeight: 600,
          lineHeight: 1.5,
          letterSpacing: "-0.39px",
        }}
      />
      {showDeleteBtn && (
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            onItemDelete(product.id);
          }}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: 0,
            marginRight: 0,
          }}
        >
          <DeleteIcon sx={{ fontSize: 16 }} />
        </IconButton>
      )}
    </StyledListItem>
  );
}

export default ProductItem;
