import { atom } from "recoil";

const airportWeightState = atom<number>({
  key: "airportWeightState",
  default: 0,
});

export default airportWeightState;
