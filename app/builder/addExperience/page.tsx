import { isLoggedIn } from "@/lib/supabase/login/getUserDetails.server";
import AddProjectPage from "./AddProjectPage";
import AddProjectPageLoggedOut from "./AddProjectPageLoggedOut";

export default async function builder() {
    if (await isLoggedIn()) {
        return <AddProjectPage/>
    }
    else {
        return <AddProjectPageLoggedOut/>
    }
}