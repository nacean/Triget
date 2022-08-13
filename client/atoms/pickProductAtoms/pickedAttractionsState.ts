import { atom } from "recoil";
import { attractionsDataType } from "types/productTypes/productDataType";

const pickedAttractionsState = atom<attractionsDataType[]>({
  key: "pickedAttractionsState",
  default: [],
});

export default pickedAttractionsState;
