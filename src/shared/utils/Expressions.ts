import {
  InternalExpressions,
  LargeExpressions,
  StartExpressions,
} from "../enums/Expressions";

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

import { NumberedListComponent } from "../../components/TextRender/NumberedListComponent/NumberedListComponent";
import {
  getLines,
  getLinkInText,
  isANumberAndDot,
  isLink,
} from "./TextTransform";
import { CodeStringComponent } from "../../components/TextRender/CodeStringComponent/CodeStringComponent";
import { ReactElement, JSXElementConstructor } from "react";
import { LinkStringComponent } from "../../components/TextRender/LinkStringComponent/LinkStringComponent";

type UnionExpressions =
  | LargeExpressions
  | StartExpressions
  | InternalExpressions;

type ExpressionType = {
  text: (
    | string
    | ReactElement<{}, string | JSXElementConstructor<any>>
    | null
  )[];
  type: UnionExpressions;
  list?: string[];
  url?: string;
  end?: number;
};

/**
 * Maps expressions in an array of strings to a structured format.
 *
 * @param {string[]} textInArray - An array of strings to be processed for expressions.
 * @returns {ExpressionType[]} An array of structured expressions.
 */
function mapExpressions(textInArray: string[]): ExpressionType[] {
  // Initialize an array to store the structured expressions.
  const expressions: ExpressionType[] = [];

  // Initialize the current index for iteration.
  let currentIndex = 0;

  // Iterate through each line in the array.
  while (textInArray?.length !== 0) {
    try {
      // Get the current line.
      const line = textInArray[0];

      // Search for start expressions in the current line.
      const findStartExpressions = searchStartExpression(line);

      // Search for large expressions in the current line.
      const findLargeExpressions = searchLargeExpression(line);

      // Check if the line contains start expressions or large expressions.
      const isStartExpression = findStartExpressions?.length > 0;
      const isLargeExpressions = findLargeExpressions?.length > 0;

      // If the line does not contain start or large expressions, treat it as simple text.
      if (!isStartExpression && !isLargeExpressions) {
        expressions.push({
          text: line.split(""),
          type: StartExpressions.Text,
        });

        textInArray.shift();

        continue;
      }

      // If the line contains start expressions, convert and push them to the expressions array.
      if (isStartExpression) {
        const type = findStartExpressions[0];
        const startExpression = convertForStartExpressions(type, line);
        expressions.push(startExpression);

        textInArray.shift();

        // Continue to the next iteration.
        continue;
      }

      // If the line contains large expressions, convert and push them to the expressions array.
      if (isLargeExpressions) {
        const type = findLargeExpressions[0];
        const largeExpression = convertLargeExpressions(
          type,
          line,
          textInArray
        );

        // Remove the processed lines from the textInArray.
        if (typeof largeExpression?.end === "number") {
          textInArray = textInArray.slice(largeExpression.end);
        }

        // Push the converted large expression to the expressions array.
        expressions.push(largeExpression);

        // Continue to the next iteration.
        continue;
      }
    } catch (error) {
      // Log any errors during the iteration.
      console.error(error);
    } finally {
      // Move to the next index in the array for the next iteration.
      currentIndex++;
    }
  }

  // Return the array of structured expressions.
  return expressions;
}

/**
 * Searches for potential start expressions at the beginning of a given text.
 *
 * @param {string} text - The input text to be checked for start expressions.
 * @returns {StartExpressions[]} An array of start expressions found at the beginning of the text.
 */
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
  const matchedExpressions = startExpressions.filter((expression) =>
    matchExpression(text, expression)
  );

  // Return the array of matched start expressions.
  return matchedExpressions;
}

/**
 * Searches for potential large expressions at the beginning of a given text.
 *
 * @param {string} text - The input text to be checked for large expressions.
 * @returns {LargeExpressions[]} An array of large expressions found at the beginning of the text.
 */
function searchLargeExpression(text: string): LargeExpressions[] {
  // Define an array of possible large expressions.
  const largeExpressions = [
    LargeExpressions.BulletList,
    LargeExpressions.NumberedList,
    LargeExpressions.CodeBlock,
  ];

  // Filter the largeExpression array to find the expression(s) that match the start of the input text.
  const matchedExpressions = largeExpressions.filter((expression) => {
    if (expression === LargeExpressions.NumberedList) {
      return isANumberAndDot(text);
    }

    return matchExpression(text, expression);
  });

  // Return the array of matched large expressions.
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
    text: textWithoutExpression.split(""),
    type,
  };
}

/**
 * Converts specific types of large expressions in an array of strings to a structured format.
 *
 * @param {LargeExpressions} type - The type of large expression to convert.
 * @param {string} text - The original text associated with the large expression.
 * @param {string[]} textInArray - An array of strings containing the entire text.
 * @returns {ExpressionType} A structured representation of the converted large expression.
 */
function convertLargeExpressions(
  type: LargeExpressions,
  text: string,
  textInArray: string[]
): ExpressionType {
  switch (type) {
    case LargeExpressions.BulletList: {
      // Find the index of the first line that doesn't match the BulletList expression.
      const nonBullet = textInArray.findIndex(
        (text) => !matchExpression(text, LargeExpressions.BulletList)
      );

      // Check if there are no non-BulletList lines after the current index.
      if (nonBullet === -1) {
        // Extract a subarray from the current index to the end of the textInArray.
        const list = textInArray?.map((text) =>
          removeExpressionFromText(text, type)
        );

        // Return a structured representation of the BulletList expression.
        return {
          text: text.split(""),
          list,
          type,
          end: textInArray.length,
        };
      } else {
        // Extract a subarray from the current index to the index of the first non-BulletList line.
        const list = textInArray
          ?.slice(0, nonBullet)
          ?.map((text) => removeExpressionFromText(text, type));

        // Return a structured representation of the BulletList expression.
        return {
          text: text.split(""),
          list,
          type,
          end: nonBullet,
        };
      }
    }

    case LargeExpressions.NumberedList: {
      // Find the index of the first line that doesn't match the BulletList expression.
      const nonNumeric = textInArray.findIndex((text) => {
        // Split the text by spaces to isolate the first word.
        const textBySpaces = text.split(" ");
        return !isANumberAndDot(textBySpaces[0]);
      });

      // Check if there are no non-BulletList lines after the current index.
      if (nonNumeric === -1) {
        // Extract a subarray from the current index to the end of the textInArray.
        const list = textInArray?.map((text) =>
          removeExpressionFromText(text, type)
        );

        // Return a structured representation of the BulletList expression.
        return {
          text: text.split(""),
          list,
          type,
          end: textInArray.length,
        };
      } else {
        // Extract a subarray from the current index to the index of the first non-BulletList line.
        const list = textInArray
          ?.slice(0, nonNumeric)
          ?.map((text) => removeExpressionFromText(text, type));

        // Return a structured representation of the BulletList expression.
        return {
          text: text.split(""),
          list,
          type,
          end: nonNumeric,
        };
      }
    }

    case LargeExpressions.CodeBlock: {
      // Find the index of the closing CodeBlock.
      const findCloseCodeBlock = textInArray.findIndex(
        (text, index) => text === LargeExpressions.CodeBlock && index !== 0
      );

      // If there is no closing CodeBlock, return the original text as a simple text expression.
      if (findCloseCodeBlock === -1) {
        return {
          text: text.split(""),
          type: StartExpressions.Text,
          end: 1,
        };
      }

      // Return a structured representation of the CodeBlock expression.
      return {
        text: textInArray.slice(1, findCloseCodeBlock).join("\n").split(""),
        type,
        end: findCloseCodeBlock + 1,
      };
    }

    // If the type is not BulletList, NumberedList, or CodeBlock, return an empty ExpressionType.
    default: {
      return { type: StartExpressions.Text, text: [""] };
    }
  }
}

/**
 * Removes a specified expression from the beginning of a given text and trims leading spaces.
 *
 * @param {string} text - The input text from which the expression is to be removed.
 * @param {UnionExpressions} type - The expression to be removed from the text.
 * @returns {string} The text without the specified expression, with leading spaces trimmed.
 */
function removeExpressionFromText(
  text: string,
  type: UnionExpressions
): string {
  // Use the replace method to remove the specified expression and trim any leading spaces.
  const textWithoutExpression = text.replace(type, "").trimStart();

  // Return the modified text.
  return textWithoutExpression;
}

/**
 * Checks if the first word in a text matches a specified expression.
 *
 * @param {string} text - The input text to be checked.
 * @param {UnionExpressions} expression - The expression to be matched.
 * @returns {boolean} True if the first word in the text matches the specified expression, otherwise false.
 */
function matchExpression(text: string, expression: UnionExpressions): boolean {
  // Split the text by spaces to isolate the first word.
  const textBySpaces = text.split(" ");

  // Check if the first word in the text matches the specified expression.
  return textBySpaces[0] === expression;
}

/**
 * Processes an array of strings, extracts start expressions, and maps them to corresponding React components.
 *
 * @param {string} content - A string to be processed for start expressions.
 * @returns {React.Component[]} An array of React components mapped from the start expressions in the input array.
 */
function mountExpressions(content: string) {
  // Convert the content to a string array separated by break lines.
  const textByLines = getLines(content);

  // Map the lines and convert them to Expressions.
  const expressions: ExpressionType[] = mapExpressions(textByLines)?.map(
    (expression, index) => {
      const { text } = expression;
      const joinedText = text.join("");

      const findCodeStart = text.indexOf(InternalExpressions.Code);
      const findCodeEnd = text.indexOf(
        InternalExpressions.Code,
        findCodeStart + 1
      );

      if (findCodeStart !== -1 && findCodeEnd !== -1) {
        const codeText = getCodeString(
          expression,
          index,
          findCodeStart,
          findCodeEnd
        );

        return {
          ...expression,
          text: codeText,
        };
      }

      const hasLink = isLink(joinedText);

      if (hasLink) {
        const linkText = getLinkString(expression, index);

        return {
          ...expression,
          text: linkText,
        };
      }

      return expression;
    }
  );

  // Map each expression containing the identified expression type and text to a React component.
  const components = expressions.map((expression, index) =>
    expressionsMapByComponent(expression, index)
  );

  // Return the array of React components and expressions.
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
  const { text, list, type } = expression;

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
        list,
      });

    case LargeExpressions.NumberedList:
      return createComponent(NumberedListComponent, {
        ...defaultProps,
        list,
      });

    default:
      return createComponent(TextComponent, defaultProps);
  }
}

function internalExpressionMapByComponent(
  expression: ExpressionType,
  index: number
) {
  const { text, type } = expression;

  const defaultProps = {
    children: text,
    key: index,
  };

  switch (type) {
    case InternalExpressions.Code:
      return createComponent(CodeStringComponent, defaultProps);

    case InternalExpressions.Link:
      return createComponent(LinkStringComponent, {
        ...defaultProps,
        url: expression.url,
      });

    default:
      return null;
  }
}

function getCodeString(
  expression: ExpressionType,
  componentIndex: number,
  startIndex: number,
  endIndex: number
) {
  const { text } = expression;

  const joinedText = text.slice(startIndex + 1, endIndex);

  const internalExpression: ExpressionType = {
    text: joinedText,
    type: InternalExpressions.Code,
  };

  const component = internalExpressionMapByComponent(
    internalExpression,
    componentIndex
  );

  text.splice(startIndex, endIndex - startIndex + 1, component);

  return text;
}

function getLinkString(expression: ExpressionType, componentIndex: number) {
  const { text } = expression;

  const match = getLinkInText(text.join(""));
  const [fullText, linkText, url] = match;

  const startIndex = match.index;
  const endIndex = startIndex + fullText?.length;

  const internalExpression: ExpressionType = {
    text: linkText.split(""),
    type: InternalExpressions.Link,
    url,
  };

  const component = internalExpressionMapByComponent(
    internalExpression,
    componentIndex
  );

  text.splice(startIndex, endIndex - startIndex + 1, component);

  return text;
}

export { mountExpressions, mapExpressions, ExpressionType };
