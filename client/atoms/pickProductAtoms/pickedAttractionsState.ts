import { atom } from "recoil";
import productDataType from "types/productTypes/productDataType";

const pickedAttractionsState = atom<productDataType[]>({
  key: "pickedAttractionsState",
  default: [],
});

export default pickedAttractionsState;
