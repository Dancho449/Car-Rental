import { mutateResponse as redirect } from "./utility"

export async function requireAuth() {
    const isLoggedIn = localStorage.getItem("loggedIn")
    
    if (!isLoggedIn) {
        throw redirect("/login?message=You must login first")
    }
    return null
}