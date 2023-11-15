import { StartExpressions } from "../enums/Expressions";

import { TitleComponent } from "../../components/TextRender/TitleComponent/TitleComponent";
import { TextComponent } from "../../components/TextRender/TextComponent/TextComponent";

import { createComponent } from "./ReactComponents";

/**
 * Splits the input text into an array of lines, removing empty lines.
 *
 * @param {string} text - The input text to be processed.
 * @returns {string[]} An array containing non-empty lines from the input text.
 */
function getLines(text: string): string[] {
  const textByBreakLine = text.split("\n");

  // Filter out empty lines by removing lines that contain only whitespace characters.
  const textWithoutEmptyString = textByBreakLine.filter((line) => line.trim());

  // Return the array of non-empty lines.
  return textWithoutEmptyString;
}

function getExpressions(textInArray: string[]) {
  const textWithStartExpression = textInArray.map((text) => {
    const { text: newText, expression } = checkForStartExpressions(text);

    console.log({ newText, expression });

    return {
      text: newText,
      expression,
    };
  });

  const components = textWithStartExpression.map(
    ({ text, expression }, index) =>
      startExpressionsMapByComponent(text, expression, index)
  );

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
    StartExpressions.BoldSubTitle,
    StartExpressions.BulletList,
    StartExpressions.NumberedList,
  ];

  // Filter the startExpressions array to find the expression(s) that match the start of the input text.
  const matchedExpressions = startExpressions.filter((expression) =>
    text.startsWith(expression)
  );

  // If no expression matches the start of the text, default to StartExpressions.Text.
  if (!matchedExpressions?.length) {
    return {
      text,
      expression: StartExpressions.Text,
    };
  }

  // Get the first matched expression.
  const expressionFounded = matchedExpressions[0];

  // Remove the identified expression from the start of the text.
  const textWithoutExpression = text.slice(text.indexOf(expressionFounded));

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

    default:
      // If the expression is not Title, use TextComponent with the provided text and default props.
      return createComponent(TextComponent, defaultProps);
  }
}

export { getLines, getExpressions };
