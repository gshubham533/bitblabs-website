import Link from 'next/link';
import { SiteShell } from '@/components/SiteShell';
import { HeroScene } from '@/components/HeroScene';
import { Reel } from '@/components/Reel';
import { Work } from '@/components/Work';
import { StudioProducts } from '@/components/StudioProducts';
import { Voices } from '@/components/Voices';
import { Cta } from '@/components/Roll';
import { Title, Dot, Eyebrow } from '@/components/Title';
import {
  BOOKING_HASH,
  BOOK_LABEL,
  clientLogos,
  contact,
  engagement,
  featuredInsight,
  fitFor,
  phases,
  stats,
  systemsProof,
} from '@/lib/content';

export default function Home() {
  return (
    <SiteShell>
      {/* Hero: asymmetric, the mark lives in its own column */}
      <section className="hero wrap" aria-labelledby="hero-title">
        {/* WebGL layer spans the whole hero; the mark anchors to .hero__visual */}
        <HeroScene />
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow" data-s="fade" data-now="">
              <span className="eyebrow__slash">/</span> Digital product studio · Accepting new projects
            </p>
            <Title
              as="h1"
              id="hero-title"
              className="display-xl hero__title"
              label="Expertise, shipped."
              lines={[
                'Expertise,',
                <>
                  shipped
                  <Dot />
                </>,
              ]}
              now
              delay={0.2}
            />
            <p className="hero__lede body-md" data-s="para" data-now="" data-delay="0.5">
              We turn what founders know into products that run in production: an investment banker’s
              forecasting model, a farmer’s supply chain, an EU compliance workflow. One of them tripled its
              monthly order volume in six months; another answers calls in about 300 ms.
            </p>
            <div className="hero__ctas" data-s="fade" data-now="" data-delay="0.7">
              <Cta href="#work">See the work</Cta>
              <Cta href={BOOKING_HASH} external={false}>
                {BOOK_LABEL}
              </Cta>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true" />
        </div>
        <div className="logos" data-s="fade" data-now="" data-delay="0.9">
          <p className="logos__label">Built for</p>
          <ul className="logos__row">
            {clientLogos.map((l) => (
              <li key={l.alt}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={l.alt} style={{ height: l.h }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach: the product wall morphs into the headline */}
      <Reel />

      {/* Impact: static, attributed numbers */}
      <section className="impact wrap" id="impact" aria-labelledby="impact-title">
        <div className="split">
          <div className="split__aside">
            <Eyebrow>Impact</Eyebrow>
            <Title
              id="impact-title"
              className="display-lg"
              label="Proof, not promises."
              lines={[
                'Proof, not',
                <>
                  promises
                  <Dot />
                </>,
              ]}
            />
            <p className="split__note body-xs">Every number is from a product we built, and says which one.</p>
          </div>
          <dl className="stats" data-s="stagger">
            {stats.map((s) => (
              <div className="stats__item" key={s.label}>
                <dt>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </dt>
                <dd>{s.source}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="dark" data-theme="dark">
        {/* Systems */}
        <section className="systems wrap" aria-labelledby="systems-title">
          <div className="split">
            <div className="split__aside">
              <Title
                id="systems-title"
                className="display-lg"
                label="Systems, not integrations."
                lines={[
                  'Systems, not',
                  <>
                    integrations
                    <Dot />
                  </>,
                ]}
              />
              <p className="body-md split__lede" data-s="para">
                We don’t just call APIs, we build systems: architecture through deployment, by one team.
              </p>
            </div>
            <ul className="proof" data-s="stagger">
              {systemsProof.map((p) => (
                <li key={p.k}>
                  <h3>{p.k}</h3>
                  <p>{p.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Work */}
        <section className="work wrap" id="work" aria-labelledby="work-title">
          <div className="work__head">
            <div>
              <Eyebrow n="06">Work</Eyebrow>
              <Title
                id="work-title"
                className="display-lg"
                label="Work."
                lines={[
                  <>
                    Work<Dot />
                  </>,
                ]}
              />
            </div>
            <p className="work__intro body-md" data-s="para">
              Six products across sustainability, agriculture, voice AI, finance and education. Five are
              shipped; one is in development. Each one has a case study.
            </p>
          </div>
          <Work />
        </section>

        <StudioProducts />

        {/* Process: sticky split instead of a borrowed 3D scene */}
        <section className="process wrap" id="approach" aria-labelledby="approach-title">
          <div className="split split--sticky">
            <div className="split__aside">
              <Eyebrow>Approach</Eyebrow>
              <Title
                id="approach-title"
                className="display-lg"
                label="Four phases, one team."
                lines={[
                  'Four phases,',
                  <>
                    one team
                    <Dot />
                  </>,
                ]}
              />
              <p className="body-md split__lede" data-s="para">
                No generic playbooks. Design and engineering run in the same rhythm, so flows are validated
                with real interfaces and work ships in increments.
              </p>
            </div>
            <ol className="phases">
              {phases.map((p) => (
                <li className="phase" key={p.n} data-s="up">
                  <span className="phase__n">{p.n}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* One real, linked insight instead of a half-empty blog grid */}
        <section className="feature wrap" id="insight" aria-label="Featured case study">
          <Link className="feature__card" href={featuredInsight.href} data-s="up">
            <div className="feature__text">
              <p className="eyebrow">
                <span className="eyebrow__slash">/</span> {featuredInsight.tag}
              </p>
              <h2>{featuredInsight.title}</h2>
              <p className="feature__meta">
                {featuredInsight.meta} <span>Read it →</span>
              </p>
            </div>
            <dl className="feature__stats">
              {featuredInsight.points.map((p) => (
                <div key={p.k}>
                  <dt>{p.v}</dt>
                  <dd>{p.k}</dd>
                </div>
              ))}
            </dl>
          </Link>
        </section>
      </div>

      <Voices />

      {/* Studio: who we are, who it's for, how to reach us */}
      <section className="studio wrap" id="studio" aria-labelledby="studio-title">
        <div className="split">
          <div className="split__aside">
            <Eyebrow>Studio</Eyebrow>
            <Title
              id="studio-title"
              className="display-lg"
              label="One team, end to end."
              lines={[
                'One team,',
                <>
                  end to end
                  <Dot />
                </>,
              ]}
            />
            <p className="body-md split__lede" data-s="para">
              BitBLabs is a remote product studio, registered in Pune as {contact.legalName} and working
              with founders worldwide. The people who scope your product are the people who build it.
            </p>
          </div>
          <div className="studio__body">
            <div className="studio__block" data-s="up">
              <h3>Who it’s for</h3>
              <ul className="ticks">
                {fitFor.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <dl className="studio__facts" data-s="stagger">
              {engagement.map((e) => (
                <div key={e.k}>
                  <dt>{e.k}</dt>
                  <dd>{e.v}</dd>
                </div>
              ))}
            </dl>
            <div className="studio__contact" data-s="up">
              <h3>Start here</h3>
              <p>Book a call, or write to us if you’d rather send a brief first.</p>
              <div className="studio__actions">
                <Cta href={BOOKING_HASH} external={false}>
                  {BOOK_LABEL}
                </Cta>
                <a href={contact.emailHref} className="studio__mail">
                  {contact.email}
                </a>
                <a href={`tel:${contact.phone}`} className="studio__mail">
                  {contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
