import fs from "fs"
import path from "path"
import {useRouter} from "next/router"

export async function getStaticPaths(){
    const filepath = path.join(
        process.cwd(),
        "data",
        "policies.json"
    )
    const fileContents = fs.readFileSync(
        filepath,
        "utf8"
    )
    const policies = JSON.parse(fileContents)
    const paths = policies.map((policy)=>({
        params: {
            id: policy.policyNo
        }
    }))

    return {
        paths,
        fallback : false
    }
}
export async function getStaticProps({params}){
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
    const policy = policies.find(
        (policy)=>policy.policyNo === params.id
    )
    if(!policy){
        return {
            notFound: true,
        }
    }
    return {
        props: {
            policy
        }
    }
}

export default function PolicyDetail({policy}){
    const router = useRouter()
    return (
        <div>
            <h1>Policy Detail</h1>
            <p>Policy Id: {router.query.id} </p>
            <p>Policy Number:{policy.policyNo} </p>
            <p>Type: {policy.type}</p>
            <p>Premium:{policy.basePremium} </p>
            <p>Status:{policy.status}</p>
        </div>
    )
}