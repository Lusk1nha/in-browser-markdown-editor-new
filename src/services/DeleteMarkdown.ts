import { MarkdownsRepo } from "../repositories/markdowns";
import Markdown from "./Markdown";

// Interface for the request object used in the DeleteMarkdown class
interface IDeleteMarkdownRequest {
  markdown: Markdown; // The Markdown object to be deleted
}

// DeleteMarkdown class responsible for deleting a Markdown document
class DeleteMarkdown {
  // Async method to execute the deletion of a Markdown document
  async execute({ markdown }: IDeleteMarkdownRequest) {
    try {
      const markdownsRepo = new MarkdownsRepo(); // Create an instance of the MarkdownsRepo class for interacting with storage
      const { id } = markdown; // Extract the ID from the provided Markdown object

      if (!id) {
        throw new Error("File ID cannot be empty!"); // Throw an error if the ID is empty or undefined
      }

      // Delete the Markdown document from storage using the MarkdownsRepo class
      await markdownsRepo.delete(id);
    } catch (error) {
      if (error instanceof Error) {
        throw error.message; // If the error is an instance of Error, throw its message
      }

      throw new Error("Unexpected error!"); // If the error is not an instance of Error, throw a generic error message
    }
  }
}

// Export the DeleteMarkdown class for external use
export { DeleteMarkdown };
