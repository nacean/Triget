import { atom } from "recoil";

const activityWeightState = atom<number>({
  key: "activityWeightState",
  default: 0,
});

export default activityWeightState;
