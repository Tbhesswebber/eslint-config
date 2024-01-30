module.exports = {
  extends: ['@tbhesswebber/eslint-config/default'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    es6: true,
  },
  rules: {
    'unicorn/prefer-module': 'off',
  },
};
