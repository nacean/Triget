import { DefaultTheme } from "styled-components";

const colors = {
  mainblue: "#3090FF",
  cacelRed: "#ff555d",
  textwhite: "#F4F9FF",
  textBlack: "#191919",
  textlightgrey: "#a6b1bd",
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
