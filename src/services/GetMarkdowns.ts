import Markdown from "./Markdown";
import { LocalStorage } from "../repositories/localStorage";

// GetMarkdowns class responsible for retrieving Markdown documents
class GetMarkdowns {
  // Async method to execute the retrieval of Markdown documents
  async execute(): Promise<Markdown[]> {
    try {
      const storage = new LocalStorage("markdowns-app"); // Create an instance of the LocalStorage class for interacting with storage
      let markdowns = (await storage.get("markdowns")) as Markdown[]; // Retrieve Markdown documents from storage

      if (!markdowns) {
        markdowns = [];
      }

      return markdowns; // Return the retrieved Markdown documents
    } catch (error) {
      if (error instanceof Error) {
        throw error.message; // If the error is an instance of Error, throw its message
      }

      throw new Error("Unexpected error!"); // If the error is not an instance of Error, throw a generic error message
    }
  }
}

// Export the GetMarkdowns class for external use
export { GetMarkdowns };
