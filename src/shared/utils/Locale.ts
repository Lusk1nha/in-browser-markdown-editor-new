import { format } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";

/**
 * Gets the locale for formatting based on the user's preference or a default.
 * @param {string} [defaultLocale="en-US"] - The default locale to be used if the user's locale is not available.
 * @returns {Object} The locale object for formatting.
 */
function getLocale(defaultLocale = "en-US") {
  // Retrieve the user's locale from the browser, or use the default
  const userLocale = navigator.language ?? defaultLocale;

  // Determine the locale to be used for formatting based on user's preference
  const locale = userLocale === "pt-BR" ? ptBR : enUS;

  // Return the determined locale
  return locale;
}

/**
 * Formats a date string or Date object into a human-readable label.
 * @param {Date | string} date - The date to be formatted.
 * @returns {string} The formatted date label.
 */
function formatDateToLocale(isoDate: string) {
  const locale = getLocale();

  // Format the date using the specified format and locale
  const formattedLabel = format(new Date(isoDate), "dd MMMM yyyy", {
    locale,
  });

  // Return the formatted date label
  return formattedLabel;
}

export { formatDateToLocale, getLocale };
