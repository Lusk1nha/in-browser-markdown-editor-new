import { LargeExpressions, StartExpressions } from "../enums/Expressions";

import { TitleComponent } from "../../components/TextRender/TitleComponent/TitleComponent";
import { TextComponent } from "../../components/TextRender/TextComponent/TextComponent";

import { createComponent } from "./ReactComponents";
import { BreakLineComponent } from "../../components/TextRender/BreakLineComponent";
import { SubTitleComponent } from "../../components/TextRender/SubTitleComponent/SubTitleComponent";
import { BoldSubTitleComponent } from "../../components/TextRender/BoldSubTitleComponent/BoldSubTitleComponent";
import { HighlightBoldSubTitleComponent } from "../../components/TextRender/HighlightBoldSubtTitleComponent/HighlightBoldSubtTitleComponent";
import { BlockQuoteComponent } from "../../components/TextRender/BlockQuoteComponent/BlockQuoteComponent";
import { CodeBlockComponent } from "../../components/TextRender/CodeBlockComponent/CodeBlockComponent";
import { BulletListComponent } from "../../components/TextRender/BulletListComponent/BulletListComponent";
import { ExpressionType, mapExpressions } from "./Expressions";
import { NumberedListComponent } from "../../components/TextRender/NumberedListComponent/NumberedListComponent";

/**
 * Splits the input text into an array of lines.
 *
 * @param {string} text - The input text to be processed.
 * @returns {string[]} An array containing non-empty lines from the input text.
 */
function getLines(text: string): string[] {
  const textByBreakLine = text.split("\n");

  const mapBreakLines = textByBreakLine.map((line) =>
    line === "" ? "\n" : line
  );

  // Return the array of lines.
  return mapBreakLines;
}

/**
 * Processes an array of strings, extracts start expressions, and maps them to corresponding React components.
 *
 * @param {string[]} textInArray - An array of strings to be processed for start expressions.
 * @returns {React.Component[]} An array of React components mapped from the start expressions in the input array.
 */
function mountExpressions(textInArray: string[]) {
  const expressions: ExpressionType[] = mapExpressions(textInArray);

  // Map each object containing the identified starting expression and text to a React component.
  const components = expressions.map((expression, index) =>
    expressionsMapByComponent(expression, index)
  );

  // Return the array of React components.
  return {
    expressions,
    components,
  };
}

/**
 * Maps a text to a React component based on the provided starting expression.
 *
 * @param {string} text - The text to be associated with the React component.
 * @param {StartExpressions} expression - The starting expression to determine the type of React component.
 * @param {number} index - The index of the text, often used as a key for React components.
 * @returns {React.Component} A React component with the specified text and default props.
 */
function expressionsMapByComponent(expression: ExpressionType, index: number) {
  const { text, type } = expression;

  // Define default props for the React components.
  const defaultProps = {
    children: text,
    key: index,
  };

  // Use a switch statement to determine the type of starting expression and map it to the corresponding React component.
  switch (type) {
    case StartExpressions.Title:
      return createComponent(TitleComponent, defaultProps);

    case StartExpressions.Subtitle:
      return createComponent(SubTitleComponent, defaultProps);

    case StartExpressions.LargeBoldSubTitle:
      return createComponent(BoldSubTitleComponent, {
        ...defaultProps,
        size: "large",
      });

    case StartExpressions.MediumBoldSubTitle:
      return createComponent(BoldSubTitleComponent, {
        ...defaultProps,
        size: "medium",
      });

    case StartExpressions.SmallBoldSubTitle:
      return createComponent(BoldSubTitleComponent, {
        ...defaultProps,
        size: "small",
      });

    case StartExpressions.HighlightBoldSubTitle:
      return createComponent(HighlightBoldSubTitleComponent, defaultProps);

    case StartExpressions.BlockQuote:
      return createComponent(BlockQuoteComponent, defaultProps);

    case StartExpressions.BreakLine:
      return createComponent(BreakLineComponent, defaultProps);

    case LargeExpressions.CodeBlock:
      return createComponent(CodeBlockComponent, defaultProps);

    case LargeExpressions.BulletList:
      return createComponent(BulletListComponent, {
        ...defaultProps,
        list: text,
      });

    case LargeExpressions.NumberedList:
      return createComponent(NumberedListComponent, {
       ...defaultProps,
        list: text,
      });

    default:
      return createComponent(TextComponent, defaultProps);
  }
}

export { getLines, mountExpressions };
