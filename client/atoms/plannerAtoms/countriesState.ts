import { atom } from "recoil";

const countriesState = atom<string>({
  key: "countriesState",
  default: "",
});

export default countriesState;
