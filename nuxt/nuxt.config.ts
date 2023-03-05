import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  css: ["~/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};

export default config;
