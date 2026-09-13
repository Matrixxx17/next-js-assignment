import fs from "fs"
import path from "path"
export async function getStaticPaths(){
    return {
        paths: [
            {
                params: {
                    slug:["term","active"]
                }
            },
            {
                params: {
                    slug: ["ulip"]
                }
            }
        ],
        fallback:false
    }
}
export async function getStaticProps({ params }) {
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

  const type = params.slug[0];
  const status = params.slug[1];

  const filteredPolicies = policies.filter((policy) => {
    const typeMatches = policy.type.toLowerCase() === type;

    const statusMatches =
      !status || policy.status.toLowerCase() === status;

    return typeMatches && statusMatches;
  });

  return {
    props: {
      policies: filteredPolicies,
      slug: params.slug
    }
  };
}

export default function PolicyCategory({ policies, slug }) {
  return (
    <div>
      <h1>Policy Category</h1>

      <p>
        Category: {slug.join(" / ")}
      </p>

      <p>
        {policies.length} policies found
      </p>

      {policies.map((policy) => {
        return (
          <div key={policy.policyNo}>
            <p>{policy.policyNo}</p>
            <p>{policy.customerName}</p>
            <p>{policy.type}</p>
            <p>{policy.status}</p>
          </div>
        );
      })}
    </div>
  );
}