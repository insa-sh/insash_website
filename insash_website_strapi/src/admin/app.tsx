import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: [
      // 'ar',
      "fr",
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    theme: {
      light: {
        colors: {
          primary100: "#fff0fa",
          primary500: "#D4566F",
          primary600: "#DE7F92",
          primary700: "#DE7F92",

          buttonPrimary500: "#D4566F",
          buttonPrimary600: "#DE7F92",
        },
      },
      dark: {
        colors: {
          primary500: "#D4566F",
          primary600: "#DE7F92",
          primary700: "#DE7F92",

          buttonPrimary500: "#D4566F",
          buttonPrimary600: "#DE7F92",
        },
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
