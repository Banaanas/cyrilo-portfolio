/* Return the translation file */

import frenchTranslation from "../data/translation/french-translation";
import spanishTranslation from "../data/translation/spanish-translation";
import englishTranslation from "../data/translation/english-translation";

// Return Language Translation File
const setLanguageTranslation = (routerObject) => {
  // Determine Locale
  const { locale } = routerObject;

  // Determine which translation file to return
  if (locale === "fr") return frenchTranslation;
  if (locale === "es") return spanishTranslation;
  return englishTranslation;
};

export default setLanguageTranslation;
