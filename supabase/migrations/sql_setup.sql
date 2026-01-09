create or replace function increment_project_id(p_user_id uuid)
returns int
language plpgsql
security definer
as $$
declare
  next_value int;
begin
  update user_row_count
  set last_project_id = last_project_id + 1
  where user_id = p_user_id
  returning last_project_id into next_value;

  return next_value;
end;
$$;

grant execute on function increment_project_id(uuid) to authenticated;


create or replace function increment_experience_id(p_user_id uuid)
returns int
language plpgsql
security definer
as $$
declare
  next_value int;
begin
  update user_row_count
  set last_experience_id = last_experience_id + 1
  where user_id = p_user_id
  returning last_experience_id into next_value;

  return next_value;
end;
$$;

grant execute on function increment_experience_id(uuid) to authenticated;

create or replace function increment_edit_id(p_user_id uuid)
returns int
language plpgsql
security definer
as $$
declare
  next_value int;
begin
  update user_row_count
  set last_edit_id = last_edit_id + 1
  where user_id = p_user_id
  returning last_edit_id into next_value;

  return next_value;
end;
$$;

grant execute on function increment_edit_id(uuid) to authenticated;
