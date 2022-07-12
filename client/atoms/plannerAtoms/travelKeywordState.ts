import { atom } from "recoil";

const travelKeywordState = atom<string>({
  key: "travelKeywordState",
  default: "",
});

export default travelKeywordState;
