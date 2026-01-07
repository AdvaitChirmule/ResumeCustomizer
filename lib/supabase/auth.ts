import { createClient } from "./client"

export async function register(email: string, password: string){
    const supabase = await createClient()

    const data = {
        email: email,
        password: password
    }

    const { error } = await supabase.auth.signUp(data)
    if (error) {
        console.log(error)
    }
}