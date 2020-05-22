# @acme/calculator

Calculator packages.

- [@acme/calculator](./packages/calculator/README.md): A simple calculator.
- [@acme/calculator.cli](./packages/calculator.cli/README.md): A simple calculator [CLI].
- [@acme/calculator.logging](./packages/calculator.logging/README.md): A simple calculator with logging.

## Monorepo

This project is a monorepo, using yarn workspaces.
Packages can be grouped under a `packages` directory, or `packages.*` directory.
The packages will be published independently.

## Commitizen

This project has been initialised with [commitizen](https://www.npmjs.com/package/commitizen):

```console
$ yarn add commitizen --dev
$ yarn commitizen init cz-conventional-changelog --yarn --dev --exact
```

**NOTE**: The `workspaces` key in `package.json` had to be temporarily changed (eg. to `.workspaces`) before running the commands, to fool `yarn` into thinking
this isn't a `workspaces` repository.

A simple way to commit with commitizen is:

```console
$ git commit -m ""
```

commitizen will then prompt for a standard commit message.

## Changesets

This project has been initialised with [@changesets/cli](https://www.npmjs.com/package/@changesets/cli):

```console
$ yarn add @changesets/cli --dev
$ yarn changeset init
```

### Workflow

On a non-master branch, a Contributor initialises one or more changesets (answering the provided questions):

```console
$ yarn changeset
$ git add .
$ git commit -m "docs: changeset"
```

On completion of the work, the Contributor versions the changeset:

```console
$ yarn changeset version
$ git add .
$ git commit -m "docs: changeset"
```

The Contributor then makes a pull request.

A Maintainer reviews the pull request and once the code is satisfactory, merges the pull request into master.

When the project is ready for a new release, the Maintainer checks out master, builds and publishes the changeset:

```console
$ yarn build
$ yarn changeset publish
$ git push --follow-tags
```
