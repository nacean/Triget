import { atom } from "recoil";
import { accommodationsDataType } from "types/productTypes/productDataType";

const pickedAccommodationsState = atom<accommodationsDataType[]>({
  key: "pickedAccommodationsState",
  default: [],
});

export default pickedAccommodationsState;
