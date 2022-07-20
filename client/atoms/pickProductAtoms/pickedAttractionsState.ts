import { atom } from "recoil";

const pickedAttractionsState = atom<number[]>({
  key: "pickedAttractionsState",
  default: [],
});

export default pickedAttractionsState;
