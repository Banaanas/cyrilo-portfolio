module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

/* module.exports = (phase, { defaultConfig }) => {
  return {
    i18n: {
      locales: ["en", "es", "fr"],
      defaultLocale: "en",
    },
  };
}; */
