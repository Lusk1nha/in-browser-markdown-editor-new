import { MarkdownsRepo } from "../repositories/markdowns";
import Markdown from "./Markdown";

// Interface for the request object used in the EditMarkdown class
interface IEditMarkdownRequest {
  markdown: Markdown; // The Markdown object to be edited
}

// EditMarkdown class responsible for editing a Markdown document
class EditMarkdown {
  // Async method to execute the editing of a Markdown document
  async execute({ markdown }: IEditMarkdownRequest) {
    try {
      const markdownsRepo = new MarkdownsRepo(); // Create an instance of the MarkdownsRepo class for interacting with storage
      const { id, name, content, created } = markdown; // Extract properties from the provided Markdown object

      if (!id) {
        throw new Error("File ID cannot be empty!"); // Throw an error if the ID is empty or undefined
      }

      // Generate error when file name is empty
      if (!name) {
        throw new Error("File name cannot be empty!"); // Throw an error if the name is empty or undefined
      }

      const now = new Date();

      // Edit markdown with updated name, content, and lastModified timestamp
      await markdownsRepo.edit(id, {
        id,
        name,
        content,
        created,
        lastModified: now.toISOString(),
      });

      return markdown; // Return the updated Markdown object after editing
    } catch (error) {
      if (error instanceof Error) {
        throw error.message; // If the error is an instance of Error, throw its message
      }

      throw new Error("Unexpected error!"); // If the error is not an instance of Error, throw a generic error message
    }
  }
}

// Export the EditMarkdown class for external use
export { EditMarkdown };
