import { atom } from "recoil";

const activityWeightState = atom<number>({
  key: "activityWeightState",
  default: 50,
});

export default activityWeightState;
