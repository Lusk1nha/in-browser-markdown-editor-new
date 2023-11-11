/**
 * Returns a promise that resolves after a specified delay.
 * @param {number} delay - The delay in milliseconds.
 * @returns {Promise<void>} - A promise that resolves after the specified delay.
 */
function timeout(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export { timeout };
