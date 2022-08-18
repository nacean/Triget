import { atom } from "recoil";
import productDataType from "types/productTypes/productDataType";

const pickedRestaurantsState = atom<productDataType[]>({
  key: "pickedRestaurantsState",
  default: [],
});

export default pickedRestaurantsState;
