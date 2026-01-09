import { getUserLastProjectId } from "@/lib/supabase/database/countTableFunctions"
import { addProjectToTable } from "@/lib/supabase/database/projectTableFunctions"
import { getUserId } from "@/lib/supabase/login/getUserDetails.server"

export async function POST(req: Request) {
    const body = await req.json()

    const userId = await getUserId()
    const lastProjectId = await getUserLastProjectId(userId)


    const resp = await addProjectToTable(body.title, body.nick, body.url, body.startDate, body.endDate, body.keywords, body.description, lastProjectId)

    return new Response(await resp.text())
}