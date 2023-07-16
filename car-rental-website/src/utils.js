import { mutateResponse as redirect } from "./utility"

export async function requireAuth() {
    const isLoggedIn = false
    
    if (!isLoggedIn) {
        throw redirect("/login")
    }
    return null
}