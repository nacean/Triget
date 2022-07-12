import { Dayjs } from "dayjs";
import { atom } from "recoil";

const startDateState = atom<Dayjs | null>({
  key: "startDateState",
  default: null,
});

export default startDateState;
