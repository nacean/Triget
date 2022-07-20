import { atom } from "recoil";
import { productDataType } from "./productDataType";

const pickedAttractionsState = atom<productDataType[]>({
  key: "pickedAttractionsState",
  default: [],
});

export default pickedAttractionsState;
