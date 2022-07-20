import { atom } from "recoil";
import { productDataType } from "./productDataType";

const pickedRestaurantsState = atom<productDataType[]>({
  key: "pickedRestaurantsState",
  default: [],
});

export default pickedRestaurantsState;
