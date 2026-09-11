import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-kicker">
          <span className="pulse-dot" />
          ADVISOR WORKSPACE
        </div>

        <h1>
          Everything you need,
          <span>in one place.</span>
        </h1>

        <p className="hero-copy">
          A focused workspace for managing policies,
          claims, and your day-to-day advisor workflow.
        </p>

        <div className="hero-actions">
          <Link href="/policies" className="primary-action">
            Explore policies
            <span>↗</span>
          </Link>

          <Link href="/claims" className="secondary-action">
            View claims
          </Link>
        </div>
      </section>

      <section className="metrics">
        <article className="metric-card metric-large">
          <div className="metric-top">
            <span>01</span>
            <span>POLICY PORTFOLIO</span>
          </div>

          <strong>06</strong>

          <div className="metric-bottom">
            <span>Total policies</span>
            <Link href="/policies">View catalogue →</Link>
          </div>
        </article>

        <article className="metric-card">
          <div className="metric-top">
            <span>02</span>
            <span>CLAIMS</span>
          </div>

          <strong>04</strong>

          <div className="metric-bottom">
            <span>Recent claims</span>
            <Link href="/claims">Open desk →</Link>
          </div>
        </article>
      </section>

      <section className="welcome-panel">
        <div>
          <span className="panel-label">HDFC LIFE</span>

          <h2>
            Your advisor
            <br />
            workspace.
          </h2>
        </div>

        <p>
          Move from policy discovery to claim filing
          without losing context.
        </p>
      </section>
    </div>
  );
}