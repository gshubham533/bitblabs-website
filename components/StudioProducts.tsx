import { Cta } from '@/components/Roll';
import { Title, Dot, Eyebrow } from '@/components/Title';
import { studioProducts } from '@/lib/content';

export function StudioProducts() {
  return (
    <section className="made wrap" id="products" aria-labelledby="made-title">
      <div className="made__head">
        <div>
          <Eyebrow>Studio products</Eyebrow>
          <Title
            id="made-title"
            className="display-lg"
            label="Made at BitBLabs."
            lines={[
              <>
                Made at BitBLabs
                <Dot />
              </>,
            ]}
          />
        </div>
        <p className="made__intro body-md" data-s="para">
          Products we design and ship for ourselves — the same craft as client work, pointed at
          problems we own end to end.
        </p>
      </div>

      <ul className="made__list">
        {studioProducts.map((p, i) => (
          <li className={`made__item${i % 2 === 1 ? ' made__item--flip' : ''}`} key={p.slug} data-s="up">
            <div className="made__copy">
              <p className="made__tag">{p.tagline}</p>
              <h3>{p.name}</h3>
              <p className="made__line">{p.line}</p>
              <Cta href={p.href}>Live page</Cta>
            </div>
            <a
              className="made__media"
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} live page`}
            >
              <div className="made__frame" style={{ background: p.bg }}>
                <div className="card__shot">
                  <div className="card__chrome" aria-hidden="true">
                    <span className="card__traffic" />
                    <span className="card__url">{p.host}</span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.shot} alt={p.alt} loading="lazy" />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
