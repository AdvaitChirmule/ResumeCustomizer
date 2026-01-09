import { getUserLastExperienceId } from "@/lib/supabase/database/countTableFunctions"
import { addExperienceToTable } from "@/lib/supabase/database/experienceTableFunctions"
import { getUserId } from "@/lib/supabase/login/getUserDetails.server"

export async function POST(req: Request) {
    const body = await req.json()

    const userId = await getUserId()
    const lastExperienceId = await getUserLastExperienceId(userId)


    const resp = await addExperienceToTable(body.title, body.nick, body.url, body.startDate, body.endDate, body.keywords, body.description, lastExperienceId)

    return new Response(await resp.text())
}