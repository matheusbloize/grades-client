import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: "jsdom",
  transform: { "^.+\\.(t|j)sx?$": "@swc/jest" },
  setupFilesAfterEnv: ["<rootDir>/src/test/setup.ts"],
};

module.exports = createJestConfig(customJestConfig);
