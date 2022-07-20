import { atom } from "recoil";

const pickedAccommodationsState = atom<number[]>({
  key: "pickedAccommodationsState",
  default: [],
});

export default pickedAccommodationsState;
