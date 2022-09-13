import { atom } from "recoil";
import userType from "types/userTypes/userType";

const userState = atom<userType>({
  key: "userState",
  default: null,
});

export default userState;
