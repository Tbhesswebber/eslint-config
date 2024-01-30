/**
 * @type import("eslint-define-config").ESLintConfig
 */
const config = {
  extends: ['plugin:eslint-comments/recommended'],
  plugins: [],
  rules: {
    'eslint-comments/no-use': [
      'error',
      {
        allow: ['eslint-disable-next-line', 'eslint-disable', 'eslint-enable'],
      },
    ],
    'eslint-comments/require-description': [
      'error',
      { ignore: ['eslint-enable'] },
    ],
  },
};

module.exports = config;
