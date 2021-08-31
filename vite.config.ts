import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import TsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/aleclarson/vite-tsconfig-paths
    TsconfigPaths({
      loose: true,
    }),
    Vue(),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
  ],
  server: {
    proxy: {
      "/graphql": {
        target: process.env.CI
          ? `http://${process.env.API_HOST}:${process.env.API_PORT}`
          : "http://localhost:4000",
        changeOrigin: true,
        secure: false,
        timeout: 6000,
        proxyTimeout: 6000,
      },
    },
  },
});
