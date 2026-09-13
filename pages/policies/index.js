import fs from "fs";
import path from "path";
import PolicyCard from "../../components/PolicyCard";

export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "policies.json"
  );

  const fileContents = fs.readFileSync(
    filePath,
    "utf8"
  );

  const policies = JSON.parse(fileContents);

  return {
    props: {
      policies,
    },
    revalidate: 60,
  };
}

export default function Policies({ policies }) {
  return (
    <div className="policies-page">
      <header className="page-intro">
        <div>
          <span className="page-kicker">
            ADVISOR LIBRARY
          </span>

          <h1>Policy Catalogue</h1>
        </div>

        <p className="policy-count">
          {policies.length} policies
        </p>
      </header>

      <section className="policy-grid">
        {policies.map((policy) => (
          <PolicyCard
            key={policy.policyNo}
            policy={policy}
          />
        ))}
      </section>
    </div>
  );
}