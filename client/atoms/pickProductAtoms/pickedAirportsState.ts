import { atom } from "recoil";
import { productDataType } from "../../types/productDataType";

const pickedAirportsState = atom<productDataType[]>({
  key: "pickedAirportsState",
  default: [],
});

export default pickedAirportsState;
