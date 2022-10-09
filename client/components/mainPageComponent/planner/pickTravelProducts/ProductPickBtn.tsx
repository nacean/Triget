import { Button } from "@mui/material";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import { theme } from "styles/theme";
import productDataType from "types/productTypes/productDataType";

interface ProductPickBtnType {
  product: productDataType;
  setPickedProducts: Dispatch<SetStateAction<productDataType[]>>;
  pickOrNot: boolean;
}

function ProductPickBtn({
  product,
  setPickedProducts,
  pickOrNot,
}: ProductPickBtnType) {
  const onProductBtnClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (pickOrNot) {
      setPickedProducts(productArray =>
        productArray.filter(productParam => product.id !== productParam.id),
      );
    } else {
      setPickedProducts(productArray => [...productArray, product]);
    }
  };

  return (
    <Button
      variant="contained"
      size="large"
      onClick={onProductBtnClick}
      color={pickOrNot ? "error" : "primary"}
      sx={{
        position: "absolute",
        zIndex: 6,
        right: 24,
        bottom: 18,
        width: 160,
        height: 40,
        borderRadius: "7.1px",
        backgroundColor: pickOrNot
          ? theme.colors.cacelRed
          : theme.colors.mainblue,
      }}
    >
      {pickOrNot ? "상품 취소하기" : "상품 선택하기"}
    </Button>
  );
}

export default ProductPickBtn;
