import {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { getExpressions, getLines } from "../../shared/utils/TextTransform";
import { StyledTextRender } from "./styles";

interface ITextRenderProps {
  content: string;
}

function TextRender({ content }: ITextRenderProps) {
  const [components, setComponents] = useState<
    ReactElement<{}, string | JSXElementConstructor<any>>[]
  >([]);

  useEffect(() => {
    const textByLines = getLines(content);
    const expressionComponents = getExpressions(textByLines);

    setComponents(expressionComponents);
  }, [content]);

  function renderComponents(
    components: ReactElement<{}, string | JSXElementConstructor<any>>[]
  ) {
    return components.map((component) => {
      return component;
    });
  }

  return <StyledTextRender>{renderComponents(components)}</StyledTextRender>;
}

export { TextRender };
