/* Return string to serve as navLinks.names[stringProperty] in order
 * to determine the translation */

const translateNavlinks = (routerObject) => {
  // Determine Locale
  const { locale } = routerObject;

  // Determine which string will serve as navLinks.names[stringProperty]
  if (locale === "en") return "french";
  if (locale === "fr") return "spanish";
  return "english";
};

