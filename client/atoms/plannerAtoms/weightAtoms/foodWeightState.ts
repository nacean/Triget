import { atom } from "recoil";

const foodWeightState = atom<number>({
  key: "foodWeightState",
  default: 1,
});

export default foodWeightState;
