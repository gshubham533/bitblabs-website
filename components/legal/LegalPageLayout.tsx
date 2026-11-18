import Link from 'next/link';
import type { ReactNode } from 'react';
import { SiteShell } from '@/components/SiteShell';
import type { LegalSection } from '@/lib/legal/types';
import { PRIVACY_PATH, TERMS_PATH } from '@/lib/site';

export interface LegalRelatedLink {
  href: string;
  label: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
  relatedPage: 'privacy' | 'terms';
  extraLinks?: LegalRelatedLink[];
}

/** Legal reading page in the site design. The legal text itself lives in lib/legal and is unchanged. */
export function LegalPageLayout({
  title,
  lastUpdated,
  intro,
  sections,
  relatedPage,
  extraLinks = [],
}: LegalPageLayoutProps) {
  const relatedHref = relatedPage === 'privacy' ? TERMS_PATH : PRIVACY_PATH;
  const relatedLabel = relatedPage === 'privacy' ? 'Terms & Conditions' : 'Privacy Policy';
  const relatedLinks = [{ href: relatedHref, label: relatedLabel }, ...extraLinks].filter(
    (l, i, all) => all.findIndex((x) => x.href === l.href) === i,
  );

  return (
    <SiteShell>
      <article className="doc wrap">
        <header className="doc__head">
          <p className="eyebrow">
            <span className="eyebrow__slash">/</span> Legal
          </p>
          <h1 className="display-lg">{title}</h1>
          <p className="doc__meta">Last updated: {lastUpdated}</p>
        </header>
        <div className="legal">
          <p className="legal__intro">{intro}</p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <div>{section.body}</div>
            </section>
          ))}
          <nav aria-label="Related pages" className="legal__related">
            See also:{' '}
            {relatedLinks.map((link, index) => (
              <span key={link.href}>
                {index > 0 ? ' · ' : null}
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
          </nav>
        </div>
      </article>
    </SiteShell>
  );
}
