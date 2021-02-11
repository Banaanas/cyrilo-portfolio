/* Return string to serve as navLinks.names[stringProperty] in order
 * to determine the translation */

const setLanguageProperty = (routerObject) => {
  // Determine Locale
  const { locale } = routerObject;

  // Determine which string will serve as navLinks.names[stringProperty]
  if (locale === "fr") return "french";
  if (locale === "es") return "spanish";
  return "english";
};

export default setLanguageProperty;
