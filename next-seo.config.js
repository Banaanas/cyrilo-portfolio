export default {
  openGraph: {
    type: "website",
    locale: "en",
    images: [
      {
        url: "https://cyrilo.dev/images/CyriLogo-OG.png",
        width: 1200,
        height: 630,
        alt: "Cyrilo Logo",
      },
    ],
  },
  languageAlternates: [
    {
      hrefLang: "en",
      href: "https://www.cyrilo.dev/",
    },
    {
      hrefLang: "fr",
      href: "https://www.cyrilo.dev/fr/",
    },
    {
      hrefLang: "es",
      href: "https://www.cyrilo.dev/es/",
    },
  ],
  additionalMetaTags: [
    {
      property: "og:locale:alternate",
      content: "fr",
    },
    {
      property: "og:locale:alternate",
      content: "es",
    },
  ],
};
