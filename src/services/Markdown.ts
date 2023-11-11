import { v4 as uuidv4 } from "uuid";

class Markdown {
  id: string;
  name: string;
  content: string;
  created: string;
  lastModified: string;

  constructor(name: string, content: string) {
    const id = uuidv4();
    const created = new Date();

    this.id = id;
    this.name = name;
    this.content = content;
    this.created = created.toISOString();
    this.lastModified = created.toISOString();
  }
}

export default Markdown;
