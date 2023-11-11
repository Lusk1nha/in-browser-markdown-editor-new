import { v4 as uuidv4 } from "uuid";

// Markdown class representing a markdown document
class Markdown {
  // Properties of a Markdown document
  id: string;
  name: string;
  content: string;
  created: string;
  lastModified: string;

  // Constructor to initialize a new Markdown document
  constructor(name: string, content: string) {
    // Generate a unique identifier for the document
    const id = uuidv4();
    
    // Get the current timestamp for creation and last modification
    const timestamp = new Date();
    
    // Initialize properties with provided values and timestamps
    this.id = id;
    this.name = name;
    this.content = content;
    this.created = timestamp.toISOString();
    this.lastModified = timestamp.toISOString();
  }
}

export default Markdown;
