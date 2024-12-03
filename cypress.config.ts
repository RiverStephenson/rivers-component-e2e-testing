import { defineConfig } from "cypress";
import viteConfig from './vite.config';

export default defineConfig({
  component: {
    port: 3001,
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig,
    },
    specPattern: "cypress/component/**/*.cy.{ts,tsx}",
  },
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
    },
  }
});
