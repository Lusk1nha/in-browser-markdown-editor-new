import { v4 as uuidv4 } from 'uuid';
import { MarkdownsRepo } from "../repositories/markdowns";

interface ICreateMarkdownRequest {
  name: string | null;
  content: string | null;
}

class CreateMarkdown {
  async execute({ name, content }: ICreateMarkdownRequest) {
    try {
      const markdownsRepo = new MarkdownsRepo();

      // Generate error when file name is empty
      if (!name) {
        throw new Error('File name cannot be empty!')
      }

      // const markdownAlreadyExists = await markdownsRepo.get(name);

      // // Generate if already exists a markdown with this name
      // if (markdownAlreadyExists) {
      //   throw new Error('This markdown name already exists!')
      // }

      const id = uuidv4();
      const date = new Date();
      const dateInISO = date.toISOString();

      // Create markdown with name and content
      const markdown = await markdownsRepo.create({
        id,
        name,
        content,
        created: dateInISO
      })

      return markdown
    } catch (error) {
      if (error instanceof Error) {
        throw error.message
      }

      throw new Error('Unexpected error!')
    }
  }
}

export { CreateMarkdown }