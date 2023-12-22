/**
 * @type import("eslint-define-config").ESLintConfig
 */
const config = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb/rules/react",
    "airbnb/rules/react-a11y",
    "airbnb/hooks",
  ],
  plugins: ["react", "react-hooks"],
  rules: {
    "unicorn/prevent-abbreviations": [
      "error",
      {
        allowList: {
          prop: true,
          Prop: true,
          props: true,
          Props: true,
        },
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "function-declaration",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/hook-use-state": ["warn", { allowDestructuredState: true }],
    "react/iframe-missing-sandbox": "error",
    "react/jsx-filename-extension": ["error", { extensions: ["jsx", "tsx"] }],
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: false,
      },
    ],
    "react/jsx-no-constructed-context-values": "warn",
    "react/jsx-no-leaked-render": [
      "warn",
      { validStrategies: ["coerce", "ternary"] },
    ],
    "react/jsx-no-script-url": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/jsx-one-expression-per-line": ["error", { allow: "none" }],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        multiline: "first",
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        locale: "auto",
      },
    ],
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/no-array-index-key": "error",
    "react/no-danger": "warn",
    "react/no-object-type-as-default-prop": "warn",
    "react/no-unescaped-entities": "error",
    "react/no-unstable-nested-components": "warn",
  },
};

module.exports = config;
