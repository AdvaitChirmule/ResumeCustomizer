import { isLoggedIn } from "@/lib/supabase/getUserDetails.server";
import LoginPage from "./LoginPage";
import LoginPageLoggedOut from "./LoginPageLoggedOut";

export default async function login() {
    if (await isLoggedIn()) {
        return <LoginPage/>
    }
    else {
        return <LoginPageLoggedOut/>
    }
}