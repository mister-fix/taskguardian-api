// Import 'path' package for use in defining module aliases
const path = require('path');

// ESLint configuration options
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:jsdoc/recommended',
    'plugin:@cspell/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  ignorePatterns: ['dist', 'out', 'node_modules', '.eslintrc.{js,cjs}'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.', 'src'],
        extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
      },
      alias: {
        map: [
          ['@', path.resolve(__dirname, './src/')],
          ['@config', path.resolve(__dirname, './src/config/')],
          ['@controllers', path.resolve(__dirname, './src/controllers/')],
          ['@db', path.resolve(__dirname, './src/db/')],
          ['@middleware', path.resolve(__dirname, './src/middleware/')],
          ['@models', path.resolve(__dirname, './src/models/')],
          ['@routes', path.resolve(__dirname, './src/routes/')],
          ['@services', path.resolve(__dirname, './src/services/')],
          ['@utils', path.resolve(__dirname, './src/utils/')],
          ['@validators', path.resolve(__dirname, './src/validators/')],
          ['@tests', path.resolve(__dirname, './tests/')],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  plugins: ['prettier', 'unused-imports', 'jsdoc', 'import', 'jest'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: true }],
    '@cspell/spellchecker': ['warn', { checkComments: false, autoFix: true }],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    eqeqeq: 'error',
    'linebreak-style': ['error', 'unix'],
    'max-len': [
      'error',
      {
        code: 80,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'object-curly-spacing': ['error', 'always'],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'no-trailing-spaces': 'error',
    'no-console': 'off',
    'no-unused-vars': [
      'off',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    // 'import/namespace': 'off', // Disabled globally for now
    // 'import/named': 'off', // Disabled globally for now
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
