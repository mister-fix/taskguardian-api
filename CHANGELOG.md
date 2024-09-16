# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 09/15/2024

- Docker support:
  - `Dockerfile` for containerizing the TaskGuardian API.
  - `.dockerignore` for ignoring unnecessary files in Docker builds.
- Fly.io deployment configurations:
  - `fly.toml` for deployment configuration on Fly.io.
  - `fly-deploy.yml` GitHub Actions workflow file to automate Fly.io deployments.
- New development dependency: `@flydotio/dockerfile`.
- Fly deployment and remote log viewing scripts in the `package.json` file.

### Updated

- [0.2.2] tag date from '09/14/2024' to '09/15/2024' in this `CHANGELOG.md` file.
- `README.md` file: expanded project structure tree to reflect the addition of the `.dockerignore`, `Dockerfile`, and `fly.toml` files in the root project directory.

## [0.2.2] - 09/15/2024

### Added

- Custom API console and file logging functionality with `winston` (`src/utils/logger.js`).
- HTTP Requests logging functionality with `winston` and `express-winston` packages (`src/middleware/requests-logger.js`).
- `src/config/` folder containing:
  - `allowed-origins.js` file, which has an array of whitelisted origin sources allowed to interact with the API.
  - `cors-options.js` file, which has the options defined for use with `cors`.
  - `csp-directives.js` file, which has the content security policy to use with `helmet`.
  - `morgan-format.js` file, which contains the defined custom format for use with `morgan`.
  - `express-winston-format.js` file, which contains the defined custom logging format for use with the `winston` and `express-winston` packages.
- `src/middleware` folder containing:
  - `error-handler.js` and `unknown-endpoint.js` files, custom error and unknown endpoint handling modules for the API.
- `src/controllers/` folder containing:
  - `index-controller.js` file, which contains the dedicated controller for the `index-router.js` file.
- `src/routes/` folder containing:
  - `main-router.js` file, which serves as the main API/application entrypoint router.
  - `index-router.js` file, which serves as the index API router.
- New dependencies: `@colors/colors`, `date-fns`, `express-winston`, `uuid`, `winston`, `winston-timestamp-colorize`.

### Updated

- Replaced `console.log` statements in the `index.js` file with custom `winston` logger for improved log management.
- `README.md` file: expanded project structure tree to reflect the addition of the `config/`, `controllers/`, `middleware/`, `routes/`, and `utils` folder in the `src/` directory.

## [0.2.1] - 09/14/2024

### Added

- New development dependency: `eslint-plugin-jest`, enabled plugin the ESLint configuration file.
- `tests/` folder for integration tests contains the `root-api.test.js` file with a simple API response test defined.
- `tests` path alias in the `_moduleAliases` block of the `package.json` file.
- `tests` path alias in the ESLint configuration file for import resolver settings.

### Updated

- `README.md` file: expanded project structure tree to reflect the addition of the `tests/` folder.

### Modified

- Express application instance import code in the `index.js` file.
- `@` path alias in the `_moduleAliases` block of the `package.json` file.

## [0.2.0] - 09/14/2024

### Added

- `src/app.js` file for Express app configuration.
- `index.js` file to serve as the entry point for the application.
- `nodemon.json` configuration file for Nodemon.
- New dependencies: `cors`, `cross-env`, `dotenv`, `express`, `express-async-errors`, `helmet`, `module-alias`, `morgan`.
- New development dependencies: `nodemon`.
- Added the Server `start` and `dev` scripts, `_moduleAliases` block, `type` and `main` properties in the package.json file.

### Updated

- `README.md` file: expanded project structure tree to reflect the addition of the `index.js` file, `src/` folder, and `nodemon.json` file.

## [0.1.2] - 09/14/2024

### Added

- ESLint import plugins: `eslint-import-resolver-alias`, `eslint-plugin-import`, and `eslint-plugin-unused-imports`.
- Prettier import plugins: `prettier-plugin-import-sort`, `prettier-plugin-organize-imports`, and `prettier-plugin-sort-imports`.
- Enabled the aforementioned plugins in their corresponding configuration files (`.eslintrc.js`, and `.prettierrc.js`).

## [0.1.1] - 09/14/2024

### Added

- Plop generators for file creation.
- Plop templates to support the new generators, found in the `plop-templates/` folder.

### Updated

- `README.md` file: expanded project structure tree to reflect the addition of the `plop-templates/` folder.

## [0.1.0] - 09/14/2024

### Added

- Installed `plop` as a development dependency.
- `plopfile.js` file to serve as the Plop configuration file.
- Plop script in the `package.json` file.

### Updated

- `README.md` file: expanded project structure tree to reflect the addition of the Plop configuration file.

## [0.0.4] - 09/14/2024

### Added

- `jsconfig.json` for JavaScript configuration.

### Updated

- Added section of the [0.0.3] tag: JSDoc installation note.
- `README.md` file: expanded project structure tree to reflect the addition of the `jsconfig.json` file.

## [0.0.3] - 09/14/2024

### Added

- Installed `jsdoc` as a development dependency.
- `eslint-plugin-jsdoc` and `prettier-plugin-jsdoc` plugins for ESLint and Prettier.
  - Enabled plugins in their corresponding configuration files.
- `jsdoc.config.json` file to serve as the JSDoc configuration file.
- JSDoc script in the `package.json` file.

### Updated

- `README.md` file: expanded project structure tree to reflect the addition of the `jsdoc.config.json` file.

## [0.0.2] - 09/14/2024

### Added

- `eslint-plugin-prettier` and `eslint-config-prettier` plugins for use in the ESLint configuration file and to fix the GitHub linting workflow.

### Modified

- `.husky/pre-commit` file: uncommented commitlint command.
- VSCode settings example file name under the added section of the [0.0.1] tag in this `CHANGELOG.md` file.

## [0.0.1] - 09/13/2024

### Added

- `.cspell/` folder containing custom spell checker dictionaries.
- `.github/` folder containing:
  - `stale.yml` configuration file.
  - `workflows/` subfolder for GitHub Actions workflows.
  - `ISSUE_TEMPLATE/` subfolder for GitHub issue templates.
- `.husky/` folder for managing Git hooks.
- `.vscode/` folder containing:
  - `extensions.json` listing recommended extensions.
  - `vscode-settings-example` for example VSCode settings that currently in use by contributors.
- `docs/` folder containing:
  - `SECURITY.md` for security guidelines.
  - `pull_request_template.md` for standard PR format.
  - `CODE_OF_CONDUCT.md` for contributor conduct.
  - `CONTRIBUTING.md` for contribution guidelines.
- `.commitlintrc.js` for enforcing commit message conventions.
- `.editorconfig` for code formatting consistency.
- `.eslintignore` for ignoring files in ESLint.
- `.eslintrc.js` for configuring ESLint rules.
- `.gitattributes` for Git file handling settings.
- `.gitignore` for ignoring files in Git.
- `.prettierignore` for ignoring files in Prettier.
- `.prettierrc` for configuring Prettier rules.
- `CHANGELOG.md` for tracking project and source code changes.
- `cspell.json` for configuring Code Spell Checker.
- `LICENSE` for project licensing.
- `logo.svg` and `logo-light.svg` for the project logos.
- `package.json` and `package-lock.json` for npm dependencies.
- `README.md` for project documentation.

[unreleased]: https://github.com/mister-fix/taskguardian-api/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/mister-fix/taskguardian-api/compare/v0.2.2...v0.3.0
[0.2.2]: https://github.com/mister-fix/taskguardian-api/compare/v0.2.2...v0.2.2
[0.2.1]: https://github.com/mister-fix/taskguardian-api/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/mister-fix/taskguardian-api/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/mister-fix/taskguardian-api/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/mister-fix/taskguardian-api/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/mister-fix/taskguardian-api/compare/v0.0.4...v0.1.0
[0.0.4]: https://github.com/mister-fix/taskguardian-api/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/mister-fix/taskguardian-api/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/mister-fix/taskguardian-api/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/mister-fix/taskguardian-api/releases/tag/v0.0.1
