/**
 * @type import("eslint-define-config").ESLintConfig
 */
const config = {
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:unicorn/recommended",
    "@tbhesswebber/eslint-plugin/components/comments",
    "@tbhesswebber/eslint-plugin/components/imports",
  ],
  plugins: ["unicorn"],
  rules: {
    "unicorn/custom-error-definition": "error",
    "unicorn/no-keyword-prefix": "warn"
  },
};

module.exports = config;
