import { atom } from "recoil";
import { productDataType } from "../../types/productDataType";

const pickedAttractionsState = atom<productDataType[]>({
  key: "pickedAttractionsState",
  default: [],
});

export default pickedAttractionsState;
