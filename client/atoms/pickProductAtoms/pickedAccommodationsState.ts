import { atom } from "recoil";
import { productDataType } from "./productDataType";

const pickedAccommodationsState = atom<productDataType[]>({
  key: "pickedAccommodationsState",
  default: [],
});

export default pickedAccommodationsState;
