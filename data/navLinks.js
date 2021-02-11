// All NavLinks
import englishTranslation from "./translation/english-translation";
import frenchTranslation from "./translation/french-translation";
import spanishTranslation from "./translation/spanish-translation";

const navLinks = [
  {
    names: {
      english: englishTranslation.navLinks.home,
      french: frenchTranslation.navLinks.home,
      spanish: spanishTranslation.navLinks.home,
    },
    href: "/",
    scrollName: "hero-banner-scroll",
  },
  {
    names: {
      english: englishTranslation.navLinks.projects,
      french: frenchTranslation.navLinks.projects,
      spanish: spanishTranslation.navLinks.projects,
    },
    href: "/#projects",
    scrollName: "projects-scroll",
  },
  {
    names: {
      english: englishTranslation.navLinks.aboutMe,
      french: frenchTranslation.navLinks.aboutMe,
      spanish: spanishTranslation.navLinks.aboutMe,
    },
    href: "/#about-me",
    scrollName: "about-me-scroll",
  },
  {
    names: {
      english: englishTranslation.navLinks.contact,
      french: frenchTranslation.navLinks.contact,
      spanish: spanishTranslation.navLinks.contact,
    },
    href: "/#contact",
    scrollName: "contact-scroll",
  },
];

export default navLinks;
