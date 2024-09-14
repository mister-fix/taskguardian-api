# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[unreleased]: https://github.com/mister-fix/taskguardian-api/compare/v0.0.2...HEAD
[0.0.2]: https://github.com/mister-fix/taskguardian-api/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/mister-fix/taskguardian-api/releases/tag/v0.0.1
