import { Button } from "@mui/material";
import { productDataType } from "types/productDataType";
import { Dispatch, SetStateAction } from "react";

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
  const onProductBtnClick = () => {
    if (pickOrNot) {
      setPickedProducts(productArray =>
        productArray.filter(
          productParam => product.product_id !== productParam.product_id,
        ),
      );
    } else {
      setPickedProducts(productArray => [...productArray, product]);
    }
  };

  return (
    <Button
      variant="contained"
      sx={{
        position: "absolute",
        bottom: 10,
        right: 10,
      }}
      size="large"
      onClick={onProductBtnClick}
      color={pickOrNot ? "error" : "primary"}
    >
      {pickOrNot ? "상품 취소하기" : "상품 선택하기"}
    </Button>
  );
}

export default ProductPickBtn;
