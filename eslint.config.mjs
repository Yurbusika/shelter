import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    plugins: {
      prettier: eslintPluginPrettier
    }
  },
  {
    ignores: ['node_modules']
  },
  {
    files: ["**/*.js"], 
    languageOptions: {sourceType: "script"},
    rules: {
      ...eslintConfigPrettier.rules
    }
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
];