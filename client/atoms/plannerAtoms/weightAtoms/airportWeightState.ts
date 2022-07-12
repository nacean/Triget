import { atom } from "recoil";

const airportWeightState = atom<number>({
  key: "airportWeightState",
  default: 50,
});

export default airportWeightState;
