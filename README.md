# Eslint Config

## Getting Started

First, install the package with your preferred package manager

```sh
npm install @tbhesswebber/eslint-config
```

_:warning:Note: make sure that you install the peer dependencies for whichever configuration you are using (see below)._

Next, add the config to your Eslint config via the `extends` property (see the official documentation [here](https://eslint.org/docs/latest/extend/shareable-configs#npm-scoped-modules)).

```json
{
    "extends": ["@tbhesswebber"]
}
```

If using a named config, make sure that you use `@tbhesswebber/eslint-config/<config-name>` 


## Configs

### Default

This is the default config and it is the same as using `all`, but without `@tbhesswebber/eslint-plugin/format`, which you should apply yourself (if you want to use it).  Effectively, you should use this configuration if you have additional configurations to extend that take precedence over this one and need to apply the formatting rules at the end.

#### Peer Dependencies

You can manually install all of the peer dependencies from every configuration below _or_ use the [`install-peerdeps`](https://www.npmjs.com/package/install-peerdeps) package via `npx install-peerdeps -D @tbhesswebber/eslint-config`

### `core`

This configuration is intended to be a complete "extends" clause for a standard JavaScript project (see note for TypeScript or React projects).  This is generally satisfactory for getting a project bootstrapped quickly, kicking the can of loosening the configuration or making it more targeted to the current project down the road.

_:warning:Note: If you are using TypeScript and/or React, you should use the default configuration alongside the `typescript`/`react` and `format` configurations instead of this one._

#### Peer Dependencies

- `eslint-plugin-unicorn`
- `eslint-config-airbnb-base`
- `eslint-plugin-eslint-comments`
- `eslint-plugin-import`

### `format`

This config is exclusively for formatting configurations, which should appear last in your `extends` array.

#### Peer Dependencies

- `eslint-plugin-prettier`
- `eslint-config-prettier`
- `prettier`

### `typescript`

This config enables a _highly_ opinionated set of rules for TypeScript. This will be much slower to run without a cache, which shouldn't be an issue for IDEs, but may have an impact on CI costs.

#### Peer Dependencies

- `typescript`
- `@typescript-eslint/parser`
- `@typescript-eslint/plugin`
- `eslint-import-resolver-typescript`
- `eslint-plugin-import`

### `react`

This config enables a number of rules for React projects, including warnings on possible security and performance problems. 

#### Peer Dependencies

- `eslint-config-airbnb`
- `eslint-plugin-import`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-jsx-a11y`
