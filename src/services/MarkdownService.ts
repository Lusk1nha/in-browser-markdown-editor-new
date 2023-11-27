import { SupabaseClient } from "@supabase/supabase-js";
import Markdown from "./Markdown";
import { useCallMessage } from "../hooks/useCallMessage";

class MarkdownService {
  private _supabaseClient: SupabaseClient;

  constructor(supabaseClient: SupabaseClient) {
    this._supabaseClient = supabaseClient;
  }

  async getById(id: string) {
    try {
      if (!id) {
        throw new Error("ID must be provided!");
      }

      const { data, error } = await this._supabaseClient
        .from("markdowns")
        .select("*")
        .filter("id", "eq", id);

      if (error) {
        throw new Error(error.message);
      }

      return data.map((markdown) => new Markdown(markdown));
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("Unknown error");
    }
  }

  async getAll() {
    try {
      const { data, error } = await this._supabaseClient
        .from("markdowns")
        .select("*");

      if (error) {
        throw new Error(error.message);
      }

      return data.map((markdown) => new Markdown(markdown));
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("Unknown error");
    }
  }

  async create(markdown: Markdown) {
    try {
      const { id, name, content } = markdown;

      // Generate an error when the file name is empty
      if (!name) {
        useCallMessage("File name cannot be empty!");
        throw new Error("File name cannot be empty!");
      }

      const { data: user } = await this._supabaseClient.auth.getUser();

      const { data, error } = await this._supabaseClient
        .from("markdowns")
        .insert({
          user_id: user.user?.id,
          id,
          name,
          content,
        });

      if (error) {
        throw new Error(error.message);
      }

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

      throw new Error("Unknown error");
    }
  }

  async delete(markdown: Markdown) {
    const { id } = markdown;

    if (!id) {
      throw new Error("ID must be provided");
    }

    const { error } = await this._supabaseClient
      .from("markdowns")
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }
  }
}

export default MarkdownService;
