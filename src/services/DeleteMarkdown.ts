import { MarkdownsRepo } from "../repositories/markdowns";
import Markdown from "./Markdown";

interface IDeleteMarkdownRequest {
  markdown: Markdown;
}

class DeleteMarkdown {
  async execute({ markdown }: IDeleteMarkdownRequest) {
    try {
      const markdownsRepo = new MarkdownsRepo();
      const { id } = markdown;

      if (!id) {
        throw new Error("File ID cannot be empty!");
      }

      // Edit markdown with name and content
      await markdownsRepo.delete(id);
    } catch (error) {
      if (error instanceof Error) {
        throw error.message;
      }

      throw new Error("Unexpected error!");
    }
  }
}

export { DeleteMarkdown };
