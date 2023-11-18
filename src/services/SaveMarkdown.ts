import { useCallMessage } from "../hooks/useCallMessage";
import { MarkdownsRepo } from "../repositories/markdowns";

import Markdown from "./Markdown";

interface ISaveMarkdownRequest {
  markdown: Markdown;
}

class SaveMarkdown {
  // Save a Markdown document to the repository
  async execute({ markdown }: ISaveMarkdownRequest) {
    try {
      const markdownsRepo = new MarkdownsRepo();
      const { id, name, content, created, lastModified } = markdown;

      // Generate an error when the file name is empty
      if (!name) {
        useCallMessage("File name cannot be empty!");
        throw new Error("File name cannot be empty!");
      }

      // Create or save the Markdown document in the repository
      await markdownsRepo.create({
        id,
        name,
        content,
        created,
        lastModified,
      });

      // Return the saved Markdown document
      return markdown;
    } catch (error) {
      // Handle errors and throw a more specific error message
      if (error instanceof Error) {
        throw new Error(`Failed to save Markdown: ${error.message}`);
      }

      // Throw a generic error message for unexpected errors
      useCallMessage("Unexpected error while saving Markdown!");
      throw new Error("Unexpected error while saving Markdown!");
    }
  }
}

export { SaveMarkdown };
