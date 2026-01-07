"use client"

import { signOutUser } from "@/lib/supabase/auth"

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