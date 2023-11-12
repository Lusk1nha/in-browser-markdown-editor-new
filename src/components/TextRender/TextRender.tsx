import { BlockQuoteComponent } from "./BlockQuoteComponent/BlockQuoteComponent";
import { BoldSubTitleComponent } from "./BoldSubTitleComponent/BoldSubTitleComponent";
import { BulletListComponent } from "./BulletListComponent/BulletListComponent";
import { CodeBlockComponent } from "./CodeBlockComponent/CodeBlockComponent";
import { HighlightBoldSubTitleComponent } from "./HighlightBoldSubtTitleComponent/HighlightBoldSubtTitleComponent";
import { NumericListComponent } from "./NumericListComponent/NumericListComponent";
import { SubTitleComponent } from "./SubTitleComponent/SubTitleComponent";
import { TextComponent } from "./TextComponent/TextComponent";
import { TitleComponent } from "./TitleComponent/TitleComponent";
import { StyledTextRender } from "./styles";

interface ITextRenderProps {
  content: string;
}

function TextRender({}: ITextRenderProps) {
  return (
    <StyledTextRender>
      <TitleComponent>Welcome to Markdown</TitleComponent>

      <TextComponent>
        Markdown is a lightweight markup language that you can use to add
        formatting elements to plaintext text documents.
      </TextComponent>

      <SubTitleComponent>How to use this?</SubTitleComponent>

      <NumericListComponent
        list={[
          "Write markdown in the markdown editor window",
          "See the rendered markdown in the preview window",
        ]}
      />

      <BoldSubTitleComponent>Features</BoldSubTitleComponent>

      <BulletListComponent
        list={[
          "Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists",
          "Name and save the document to access again later",
          "Choose between Light or Dark mode depending on your preference",
        ]}
      />

      <BlockQuoteComponent>
        This is an example of a blockquote. If you would like to learn more
        about markdown syntax, you can visit this markdown cheatsheet
      </BlockQuoteComponent>

      <BoldSubTitleComponent size="medium">Headings</BoldSubTitleComponent>

      <TextComponent>
        To create a heading, add the hash sign (#) before the heading. The
        number of number signs you use should correspond to the heading level.
        You'll see in this guide that we've used all six heading levels (not
        necessarily in the correct way you should use headings!) to illustrate
        how they should look.
      </TextComponent>

      <BoldSubTitleComponent size="small">Lists</BoldSubTitleComponent>

      <TextComponent>
        You can see examples of ordered and unordered lists above.
      </TextComponent>

      <HighlightBoldSubTitleComponent>
        Code Blocks
      </HighlightBoldSubTitleComponent>

      <TextComponent>
        {`This markdown editor allows for inline-code snippets, like this: \`
        <p>I'm inline</p>\`. It also allows for larger code blocks like this:`}
      </TextComponent>

      <CodeBlockComponent>
        {`<main>
          <h1>This is a larger code block</h1>
        </main>`}
      </CodeBlockComponent>
    </StyledTextRender>
  );
}

export { TextRender };
