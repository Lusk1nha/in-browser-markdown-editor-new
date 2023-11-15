import { LargeExpressions, StartExpressions } from "../enums/Expressions";

type UnionExpressions = LargeExpressions | StartExpressions;

type ExpressionType = {
  text: string | string[];
  type: UnionExpressions;
  start?: number;
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
  let copyTextInArray = [...textInArray];

  // Iterate through each line in the array.
  while (textInArray?.length !== 0 && currentIndex < copyTextInArray?.length) {
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
          text: line,
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
  const largeExpression = [
    LargeExpressions.BulletList,
    LargeExpressions.NumberedList,
    LargeExpressions.CodeBlock,
  ];

  // Filter the largeExpression array to find the expression(s) that match the start of the input text.
  const matchedExpressions = largeExpression.filter((expression) => {
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
    text: textWithoutExpression,
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
          text: list,
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
          text: list,
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

      console.log({ textInArray, nonNumeric });

      // Check if there are no non-BulletList lines after the current index.
      if (nonNumeric === -1) {
        // Extract a subarray from the current index to the end of the textInArray.
        const list = textInArray?.map((text) =>
          removeExpressionFromText(text, type)
        );

        // Return a structured representation of the BulletList expression.
        return {
          text: list,
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
          text: list,
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
          text,
          type: StartExpressions.Text,
          end: 1,
        };
      }

      // Return a structured representation of the CodeBlock expression.
      return {
        text: textInArray.slice(1, findCloseCodeBlock).join("\n"),
        type,
        end: findCloseCodeBlock + 1,
      };
    }

    // If the type is not BulletList, NumberedList, or CodeBlock, return an empty ExpressionType.
    default: {
      return { type: StartExpressions.Text, text: "" };
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
 * Checks if a given text starts with one or more digits followed by a dot.
 *
 * @param {string} text - The input text to be checked.
 * @returns {boolean} True if the text starts with digits followed by a dot, otherwise false.
 */
function isANumberAndDot(text: string): boolean {
  // Define a regular expression pattern for one or more digits followed by a dot.
  const pattern = /^[0-9]+\./;

  // Test if the text matches the specified pattern.
  return pattern.test(text);
}

export { mapExpressions, ExpressionType };
