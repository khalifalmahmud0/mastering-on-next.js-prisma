'use client'
import { useRouter } from "next/navigation"
let page = () => {
    let router = useRouter()
    let push = () => {
        router.push('/menu/a')
    }
    let replace = () => {
        router.replace('/menu/b')
    }
    let refresh = () => {
        router.refresh()
    }
    let prefetch = () => {
        router.prefetch('/use-router')
    }
    let back = () => {
        router.back()
    }
    let forward = () => {
        router.forward()
    }
    return (
        <>
            <hr />
            <button onClick={push}>Push ( Menu to a ) </button>
            <br />
            <button onClick={replace}>replace</button>
            <br />
            <button onClick={refresh}>refresh</button>
            <br />
            <button onClick={prefetch}>prefetch</button>
            <br />
            <button onClick={back}>back</button>
            <br />
            <button onClick={forward}>forward</button>
            <hr />
        </>
    )
}
export default page