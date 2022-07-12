import { atom } from "recoil";

const budgetState = atom<number>({
  key: "budgetState",
  default: 0,
});

export default budgetState;
