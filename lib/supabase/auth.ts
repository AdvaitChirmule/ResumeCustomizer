import { createClient } from "./client"

export async function registerUser(email: string, password: string){
    const supabase = await createClient()

    const data = {
        email: email,
        password: password
    }

    const { error } = await supabase.auth.signUp(data)
    if (error) {
        console.log(error)
        return false;
    }

    return true;
}

export async function loginUser(email: string, password: string) {
    const supabase = await createClient()

    const data = {
        email: email,
        password: password
    }

    const { error } = await supabase.auth.signInWithPassword(data)
    if (error) {
        console.log(error)
        return false;
    }

    return true;
}

export async function signOutUser() {
    const supabase = await createClient()

    const { error } = await supabase.auth.signOut()

    if (error) { 
        console.log(error)
        return false;
    }

    return true;
}