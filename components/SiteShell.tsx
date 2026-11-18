import type { ReactNode } from 'react';
import { BookingModal } from './BookingModal';
import { Footer } from './Footer';
import { Header } from './Header';
import { Motion } from './Motion';
import { RollHover } from './RollHover';

/** Shared chrome for every route: motion engine, header, footer. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Motion />
      <RollHover />
      <Header />
      <main id="top">{children}</main>
      <Footer />
      <BookingModal />
    </>
  );
}
