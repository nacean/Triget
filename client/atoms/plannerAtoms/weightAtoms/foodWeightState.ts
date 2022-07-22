import { atom } from "recoil";

const foodWeightState = atom<number>({
  key: "foodWeightState",
  default: 0,
});

export default foodWeightState;
