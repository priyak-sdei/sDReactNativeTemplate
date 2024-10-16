// types.ts
export interface ColorPalette {
  primary: string;
  labelColor: string;
  subTitleColor: string;
  lightTextColor: string;
  primary_bg: string;
  white: string;
  black: string;
  blue: string;
  blueAlpha5: string;
  grey: string;
  darkGrey: string;
  btnColor: string;
  borderColor: string;

  blackAlpha4: string;
  blackAlpha6: string;
  blackAlpha07: string;
  gray_tree_txt: string;
  error: string;
  grayBackground: string;
  placeholder: string;
  maroon: string;
  gray_image: string;
  btnBackground: string;
  btnTextColor: string;
  malebackground: string;
  femalebackground: string;
  otherbackground: string;
  maleForeground: string;
  femaleForeground: string;
  red: string;
  skyBlue: string;
  redTxt: string;
  bottomSheetBorder: string;
  snackBarBackground: string;
  orange5: string;
  blue5: string;
  purple5: string;
  chocolate5: string;
  gray5: string;
  skyBlue6: string;
  skyBlue7: string;
  skyBlue6Alpha8: string;
  whiteAlpha3: string;
  disabledBlue: string;
  green: string;
  grayShade1: string;
  grayShade2: string;
  grayShade3: string;
  lightPurple: string;
  purple6: string;
  purple3: string;
  grayShade4: string;
  skyBlueAlpha4: string;
  secondary?: string;
  activeTab?: string;
  inactiveTab?: string;
}

export interface ThemeColorPalette {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
}

export interface ExtendedTheme {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  } & ColorPalette; // Merge with CustomColorPalette
}
