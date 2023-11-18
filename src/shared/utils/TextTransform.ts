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

function getLinkInText(text: string) {
  // Escape special characters in the dynamic text and link
  const pattern = /\[([^\]]*)\]\(([^)]*)\)/g;

  const match = pattern.exec(text);

  if (match?.length === 0 || !match) {
    return [] as unknown as RegExpExecArray;
  }

  return match;
}

function isLink(text: string): boolean {
  const match = getLinkInText(text);

  return match?.length > 0;
}

export { getLines, isANumberAndDot, getLinkInText, isLink };
