import { getProjectsFromTable } from "@/lib/supabase/database/projectTableFunctions";
import { getUserId } from "@/lib/supabase/login/getUserDetails.server";

export async function GET() {
    const userId = await getUserId()

    const resp = await getProjectsFromTable()

    return resp
}