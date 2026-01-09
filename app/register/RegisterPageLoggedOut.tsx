"use client"

import { registerUser } from "@/lib/supabase/login/auth";
import { isLoggedIn } from "@/lib/supabase/login/getUserDetails.client";
import { useState } from "react";

export default function RegisterPageLoggedOut() {
    const [status, setStatus] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [passwordInputRe, setPasswordInputRe] = useState("")

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
                <label htmlFor="passwordRe">Reenter Password</label>
                <input id="passwordRe" className="border rounded-md" value={passwordInputRe} onChange={(p) => setPasswordInputRe(p.target.value)} />
            </div>
            <div className="p-3">
                <button onClick={() => registerWithEmailPassword()}>Register</button>
            </div>
            <div className="p-3">
                {status}
            </div>
        </div>
    )

    async function registerWithEmailPassword() {
        if (await isLoggedIn()) {
            setStatus("You're already logged in")
        }
        else {
            if (passwordInput != passwordInputRe) {
                setStatus("Passwords do not match")
            }
            else {
                const success = await registerUser(emailInput, passwordInput);
                if (success) {
                    setStatus("Successfully registered")
                }
                else {
                    setStatus("Unexpected Error Occured")
                }
            }
        }
    }
}

