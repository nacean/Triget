import { Dayjs } from "dayjs";
import { atom } from "recoil";

const endDateState = atom<Dayjs | null>({
  key: "endDateState",
  default: null,
});

export default endDateState;
