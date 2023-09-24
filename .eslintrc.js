module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error'],
    'no-new-symbol': 'error',
    'no-trailing-spaces': ['error'],
    'no-undef': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'prefer-const': 2,
    semi: 2,
    'space-in-parens': ['error', 'never'],
    strict: [2, 'never'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'no-console': 'warn',
    'linebreak-style': ['error', 'unix'],
    'import/prefer-default-export': ['off'],
    'no-shadow': 'off',
    'spaced-comment': [
      'off',
      'never',
      {
        exceptions: [],
        markers: null,
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'],
          balanced: true,
        },
      },
    ],
    'no-use-before-define': ['off'],
    radix: ['off', 'always'],
    'new-cap': [
      'off',
      {
        newIsCap: true,
        capIsNew: false,
        newIsCapExceptions: [],
        newIsCapExceptionPattern: null,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
        capIsNewExceptionPattern: null,
        properties: true,
      },
    ],
    'max-lines-per-function': [
      'error',
      { max: 100, skipBlankLines: true, skipComments: true },
    ],
    'max-len': [
      'error',
      { code: 150, ignoreStrings: true, tabWidth: 6, comments: 100 },
    ],
  },
};
