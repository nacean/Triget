import { atom } from "recoil";
import { productDataType } from "../../types/productDataType";

const pickedAccommodationsState = atom<productDataType[]>({
  key: "pickedAccommodationsState",
  default: [],
});

export default pickedAccommodationsState;
