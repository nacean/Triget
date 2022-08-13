import flightProductType from "types/flightTypes/flightProductType";
import {
  accommodationsDataType,
  attractionsDataType,
  restaurantsDataType,
} from "types/productTypes/productDataType";

interface productArrayType {
  content:
    | flightProductType[]
    | accommodationsDataType[]
    | restaurantsDataType[]
    | attractionsDataType[];
  last: boolean;
  numberOfElements: number;
  empty: boolean;
}

export default productArrayType;
