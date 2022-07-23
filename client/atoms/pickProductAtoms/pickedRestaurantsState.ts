import { atom } from "recoil";
import { productDataType } from "../../types/productDataType";

const pickedRestaurantsState = atom<productDataType[]>({
  key: "pickedRestaurantsState",
  default: [],
});

export default pickedRestaurantsState;
