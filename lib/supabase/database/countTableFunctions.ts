import { createClient } from "../server";

export async function addUserCountTable(userId: string) {
  const supabase = await createClient()

  const { error } = await supabase
  .from('user_row_count')
  .insert( { user_id: userId })

  if (error) {
    console.log(error)
    return false;
  }
  else {
    return true;
  }
}

export async function getUserLastExperienceId(userId: string) {
  const supabase = await createClient()

  const { data, error } = await supabase.rpc("increment_experience_id", {
    p_user_id: userId,
  });

  if (error) {
    await addUserCountTable(userId)
    return 0
  }

  return data
}

export async function getUserLastProjectId(userId: string) {
  const supabase = await createClient()

  const { data, error } = await supabase.rpc("increment_project_id", {
    p_user_id: userId,
  });

  if (data == null) {
    await addUserCountTable(userId)
      const { data, error } = await supabase.rpc("increment_project_id", {
      p_user_id: userId,
    });

    return 1
  }

  if (error) {
    return -1
  }

  return data
}

export async function getUserLastEditId(userId: string) {
  const supabase = await createClient()

  const { data, error } = await supabase
  .from('user_row_count')
  .select("last_edit_id")
  .eq("name", userId)

  if (error) {
    await addUserCountTable(userId)
    return 0
  }

  return data[0]["last_edit_id"]
}

export async function incrementUserEditId(userId: string) {
    const supabase = await createClient()

    let { error } = await supabase.rpc("increment_edit_id", {
        p_user_id: userId,
    });

    if (error) {
        console.log(error)
    }
}