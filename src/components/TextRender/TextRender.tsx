import { getExpressions, getLines } from "../../shared/utils/TextTransform";
import { StyledTextRender } from "./styles";

interface ITextRenderProps {
  content: string;
}

function TextRender({ content }: ITextRenderProps) {
  const textByLines = getLines(content);

  const components = getExpressions(textByLines);
  console.log({ components });

  function renderComponents(components: any[]) {
    return components.map((component) => {
      return component;
    });
  }

  return <StyledTextRender>{renderComponents(components)}</StyledTextRender>;
}

export { TextRender };
