import localFont from 'next/font/local'
import { Archivo, Barlow_Condensed, Space_Grotesk, Syne } from 'next/font/google'

/** Google Sans Flex — open-source brand sans (SIL OFL). Site chrome outside homepage. */
export const googleSansFlex = localFont({
  src: [
    {
      path: '../node_modules/@fontsource-variable/google-sans-flex/files/google-sans-flex-latin-wght-normal.woff2',
      style: 'normal',
    },
    {
      path: '../node_modules/@fontsource-variable/google-sans-flex/files/google-sans-flex-latin-ext-wght-normal.woff2',
      style: 'normal',
    },
  ],
  variable: '--font-google-sans-flex',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

/** Homepage body — ops documentation face for war-room reading. */
export const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

/** Homepage display / lane labels — condensed instrument caps. */
export const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-barlow-condensed',
})

/** Inner-route / showcase faces — do not import into `.bb-home`. */
export const syne = Syne({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-syne',
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-space-grotesk',
})
