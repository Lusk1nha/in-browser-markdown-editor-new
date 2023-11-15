import { StartExpressions } from "../enums/Expressions";

import { TitleComponent } from "../../components/TextRender/TitleComponent/TitleComponent";
import { TextComponent } from "../../components/TextRender/TextComponent/TextComponent";

import { createComponent } from "./ReactComponents";
import { BreakLineComponent } from "../../components/TextRender/BreakLineComponent";
import { SubTitleComponent } from "../../components/TextRender/SubTitleComponent/SubTitleComponent";
import { BoldSubTitleComponent } from "../../components/TextRender/BoldSubTitleComponent/BoldSubTitleComponent";
import { HighlightBoldSubTitleComponent } from "../../components/TextRender/HighlightBoldSubtTitleComponent/HighlightBoldSubtTitleComponent";

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
function getExpressions(textInArray: string[]) {
  // Map each text in the array to an object containing the identified starting expression and the remaining text after removing the expression.
  const textWithStartExpression = textInArray.map((text) => {
    const { text: newText, expression } = checkForStartExpressions(text);

    return {
      text: newText,
      expression,
    };
  });

  // Map each object containing the identified starting expression and text to a React component.
  const components = textWithStartExpression.map(
    ({ text, expression }, index) =>
      startExpressionsMapByComponent(text, expression, index)
  );

  // Return the array of React components.
  return components;
}

/**
 * Checks the start of a text to identify the type of starting expression.
 *
 * @param {string} text - The input text to be checked for starting expressions.
 * @returns {{ text: string; expression: StartExpressions; }} An object containing the identified starting expression type and the remaining text after removing the expression.
 */
function checkForStartExpressions(text: string): {
  text: string;
  expression: StartExpressions;
} {
  // Define an array of possible start expressions.
  const startExpressions = [
    StartExpressions.Title,
    StartExpressions.Subtitle,
    StartExpressions.BlockQuote,
    StartExpressions.LargeBoldSubTitle,
    StartExpressions.MediumBoldSubTitle,
    StartExpressions.SmallBoldSubTitle,
    StartExpressions.HighlightBoldSubTitle,
    StartExpressions.Text,
    StartExpressions.BreakLine,
  ];

  // Filter the startExpressions array to find the expression(s) that match the start of the input text.
  const matchedExpressions = startExpressions.filter((expression) => {
    const textBySpaces = text.split(" ");

    // Check if the first word in the text matches the current expression.
    return textBySpaces[0] === expression;
  });

  // Get the first matched expression.
  const expressionFounded = matchedExpressions[0];

  // Remove the identified expression from the start of the text and trim any leading spaces.
  const textWithoutExpression = text.replace(expressionFounded, "").trimStart();

  // Return an object with the identified starting expression and the remaining text after removing the expression.
  return {
    text: textWithoutExpression,
    expression: expressionFounded,
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
function startExpressionsMapByComponent(
  text: string,
  expression: StartExpressions,
  index: number
) {
  // Define default props for the React components.
  const defaultProps = {
    children: text,
    key: index,
  };

  // Use a switch statement to determine the type of starting expression and map it to the corresponding React component.
  switch (expression) {
    case StartExpressions.Title:
      // If the expression is Title, create a TitleComponent with the provided text and default props.
      return createComponent(TitleComponent, defaultProps);

    case StartExpressions.Subtitle:
      // If the expression is Subtitle, create a TitleComponent with the provided text and default props.
      return createComponent(SubTitleComponent, defaultProps);

    case StartExpressions.LargeBoldSubTitle:
      // If the expression is LargeBoldSubTitle, create a BoldSubTitleComponent with the provided text and default props.
      return createComponent(BoldSubTitleComponent, {
        ...defaultProps,
        size: "large",
      });

    case StartExpressions.MediumBoldSubTitle:
      // If the expression is MediumBoldSubTitle, create a BoldSubTitleComponent with the provided text and default props.
      return createComponent(BoldSubTitleComponent, {
        ...defaultProps,
        size: "medium",
      });

    case StartExpressions.SmallBoldSubTitle:
      // If the expression is SmallBoldSubTitle, create a BoldSubTitleComponent with the provided text and default props.
      return createComponent(BoldSubTitleComponent, {
        ...defaultProps,
        size: "small",
      });

    case StartExpressions.HighlightBoldSubTitle:
      return createComponent(HighlightBoldSubTitleComponent, defaultProps);

    case StartExpressions.BreakLine:
      return createComponent(BreakLineComponent);

    default:
      // If the expression is not Title, use TextComponent with the provided text and default props.
      return createComponent(TextComponent, defaultProps);
  }
}

export { getLines, getExpressions };
