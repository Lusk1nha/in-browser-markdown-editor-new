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

type UnionExpressions = LargeExpressions | StartExpressions;

type ExpressionType = {
  text: string | string[];
  type: UnionExpressions;
  start?: number;
  end?: number;
};

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
  const expressions: ExpressionType[] = mapExpressions(textInArray);

  // Map each object containing the identified starting expression and text to a React component.
  const components = expressions.map((expression, index) =>
    expressionsMapByComponent(expression, index)
  );

  console.log({ expressions, components });

  // Return the array of React components.
  return components;
}

function mapExpressions(textInArray: string[]) {
  const expressions: ExpressionType[] = [];

  let currentIndex = 0;

  while (currentIndex < textInArray?.length) {
    try {
      const line = textInArray[currentIndex];

      const findStartExpressions = searchStartExpression(line);
      const findLargeExpressions = searchLargeExpression(line);

      const isStartExpression = findStartExpressions?.length > 0;
      const isLargeExpressions = findLargeExpressions?.length > 0;

      if (!isStartExpression && !isLargeExpressions) {
        expressions.push({
          text: line,
          type: StartExpressions.Text,
        });
      }

      if (isStartExpression) {
        const type = findStartExpressions[0];

        const startExpression = convertForStartExpressions(type, line);
        expressions.push(startExpression);

        continue;
      }

      if (isLargeExpressions) {
        const type = findLargeExpressions[0];

        const largeExpression = convertLargeExpressions(
          type,
          line,
          textInArray,
          currentIndex
        );

        if (
          typeof largeExpression?.start === "number" &&
          typeof largeExpression?.end === "number"
        ) {
          textInArray = [
            ...textInArray.slice(0, largeExpression.start),
            ...textInArray.slice(largeExpression.end),
          ];
        }

        expressions.push(largeExpression);

        continue;
      }
    } catch (error) {
      console.error(error);
    } finally {
      currentIndex++;
    }
  }

  return expressions;
}

function searchStartExpression(text: string): StartExpressions[] {
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

  return matchedExpressions;
}

function searchLargeExpression(text: string): LargeExpressions[] {
  const largeExpression = [
    LargeExpressions.BulletList,
    LargeExpressions.NumberedList,
    LargeExpressions.CodeBlock,
  ];

  // Filter the startExpressions array to find the expression(s) that match the start of the input text.
  const matchedExpressions = largeExpression.filter((expression) => {
    const textBySpaces = text.split(" ");

    // Check if the first word in the text matches the current expression.
    return textBySpaces[0] === expression;
  });

  return matchedExpressions;
}

/**
 * Checks the start of a text to identify the type of starting expression.
 *
 * @param {string} text - The input text to be checked for starting expressions.
 * @returns {{ text: string; expression: StartExpressions; }} An object containing the identified starting expression type and the remaining text after removing the expression.
 */
function convertForStartExpressions(
  type: StartExpressions,
  text: string
): ExpressionType {
  // Remove the identified expression from the start of the text and trim any leading spaces.
  const textWithoutExpression = removeExpressionFromText(text, type);

  // Return an object with the identified starting expression and the remaining text after removing the expression.
  return {
    text: textWithoutExpression,
    type,
  };
}

function convertLargeExpressions(
  type: LargeExpressions,
  text: string,
  textInArray: string[],
  currentIndex: number
): ExpressionType {
  const index = currentIndex + 1;
  const startArray = textInArray.slice(index);

  if (type === LargeExpressions.CodeBlock) {
    const findCloseCodeBlock = startArray.indexOf(LargeExpressions.CodeBlock);

    if (findCloseCodeBlock === -1) {
      return {
        text,
        type: StartExpressions.Text,
      };
    }

    return {
      text: textInArray.slice(index, index + findCloseCodeBlock).join("\n"),
      type,
      start: currentIndex,
      end: index + findCloseCodeBlock,
    };
  }

  if (type === LargeExpressions.BulletList) {
    const findNextBreakLine = startArray.indexOf(StartExpressions.BreakLine);

    if (findNextBreakLine === -1) {
      return {
        text,
        type: StartExpressions.Text,
      };
    }

    const list = textInArray
      ?.slice(currentIndex, currentIndex + findNextBreakLine + 1)
      ?.map((text) => removeExpressionFromText(text, type));

    return {
      text: list,
      type,
      start: currentIndex,
      end: index + findNextBreakLine + 1,
    };
  }

  return {} as ExpressionType;
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
      // If the expression is Title, create a TitleComponent with the provided text and default props.
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

    default:
      return createComponent(TextComponent, defaultProps);
  }
}

function removeExpressionFromText(text: string, type: UnionExpressions) {
  const textWithoutExpression = text.replace(type, "").trimStart();
  return textWithoutExpression;
}

export { getLines, getExpressions };
