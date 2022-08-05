import { atom } from "recoil";

const airportWeightState = atom<number>({
  key: "airportWeightState",
  default: 1,
});

export default airportWeightState;
