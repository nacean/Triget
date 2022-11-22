import { atom } from "recoil";

const airportState = atom<string>({
  key: "airportState",
  default: "",
});

export default airportState;
