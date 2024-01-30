/**
 * @type import("eslint-define-config").ESLintConfig["rules"]
 */
const rules = {
  'import/extensions': [
    'error',
    'always',
    {
      ignorePackages: true,
      pattern: {
        css: 'always',
        js: 'never',
        json: 'always',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    },
  ],
  'import/newline-after-import': [
    'error',
    { count: 1, considerComments: false },
  ],
  'import/no-anonymous-default-export': [
    'error',
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
  'import/no-deprecated': ['error'],
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: ['**/*.test.[jt]s', '**/*.spec.[jt]s'],
      optionalDependencies: false,
      peerDependencies: false,
    },
  ],
  'import/no-useless-path-segments': [
    'error',
    { noUselessIndex: true, commonjs: true },
  ],
  'import/order': [
    'error',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'type',
      ],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
  'import/prefer-default-export': 'off',
};

/**
 * @type import("eslint-define-config").ESLintConfig
 */
const config = {
  extends: ['plugin:import/recommended'],
  plugins: ['import'],
  rules,
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:import/typescript'],
      rules: {
        ...rules,
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      },
      settings: {
        'import/resolver': {
          typescript: true,
          node: true,
        },
      },
    },
  ],
};

module.exports = config;
