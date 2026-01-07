import { createClient } from "./client"

export async function isLoggedIn() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
        return "true";
    }
    else {
        return false;
    }
}

export async function getUserId() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (user) {
        return user.id
    }
    else {
        return ""
    }
}