import { atom } from "recoil";

const hotelWeightState = atom<number>({
  key: "hotelWeightState",
  default: 1,
});

export default hotelWeightState;
