import { DefaultTheme } from "styled-components";

const colors = {
  Main: "#1567FB",
  Background: "#F3F7FD",
  White: "#FFFFFF",
  Black: "#000000",
  TableLine: "#CBCBCB",
  HelpDiscription: "#AAAAAA",
  LoginInput: "#999999",
  Skyblue: "#A8D0E6",
  BottomLine: "#E0E7EE",
  ListCheck: "#EFF5FB",
  ListDetailBackground: "#F7F7F7",
  ListContent: "#4D4D4D",
};

const fonts = {
  Bold32: `900 2rem 'Pretendard'`,
  Bold28: `900 1.75rem 'Pretendard'`,
  Bold24: `900 1.5rem 'Pretendard'`,
  Bold20: `900 1.3rem 'Pretendard'`,
  Bold16: `900 1rem 'Pretendard'`,
  Bold12: `900 0.75rem 'Pretendard'`,
  Semibold32: `600 2rem 'Pretendard'`,
  Semibold28: `600 1.75rem 'Pretendard'`,
  Semibold24: `600 1.5rem 'Pretendard'`,
  Semibold20: `600 1.3rem 'Pretendard'`,
  Semibold16: `600 1rem 'Pretendard'`,
  Semibold12: `600 0.75rem 'Pretendard'`,
  Medium32: `500 2rem 'Pretendard'`,
  Medium28: `500 1.75rem 'Pretendard'`,
  Medium24: `500 1.5rem 'Pretendard'`,
  Medium20: `500 1.3rem 'Pretendard'`,
  Medium16: `500 1rem 'Pretendard'`,
  Medium14: `500 0.875rem 'Pretendard'`,
  Medium12: `500 0.75rem 'Pretendard'`,
  Regular32: `400 2rem 'Pretendard'`,
  Regular28: `400 1.75rem 'Pretendard'`,
  Regular24: `400 1.5rem 'Pretendard'`,
  Regular20: `400 1.3rem 'Pretendard'`,
  Regular16: `400 1rem 'Pretendard'`,
  Regular12: `400 0.75rem 'Pretendard'`,
  Light32: `300 2rem 'Pretendard'`,
  Light28: `300 1.75rem 'Pretendard'`,
  Light24: `300 1.5rem 'Pretendard'`,
  Light20: `300 1.3rem 'Pretendard'`,
  Light16: `300 1rem 'Pretendard'`,
  Light12: `300 0.75rem 'Pretendard'`,
};

export type ColorsTypes = typeof colors;
export type FontTypes = typeof fonts;

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
