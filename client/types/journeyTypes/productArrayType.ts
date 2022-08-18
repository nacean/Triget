import productDataType from "types/productTypes/productDataType";

interface productArrayType {
  content: productDataType[];
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

export default productArrayType;
