"use client"

import { loginUser } from "@/lib/supabase/login/auth";
import { isLoggedIn } from "@/lib/supabase/login/getUserDetails.client";
import { useState } from "react";

export default function LoginPageLoggedOut() {

    const [status, setStatus] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    return (
        <div className="grid grid-cols-2">
            <div className="p-3">
                <label htmlFor="email">Email ID</label>
                <input id="email" className="border rounded-md" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
            </div>
            <div className="p-3">
                <label htmlFor="password">Password</label>
                <input id="password" className="border rounded-md" value={passwordInput} onChange={(p) => setPasswordInput(p.target.value)} />
            </div>
            <div className="p-3">
                <button onClick={() => loginWithEmailPassword()}>Login</button>
            </div>
            <div className="p-3">
                {status}
            </div>
        </div>
    )

    async function loginWithEmailPassword() {
        if (await isLoggedIn()) {
            setStatus("You're already logged in")
        }
        else {
            const success = await loginUser(emailInput, passwordInput);
            if (success) {
                setStatus("Successfully logged in")
            }
            else {
                setStatus("Incorrect credentials")
            }
        }
    }
}