/**
 * @type import("eslint-define-config").ESLintConfig
 */
const config = {
  extends: ["plugin:import/recommended"],
  plugins: ["import"],
  rules: {
    "import/newline-after-import": [
      "error",
      { count: 1, considerComments: false },
    ],
    "import/no-anonymous-default-export": [
      "error",
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: false,
        allowNew: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    "import/no-deprecated": ["error"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.[jt]s", "**/*.spec.[jt]s"],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "import/no-useless-path-segments": [
      "error",
      { noUselessIndex: true, commonjs: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};

module.exports = config;
