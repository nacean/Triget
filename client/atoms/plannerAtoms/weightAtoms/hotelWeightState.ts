import { atom } from "recoil";

const hotelWeightState = atom<number>({
  key: "hotelWeightState",
  default: 50,
});

export default hotelWeightState;
