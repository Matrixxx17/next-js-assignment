export default function AdvisorDocs({ slug }) {
  return (
    <div>
      <h1>Advisor Docs</h1>

      {slug && (
        <p>
          {slug.join("/")}
        </p>
      )}
    </div>
  );
}