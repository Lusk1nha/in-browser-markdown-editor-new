import {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { mountExpressions } from "../../shared/utils/Expressions";
import { StyledTextRender } from "./styles";

interface ITextRenderProps {
  content: string;
}

function TextRender({ content }: ITextRenderProps) {
  const [components, setComponents] = useState<
    ReactElement<{}, string | JSXElementConstructor<any>>[]
  >([]);

  useEffect(() => {
    const { components: mountedComponents } = mountExpressions(content);

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
