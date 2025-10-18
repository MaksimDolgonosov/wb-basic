import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
// import airbnbTypescript from 'eslint-config-airbnb-typescript';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

import globals from 'globals';
import airbnb from "eslint-config-airbnb-typescript";
import eslintConfigPrettier from "eslint-config-prettier"

export default [
  {
 plugins: {
    airbnb,
    prettier: prettierPlugin
  },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021
    }
    }
  },
 
  js.configs.recommended,
  {
    files: ['**/*.ts']
  },
  {
    rules: {
      ...prettier.rules,
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error',
    },
  },
  {
    ignores: ['node_modules/', 'dist/', 'build/'],
  },
];


// import js from "@eslint/js"
// import globals from 'globals';
// import airbnb from "eslint-config-airbnb-typescript";
// import prettierPlugin, { languages, rules } from "eslint-plugin-prettier";
// import eslintConfigPrettier from "eslint-config-prettier"



// export default [{
//   plugins: {
//     airbnb,
//     prettier: prettierPlugin
//   }
// },
//   {
//   ignores: ["node_modules, dist"]
//   },
//   js.configs.recommended,
  
//   {
//     languageOptions: {
//       globals: {
//         ...globals.node,
//         ...globals.browser,
//         ...globals.es2021
//     }
//     }
//   },
//   {
//     files: ['**/*.{ts, js}'],
//     rules: {
//       ...eslintConfigPrettier.rules,
//        "prettier/prettier": "error",
//     "no-plusplus": "off",
//     "no-console": "warn",
//     "max-len": ["warn", { "code": 120 }],
//     "indent": [
//       "warn",
//       2,
//       {
//         "SwitchCase": 1
//       }
//     ],
//     "import/prefer-default-export": "off",
//     }
    
//   }
// ]