module.exports = {
  extends: ["./core.js"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    es6: true,
  },
  rules: {
    "unicorn/prefer-module": "off",
  },
};
