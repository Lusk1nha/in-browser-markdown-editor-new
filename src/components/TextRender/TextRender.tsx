import {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { mountExpressions, getLines } from "../../shared/utils/TextTransform";
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
    const { components: mountedComponents } = mountExpressions(textByLines);
    
    setComponents(mountedComponents);
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
