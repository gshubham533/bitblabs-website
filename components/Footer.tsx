import Link from 'next/link';
import { BOOKING_HASH, BOOKING_URL, BOOK_LABEL, contact, nav, projects } from '@/lib/content';
import { CANCELLATION_PATH, PRIVACY_PATH, SUPPORT_PATH, TERMS_PATH } from '@/lib/site';
import { Cta } from './Roll';

export function Footer() {
  return (
    <footer className="footer" data-theme="dark">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <p className="footer__big" data-s="para">
              Have a domain you know cold?{' '}
              <span>Bring it to a call. We’ll show you how we’d turn it into a product.</span>
            </p>
            <div className="footer__actions" data-s="fade">
              <Cta href={BOOKING_HASH} external={false}>
                {BOOK_LABEL}
              </Cta>
              <a className="footer__mail" href={contact.emailHref}>
                {contact.email}
              </a>
            </div>
          </div>
          <div className="footer__brand" data-s="up">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/mark.png" alt="" width={84} height={84} />
            <span>BitBLabs</span>
          </div>
        </div>

        <div className="footer__cols" data-s="stagger">
          <div>
            <h4>Studio</h4>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Work</h4>
            <ul>
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link href={`/work/${p.slug}`}>{p.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/insights/high-volume-hiring">Hiring case study</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={contact.emailHref}>{contact.email}</a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
              </li>
              <li>{contact.location}</li>
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {BOOK_LABEL}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href={SUPPORT_PATH}>Contact &amp; support</Link>
              </li>
              <li>
                <Link href={CANCELLATION_PATH}>Cancellation &amp; refunds</Link>
              </li>
              <li>
                <Link href={PRIVACY_PATH}>Privacy policy</Link>
              </li>
              <li>
                <Link href={TERMS_PATH}>Terms &amp; conditions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {contact.legalName}. All rights reserved.
          </span>
          <span>AI platforms · Web applications · Product design</span>
        </div>
      </div>
    </footer>
  );
}
