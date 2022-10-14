import { atom } from "recoil";
import journeyDataType from "types/journeyTypes/journeyDataType";

const recommendProductState = atom<journeyDataType>({
  key: "recommendProductState",
  default: null,
});

export default recommendProductState;
