import { atom } from "recoil";

const pickedRestaurantsState = atom<number[]>({
  key: "pickedRestaurantsState",
  default: [],
});

export default pickedRestaurantsState;
