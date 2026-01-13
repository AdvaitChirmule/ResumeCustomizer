import { getUserId } from "../login/getUserDetails.server";
import { createClient } from "../server";
import { incrementUserEditId } from "./countTableFunctions";

export async function addProjectToTable(title: string, nick: string, url: string, startDate: string, endDate: string, keywords: string, description: string[], id: number) {
    const userId = await getUserId()

    const supabase = await createClient()

    let { error } = await supabase
    .from("user_project_table")
    .insert( { user_id: userId, title: title, nick: nick, url: url, start_date: startDate, end_date: endDate, keywords: keywords, description: description, project_id: id })

    if (error) {
        if (error.code == "23505") {
            return new Response ("You have already added this project before. Please add a different project or add a variant")
        }
        return new Response("Could Not Add Row")
    }

    await incrementUserEditId(userId)


    return new Response("Successfully Added Row")
}