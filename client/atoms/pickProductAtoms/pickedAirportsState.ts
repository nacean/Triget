import { atom } from "recoil";
import { productDataType } from "./productDataType";

const pickedAirportsState = atom<productDataType[]>({
  key: "pickedAirportsState",
  default: [],
});

export default pickedAirportsState;
