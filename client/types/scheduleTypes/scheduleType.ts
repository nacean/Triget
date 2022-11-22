import productDataType from "types/productTypes/productDataType";

interface scheduleType {
  order: number;
  routeNum: number;
  vertices: productDataType[];
}

export default scheduleType;
