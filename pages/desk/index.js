import { getSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false
      }
    };
  }

  return {
    props: {
      session
    }
  };
}
export default function AdvisorDesk({ session }) {
  return (
    <div className="desk-page">

      <section className="desk-hero">
                <button
  type="button"
  className="desk-logout"
  onClick={() => signOut({ callbackUrl: "/auth/signin" })}
>
  Sign out ↗
</button>
        <div>
          <span className="page-kicker">PRIVATE WORKSPACE</span>

          <h1>
            Advisor
            <span>Desk.</span>
          </h1>

          <p>
            Your central workspace for policies, claims,
            and advisor operations.
          </p>
        </div>

        <div className="desk-status">
          <span className="desk-status-dot" />
          <span>SESSION ACTIVE</span>
        </div>
      </section>

      <section className="desk-welcome">
        <div>
          <span className="panel-label">
            GOOD TO SEE YOU
          </span>

          <h2>
            {session.user.name || "HDFC Advisor"}
          </h2>

          <p>{session.user.email}</p>
        </div>

        <div className="desk-mark">
          ADVISOR
          <br />
          /01
        </div>
      </section>

      <section className="desk-actions">
        <a href="/policies" className="desk-action desk-action-dark">
          <span className="action-number">01</span>

          <div>
            <span>POLICY PORTFOLIO</span>
            <strong>Browse policies</strong>
          </div>

          <span className="action-arrow">↗</span>
        </a>

        <a href="/claims" className="desk-action">
          <span className="action-number">02</span>

          <div>
            <span>CLAIMS OPERATIONS</span>
            <strong>Review claims</strong>
          </div>

          <span className="action-arrow">↗</span>
        </a>

        <a href="/claims/new" className="desk-action desk-action-accent">
          <span className="action-number">03</span>

          <div>
            <span>NEW REQUEST</span>
            <strong>File a claim</strong>
          </div>

          <span className="action-arrow">↗</span>
        </a>
      </section>
    </div>
  );
}