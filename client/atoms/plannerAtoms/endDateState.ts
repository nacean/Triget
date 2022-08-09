import { atom } from "recoil";

const endDateState = atom<string | null>({
  key: "endDateState",
  default: null,
});

export default endDateState;
