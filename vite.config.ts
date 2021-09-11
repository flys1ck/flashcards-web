import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import TsconfigPaths from "vite-tsconfig-paths";
import Components from "unplugin-vue-components/vite";

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
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ["src/components/common"],
      dts: "./src/components.d.ts",
    }),
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
    watch: {
      ignored: "./src/components.d.ts",
    },
  },
});
