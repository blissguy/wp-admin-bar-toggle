import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: {
        chrome: "readonly",
        console: "readonly",
        document: "readonly",
        URL: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "error",

      // General code quality
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: "error",

      // Chrome extension specific
      "no-console": "off", // Console is needed for extension debugging
    },
  },
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
