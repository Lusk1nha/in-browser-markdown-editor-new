import { SupabaseClient } from "@supabase/supabase-js";
import Markdown from "../services/Markdown";
import { useEffect, useState } from "react";
import { getAll } from "../models/markdown";

const useMarkdowns = (supabase: SupabaseClient) => {
  const [markdowns, setMarkdowns] = useState<Markdown[]>([]);

  useEffect(() => {
    getMarkdowns();
  }, []);

  async function getMarkdowns() {
    const markdownsStorage = await getAll(supabase);
    setMarkdowns(markdownsStorage);
  }

  return markdowns;
};

export default useMarkdowns;
