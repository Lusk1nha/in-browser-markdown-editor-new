import { MarkdownsRepo } from "../repositories/markdowns";
import Markdown from './Markdown';

interface IEditMarkdownRequest {
  markdown: Markdown;
}

class EditMarkdown {
  async execute({ markdown }: IEditMarkdownRequest) {
    try {
      const markdownsRepo = new MarkdownsRepo();
      const { id, name, content, created } = markdown;

      if (!id) {
        throw new Error('File ID cannot be empty!')
      }

      // Generate error when file name is empty
      if (!name) {
        throw new Error('File name cannot be empty!')
      }

      // Generate error when file content is empty
      if (!content) {
        throw new Error('File content cannot be empty!')
      }

      const now = new Date();

      // Edit markdown with name and content
      await markdownsRepo.edit(id, {
        id,
        name,
        content,
        created,
        lastModified: now.toISOString()
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

export { EditMarkdown }