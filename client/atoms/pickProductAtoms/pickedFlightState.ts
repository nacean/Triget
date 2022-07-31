import { atom } from "recoil";
import flightProductType from "types/flightTypes/flightProductType";

const pickedFlightState = atom<flightProductType | null>({
  key: "pickedFlightState",
  default: null,
});

export default pickedFlightState;
