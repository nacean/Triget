import { atom } from "recoil";

const activityWeightState = atom<number>({
  key: "activityWeightState",
  default: 1,
});

export default activityWeightState;
