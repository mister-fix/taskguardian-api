// Prettier configuration
module.exports = {
  tabWidth: 2,
  printWidth: 80,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.{cmp,page}',
      options: { parser: 'html' },
    },
    {
      files: '.*hbs',
      options: {
        printWidth: 120,
      },
    },
  ],
  plugins: [
    'prettier-plugin-jsdoc',
    'prettier-plugin-import-sort',
    'prettier-plugin-organize-imports',
    'prettier-plugin-sort-imports',
  ],
};
