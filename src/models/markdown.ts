import { SupabaseClient } from "@supabase/supabase-js";
import Markdown from "../services/Markdown";

type MarkdownTableResponse = {
  user_id: string;
  id: string;
  name: string;
  content: string;
  created_at: string;
  updated_at: string;
};

async function getAll(supabase: SupabaseClient) {
  const table = supabase.from("markdowns");

  const { data, error } = await table.select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data.map((mark: MarkdownTableResponse) => tableToMarkdown(mark));
}

async function getById(supabase: SupabaseClient, id: string) {
  const table = supabase.from("markdowns");

  const { data, error } = await table.select("*").filter("id", "eq", id);

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);

  if (data.length === 0) {
    throw new Error("No markdown was found for the specified ID");
  }

  return tableToMarkdown(data[0] as MarkdownTableResponse);
}

type CreateRequest = {
  markdown: Markdown;
};

async function create(supabase: SupabaseClient, { markdown }: CreateRequest) {
  const table = supabase.from("markdowns");

  validateId(markdown.id);
  validateName(markdown.name);

  const { data: user } = await supabase.auth.getUser();

  const { data, error } = await table.insert({
    user_id: user.user?.id,
    id: markdown.id,
    name: markdown.name,
    content: markdown?.content,
  });

  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}

type EditRequest = {
  markdown: Markdown;
};

async function update(supabase: SupabaseClient, { markdown }: EditRequest) {
  const table = supabase.from("markdowns");

  validateId(markdown.id);
  validateName(markdown.name);

  const { data, error } = await table
    .update({
      name: markdown.name,
      content: markdown?.content,
      updated_at: new Date().toISOString(),
    })
    .eq("id", markdown.id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

type RemoveRequest = {
  markdown: Markdown;
};

async function remove(supabase: SupabaseClient, { markdown }: RemoveRequest) {
  const table = supabase.from("markdowns");

  validateId(markdown.id);

  const { data, error } = await table.delete().eq("id", markdown.id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

function validateId(id: string) {
  if (!id) {
    throw new Error("Markdown id cannot be empty!");
  }
}

function validateName(name: string) {
  if (!name) {
    throw new Error("Markdown file name cannot be empty!");
  }
}

function tableToMarkdown(markdown: MarkdownTableResponse) {
  return new Markdown({
    userId: markdown.user_id,
    id: markdown.id,
    name: markdown.name,
    content: markdown.content,
    created: markdown.created_at,
    lastModified: markdown.updated_at,
  });
}

export { getAll, getById, create, update, remove };
