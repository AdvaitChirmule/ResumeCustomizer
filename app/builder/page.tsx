import { isLoggedIn } from "@/lib/supabase/login/getUserDetails.server";
import BuilderPage from "./BuilderPage";
import BuilderPageLoggedOut from "./BuilderPageLoggedOut";

export default async function builder() {
    if (await isLoggedIn()) {
        return <BuilderPage/>
    }
    else {
        return <BuilderPageLoggedOut/>
    }
}