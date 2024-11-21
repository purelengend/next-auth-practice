const colorPalette = {
  white: {
    100: '#ffffff', // White
  },
  black: {
    100: '#232323', // Raisin Black
  },
  gray: {
    100: '#747474', // Sonic Silver
    150: '#605b5b', // Wenge
  },
  green: {
    100: '#c1dcdc', // Columbia Blue
    150: '#0a8570', // Light Green Turquoise
  },
  red: {
    100: '#e60000', // Coral Pink
  },
};

const colors = {
  text: {
    default: colorPalette.black[100],
    primary: colorPalette.white[100],
    secondary: colorPalette.gray[100],
    success: colorPalette.green[150],
    error: colorPalette.red[100],
  },

  background: {
    default: colorPalette.white[100],
    primary: colorPalette.black[100],
    secondary: colorPalette.green[100],
  },

  border: {
    default: colorPalette.black[100],
    primary: colorPalette.green[100],
    secondary: colorPalette.gray[100],
  },
};

export const backgroundImage = {
  'hero-image': "url('/images/hero-image.webp')",
  'contacts-bg-image': "url('/images/contacts-bg-image.webp')",
};

export { colorPalette, colors };
