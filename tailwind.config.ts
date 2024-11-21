import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

import { backgroundImage, colorPalette, colors } from './src/themes';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        quella: ['var(--font-quella)'],
      },
      colors: {
        ...colors,
        ...colorPalette,
      },
      backgroundImage,
    },
  },
  plugins: [nextui()],
};

export default config;
