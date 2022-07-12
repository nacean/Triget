import { atom } from "recoil";

const peopleCntState = atom<number>({
  key: "peopleCntState",
  default: 1,
});

export default peopleCntState;
