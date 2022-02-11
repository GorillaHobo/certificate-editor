// canvas
const canvasHeight = 720;
const canvasWidth = 600;
const canvasBackgroundColor = "white";

// objects
const height = 40;
const width = 40;
const fill = "transparent";
const stroke = "black";
const strokeWidth = 2;
const top = canvasHeight / 2;
const left = canvasWidth / 2;
const radius = 20;

// text
const textFill = "black";
const textAlign = "center";
const fontFamily = "Cascadia Mono";
const fontSize = 18;
export const fonts = ["Cascadia Mono", "Open Sans"];

//defaults
const defaults = {
  noScaleCache: false,
};

export const canvas = {
  height: canvasHeight,
  width: canvasWidth,
  backgroundColor: canvasBackgroundColor,
  preserveObjectStacking: true,
};

export const circle = {
  ...defaults,
  left: left - radius,
  top: top - radius,
  radius,
  fill,
  stroke,
  strokeWidth,
};

export const rectangle = {
  left: left - width / 2,
  top: top - height / 2,
  height,
  width,
  fill,
  stroke,
  strokeWidth,
};

export const text = {
  left,
  top,
  fontFamily,
  fill: textFill,
  textAlign,
  fontSize,
};

export const placeholder = {
  ...text,
  ...defaults,
};
