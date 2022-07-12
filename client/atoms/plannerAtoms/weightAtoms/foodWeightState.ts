import { atom } from "recoil";

const foodWeightState = atom<number>({
  key: "foodWeightState",
  default: 50,
});

export default foodWeightState;
