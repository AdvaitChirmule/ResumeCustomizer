import { isLoggedIn } from "@/lib/supabase/getUserDetails.server";
import RegisterPage from "./RegisterPage";
import RegisterPageLoggedOut from "./RegisterPageLoggedOut";

export default async function register() {
    if (await isLoggedIn()) {
        return <RegisterPage/>
    }
    else {
        return <RegisterPageLoggedOut/>
    }
}