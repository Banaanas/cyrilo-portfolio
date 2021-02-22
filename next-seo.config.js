const siteDescription = "Cyrilo Dev | Fullstack JavaScript Developper | France";

export default {
  title: "Cyrilo Dev",
  description: siteDescription,
  openGraph: {
    type: "website",
    url: "https://www.cyrilo.dev/",
    name: "Cyrilo Dev",
    title: "Cyrilo Dev",
    description: siteDescription,
    locale: "en",
    images: [
      {
        url: "https://cyrilo.dev/images/CyriLogo-OG.png",
        width: 1200,
        height: 630,
        alt: "Og Image Alt",
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
