import { atom } from "recoil";
import { restaurantsDataType } from "types/productTypes/productDataType";

const pickedRestaurantsState = atom<restaurantsDataType[]>({
  key: "pickedRestaurantsState",
  default: [],
});

export default pickedRestaurantsState;
