import { atom } from "recoil";
import productDataType from "types/productTypes/productDataType";

const pickedAccommodationsState = atom<productDataType[]>({
  key: "pickedAccommodationsState",
  default: [],
});

export default pickedAccommodationsState;
