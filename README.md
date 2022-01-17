# Svelte CLI
A CLI for building Cybernetically Enhanced Web apps with Svelte

## Getting started

### How to get `svelte-cli` in your local system

_This concept of `svelte-cli` is still not officially supported, so currently there is no npm package for this._

Follow these steps:

1. Run `npx degit thesyedbasim/svelte-cli` to get a copy of this repo in your local machine
2. Navigate to the repo directory in your local machine
3. Install all dependencies using `npm install` (or similar with `pnpm`, `yarn`)
4. Run `npm run build` (or similar with `pnpm`, `yarn`)
5. Install `svelte-cli` globally by using `npm install -g svelte-cli` (or similar with `pnpm`, `yarn`)

## `svelte-cli` usage

### Basic usage

Initialize project:
```bash
svelte create my-app
```
Default directory will be the current working directory.

### Customize usage by passing flags

Initialize project using TypeScript:
```bash
svelte create --ts
```

By default, `svelte-cli` uses `npm` to install the dependencies. You can change this by passing `-p` flag:
```bash
svelte create -p yarn
```

```bash
svelte create -p pnpm
```
Combine `-p` and `--ts` flag
```bash
svelte create -p pnpm --ts
```

### Get help from the command line

Use the `-h` or `--help` flag to get info directly in your terminal:
```bash
svelte --help
```

Or get info for a specific command:
```bash
svelte create --help
```

## LICENSE

This project is [MIT](https://github.com/thesyedbasim/svelte-cli/blob/main/LICENSE) licensed.
