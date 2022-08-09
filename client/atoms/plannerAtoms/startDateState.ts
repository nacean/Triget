import { atom } from "recoil";

const startDateState = atom<string | null>({
  key: "startDateState",
  default: null,
});

export default startDateState;
