"use client"

import { signOutUser } from "@/lib/supabase/login/auth"

export default function account() {
    async function signOut(){
        await signOutUser()
    }
    
    return (
        <div>
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    )
}