export const WIDTH = 64;
export const HEIGHT = 64;

export const PIXEL_SIZE = 32;

export const COLOR_CODES = {
  red: "#ff0000",
  blue: "#0000ff",
  green: "#00ff00",
  yellow: "#ffff00",
  white: "#ffffff",
  black: "#000000",
  gray: "#808080",
  orange: "#ffa500",
} as const;

export const COLORS = Object.values(COLOR_CODES);

export const KEYS = {
  tiles: "tiles",
} as const;

export const CHANNELS = {
  PICEL_UPDATE: "PIXEL_UPDATE",
};
