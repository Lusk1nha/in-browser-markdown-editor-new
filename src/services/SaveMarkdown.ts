import { MarkdownsRepo } from "../repositories/markdowns";
import Markdown from "./Markdown";

interface ISaveMarkdownRequest {
  markdown: Markdown;
}

class SaveMarkdown {
  async execute({ markdown }: ISaveMarkdownRequest) {
    try {
      const markdownsRepo = new MarkdownsRepo();
      const { id, name, content, created, lastModified } = markdown;

      // Generate error when file name is empty
      if (!name) {
        throw new Error("File name cannot be empty!");
      }

      // Create markdown with name and content
      await markdownsRepo.create({
        id,
        name,
        content,
        created,
        lastModified,
      });

      return markdown;
    } catch (error) {
      if (error instanceof Error) {
        throw error.message;
      }

      throw new Error("Unexpected error!");
    }
  }
}

export { SaveMarkdown };
