import { atom } from "recoil";

const airportState = atom<string>({
  key: "airportState",
  default: "김포공항",
});

export default airportState;
