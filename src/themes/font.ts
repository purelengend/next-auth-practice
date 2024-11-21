import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const quella = localFont({
  display: 'swap',
  src: '../../public/fonts/Quella.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-quella',
});
