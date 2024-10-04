// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    "expo",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-native/all",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {},
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    "no-console": "warn",
    "react-native/no-unused-styles": "error",
    "react-native/no-inline-styles": "error",
    "react-native/split-platform-components": "error",
    "react-native/no-color-literals": "error",
    "react-native/no-raw-text": "off",
    "react-native/prefer-stylesheet-usage": "off",
    "react-native/no-single-element-style-arrays": "error",
    "react-native/sort-styles": "error",
    "react-native/rn-no-color-literals": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",

    eqeqeq: 2, //Enforces strict equality checks (=== and !==).
    "no-loop-func": 2, // Disallows function declarations within loops
    quotes: 0, // Enforces the use of single or double quotes consistently.,
    "react/prop-types": "off",
  },
};
