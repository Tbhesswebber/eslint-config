/**
 * @type import("eslint-define-config").ESLintConfig
 */
const config = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:unicorn/recommended',
    '@tbhesswebber/eslint-config/components/comments',
    '@tbhesswebber/eslint-config/components/imports',
  ],
  plugins: ['unicorn'],
  rules: {
    'unicorn/custom-error-definition': 'error',
    'unicorn/no-keyword-prefix': 'warn',
    'unicorn/no-null': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
        allowNamedExports: false,
      },
    ],
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-array-for-each': 'off',
  },
  overrides: [
    {
      files: ['**/*.config.js'],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['*-env.d.ts'],
      rules: {
        'unicorn/prevent-abbreviations': 'off',
      },
    },
    {
      files: ['**/*.tsx', '**/*.jsx'],
      rules: {
        'unicorn/filename-case': ['error', { case: 'camelCase' }],
        'unicorn/prevent-abbreviations': [
          'error',
          { allowList: { Props: true } },
        ],
      },
    },
  ],
};

module.exports = config;
