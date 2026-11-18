import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

// Display face: Stack Sans Headline (OFL), the studio's earlier headline font.
const stackHeadline = localFont({
  src: [
    { path: './fonts/stack-sans-headline-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/stack-sans-headline-600.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bitblabs.com'),
  title: 'BitBLabs — Digital Product Studio',
  description:
    'BitBLabs designs and builds exceptional digital products — AI platforms, web applications, and premium user experiences.',
  openGraph: {
    title: 'BitBLabs — Digital Product Studio',
    description:
      'BitBLabs designs and builds exceptional digital products — AI platforms, web applications, and premium user experiences.',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

// Runs before paint: hides reveal targets only when JS + motion will run, with a
// fail-safe that shows everything if the motion engine never reports ready.
const boot = `(function(){var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('reduced');return}d.classList.add('js');setTimeout(function(){if(!window.__motionReady)d.classList.remove('js')},4000)})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${stackHeadline.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
