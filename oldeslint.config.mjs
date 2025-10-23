import js from "@eslint/js"
import globals from 'globals';
import airbnb from "eslint-config-airbnb-typescript";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier"
import tsParser from '@typescript-eslint/parser';

export default [{
  plugins: {
    airbnb,
    prettier: prettierPlugin
  }
},
  {
  ignores: ["node_modules, dist"]
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021
    }
    }
  },
  {
    files: ['**/*.{ts, js, mjs}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    rules: {
      ...eslintConfigPrettier.rules,
    "prettier/prettier": "error",
    "no-plusplus": "off",
    "no-console": "warn",
    "max-len": ["warn", { "code": 120 }],
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "import/prefer-default-export": "off",
    }

  }
]