import fs from "fs"
import path from "path"
import Link from "next/link"

export async function getStaticProps() {
    const filePath = path.join(
        process.cwd(),
        "data",
        "policies.json"
    )
    const fileContents = fs.readFileSync(
        filePath,
        "utf8"
    )
    const policies = JSON.parse(fileContents)
    return {
        props: {
            policies,
        },
        revalidate: 60,
    }
}

export default function Policies({policies}){
    return (
        <div>
            <h1>Policy Catalogue</h1>
            <p> {policies.length} Policies</p>
            {
                policies.map((policy)=>{
                    return  <div key ={policy.policyNo}>
                        <Link href={`/policies/${policy.policyNo}`}>
                        {policy.policyNo}
                        </Link>
                    </div>  
                })
            }
        </div>
    )
}