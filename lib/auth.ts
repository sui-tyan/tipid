import { redirect } from "next/navigation";


export function auth() {
    redirect("/dashboard")
}