// Helper function to check if a string represents a true value
function isTrue(value: string | undefined | null) {
  if (typeof value === "boolean") {
    return value;
  }

  return value?.toLowerCase() === "true";
}

export { isTrue };
