import { atom } from "recoil";

const pickedAirportsState = atom<number[]>({
  key: "pickedAirportsState",
  default: [],
});

export default pickedAirportsState;
