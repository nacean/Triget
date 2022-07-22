import { atom } from "recoil";

const hotelWeightState = atom<number>({
  key: "hotelWeightState",
  default: 0,
});

export default hotelWeightState;
