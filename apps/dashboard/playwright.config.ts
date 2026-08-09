import { defineConfig } from "@playwright/test";

export default defineConfig({
  testMatch: "a11y.spec.ts",
  timeout: 30_000,
  use: {
    baseURL: process.env.A11Y_BASE_URL ?? "http://127.0.0.1:4329",
  },
});
