import { atom } from "recoil";

const journeyIdState = atom<string>({
  key: "journeyIdState",
  default: null,
});

export default journeyIdState;
