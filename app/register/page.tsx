import { isLoggedIn } from "@/lib/supabase/login/getUserDetails.server";
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
