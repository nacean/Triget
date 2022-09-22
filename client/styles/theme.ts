import { DefaultTheme } from "styled-components";

const colors = {
  mainblue: "#3090FF",
  textwhite: "#F4F9FF",
  textlightgrey: "#A6B1BD",
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
