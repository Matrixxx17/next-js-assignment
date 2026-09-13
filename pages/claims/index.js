import fs from "fs"
import path from "path"
export async function getServerSideProps() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "claims.json"
  );

  const fileContents = fs.readFileSync(
    filePath,
    "utf8"
  );

  const claims = JSON.parse(fileContents);

  return {
    props: {
      claims
    }
  };
}
export default function Claims({ claims }) {
  return (
    <div className="claims-page">
      <section className="claims-header">
        <div>
          <span className="page-kicker">CLAIMS OPERATIONS</span>

          <h1>
            Claims
            <span>Desk.</span>
          </h1>

          <p>
            Review submitted claims and track their current status.
          </p>
        </div>

        <div className="claims-count">
          <strong>{String(claims.length).padStart(2, "0")}</strong>
          <span>CLAIMS</span>
        </div>
      </section>

      <section className="claims-list">
        {claims.map((claim, index) => (
          <article className="claim-row" key={claim.claimId}>
            <div className="claim-index">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="claim-main">
              <div className="claim-heading">
                <h2>{claim.claimId}</h2>

                <span
                  className={`urgency-badge urgency-${claim.urgency.toLowerCase()}`}
                >
                  {claim.urgency}
                </span>
              </div>

              <p className="claim-customer">
                {claim.customerName}
              </p>

              <span className="claim-policy">
                {claim.policyNo}
              </span>
            </div>

            <div className="claim-amount">
              <span>CLAIM AMOUNT</span>
              <strong>
                ₹{claim.claimAmount.toLocaleString("en-IN")}
              </strong>
            </div>

            <div className="claim-status">
              <span>STATUS</span>

              <strong className={`status-${claim.status.toLowerCase()}`}>
                {claim.status}
              </strong>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}