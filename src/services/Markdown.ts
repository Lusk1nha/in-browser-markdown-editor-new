import { v4 as uuidv4 } from "uuid";

// Markdown class representing a markdown document

type MarkdownParams = {
  userId?: string;
  id?: string;
  name: string;
  content?: string;
  created?: string;
  lastModified?: string;
};
class Markdown {
  // Properties of a Markdown document
  userId?: string;
  id: string;
  name: string;
  content?: string;
  created: string;
  lastModified: string;

  // Constructor to initialize a new Markdown document
  constructor(props: MarkdownParams) {
    let { id, userId, name, content, created, lastModified } = props;

    // Get the current timestamp for creation and last modification
    const timestamp = new Date();

    if (!id) {
      // Generate a unique identifier for the document
      id = uuidv4();
    }

    // Initialize properties with provided values and timestamps
    this.userId = userId;
    this.id = id;
    this.name = name;
    this.content = content;
    this.created = created ? created : timestamp.toISOString();
    this.lastModified = lastModified ? lastModified : timestamp.toISOString();
  }
}

export default Markdown;
