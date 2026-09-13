import Link from "next/link";
export default function PolicyCard({policy}){
    return (
        <article className="policy-card">
            <div className="policy-card-top">
                <span className="policy-number">
                    {policy.policyNo}
                </span>
                <span className={`status status-${policy.status.toLowerCase()}`}>
                    <span className="status.dot" />
                        {policy.status}
                </span>
            </div>
            <div className="policy-card-main">
                <p className="policy-type">{policy.type}</p>
                <h2>{policy.customer}</h2>
            </div>
            <div className="policy-card-bottom">
                <div>
                    <span className="meta-label">BASE PREMIUM</span>
                    <strong>
                        ₹{policy.basePremium.toLocaleString("en-IN")}
                    </strong>
                </div>
                <Link href={`/policies/${policy.policyNo}`}>
                View Policy <span>-</span>
                </Link>
            </div>  
        </article>
    )
}