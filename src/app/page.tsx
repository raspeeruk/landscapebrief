import Link from 'next/link'

const enquiryHref =
  'mailto:hq@rogergroup.xyz?subject=LandscapeBrief.com%20acquisition%20enquiry'

const markers = [
  { name: 'Signal', x: 23, y: 28, kind: 'rust' },
  { name: 'Market', x: 70, y: 19, kind: 'ink' },
  { name: 'Position', x: 62, y: 63, kind: 'rust' },
  { name: 'White space', x: 28, y: 72, kind: 'ink' },
]

export default function HomePage() {
  return (
    <main>
      <div className="page">
        <header className="masthead">
          <Link href="/" className="wordmark" aria-label="LandscapeBrief.com home">
            Landscape<span>Brief</span>
          </Link>
          <p className="available"><i /> Domain available</p>
        </header>

        <section className="hero" aria-labelledby="page-title">
          <div className="copy">
            <p className="kicker">A clear name for the view that matters</p>
            <h1 id="page-title">
              See the whole<br />
              <em>field.</em>
            </h1>
            <p className="intro">
              LandscapeBrief.com is available for acquisition — a precise .com
              for market maps, competitive intelligence, analyst reports or
              strategy software.
            </p>
            <a href={enquiryHref} className="cta">
              Make an acquisition enquiry <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="map-wrap" aria-hidden="true">
            <div className="axis y-axis"><span>Perspective</span></div>
            <div className="market-map">
              <p className="quadrant q1">EMERGING</p>
              <p className="quadrant q2">LEADING</p>
              <p className="quadrant q3">FOUNDATIONAL</p>
              <p className="quadrant q4">ESTABLISHED</p>
              {markers.map((marker) => (
                <div
                  key={marker.name}
                  className={`marker ${marker.kind}`}
                  style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                >
                  <b />
                  <span>{marker.name}</span>
                </div>
              ))}
            </div>
            <div className="axis x-axis"><span>Position</span></div>
          </div>
        </section>

        <section className="details" aria-label="Acquisition details">
          <article>
            <p className="index">01 / NAME</p>
            <h2>Broad enough to grow</h2>
            <p>
              Two category words with an immediate promise: turn a complex
              market into a brief people can act on.
            </p>
          </article>
          <article>
            <p className="index">02 / OFFER</p>
            <h2>Domain first</h2>
            <p>
              LandscapeBrief.com is registered until 28 March 2027. Source code
              may be considered only under a separate agreement and review.
            </p>
          </article>
          <article>
            <p className="index">03 / BOUNDARY</p>
            <h2>Data stays out</h2>
            <p>
              No account, upload, competitive-map, subscriber or analytics data
              is included. Only expressly agreed assets transfer.
            </p>
          </article>
        </section>

        <footer>
          <p>Former CompBrief product retired · 28 August 2026</p>
          <a href={enquiryHref}>hq@rogergroup.xyz</a>
        </footer>
      </div>
    </main>
  )
}
